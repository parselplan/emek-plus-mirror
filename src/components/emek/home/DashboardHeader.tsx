import { useNavigate } from "@tanstack/react-router";
import { Bell, LogOut } from "lucide-react";
import { useState } from "react";

import { Logo } from "@/components/emek/Logo";
import { useAuth } from "@/hooks/use-auth";
import type { DashboardStatusItem } from "@/types/home";

interface DashboardHeaderProps {
  displayName: string;
  subtitle: string;
  status?: DashboardStatusItem[];
}

export function DashboardHeader({ displayName, subtitle, status }: DashboardHeaderProps) {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await logout();
      navigate({ to: "/login", reloadDocument: true });
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <header className="px-5 pt-12">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <p className="text-sm text-muted-foreground">Merhaba 👋</p>
            <Logo size="sm" showMark={false} className="scale-90" />
          </div>
          <h1 className="mt-0.5 truncate text-2xl font-extrabold text-foreground">{displayName}</h1>
          <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            aria-label="Bildirimler"
            className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-border/70 bg-card/70 transition-all duration-200 hover:border-orange/50 active:scale-95"
          >
            <Bell className="h-5 w-5 text-foreground" />
            <span className="absolute right-2.5 top-2.5 h-2 w-2 animate-pulse-glow rounded-full bg-orange" />
          </button>
          <button
            type="button"
            aria-label="Çıkış yap"
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border/70 bg-card/70 transition-all duration-200 hover:border-destructive/50 active:scale-95 disabled:opacity-50"
          >
            <LogOut className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2.5">
        {status.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="animate-fade-up rounded-2xl border border-border/60 bg-card/50 p-3 backdrop-blur-sm"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <Icon className={`h-4 w-4 ${item.accent}`} />
              <p className="mt-2 text-[13px] font-extrabold leading-none text-foreground">
                {item.value}
              </p>
              <p className="mt-1 text-[10px] leading-tight text-muted-foreground">{item.label}</p>
            </div>
          );
        })}
      </div>
    </header>
  );
}
