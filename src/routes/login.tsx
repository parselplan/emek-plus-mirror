import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, ArrowRight, ShieldCheck, Loader2 } from "lucide-react";
import { toast } from "sonner";

import { Logo } from "@/components/emek/Logo";
import { LoginSocialProof } from "@/components/emek/login/LoginSocialProof";
import { loginSocialProof } from "@/data/loginData";
import { getCurrentSession, sendOtp } from "@/lib/auth-fns";
import { toAuthMessage } from "@/lib/auth-errors";
import shieldHero from "@/assets/shield-hero.jpg";

export const Route = createFileRoute("/login")({
  beforeLoad: async () => {
    const session = await getCurrentSession();
    if (session) {
      throw redirect({ to: "/home" });
    }
  },
  component: Login,
});

function Login() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [isSending, setIsSending] = useState(false);

  const formatted = phone.replace(/\D/g, "").slice(0, 10);
  const display = formatted.replace(/(\d{3})(\d{0,3})(\d{0,2})(\d{0,2})/, (_m, a, b, c, d) =>
    [a, b, c, d].filter(Boolean).join(" "),
  );
  const valid = formatted.length === 10;

  const requestOtp = async () => {
    if (!valid || isSending) return;

    setIsSending(true);
    try {
      await sendOtp({ data: { phone: formatted } });
      toast.success("Doğrulama kodu gönderildi.");
      navigate({ to: "/otp", search: { phone: formatted } });
    } catch (error) {
      toast.error(toAuthMessage(error));
    } finally {
      setIsSending(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    void requestOtp();
  };

  return (
    <div className="app-frame flex flex-col px-6 pb-10 pt-14">
      <div className="pointer-events-none absolute -top-20 right-0 h-72 w-72 rounded-full bg-violet/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-56 w-56 rounded-full bg-orange/10 blur-3xl" />

      <div className="animate-fade-up flex flex-col items-center text-center">
        <div className="relative mb-6">
          <div className="absolute inset-0 -z-10 animate-pulse-glow rounded-full bg-violet/30 blur-2xl" />
          <img
            src={shieldHero}
            alt="EMEK+ kalkan"
            width={1024}
            height={1024}
            className="h-28 w-28 rounded-2xl object-cover shadow-glow-violet"
          />
        </div>
        <Logo size="lg" showMark={false} />
        <p className="mt-3 text-sm font-medium text-muted-foreground">
          Emekçinin Dijital Koruyucu Kalkanı
        </p>
        <p className="mt-1 text-xs text-muted-foreground/80">
          (İster sahada ol, ister sınıfta; hakların bizimle güvende.)
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-10 flex flex-1 flex-col">
        <label className="mb-2 text-sm font-semibold text-foreground">Telefon Numaran</label>
        <div className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3.5 shadow-card focus-within:border-orange/70">
          <span className="flex items-center gap-2 border-r border-border pr-3 text-sm font-semibold text-muted-foreground">
            <Phone className="h-4 w-4 text-orange" />
            +90
          </span>
          <input
            inputMode="numeric"
            autoFocus
            placeholder="5xx xxx xx xx"
            value={display}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full bg-transparent text-base font-semibold tracking-wide text-foreground outline-none placeholder:text-muted-foreground/50"
          />
        </div>
        <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
          <ShieldCheck className="h-3.5 w-3.5 text-green" />
          Numaranı doğrulamak için tek kullanımlık kod göndereceğiz.
        </p>

        <div className="mt-auto flex flex-col gap-4 pt-10">
          <button
            type="submit"
            disabled={!valid || isSending}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-orange py-4 text-base font-bold text-orange-foreground shadow-glow-orange transition-transform active:scale-[0.98] disabled:opacity-40 disabled:shadow-none"
          >
            {isSending ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Kod Gönderiliyor...
              </>
            ) : (
              <>
                Hemen Başla
                <ArrowRight className="h-5 w-5" />
              </>
            )}
          </button>

          <p className="text-center text-sm text-muted-foreground">
            Zaten hesabın var mı?{" "}
            <button
              type="button"
              disabled={!valid || isSending}
              onClick={() => void requestOtp()}
              className="font-bold text-orange disabled:opacity-40"
            >
              Giriş Yap
            </button>
          </p>

          <p className="px-4 text-center text-[11px] leading-relaxed text-muted-foreground/70">
            Devam ederek <span className="text-foreground/80 underline">Kullanım Koşulları</span> ve{" "}
            <span className="text-foreground/80 underline">KVKK Aydınlatma Metni</span>'ni kabul
            etmiş olursun.
          </p>
        </div>
      </form>
    </div>
  );
}
