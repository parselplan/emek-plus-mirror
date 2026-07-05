import { CampaignCard } from "@/components/emek/home/CampaignCard";
import { SectionTitle } from "@/components/emek/common/SectionTitle";
import type { CampaignItem, FieldSolutionItem, SalarySummary } from "@/types/home";
import { formatCurrency } from "@/utils/formatters";

interface FieldWorkerSectionProps {
  title: string;
  solutions: FieldSolutionItem[];
  salary: SalarySummary;
  campaign: CampaignItem;
}

export function FieldWorkerSection({
  title,
  solutions,
  salary,
  campaign,
}: FieldWorkerSectionProps) {
  return (
    <section className="mt-8 px-5">
      <SectionTitle title={title} className="mb-1" />
      <div className="mt-3 grid grid-cols-4 gap-3">
        {solutions.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="flex flex-col items-center gap-2 rounded-2xl border border-border/60 bg-card/50 p-3"
            >
              <Icon className="h-6 w-6 text-orange" />
              <span className="text-center text-[10px] font-semibold leading-tight text-muted-foreground">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>

      <div className="mt-4 rounded-3xl bg-gradient-card p-4 shadow-card">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <p className="text-xs text-muted-foreground">Tahmini Maaşın</p>
            <p className="text-2xl font-extrabold text-foreground">
              {formatCurrency(salary.estimatedNet)}
            </p>
            <span className="mt-1 inline-block rounded-md bg-green/15 px-2 py-0.5 text-xs font-bold text-green">
              +%{salary.changePercent}
            </span>
          </div>
          <div className="border-l border-border/60 pl-3">
            <p className="text-xs text-muted-foreground">Mesai Durumu</p>
            <p className="text-lg font-bold text-foreground">{salary.overtimeHours} Saat</p>
            <p className="mt-1 text-xs text-muted-foreground">Ek Kazanç</p>
            <p className="font-bold text-orange">{formatCurrency(salary.extraEarnings)}</p>
          </div>
        </div>
        <CampaignCard campaign={campaign} className="mt-4" />
      </div>
    </section>
  );
}
