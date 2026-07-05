import { SectionTitle } from "@/components/emek/common/SectionTitle";
import type { ExperienceFeature } from "@/types/home";

interface ExperienceFeaturesProps {
  title: string;
  features: ExperienceFeature[];
}

export function ExperienceFeatures({ title, features }: ExperienceFeaturesProps) {
  return (
    <section className="mt-8 px-5">
      <SectionTitle title={title} align="center" />
      <div className="grid grid-cols-3 gap-3">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.id}
              className="flex flex-col items-center gap-2 rounded-2xl border border-border/60 bg-card/50 p-3 text-center"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-background/60">
                <Icon className={`h-5 w-5 ${feature.color}`} />
              </span>
              <span className="text-[10px] font-semibold leading-tight text-muted-foreground">
                {feature.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
