import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { z } from "zod";
import { ArrowLeft, RefreshCw } from "lucide-react";
import { Logo } from "@/components/emek/Logo";

const searchSchema = z.object({
  phone: z.preprocess((v) => (v == null ? "" : String(v)), z.string()),
});

export const Route = createFileRoute("/otp")({
  validateSearch: searchSchema,
  component: Otp,
});

const LENGTH = 6;

function Otp() {
  const navigate = useNavigate();
  const { phone } = Route.useSearch();
  const [code, setCode] = useState<string[]>(Array(LENGTH).fill(""));
  const [seconds, setSeconds] = useState(45);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (seconds <= 0) return;
    const t = setInterval(() => setSeconds((s) => s - 1), 1000);
    return () => clearInterval(t);
  }, [seconds]);

  const maskedPhone = phone
    ? `+90 ${phone.slice(0, 3)} ${phone.slice(3, 6)} ** **`
    : "telefonuna";

  const filled = code.every((c) => c !== "");

  const handleChange = (index: number, value: string) => {
    const digit = value.replace(/\D/g, "").slice(-1);
    const next = [...code];
    next[index] = digit;
    setCode(next);
    if (digit && index < LENGTH - 1) inputs.current[index + 1]?.focus();
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    const text = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, LENGTH);
    if (text) {
      const next = Array(LENGTH).fill("");
      text.split("").forEach((d, i) => (next[i] = d));
      setCode(next);
      inputs.current[Math.min(text.length, LENGTH - 1)]?.focus();
    }
  };

  const verify = () => {
    if (filled) navigate({ to: "/home" });
  };

  useEffect(() => {
    if (filled) verify();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filled]);

  return (
    <div className="app-frame flex flex-col px-6 pb-10 pt-14">
      <div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violet/20 blur-3xl" />

      <button
        onClick={() => navigate({ to: "/login" })}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground"
      >
        <ArrowLeft className="h-5 w-5" />
      </button>

      <div className="mt-8 flex flex-col items-center text-center">
        <Logo size="md" />
        <h1 className="mt-8 text-2xl font-bold text-foreground">Doğrulama Kodu</h1>
        <p className="mt-2 max-w-[18rem] text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">{maskedPhone}</span> numarasına gönderdiğimiz
          6 haneli kodu gir.
        </p>
      </div>

      <div className="mt-10 flex justify-center gap-2.5" onPaste={handlePaste}>
        {code.map((digit, i) => (
          <input
            key={i}
            ref={(el) => {
              inputs.current[i] = el;
            }}
            inputMode="numeric"
            maxLength={1}
            value={digit}
            autoFocus={i === 0}
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            className={`h-14 w-12 rounded-2xl border bg-card text-center text-2xl font-bold text-foreground outline-none transition-colors ${
              digit ? "border-orange shadow-glow-orange" : "border-border focus:border-violet"
            }`}
          />
        ))}
      </div>

      <div className="mt-6 text-center text-sm text-muted-foreground">
        {seconds > 0 ? (
          <span>
            Kodu tekrar gönder:{" "}
            <span className="font-semibold text-foreground">0:{String(seconds).padStart(2, "0")}</span>
          </span>
        ) : (
          <button
            onClick={() => setSeconds(45)}
            className="inline-flex items-center gap-1.5 font-bold text-orange"
          >
            <RefreshCw className="h-4 w-4" />
            Kodu Tekrar Gönder
          </button>
        )}
      </div>

      <div className="mt-auto pt-10">
        <button
          onClick={verify}
          disabled={!filled}
          className="w-full rounded-2xl bg-gradient-orange py-4 text-base font-bold text-orange-foreground shadow-glow-orange transition-transform active:scale-[0.98] disabled:opacity-40 disabled:shadow-none"
        >
          Doğrula ve Devam Et
        </button>
      </div>
    </div>
  );
}
