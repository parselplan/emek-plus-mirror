import { Link, useLocation } from "@tanstack/react-router";
import { Home, Briefcase, Calculator, Bot, LifeBuoy, User } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { to: "/home", label: "Ana Sayfa", icon: Home },
  { to: "/home", label: "İlanlar", icon: Briefcase, hash: "ilanlar" },
  { to: "/home", label: "Maaş Hesapla", icon: Calculator, hash: "maas" },
  { to: "/home", label: "Asistan", icon: Bot, center: true },
  { to: "/home", label: "Destek", icon: LifeBuoy, hash: "destek" },
  { to: "/home", label: "Profil", icon: User, hash: "profil" },
];

export function BottomNav({ active = "Ana Sayfa" }: { active?: string }) {
  const location = useLocation();
  void location;
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40">
      <div className="app-frame min-h-0">
        <div className="mx-3 mb-3 flex items-end justify-between rounded-3xl border border-border/70 bg-popover/95 px-2 pb-2 pt-2.5 shadow-card backdrop-blur-xl">
          {items.map((item) => {
            const isActive = item.label === active;
            const Icon = item.icon;
            if (item.center) {
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className="relative -mt-8 flex flex-1 flex-col items-center gap-1"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-violet shadow-glow-violet ring-4 ring-background">
                    <Icon className="h-6 w-6 text-white" />
                  </span>
                  <span
                    className={cn(
                      "text-[10px] font-semibold",
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
                key={item.label}
                to={item.to}
                className="flex flex-1 flex-col items-center gap-1 py-1"
              >
                <Icon
                  className={cn(
                    "h-5 w-5",
                    isActive ? "text-orange" : "text-muted-foreground",
                  )}
                />
                <span
                  className={cn(
                    "text-[10px] font-semibold leading-tight",
                    isActive ? "text-orange" : "text-muted-foreground",
                  )}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
