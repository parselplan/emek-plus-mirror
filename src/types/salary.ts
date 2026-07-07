import type { LucideIcon } from "lucide-react";

export type SalaryCalculatorId =
  | "net-gross"
  | "gross-net"
  | "overtime"
  | "holiday"
  | "weekend"
  | "severance"
  | "notice";

export interface SalaryOverview {
  estimatedNet: number;
  label: string;
  subtitle: string;
}

export interface SalarySummaryMetric {
  id: string;
  label: string;
  value: string;
  icon: LucideIcon;
  accent: string;
}

export interface SalaryCalculatorTool {
  id: SalaryCalculatorId;
  title: string;
  hint: string;
  icon: LucideIcon;
  accent: string;
}

export interface RecentSalaryCalculation {
  id: string;
  calculatorId: SalaryCalculatorId;
  title: string;
  date: string;
  amount: string;
  icon: LucideIcon;
  accent: string;
}

export interface AiSalaryAssistant {
  badge: string;
  title: string;
  description: string;
  ctaLabel: string;
}

export interface SalaryDashboardData {
  overview: SalaryOverview;
  summaryMetrics: SalarySummaryMetric[];
  calculatorTools: SalaryCalculatorTool[];
  recentCalculations: RecentSalaryCalculation[];
  aiAssistant: AiSalaryAssistant;
  calculatorSectionTitle: string;
  calculatorSectionSubtitle: string;
  recentSectionTitle: string;
  recentSectionSubtitle: string;
}
