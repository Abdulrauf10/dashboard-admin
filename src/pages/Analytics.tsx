
import { ThemeProvider } from "@/components/ThemeProvider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { BarChart3, TrendingUp, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Analytics = () => {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <div className="min-h-screen flex w-full bg-gradient-to-br from-background via-background to-muted/20">
          <AppSidebar />
          <main className="flex-1 overflow-auto">
            <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b">
              <div className="flex items-center gap-4 p-4">
                <SidebarTrigger className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-950 dark:hover:to-purple-950" />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Analytics
                </h1>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="animate-fade-in">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Page Views</CardTitle>
                    <BarChart3 className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">45,231</div>
                    <p className="text-xs text-muted-foreground">+12% from last month</p>
                  </CardContent>
                </Card>
                
                <Card className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Bounce Rate</CardTitle>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">34.2%</div>
                    <p className="text-xs text-muted-foreground">-2.1% from last month</p>
                  </CardContent>
                </Card>
                
                <Card className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Session Duration</CardTitle>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">2m 34s</div>
                    <p className="text-xs text-muted-foreground">+15s from last month</p>
                  </CardContent>
                </Card>
                
                <Card className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3.8%</div>
                    <p className="text-xs text-muted-foreground">+0.5% from last month</p>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <CardHeader>
                  <CardTitle>Analytics Overview</CardTitle>
                  <CardDescription>Detailed analytics and insights for your platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    This page shows comprehensive analytics data including page views, user behavior, 
                    conversion metrics, and performance indicators to help you make data-driven decisions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default Analytics;
