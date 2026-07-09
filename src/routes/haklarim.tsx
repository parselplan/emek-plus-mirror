import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronRight, ShieldAlert } from "lucide-react";

import { ModulePageHeader } from "@/components/emek/common/ModulePageHeader";
import { BottomNavigation } from "@/components/emek/home/BottomNavigation";
import { rightsCardsData, rightsDisclaimer } from "@/data/rightsData";
import { getCurrentSession } from "@/lib/auth-fns";

export const Route = createFileRoute("/haklarim")({
  beforeLoad: async () => {
    const session = await getCurrentSession();
    if (!session) {
      throw redirect({ to: "/login" });
    }
    return { session };
  },
  component: HaklarimPage,
});

function HaklarimPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="app-frame pb-28">
      <ModulePageHeader
        title="Haklarım"
        subtitle="İzin, kıdem, ihbar ve mesai haklarını tek panelde izle."
      />

      <section className="mt-6 px-5">
        <div className="flex items-start gap-3 rounded-2xl border border-orange/30 bg-orange/10 p-4">
          <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
          <p className="text-xs leading-relaxed text-muted-foreground">{rightsDisclaimer}</p>
        </div>
      </section>

      <section className="mt-6 px-5">
        <div className="grid grid-cols-1 gap-3">
          {rightsCardsData.map((card, index) => {
            const Icon = card.icon;
            const isExpanded = expandedId === card.id;

            return (
              <div
                key={card.id}
                style={{ animationDelay: `${index * 60}ms` }}
                className="animate-fade-up rounded-2xl border border-border/60 bg-card/50 opacity-0 [animation-fill-mode:forwards]"
              >
                <button
                  type="button"
                  onClick={() => setExpandedId(isExpanded ? null : card.id)}
                  className="flex w-full items-start gap-3 p-4 text-left transition-colors hover:bg-card/80"
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${card.tint}`}
                  >
                    <Icon className={`h-5 w-5 ${card.accent}`} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center justify-between gap-2">
                      <span className="text-sm font-bold text-foreground">{card.title}</span>
                      <span className="shrink-0 rounded-lg bg-background/60 px-2 py-0.5 text-[10px] font-bold text-muted-foreground">
                        {card.status}
                      </span>
                    </span>
                    <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                      {card.summary}
                    </span>
                  </span>
                  <ChevronRight
                    className={`mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform ${isExpanded ? "rotate-90" : ""}`}
                  />
                </button>

                {isExpanded ? (
                  <div className="space-y-3 border-t border-border/60 px-4 pb-4 pt-3">
                    <ul className="space-y-2">
                      {card.details.map((detail) => (
                        <li
                          key={detail}
                          className="text-xs leading-relaxed text-muted-foreground before:mr-2 before:text-orange before:content-['•']"
                        >
                          {detail}
                        </li>
                      ))}
                    </ul>
                    {card.calculatorId ? (
                      <Link
                        to="/maas"
                        search={{ calculator: card.calculatorId }}
                        className="inline-flex items-center gap-1 text-xs font-bold text-violet hover:underline"
                      >
                        Maaş hesaplayıcısını aç <ChevronRight className="h-3 w-3" />
                      </Link>
                    ) : null}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </section>

      <BottomNavigation />
    </div>
  );
}
