import { useQuery } from "@tanstack/react-query";

import {
  fetchHomeDashboard,
  getHomeDashboardData,
  type HomeDashboardData,
} from "@/services/home/home.service";

export const homeDashboardQueryKey = ["home", "dashboard"] as const;

export function useHomeDashboard() {
  return useQuery<HomeDashboardData>({
    queryKey: homeDashboardQueryKey,
    queryFn: fetchHomeDashboard,
    initialData: getHomeDashboardData,
    staleTime: 60_000,
  });
}
