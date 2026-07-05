interface OtpEntry {
  code: string;
  expiresAt: number;
}

const otpByPhone = new Map<string, OtpEntry>();

export function saveOtp(phone: string, code: string, expiresAt: number): void {
  otpByPhone.set(phone, { code, expiresAt });
}

export function consumeOtp(phone: string): OtpEntry | null {
  const entry = otpByPhone.get(phone);
  if (!entry) return null;

  otpByPhone.delete(phone);
  return entry;
}
