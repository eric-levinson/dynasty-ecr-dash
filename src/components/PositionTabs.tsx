import { Button } from "@/components/ui/button";

const positions = [
  { id: "QB", name: "QB", active: true },
  { id: "RB", name: "RB", active: false },
  { id: "WR", name: "WR", active: false },
  { id: "TE", name: "TE", active: false },
  { id: "LB", name: "LB", active: false },
  { id: "EDGE", name: "EDGE", active: false },
  { id: "IDL", name: "IDL", active: false },
  { id: "DB", name: "DB", active: false },
];

interface PositionTabsProps {
  selectedPosition: string;
  onPositionChange: (position: string) => void;
}

export function PositionTabs({ selectedPosition, onPositionChange }: PositionTabsProps) {
  return (
    <div className="bg-gradient-card rounded-lg p-4 shadow-card">
      <div className="flex flex-wrap gap-2">
        {positions.map((position) => (
          <Button
            key={position.id}
            variant={selectedPosition === position.id ? "dynasty" : "ghost"}
            size="sm"
            onClick={() => onPositionChange(position.id)}
            className="transition-all duration-200 hover:scale-105"
          >
            {position.name}
          </Button>
        ))}
      </div>
    </div>
  );
}