import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import shieldHero from "@/assets/shield-hero.jpg";
import { Logo } from "@/components/emek/Logo";

export const Route = createFileRoute("/")({
  component: Splash,
});

function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => navigate({ to: "/login" }), 2600);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <div className="app-frame flex flex-col items-center justify-center overflow-hidden px-8">
      {/* ambient glows */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-violet/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-0 h-60 w-60 rounded-full bg-orange/15 blur-3xl" />

      <div className="animate-fade-up flex flex-col items-center text-center">
        <div className="relative mb-8 animate-float">
          <div className="absolute inset-0 -z-10 animate-pulse-glow rounded-full bg-violet/40 blur-2xl" />
          <img
            src={shieldHero}
            alt="EMEK+ koruyucu kalkan"
            width={1024}
            height={1024}
            className="h-52 w-52 rounded-3xl object-cover shadow-glow-violet"
          />
        </div>

        <Logo size="xl" showMark={false} />

        <p className="mt-4 max-w-[16rem] text-sm font-medium leading-relaxed text-muted-foreground">
          Emekçinin Dijital Koruyucu Kalkanı ve Kariyer Ortağı
        </p>
      </div>

      <div className="absolute bottom-12 flex flex-col items-center gap-3">
        <div className="h-1.5 w-32 overflow-hidden rounded-full bg-muted">
          <div className="h-full w-1/2 rounded-full bg-gradient-orange" style={{ animation: "fade-up 2.4s ease-in-out infinite alternate" }} />
        </div>
        <span className="text-xs text-muted-foreground">Hakların bizimle güvende</span>
      </div>
    </div>
  );
}
