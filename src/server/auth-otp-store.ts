interface OtpEntry {
  code: string;
  expiresAt: number;
}

const otpByPhone = new Map<string, OtpEntry>();

export function saveOtp(phone: string, code: string, expiresAt: number): void {
  otpByPhone.set(phone, { code, expiresAt });
}

export function peekOtp(phone: string): string | null {
  const entry = otpByPhone.get(phone);
  if (!entry) return null;
  if (entry.expiresAt < Date.now()) {
    otpByPhone.delete(phone);
    return null;
  }
  return entry.code;
}

export function consumeOtp(phone: string): OtpEntry | null {
  const entry = otpByPhone.get(phone);
  if (!entry) return null;

  otpByPhone.delete(phone);
  return entry;
}
