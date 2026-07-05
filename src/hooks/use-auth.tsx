import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { getCurrentSession, logout as logoutRequest } from "@/lib/auth-fns";
import type { PublicSession } from "@/lib/auth-types";
import { clearLegacyLocalSession } from "@/lib/secure-storage";

interface AuthContextValue {
  session: PublicSession | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (session: PublicSession) => void;
  logout: () => Promise<void>;
  refreshSession: () => Promise<PublicSession | null>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<PublicSession | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const refreshSession = useCallback(async () => {
    const nextSession = await getCurrentSession();
    setSession(nextSession);
    return nextSession;
  }, []);

  useEffect(() => {
    clearLegacyLocalSession();

    refreshSession()
      .catch(() => setSession(null))
      .finally(() => setIsLoading(false));
  }, [refreshSession]);

  const login = useCallback((nextSession: PublicSession) => {
    clearLegacyLocalSession();
    setSession(nextSession);
  }, []);

  const logout = useCallback(async () => {
    try {
      await logoutRequest();
    } finally {
      clearLegacyLocalSession();
      setSession(null);
    }
  }, []);

  const value = useMemo(
    () => ({
      session,
      isAuthenticated: session != null,
      isLoading,
      login,
      logout,
      refreshSession,
    }),
    [session, isLoading, login, logout, refreshSession],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
