import { ChevronRight, Clock, FileCheck2, Wallet } from "lucide-react";

import type { SalarySummary } from "@/types/home";
import { formatCurrency } from "@/utils/formatters";

interface SalarySummaryCardProps {
  data: SalarySummary;
}

export function SalarySummaryCard({ data }: SalarySummaryCardProps) {
  return (
    <section className="mt-5 px-5">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-card p-5 shadow-card">
        <div className="pointer-events-none absolute -right-8 -top-10 h-32 w-32 rounded-full bg-violet/20 blur-2xl" />
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-medium text-muted-foreground">Tahmini Maaşın</p>
            <p className="mt-1 text-3xl font-extrabold text-foreground">
              {formatCurrency(data.estimatedNet)}
            </p>
            <p className="text-xs text-muted-foreground">Aylık tahmini net kazanç</p>
          </div>
          <span className="rounded-full bg-green/15 px-2.5 py-1 text-xs font-bold text-green">
            +%{data.changePercent}
          </span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-border/70 bg-background/40 p-3">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5 text-blue" /> Mesai
            </div>
            <p className="mt-1 font-bold text-foreground">{data.overtimeHours} Saat</p>
          </div>
          <div className="rounded-2xl border border-border/70 bg-background/40 p-3">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Wallet className="h-3.5 w-3.5 text-orange" /> Ek Kazanç
            </div>
            <p className="mt-1 font-bold text-foreground">{formatCurrency(data.extraEarnings)}</p>
          </div>
        </div>

        <button
          type="button"
          className="mt-4 flex w-full items-center justify-between rounded-2xl bg-violet/15 px-4 py-3 text-left"
        >
          <span className="flex items-center gap-3">
            <FileCheck2 className="h-5 w-5 text-violet" />
            <span>
              <span className="block text-sm font-bold text-foreground">
                {data.contractReview.title}
              </span>
              <span className="block text-xs text-muted-foreground">
                {data.contractReview.subtitle}
              </span>
            </span>
          </span>
          <ChevronRight className="h-5 w-5 text-muted-foreground" />
        </button>
      </div>
    </section>
  );
}
