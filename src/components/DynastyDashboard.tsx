import { useState } from "react";
import { DashboardHeader } from "./DashboardHeader";
import { TierGuide } from "./TierGuide";
import { PositionTabs } from "./PositionTabs";
import { PositionStats } from "./PositionStats";
import { PlayerRankingsTable } from "./PlayerRankingsTable";
import { DataStatus } from "./debug/DataStatus";
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
    ? players.filter(p => p.years_of_experience !== null && p.years_of_experience >= 2)
    : getVeteranPlayers(selectedPosition);

  const youngPlayers = selectedPosition === "ALL"
    ? players.filter(p => p.years_of_experience === null || p.years_of_experience <= 1)
    : getYoungPlayers(selectedPosition);

  const filteredVeterans = searchQuery
    ? veteranPlayers.filter(p => p.player.toLowerCase().includes(searchQuery.toLowerCase()))
    : veteranPlayers;

  const filteredYoung = searchQuery
    ? youngPlayers.filter(p => p.player.toLowerCase().includes(searchQuery.toLowerCase()))
    : youngPlayers;

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
            players={filteredVeterans}
            variant="veterans"
            onAddPlayer={handleAddPlayer}
          />
          
          <PlayerRankingsTable
            title="Young Talent"
            subtitle="Rookies & Sophomores"
            players={filteredYoung}
            variant="young"
            onAddPlayer={handleAddPlayer}
          />
        </div>
      </div>
      <DataStatus />
    </div>
  );
}