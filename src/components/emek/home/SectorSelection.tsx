import { ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { SectionTitle } from "@/components/emek/common/SectionTitle";
import type { SectorOption } from "@/types/home";

interface SectorSelectionProps {
  title: string;
  subtitle: string;
  options: SectorOption[];
}

function SectorCard({
  gradient,
  icon: Icon,
  title,
  subtitle,
}: {
  gradient: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
}) {
  return (
    <button
      type="button"
      className={`flex items-center justify-between rounded-2xl ${gradient} p-4 text-left shadow-card transition-transform active:scale-[0.99]`}
    >
      <span className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20">
          <Icon className="h-6 w-6 text-white" />
        </span>
        <span>
          <span className="block text-sm font-extrabold uppercase leading-tight text-white">
            {title}
          </span>
          <span className="block text-xs text-white/85">{subtitle}</span>
        </span>
      </span>
      <ChevronRight className="h-5 w-5 text-white/90" />
    </button>
  );
}

export function SectorSelection({ title, subtitle, options }: SectorSelectionProps) {
  return (
    <section className="mt-8 px-5">
      <SectionTitle title={title} subtitle={subtitle} />
      <div className="flex flex-col gap-3">
        {options.map((option) => (
          <SectorCard
            key={option.id}
            gradient={option.gradient}
            icon={option.icon}
            title={option.title}
            subtitle={option.subtitle}
          />
        ))}
      </div>
    </section>
  );
}
