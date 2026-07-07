import { salaryDashboardMock } from "@/data/salaryData";
import type { SalaryDashboardData } from "@/types/salary";

export type { SalaryDashboardData };

export function getSalaryDashboardData(): SalaryDashboardData {
  return salaryDashboardMock;
}

/** Mock veri katmanı — ileride API ile değiştirilecek */
export async function fetchSalaryDashboard(): Promise<SalaryDashboardData> {
  return getSalaryDashboardData();
}
