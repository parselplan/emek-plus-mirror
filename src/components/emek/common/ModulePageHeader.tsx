import type { ReactNode } from "react";

import { Logo } from "@/components/emek/Logo";

interface ModulePageHeaderProps {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}

export function ModulePageHeader({ title, subtitle, action }: ModulePageHeaderProps) {
  return (
    <header className="flex items-start justify-between px-5 pt-12">
      <div>
        <h1 className="text-xl font-bold text-foreground">{title}</h1>
        {subtitle ? <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p> : null}
      </div>
      <div className="flex items-center gap-3">
        <Logo size="sm" />
        {action}
      </div>
    </header>
  );
}
