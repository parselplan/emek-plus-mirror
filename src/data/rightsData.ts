import {
  CalendarDays,
  Clock,
  Landmark,
  Palmtree,
  Scale,
  TimerReset,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import type { SalaryCalculatorId } from "@/types/salary";

export interface RightCardData {
  id: string;
  title: string;
  status: string;
  summary: string;
  details: string[];
  icon: LucideIcon;
  accent: string;
  tint: string;
  calculatorId?: SalaryCalculatorId;
}

export const rightsDisclaimer =
  "Bu bilgiler genel bilgilendirme amaçlıdır; hukuki danışmanlık veya kesin hak hesabı yerine geçmez.";

export const rightsCardsData: RightCardData[] = [
  {
    id: "annual-leave",
    title: "Yıllık İzin",
    status: "14 gün",
    summary: "Kıdeme göre hak edilen yıllık ücretli izin süren.",
    details: [
      "1-5 yıl arası çalışanlar için genelde 14 gün yıllık izin hakkı öngörülür.",
      "İzin kullanılmadan devredilebilir; işveren onayı ve kayıt önemlidir.",
      "Kullanılmayan izin ücreti işten ayrılışta gündem olabilir.",
    ],
    icon: Palmtree,
    accent: "text-green",
    tint: "bg-green/15",
  },
  {
    id: "severance",
    title: "Kıdem Tazminatı",
    status: "Ön hesap",
    summary: "Çalışma sürene göre kıdem tazminatı hakkının genel çerçevesi.",
    details: [
      "Belirli şartlarda her tam yıl için brüt ücret üzerinden hesaplanır.",
      "Hak kazanma koşulları işe giriş, sigorta ve fesih şekline bağlıdır.",
      "EMEK+ Maaş modülünden ön hesap yapabilirsin.",
    ],
    icon: Scale,
    accent: "text-orange",
    tint: "bg-orange/15",
    calculatorId: "severance",
  },
  {
    id: "notice",
    title: "İhbar Süresi",
    status: "6 hafta",
    summary: "İş sözleşmesi feshinde uygulanabilecek ihbar süreleri.",
    details: [
      "Kıdeme göre 2 ila 8 hafta arasında değişen ihbar süreleri olabilir.",
      "İhbar süresine uyulmaması tazminat doğurabilir.",
      "Ön hesap için Maaş modülündeki ihbar aracını kullan.",
    ],
    icon: TimerReset,
    accent: "text-violet",
    tint: "bg-violet/15",
    calculatorId: "notice",
  },
  {
    id: "overtime",
    title: "Fazla Mesai",
    status: "20 saat",
    summary: "Haftalık çalışma süresini aşan çalışmalarda ücret hakları.",
    details: [
      "Fazla mesai yazılı onay ve kayıt altında olmalıdır.",
      "Ücret genelde normal saat ücretinin %50 fazlasıyla hesaplanır.",
      "Bordro ve puantaj kayıtlarını karşılaştırmak önemlidir.",
    ],
    icon: Clock,
    accent: "text-blue",
    tint: "bg-blue/15",
    calculatorId: "overtime",
  },
  {
    id: "holiday",
    title: "Resmi Tatil",
    status: "Güncel",
    summary: "Resmi tatilde çalışma ve ücretlendirme kuralları.",
    details: [
      "Resmi tatilde çalışan işçiye ek ücret veya izin hakkı doğabilir.",
      "Çalışılmayan resmi tatil günü için günlük ücret ödenir.",
      "Mesai hesabı için Maaş modülünü kullanabilirsin.",
    ],
    icon: CalendarDays,
    accent: "text-orange",
    tint: "bg-orange/15",
    calculatorId: "holiday",
  },
  {
    id: "sgk",
    title: "SGK",
    status: "Aktif",
    summary: "Sosyal güvenlik primleri ve sigorta durumun.",
    details: [
      "İşveren çalışan adına SGK primi ödemekle yükümlüdür.",
      "Prim gün sayısı emeklilik ve hak hesaplarında kritiktir.",
      "e-Devlet ve SGK hizmet dökümünden kayıtlarını kontrol et.",
    ],
    icon: Landmark,
    accent: "text-green",
    tint: "bg-green/15",
  },
];
