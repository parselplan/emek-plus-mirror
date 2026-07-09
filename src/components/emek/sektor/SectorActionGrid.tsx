import type { FieldSolutionItem } from "@/types/home";
import { cn } from "@/lib/utils";

interface SectorActionGridProps {
  items: FieldSolutionItem[];
  variant: "retail" | "education";
}

export function SectorActionGrid({ items, variant }: SectorActionGridProps) {
  const isRetail = variant === "retail";

  return (
    <div className="grid grid-cols-4 gap-2">
      {items.map((item) => {
        const Icon = item.icon;
        const lines = item.labelLines ?? [item.label];

        return (
          <button
            key={item.id}
            type="button"
            className="group flex flex-col items-center gap-2.5 bg-transparent p-1 transition-transform active:scale-[0.97]"
          >
            <span
              className={cn(
                "flex h-14 w-14 items-center justify-center rounded-2xl",
                isRetail
                  ? "bg-orange/8"
                  : "border border-blue/20 bg-blue/10 shadow-[0_0_16px_rgba(59,130,246,0.15)]",
              )}
            >
              <Icon
                className={cn(
                  "h-7 w-7",
                  isRetail ? "text-orange" : "text-blue drop-shadow-[0_0_8px_rgba(96,165,250,0.45)]",
                )}
              />
            </span>
            <span className="text-center text-[10px] font-semibold leading-tight text-foreground/90">
              {lines.length === 2 ? (
                <>
                  <span className="block">{lines[0]}</span>
                  <span className="block">{lines[1]}</span>
                </>
              ) : (
                item.label
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
}
