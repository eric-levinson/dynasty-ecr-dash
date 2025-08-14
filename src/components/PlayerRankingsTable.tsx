import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useEffect, useState, type DragEvent } from "react";

interface Player {
  player: string;
  pos: string;
  ecr: number;
  age: number;
  rdr_team: string;
  team_full: string;
  years_of_experience: number | null;
}

interface PlayerRankingsTableProps {
  title: string;
  subtitle: string;
  players: Player[];
  variant: "veterans" | "young";
  onAddPlayer: () => void;
}

const tierColors: Record<string, string> = {
  "Tier 1": "bg-yellow-100 text-tier-elite",
  "Tier 2": "bg-purple-100 text-tier-high-end",
  "Tier 3": "bg-green-100 text-tier-solid",
  "Tier 4": "bg-purple-50 text-tier-upside",
  "Tier 5": "bg-gray-100 text-tier-watch",
};

export function PlayerRankingsTable({
  title,
  subtitle,
  players,
  variant,
  onAddPlayer
}: PlayerRankingsTableProps) {
  const headerColor = variant === "veterans" ? "bg-veterans" : "bg-young-talent";

  // Maintain a local copy of players so we can reorder them
  const [playerList, setPlayerList] = useState<Player[]>(players);

  // When the incoming players prop changes (e.g. search or position change)
  // reset our local state to match the new list
  useEffect(() => {
    setPlayerList(players);
  }, [players]);

  const handleDragStart = (e: DragEvent<HTMLDivElement>, index: number) => {
    e.dataTransfer.setData("text/plain", String(index));
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>, dropIndex: number) => {
    const dragIndex = Number(e.dataTransfer.getData("text/plain"));
    if (Number.isNaN(dragIndex) || dragIndex === dropIndex) return;

    const updated = [...playerList];
    const [moved] = updated.splice(dragIndex, 1);
    updated.splice(dropIndex, 0, moved);
    setPlayerList(updated);
  };
  
  return (
    <div className="bg-gradient-card rounded-lg shadow-card overflow-hidden">
      {/* Header */}
      <div className={`${headerColor} text-white p-4`}>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm opacity-90">{subtitle}</p>
      </div>

      {/* Table */}
      <div className="p-4">
        {playerList.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground mb-4">No players found</p>
            <Button
              variant="outline"
              onClick={onAddPlayer}
              className="gap-2"
            >
              <Plus className="w-4 h-4" />
              Add Player
            </Button>
          </div>
        ) : (
          <>
            {/* Table Header */}
            <div className="grid grid-cols-8 gap-4 pb-3 mb-4 border-b border-border text-sm font-medium text-muted-foreground">
              <div>RANK</div>
              <div>PLAYER NAME</div>
              <div>POSITION</div>
              <div>AGE</div>
              <div>TEAM</div>
              <div>TIER</div>
              <div>NOTES</div>
              <div></div>
            </div>

            {/* Table Rows */}
            <div className="space-y-2">
              {playerList.slice(0, 300).map((player, index) => (
                <div
                  key={player.player}
                  draggable
                  onDragStart={e => handleDragStart(e, index)}
                  onDragOver={e => e.preventDefault()}
                  onDrop={e => handleDrop(e, index)}
                  className="grid grid-cols-8 gap-4 items-center py-3 hover:bg-muted/50 rounded-lg px-2 transition-colors cursor-move"
                >
                  <div className="font-medium text-foreground">
                    {index + 1}
                  </div>
                  <div className="font-medium text-foreground">
                    {player.player}
                  </div>
                  <div className="text-muted-foreground">
                    {player.pos}
                  </div>
                  <div className="text-muted-foreground">
                    {player.age}
                  </div>
                  <div className="text-muted-foreground">
                    {player.rdr_team || "No Team"}
                  </div>
                  <div>
                    <Badge
                      variant="secondary"
                      className={`text-xs ${tierColors[getTierFromRank(index + 1)]}`}
                    >
                      {getTierFromRank(index + 1)}
                    </Badge>
                  </div>
                  <div className="text-muted-foreground text-sm">
                    -
                  </div>
                  <div>
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Add Player Button */}
            <div className="pt-4 border-t border-border">
              <Button 
                variant="outline" 
                onClick={onAddPlayer}
                className="w-full gap-2 text-primary hover:text-primary-hover"
              >
                <Plus className="w-4 h-4" />
                Add Player
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function getTierFromRank(rank: number): string {
  if (rank <= 5) return "Tier 1";
  if (rank <= 15) return "Tier 2";
  if (rank <= 30) return "Tier 3";
  if (rank <= 50) return "Tier 4";
  return "Tier 5";
}