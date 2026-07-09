import { Link } from "@tanstack/react-router";

import { SectionTitle } from "@/components/emek/common/SectionTitle";
import type { EmekServiceItem } from "@/types/home";
import { cn } from "@/lib/utils";

interface EmekServicesGridProps {
  title: string;
  subtitle: string;
  services: EmekServiceItem[];
}

const cardClass =
  "relative flex flex-col items-center gap-2.5 rounded-2xl border border-border/60 bg-card/50 p-3.5 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-border active:scale-95";

function ServiceCardInner({ service }: { service: EmekServiceItem }) {
  const Icon = service.icon;

  return (
    <>
      <span
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-2xl shadow-card",
          service.gradient,
          service.comingSoon ? "opacity-80" : "",
        )}
      >
        <Icon className="h-5 w-5 text-white" />
      </span>
      <span className="text-[11px] font-semibold leading-tight text-foreground/90">
        {service.label}
      </span>
      {service.comingSoon ? (
        <span className="rounded-full bg-muted px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-muted-foreground">
          Yakında
        </span>
      ) : null}
    </>
  );
}

export function EmekServicesGrid({ title, subtitle, services }: EmekServicesGridProps) {
  return (
    <section className="mt-8 px-5">
      <SectionTitle title={title} subtitle={subtitle} className="mb-3" />
      <div className="grid grid-cols-3 gap-3">
        {services.map((service) => {
          if (service.comingSoon || !service.to) {
            return (
              <div
                key={service.id}
                aria-disabled
                className={cn(cardClass, "cursor-not-allowed opacity-75 hover:translate-y-0")}
              >
                <ServiceCardInner service={service} />
              </div>
            );
          }

          return (
            <Link
              key={service.id}
              to={service.to}
              search={service.search}
              className={cardClass}
            >
              <ServiceCardInner service={service} />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
