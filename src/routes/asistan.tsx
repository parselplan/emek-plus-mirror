import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { ArrowUp, Sparkles } from "lucide-react";

import { ModulePageHeader } from "@/components/emek/common/ModulePageHeader";
import { BottomNavigation } from "@/components/emek/home/BottomNavigation";
import { getCurrentSession } from "@/lib/auth-fns";
import {
  assistantQuickQuestions,
  getAssistantReply,
} from "@/utils/assistantResponses";
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

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const welcomeMessage: ChatMessage = {
  id: "welcome",
  role: "assistant",
  content:
    "Merhaba! Maaş, fazla mesai, kıdem/ihbar tazminatı ve bordro konularında genel bilgi verebilirim. Bir hızlı soru seçebilir veya kendi sorunu yazabilirsin.",
};

function AsistanPage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([welcomeMessage]);
  const listRef = useRef<HTMLDivElement>(null);

  const appendExchange = (question: string, answer: string) => {
    setMessages((current) => [
      ...current,
      { id: `user-${Date.now()}`, role: "user", content: question },
      { id: `assistant-${Date.now() + 1}`, role: "assistant", content: answer },
    ]);
    window.setTimeout(() => {
      listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
    }, 50);
  };

  const sendMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    appendExchange(trimmed, getAssistantReply(trimmed));
    setMessage("");
  };

  return (
    <div className="app-frame pb-44">
      <ModulePageHeader
        title="Asistan"
        subtitle="Haklarınla ilgili sorularını 7/24 yanıtlamaya hazırım."
      />

      <section className="mt-6 px-5">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-violet p-5 shadow-glow-violet">
          <div className="max-w-[64%]">
            <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-white/80">
              <Sparkles className="h-3.5 w-3.5" /> EMEK+ Yapay Zeka
            </p>
            <h2 className="mt-2 text-2xl font-extrabold leading-tight text-white">Merhaba 👋</h2>
            <p className="mt-1 text-sm text-white/85">Maaş ve hakların hakkında sorularını sor.</p>
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
        <div className="flex flex-wrap gap-2">
          {assistantQuickQuestions.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => sendMessage(item.label)}
              className="rounded-full border border-border/60 bg-card/60 px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:border-violet/50 hover:bg-card"
            >
              {item.label}
            </button>
          ))}
        </div>
      </section>

      <section ref={listRef} className="mt-6 max-h-[42vh] space-y-3 overflow-y-auto px-5">
        {messages.map((chat) => (
          <div
            key={chat.id}
            className={`flex ${chat.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                chat.role === "user"
                  ? "rounded-tr-sm bg-gradient-orange text-orange-foreground"
                  : "rounded-tl-sm border border-border/60 bg-card/60 text-foreground"
              }`}
            >
              {chat.content}
            </div>
          </div>
        ))}
      </section>

      <section className="mt-4 px-5">
        <Link
          to="/maas"
          className="text-xs font-bold text-violet hover:underline"
        >
          Detaylı maaş hesaplaması için Maaş modülüne git →
        </Link>
      </section>

      <div
        className="fixed inset-x-0 z-30"
        style={{ bottom: "calc(5.5rem + env(safe-area-inset-bottom))" }}
      >
        <div className="app-frame min-h-0">
          <form
            className="mx-5 flex items-center gap-2 rounded-2xl border border-border/70 bg-popover/95 p-2 pl-4 shadow-card backdrop-blur-xl"
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage(message);
            }}
          >
            <input
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Bir şey sor..."
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
            <button
              type="submit"
              disabled={message.trim().length === 0}
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-orange text-orange-foreground shadow-glow-orange transition-all active:scale-95 disabled:opacity-40 disabled:shadow-none"
              aria-label="Gönder"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}
