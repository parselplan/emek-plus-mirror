import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles } from "lucide-react";

import type { emekAiCard } from "@/data/homeData";

interface EmekAiCardProps {
  content: typeof emekAiCard;
}

export function EmekAiCard({ content }: EmekAiCardProps) {
  return (
    <section className="mt-8 px-5">
      <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-card p-5 shadow-card">
        <div className="pointer-events-none absolute -right-10 -top-12 h-36 w-36 rounded-full bg-violet/20 blur-3xl" />
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-violet shadow-glow-violet">
            <Sparkles className="h-4 w-4 text-white" />
          </span>
          <span className="text-xs font-bold uppercase tracking-wide text-violet">
            {content.eyebrow}
          </span>
        </div>

        <h3 className="mt-3 text-lg font-extrabold leading-snug text-foreground">
          {content.title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{content.description}</p>

        <Link
          to="/asistan"
          className="group mt-4 inline-flex items-center gap-2 rounded-2xl bg-gradient-violet px-4 py-2.5 text-sm font-bold text-white shadow-glow-violet transition-all duration-200 hover:opacity-95 active:scale-95"
        >
          {content.cta}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </section>
  );
}
