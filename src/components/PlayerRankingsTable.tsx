import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

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

export function PlayerRankingsTable({ 
  title, 
  subtitle, 
  players, 
  variant,
  onAddPlayer 
}: PlayerRankingsTableProps) {
  const headerColor = variant === "veterans" ? "bg-veterans" : "bg-young-talent";
  
  return (
    <div className="bg-gradient-card rounded-lg shadow-card overflow-hidden">
      {/* Header */}
      <div className={`${headerColor} text-white p-4`}>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm opacity-90">{subtitle}</p>
      </div>

      {/* Table */}
      <div className="p-4">
        {players.length === 0 ? (
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
            <div className="grid grid-cols-6 gap-4 pb-3 mb-4 border-b border-border text-sm font-medium text-muted-foreground">
              <div>RANK</div>
              <div>PLAYER NAME</div>
              <div>TEAM</div>
              <div>TIER</div>
              <div>NOTES</div>
              <div></div>
            </div>

            {/* Table Rows */}
            <div className="space-y-2">
              {players.slice(0, 10).map((player, index) => (
                <div 
                  key={`${player.player}-${player.ecr}`}
                  className="grid grid-cols-6 gap-4 items-center py-3 hover:bg-muted/50 rounded-lg px-2 transition-colors"
                >
                  <div className="font-medium text-foreground">
                    {player.ecr || index + 1}
                  </div>
                  <div className="font-medium text-foreground">
                    {player.player}
                  </div>
                  <div className="text-muted-foreground">
                    {player.rdr_team}
                  </div>
                  <div>
                    <Badge variant="secondary" className="text-xs">
                      {getTierFromRank(player.ecr || index + 1)}
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