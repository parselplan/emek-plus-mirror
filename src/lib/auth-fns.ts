import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import type { AuthSession, PublicSession } from "@/lib/auth-types";
import { AuthError } from "@/lib/auth-errors";

const phoneSchema = z.object({
  phone: z.string().regex(/^5\d{9}$/, "Geçerli bir telefon numarası gir."),
});

const verifySchema = z.object({
  phone: z.string().regex(/^5\d{9}$/, "Geçerli bir telefon numarası gir."),
  code: z.string().regex(/^\d{6}$/, "6 haneli doğrulama kodunu gir."),
});

async function runAuth<T>(action: () => Promise<T>): Promise<T> {
  try {
    return await action();
  } catch (error) {
    if (error instanceof AuthError) {
      throw new Error(error.message);
    }
    throw error;
  }
}

export const sendOtp = createServerFn({ method: "POST" })
  .validator(phoneSchema)
  .handler(async ({ data }) => {
    const { sendOtpToPhone } = await import("@/server/auth-service");
    return runAuth(() => sendOtpToPhone(data.phone));
  });

export const verifyOtp = createServerFn({ method: "POST" })
  .validator(verifySchema)
  .handler(async ({ data }): Promise<PublicSession> => {
    const { verifyOtpCode } = await import("@/server/auth-service");
    const { writeSecureSession, toPublicSession } = await import("@/server/secure-session");

    const fullSession: AuthSession = await runAuth(() =>
      verifyOtpCode(data.phone, data.code),
    );
    await writeSecureSession(fullSession);
    return toPublicSession(fullSession);
  });

export const getCurrentSession = createServerFn({ method: "GET" }).handler(
  async (): Promise<PublicSession | null> => {
    const { readSecureSession } = await import("@/server/secure-session");
    const { resolveSessionFromExternalApi } = await import("@/server/auth-service");

    const localSession = await readSecureSession();
    if (!localSession) return null;

    const validated = await resolveSessionFromExternalApi();
    if (validated === null) {
      const { destroySecureSession } = await import("@/server/secure-session");
      await destroySecureSession();
      return null;
    }

    return validated ?? localSession;
  },
);

export const logout = createServerFn({ method: "POST" }).handler(async () => {
  const { destroySecureSession } = await import("@/server/secure-session");
  await destroySecureSession();
  return { ok: true as const };
});
