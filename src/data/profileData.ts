export interface MockUserProfile {
  fullName: string;
  sector: string;
  workType: string;
  startDate: string;
}

export const mockUserProfile: MockUserProfile = {
  fullName: "Ahmet Yılmaz",
  sector: "İnşaat",
  workType: "Tam zamanlı",
  startDate: "12 Mart 2021",
};

export const profileMenuCards = [
  {
    id: "settings",
    label: "Ayarlar",
    description: "Bildirim, gizlilik ve güvenlik tercihleri",
  },
  {
    id: "documents",
    label: "Belgelerim",
    description: "Bordro, sözleşme ve raporlar",
  },
  {
    id: "support",
    label: "Destek",
    description: "Canlı destek ve sık sorulan sorular",
  },
  {
    id: "about",
    label: "Hakkımızda",
    description: "EMEK+ ve KVKK politikaları",
  },
] as const;
