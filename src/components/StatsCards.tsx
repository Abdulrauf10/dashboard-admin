
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, DollarSign, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DetailModal } from "@/components/DetailModal";
import { useState } from "react";

const statsData = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1%",
    icon: DollarSign,
    color: "from-green-500 to-emerald-600",
    details: {
      title: "Revenue Analytics",
      description: "Detailed breakdown of revenue streams and growth patterns over the last quarter.",
      metrics: [
        { label: "Monthly Growth", value: "12.5%" },
        { label: "Average Order Value", value: "$234.50" },
        { label: "Conversion Rate", value: "3.2%" },
      ]
    }
  },
  {
    title: "Active Users",
    value: "2,350",
    change: "+180.1%",
    icon: Users,
    color: "from-blue-500 to-cyan-600",
    details: {
      title: "User Analytics",
      description: "User engagement and activity metrics showing strong growth in active users.",
      metrics: [
        { label: "Daily Active Users", value: "1,245" },
        { label: "Session Duration", value: "8.5 min" },
        { label: "Retention Rate", value: "68%" },
      ]
    }
  },
  {
    title: "Sales",
    value: "+12,234",
    change: "+19%",
    icon: TrendingUp,
    color: "from-purple-500 to-pink-600",
    details: {
      title: "Sales Performance",
      description: "Comprehensive sales data showing strong performance across all channels.",
      metrics: [
        { label: "Units Sold", value: "3,456" },
        { label: "Average Deal Size", value: "$1,234" },
        { label: "Close Rate", value: "24%" },
      ]
    }
  },
  {
    title: "Active Now",
    value: "573",
    change: "+201",
    icon: Activity,
    color: "from-orange-500 to-red-600",
    details: {
      title: "Real-time Activity",
      description: "Live user activity and system performance metrics updated in real-time.",
      metrics: [
        { label: "Peak Hours", value: "2-4 PM" },
        { label: "Server Load", value: "45%" },
        { label: "Response Time", value: "120ms" },
      ]
    }
  },
];

export function StatsCards() {
  const [selectedCard, setSelectedCard] = useState<typeof statsData[0] | null>(null);

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {statsData.map((stat, index) => (
          <Card
            key={stat.title}
            className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 animate-fade-in hover:scale-105 cursor-pointer"
            style={{ animationDelay: `${index * 100}ms` }}
            onClick={() => setSelectedCard(stat)}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <div className={`p-2 rounded-lg bg-gradient-to-r ${stat.color}`}>
                <stat.icon className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600 font-medium">{stat.change}</span> from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <DetailModal
        isOpen={!!selectedCard}
        onClose={() => setSelectedCard(null)}
        data={selectedCard}
      />
    </>
  );
}
