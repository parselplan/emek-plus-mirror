import {
  aiAssistantContent,
  aiSuggestions,
  campaignHighlight,
  campaignSectionTitle,
  dashboardGreeting,
  dashboardQuickStats,
  dashboardStatus,
  emekAiCard,
  experienceFeatures,
  experienceSectionTitle,
  fieldSolutions,
  fieldWorkerSectionTitle,
  homeFooter,
  homeQuickActions,
  newBenefits,
  plannedDashboardWidgets,
  publicSectorBenefits,
  publicSectorSectionTitle,
  quickActions,
  rightsInfoCards,
  rightsSectionTitle,
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
  greeting: typeof dashboardGreeting;
  status: typeof dashboardStatus;
  quickStats: typeof dashboardQuickStats;
  homeQuickActions: typeof homeQuickActions;
  aiSuggestions: typeof aiSuggestions;
  rightsSectionTitle: string;
  rightsInfoCards: typeof rightsInfoCards;
  emekAi: typeof emekAiCard;
  campaign: typeof campaignHighlight;
  campaignSectionTitle: string;
  quickActions: typeof quickActions;
  socialProofStats: typeof socialProofStats;
  supportHighlight: typeof supportHighlight;
  fieldSolutions: typeof fieldSolutions;
  fieldWorkerSectionTitle: string;
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
    greeting: dashboardGreeting,
    status: dashboardStatus,
    quickStats: dashboardQuickStats,
    homeQuickActions,
    aiSuggestions,
    rightsSectionTitle,
    rightsInfoCards,
    emekAi: emekAiCard,
    campaign: campaignHighlight,
    campaignSectionTitle,
    quickActions,
    socialProofStats,
    supportHighlight,
    fieldSolutions,
    fieldWorkerSectionTitle,
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
