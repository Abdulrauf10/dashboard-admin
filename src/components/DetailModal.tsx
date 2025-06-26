
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    title: string;
    details: {
      title: string;
      description: string;
      metrics: Array<{
        label: string;
        value: string;
      }>;
    };
  } | null;
}

export function DetailModal({ isOpen, onClose, data }: DetailModalProps) {
  if (!data) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] animate-scale-in">
        <DialogHeader>
          <DialogTitle className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {data.details.title}
          </DialogTitle>
          <DialogDescription className="text-base">
            {data.details.description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          <div className="grid gap-4 md:grid-cols-2">
            {data.details.metrics.map((metric, index) => (
              <Card 
                key={metric.label} 
                className="animate-fade-in hover:shadow-md transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm text-muted-foreground font-medium">
                    {metric.label}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {metric.value}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-2 mt-4">
            <Badge variant="secondary" className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
              Updated 5 minutes ago
            </Badge>
            <Badge variant="secondary" className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
              Real-time data
            </Badge>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
