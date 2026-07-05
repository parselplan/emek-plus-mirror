import type { LucideIcon } from "lucide-react";

import type { BenefitCardItem } from "@/types/home";

interface BenefitFeatureCardProps {
  icon: LucideIcon;
  accent: string;
  title: string;
  description: string;
  cta: string;
  ctaGradient: string;
}

function BenefitFeatureCard({
  icon: Icon,
  accent,
  title,
  description,
  cta,
  ctaGradient,
}: BenefitFeatureCardProps) {
  return (
    <div className="flex flex-col rounded-2xl border border-border/60 bg-gradient-card p-4 shadow-card">
      <Icon className={`h-7 w-7 ${accent}`} />
      <h3 className="mt-3 text-sm font-bold text-foreground">{title}</h3>
      <p className="mt-1 flex-1 text-xs leading-relaxed text-muted-foreground">{description}</p>
      <button
        type="button"
        className={`mt-3 rounded-xl ${ctaGradient} px-3 py-2 text-xs font-bold text-white`}
      >
        {cta}
      </button>
    </div>
  );
}

interface BenefitNewCardProps {
  icon: LucideIcon;
  accent: string;
  title: string;
  description: string;
  cta: string;
}

function BenefitNewCard({ icon: Icon, accent, title, description, cta }: BenefitNewCardProps) {
  return (
    <div className="relative flex flex-col rounded-2xl border border-border/60 bg-gradient-card p-4 shadow-card">
      <span className="absolute -left-1 top-3 rounded-r-md bg-gradient-orange px-2 py-0.5 text-[9px] font-extrabold uppercase text-orange-foreground">
        Yeni
      </span>
      <Icon className={`mt-4 h-7 w-7 ${accent}`} />
      <h3 className="mt-2 text-sm font-bold text-foreground">{title}</h3>
      <p className="mt-1 flex-1 text-xs leading-relaxed text-muted-foreground">{description}</p>
      <button
        type="button"
        className="mt-3 rounded-xl border border-border bg-background/40 px-3 py-2 text-xs font-bold text-foreground"
      >
        {cta}
      </button>
    </div>
  );
}

interface BenefitsGridProps {
  items: BenefitCardItem[];
  variant: "support" | "new";
}

export function BenefitsGrid({ items, variant }: BenefitsGridProps) {
  return (
    <section className="mt-8 px-5">
      <div className="grid grid-cols-2 gap-3">
        {items.map((item) => {
          const Icon = item.icon;
          if (variant === "support" && item.ctaGradient) {
            return (
              <BenefitFeatureCard
                key={item.id}
                icon={Icon}
                accent={item.accent}
                title={item.title}
                description={item.description}
                cta={item.cta}
                ctaGradient={item.ctaGradient}
              />
            );
          }
          return (
            <BenefitNewCard
              key={item.id}
              icon={Icon}
              accent={item.accent}
              title={item.title}
              description={item.description}
              cta={item.cta}
            />
          );
        })}
      </div>
    </section>
  );
}

/** Tek kart sarmalayıcı — ileride dinamik hak/yan hak listesi için */
export function BenefitsCard(props: BenefitFeatureCardProps) {
  return <BenefitFeatureCard {...props} />;
}
