import { createFileRoute, redirect } from "@tanstack/react-router";

import { AiAssistantCard } from "@/components/emek/home/AiAssistantCard";
import { BenefitsGrid } from "@/components/emek/home/BenefitsCard";
import { BottomNavigation } from "@/components/emek/home/BottomNavigation";
import { ExperienceFeatures } from "@/components/emek/home/ExperienceFeatures";
import { FieldWorkerSection } from "@/components/emek/home/FieldWorkerSection";
import { HomeFooter } from "@/components/emek/home/HomeFooter";
import { HomeHeader } from "@/components/emek/home/HomeHeader";
import { PublicSectorSection } from "@/components/emek/home/PublicSectorSection";
import { QuickActions } from "@/components/emek/home/QuickActions";
import { SalarySummaryCard } from "@/components/emek/home/SalarySummaryCard";
import { SectorSelection } from "@/components/emek/home/SectorSelection";
import { SocialProofStats } from "@/components/emek/home/SocialProofStats";
import { useAuth } from "@/hooks/use-auth";
import { useHomeDashboard } from "@/hooks/use-home-dashboard";
import { getCurrentSession } from "@/lib/auth-fns";
import { formatPhoneDisplay } from "@/utils/formatters";

export const Route = createFileRoute("/home")({
  beforeLoad: async () => {
    const session = await getCurrentSession();
    if (!session) {
      throw redirect({ to: "/login" });
    }
    return { session };
  },
  component: Home,
});

function Home() {
  const { session } = useAuth();
  const { data } = useHomeDashboard();

  const displayName = session?.user.phone ? formatPhoneDisplay(session.user.phone) : "Hoş geldin!";

  const dashboard = data!;

  const SupportIcon = dashboard.supportHighlight.icon;

  return (
    <div className="app-frame pb-28">
      <HomeHeader displayName={displayName} />
      <SalarySummaryCard data={dashboard.salary} />
      <QuickActions items={dashboard.quickActions} />
      <SocialProofStats
        metrics={dashboard.socialProofStats}
        supportIcon={SupportIcon}
        supportTitle={dashboard.supportHighlight.title}
        supportSubtitle={dashboard.supportHighlight.subtitle}
      />
      <FieldWorkerSection
        title={dashboard.fieldWorkerSectionTitle}
        solutions={dashboard.fieldSolutions}
        salary={dashboard.salary}
        campaign={dashboard.campaign}
      />
      <SectorSelection
        title={dashboard.sectorSectionTitle}
        subtitle={dashboard.sectorSectionSubtitle}
        options={dashboard.sectorOptions}
      />
      <BenefitsGrid items={dashboard.supportBenefits} variant="support" />
      <BenefitsGrid items={dashboard.newBenefits} variant="new" />
      <PublicSectorSection
        title={dashboard.publicSectorSectionTitle}
        items={dashboard.publicSectorBenefits}
      />
      <AiAssistantCard content={dashboard.aiAssistant} />
      <ExperienceFeatures
        title={dashboard.experienceSectionTitle}
        features={dashboard.experienceFeatures}
      />
      <HomeFooter tagline={dashboard.footer.tagline} copyright={dashboard.footer.copyright} />
      <BottomNavigation />
    </div>
  );
}
