import { createFileRoute, redirect } from "@tanstack/react-router";
import { Bot, FileText, MessageCircleQuestion, Scale, ShieldCheck } from "lucide-react";

import { AppCard } from "@/components/emek/common/AppCard";
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

const quickQuestions = [
  { id: "contract", label: "Sözleşmemde risk var mı?", icon: FileText },
  { id: "rights", label: "Fazla mesai hakkım nedir?", icon: Scale },
  { id: "leave", label: "İzin hakkımı hesapla", icon: ShieldCheck },
  { id: "ask", label: "İşverenime ne sorabilirim?", icon: MessageCircleQuestion },
];

function AsistanPage() {
  return (
    <div className="app-frame pb-28">
      <ModulePageHeader
        title="Asistan"
        subtitle="Haklarınla ilgili sorularını 7/24 yanıtlamaya hazırım."
      />

      <section className="mt-6 px-5">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-violet p-5 shadow-glow-violet">
          <div className="max-w-[62%]">
            <p className="text-xs font-semibold uppercase tracking-wide text-white/80">
              EMEK+ Yapay Zeka
            </p>
            <h2 className="mt-1 text-lg font-extrabold text-white">
              Bugün ne konuda yardımcı olayım?
            </h2>
            <p className="mt-1 text-sm text-white/85">
              Maaş, mesai, izin ve sözleşme konularında hızlı rehberlik al.
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
        <p className="mb-3 text-sm font-bold text-foreground">Hızlı Sorular</p>
        <div className="grid grid-cols-1 gap-3">
          {quickQuestions.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                type="button"
                className="flex items-center gap-3 rounded-2xl border border-border/60 bg-card/60 p-4 text-left transition-transform active:scale-[0.99]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet/15">
                  <Icon className="h-5 w-5 text-violet" />
                </span>
                <span className="text-sm font-semibold text-foreground">{item.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="mt-6 px-5">
        <AppCard className="bg-card/60">
          <div className="flex items-start gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-green/15">
              <Bot className="h-5 w-5 text-green" />
            </span>
            <div>
              <p className="text-sm font-bold text-foreground">Sohbet modu yakında</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Kişiselleştirilmiş yanıtlar, belge analizi ve sözleşme özeti bu ekranda
                etkinleştirilecek.
              </p>
            </div>
          </div>
        </AppCard>
      </section>

      <BottomNavigation />
    </div>
  );
}
