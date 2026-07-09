import { Link } from "@tanstack/react-router";
import { ChevronRight, Sparkles } from "lucide-react";

import type { AiSuggestionItem } from "@/types/home";

interface TodayForYouProps {
  suggestions: AiSuggestionItem[];
}

export function TodayForYou({ suggestions }: TodayForYouProps) {
  return (
    <section className="mt-8 px-5">
      <div className="mb-3 flex items-center gap-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-violet/15">
          <Sparkles className="h-3.5 w-3.5 text-violet" />
        </span>
        <h2 className="text-base font-extrabold text-foreground">Bugün Senin İçin</h2>
      </div>

      <div className="space-y-2.5">
        {suggestions.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.id}
              to="/asistan"
              style={{ animationDelay: `${index * 70}ms` }}
              className="group flex items-center gap-3 rounded-2xl border border-border/60 bg-card/50 p-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-border active:scale-[0.98]"
            >
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${item.gradient} shadow-card`}
              >
                <Icon className="h-[18px] w-[18px] text-white" />
              </span>
              <p className="min-w-0 flex-1 text-sm font-medium leading-snug text-foreground/90">
                {item.title}
              </p>
              <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
