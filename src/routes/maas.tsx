import { createFileRoute, redirect } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { ModulePageHeader } from "@/components/emek/common/ModulePageHeader";
import { BottomNavigation } from "@/components/emek/home/BottomNavigation";
import { AiSalaryCard } from "@/components/emek/maas/AiSalaryCard";
import { CalculatorGrid } from "@/components/emek/maas/CalculatorGrid";
import { RecentCalculations } from "@/components/emek/maas/RecentCalculations";
import { SalaryCalculatorDrawer } from "@/components/emek/maas/SalaryCalculatorDrawer";
import { SalarySummary } from "@/components/emek/maas/SalarySummary";
import { useSalary } from "@/hooks/useSalary";
import { getCurrentSession } from "@/lib/auth-fns";
import { getSalaryDashboardData } from "@/services/salary/salary.service";
import type { RecentSalaryCalculation, SalaryCalculatorId } from "@/types/salary";
import { formatCurrency, formatDate } from "@/utils/formatters";

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
  const dashboard = data?.overview ? data : getSalaryDashboardData();
  const [activeCalculator, setActiveCalculator] = useState<SalaryCalculatorId | null>(null);
  const [recentItems, setRecentItems] = useState<RecentSalaryCalculation[]>(
    dashboard.recentCalculations,
  );

  const toolById = useMemo(
    () => new Map(dashboard.calculatorTools.map((tool) => [tool.id, tool])),
    [dashboard.calculatorTools],
  );

  const openCalculator = (id: SalaryCalculatorId) => {
    setActiveCalculator(id);
  };

  const handleCalculated = (payload: {
    calculatorId: SalaryCalculatorId;
    title: string;
    amount: number;
  }) => {
    const tool = toolById.get(payload.calculatorId);
    if (!tool) return;

    setRecentItems((current) => {
      const nextItem: RecentSalaryCalculation = {
        id: `${payload.calculatorId}-${Date.now()}`,
        calculatorId: payload.calculatorId,
        title: payload.title,
        date: formatDate(new Date(), "long"),
        amount: formatCurrency(payload.amount),
        icon: tool.icon,
        accent: tool.accent,
      };

      return [nextItem, ...current.filter((item) => item.calculatorId !== payload.calculatorId)].slice(
        0,
        5,
      );
    });
  };

  return (
    <div className="app-frame pb-28">
      <ModulePageHeader
        title="Maaş"
        subtitle="Maaşını hesapla ve tüm gelir bilgilerini görüntüle."
      />

      <SalarySummary overview={dashboard.overview} metrics={dashboard.summaryMetrics} />

      <CalculatorGrid
        title={dashboard.calculatorSectionTitle}
        subtitle={dashboard.calculatorSectionSubtitle}
        tools={dashboard.calculatorTools}
        onToolSelect={openCalculator}
      />

      <RecentCalculations
        title={dashboard.recentSectionTitle}
        subtitle={dashboard.recentSectionSubtitle}
        items={recentItems}
        onItemSelect={openCalculator}
      />

      <AiSalaryCard content={dashboard.aiAssistant} />

      <BottomNavigation />

      <SalaryCalculatorDrawer
        calculatorId={activeCalculator}
        open={activeCalculator !== null}
        onOpenChange={(open) => {
          if (!open) setActiveCalculator(null);
        }}
        onCalculated={handleCalculated}
      />
    </div>
  );
}
