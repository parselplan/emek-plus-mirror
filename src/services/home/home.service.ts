import {
  aiAssistantContent,
  campaignHighlight,
  experienceFeatures,
  experienceSectionTitle,
  fieldSolutions,
  fieldWorkerSectionTitle,
  homeFooter,
  newBenefits,
  plannedDashboardWidgets,
  publicSectorBenefits,
  publicSectorSectionTitle,
  quickActions,
  salarySummary,
  sectorOptions,
  sectorSectionSubtitle,
  sectorSectionTitle,
  socialProofStats,
  supportBenefits,
  supportHighlight,
} from "@/data/homeData";
import type { DashboardWidgetSlot } from "@/types/home";

export interface HomeDashboardData {
  salary: typeof salarySummary;
  quickActions: typeof quickActions;
  socialProofStats: typeof socialProofStats;
  supportHighlight: typeof supportHighlight;
  fieldSolutions: typeof fieldSolutions;
  fieldWorkerSectionTitle: string;
  campaign: typeof campaignHighlight;
  sectorOptions: typeof sectorOptions;
  sectorSectionTitle: string;
  sectorSectionSubtitle: string;
  supportBenefits: typeof supportBenefits;
  newBenefits: typeof newBenefits;
  publicSectorBenefits: typeof publicSectorBenefits;
  publicSectorSectionTitle: string;
  aiAssistant: typeof aiAssistantContent;
  experienceFeatures: typeof experienceFeatures;
  experienceSectionTitle: string;
  footer: typeof homeFooter;
  plannedWidgets: DashboardWidgetSlot[];
}

export function getHomeDashboardData(): HomeDashboardData {
  return {
    salary: salarySummary,
    quickActions,
    socialProofStats,
    supportHighlight,
    fieldSolutions,
    fieldWorkerSectionTitle,
    campaign: campaignHighlight,
    sectorOptions,
    sectorSectionTitle,
    sectorSectionSubtitle,
    supportBenefits,
    newBenefits,
    publicSectorBenefits,
    publicSectorSectionTitle,
    aiAssistant: aiAssistantContent,
    experienceFeatures,
    experienceSectionTitle,
    footer: homeFooter,
    plannedWidgets: plannedDashboardWidgets,
  };
}

/** Mock veri katmanı — ileride API/Supabase ile değiştirilecek */
export async function fetchHomeDashboard(): Promise<HomeDashboardData> {
  return getHomeDashboardData();
}
