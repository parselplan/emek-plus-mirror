import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ChevronRight } from "lucide-react";

import { SectionTitle } from "@/components/emek/common/SectionTitle";
import type { SectorDashboard as SectorDashboardData } from "@/data/sectorDashboards";
import { cn } from "@/lib/utils";

interface SectorDashboardProps {
  data: SectorDashboardData;
}

export function SectorDashboard({ data }: SectorDashboardProps) {
  const { theme } = data;

  return (
    <div className="space-y-8">
      {/* Hero */}
      <section className="px-5">
        <div
          className={cn(
            "relative overflow-hidden rounded-3xl border bg-gradient-card p-5 shadow-card",
            theme.ring,
          )}
        >
          <div
            className={cn(
              "pointer-events-none absolute -right-10 -top-12 h-40 w-40 rounded-full blur-3xl",
              theme.glow,
            )}
          />
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide",
              theme.chipBg,
              theme.chipText,
            )}
          >
            {data.eyebrow}
          </span>
          <h2 className="mt-3 text-xl font-extrabold leading-snug text-foreground">
            {data.title}
          </h2>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
            {data.subtitle}
          </p>
        </div>
      </section>

      {/* Hero stats */}
      <section>
        <SectionTitle title="Sektör Özeti" className="mb-3 px-5" />
        <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {data.heroStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <article
                key={stat.id}
                style={{ animationDelay: `${index * 70}ms` }}
                className="group relative flex min-w-[64%] snap-start flex-col justify-between overflow-hidden rounded-3xl border border-border/60 bg-gradient-card p-4 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-border active:scale-[0.98]"
              >
                <div className="flex items-start justify-between">
                  <span
                    className={cn(
                      "flex h-11 w-11 items-center justify-center rounded-2xl shadow-card",
                      stat.gradient,
                    )}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </span>
                  {stat.trend ? (
                    <span
                      className={cn(
                        "flex items-center gap-0.5 rounded-full px-2 py-1 text-[11px] font-bold",
                        stat.trend.positive
                          ? "bg-green/15 text-green"
                          : "bg-destructive/15 text-destructive",
                      )}
                    >
                      <ArrowUpRight className="h-3 w-3" />
                      {stat.trend.value}
                    </span>
                  ) : null}
                </div>
                <div className="mt-4">
                  <p className="text-xl font-extrabold leading-none text-foreground">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-xs font-semibold text-foreground/80">
                    {stat.label}
                  </p>
                  {stat.hint ? (
                    <p className="mt-0.5 text-[11px] text-muted-foreground">{stat.hint}</p>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Quick actions */}
      <section className="px-5">
        <SectionTitle title="Hızlı Erişim" className="mb-3" />
        <div className="grid grid-cols-2 gap-3">
          {data.actions.map((action) => {
            const Icon = action.icon;
            return (
              <button
                key={action.id}
                type="button"
                className="group flex items-center gap-3 rounded-2xl border border-border/60 bg-card/60 p-3.5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-border active:scale-[0.97]"
              >
                <span
                  className={cn(
                    "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-border/60 bg-background/60",
                    action.accent,
                  )}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[13px] font-extrabold leading-tight text-foreground">
                    {action.label}
                  </span>
                  <span className="mt-0.5 block text-[11px] text-muted-foreground">
                    {action.hint}
                  </span>
                </span>
                <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>
            );
          })}
        </div>
      </section>

      {/* Insights */}
      <section className="px-5">
        <SectionTitle title="Sana Özel Bilgi" className="mb-3" />
        <div className="space-y-3">
          {data.insights.map((insight) => {
            const Icon = insight.icon;
            return (
              <article
                key={insight.id}
                className="flex gap-3 rounded-2xl border border-border/60 bg-card/50 p-4"
              >
                <span
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-border/60 bg-background/60",
                    insight.accent,
                  )}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-extrabold leading-snug text-foreground">
                    {insight.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {insight.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Announcements */}
      <section className="px-5">
        <SectionTitle title="Son Güncellemeler" className="mb-3" />
        <div className="overflow-hidden rounded-2xl border border-border/60 bg-card/50">
          {data.announcements.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={cn(
                  "flex items-center gap-3 px-4 py-3.5",
                  index !== data.announcements.length - 1 && "border-b border-border/50",
                )}
              >
                <span
                  className={cn(
                    "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-background/60",
                    item.accent,
                  )}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        "rounded-full px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide",
                        theme.chipBg,
                        theme.chipText,
                      )}
                    >
                      {item.tag}
                    </span>
                    <span className="truncate text-[10px] text-muted-foreground">
                      {item.meta}
                    </span>
                  </div>
                  <p className="mt-1 truncate text-[13px] font-semibold text-foreground">
                    {item.title}
                  </p>
                </div>
                <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />
              </div>
            );
          })}
        </div>
      </section>

      {/* AI prompt */}
      <section className="px-5">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-card p-5 shadow-card">
          <div className="pointer-events-none absolute -right-10 -top-12 h-36 w-36 rounded-full bg-violet/20 blur-3xl" />
          <span className="text-xs font-bold uppercase tracking-wide text-violet">
            {data.aiPrompt.eyebrow}
          </span>
          <h3 className="mt-2 text-lg font-extrabold leading-snug text-foreground">
            {data.aiPrompt.title}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
            {data.aiPrompt.description}
          </p>
          <Link
            to="/asistan"
            className="group mt-4 inline-flex items-center gap-2 rounded-2xl bg-gradient-violet px-4 py-2.5 text-sm font-bold text-white shadow-glow-violet transition-all duration-200 hover:opacity-95 active:scale-95"
          >
            {data.aiPrompt.cta}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
