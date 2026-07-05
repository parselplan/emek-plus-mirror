import { Bell } from "lucide-react";

import { Logo } from "@/components/emek/Logo";

interface HomeHeaderProps {
  displayName: string;
}

export function HomeHeader({ displayName }: HomeHeaderProps) {
  return (
    <header className="flex items-center justify-between px-5 pt-12">
      <div>
        <p className="text-sm text-muted-foreground">Merhaba,</p>
        <h1 className="text-xl font-bold text-foreground">{displayName} 👋</h1>
      </div>
      <div className="flex items-center gap-3">
        <Logo size="sm" />
        <button
          type="button"
          className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-card"
        >
          <Bell className="h-5 w-5 text-foreground" />
          <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-orange" />
        </button>
      </div>
    </header>
  );
}
