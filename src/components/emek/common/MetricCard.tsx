import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface MetricCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  iconColor?: string;
  className?: string;
}

export function MetricCard({
  icon: Icon,
  label,
  value,
  iconColor = "text-muted-foreground",
  className,
}: MetricCardProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Icon className={cn("h-6 w-6", iconColor)} />
      <div>
        <p className="text-lg font-extrabold leading-none text-foreground">{value}</p>
        <p className="text-[11px] text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}
