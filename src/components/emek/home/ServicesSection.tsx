import { SectionTitle } from "@/components/emek/common/SectionTitle";
import { BenefitsGrid } from "@/components/emek/home/BenefitsCard";
import type { BenefitCardItem } from "@/types/home";

interface ServicesSectionProps {
  supportBenefits: BenefitCardItem[];
  newBenefits: BenefitCardItem[];
}

export function ServicesSection({ supportBenefits, newBenefits }: ServicesSectionProps) {
  return (
    <section className="mt-8">
      <div className="px-5">
        <SectionTitle title="Hizmetler" subtitle="Sana özel destek ve avantajlar" />
      </div>
      <BenefitsGrid items={supportBenefits} variant="support" />
      <BenefitsGrid items={newBenefits} variant="new" />
    </section>
  );
}
