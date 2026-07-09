import type { LucideIcon } from "lucide-react";

import type { PublicSectorCardItem } from "@/types/home";

interface PublicSectorFeatureGridProps {
  title: string;
  items: PublicSectorCardItem[];
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  cta,
  badge,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  cta: string;
  badge?: string;
}) {
  return (
    <article className="relative flex min-h-[248px] w-[min(72vw,260px)] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-teal-400/35 bg-gradient-to-br from-teal-950/90 via-[#0a1f1f]/95 to-background/80 p-4 shadow-[0_0_28px_rgba(45,212,191,0.14)]">
      <div className="pointer-events-none absolute -right-6 top-6 h-24 w-24 rounded-full bg-teal-400/10 blur-2xl" />

      <div className="relative flex flex-1 gap-3">
        <div className="min-w-0 flex-1">
          <h3 className="text-[10px] font-extrabold uppercase leading-snug tracking-wide text-teal-200">
            {title}
          </h3>
          <p className="mt-2 text-[10px] leading-relaxed text-muted-foreground">{description}</p>
        </div>

        <div className="relative flex h-20 w-20 shrink-0 items-center justify-center">
          <span className="absolute inset-0 rounded-2xl bg-teal-500/10 blur-md" />
          <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-400/25 to-teal-600/10">
            <Icon className="h-8 w-8 text-teal-200 drop-shadow-[0_4px_12px_rgba(45,212,191,0.35)]" />
          </span>
          {badge ? (
            <span className="absolute -bottom-1 -right-1 rounded-full border border-amber-300/60 bg-amber-400 px-1.5 py-0.5 text-[7px] font-extrabold text-amber-950">
              {badge}
            </span>
          ) : null}
        </div>
      </div>

      <button
        type="button"
        className="relative mt-4 w-fit rounded-xl border border-teal-400/45 bg-teal-500/20 px-4 py-2 text-[11px] font-bold text-teal-100"
      >
        {cta}
      </button>
    </article>
  );
}

export function PublicSectorFeatureGrid({ title, items }: PublicSectorFeatureGridProps) {
  return (
    <section className="rounded-3xl border border-teal-500/25 bg-gradient-to-b from-teal-950/50 via-background/30 to-background/20 p-4 shadow-card">
      <h2 className="mb-4 text-center text-sm font-extrabold uppercase tracking-wide text-teal-200">
        {title}
      </h2>
      <div className="-mx-1 flex gap-3 overflow-x-auto px-1 pb-1 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <FeatureCard
              key={item.id}
              icon={Icon}
              title={item.title}
              description={item.description}
              cta={item.cta}
              badge={item.badge}
            />
          );
        })}
      </div>
    </section>
  );
}
