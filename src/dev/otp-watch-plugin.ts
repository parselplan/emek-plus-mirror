import type { Plugin } from "vite";
import { loadEnv } from "vite";

function normalizePhone(value: string | undefined): string {
  const digits = (value ?? "5535903359").replace(/\D/g, "").replace(/^0/, "");
  return /^5\d{9}$/.test(digits) ? digits : "5535903359";
}

export function otpWatchPlugin(): Plugin {
  return {
    name: "emek-otp-watch",
    configureServer(server) {
      server.httpServer?.once("listening", () => {
        const env = loadEnv(server.config.mode, server.config.envDir, "");
        const address = server.httpServer?.address();
        const port = typeof address === "object" && address ? address.port : 8080;
        const localBase = `http://localhost:${port}`;
        const watchBase = (env.OTP_WATCH_URL?.trim() || localBase).replace(/\/$/, "");
        const secret = env.EMEK_DEV_OTP_SECRET?.trim() || "emek-dev-otp-local";
        const phone = normalizePhone(env.EMEK_DEV_OTP_PHONE);
        const intervalMs = Number(env.OTP_WATCH_INTERVAL_MS ?? 2000);

        console.info("");
        console.info("[EMEK+ otp:watch] OTP bu terminalde görünecek.");
        console.info(`[EMEK+ otp:watch] numara: +90${phone}`);
        console.info(`[EMEK+ otp:watch] kaynak: ${watchBase}/api/dev/otp`);
        if (watchBase !== localBase) {
          console.info("[EMEK+ otp:watch] Lovable preview'dan kod gönder.");
        } else {
          console.info("[EMEK+ otp:watch] localhost'ta kod gönder.");
        }
        console.info("");

        let lastCode = "";

        const poll = async () => {
          const url = `${watchBase}/api/dev/otp?phone=${encodeURIComponent(phone)}&secret=${encodeURIComponent(secret)}`;

          try {
            const res = await fetch(url);
            const body = (await res.json()) as { code?: string; error?: string };

            if (res.ok && body.code && body.code !== lastCode) {
              lastCode = body.code;
              console.info("");
              console.info(`[EMEK+ dev OTP] +90${phone}: ${body.code}`);
              console.info("");
            }
          } catch {
            // Dev server may still be booting.
          }
        };

        void poll();
        setInterval(poll, intervalMs);
      });
    },
  };
}
