import { BookOpen, GraduationCap, Languages, MessagesSquare, Timer } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const personalDevelopment = {
  eyebrow: "Kişisel Gelişim",
  title: "Kendini Geliştir",
  description:
    "İngilizceden mesleki eğitimlere, kendini geliştirecek yüzlerce eğitim seni bekliyor.",
  cta: "Erişim Kodunu Gir",
};

export interface CourseCategory {
  id: string;
  label: string;
}

export const courseCategories: CourseCategory[] = [
  { id: "all", label: "Tümü" },
  { id: "english", label: "İngilizce" },
  { id: "professional", label: "Mesleki" },
  { id: "personal", label: "Kişisel" },
];

export interface Course {
  id: string;
  title: string;
  lessons: string;
  category: CourseCategory["id"];
  level: string;
  icon: LucideIcon;
  gradient: string;
  accent: string;
}

export const courses: Course[] = [
  {
    id: "english-basic",
    title: "İngilizce Temel Seviye",
    lessons: "24 Ders",
    category: "english",
    level: "Başlangıç",
    icon: Languages,
    gradient: "bg-gradient-blue",
    accent: "text-blue",
  },
  {
    id: "english-advanced",
    title: "İleri İngilizce Programı",
    lessons: "36 Ders",
    category: "english",
    level: "İleri",
    icon: GraduationCap,
    gradient: "bg-gradient-violet",
    accent: "text-violet",
  },
  {
    id: "communication",
    title: "Etkili İletişim Teknikleri",
    lessons: "12 Ders",
    category: "personal",
    level: "Orta",
    icon: MessagesSquare,
    gradient: "bg-gradient-orange",
    accent: "text-orange",
  },
  {
    id: "time-management",
    title: "Zaman Yönetimi",
    lessons: "8 Ders",
    category: "personal",
    level: "Başlangıç",
    icon: Timer,
    gradient: "bg-gradient-green",
    accent: "text-green",
  },
  {
    id: "professional-skills",
    title: "Mesleki Yetkinlik Gelişimi",
    lessons: "18 Ders",
    category: "professional",
    level: "Orta",
    icon: BookOpen,
    gradient: "bg-gradient-blue",
    accent: "text-blue",
  },
];

export const gelisimCopy = {
  code: {
    title: "Erişim Kodu",
    description: "Kişisel gelişim içeriklerine erişmek için kodunu gir.",
    placeholder: "Kodunu gir",
    cta: "Devam Et",
  },
  verifying: {
    title: "Doğrulama",
    description: "Kod doğrulanıyor...",
  },
  courses: {
    title: "Eğitimler",
    subtitle: "Sana özel seçilen gelişim programları",
  },
};
