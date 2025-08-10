import { useState } from "react";
import { DashboardHeader } from "./DashboardHeader";
import { TierGuide } from "./TierGuide";
import { PositionTabs } from "./PositionTabs";
import { PositionStats } from "./PositionStats";
import { PlayerRankingsTable } from "./PlayerRankingsTable";
import { usePlayerData } from "@/hooks/usePlayerData";

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
    searchPlayers
  } = usePlayerData();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleAddPlayer = () => {
    console.log("Add player functionality to be implemented");
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
        <div className="text-center">
          <p className="text-destructive mb-4">Error loading data: {error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="text-primary hover:underline"
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  const positionPlayers = searchQuery 
    ? searchPlayers(searchQuery).filter(p => p.pos === selectedPosition)
    : getPlayersByPosition(selectedPosition);
    
  const veteranPlayers = getVeteranPlayers(selectedPosition);
  const youngPlayers = getYoungPlayers(selectedPosition);

  return (
    <div className="min-h-screen bg-gradient-background">
      <div className="container mx-auto px-4 py-6 space-y-6">
        <DashboardHeader onSearch={handleSearch} />
        
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
            players={veteranPlayers}
            variant="veterans"
            onAddPlayer={handleAddPlayer}
          />
          
          <PlayerRankingsTable
            title="Young Talent"
            subtitle="Rookies & Sophomores"
            players={youngPlayers}
            variant="young"
            onAddPlayer={handleAddPlayer}
          />
        </div>
      </div>
    </div>
  );
}