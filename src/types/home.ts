import type { LucideIcon } from "lucide-react";

export interface SalarySummary {
  estimatedNet: number;
  changePercent: number;
  overtimeHours: number;
  extraEarnings: number;
  contractReview: {
    title: string;
    subtitle: string;
    alertCount: number;
  };
}

export interface QuickActionItem {
  id: string;
  label: string;
  icon: LucideIcon;
  gradient: string;
}

export interface StatMetric {
  id: string;
  icon: LucideIcon;
  value: string;
  label: string;
  color: string;
}

export interface FieldSolutionItem {
  id: string;
  icon: LucideIcon;
  label: string;
}

export interface CampaignItem {
  id: string;
  title: string;
  subtitle: string;
  cta: string;
}

export interface SectorOption {
  id: string;
  gradient: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
}

export interface BenefitCardItem {
  id: string;
  icon: LucideIcon;
  accent: string;
  title: string;
  description: string;
  cta: string;
  ctaGradient?: string;
  isNew?: boolean;
}

export interface PublicSectorCardItem {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  cta: string;
  badge?: string;
}

export interface ExperienceFeature {
  id: string;
  icon: LucideIcon;
  label: string;
  color: string;
}

export interface AiAssistantContent {
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
}

/** İleride günlük dönen dinamik alanlar için slot tanımı */
export type DashboardWidgetId =
  | "todayWorkHours"
  | "salaryEstimate"
  | "availableLeave"
  | "upcomingHoliday"
  | "payrollAlert"
  | "aiSuggestion"
  | "laborLawTip";

export interface DashboardWidgetSlot {
  id: DashboardWidgetId;
  enabled: boolean;
  priority: number;
}

/** Header altındaki mini durum kartları */
export interface DashboardStatusItem {
  id: string;
  icon: LucideIcon;
  label: string;
  value: string;
  accent: string;
}

/** Premium finans hissi veren yatay durum kartları */
export interface QuickStatCard {
  id: string;
  icon: LucideIcon;
  label: string;
  value: string;
  hint?: string;
  trend?: { value: string; positive: boolean };
  gradient: string;
  accent: string;
}

/** Home hızlı işlem kısayolları */
export interface HomeQuickAction {
  id: string;
  label: string;
  icon: LucideIcon;
  gradient: string;
  to?: "/maas" | "/haklarim" | "/asistan";
}

/** "Bugün Senin İçin" AI önerileri */
export interface AiSuggestionItem {
  id: string;
  icon: LucideIcon;
  title: string;
  accent: string;
  gradient: string;
}

/** "Haklarını Bil" yatay kaydırmalı bilgi kartları */
export interface RightInfoCard {
  id: string;
  icon: LucideIcon;
  title: string;
  value: string;
  hint: string;
  gradient: string;
  accent: string;
}
