import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface AppCardProps {
  children: ReactNode;
  className?: string;
  padding?: "none" | "sm" | "md";
}

const paddingMap = {
  none: "",
  sm: "p-3",
  md: "p-4",
};

export function AppCard({ children, className, padding = "md" }: AppCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border/60 bg-card/50",
        paddingMap[padding],
        className,
      )}
    >
      {children}
    </div>
  );
}
