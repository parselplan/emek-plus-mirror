import { useNavigate } from "@tanstack/react-router";
import { Bell } from "lucide-react";
import { useState } from "react";

import { Logo } from "@/components/emek/Logo";
import { useAuth } from "@/hooks/use-auth";

interface HomeHeaderProps {
  displayName: string;
}

export function HomeHeader({ displayName }: HomeHeaderProps) {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await logout();
      navigate({ to: "/login" });
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <header className="flex items-start justify-between px-5 pt-12">
      <div>
        <p className="text-sm text-muted-foreground">Merhaba,</p>
        <h1 className="text-xl font-bold text-foreground">{displayName} 👋</h1>
        <button
          type="button"
          onClick={handleLogout}
          disabled={isLoggingOut}
          className="mt-1 text-xs font-semibold text-muted-foreground underline-offset-2 hover:text-orange hover:underline disabled:opacity-50"
        >
          {isLoggingOut ? "Çıkış yapılıyor..." : "Çıkış Yap"}
        </button>
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
