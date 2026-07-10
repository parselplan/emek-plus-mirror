import type { LoginStat } from "@/data/loginData";

interface LoginSocialProofProps {
  stats: LoginStat[];
}

export function LoginSocialProof({ stats }: LoginSocialProofProps) {
  return (
    <section className="animate-fade-up rounded-2xl border border-orange/40 bg-card/50 p-3 shadow-card">
      <div className="grid grid-cols-5 gap-1.5">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.id}
              className="animate-fade-up flex flex-col items-center gap-1 text-center"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <Icon className={`h-4 w-4 ${stat.accent}`} />
              <span className="text-[11px] font-extrabold leading-none text-foreground">
                {stat.value}
              </span>
              <span className="text-[8px] leading-tight text-muted-foreground">{stat.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
