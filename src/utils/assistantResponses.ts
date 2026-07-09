const assistantDisclaimer =
  "Bu yanıt genel bilgilendirme amaçlıdır; kesin hukuki veya mali danışmanlık değildir.";

const responses: Record<string, string> = {
  salary:
    "Net maaşın yaklaşık 49.750 ₺ ise brüt karşılığı genelde 68.000 ₺ bandında olur. Kesintiler vergi dilimi, SGK ve işsizlik primine göre değişir. Maaş modülünden net-brüt simülasyonu yapabilirsin.",
  overtime:
    "Fazla mesai, haftalık 45 saati aşan çalışmalarda ve yazılı onayla geçerlidir. Ücret normal saat ücretinin en az %50 fazlasıyla hesaplanır. Puantaj ve bordronu karşılaştırmanı öneririm.",
  severance:
    "Kıdem tazminatı ön hesabı için son brüt maaşın ve tam kıdem yılın esas alınır. 5 yıl ve 68.250 ₺ brüt örneğinde yaklaşık 341.250 ₺ ön sonuç çıkar. Kesin tutar için bordro ve fesih koşullarına bakılmalıdır.",
  employer:
    "İşveren; ücret ödeme, SGK bildirimi, fazla mesai kaydı ve yıllık izin kullandırma gibi yükümlülükleri vardır. Sözleşmeye aykırı veya kayıt dışı uygulamalar çoğu durumda sana başvuru hakkı doğurur.",
  payslip:
    "Bordroda brüt ücret, SGK işçi payı, gelir vergisi, damga vergisi ve net ödeme satırlarını kontrol et. Fazla mesai, prim ve kesintiler ayrı satırlarda görünmelidir. Şüpheli satır varsa Maaş modülüyle karşılaştır.",
};

function normalizeQuestion(question: string): string {
  return question.trim().toLocaleLowerCase("tr-TR");
}

export function getAssistantReply(question: string): string {
  const text = normalizeQuestion(question);

  if (text.includes("maaş") || text.includes("maas") || text.includes("net") || text.includes("brüt")) {
    return `${responses.salary}\n\n${assistantDisclaimer}`;
  }
  if (text.includes("fazla mesai") || text.includes("mesai")) {
    return `${responses.overtime}\n\n${assistantDisclaimer}`;
  }
  if (text.includes("kıdem") || text.includes("kidem") || text.includes("tazminat")) {
    return `${responses.severance}\n\n${assistantDisclaimer}`;
  }
  if (text.includes("işveren") || text.includes("isveren") || text.includes("yapabilir")) {
    return `${responses.employer}\n\n${assistantDisclaimer}`;
  }
  if (text.includes("bordro")) {
    return `${responses.payslip}\n\n${assistantDisclaimer}`;
  }

  return `Sorunu aldım. Maaş, fazla mesai, kıdem/ihbar tazminatı ve bordro konularında genel bilgi verebilirim. Daha net yanıt için Maaş veya Haklarım ekranlarındaki araçları da kullanabilirsin.\n\n${assistantDisclaimer}`;
}

export const assistantQuickQuestions = [
  { id: "salary", label: "Maaşımı hesapla" },
  { id: "overtime", label: "Fazla mesaim doğru mu?" },
  { id: "severance", label: "Kıdem tazminatım ne olur?" },
  { id: "employer", label: "İşveren bunu yapabilir mi?" },
  { id: "payslip", label: "Bordromu açıkla" },
] as const;

export function getQuickQuestionReply(id: (typeof assistantQuickQuestions)[number]["id"]): string {
  return `${responses[id]}\n\n${assistantDisclaimer}`;
}
