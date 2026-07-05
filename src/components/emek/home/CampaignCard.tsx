import { CampaignIcon } from "@/data/homeData";
import type { CampaignItem } from "@/types/home";
import { cn } from "@/lib/utils";

interface CampaignCardProps {
  campaign: CampaignItem;
  className?: string;
}

export function CampaignCard({ campaign, className }: CampaignCardProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between rounded-2xl border border-border/60 bg-background/40 p-3",
        className,
      )}
    >
      <span className="flex items-center gap-3">
        <CampaignIcon className="h-6 w-6 text-violet" />
        <span>
          <span className="block text-sm font-bold text-foreground">{campaign.title}</span>
          <span className="block text-xs text-muted-foreground">{campaign.subtitle}</span>
        </span>
      </span>
      <span className="rounded-xl bg-gradient-orange px-3 py-1.5 text-xs font-bold text-orange-foreground">
        {campaign.cta}
      </span>
    </div>
  );
}
