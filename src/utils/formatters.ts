export function normalizeTrPhone(value: unknown): string {
  return String(value ?? "")
    .replace(/"/g, "")
    .replace(/\D/g, "")
    .replace(/^0/, "")
    .slice(0, 10);
}

export function isValidTrPhone(phone: string): boolean {
  return /^5\d{9}$/.test(phone);
}

/** Türkiye cep telefonu: 5xx xxx xx xx */
export function formatPhone(phone: string): string {
  return phone.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, "$1 $2 $3 $4");
}

export function formatPhoneDisplay(phone: string): string {
  return `+90 ${formatPhone(phone)}`;
}

export function formatCurrency(amount: number, currency = "TRY"): string {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatPercentage(value: number, options?: { signed?: boolean }): string {
  const formatted = new Intl.NumberFormat("tr-TR", {
    style: "percent",
    maximumFractionDigits: 0,
  }).format(value / 100);

  if (options?.signed && value > 0) return `+${formatted}`;
  return formatted;
}

export function formatDate(
  date: Date | string | number,
  style: "short" | "long" = "short",
): string {
  const d = date instanceof Date ? date : new Date(date);
  return new Intl.DateTimeFormat("tr-TR", {
    dateStyle: style === "long" ? "long" : "medium",
  }).format(d);
}
