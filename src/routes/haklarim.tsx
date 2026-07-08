import { createFileRoute, redirect } from "@tanstack/react-router";
import {
  CalendarDays,
  ChevronRight,
  Clock,
  FileClock,
  Hourglass,
  Landmark,
  Palmtree,
  ShieldCheck,
  Umbrella,
  Wallet,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { ModulePageHeader } from "@/components/emek/common/ModulePageHeader";
import { BottomNavigation } from "@/components/emek/home/BottomNavigation";
import { getCurrentSession } from "@/lib/auth-fns";

export const Route = createFileRoute("/haklarim")({
  beforeLoad: async () => {
    const session = await getCurrentSession();
    if (!session) {
      throw redirect({ to: "/login" });
    }
    return { session };
  },
  component: HaklarimPage,
});

interface RightCard {
  id: string;
  title: string;
  status: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  tint: string;
}

const rightsCards: RightCard[] = [
  {
    id: "leave",
    title: "İzin Haklarım",
    status: "14 gün",
    description: "Yıllık, mazeret ve ücretsiz izin bakiyen.",
    icon: Palmtree,
    accent: "text-green",
    tint: "bg-green/15",
  },
  {
    id: "severance",
    title: "Kıdem Tazminatı",
    status: "3+ yıl",
    description: "Çalışma sürene göre kıdem hakkın.",
    icon: Wallet,
    accent: "text-orange",
    tint: "bg-orange/15",
  },
  {
    id: "notice",
    title: "İhbar Süresi",
    status: "6 hafta",
    description: "Fesih süreçlerinde yasal ihbar süren.",
    icon: FileClock,
    accent: "text-violet",
    tint: "bg-violet/15",
  },
  {
    id: "holidays",
    title: "Resmi Tatiller",
    status: "Güncel",
    description: "Resmi tatil takvimi ve ödeme hakların.",
    icon: CalendarDays,
    accent: "text-blue",
    tint: "bg-blue/15",
  },
  {
    id: "overtime",
    title: "Fazla Mesai",
    status: "20 saat",
    description: "Mesai ücreti ve kayıt yükümlülükleri.",
    icon: Clock,
    accent: "text-orange",
    tint: "bg-orange/15",
  },
  {
    id: "sgk",
    title: "SGK Bilgileri",
    status: "Aktif",
    description: "Prim gün sayısı ve sigorta durumun.",
    icon: Landmark,
    accent: "text-green",
    tint: "bg-green/15",
  },
  {
    id: "annual",
    title: "Yıllık İzin",
    status: "Hesapla",
    description: "Hak edilen yıllık izin gün sayısı.",
    icon: Umbrella,
    accent: "text-blue",
    tint: "bg-blue/15",
  },
  {
    id: "probation",
    title: "Deneme Süresi",
    status: "2 ay",
    description: "Deneme süresi hak ve sınırların.",
    icon: Hourglass,
    accent: "text-violet",
    tint: "bg-violet/15",
  },
];

function HaklarimPage() {
  return (
    <div className="app-frame pb-28">
      <ModulePageHeader
        title="Haklarım"
        subtitle="İzin, kıdem, ihbar ve mesai haklarını tek panelde izle."
      />

      <section className="mt-6 px-5">
        <div className="animate-fade-up relative overflow-hidden rounded-3xl bg-gradient-card p-5 shadow-card">
          <div className="pointer-events-none absolute -right-10 -top-12 h-36 w-36 rounded-full bg-green/20 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-10 h-36 w-36 rounded-full bg-violet/20 blur-2xl" />
          <div className="relative flex items-start justify-between">
            <div>
              <p className="text-xs font-medium text-muted-foreground">Hak Özeti</p>
              <p className="mt-1 text-3xl font-extrabold text-foreground">8 hak alanı</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Sözleşme tipine göre kişiselleştirilmiş uyarılar aktif.
              </p>
            </div>
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-green shadow-card">
              <ShieldCheck className="h-6 w-6 text-green-foreground" />
            </span>
          </div>
        </div>
      </section>

      <section className="mt-6 px-5">
        <div className="grid grid-cols-2 gap-3">
          {rightsCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <button
                key={card.id}
                type="button"
                style={{ animationDelay: `${index * 60}ms` }}
                className="group animate-fade-up flex flex-col items-start gap-3 rounded-2xl border border-border/60 bg-card/50 p-4 text-left opacity-0 transition-all duration-200 [animation-fill-mode:forwards] hover:border-violet/50 hover:bg-card active:scale-[0.98]"
              >
                <div className="flex w-full items-center justify-between">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl transition-colors ${card.tint}`}
                  >
                    <Icon className={`h-5 w-5 ${card.accent}`} />
                  </span>
                  <span className="rounded-lg bg-background/60 px-2 py-0.5 text-[10px] font-bold text-muted-foreground">
                    {card.status}
                  </span>
                </div>
                <div>
                  <span className="block text-sm font-bold text-foreground">{card.title}</span>
                  <span className="mt-0.5 block text-[11px] leading-relaxed text-muted-foreground">
                    {card.description}
                  </span>
                </div>
                <span className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-violet opacity-0 transition-opacity group-hover:opacity-100">
                  Detay <ChevronRight className="h-3 w-3" />
                </span>
              </button>
            );
          })}
        </div>
      </section>

      <BottomNavigation />
    </div>
  );
}
