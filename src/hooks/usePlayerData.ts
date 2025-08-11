import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

interface Player {
  player: string;
  pos: string;
  ecr: number;
  age: number;
  rdr_team: string;
  team_full: string;
  years_of_experience: number | null;
}

export function usePlayerData() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPlayers();
  }, []);

  async function fetchPlayers() {
    try {
      setLoading(true);
      
      // Fallback to original table due to view timeout issues
      const { data, error } = await supabase
        .from('dynastyprocess_fpecr_latest')
        .select('player, pos, ecr, team')
        .eq('ecr_type', 'do')
        .order('ecr', { ascending: true });

      if (error) {
        console.error('Error fetching players:', error);
        setError(error.message);
        return;
      }

      // TEMPORARY: Use ECR as proxy for experience until view is optimized
      // This is not the final logic - we need years_of_experience from the view
      const transformedPlayers = (data || []).map((row: any) => ({
        player: row.player,
        pos: row.pos,
        ecr: Number(row.ecr),
        age: 25, // Placeholder
        rdr_team: row.team,
        team_full: row.team,
        // TEMPORARY LOGIC: Using ECR as proxy (NOT FINAL)
        // Real logic should be: >= 2 years = veteran, 0-1 years = young
        years_of_experience: row.ecr <= 30 ? 3 : 1 // Temporary approximation
      }));

      setPlayers(transformedPlayers);
    } catch (err) {
      console.error('Unexpected error:', err);
      setError('Failed to fetch players');
    } finally {
      setLoading(false);
    }
  }

  const getPlayersByPosition = (position: string) => {
    return players.filter(player => {
      // Combine EDGE and IDL into DL
      if (position === 'DL') {
        return player.pos === 'DL' || player.pos === 'EDGE' || player.pos === 'IDL';
      }
      return player.pos === position;
    });
  };

  const getVeteranPlayers = (position: string) => {
    // Veterans are players with 2+ years of experience
    return getPlayersByPosition(position).filter(player => 
      player.years_of_experience !== null && player.years_of_experience >= 2
    );
  };

  const getYoungPlayers = (position: string) => {
    // Young players are rookies (null or 0) and sophomores (1)
    return getPlayersByPosition(position).filter(player => 
      player.years_of_experience === null || player.years_of_experience <= 1
    );
  };

  const searchPlayers = (query: string) => {
    if (!query.trim()) return players;
    
    return players.filter(player => 
      player.player.toLowerCase().includes(query.toLowerCase()) ||
      player.team_full.toLowerCase().includes(query.toLowerCase()) ||
      player.rdr_team.toLowerCase().includes(query.toLowerCase())
    );
  };

  return {
    players,
    loading,
    error,
    getPlayersByPosition,
    getVeteranPlayers,
    getYoungPlayers,
    searchPlayers,
    refetch: fetchPlayers
  };
}