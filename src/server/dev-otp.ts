import { peekOtp } from "@/server/auth-otp-store";

const DEFAULT_DEV_OTP_SECRET = "emek-dev-otp-local";

export function isDevOtpExposureEnabled(): boolean {
  if (process.env.AUTH_API_BASE_URL?.trim()) return false;
  if (process.env.EMEK_LOG_OTP === "true") return true;
  return process.env.NODE_ENV !== "production";
}

export function getDevOtpSecret(): string {
  return process.env.EMEK_DEV_OTP_SECRET?.trim() || DEFAULT_DEV_OTP_SECRET;
}

export function logDevOtp(phone: string, code: string): void {
  if (!isDevOtpExposureEnabled()) return;

  console.info(`[EMEK+ dev OTP] +90${phone}: ${code}`);
}

export function readDevOtpForPhone(
  phone: string,
  secret: string | null,
): { ok: true; phone: string; code: string } | { ok: false; status: number; message: string } {
  if (!isDevOtpExposureEnabled()) {
    return { ok: false, status: 404, message: "Dev OTP exposure is disabled." };
  }

  if (!secret || secret !== getDevOtpSecret()) {
    return { ok: false, status: 403, message: "Invalid dev OTP secret." };
  }

  if (!/^5\d{9}$/.test(phone)) {
    return { ok: false, status: 400, message: "Invalid phone. Use 5xxxxxxxxx format." };
  }

  const code = peekOtp(phone);
  if (!code) {
    return { ok: false, status: 404, message: "No active OTP for this phone." };
  }

  return { ok: true, phone, code };
}
