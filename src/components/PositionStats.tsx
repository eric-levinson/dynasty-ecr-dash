interface PositionStatsProps {
  position: string;
  totalCount: number;
  veteransCount: number;
  youngCount: number;
}

export function PositionStats({ 
  position, 
  totalCount, 
  veteransCount, 
  youngCount 
}: PositionStatsProps) {
  return (
    <div className="bg-gradient-card rounded-lg p-6 shadow-card">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 bg-dynasty-purple rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">{position}</span>
        </div>
        <h3 className="text-xl font-bold text-foreground">{position}s</h3>
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-foreground">{totalCount}</div>
          <div className="text-sm text-muted-foreground">TOTAL</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-veterans">{veteransCount}</div>
          <div className="text-sm text-muted-foreground">VETERANS</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-young-talent">{youngCount}</div>
          <div className="text-sm text-muted-foreground">YOUNG</div>
        </div>
      </div>
    </div>
  );
}