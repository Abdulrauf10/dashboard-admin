
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Area, AreaChart } from "recharts";

const barData = [
  { name: "Jan", value: 400, revenue: 2400 },
  { name: "Feb", value: 300, revenue: 1398 },
  { name: "Mar", value: 200, revenue: 9800 },
  { name: "Apr", value: 278, revenue: 3908 },
  { name: "May", value: 189, revenue: 4800 },
  { name: "Jun", value: 239, revenue: 3800 },
  { name: "Jul", value: 349, revenue: 4300 },
];

const lineData = [
  { name: "Jan", users: 1000, sessions: 2400 },
  { name: "Feb", users: 1200, sessions: 1398 },
  { name: "Mar", users: 900, sessions: 9800 },
  { name: "Apr", users: 1500, sessions: 3908 },
  { name: "May", users: 2000, sessions: 4800 },
  { name: "Jun", users: 1800, sessions: 3800 },
  { name: "Jul", users: 2200, sessions: 4300 },
];

export function ChartSection() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card className="animate-fade-in hover:shadow-lg transition-all duration-300">
        <CardHeader>
          <CardTitle className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Monthly Revenue
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="name" className="text-muted-foreground" />
              <YAxis className="text-muted-foreground" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Bar dataKey="value" fill="url(#colorGradient)" radius={[4, 4, 0, 0]} />
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="animate-fade-in hover:shadow-lg transition-all duration-300" style={{ animationDelay: "200ms" }}>
        <CardHeader>
          <CardTitle className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            User Growth
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="name" className="text-muted-foreground" />
              <YAxis className="text-muted-foreground" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Area 
                type="monotone" 
                dataKey="users" 
                stroke="#10B981" 
                fill="url(#colorGradient2)" 
                strokeWidth={3}
              />
              <defs>
                <linearGradient id="colorGradient2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
