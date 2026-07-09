import { ArrowUpRight } from "lucide-react";

import { SectionTitle } from "@/components/emek/common/SectionTitle";
import type { QuickStatCard } from "@/types/home";

interface QuickStatsRowProps {
  cards: QuickStatCard[];
}

export function QuickStatsRow({ cards }: QuickStatsRowProps) {
  return (
    <section className="mt-6">
      <SectionTitle title="Hızlı Durum" className="mb-3 px-5" />
      <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <article
              key={card.id}
              style={{ animationDelay: `${index * 70}ms` }}
              className="group relative flex min-w-[64%] snap-start flex-col justify-between overflow-hidden rounded-3xl border border-border/60 bg-gradient-card p-4 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-border active:scale-[0.98]"
            >
              <div className="pointer-events-none absolute -right-6 -top-8 h-24 w-24 rounded-full opacity-20 blur-2xl transition-opacity duration-300 group-hover:opacity-40" />
              <div className="flex items-start justify-between">
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-2xl ${card.gradient} shadow-card`}
                >
                  <Icon className="h-5 w-5 text-white" />
                </span>
                {card.trend ? (
                  <span
                    className={`flex items-center gap-0.5 rounded-full px-2 py-1 text-[11px] font-bold ${
                      card.trend.positive ? "bg-green/15 text-green" : "bg-destructive/15 text-destructive"
                    }`}
                  >
                    <ArrowUpRight className="h-3 w-3" />
                    {card.trend.value}
                  </span>
                ) : null}
              </div>
              <div className="mt-4">
                <p className="text-2xl font-extrabold leading-none text-foreground">{card.value}</p>
                <p className="mt-1.5 text-xs font-semibold text-foreground/80">{card.label}</p>
                {card.hint ? (
                  <p className="mt-0.5 text-[11px] text-muted-foreground">{card.hint}</p>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
