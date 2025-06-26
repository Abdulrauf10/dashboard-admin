
import { ThemeProvider } from "@/components/ThemeProvider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { TrendingUp, TrendingDown, Activity, Target } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Trends = () => {
  const trendingTopics = [
    { topic: "Mobile Usage", change: "+24%", trending: "up" },
    { topic: "Desktop Traffic", change: "-8%", trending: "down" },
    { topic: "Social Media Referrals", change: "+15%", trending: "up" },
    { topic: "Email Campaigns", change: "+32%", trending: "up" },
    { topic: "Paid Advertising", change: "-12%", trending: "down" },
  ];

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
                  Trends
                </h1>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="animate-fade-in">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Growth Rate</CardTitle>
                    <TrendingUp className="h-4 w-4 text-green-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600">+18.2%</div>
                    <p className="text-xs text-muted-foreground">This quarter</p>
                  </CardContent>
                </Card>
                
                <Card className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Market Share</CardTitle>
                    <Target className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">23.4%</div>
                    <p className="text-xs text-muted-foreground">+2.1% from last quarter</p>
                  </CardContent>
                </Card>
                
                <Card className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Engagement</CardTitle>
                    <Activity className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">89.3%</div>
                    <p className="text-xs text-muted-foreground">+5.2% from last month</p>
                  </CardContent>
                </Card>
                
                <Card className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Retention</CardTitle>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">76.8%</div>
                    <p className="text-xs text-muted-foreground">+3.4% from last month</p>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <CardHeader>
                  <CardTitle>Trending Topics</CardTitle>
                  <CardDescription>Current market trends and performance indicators</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {trendingTopics.map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex items-center gap-3">
                          {item.trending === 'up' ? (
                            <TrendingUp className="h-5 w-5 text-green-600" />
                          ) : (
                            <TrendingDown className="h-5 w-5 text-red-600" />
                          )}
                          <span className="font-medium">{item.topic}</span>
                        </div>
                        <span className={`font-semibold ${
                          item.trending === 'up' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {item.change}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default Trends;
