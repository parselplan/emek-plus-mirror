import { AUTH_STORAGE_KEY } from "@/lib/auth-types";

/** Removes legacy localStorage session from the pre-cookie auth implementation. */
export function clearLegacyLocalSession(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(AUTH_STORAGE_KEY);
}
