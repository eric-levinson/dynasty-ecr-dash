import { Button } from "@/components/ui/button";
import { Search, Download, Upload, Trash2, Database } from "lucide-react";

interface DashboardHeaderProps {
  onSearch: (query: string) => void;
}

export function DashboardHeader({ onSearch }: DashboardHeaderProps) {
  return (
    <div className="space-y-6">
      {/* Main Header */}
      <div className="bg-gradient-card rounded-lg p-6 shadow-card">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Database className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Dynasty Rankings Hub</h1>
              <p className="text-muted-foreground">Track Veterans & Rising Stars Across All Positions</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="dynasty" size="sm" className="gap-2">
              <Upload className="w-4 h-4" />
              Save Rankings
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="w-4 h-4" />
              Load Rankings
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="w-4 h-4" />
              Export
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Trash2 className="w-4 h-4" />
              Clear All
            </Button>
            <Button variant="success" size="sm">
              Sample Data
            </Button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-gradient-card rounded-lg p-4 shadow-card">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <input
            type="text"
            placeholder="Search for any player across all positions..."
            className="w-full pl-10 pr-4 py-3 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}