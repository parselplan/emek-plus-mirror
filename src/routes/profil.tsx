import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import {
  Bell,
  ChevronRight,
  Headphones,
  LogOut,
  ShieldCheck,
  UserRound,
} from "lucide-react";

import { AppCard } from "@/components/emek/common/AppCard";
import { ModulePageHeader } from "@/components/emek/common/ModulePageHeader";
import { BottomNavigation } from "@/components/emek/home/BottomNavigation";
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

const menuItems = [
  {
    id: "settings",
    label: "Hesap Ayarları",
    description: "Bildirim, gizlilik ve güvenlik tercihleri",
    icon: Bell,
  },
  {
    id: "support",
    label: "Destek Merkezi",
    description: "Canlı destek ve sık sorulan sorular",
    icon: Headphones,
  },
  {
    id: "kvkk",
    label: "KVKK & Güvenlik",
    description: "Veri kullanımı ve gizlilik politikası",
    icon: ShieldCheck,
  },
];

function ProfilPage() {
  const navigate = useNavigate();
  const { session, logout } = useAuth();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const displayPhone = session?.user.phone
    ? formatPhoneDisplay(session.user.phone)
    : "Kullanıcı";

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
    <div className="app-frame pb-28">
      <ModulePageHeader title="Profil" subtitle="Hesap bilgilerin ve uygulama tercihlerin." />

      <section className="mt-6 px-5">
        <AppCard className="bg-gradient-card shadow-card">
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet/15">
              <UserRound className="h-7 w-7 text-violet" />
            </span>
            <div>
              <p className="text-sm font-bold text-foreground">{displayPhone}</p>
              <p className="text-xs text-muted-foreground">EMEK+ üyesi</p>
              <p className="mt-1 text-[11px] text-green">Hesap doğrulandı</p>
            </div>
          </div>
        </AppCard>
      </section>

      <section className="mt-6 px-5">
        <div className="grid grid-cols-1 gap-3">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                type="button"
                className="flex items-center justify-between rounded-2xl border border-border/60 bg-card/60 p-4 text-left transition-transform active:scale-[0.99]"
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-background/60">
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
