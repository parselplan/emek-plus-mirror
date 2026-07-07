import { SectionTitle } from "@/components/emek/common/SectionTitle";
import { CalculatorCard } from "@/components/emek/maas/CalculatorCard";
import type { SalaryCalculatorTool } from "@/types/salary";

interface CalculatorGridProps {
  title: string;
  subtitle: string;
  tools: SalaryCalculatorTool[];
}

export function CalculatorGrid({ title, subtitle, tools }: CalculatorGridProps) {
  return (
    <section className="mt-8 px-5">
      <SectionTitle title={title} subtitle={subtitle} />
      <div className="grid grid-cols-2 gap-3">
        {tools.map((tool) => (
          <CalculatorCard key={tool.id} tool={tool} />
        ))}
      </div>
    </section>
  );
}
