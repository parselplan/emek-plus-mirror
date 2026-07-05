import shieldHero from "@/assets/shield-hero.jpg";

interface HomeFooterProps {
  tagline: string;
  copyright: string;
}

export function HomeFooter({ tagline, copyright }: HomeFooterProps) {
  return (
    <section className="mt-8 flex flex-col items-center px-5 text-center">
      <img
        src={shieldHero}
        alt="EMEK+"
        width={1024}
        height={1024}
        loading="lazy"
        className="h-16 w-16 rounded-2xl object-cover shadow-glow-violet"
      />
      <p className="mt-3 text-sm font-semibold text-foreground">{tagline}</p>
      <p className="mt-1 text-xs text-muted-foreground">{copyright}</p>
    </section>
  );
}
