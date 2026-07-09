import { ArrowUpRight } from "lucide-react";

import { SectionTitle } from "@/components/emek/common/SectionTitle";
import { CampaignIcon } from "@/data/homeData";
import type { CampaignItem } from "@/types/home";

interface PremiumCampaignProps {
  title: string;
  campaign: CampaignItem;
}

export function PremiumCampaign({ title, campaign }: PremiumCampaignProps) {
  return (
    <section className="mt-8 px-5">
      <SectionTitle title={title} className="mb-3" />
      <button
        type="button"
        className="group relative flex w-full items-center gap-4 overflow-hidden rounded-3xl bg-gradient-orange p-5 text-left shadow-glow-orange transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
      >
        <div className="pointer-events-none absolute -right-8 -top-10 h-32 w-32 rounded-full bg-white/20 blur-2xl" />
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
          <CampaignIcon className="h-6 w-6 text-orange-foreground" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-base font-extrabold text-orange-foreground">
            {campaign.title}
          </span>
          <span className="block text-sm text-orange-foreground/80">{campaign.subtitle}</span>
        </span>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-foreground/15 transition-transform duration-200 group-hover:translate-x-0.5">
          <ArrowUpRight className="h-5 w-5 text-orange-foreground" />
        </span>
      </button>
    </section>
  );
}
