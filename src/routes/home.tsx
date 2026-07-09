import { createFileRoute, redirect } from "@tanstack/react-router";

import { DashboardHeader } from "@/components/emek/home/DashboardHeader";
import { BottomNavigation } from "@/components/emek/home/BottomNavigation";
import { EmekAiCard } from "@/components/emek/home/EmekAiCard";
import { EmekServicesGrid } from "@/components/emek/home/EmekServicesGrid";
import { HomeFooter } from "@/components/emek/home/HomeFooter";
import { HomeSkeleton } from "@/components/emek/home/HomeSkeleton";
import { PremiumCampaign } from "@/components/emek/home/PremiumCampaign";
import { QuickActionsGrid } from "@/components/emek/home/QuickActionsGrid";
import { QuickStatsRow } from "@/components/emek/home/QuickStatsRow";
import { RightsScroller } from "@/components/emek/home/RightsScroller";
import { TodayForYou } from "@/components/emek/home/TodayForYou";
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
      <DashboardHeader
        displayName={displayName}
        subtitle={dashboard.greeting.subtitle}
        status={dashboard.status}
      />
      <QuickStatsRow cards={dashboard.quickStats} />
      <QuickActionsGrid actions={dashboard.homeQuickActions} />
      <EmekServicesGrid
        title={dashboard.emekServices.title}
        subtitle={dashboard.emekServices.subtitle}
        services={dashboard.emekServices.items}
      />
      <TodayForYou suggestions={dashboard.aiSuggestions} />
      <EmekAiCard content={dashboard.emekAi} />
      <RightsScroller title={dashboard.rightsSectionTitle} cards={dashboard.rightsInfoCards} />
      <PremiumCampaign title={dashboard.campaignSectionTitle} campaign={dashboard.campaign} />
      <HomeFooter tagline={dashboard.footer.tagline} copyright={dashboard.footer.copyright} />
      <BottomNavigation />
    </div>
  );
}
