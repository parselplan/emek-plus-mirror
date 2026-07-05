import { IconActionButton } from "@/components/emek/common/IconActionButton";
import type { QuickActionItem } from "@/types/home";

interface QuickActionsProps {
  items: QuickActionItem[];
  title?: string;
}

export function QuickActions({ items, title = "Kısayollar" }: QuickActionsProps) {
  return (
    <section className="mt-6 px-5">
      <h2 className="mb-3 text-sm font-bold text-foreground">{title}</h2>
      <div className="grid grid-cols-4 gap-3">
        {items.map((item) => (
          <IconActionButton
            key={item.id}
            icon={item.icon}
            label={item.label}
            gradient={item.gradient}
          />
        ))}
      </div>
    </section>
  );
}
