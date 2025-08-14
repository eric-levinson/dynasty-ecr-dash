import { useState, useEffect, useRef, type ChangeEvent } from "react";
import { DashboardHeader } from "./DashboardHeader";
import { TierGuide } from "./TierGuide";
import { PositionTabs } from "./PositionTabs";
import { PositionStats } from "./PositionStats";
import { PlayerRankingsTable } from "./PlayerRankingsTable";
import { DataStatus } from "./debug/DataStatus";
import { usePlayerData } from "@/hooks/usePlayerData";

interface Player {
  player: string;
  pos: string;
  ecr: number;
  age: number;
  rdr_team: string;
  team_full: string;
  years_of_experience: number | null;
}

export function DynastyDashboard() {
  const [selectedPosition, setSelectedPosition] = useState("QB");
  const [searchQuery, setSearchQuery] = useState("");
  const [veteranRanking, setVeteranRanking] = useState<Player[]>([]);
  const [youngRanking, setYoungRanking] = useState<Player[]>([]);
  const [isEdited, setIsEdited] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const { 
    players, 
    loading, 
    error,
    getPlayersByPosition,
    getVeteranPlayers,
    getYoungPlayers,
    searchPlayers,
    refetch
  } = usePlayerData();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleAddPlayer = () => {
    console.log("Add player functionality to be implemented");
  };

  const handleRetry = async () => {
    await refetch();
  };
  const positionPlayers = searchQuery
    ? searchPlayers(searchQuery).filter(p => selectedPosition === "ALL" ? true : p.pos === selectedPosition)
    : selectedPosition === "ALL"
      ? players
      : getPlayersByPosition(selectedPosition);
    
  const veteranPlayers = selectedPosition === "ALL"
    ? players.filter(p => p.years_of_experience !== null && p.years_of_experience >= 2)
    : getVeteranPlayers(selectedPosition);

  const youngPlayers = selectedPosition === "ALL"
    ? players.filter(p => p.years_of_experience === null || p.years_of_experience <= 1)
    : getYoungPlayers(selectedPosition);

  useEffect(() => {
    setVeteranRanking(veteranPlayers);
    setYoungRanking(youngPlayers);
    setIsEdited(false);
  }, [veteranPlayers, youngPlayers]);

  const filteredVeterans = searchQuery
    ? veteranRanking.filter(p => p.player.toLowerCase().includes(searchQuery.toLowerCase()))
    : veteranRanking;

  const filteredYoung = searchQuery
    ? youngRanking.filter(p => p.player.toLowerCase().includes(searchQuery.toLowerCase()))
    : youngRanking;

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-dynasty-purple border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading dynasty rankings...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-background flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="mb-4">
            <div className="text-6xl mb-4">⚠️</div>
            <h2 className="text-xl font-semibold text-foreground mb-2">Database Connection Issue</h2>
            <p className="text-destructive mb-4">{error}</p>
            <div className="text-sm text-muted-foreground mb-6">
              This usually happens when the database query takes too long.
              We're working with large datasets, so please try again.
            </div>
          </div>
          <div className="space-y-3">
            <button
              onClick={handleRetry}
              className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors block w-full"
            >
              Retry Connection
            </button>
            <button
              onClick={() => window.location.reload()}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Full Page Reload
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleReorderVeterans = (list: Player[]) => {
    setVeteranRanking(list);
    setIsEdited(true);
  };

  const handleReorderYoung = (list: Player[]) => {
    setYoungRanking(list);
    setIsEdited(true);
  };

  const handleSaveRankings = () => {
    const rows: string[][] = [[
      "rank",
      "player",
      "pos",
      "ecr",
      "age",
      "rdr_team",
      "team_full",
      "years_of_experience",
      "category"
    ]];
    veteranRanking.forEach((p, idx) => {
      rows.push([
        String(idx + 1),
        p.player,
        p.pos,
        String(p.ecr),
        String(p.age),
        p.rdr_team,
        p.team_full,
        p.years_of_experience === null ? "" : String(p.years_of_experience),
        "veterans"
      ]);
    });
    youngRanking.forEach((p, idx) => {
      rows.push([
        String(idx + 1),
        p.player,
        p.pos,
        String(p.ecr),
        String(p.age),
        p.rdr_team,
        p.team_full,
        p.years_of_experience === null ? "" : String(p.years_of_experience),
        "young"
      ]);
    });
    // eslint-disable-next-line no-useless-escape
    const csv = rows.map(r => r.map(v => `\"${v}\"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "rankings.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setIsEdited(false);
  };

  const handleLoadClick = () => {
    if (isEdited && !window.confirm("Loading new rankings will replace current data. Continue?")) {
      return;
    }
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = event => {
      const text = event.target?.result;
      if (typeof text !== "string") return;
      const lines = text.trim().split(/\r?\n/);
      const [headerLine, ...rows] = lines;
      const headers = headerLine.split(",").map(h => h.replace(/^"|"$/g, ""));
      const veterans: { player: Player; rank: number }[] = [];
      const young: { player: Player; rank: number }[] = [];
      rows.forEach(line => {
        if (!line.trim()) return;
        const values = line.split(",").map(v => v.replace(/^"|"$/g, ""));
        const entry: Record<string, string> = {};
        headers.forEach((h, i) => {
          entry[h] = values[i] || "";
        });
        const player: Player = {
          player: entry.player,
          pos: entry.pos,
          ecr: Number(entry.ecr),
          age: Number(entry.age),
          rdr_team: entry.rdr_team,
          team_full: entry.team_full,
          years_of_experience: entry.years_of_experience ? Number(entry.years_of_experience) : null
        };
        const rank = Number(entry.rank);
        if (entry.category === "veterans") {
          veterans.push({ player, rank });
        } else {
          young.push({ player, rank });
        }
      });
      setVeteranRanking(veterans.sort((a, b) => a.rank - b.rank).map(v => v.player));
      setYoungRanking(young.sort((a, b) => a.rank - b.rank).map(v => v.player));
      setIsEdited(false);
    };
    reader.readAsText(file);
    e.target.value = "";
  };

  return (
    <div className="min-h-screen bg-gradient-background">
      <div className="container mx-auto px-4 py-6 space-y-6">
        <DashboardHeader onSearch={handleSearch} onSave={handleSaveRankings} onLoad={handleLoadClick} />
        
        <TierGuide />
        
        <PositionTabs 
          selectedPosition={selectedPosition}
          onPositionChange={setSelectedPosition}
        />
        
        <PositionStats
          position={selectedPosition}
          totalCount={positionPlayers.length}
          veteransCount={veteranPlayers.length}
          youngCount={youngPlayers.length}
        />

        <div className="grid lg:grid-cols-2 gap-6">
          <PlayerRankingsTable
            title="Veterans"
            subtitle="3+ Years Experience"
            players={filteredVeterans}
            variant="veterans"
            onAddPlayer={handleAddPlayer}
            onReorder={handleReorderVeterans}
          />

          <PlayerRankingsTable
            title="Young Talent"
            subtitle="Rookies & Sophomores"
            players={filteredYoung}
            variant="young"
            onAddPlayer={handleAddPlayer}
            onReorder={handleReorderYoung}
          />
        </div>
        <input
          type="file"
          accept=".csv"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
      </div>
      <DataStatus />
    </div>
  );
}