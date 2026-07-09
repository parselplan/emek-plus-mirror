import { SectionTitle } from "@/components/emek/common/SectionTitle";
import type { RightInfoCard } from "@/types/home";

interface RightsScrollerProps {
  title: string;
  cards: RightInfoCard[];
}

export function RightsScroller({ title, cards }: RightsScrollerProps) {
  return (
    <section className="mt-8">
      <SectionTitle title={title} className="mb-3 px-5" />
      <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <article
              key={card.id}
              className="group flex min-w-[44%] snap-start flex-col justify-between rounded-2xl border border-border/60 bg-card/50 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-border active:scale-[0.98]"
            >
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-xl ${card.gradient} shadow-card`}
              >
                <Icon className="h-5 w-5 text-white" />
              </span>
              <div className="mt-4">
                <p className="text-xs font-semibold text-muted-foreground">{card.title}</p>
                <p className={`mt-1 text-lg font-extrabold leading-none ${card.accent}`}>
                  {card.value}
                </p>
                <p className="mt-1.5 text-[11px] leading-tight text-muted-foreground">{card.hint}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
