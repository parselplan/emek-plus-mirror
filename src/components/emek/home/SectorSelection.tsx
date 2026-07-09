import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";

import { SectionTitle } from "@/components/emek/common/SectionTitle";
import type { SectorOption } from "@/types/home";

interface SectorSelectionProps {
  title: string;
  subtitle: string;
  options: SectorOption[];
}

function SectorCard({
  sectorId,
  gradient,
  icon: Icon,
  title,
  subtitle,
}: {
  sectorId: SectorOption["id"];
  gradient: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
}) {
  return (
    <Link
      to="/sektor/$sectorId"
      params={{ sectorId }}
      className={`flex items-center gap-3 rounded-2xl ${gradient} p-4 text-left shadow-card transition-transform active:scale-[0.99]`}
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/15">
        <Icon className="h-6 w-6 text-white" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-extrabold uppercase leading-tight text-white">
          {title}
        </span>
        <span className="mt-0.5 block text-xs text-white/85">{subtitle}</span>
      </span>
    </Link>
  );
}

export function SectorSelection({ title, subtitle, options }: SectorSelectionProps) {
  return (
    <section className="mt-8 px-5">
      <SectionTitle
        title={title.toLocaleUpperCase("tr-TR")}
        subtitle={subtitle}
        align="center"
      />
      <div className="flex flex-col gap-3">
        {options.map((option) => (
          <SectorCard
            key={option.id}
            sectorId={option.id}
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
