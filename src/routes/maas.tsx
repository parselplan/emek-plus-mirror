import { createFileRoute, redirect } from "@tanstack/react-router";
import {
  ArrowLeftRight,
  ArrowRightLeft,
  CalendarClock,
  CalendarDays,
  ChevronRight,
  Clock,
  Coins,
  FileWarning,
  Receipt,
  Sparkles,
  Sun,
  TimerReset,
  Wallet,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import aiAssistant from "@/assets/ai-assistant.png";
import { ModulePageHeader } from "@/components/emek/common/ModulePageHeader";
import { SectionTitle } from "@/components/emek/common/SectionTitle";
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

interface SummaryMetric {
  id: string;
  label: string;
  value: string;
  icon: LucideIcon;
  accent: string;
}

const summaryMetrics: SummaryMetric[] = [
  {
    id: "gross",
    label: "Brüt Maaş",
    value: formatCurrency(62_400),
    icon: Receipt,
    accent: "text-blue",
  },
  {
    id: "hourly",
    label: "Saatlik Ücret",
    value: formatCurrency(284),
    icon: Clock,
    accent: "text-violet",
  },
  {
    id: "daily",
    label: "Günlük Ücret",
    value: formatCurrency(2_270),
    icon: Coins,
    accent: "text-green",
  },
  {
    id: "hours",
    label: "Aylık Çalışma",
    value: "225 Saat",
    icon: CalendarClock,
    accent: "text-orange",
  },
];

interface CalcTool {
  id: string;
  title: string;
  hint: string;
  icon: LucideIcon;
  accent: string;
}

const calcTools: CalcTool[] = [
  { id: "net-gross", title: "Net → Brüt", hint: "Net maaştan brüt", icon: ArrowRightLeft, accent: "text-orange" },
  { id: "gross-net", title: "Brüt → Net", hint: "Brüt maaştan net", icon: ArrowLeftRight, accent: "text-blue" },
  { id: "overtime", title: "Fazla Mesai", hint: "Mesai ücreti", icon: TimerReset, accent: "text-violet" },
  { id: "holiday", title: "Resmi Tatil", hint: "Tatil çalışması", icon: Sun, accent: "text-green" },
  { id: "weekend", title: "Hafta Tatili", hint: "Hafta sonu ücreti", icon: CalendarDays, accent: "text-orange" },
  { id: "severance", title: "Kıdem", hint: "Kıdem tazminatı", icon: Wallet, accent: "text-blue" },
  { id: "notice", title: "İhbar", hint: "İhbar tazminatı", icon: FileWarning, accent: "text-violet" },
];

interface RecentCalc {
  id: string;
  title: string;
  date: string;
  amount: string;
  icon: LucideIcon;
  accent: string;
}

const recentCalcs: RecentCalc[] = [
  {
    id: "1",
    title: "Brüt → Net Hesaplama",
    date: "5 Temmuz 2026",
    amount: formatCurrency(49_750),
    icon: ArrowLeftRight,
    accent: "text-blue",
  },
  {
    id: "2",
    title: "Fazla Mesai",
    date: "28 Haziran 2026",
    amount: formatCurrency(8_500),
    icon: TimerReset,
    accent: "text-violet",
  },
  {
    id: "3",
    title: "Kıdem Tazminatı",
    date: "12 Haziran 2026",
    amount: formatCurrency(124_800),
    icon: Wallet,
    accent: "text-green",
  },
];

function MaasPage() {
  return (
    <div className="app-frame pb-28">
      <ModulePageHeader title="Maaş" subtitle="Maaşını hesapla ve tüm gelir bilgilerini görüntüle." />

      {/* Maaş Özeti Kartı */}
      <section className="mt-6 px-5">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-card p-5 shadow-card">
          <div className="pointer-events-none absolute -right-10 -top-12 h-36 w-36 rounded-full bg-orange/20 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-10 h-36 w-36 rounded-full bg-violet/20 blur-2xl" />

          <div className="relative flex items-start justify-between">
            <div>
              <p className="text-xs font-medium text-muted-foreground">Tahmini Net Maaş</p>
              <p className="mt-1 text-4xl font-extrabold text-foreground">
                {formatCurrency(49_750)}
              </p>
              <p className="text-xs text-muted-foreground">Aylık net kazancın</p>
            </div>
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-orange shadow-glow-orange">
              <Wallet className="h-6 w-6 text-orange-foreground" />
            </span>
          </div>

          <div className="relative mt-5 grid grid-cols-2 gap-3">
            {summaryMetrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <div
                  key={metric.id}
                  className="rounded-2xl border border-border/70 bg-background/40 p-3"
                >
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Icon className={`h-3.5 w-3.5 ${metric.accent}`} /> {metric.label}
                  </div>
                  <p className="mt-1 text-base font-extrabold text-foreground">{metric.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hesaplama Araçları */}
      <section className="mt-8 px-5">
        <SectionTitle title="Hesaplama Araçları" subtitle="İhtiyacın olan hesaplamayı seç" />
        <div className="grid grid-cols-2 gap-3">
          {calcTools.map((tool) => {
            const Icon = tool.icon;
            return (
              <button
                key={tool.id}
                type="button"
                className="group flex flex-col items-start gap-3 rounded-2xl border border-border/60 bg-card/50 p-4 text-left transition-all duration-200 hover:border-violet/50 hover:bg-card active:scale-[0.98]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-background/60 transition-colors group-hover:bg-background">
                  <Icon className={`h-5 w-5 ${tool.accent}`} />
                </span>
                <span>
                  <span className="block text-sm font-bold text-foreground">{tool.title}</span>
                  <span className="block text-[11px] text-muted-foreground">{tool.hint}</span>
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Son Hesaplamalar */}
      <section className="mt-8 px-5">
        <SectionTitle title="Son Hesaplamalar" subtitle="Geçmiş hesaplamalarına göz at" />
        <div className="flex flex-col gap-3">
          {recentCalcs.map((calc) => {
            const Icon = calc.icon;
            return (
              <button
                key={calc.id}
                type="button"
                className="flex items-center justify-between gap-3 rounded-2xl border border-border/60 bg-card/50 p-3.5 text-left transition-colors hover:bg-card active:scale-[0.99]"
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-background/60">
                    <Icon className={`h-5 w-5 ${calc.accent}`} />
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-foreground">{calc.title}</span>
                    <span className="block text-[11px] text-muted-foreground">{calc.date}</span>
                  </span>
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-sm font-extrabold text-foreground">{calc.amount}</span>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* AI Yardım Kartı */}
      <section className="mt-8 px-5">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-violet p-5 shadow-glow-violet">
          <div className="max-w-[62%]">
            <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-white/80">
              <Sparkles className="h-3.5 w-3.5" /> Yapay Zeka
            </p>
            <h3 className="mt-1 text-lg font-extrabold text-white">AI ile maaşını analiz et</h3>
            <p className="mt-1 text-sm text-white/85">
              Bordronu, mesai ve tazminat haklarını yapay zekaya sorarak anında yorumlat.
            </p>
            <button
              type="button"
              className="mt-3 rounded-xl bg-white px-4 py-2 text-sm font-bold text-violet"
            >
              Hemen Sor
            </button>
          </div>
          <img
            src={aiAssistant}
            alt="EMEK+ yapay zeka asistanı"
            width={816}
            height={816}
            loading="lazy"
            className="absolute -bottom-2 right-0 h-40 w-40 animate-float object-contain drop-shadow-2xl"
          />
        </div>
      </section>

      <BottomNavigation />
    </div>
  );
}
