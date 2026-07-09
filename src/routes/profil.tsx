import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import {
  Briefcase,
  CalendarDays,
  ChevronRight,
  FileText,
  Headphones,
  Info,
  LogOut,
  Settings,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { toast } from "sonner";

import { ModulePageHeader } from "@/components/emek/common/ModulePageHeader";
import { BottomNavigation } from "@/components/emek/home/BottomNavigation";
import { mockUserProfile, profileMenuCards } from "@/data/profileData";
import { useAuth } from "@/hooks/use-auth";
import { getCurrentSession } from "@/lib/auth-fns";
import { formatPhoneDisplay } from "@/utils/formatters";

export const Route = createFileRoute("/profil")({
  beforeLoad: async () => {
    const session = await getCurrentSession();
    if (!session) {
      throw redirect({ to: "/login" });
    }
    return { session };
  },
  component: ProfilPage,
});

const menuIcons: Record<(typeof profileMenuCards)[number]["id"], LucideIcon> = {
  settings: Settings,
  documents: FileText,
  support: Headphones,
  about: Info,
};

const profileFields = [
  { id: "sector", label: "Sektör", value: mockUserProfile.sector, icon: ShieldCheck },
  { id: "workType", label: "Çalışma Tipi", value: mockUserProfile.workType, icon: Briefcase },
  {
    id: "startDate",
    label: "İşe Giriş Tarihi",
    value: mockUserProfile.startDate,
    icon: CalendarDays,
  },
];

function ProfilPage() {
  const navigate = useNavigate();
  const { session, logout } = useAuth();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const displayPhone = session?.user.phone
    ? formatPhoneDisplay(session.user.phone)
    : mockUserProfile.fullName;

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await logout();
      navigate({ to: "/login", reloadDocument: true });
    } finally {
      setIsLoggingOut(false);
    }
  };

  const handleMenuClick = (label: string) => {
    toast.info(`${label} yakında aktif olacak.`);
  };

  return (
    <div className="app-frame pb-28">
      <ModulePageHeader title="Profil" subtitle="Hesap bilgilerin ve uygulama tercihlerin." />

      <section className="mt-6 px-5">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-card p-5 shadow-card">
          <div className="pointer-events-none absolute -right-10 -top-12 h-36 w-36 rounded-full bg-orange/20 blur-2xl" />
          <div className="relative flex items-center gap-4">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-violet shadow-glow-violet">
              <UserRound className="h-8 w-8 text-white" />
            </span>
            <div className="min-w-0">
              <p className="truncate text-base font-extrabold text-foreground">
                {mockUserProfile.fullName}
              </p>
              <p className="text-sm text-muted-foreground">{displayPhone}</p>
              <p className="mt-1 text-[11px] text-green">Hesap doğrulandı</p>
            </div>
          </div>

          <div className="relative mt-5 grid grid-cols-1 gap-3">
            {profileFields.map((field) => {
              const Icon = field.icon;
              return (
                <div
                  key={field.id}
                  className="rounded-2xl border border-border/70 bg-background/40 p-3"
                >
                  <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                    <Icon className="h-3.5 w-3.5 text-violet" /> {field.label}
                  </div>
                  <p className="mt-1 text-sm font-extrabold text-foreground">{field.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mt-6 px-5">
        <p className="mb-3 text-sm font-bold text-foreground">Hesap</p>
        <div className="grid grid-cols-1 gap-3">
          {profileMenuCards.map((item) => {
            const Icon = menuIcons[item.id];
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleMenuClick(item.label)}
                className="group flex items-center justify-between rounded-2xl border border-border/60 bg-card/50 p-4 text-left transition-all hover:border-violet/50 hover:bg-card active:scale-[0.99]"
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-background/60">
                    <Icon className="h-5 w-5 text-orange" />
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-foreground">{item.label}</span>
                    <span className="block text-xs text-muted-foreground">{item.description}</span>
                  </span>
                </span>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </button>
            );
          })}
        </div>
      </section>

      <section className="mt-6 px-5">
        <button
          type="button"
          onClick={() => void handleLogout()}
          disabled={isLoggingOut}
          className="flex w-full items-center justify-center gap-2 rounded-2xl border border-destructive/30 bg-destructive/10 py-3.5 text-sm font-bold text-destructive disabled:opacity-50"
        >
          <LogOut className="h-4 w-4" />
          {isLoggingOut ? "Çıkış yapılıyor..." : "Çıkış Yap"}
        </button>
      </section>

      <BottomNavigation />
    </div>
  );
}
