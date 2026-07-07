import { Wallet } from "lucide-react";

import type { SalaryOverview, SalarySummaryMetric } from "@/types/salary";
import { formatCurrency } from "@/utils/formatters";

interface SalarySummaryProps {
  overview: SalaryOverview;
  metrics: SalarySummaryMetric[];
}

export function SalarySummary({ overview, metrics }: SalarySummaryProps) {
  return (
    <section className="mt-6 px-5">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-card p-5 shadow-card">
        <div className="pointer-events-none absolute -right-10 -top-12 h-36 w-36 rounded-full bg-orange/20 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-10 h-36 w-36 rounded-full bg-violet/20 blur-2xl" />

        <div className="relative flex items-start justify-between">
          <div>
            <p className="text-xs font-medium text-muted-foreground">{overview.label}</p>
            <p className="mt-1 text-4xl font-extrabold text-foreground">
              {formatCurrency(overview.estimatedNet)}
            </p>
            <p className="text-xs text-muted-foreground">{overview.subtitle}</p>
          </div>
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-orange shadow-glow-orange">
            <Wallet className="h-6 w-6 text-orange-foreground" />
          </span>
        </div>

        <div className="relative mt-5 grid grid-cols-2 gap-3">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.id}
                className="rounded-2xl border border-border/70 bg-background/40 p-3"
              >
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Icon className={`h-3.5 w-3.5 ${metric.accent}`} /> {metric.label}
                </div>
                <p className="mt-1 text-base font-extrabold text-foreground">{metric.value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
