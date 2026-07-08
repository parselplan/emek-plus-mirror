import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import {
  Bell,
  Briefcase,
  ChevronRight,
  Crown,
  FileText,
  Headphones,
  Info,
  LogOut,
  Settings,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

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

interface MenuItem {
  id: string;
  label: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  tint: string;
}

interface MenuGroup {
  title: string;
  items: MenuItem[];
}

const menuGroups: MenuGroup[] = [
  {
    title: "Hesap",
    items: [
      {
        id: "notifications",
        label: "Bildirimler",
        description: "Uyarı ve hatırlatma tercihleri",
        icon: Bell,
        accent: "text-orange",
        tint: "bg-orange/15",
      },
      {
        id: "documents",
        label: "Belgelerim",
        description: "Bordro, sözleşme ve raporlar",
        icon: FileText,
        accent: "text-blue",
        tint: "bg-blue/15",
      },
      {
        id: "settings",
        label: "Ayarlar",
        description: "Gizlilik, güvenlik ve dil",
        icon: Settings,
        accent: "text-violet",
        tint: "bg-violet/15",
      },
    ],
  },
  {
    title: "Yardım",
    items: [
      {
        id: "support",
        label: "Destek",
        description: "Canlı destek ve sık sorulan sorular",
        icon: Headphones,
        accent: "text-green",
        tint: "bg-green/15",
      },
      {
        id: "about",
        label: "Hakkımızda",
        description: "EMEK+ ve KVKK politikaları",
        icon: Info,
        accent: "text-blue",
        tint: "bg-blue/15",
      },
    ],
  },
];

const workInfo = [
  { id: "sector", label: "Sektör", value: "İnşaat", icon: ShieldCheck },
  { id: "company", label: "Firma", value: "EMEK Yapı A.Ş.", icon: Briefcase },
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
        <div className="animate-fade-up relative overflow-hidden rounded-3xl bg-gradient-card p-5 shadow-card">
          <div className="pointer-events-none absolute -right-10 -top-12 h-36 w-36 rounded-full bg-orange/20 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-10 h-36 w-36 rounded-full bg-violet/20 blur-2xl" />

          <div className="relative flex items-center gap-4">
            <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-violet shadow-glow-violet">
              <UserRound className="h-8 w-8 text-white" />
              <span className="absolute -bottom-1.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-green ring-2 ring-card">
                <ShieldCheck className="h-3.5 w-3.5 text-green-foreground" />
              </span>
            </span>
            <div className="min-w-0">
              <p className="truncate text-base font-extrabold text-foreground">{displayPhone}</p>
              <span className="mt-1 inline-flex items-center gap-1 rounded-lg bg-orange/15 px-2 py-0.5 text-[11px] font-bold text-orange">
                <Crown className="h-3 w-3" /> EMEK+ Premium
              </span>
              <p className="mt-1 text-[11px] text-green">Hesap doğrulandı</p>
            </div>
          </div>

          <div className="relative mt-5 grid grid-cols-2 gap-3">
            {workInfo.map((info) => {
              const Icon = info.icon;
              return (
                <div
                  key={info.id}
                  className="rounded-2xl border border-border/70 bg-background/40 p-3"
                >
                  <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                    <Icon className="h-3.5 w-3.5 text-violet" /> {info.label}
                  </div>
                  <p className="mt-1 truncate text-sm font-extrabold text-foreground">
                    {info.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {menuGroups.map((group) => (
        <section key={group.title} className="mt-6 px-5">
          <p className="mb-3 text-sm font-bold text-foreground">{group.title}</p>
          <div className="grid grid-cols-1 gap-3">
            {group.items.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  type="button"
                  className="group flex items-center justify-between rounded-2xl border border-border/60 bg-card/50 p-4 text-left transition-all duration-200 hover:border-violet/50 hover:bg-card active:scale-[0.99]"
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-2xl ${item.tint}`}
                    >
                      <Icon className={`h-5 w-5 ${item.accent}`} />
                    </span>
                    <span>
                      <span className="block text-sm font-bold text-foreground">{item.label}</span>
                      <span className="block text-xs text-muted-foreground">
                        {item.description}
                      </span>
                    </span>
                  </span>
                  <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                </button>
              );
            })}
          </div>
        </section>
      ))}

      <section className="mt-6 px-5">
        <button
          type="button"
          onClick={() => void handleLogout()}
          disabled={isLoggingOut}
          className="flex w-full items-center justify-center gap-2 rounded-2xl border border-destructive/30 bg-destructive/10 py-3.5 text-sm font-bold text-destructive transition-colors hover:bg-destructive/15 disabled:opacity-50"
        >
          <LogOut className="h-4 w-4" />
          {isLoggingOut ? "Çıkış yapılıyor..." : "Çıkış Yap"}
        </button>
      </section>

      <BottomNavigation />
    </div>
  );
}
