import type { AuthSession, PublicSession } from "@/lib/auth-types";
import { AuthError } from "@/lib/auth-errors";
import { consumeOtp, saveOtp } from "@/server/auth-otp-store";
import { logDevOtp } from "@/server/dev-otp";

const OTP_TTL_MS = 5 * 60 * 1000;
const SESSION_TTL_MS = 30 * 24 * 60 * 60 * 1000;
const TR_PHONE = /^5\d{9}$/;

function getAuthApiBaseUrl(): string | undefined {
  return process.env.AUTH_API_BASE_URL?.trim() || undefined;
}

function assertValidPhone(phone: string): void {
  if (!TR_PHONE.test(phone)) {
    throw new AuthError("Geçerli bir telefon numarası gir.", 400);
  }
}

function generateOtp(): string {
  return String(Math.floor(100000 + Math.random() * 900000));
}

async function readApiError(res: Response): Promise<string> {
  try {
    const body = (await res.json()) as { message?: string; error?: string };
    return body.message || body.error || "İşlem başarısız oldu.";
  } catch {
    return "İşlem başarısız oldu.";
  }
}

export async function sendOtpToPhone(phone: string): Promise<{ ok: true }> {
  assertValidPhone(phone);

  const baseUrl = getAuthApiBaseUrl();
  if (baseUrl) {
    const res = await fetch(`${baseUrl}/auth/otp/send`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone }),
    });

    if (!res.ok) {
      throw new AuthError(await readApiError(res), res.status);
    }

    return { ok: true };
  }

  const code = generateOtp();
  saveOtp(phone, code, Date.now() + OTP_TTL_MS);
  logDevOtp(phone, code);

  return { ok: true };
}

export async function verifyOtpCode(phone: string, code: string): Promise<AuthSession> {
  assertValidPhone(phone);

  if (!/^\d{6}$/.test(code)) {
    throw new AuthError("6 haneli doğrulama kodunu gir.", 400);
  }

  const baseUrl = getAuthApiBaseUrl();
  if (baseUrl) {
    const res = await fetch(`${baseUrl}/auth/otp/verify`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone, code }),
    });

    if (!res.ok) {
      throw new AuthError(await readApiError(res), res.status);
    }

    const body = (await res.json()) as {
      token: string;
      user: { id: string; phone: string };
      expiresAt?: number;
    };

    if (!body.token || !body.user?.phone) {
      throw new AuthError("Sunucudan geçersiz oturum yanıtı alındı.", 502);
    }

    return {
      token: body.token,
      user: { id: body.user.id, phone: body.user.phone },
      expiresAt: body.expiresAt ?? Date.now() + SESSION_TTL_MS,
    };
  }

  const entry = consumeOtp(phone);
  if (!entry) {
    throw new AuthError("Doğrulama kodunun süresi doldu. Yeni kod iste.", 400);
  }

  if (entry.expiresAt < Date.now()) {
    throw new AuthError("Doğrulama kodunun süresi doldu. Yeni kod iste.", 400);
  }

  if (entry.code !== code) {
    throw new AuthError("Geçersiz doğrulama kodu.", 400);
  }

  return {
    token: crypto.randomUUID(),
    user: { id: phone, phone },
    expiresAt: Date.now() + SESSION_TTL_MS,
  };
}

export async function resolveSessionFromExternalApi(): Promise<PublicSession | null | undefined> {
  const baseUrl = getAuthApiBaseUrl();
  if (!baseUrl) return undefined;

  const { readSecureSessionToken } = await import("@/server/secure-session");
  const token = await readSecureSessionToken();
  if (!token) return null;

  const res = await fetch(`${baseUrl}/auth/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) return null;

  const body = (await res.json()) as {
    user?: { id: string; phone: string };
    expiresAt?: number;
  };

  if (!body.user?.phone) return null;

  return {
    user: { id: body.user.id, phone: body.user.phone },
    expiresAt: body.expiresAt ?? Date.now() + SESSION_TTL_MS,
  };
}
