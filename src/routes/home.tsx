import { createFileRoute, redirect } from "@tanstack/react-router";

import { DashboardHeader } from "@/components/emek/home/DashboardHeader";
import { BottomNavigation } from "@/components/emek/home/BottomNavigation";
import { ExperienceFeatures } from "@/components/emek/home/ExperienceFeatures";
import { HomeFooter } from "@/components/emek/home/HomeFooter";
import { HomeSkeleton } from "@/components/emek/home/HomeSkeleton";
import { PersonalDevelopmentCard } from "@/components/emek/home/PersonalDevelopmentCard";
import { PremiumCampaign } from "@/components/emek/home/PremiumCampaign";
import { SectorSelection } from "@/components/emek/home/SectorSelection";
import { ServicesSection } from "@/components/emek/home/ServicesSection";
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
  const { data, isPending } = useHomeDashboard();

  const displayName = session?.user.phone ? formatPhoneDisplay(session.user.phone) : "Hoş geldin!";

  if (isPending || !data) {
    return <HomeSkeleton />;
  }

  const dashboard = data;

  return (
    <div className="app-frame pb-28">
      <DashboardHeader displayName={displayName} subtitle={dashboard.greeting.subtitle} />
      <ServicesSection
        supportBenefits={dashboard.supportBenefits}
        newBenefits={dashboard.newBenefits}
      />
      <PersonalDevelopmentCard />
      <SectorSelection
        title={dashboard.sectorSectionTitle}
        subtitle={dashboard.sectorSectionSubtitle}
        options={dashboard.sectorOptions}
      />
      <ExperienceFeatures
        title={dashboard.experienceSectionTitle}
        features={dashboard.experienceFeatures}
      />
      <PremiumCampaign title={dashboard.campaignSectionTitle} campaign={dashboard.campaign} />
      <HomeFooter tagline={dashboard.footer.tagline} copyright={dashboard.footer.copyright} />
      <BottomNavigation />
    </div>
  );
}
