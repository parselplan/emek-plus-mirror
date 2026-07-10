import { useNavigate } from "@tanstack/react-router";
import { ArrowRight, GraduationCap, Sparkles } from "lucide-react";

import { personalDevelopment } from "@/data/gelisimData";

export function PersonalDevelopmentCard() {
  const navigate = useNavigate();

  return (
    <section className="mt-8 px-5">
      <button
        type="button"
        onClick={() => navigate({ to: "/gelisim" })}
        className="group relative flex w-full flex-col overflow-hidden rounded-3xl border border-violet/30 bg-gradient-card p-5 text-left shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-violet/60 active:scale-[0.99]"
      >
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-violet/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-12 right-6 opacity-20">
          <GraduationCap className="h-32 w-32 text-violet" />
        </div>

        <div className="relative flex items-center gap-2">
          <span className="flex items-center gap-1.5 rounded-full bg-violet/15 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide text-violet">
            <Sparkles className="h-3 w-3" />
            {personalDevelopment.eyebrow}
          </span>
        </div>

        <h3 className="relative mt-3 text-lg font-extrabold text-foreground">
          {personalDevelopment.title}
        </h3>
        <p className="relative mt-1.5 max-w-[85%] text-sm leading-relaxed text-muted-foreground">
          {personalDevelopment.description}
        </p>

        <span className="relative mt-4 inline-flex w-fit items-center gap-2 rounded-2xl bg-gradient-violet px-4 py-2.5 text-sm font-bold text-violet-foreground shadow-glow-violet transition-transform group-hover:gap-3">
          {personalDevelopment.cta}
          <ArrowRight className="h-4 w-4" />
        </span>
      </button>
    </section>
  );
}
