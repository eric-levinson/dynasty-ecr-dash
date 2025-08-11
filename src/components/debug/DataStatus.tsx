import { usePlayerData } from "@/hooks/usePlayerData";

export function DataStatus() {
  const { players, loading, error, hasMore } = usePlayerData();

  if (process.env.NODE_ENV === 'production') {
    return null; // Don't show in production
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-3 rounded-lg text-xs font-mono z-50">
      <div>Status: {loading ? '🔄 Loading' : error ? '❌ Error' : '✅ Loaded'}</div>
      <div>Players: {players.length}</div>
      {hasMore && <div>More Available: ✅</div>}
      {error && <div className="text-red-300 mt-1">Error: {error}</div>}
    </div>
  );
}
