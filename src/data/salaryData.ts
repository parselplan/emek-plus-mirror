import {
  ArrowLeftRight,
  ArrowRightLeft,
  CalendarClock,
  CalendarDays,
  Clock,
  Coins,
  FileWarning,
  Receipt,
  Sun,
  TimerReset,
  Wallet,
} from "lucide-react";

import type { SalaryDashboardData } from "@/types/salary";
import { formatCurrency } from "@/utils/formatters";

export const salaryOverview = {
  estimatedNet: 49_750,
  label: "Tahmini Net Maaş",
  subtitle: "Aylık net kazancın",
};

export const salarySummaryMetrics = [
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

export const salaryCalculatorTools = [
  {
    id: "net-gross",
    title: "Net → Brüt",
    hint: "Net maaştan brüt",
    icon: ArrowRightLeft,
    accent: "text-orange",
  },
  {
    id: "gross-net",
    title: "Brüt → Net",
    hint: "Brüt maaştan net",
    icon: ArrowLeftRight,
    accent: "text-blue",
  },
  {
    id: "overtime",
    title: "Fazla Mesai",
    hint: "Mesai ücreti",
    icon: TimerReset,
    accent: "text-violet",
  },
  {
    id: "holiday",
    title: "Resmi Tatil",
    hint: "Tatil çalışması",
    icon: Sun,
    accent: "text-green",
  },
  {
    id: "weekend",
    title: "Hafta Tatili",
    hint: "Hafta sonu ücreti",
    icon: CalendarDays,
    accent: "text-orange",
  },
  {
    id: "severance",
    title: "Kıdem",
    hint: "Kıdem tazminatı",
    icon: Wallet,
    accent: "text-blue",
  },
  {
    id: "notice",
    title: "İhbar",
    hint: "İhbar tazminatı",
    icon: FileWarning,
    accent: "text-violet",
  },
];

export const recentSalaryCalculations = [
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

export const aiSalaryAssistant = {
  badge: "Yapay Zeka",
  title: "AI ile maaşını analiz et",
  description: "Bordronu, mesai ve tazminat haklarını yapay zekaya sorarak anında yorumlat.",
  ctaLabel: "Hemen Sor",
};

export const salaryDashboardMock: SalaryDashboardData = {
  overview: salaryOverview,
  summaryMetrics: salarySummaryMetrics,
  calculatorTools: salaryCalculatorTools,
  recentCalculations: recentSalaryCalculations,
  aiAssistant: aiSalaryAssistant,
  calculatorSectionTitle: "Hesaplama Araçları",
  calculatorSectionSubtitle: "İhtiyacın olan hesaplamayı seç",
  recentSectionTitle: "Son Hesaplamalar",
  recentSectionSubtitle: "Geçmiş hesaplamalarına göz at",
};
