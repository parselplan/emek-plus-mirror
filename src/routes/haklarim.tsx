import { createFileRoute, redirect } from "@tanstack/react-router";
import { CalendarDays, Clock, Flag, Gavel, Palmtree } from "lucide-react";

import { AppCard } from "@/components/emek/common/AppCard";
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

const rightsCards = [
  {
    id: "leave",
    title: "İzin Hakları",
    description: "Yıllık, mazeret ve ücretsiz izin bakiyeni takip et.",
    status: "14 gün kullanılabilir",
    icon: Palmtree,
    accent: "text-green",
  },
  {
    id: "seniority",
    title: "Kıdem Hakkı",
    description: "Çalışma sürene göre kıdem tazminatı ve hakların.",
    status: "3+ yıl kıdem",
    icon: Flag,
    accent: "text-orange",
  },
  {
    id: "notice",
    title: "İhbar Süresi",
    description: "İşten ayrılma ve fesih süreçlerinde yasal süreler.",
    status: "6 hafta ihbar",
    icon: Gavel,
    accent: "text-violet",
  },
  {
    id: "overtime",
    title: "Fazla Mesai",
    description: "Mesai ücreti, onay ve kayıt yükümlülükleri.",
    status: "20 saat kayıtlı",
    icon: Clock,
    accent: "text-blue",
  },
  {
    id: "holiday",
    title: "Resmi Tatil",
    description: "Resmi tatil çalışmalarında ödeme ve izin hakları.",
    status: "Takvim güncel",
    icon: CalendarDays,
    accent: "text-orange",
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
        <AppCard className="bg-gradient-card shadow-card">
          <p className="text-xs font-medium text-muted-foreground">Hak Özeti</p>
          <p className="mt-1 text-2xl font-extrabold text-foreground">5 aktif hak alanı</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Sözleşme tipine göre kişiselleştirilmiş uyarılar yakında eklenecek.
          </p>
        </AppCard>
      </section>

      <section className="mt-6 px-5">
        <div className="grid grid-cols-1 gap-3">
          {rightsCards.map((card) => {
            const Icon = card.icon;
            return (
              <AppCard key={card.id} className="bg-card/60">
                <div className="flex items-start gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-background/60">
                    <Icon className={`h-5 w-5 ${card.accent}`} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-bold text-foreground">{card.title}</p>
                      <span className="shrink-0 rounded-lg bg-orange/15 px-2 py-0.5 text-[10px] font-bold text-orange">
                        {card.status}
                      </span>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {card.description}
                    </p>
                  </div>
                </div>
              </AppCard>
            );
          })}
        </div>
      </section>

      <BottomNavigation />
    </div>
  );
}
