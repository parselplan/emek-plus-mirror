import {
  clearSession,
  getSession,
  updateSession,
} from "@tanstack/react-start/server";

import type { AuthSession, EmekSessionData, PublicSession } from "@/lib/auth-types";

const THIRTY_DAYS_SEC = 30 * 24 * 60 * 60;

function getSessionConfig() {
  const password =
    process.env.SESSION_SECRET?.trim() ||
    "dev-emek-plus-session-secret-change-in-production";

  return {
    name: "emek-auth",
    password,
    maxAge: THIRTY_DAYS_SEC,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax" as const,
      path: "/",
    },
  };
}

export function toPublicSession(session: AuthSession): PublicSession {
  return {
    user: session.user,
    expiresAt: session.expiresAt,
  };
}

export async function readSecureSession(): Promise<PublicSession | null> {
  const session = await getSession<EmekSessionData>(getSessionConfig());
  const { user, expiresAt } = session.data;

  if (!user?.phone || !expiresAt || expiresAt <= Date.now()) {
    await clearSession(getSessionConfig());
    return null;
  }

  return { user, expiresAt };
}

export async function writeSecureSession(fullSession: AuthSession): Promise<void> {
  await updateSession(getSessionConfig(), {
    user: fullSession.user,
    expiresAt: fullSession.expiresAt,
    token: fullSession.token,
  });
}

export async function destroySecureSession(): Promise<void> {
  await clearSession(getSessionConfig());
}

export async function readSecureSessionToken(): Promise<string | null> {
  const session = await getSession<EmekSessionData>(getSessionConfig());
  return session.data.token ?? null;
}
