import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface IconActionButtonProps {
  icon: LucideIcon;
  label: string;
  gradient: string;
  onClick?: () => void;
  className?: string;
}

export function IconActionButton({
  icon: Icon,
  label,
  gradient,
  onClick,
  className,
}: IconActionButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn("flex flex-col items-center gap-2", className)}
    >
      <span
        className={cn(
          "flex h-14 w-14 items-center justify-center rounded-2xl shadow-card",
          gradient,
        )}
      >
        <Icon className="h-6 w-6 text-white" />
      </span>
      <span className="text-center text-[11px] font-semibold leading-tight text-muted-foreground">
        {label}
      </span>
    </button>
  );
}
