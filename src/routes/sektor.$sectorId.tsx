import { createFileRoute, Link, redirect } from "@tanstack/react-router";

import { ModulePageHeader } from "@/components/emek/common/ModulePageHeader";
import { BottomNavigation } from "@/components/emek/home/BottomNavigation";
import { PublicSectorFeatureGrid } from "@/components/emek/sektor/PublicSectorFeatureGrid";
import { SectorActionGrid } from "@/components/emek/sektor/SectorActionGrid";
import {
  educationSolutions,
  isSectorId,
  publicSectorFeatures,
  retailFieldSolutions,
  sectorPageMeta,
} from "@/data/sectorData";
import { getCurrentSession } from "@/lib/auth-fns";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/sektor/$sectorId")({
  beforeLoad: async ({ params }) => {
    const session = await getCurrentSession();
    if (!session) {
      throw redirect({ to: "/login" });
    }
    if (!isSectorId(params.sectorId)) {
      throw redirect({ to: "/home" });
    }
    return { session };
  },
  component: SektorPage,
});

function SektorPage() {
  const { sectorId: rawSectorId } = Route.useParams();
  if (!isSectorId(rawSectorId)) {
    return null;
  }
  const sectorId = rawSectorId;
  const meta = sectorPageMeta[sectorId];

  return (
    <div className="app-frame pb-28">
      <div className="px-5 pt-10">
        <Link
          to="/home"
          className="mb-4 inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Ana Sayfa
        </Link>
      </div>

      <ModulePageHeader title={meta.title} subtitle={meta.subtitle} />

      <section className="mt-6 px-5">
        {sectorId === "retail" ? (
          <>
            <p className="mb-3 text-sm font-bold text-foreground">{meta.sectionTitle}</p>
            <SectorActionGrid items={retailFieldSolutions} variant="retail" />
          </>
        ) : null}

        {sectorId === "education" ? (
          <>
            <p className="mb-3 text-sm font-bold text-foreground">{meta.sectionTitle}</p>
            <SectorActionGrid items={educationSolutions} variant="education" />
          </>
        ) : null}

        {sectorId === "public" ? (
          <PublicSectorFeatureGrid title={meta.sectionTitle ?? meta.title} items={publicSectorFeatures} />
        ) : null}
      </section>

      <BottomNavigation />
    </div>
  );
}
