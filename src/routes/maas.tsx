import { createFileRoute, redirect } from "@tanstack/react-router";

import { ModulePageHeader } from "@/components/emek/common/ModulePageHeader";
import { AiSalaryCard } from "@/components/emek/maas/AiSalaryCard";
import { CalculatorGrid } from "@/components/emek/maas/CalculatorGrid";
import { RecentCalculations } from "@/components/emek/maas/RecentCalculations";
import { SalarySummary } from "@/components/emek/maas/SalarySummary";
import { BottomNavigation } from "@/components/emek/home/BottomNavigation";
import { useSalary } from "@/hooks/useSalary";
import { getCurrentSession } from "@/lib/auth-fns";

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

function MaasPage() {
  const { data } = useSalary();
  const dashboard = data!;

  return (
    <div className="app-frame pb-28">
      <ModulePageHeader title="Maaş" subtitle="Maaşını hesapla ve tüm gelir bilgilerini görüntüle." />

      <SalarySummary overview={dashboard.overview} metrics={dashboard.summaryMetrics} />
      <CalculatorGrid
        title={dashboard.calculatorSectionTitle}
        subtitle={dashboard.calculatorSectionSubtitle}
        tools={dashboard.calculatorTools}
      />
      <RecentCalculations
        title={dashboard.recentSectionTitle}
        subtitle={dashboard.recentSectionSubtitle}
        items={dashboard.recentCalculations}
      />
      <AiSalaryCard content={dashboard.aiAssistant} />

      <BottomNavigation />
    </div>
  );
}
