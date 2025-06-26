
import { SidebarTrigger } from "@/components/ui/sidebar";
import { StatsCards } from "@/components/StatsCards";
import { ChartSection } from "@/components/ChartSection";
import { PieChartSection } from "@/components/PieChartSection";

export function DashboardContent() {
  return (
    <main className="flex-1 overflow-auto">
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b">
        <div className="flex items-center gap-4 p-4">
          <SidebarTrigger className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-950 dark:hover:to-purple-950" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Dashboard Overview
          </h1>
        </div>
      </div>
      
      <div className="p-6 space-y-6">
        <StatsCards />
        <ChartSection />
        <PieChartSection />
      </div>
    </main>
  );
}
