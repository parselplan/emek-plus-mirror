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
  label: "Net Maaş",
  subtitle: "Aylık net kazancın",
};

export const salarySummaryMetrics = [
  {
    id: "gross",
    label: "Brüt Maaş",
    value: formatCurrency(68_250),
    icon: Receipt,
    accent: "text-blue",
  },
  {
    id: "hourly",
    label: "Saatlik Ücret",
    value: formatCurrency(295),
    icon: Clock,
    accent: "text-violet",
  },
  {
    id: "daily",
    label: "Günlük Ücret",
    value: formatCurrency(2_360),
    icon: Coins,
    accent: "text-green",
  },
  {
    id: "hours",
    label: "Aylık Çalışma",
    value: "225 saat",
    icon: CalendarClock,
    accent: "text-orange",
  },
];

export const salaryCalculatorTools = [
  {
    id: "net-gross",
    title: "Netten Brüte",
    hint: "Net maaştan brüt hesapla",
    icon: ArrowRightLeft,
    accent: "text-orange",
  },
  {
    id: "gross-net",
    title: "Brütten Nete",
    hint: "Brüt maaştan net hesapla",
    icon: ArrowLeftRight,
    accent: "text-blue",
  },
  {
    id: "overtime",
    title: "Fazla Mesai",
    hint: "Fazla mesai ücreti",
    icon: TimerReset,
    accent: "text-violet",
  },
  {
    id: "holiday",
    title: "Resmi Tatil Mesaisi",
    hint: "Resmi tatil çalışması",
    icon: Sun,
    accent: "text-green",
  },
  {
    id: "weekend",
    title: "Hafta Tatili Mesaisi",
    hint: "Hafta tatili çalışması",
    icon: CalendarDays,
    accent: "text-orange",
  },
  {
    id: "severance",
    title: "Kıdem Tazminatı",
    hint: "Kıdem tazminatı hesabı",
    icon: Wallet,
    accent: "text-blue",
  },
  {
    id: "notice",
    title: "İhbar Tazminatı",
    hint: "İhbar tazminatı hesabı",
    icon: FileWarning,
    accent: "text-violet",
  },
];

export const recentSalaryCalculations = [
  {
    id: "1",
    title: "Fazla Mesai Hesabı",
    date: "5 Temmuz 2026",
    amount: formatCurrency(8_500),
    icon: TimerReset,
    accent: "text-violet",
  },
  {
    id: "2",
    title: "Net Maaş Simülasyonu",
    date: "28 Haziran 2026",
    amount: formatCurrency(49_750),
    icon: ArrowLeftRight,
    accent: "text-blue",
  },
  {
    id: "3",
    title: "Kıdem Tazminatı Ön İzleme",
    date: "12 Haziran 2026",
    amount: formatCurrency(124_800),
    icon: Wallet,
    accent: "text-green",
  },
];

export const aiSalaryAssistant = {
  badge: "Yapay Zeka",
  title: "AI ile maaşını analiz et",
  description:
    "Bordro, fazla mesai, vergi dilimi ve tazminat sorularını EMEK+ Asistan'a sor.",
  ctaLabel: "Asistana Sor",
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
