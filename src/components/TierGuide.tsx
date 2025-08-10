import { Star, TrendingUp, Shield, Eye, Clock } from "lucide-react";

const tiers = [
  {
    id: 1,
    name: "Elite",
    icon: Star,
    description: "Tier 1: Elite",
    color: "tier-elite",
    bgColor: "bg-yellow-100",
  },
  {
    id: 2,
    name: "High-End",
    icon: TrendingUp,
    description: "Tier 2: High-End",
    color: "tier-high-end",
    bgColor: "bg-purple-100",
  },
  {
    id: 3,
    name: "Solid Starter",
    icon: Shield,
    description: "Tier 3: Solid Starter",
    color: "tier-solid",
    bgColor: "bg-green-100",
  },
  {
    id: 4,
    name: "Upside/Depth",
    icon: Clock,
    description: "Tier 4: Upside/Depth",
    color: "tier-upside",
    bgColor: "bg-purple-50",
  },
  {
    id: 5,
    name: "Watch List",
    icon: Eye,
    description: "Tier 5: Watch List",
    color: "tier-watch",
    bgColor: "bg-gray-100",
  },
];

export function TierGuide() {
  return (
    <div className="bg-gradient-card rounded-lg p-6 shadow-card">
      <h2 className="text-lg font-semibold text-foreground mb-4">Tier Guide</h2>
      <div className="flex flex-wrap gap-4">
        {tiers.map((tier) => {
          const Icon = tier.icon;
          return (
            <div
              key={tier.id}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg ${tier.bgColor} transition-transform hover:scale-105`}
            >
              <Icon className={`w-4 h-4 text-${tier.color}`} />
              <span className="text-sm font-medium text-gray-700">{tier.description}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}