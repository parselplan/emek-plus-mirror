import { Link, useRouterState } from "@tanstack/react-router";
import { Home, Wallet, Sparkles, ShieldCheck, User } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type NavRoute = "/home" | "/maas" | "/asistan" | "/haklarim" | "/profil";

interface NavItem {
  to: NavRoute;
  label: string;
  icon: LucideIcon;
  center?: boolean;
}

const items: NavItem[] = [
  { to: "/home", label: "Ana Sayfa", icon: Home },
  { to: "/maas", label: "Maaş", icon: Wallet },
  { to: "/asistan", label: "Asistan", icon: Sparkles, center: true },
  { to: "/haklarim", label: "Haklarım", icon: ShieldCheck },
  { to: "/profil", label: "Profil", icon: User },
];

export function BottomNav() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="app-frame min-h-0">
        <div className="mx-3 mb-3 flex items-end justify-between rounded-3xl border border-border/70 bg-popover/95 px-2 pb-2 pt-2.5 shadow-card backdrop-blur-xl">
          {items.map((item) => {
            const isActive = pathname === item.to;
            const Icon = item.icon;

            if (item.center) {
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className="group relative -mt-8 flex flex-1 flex-col items-center gap-1"
                >
                  <span
                    className={cn(
                      "flex h-14 w-14 items-center justify-center rounded-full bg-gradient-violet ring-4 ring-background transition-all duration-300 group-active:scale-95",
                      isActive ? "shadow-glow-violet" : "opacity-90",
                    )}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </span>
                  <span
                    className={cn(
                      "text-[10px] font-bold transition-colors",
                      isActive ? "text-violet" : "text-muted-foreground",
                    )}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            }

            return (
              <Link
                key={item.to}
                to={item.to}
                className="flex flex-1 flex-col items-center py-1"
              >
                <span
                  className={cn(
                    "flex flex-col items-center gap-1 rounded-2xl px-3 py-1.5 transition-all duration-300 active:scale-95",
                    isActive ? "bg-orange/15" : "bg-transparent",
                  )}
                >
                  <Icon
                    className={cn(
                      "transition-all duration-300",
                      isActive ? "h-[22px] w-[22px] text-orange" : "h-5 w-5 text-muted-foreground",
                    )}
                    strokeWidth={isActive ? 2.4 : 2}
                  />
                  <span
                    className={cn(
                      "text-[10px] leading-tight transition-colors",
                      isActive ? "font-bold text-orange" : "font-semibold text-muted-foreground",
                    )}
                  >
                    {item.label}
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
