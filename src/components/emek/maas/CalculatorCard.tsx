import type { SalaryCalculatorTool } from "@/types/salary";

interface CalculatorCardProps {
  tool: SalaryCalculatorTool;
}

export function CalculatorCard({ tool }: CalculatorCardProps) {
  const Icon = tool.icon;

  return (
    <button
      type="button"
      className="group flex flex-col items-start gap-3 rounded-2xl border border-border/60 bg-card/50 p-4 text-left transition-all duration-200 hover:border-violet/50 hover:bg-card active:scale-[0.98]"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-background/60 transition-colors group-hover:bg-background">
        <Icon className={`h-5 w-5 ${tool.accent}`} />
      </span>
      <span>
        <span className="block text-sm font-bold text-foreground">{tool.title}</span>
        <span className="block text-[11px] text-muted-foreground">{tool.hint}</span>
      </span>
    </button>
  );
}
