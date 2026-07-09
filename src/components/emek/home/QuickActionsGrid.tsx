import { Link } from "@tanstack/react-router";

import { SectionTitle } from "@/components/emek/common/SectionTitle";
import type { HomeQuickAction } from "@/types/home";
import { cn } from "@/lib/utils";

interface QuickActionsGridProps {
  actions: HomeQuickAction[];
}

const cardClass =
  "flex flex-col items-center gap-2.5 rounded-2xl border border-border/60 bg-card/50 p-3.5 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-border active:scale-95";

function ActionInner({ action }: { action: HomeQuickAction }) {
  const Icon = action.icon;
  return (
    <>
      <span
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-2xl shadow-card",
          action.gradient,
        )}
      >
        <Icon className="h-5 w-5 text-white" />
      </span>
      <span className="text-[11px] font-semibold leading-tight text-foreground/90">
        {action.label}
      </span>
    </>
  );
}

export function QuickActionsGrid({ actions }: QuickActionsGridProps) {
  return (
    <section className="mt-8 px-5">
      <SectionTitle title="Hızlı İşlemler" className="mb-3" />
      <div className="grid grid-cols-3 gap-3">
        {actions.map((action) =>
          action.to ? (
            <Link key={action.id} to={action.to} className={cardClass}>
              <ActionInner action={action} />
            </Link>
          ) : (
            <button key={action.id} type="button" className={cardClass}>
              <ActionInner action={action} />
            </button>
          ),
        )}
      </div>
    </section>
  );
}
