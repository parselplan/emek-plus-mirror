import type { LucideIcon } from "lucide-react";

import type { PublicSectorCardItem } from "@/types/home";

interface PublicSectorSectionProps {
  title: string;
  items: PublicSectorCardItem[];
}

function PublicSectorCard({
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
    <div className="relative flex flex-col rounded-2xl border border-border/60 bg-background/40 p-4">
      <Icon className="h-7 w-7 text-blue" />
      <h3 className="mt-2 text-sm font-bold text-foreground">{title}</h3>
      <p className="mt-1 flex-1 text-xs leading-relaxed text-muted-foreground">{description}</p>
      {badge ? (
        <span className="mt-2 inline-block w-fit rounded-full border border-orange/50 px-2 py-0.5 text-[10px] font-bold text-orange">
          {badge}
        </span>
      ) : null}
      <button
        type="button"
        className="mt-3 rounded-xl border border-blue/40 bg-blue/10 px-3 py-2 text-xs font-bold text-blue"
      >
        {cta}
      </button>
    </div>
  );
}

export function PublicSectorSection({ title, items }: PublicSectorSectionProps) {
  return (
    <section className="mt-8 px-5">
      <div className="rounded-3xl border border-border/60 bg-card/50 p-4">
        <h2 className="mb-4 text-center text-base font-extrabold text-blue">{title}</h2>
        <div className="grid grid-cols-2 gap-3">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <PublicSectorCard
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
      </div>
    </section>
  );
}
