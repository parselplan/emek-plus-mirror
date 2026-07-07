import { createFileRoute, redirect } from "@tanstack/react-router";
import { Calculator, Clock, Landmark, Receipt, Wallet } from "lucide-react";

import { AppCard } from "@/components/emek/common/AppCard";
import { ModulePageHeader } from "@/components/emek/common/ModulePageHeader";
import { BottomNavigation } from "@/components/emek/home/BottomNavigation";
import { getCurrentSession } from "@/lib/auth-fns";
import { formatCurrency } from "@/utils/formatters";

export const Route = createFileRoute("/maas")({
  beforeLoad: async () => {
    const session = await getCurrentSession();
    if (!session) {
      throw redirect({ to: "/login" });
    }
    return { session };
  },
  component: MaasPage,
});

const salaryCards = [
  {
    id: "net",
    title: "Tahmini Net Maaş",
    value: formatCurrency(49_750),
    hint: "Bu ay için öngörülen net kazanç",
    icon: Wallet,
    accent: "text-orange",
  },
  {
    id: "gross",
    title: "Brüt Maaş",
    value: formatCurrency(62_400),
    hint: "Sözleşmene göre brüt tutar",
    icon: Receipt,
    accent: "text-blue",
  },
  {
    id: "overtime",
    title: "Fazla Mesai",
    value: "20 Saat",
    hint: `${formatCurrency(8_500)} ek kazanç potansiyeli`,
    icon: Clock,
    accent: "text-violet",
  },
  {
    id: "taxes",
    title: "AGİ & Vergiler",
    value: formatCurrency(4_280),
    hint: "Tahmini kesinti ve AGİ etkisi",
    icon: Landmark,
    accent: "text-green",
  },
];

function MaasPage() {
  return (
    <div className="app-frame pb-28">
      <ModulePageHeader
        title="Maaş"
        subtitle="Net kazancını, kesintilerini ve mesai etkisini tek ekranda gör."
      />

      <section className="mt-6 px-5">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-card p-5 shadow-card">
          <div className="pointer-events-none absolute -right-8 -top-10 h-32 w-32 rounded-full bg-orange/20 blur-2xl" />
          <p className="text-xs font-medium text-muted-foreground">Bu Ay Özeti</p>
          <p className="mt-1 text-3xl font-extrabold text-foreground">{formatCurrency(49_750)}</p>
          <p className="text-xs text-muted-foreground">Tahmini aylık net maaş</p>
          <button
            type="button"
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-orange py-3 text-sm font-bold text-orange-foreground shadow-glow-orange"
          >
            <Calculator className="h-4 w-4" />
            Detaylı Maaş Hesapla
          </button>
        </div>
      </section>

      <section className="mt-6 px-5">
        <div className="grid grid-cols-1 gap-3">
          {salaryCards.map((card) => {
            const Icon = card.icon;
            return (
              <AppCard key={card.id} className="bg-card/60">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs text-muted-foreground">{card.title}</p>
                    <p className="mt-1 text-xl font-extrabold text-foreground">{card.value}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{card.hint}</p>
                  </div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-background/60">
                    <Icon className={`h-5 w-5 ${card.accent}`} />
                  </span>
                </div>
              </AppCard>
            );
          })}
        </div>
      </section>

      <section className="mt-6 px-5">
        <AppCard className="border-dashed bg-card/40">
          <p className="text-sm font-semibold text-foreground">Yakında: bordro karşılaştırma</p>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            Gerçek bordronu yükleyerek tahmini maaşınla karşılaştırma ve uyarı analizi bu alanda
            yer alacak.
          </p>
        </AppCard>
      </section>

      <BottomNavigation />
    </div>
  );
}
