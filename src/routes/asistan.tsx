import { createFileRoute, redirect } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowUp,
  Briefcase,
  Calculator,
  FileText,
  Receipt,
  Scale,
  Sparkles,
  UserRoundCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { ModulePageHeader } from "@/components/emek/common/ModulePageHeader";
import { BottomNavigation } from "@/components/emek/home/BottomNavigation";
import { getCurrentSession } from "@/lib/auth-fns";
import aiAssistant from "@/assets/ai-assistant.png";

export const Route = createFileRoute("/asistan")({
  beforeLoad: async () => {
    const session = await getCurrentSession();
    if (!session) {
      throw redirect({ to: "/login" });
    }
    return { session };
  },
  component: AsistanPage,
});

interface Suggestion {
  id: string;
  label: string;
  hint: string;
  icon: LucideIcon;
  accent: string;
  tint: string;
}

const suggestions: Suggestion[] = [
  {
    id: "salary",
    label: "Maaş Hesapla",
    hint: "Net, brüt ve kesintiler",
    icon: Calculator,
    accent: "text-orange",
    tint: "bg-orange/15",
  },
  {
    id: "severance",
    label: "Tazminat Hesapla",
    hint: "Kıdem ve ihbar",
    icon: Scale,
    accent: "text-blue",
    tint: "bg-blue/15",
  },
  {
    id: "payslip",
    label: "Bordromu Açıkla",
    hint: "Satır satır anlat",
    icon: Receipt,
    accent: "text-green",
    tint: "bg-green/15",
  },
  {
    id: "law",
    label: "İş Hukuku Sor",
    hint: "Haklarını öğren",
    icon: FileText,
    accent: "text-violet",
    tint: "bg-violet/15",
  },
  {
    id: "cv",
    label: "CV Hazırla",
    hint: "Profesyonel özgeçmiş",
    icon: Briefcase,
    accent: "text-blue",
    tint: "bg-blue/15",
  },
  {
    id: "employer",
    label: "İşverenimi Değerlendir",
    hint: "Anonim yorum yap",
    icon: UserRoundCheck,
    accent: "text-orange",
    tint: "bg-orange/15",
  },
];

function AsistanPage() {
  const [message, setMessage] = useState("");

  return (
    <div className="app-frame pb-40">
      <ModulePageHeader
        title="Asistan"
        subtitle="Haklarınla ilgili sorularını 7/24 yanıtlamaya hazırım."
      />

      <section className="mt-6 px-5">
        <div className="animate-fade-up relative overflow-hidden rounded-3xl bg-gradient-violet p-5 shadow-glow-violet">
          <div className="max-w-[64%]">
            <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-white/80">
              <Sparkles className="h-3.5 w-3.5" /> EMEK+ Yapay Zeka
            </p>
            <h2 className="mt-2 text-2xl font-extrabold leading-tight text-white">Merhaba 👋</h2>
            <p className="mt-1 text-sm text-white/85">
              Bugün sana nasıl yardımcı olabilirim?
            </p>
          </div>
          <img
            src={aiAssistant}
            alt="EMEK+ yapay zeka asistanı"
            width={816}
            height={816}
            loading="lazy"
            className="absolute -bottom-2 right-0 h-40 w-40 animate-float object-contain drop-shadow-2xl"
          />
        </div>
      </section>

      <section className="mt-6 px-5">
        <p className="mb-3 text-sm font-bold text-foreground">Öne çıkan öneriler</p>
        <div className="grid grid-cols-2 gap-3">
          {suggestions.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setMessage(item.label)}
                style={{ animationDelay: `${index * 60}ms` }}
                className="group animate-fade-up flex flex-col items-start gap-3 rounded-2xl border border-border/60 bg-card/50 p-4 text-left opacity-0 transition-all duration-200 [animation-fill-mode:forwards] hover:border-violet/50 hover:bg-card active:scale-[0.98]"
              >
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-2xl ${item.tint}`}
                >
                  <Icon className={`h-5 w-5 ${item.accent}`} />
                </span>
                <span>
                  <span className="block text-sm font-bold text-foreground">{item.label}</span>
                  <span className="mt-0.5 block text-[11px] text-muted-foreground">{item.hint}</span>
                </span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="mt-6 px-5">
        <div className="flex items-start gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-violet shadow-glow-violet">
            <Sparkles className="h-4 w-4 text-white" />
          </span>
          <div className="animate-fade-up rounded-2xl rounded-tl-sm border border-border/60 bg-card/60 p-4">
            <p className="text-sm leading-relaxed text-foreground">
              Bir konu seç ya da aşağıdan doğrudan yaz. Maaş, tazminat, bordro ve iş hukuku
              sorularında sana rehberlik edebilirim.
            </p>
          </div>
        </div>
      </section>

      <div
        className="fixed inset-x-0 z-30"
        style={{ bottom: "calc(5.5rem + env(safe-area-inset-bottom))" }}
      >
        <div className="app-frame min-h-0">
          <div className="mx-5 flex items-center gap-2 rounded-2xl border border-border/70 bg-popover/95 p-2 pl-4 shadow-card backdrop-blur-xl">
            <input
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Bir şey sor..."
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
            <button
              type="button"
              disabled={message.trim().length === 0}
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-orange text-orange-foreground shadow-glow-orange transition-all active:scale-95 disabled:opacity-40 disabled:shadow-none"
              aria-label="Gönder"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}
