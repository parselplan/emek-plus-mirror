import { ChevronRight } from "lucide-react";

import { SectionTitle } from "@/components/emek/common/SectionTitle";
import type { RecentSalaryCalculation } from "@/types/salary";

interface RecentCalculationsProps {
  title: string;
  subtitle: string;
  items: RecentSalaryCalculation[];
}

export function RecentCalculations({ title, subtitle, items }: RecentCalculationsProps) {
  return (
    <section className="mt-8 px-5">
      <SectionTitle title={title} subtitle={subtitle} />
      <div className="flex flex-col gap-3">
        {items.map((calc) => {
          const Icon = calc.icon;
          return (
            <button
              key={calc.id}
              type="button"
              className="flex items-center justify-between gap-3 rounded-2xl border border-border/60 bg-card/50 p-3.5 text-left transition-colors hover:bg-card active:scale-[0.99]"
            >
              <span className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-background/60">
                  <Icon className={`h-5 w-5 ${calc.accent}`} />
                </span>
                <span>
                  <span className="block text-sm font-bold text-foreground">{calc.title}</span>
                  <span className="block text-[11px] text-muted-foreground">{calc.date}</span>
                </span>
              </span>
              <span className="flex items-center gap-1">
                <span className="text-sm font-extrabold text-foreground">{calc.amount}</span>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
