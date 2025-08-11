import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

interface Player {
  player: string;
  pos: string;
  ecr: number;
  team: string;
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

      setPlayers(data || []);
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
    // Use ECR as proxy for veterans (better rankings = more established)
    return getPlayersByPosition(position).filter(player => player.ecr <= 20);
  };

  const getYoungPlayers = (position: string) => {
    // Young players have higher ECR (less established)
    return getPlayersByPosition(position).filter(player => player.ecr > 20);
  };

  const searchPlayers = (query: string) => {
    if (!query.trim()) return players;
    
    return players.filter(player => 
      player.player.toLowerCase().includes(query.toLowerCase()) ||
      player.team.toLowerCase().includes(query.toLowerCase())
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