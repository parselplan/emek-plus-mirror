import aiAssistant from "@/assets/ai-assistant.png";
import type { AiAssistantContent } from "@/types/home";

interface AiAssistantCardProps {
  content: AiAssistantContent;
}

export function AiAssistantCard({ content }: AiAssistantCardProps) {
  return (
    <section className="mt-8 px-5">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-violet p-5 shadow-glow-violet">
        <div className="max-w-[62%]">
          <p className="text-xs font-semibold uppercase tracking-wide text-white/80">
            {content.eyebrow}
          </p>
          <h3 className="mt-1 text-lg font-extrabold text-white">{content.title}</h3>
          <p className="mt-1 text-sm text-white/85">{content.description}</p>
          <button
            type="button"
            className="mt-3 rounded-xl bg-white px-4 py-2 text-sm font-bold text-violet"
          >
            {content.cta}
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
