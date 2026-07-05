import { MetricCard } from "@/components/emek/common/MetricCard";
import type { StatMetric } from "@/types/home";
import type { LucideIcon } from "lucide-react";

interface SocialProofStatsProps {
  metrics: StatMetric[];
  supportIcon: LucideIcon;
  supportTitle: string;
  supportSubtitle: string;
}

export function SocialProofStats({
  metrics,
  supportIcon: SupportIcon,
  supportTitle,
  supportSubtitle,
}: SocialProofStatsProps) {
  return (
    <section className="mt-6 px-5">
      <div className="grid grid-cols-2 gap-3 rounded-3xl border border-border/70 bg-card/60 p-4">
        {metrics.map((metric) => (
          <MetricCard
            key={metric.id}
            icon={metric.icon}
            value={metric.value}
            label={metric.label}
            iconColor={metric.color}
          />
        ))}
        <div className="col-span-2 flex items-center gap-3 border-t border-border/60 pt-3">
          <SupportIcon className="h-6 w-6 text-violet" />
          <div>
            <p className="text-sm font-bold text-foreground">{supportTitle}</p>
            <p className="text-[11px] text-muted-foreground">{supportSubtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
