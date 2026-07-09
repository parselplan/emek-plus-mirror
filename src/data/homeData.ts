import {
  ArrowUpRight,
  BadgeCheck,
  BellRing,
  Bike,
  Bot,
  Briefcase,
  BriefcaseBusiness,
  Calculator,
  CalendarClock,
  CalendarDays,
  Clock,
  Coins,
  Eye,
  FileText,
  FileWarning,
  Gavel,
  Gift,
  GraduationCap,
  Headphones,
  HeartHandshake,
  HeartPulse,
  Landmark,
  Lock,
  MessageCircleQuestion,
  Plane,
  Receipt,
  ScrollText,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Star,
  Sun,
  Timer,
  BadgeCheck,
  BellRing,
  Bike,
  Bot,
  Briefcase,
  BriefcaseBusiness,
  Calculator,
  Clock,
  Coins,
  Eye,
  Gavel,
  Gift,
  GraduationCap,
  Headphones,
  HeartHandshake,
  HeartPulse,
  Landmark,
  Lock,
  MessageCircleQuestion,
  ScrollText,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Star,
  Timer,
  TrendingUp,
  Users,
  VenetianMask,
  Wallet,
  Zap,
} from "lucide-react";

import type {
  AiAssistantContent,
  BenefitCardItem,
  CampaignItem,
  DashboardWidgetSlot,
  ExperienceFeature,
  FieldSolutionItem,
  PublicSectorCardItem,
  QuickActionItem,
  SalarySummary,
  SectorOption,
  StatMetric,
} from "@/types/home";

export const salarySummary: SalarySummary = {
  estimatedNet: 49_750,
  changePercent: 12,
  overtimeHours: 20,
  extraEarnings: 8_500,
  contractReview: {
    title: "Sözleşmen Kontrol Edildi",
    subtitle: "2 uyarı tespit edildi",
    alertCount: 2,
  },
};

export const quickActions: QuickActionItem[] = [
  { id: "salary-calc", label: "Maaş Hesapla", icon: Calculator, gradient: "bg-gradient-orange" },
  { id: "overtime-calc", label: "Mesai Hesapla", icon: Clock, gradient: "bg-gradient-blue" },
  {
    id: "ask-contract",
    label: "Anlaşta Sor",
    icon: MessageCircleQuestion,
    gradient: "bg-gradient-violet",
  },
  { id: "ai-assistant", label: "Akıllı Asistan", icon: Bot, gradient: "bg-gradient-green" },
];

export const socialProofStats: StatMetric[] = [
  { id: "users", icon: Users, value: "200K+", label: "Mutlu Kullanıcı", color: "text-blue" },
  { id: "jobs", icon: Briefcase, value: "50K+", label: "İş İlanı", color: "text-orange" },
  { id: "raise", icon: TrendingUp, value: "%35", label: "Ort. Maaş Artışı", color: "text-green" },
  { id: "rating", icon: Star, value: "4.9", label: "Kullanıcı Puanı", color: "text-orange" },
];

export const fieldSolutions: FieldSolutionItem[] = [
  { id: "shift", icon: Timer, label: "Vardiya Takibi" },
  { id: "courier", icon: Bike, label: "Kurye & Market Hakları" },
  { id: "payroll", icon: Calculator, label: "Maaş & Mesai Hesaplama" },
  { id: "career", icon: BriefcaseBusiness, label: "İş İlanları & Kariyer" },
];

export const campaignHighlight: CampaignItem = {
  id: "campaigns",
  title: "Kampanyalar",
  subtitle: "Size özel indirim ve fırsatlar!",
  cta: "Keşfet",
};

export const sectorOptions: SectorOption[] = [
  {
    id: "retail",
    gradient: "bg-gradient-orange",
    icon: ShoppingCart,
    title: "Perakende / Lojistik / Üretim",
    subtitle: "Saha Çalışanlarına Özel",
  },
  {
    id: "education",
    gradient: "bg-gradient-blue",
    icon: GraduationCap,
    title: "Eğitim / Özel Okul / Kurs Merkezleri",
    subtitle: "Öğretmenlere Özel",
  },
  {
    id: "public",
    gradient: "bg-gradient-green",
    icon: Landmark,
    title: "Kamu Şirket Çalışanları",
    subtitle: "Kamu Çalışanlarına Özel",
  },
];

export const supportBenefits: BenefitCardItem[] = [
  {
    id: "lawyer",
    icon: Gavel,
    accent: "text-orange",
    title: "Avukat Ağı",
    description: "Alanında uzman avukatlarımız haklarınız için yanınızda.",
    cta: "Avukata Sor",
    ctaGradient: "bg-gradient-orange",
  },
  {
    id: "psychology",
    icon: HeartPulse,
    accent: "text-violet",
    title: "Psikolojik Destek",
    description: "Uzman psikologlarımızla güvenli görüşme yapın.",
    cta: "Destek Al",
    ctaGradient: "bg-gradient-violet",
  },
  {
    id: "advance",
    icon: Wallet,
    accent: "text-green",
    title: "Maaş Avansı",
    description: "Maaşını bekleme, anında nakite ulaş.",
    cta: "Hemen Başvur",
    ctaGradient: "bg-gradient-green",
  },
  {
    id: "ai",
    icon: Bot,
    accent: "text-blue",
    title: "Yapay Zeka Asistanı",
    description: "7/24 hak asistanın yanında!",
    cta: "Asistana Sor",
    ctaGradient: "bg-gradient-blue",
  },
];

export const newBenefits: BenefitCardItem[] = [
  {
    id: "health-insurance",
    icon: HeartHandshake,
    accent: "text-green",
    title: "Tamamlayıcı Sağlık Sigortası",
    description: "Sana ve ailene özel tamamlayıcı sağlık sigortası seçenekleri seni bekliyor.",
    cta: "Teklif Al",
    isNew: true,
  },
  {
    id: "microcredit",
    icon: Coins,
    accent: "text-violet",
    title: "Mikro Krediler ve Maaş Avansı",
    description: "Acil nakit ihtiyaçların için hızlı, kolay ve güvenilir çözümler.",
    cta: "Hemen Başvur",
    isNew: true,
  },
  {
    id: "employers",
    icon: BadgeCheck,
    accent: "text-orange",
    title: "Öne Çıkan Güvenilir İşverenler",
    description: "Etik, güvenilir ve öğretmen dostu okullar burada.",
    cta: "Okulları Gör",
    isNew: true,
  },
  {
    id: "shift-proof",
    icon: Timer,
    accent: "text-blue",
    title: "Vardiya & Mesai Kanıt Sistemi",
    description: "Vardiya giriş-çıkışlarını, mesai kayıtlarını güvenle tut, hakkını kanıtla.",
    cta: "Kayıt Tut",
    isNew: true,
  },
];

export const publicSectorBenefits: PublicSectorCardItem[] = [
  {
    id: "tis",
    icon: ScrollText,
    title: "TİS ve Mevzuat Tercümanı (AI Destekli)",
    description: "TİS metinlerini yapay zeka ile sadeleştirir.",
    cta: "TİS'ini İncele",
  },
  {
    id: "public-pay",
    icon: Calculator,
    title: "Kamu İşçisi Maaş, İkramiye ve Tediye Hesaplayıcı",
    description: "Tüm ödemeleri mevzuata göre hesapla.",
    cta: "Hesapla",
  },
  {
    id: "anonymous-rating",
    icon: VenetianMask,
    title: "Tam Anonim Liyakat ve Yönetici Puanlama",
    description: "Yönetici ve kurum kültürünü anonim değerlendir.",
    cta: "Puanla",
    badge: "%100 ANONİM",
  },
  {
    id: "transfer",
    icon: ArrowUpRight,
    title: "Tayin, Becayiş ve Görevde Yükselme Platformu",
    description: "Fırsatları keşfet, başvurunu kolayca yap.",
    cta: "Kayıt Ol",
  },
];

export const aiAssistantContent: AiAssistantContent = {
  eyebrow: "Akıllı Asistan",
  title: "Merhaba! Ben EMEK+ Yapay Zeka Asistanın.",
  description: "Haklarınla ilgili her şeyi bana sorabilirsin.",
  cta: "Asistana Sor",
};

export const experienceFeatures: ExperienceFeature[] = [
  { id: "fast", icon: Zap, label: "Hızlı & Kolay Kullanım", color: "text-violet" },
  { id: "secure", icon: Eye, label: "Güvenli & Şeffaf Sistem", color: "text-blue" },
  { id: "personal", icon: Sparkles, label: "Kişiselleştirilmiş Öneriler", color: "text-violet" },
  { id: "alerts", icon: BellRing, label: "Anlık Bildirimler ve Uyarılar", color: "text-orange" },
  { id: "support", icon: Headphones, label: "Kesintisiz Destek", color: "text-green" },
  { id: "kvkk", icon: Lock, label: "%100 KVKK Uyumlu", color: "text-green" },
];

/** Gelecekte Home üstüne eklenecek dinamik widget sırası */
export const plannedDashboardWidgets: DashboardWidgetSlot[] = [
  { id: "todayWorkHours", enabled: false, priority: 1 },
  { id: "salaryEstimate", enabled: false, priority: 2 },
  { id: "availableLeave", enabled: false, priority: 3 },
  { id: "upcomingHoliday", enabled: false, priority: 4 },
  { id: "payrollAlert", enabled: false, priority: 5 },
  { id: "aiSuggestion", enabled: false, priority: 6 },
  { id: "laborLawTip", enabled: false, priority: 7 },
];

export const homeFooter = {
  tagline: "İster sahada ol, ister sınıfta; hakların bizimle güvende.",
  copyright: "EMEK+ © 2026 · %100 KVKK Uyumlu",
};

export const supportHighlight = {
  icon: ShieldCheck,
  title: "Güçlü Destek",
  subtitle: "Daima yanınızdayız",
};

export const fieldWorkerSectionTitle = "Sahada Mücadele Edenlere Özel Çözümler";
export const sectorSectionTitle = "Hangi Sektördesin?";
export const sectorSectionSubtitle = "Sana en uygun deneyimi sunmak için seçimini yap.";
export const publicSectorSectionTitle = "Kamu Şirket Çalışanları İçin Özel Çözümler";
export const experienceSectionTitle = "Etkileyici Deneyim, Güçlü Özellikler";

/** Kampanya kartı ikonu — UI'da Gift kullanılıyor */
export { Gift as CampaignIcon };
