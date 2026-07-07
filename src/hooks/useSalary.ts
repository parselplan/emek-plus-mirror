import { useQuery } from "@tanstack/react-query";

import {
  fetchSalaryDashboard,
  getSalaryDashboardData,
  type SalaryDashboardData,
} from "@/services/salary/salary.service";

export const salaryDashboardQueryKey = ["salary", "dashboard"] as const;

export function useSalary() {
  return useQuery<SalaryDashboardData>({
    queryKey: salaryDashboardQueryKey,
    queryFn: fetchSalaryDashboard,
    initialData: getSalaryDashboardData,
    staleTime: 60_000,
  });
}
