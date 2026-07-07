import { Sparkles } from "lucide-react";

import aiAssistant from "@/assets/ai-assistant.png";
import type { AiSalaryAssistant } from "@/types/salary";

interface AiSalaryCardProps {
  content: AiSalaryAssistant;
}

export function AiSalaryCard({ content }: AiSalaryCardProps) {
  return (
    <section className="mt-8 px-5">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-violet p-5 shadow-glow-violet">
        <div className="max-w-[62%]">
          <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-white/80">
            <Sparkles className="h-3.5 w-3.5" /> {content.badge}
          </p>
          <h3 className="mt-1 text-lg font-extrabold text-white">{content.title}</h3>
          <p className="mt-1 text-sm text-white/85">{content.description}</p>
          <button
            type="button"
            className="mt-3 rounded-xl bg-white px-4 py-2 text-sm font-bold text-violet"
          >
            {content.ctaLabel}
          </button>
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
  );
}
