import type { LucideIcon } from "lucide-react";
import {
  AlarmClock,
  Award,
  BadgeCheck,
  BellRing,
  Bike,
  BookOpen,
  Briefcase,
  BriefcaseBusiness,
  Building2,
  Calculator,
  CalendarClock,
  CalendarDays,
  ClipboardList,
  Coins,
  FileText,
  GraduationCap,
  Handshake,
  Landmark,
  ScrollText,
  ShieldCheck,
  Sparkles,
  Timer,
  TrendingUp,
  UserRound,
  Users,
  VenetianMask,
  Wallet,
} from "lucide-react";

import type { SectorId } from "./sectorData";

export interface HeroStat {
  id: string;
  icon: LucideIcon;
  label: string;
  value: string;
  hint?: string;
  trend?: { value: string; positive: boolean };
  gradient: string;
}

export interface SectorAction {
  id: string;
  icon: LucideIcon;
  label: string;
  hint: string;
  accent: string;
}

export interface SectorInsight {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  accent: string;
}

export interface SectorAnnouncement {
  id: string;
  icon: LucideIcon;
  tag: string;
  title: string;
  meta: string;
  accent: string;
}

export interface SectorAiPrompt {
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
}

export interface SectorTheme {
  /** Sekiz karakterlik hex + alpha, gradient overlay için */
  glow: string;
  ring: string;
  chipBg: string;
  chipText: string;
}

export interface SectorDashboard {
  eyebrow: string;
  title: string;
  subtitle: string;
  theme: SectorTheme;
  heroStats: HeroStat[];
  actions: SectorAction[];
  insights: SectorInsight[];
  announcements: SectorAnnouncement[];
  aiPrompt: SectorAiPrompt;
}

export const sectorDashboards: Record<SectorId, SectorDashboard> = {
  retail: {
    eyebrow: "Saha Panosu",
    title: "Perakende & Lojistik",
    subtitle: "Vardiya, mesai ve saha hakların tek ekranda.",
    theme: {
      glow: "bg-orange/25",
      ring: "border-orange/40",
      chipBg: "bg-orange/15",
      chipText: "text-orange",
    },
    heroStats: [
      {
        id: "shift-today",
        icon: Timer,
        label: "Bugünkü Vardiya",
        value: "08:00 · 16:00",
        hint: "Kalan 3s 20d",
        gradient: "bg-gradient-orange",
      },
      {
        id: "overtime",
        icon: AlarmClock,
        label: "Bu Ay Mesai",
        value: "24 sa",
        hint: "≈ 3.240 ₺ ek",
        trend: { value: "+18%", positive: true },
        gradient: "bg-gradient-violet",
      },
      {
        id: "delivery",
        icon: Bike,
        label: "Sefer / Teslimat",
        value: "132",
        hint: "Haftalık ort. 26",
        trend: { value: "+9%", positive: true },
        gradient: "bg-gradient-blue",
      },
    ],
    actions: [
      { id: "shift", icon: Timer, label: "Vardiya Takibi", hint: "Mola & çıkış", accent: "text-orange" },
      { id: "courier", icon: Bike, label: "Kurye Hakları", hint: "Yakıt & KM", accent: "text-blue" },
      { id: "payroll", icon: Calculator, label: "Maaş & Mesai", hint: "Anlık hesap", accent: "text-violet" },
      { id: "jobs", icon: BriefcaseBusiness, label: "Saha İlanları", hint: "Yakınındakiler", accent: "text-green" },
    ],
    insights: [
      {
        id: "insight-1",
        icon: TrendingUp,
        title: "Mesai kazancın %18 arttı",
        description: "Bu ay ortalama 6 saat/hafta ek mesai yapıyorsun. Ekstra kazancını takip et.",
        accent: "text-orange",
      },
      {
        id: "insight-2",
        icon: ShieldCheck,
        title: "Hafta tatili hakkın hazır",
        description: "Son 6 günün kesintisiz. Yasal olarak 24 saat kesintisiz dinlenme hakkın var.",
        accent: "text-green",
      },
    ],
    announcements: [
      {
        id: "a1",
        icon: BellRing,
        tag: "Vardiya",
        title: "Cumartesi vardiyan 09:00'a alındı",
        meta: "Bugün · 2 sa önce",
        accent: "text-orange",
      },
      {
        id: "a2",
        icon: Coins,
        tag: "Bordro",
        title: "Fazla mesai puantajın onaylandı",
        meta: "Dün · İK",
        accent: "text-green",
      },
      {
        id: "a3",
        icon: Briefcase,
        tag: "İlan",
        title: "Sana yakın 3 depo pozisyonu",
        meta: "Yeni · İzmir",
        accent: "text-blue",
      },
    ],
    aiPrompt: {
      eyebrow: "Saha AI",
      title: "Bu hafta ne kadar mesai kazandım?",
      description: "AI puantajını okur, net kazancını dakikalar içinde hesaplar ve haklarını hatırlatır.",
      cta: "AI ile Sor",
    },
  },
  education: {
    eyebrow: "Eğitim Panosu",
    title: "Eğitim & Özel Okul",
    subtitle: "Ders saatin, sözleşmen ve ek gelirlerin bir arada.",
    theme: {
      glow: "bg-blue/25",
      ring: "border-blue/40",
      chipBg: "bg-blue/15",
      chipText: "text-blue",
    },
    heroStats: [
      {
        id: "weekly-hours",
        icon: CalendarClock,
        label: "Haftalık Ders",
        value: "28 sa",
        hint: "Norm + 4 sa ek",
        gradient: "bg-gradient-blue",
      },
      {
        id: "extra-lesson",
        icon: GraduationCap,
        label: "Ek Ders Kazancı",
        value: "6.480 ₺",
        hint: "Bu ay",
        trend: { value: "+12%", positive: true },
        gradient: "bg-gradient-violet",
      },
      {
        id: "contract-days",
        icon: FileText,
        label: "Sözleşme",
        value: "184 gün",
        hint: "Kalan süre",
        gradient: "bg-gradient-orange",
      },
    ],
    actions: [
      { id: "contract", icon: UserRound, label: "Sözleşme Asistanı", hint: "Madde analizi", accent: "text-blue" },
      { id: "extra-lesson", icon: Calculator, label: "Ek Ders Hesap", hint: "Net & brüt", accent: "text-violet" },
      { id: "school-rating", icon: ClipboardList, label: "Okul Puanla", hint: "Anonim", accent: "text-green" },
      { id: "stationery", icon: BookOpen, label: "Kırtasiye Hakkı", hint: "Yıllık takip", accent: "text-orange" },
    ],
    insights: [
      {
        id: "insight-1",
        icon: ShieldCheck,
        title: "Sözleşmende 2 dikkat noktası",
        description: "Fesih ve mesai maddelerini AI Asistan ile birlikte gözden geçirmeni öneriyoruz.",
        accent: "text-orange",
      },
      {
        id: "insight-2",
        icon: TrendingUp,
        title: "Ek ders gelirin artıyor",
        description: "Son 3 ay ortalaman 5.900 ₺ → 6.480 ₺. Vergi diliminin farkında ol.",
        accent: "text-green",
      },
    ],
    announcements: [
      {
        id: "a1",
        icon: CalendarDays,
        tag: "Takvim",
        title: "Yarıyıl tatili 20 Ocak'ta başlıyor",
        meta: "MEB · Bu hafta",
        accent: "text-blue",
      },
      {
        id: "a2",
        icon: Award,
        tag: "Gelişim",
        title: "Yeni: Sınıf yönetimi mikro-öğrenme",
        meta: "10 dk · Ücretsiz",
        accent: "text-violet",
      },
      {
        id: "a3",
        icon: Users,
        tag: "Topluluk",
        title: "Özel okul öğretmenleri anketi açıldı",
        meta: "Anonim · 2 dk",
        accent: "text-green",
      },
    ],
    aiPrompt: {
      eyebrow: "Eğitim AI",
      title: "Sözleşmemi maddeleştirerek özetler misin?",
      description: "AI, sözleşmeni sade Türkçeye çevirir, riskli maddeleri renkli işaretler.",
      cta: "Sözleşmeyi Analiz Et",
    },
  },
  public: {
    eyebrow: "Kamu Panosu",
    title: "Kamu Şirket Çalışanları",
    subtitle: "TİS, ikramiye ve tayin süreçlerin tek yerde.",
    theme: {
      glow: "bg-emerald-500/25",
      ring: "border-emerald-500/40",
      chipBg: "bg-emerald-500/15",
      chipText: "text-emerald-300",
    },
    heroStats: [
      {
        id: "tis",
        icon: ScrollText,
        label: "Aktif TİS",
        value: "2026-2028",
        hint: "3 madde güncellendi",
        gradient: "bg-gradient-blue",
      },
      {
        id: "bonus",
        icon: Wallet,
        label: "Tediye + İkramiye",
        value: "42.300 ₺",
        hint: "Bu yıl toplam",
        trend: { value: "+7%", positive: true },
        gradient: "bg-gradient-violet",
      },
      {
        id: "seniority",
        icon: Landmark,
        label: "Kıdem",
        value: "11 yıl 4 ay",
        hint: "Tazminat: 268.900 ₺",
        gradient: "bg-gradient-orange",
      },
    ],
    actions: [
      { id: "tis", icon: ScrollText, label: "TİS Tercümanı", hint: "AI destekli", accent: "text-emerald-300" },
      { id: "public-pay", icon: Calculator, label: "Maaş & İkramiye", hint: "Tediye dahil", accent: "text-violet" },
      { id: "rating", icon: VenetianMask, label: "Liyakat Puanla", hint: "%100 anonim", accent: "text-orange" },
      { id: "transfer", icon: Building2, label: "Tayin & Becayiş", hint: "Yeni ilanlar", accent: "text-blue" },
    ],
    insights: [
      {
        id: "insight-1",
        icon: BadgeCheck,
        title: "Yeni TİS maddesi lehine",
        description: "Yıllık izin süresi 20 → 22 güne çıktı. Detayları AI ile birlikte incele.",
        accent: "text-emerald-300",
      },
      {
        id: "insight-2",
        icon: Handshake,
        title: "Becayiş eşleşmesi bulundu",
        description: "3 kişi tercih ettiğin ilde eş zamanlı yer değişikliği arıyor.",
        accent: "text-blue",
      },
    ],
    announcements: [
      {
        id: "a1",
        icon: Coins,
        tag: "İkramiye",
        title: "Ocak tediyesi bordroya yansıdı",
        meta: "Bugün · Muhasebe",
        accent: "text-emerald-300",
      },
      {
        id: "a2",
        icon: ScrollText,
        tag: "Mevzuat",
        title: "TİS yorumu: Fazla mesai zamları",
        meta: "AI özet · 3 dk",
        accent: "text-violet",
      },
      {
        id: "a3",
        icon: Sparkles,
        tag: "Platform",
        title: "Görevde yükselme başvuruları açıldı",
        meta: "Son gün · 28 Şubat",
        accent: "text-orange",
      },
    ],
    aiPrompt: {
      eyebrow: "Kamu AI",
      title: "TİS'imdeki yeni haklarımı özetler misin?",
      description: "AI, yürürlükteki TİS metnini sade Türkçeye çevirir, lehine olan değişiklikleri işaretler.",
      cta: "TİS'i Sadeleştir",
    },
  },
};
