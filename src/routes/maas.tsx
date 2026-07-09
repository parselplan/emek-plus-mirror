import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { z } from "zod";

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
import { isSalaryCalculatorId } from "@/utils/salaryCalculations";
import {
  appendSalaryHistory,
  readSalaryHistory,
  type StoredSalaryHistoryEntry,
} from "@/utils/salaryHistory";
import { formatCurrency, formatDate } from "@/utils/formatters";

const searchSchema = z.object({
  calculator: z
    .string()
    .optional()
    .refine((value) => !value || isSalaryCalculatorId(value), {
      message: "Geçersiz hesaplayıcı",
    }),
});

export const Route = createFileRoute("/maas")({
  validateSearch: searchSchema,
  beforeLoad: async () => {
    const session = await getCurrentSession();
    if (!session) {
      throw redirect({ to: "/login" });
    }
    return { session };
  },
  component: MaasPage,
});

function toRecentItem(
  entry: StoredSalaryHistoryEntry,
  toolById: Map<SalaryCalculatorId, { icon: RecentSalaryCalculation["icon"]; accent: string }>,
): RecentSalaryCalculation | null {
  const tool = toolById.get(entry.calculatorId);
  if (!tool) return null;

  return {
    id: entry.id,
    calculatorId: entry.calculatorId,
    title: entry.title,
    date: formatDate(entry.createdAt, "long"),
    amount: formatCurrency(entry.amount),
    icon: tool.icon,
    accent: tool.accent,
  };
}

function MaasPage() {
  const navigate = useNavigate({ from: "/maas" });
  const { calculator: calculatorFromSearch } = Route.useSearch();
  const { data } = useSalary();
  const dashboard = data?.overview ? data : getSalaryDashboardData();
  const [activeCalculator, setActiveCalculator] = useState<SalaryCalculatorId | null>(null);
  const [recentItems, setRecentItems] = useState<RecentSalaryCalculation[]>([]);

  const toolById = useMemo(
    () =>
      new Map(
        dashboard.calculatorTools.map((tool) => [
          tool.id,
          { icon: tool.icon, accent: tool.accent },
        ]),
      ),
    [dashboard.calculatorTools],
  );

  useEffect(() => {
    const stored = readSalaryHistory()
      .map((entry) => toRecentItem(entry, toolById))
      .filter((item): item is RecentSalaryCalculation => item !== null);

    if (stored.length > 0) {
      setRecentItems(stored);
      return;
    }

    setRecentItems(dashboard.recentCalculations);
  }, [dashboard.recentCalculations, toolById]);

  useEffect(() => {
    if (calculatorFromSearch && isSalaryCalculatorId(calculatorFromSearch)) {
      setActiveCalculator(calculatorFromSearch);
    }
  }, [calculatorFromSearch]);

  const openCalculator = (id: SalaryCalculatorId) => {
    setActiveCalculator(id);
    void navigate({ search: { calculator: id } });
  };

  const handleCalculated = useCallback(
    (payload: {
      calculatorId: SalaryCalculatorId;
      title: string;
      amount: number;
      inputs: Record<string, number>;
    }) => {
      const entry: StoredSalaryHistoryEntry = {
        id: payload.calculatorId,
        calculatorId: payload.calculatorId,
        title: payload.title,
        amount: payload.amount,
        createdAt: new Date().toISOString(),
        inputs: payload.inputs,
      };

      const stored = appendSalaryHistory(entry);
      const mapped = stored
        .map((item) => toRecentItem(item, toolById))
        .filter((item): item is RecentSalaryCalculation => item !== null);
      setRecentItems(mapped);
    },
    [toolById],
  );

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
          if (!open) {
            setActiveCalculator(null);
            void navigate({ search: { calculator: undefined } });
          }
        }}
        onCalculated={handleCalculated}
      />
    </div>
  );
}
