import { Briefcase, ShieldCheck, Star, TrendingUp, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface LoginStat {
  id: string;
  icon: LucideIcon;
  value: string;
  label: string;
  accent: string;
}

/** Login ekranında telefon girişinin altında gösterilen sosyal kanıt kartları */
export const loginSocialProof: LoginStat[] = [
  { id: "users", icon: Users, value: "200K+", label: "Mutlu Kullanıcı", accent: "text-blue" },
  { id: "jobs", icon: Briefcase, value: "50K+", label: "İş İlanı", accent: "text-orange" },
  { id: "raise", icon: TrendingUp, value: "%35", label: "Maaş Artışı", accent: "text-green" },
  { id: "rating", icon: Star, value: "4.9", label: "Kullanıcı Puanı", accent: "text-orange" },
  { id: "support", icon: ShieldCheck, value: "Güçlü", label: "Daima Yanında", accent: "text-violet" },
];
