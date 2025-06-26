
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const pieData = [
  { name: "Desktop", value: 45, color: "#3B82F6" },
  { name: "Mobile", value: 35, color: "#8B5CF6" },
  { name: "Tablet", value: 20, color: "#10B981" },
];

const salesData = [
  { name: "Product A", value: 30, color: "#F59E0B" },
  { name: "Product B", value: 25, color: "#EF4444" },
  { name: "Product C", value: 20, color: "#06B6D4" },
  { name: "Product D", value: 15, color: "#8B5CF6" },
  { name: "Others", value: 10, color: "#6B7280" },
];

export function PieChartSection() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card className="animate-fade-in hover:shadow-lg transition-all duration-300" style={{ animationDelay: "400ms" }}>
        <CardHeader>
          <CardTitle className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Device Usage
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                animationBegin={0}
                animationDuration={800}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="animate-fade-in hover:shadow-lg transition-all duration-300" style={{ animationDelay: "600ms" }}>
        <CardHeader>
          <CardTitle className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Sales Distribution
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={salesData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                animationBegin={200}
                animationDuration={800}
              >
                {salesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
