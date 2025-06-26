
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const userGrowthData = [
  { name: "Jan", users: 1000, sessions: 2400, newUsers: 850 },
  { name: "Feb", users: 1200, sessions: 2800, newUsers: 1050 },
  { name: "Mar", users: 900, sessions: 2100, newUsers: 750 },
  { name: "Apr", users: 1500, sessions: 3200, newUsers: 1300 },
  { name: "May", users: 2000, sessions: 4100, newUsers: 1750 },
  { name: "Jun", users: 1800, sessions: 3800, newUsers: 1550 },
  { name: "Jul", users: 2200, sessions: 4500, newUsers: 1900 },
  { name: "Aug", users: 2800, sessions: 5200, newUsers: 2400 },
  { name: "Sep", users: 3200, sessions: 5800, newUsers: 2750 },
  { name: "Oct", users: 2900, sessions: 5400, newUsers: 2500 },
  { name: "Nov", users: 3500, sessions: 6200, newUsers: 3000 },
  { name: "Dec", users: 4200, sessions: 7100, newUsers: 3600 },
];

export function ChartSection() {
  return (
    <Card className="animate-fade-in hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/90 dark:to-gray-800/90 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              User Growth Analytics
            </CardTitle>
            <p className="text-muted-foreground mt-1">Active users and engagement over time</p>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <span className="text-muted-foreground">Active Users</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <span className="text-muted-foreground">New Users</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={userGrowthData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <defs>
              <linearGradient id="userGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.4}/>
                <stop offset="50%" stopColor="#06B6D4" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#06B6D4" stopOpacity={0.05}/>
              </linearGradient>
              <linearGradient id="newUserGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.4}/>
                <stop offset="50%" stopColor="#EC4899" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#EC4899" stopOpacity={0.05}/>
              </linearGradient>
            </defs>
            <CartesianGrid 
              strokeDasharray="3 3" 
              className="stroke-muted/20" 
              horizontal={true}
              vertical={false}
            />
            <XAxis 
              dataKey="name" 
              className="text-muted-foreground text-xs"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
            />
            <YAxis 
              className="text-muted-foreground text-xs"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => `${value.toLocaleString()}`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "12px",
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                backdropFilter: "blur(8px)",
              }}
              labelStyle={{ 
                color: "hsl(var(--foreground))",
                fontWeight: "600",
                marginBottom: "8px"
              }}
              formatter={(value, name) => [
                `${value.toLocaleString()}`,
                name === 'users' ? 'Active Users' : 'New Users'
              ]}
            />
            <Area 
              type="monotone" 
              dataKey="newUsers" 
              stroke="#8B5CF6" 
              fill="url(#newUserGradient)" 
              strokeWidth={3}
              dot={false}
              activeDot={{ 
                r: 6, 
                fill: "#8B5CF6",
                stroke: "#fff",
                strokeWidth: 2
              }}
            />
            <Area 
              type="monotone" 
              dataKey="users" 
              stroke="#3B82F6" 
              fill="url(#userGradient)" 
              strokeWidth={3}
              dot={false}
              activeDot={{ 
                r: 6, 
                fill: "#3B82F6",
                stroke: "#fff",
                strokeWidth: 2
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
        
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/50">
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">4.2K</div>
              <div className="text-xs text-muted-foreground">Current Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">3.6K</div>
              <div className="text-xs text-muted-foreground">New This Month</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">+28%</div>
              <div className="text-xs text-muted-foreground">Growth Rate</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-muted-foreground">Peak: Nov-Dec</div>
            <div className="text-xs text-muted-foreground">Best performing months</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
