#!/usr/bin/env node

const phone = (process.argv[2] ?? "5535903359").replace(/\D/g, "").replace(/^0/, "");
const baseUrl = (process.env.OTP_WATCH_URL ?? "http://localhost:8082").replace(/\/$/, "");
const secret = process.env.EMEK_DEV_OTP_SECRET ?? "emek-dev-otp-local";
const intervalMs = Number(process.env.OTP_WATCH_INTERVAL_MS ?? 2000);

if (!/^5\d{9}$/.test(phone)) {
  console.error("Usage: npm run otp:watch -- 5xxxxxxxxx");
  console.error("Phone must be 10 digits starting with 5.");
  process.exit(1);
}

console.info(`[EMEK+ otp:watch] polling +90${phone}`);
console.info(`[EMEK+ otp:watch] url: ${baseUrl}/api/dev/otp`);
console.info("[EMEK+ otp:watch] Lovable'da kod gönder, OTP burada görünecek...\n");

let lastCode = "";

async function poll() {
  const url = `${baseUrl}/api/dev/otp?phone=${encodeURIComponent(phone)}&secret=${encodeURIComponent(secret)}`;

  try {
    const res = await fetch(url);
    const body = await res.json();

    if (res.ok && body.code && body.code !== lastCode) {
      lastCode = body.code;
      console.info(`[EMEK+ dev OTP] +90${phone}: ${body.code}`);
    } else if (!res.ok && res.status !== 404) {
      console.warn(`[EMEK+ otp:watch] ${res.status} ${body.error ?? "request failed"}`);
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.warn(`[EMEK+ otp:watch] ${message}`);
  }
}

await poll();
setInterval(poll, intervalMs);
