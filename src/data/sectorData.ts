import {
  ArrowUpRight,
  Bike,
  BookOpen,
  BriefcaseBusiness,
  Calculator,
  ClipboardList,
  ScrollText,
  Timer,
  UserRound,
  VenetianMask,
} from "lucide-react";

import type { FieldSolutionItem, PublicSectorCardItem } from "@/types/home";

export type SectorId = "retail" | "education" | "public";

export const sectorIds: SectorId[] = ["retail", "education", "public"];

export function isSectorId(value: string): value is SectorId {
  return sectorIds.includes(value as SectorId);
}

export const retailFieldSolutions: FieldSolutionItem[] = [
  { id: "shift", icon: Timer, label: "Vardiya Takibi", labelLines: ["Vardiya", "Takibi"] },
  {
    id: "courier",
    icon: Bike,
    label: "Kurye & Market Hakları",
    labelLines: ["Kurye &", "Market Hakları"],
  },
  {
    id: "payroll",
    icon: Calculator,
    label: "Maaş & Mesai Hesaplama",
    labelLines: ["Maaş &", "Mesai Hesaplama"],
  },
  {
    id: "career",
    icon: BriefcaseBusiness,
    label: "İş İlanları & Kariyer",
    labelLines: ["İş İlanları", "& Kariyer"],
  },
];

export const educationSolutions: FieldSolutionItem[] = [
  { id: "contract", icon: UserRound, label: "Sözleşme Asistanı", labelLines: ["Sözleşme", "Asistanı"] },
  {
    id: "extra-lesson",
    icon: Calculator,
    label: "Ek Ders & Mesai Hesapla",
    labelLines: ["Ek Ders &", "Mesai Hesapla"],
  },
  {
    id: "school-rating",
    icon: ClipboardList,
    label: "Okul Puanlama & İnceleme",
    labelLines: ["Okul Puanlama", "& İnceleme"],
  },
  {
    id: "stationery",
    icon: BookOpen,
    label: "Kırtasiye & Hak Takibi",
    labelLines: ["Kırtasiye &", "Hak Takibi"],
  },
];

export const publicSectorFeatures: PublicSectorCardItem[] = [
  {
    id: "tis",
    icon: ScrollText,
    title: "TİS (Toplu İş Sözleşmesi) ve Mevzuat Tercümanı (AI Destekli)",
    description:
      "TİS metinlerini yapay zeka ile sadeleştirir, haklarını anlamanı sağlar.",
    cta: "TİS'ini İncele",
  },
  {
    id: "public-pay",
    icon: Calculator,
    title: "Kamu İşçisi Maaş, İkramiye ve Tediye Hesaplayıcı",
    description: "Maaş, ikramiye, tediye ve diğer tüm ödemelerini mevzuata göre hesapla.",
    cta: "Hesapla",
  },
  {
    id: "anonymous-rating",
    icon: VenetianMask,
    title: 'Tam Anonim "Liyakat ve Yönetici Puanlama"',
    description: "Yönetici ve kurum kültürünü anonim olarak değerlendir, geleceğe ışık tut.",
    cta: "Puanla",
    badge: "%100 ANONİM",
  },
  {
    id: "transfer",
    icon: ArrowUpRight,
    title: "Tayin, Becayiş ve Görevde Yükselme Platformu",
    description: "Tayin, becayiş ve yükselme fırsatlarını keşfet, başvurunu kolayca yap.",
    cta: "Kayıt Ol",
  },
];

export const sectorPageMeta: Record<
  SectorId,
  { title: string; subtitle: string; sectionTitle?: string }
> = {
  retail: {
    title: "Saha Çalışanları",
    subtitle: "Perakende, lojistik ve üretim için özel araçlar.",
    sectionTitle: "Sahada Mücadele Edenlere Özel Çözümler",
  },
  education: {
    title: "Eğitim & Özel Okul",
    subtitle: "Öğretmenlere ve eğitim çalışanlarına özel araçlar.",
    sectionTitle: "Öğretmenlere Özel Çözümler",
  },
  public: {
    title: "Kamu Şirket Çalışanları",
    subtitle: "Kamu işçilerine özel dijital hak araçları.",
    sectionTitle: "Kamu Şirket Çalışanları İçin Özel Çözümler",
  },
};
