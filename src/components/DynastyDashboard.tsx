import { useState } from "react";
import { DashboardHeader } from "./DashboardHeader";
import { TierGuide } from "./TierGuide";
import { PositionTabs } from "./PositionTabs";
import { PositionStats } from "./PositionStats";
import { PlayerRankingsTable } from "./PlayerRankingsTable";
import { DataStatus } from "./debug/DataStatus";
import { PlayerFormDialog } from "./PlayerFormDialog";
import { usePlayerData, type Player } from "@/hooks/usePlayerData";

export function DynastyDashboard() {
  const [selectedPosition, setSelectedPosition] = useState("QB");
  const [searchQuery, setSearchQuery] = useState("");
  
  const {
    players,
    loading,
    error,
    getPlayersByPosition,
    getVeteranPlayers,
    getYoungPlayers,
    searchPlayers,
    refetch,
    setPlayers,
  } = usePlayerData();

  const [isDirty, setIsDirty] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingPlayer, setEditingPlayer] = useState<Player | null>(null);

  const isVeteran = (p: Player) =>
    p.years_of_experience !== null && p.years_of_experience >= 2;

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleAddPlayer = () => {
    setEditingPlayer(null);
    setDialogOpen(true);
  };

  const handleEditPlayer = (player: Player) => {
    setEditingPlayer(player);
    setDialogOpen(true);
  };

  const handleSavePlayer = (player: Player) => {
    setPlayers(prev => {
      const exists = prev.some(p => p.player === player.player);
      if (exists) {
        return prev.map(p => (p.player === player.player ? player : p));
      }
      const veterans = prev.filter(isVeteran);
      const young = prev.filter(p => !isVeteran(p));
      if (isVeteran(player)) {
        return [...veterans, player, ...young];
      }
      return [...veterans, ...young, player];
    });
    setDialogOpen(false);
    setIsDirty(true);
  };

  const handleReorder = (updated: Player[], variant: "veterans" | "young") => {
    const matcher = (p: Player) =>
      variant === "veterans" ? isVeteran(p) : !isVeteran(p);
    setPlayers(prev => {
      const groupPlayers = prev.filter(matcher);
      const otherPlayers = prev.filter(p => !matcher(p));
      const idSet = new Set(updated.map(p => p.player));
      let i = 0;
      const newGroup = groupPlayers.map(p =>
        idSet.has(p.player) ? updated[i++] : p
      );
      if (variant === "veterans") {
        return [...newGroup, ...otherPlayers];
      }
      return [...otherPlayers, ...newGroup];
    });
    setIsDirty(true);
  };

  const handleClearAll = () => {
    if (window.confirm("This will remove all players. Continue?")) {
      setPlayers([]);
      setIsDirty(true);
    }
  };

  const handleSaveRankings = () => {
    const veterans = players
      .filter(isVeteran)
      .map((p, index) => ({ ...p, group: "veterans", rank: index + 1 }));
    const young = players
      .filter(p => !isVeteran(p))
      .map((p, index) => ({ ...p, group: "young", rank: index + 1 }));
    const all = [...veterans, ...young];
    if (all.length === 0) return;

    const headers = [
      "player",
      "pos",
      "ecr",
      "age",
      "rdr_team",
      "team_full",
      "years_of_experience",
      "group",
      "rank",
    ] as const;
    const escape = (val: unknown) =>
      `"${String(val ?? "").replace(/"/g, '""')}"`;
    const csv = [
      headers.map(escape).join(","),
      ...all.map((row) =>
        headers
          .map((h) => escape((row as Record<string, unknown>)[h]))
          .join(",")
      ),
    ].join("\n");

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "rankings.csv";
    a.click();
    URL.revokeObjectURL(url);
    setIsDirty(false);
  };

  const handleLoadRankings = () => {
    if (isDirty && !window.confirm("Unsaved changes will be lost. Continue?")) {
      return;
    }
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".csv";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = String(event.target?.result || "");
        const lines = text.trim().split(/\r?\n/);
        const header = lines.shift();
        if (!header) return;
        const headers = header
          .split(",")
          .map((h) => h.replace(/^"|"$/g, ""));
        const records = lines.map((line) => {
          const values = line.match(/(?:"[^"]*(?:""[^"]*)*"|[^,])+/g) || [];
          const obj: Record<string, string> = {};
          headers.forEach((h, i) => {
            const raw = values[i] || "";
            obj[h] = raw.replace(/^"|"$/g, "").replace(/""/g, '"');
          });
          return obj;
        });
        const parsed: (Player & { group: string; rank: number })[] = records.map(
          (r) => ({
            player: r.player,
            pos: r.pos,
            ecr: Number(r.ecr),
            age: Number(r.age),
            rdr_team: r.rdr_team,
            team_full: r.team_full,
            years_of_experience:
              r.years_of_experience === "" ? null : Number(r.years_of_experience),
            group: r.group,
            rank: Number(r.rank),
          })
        );
        parsed.sort((a, b) =>
          a.group === b.group ? a.rank - b.rank : a.group.localeCompare(b.group)
        );
        const cleaned: Player[] = parsed.map(({ group, rank, ...rest }) => rest);
        setPlayers(cleaned);
        setIsDirty(false);
      };
      reader.readAsText(file);
    };
    input.click();
  };

  const handleRetry = async () => {
    await refetch();
  };

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

  const positionPlayers = searchQuery
    ? searchPlayers(searchQuery).filter(p => selectedPosition === "ALL" ? true : p.pos === selectedPosition)
    : selectedPosition === "ALL"
      ? players
      : getPlayersByPosition(selectedPosition);
    
  const veteranPlayers = selectedPosition === "ALL"
    ? players.filter(isVeteran)
    : getVeteranPlayers(selectedPosition);

  const youngPlayers = selectedPosition === "ALL"
    ? players.filter(p => !isVeteran(p))
    : getYoungPlayers(selectedPosition);

  const filteredVeterans = searchQuery
    ? veteranPlayers.filter(p =>
        p.player.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : veteranPlayers;

  const filteredYoung = searchQuery
    ? youngPlayers.filter(p =>
        p.player.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : youngPlayers;

  return (
    <div className="min-h-screen bg-gradient-background">
      <div className="container mx-auto px-4 py-6 space-y-6">
        <DashboardHeader
          onSearch={handleSearch}
          onSaveRankings={handleSaveRankings}
          onLoadRankings={handleLoadRankings}
          onClearAll={handleClearAll}
        />
        
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
            onEditPlayer={handleEditPlayer}
            onReorder={list => handleReorder(list, "veterans")}
          />

          <PlayerRankingsTable
            title="Young Talent"
            subtitle="Rookies & Sophomores"
            players={filteredYoung}
            variant="young"
            onAddPlayer={handleAddPlayer}
            onEditPlayer={handleEditPlayer}
            onReorder={list => handleReorder(list, "young")}
          />
        </div>
      </div>
      <PlayerFormDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onSave={handleSavePlayer}
        player={editingPlayer ?? undefined}
      />
      <DataStatus />
    </div>
  );
}