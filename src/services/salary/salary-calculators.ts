import type { SalaryCalculatorId } from "@/types/salary";

/** Dashboard mock verisiyle uyumlu yaklaşık net/brüt oranı */
const NET_TO_GROSS_RATIO = 49_750 / 68_250;

export interface CalculatorFieldConfig {
  id: string;
  label: string;
  placeholder?: string;
  defaultValue: number;
  suffix?: string;
}

export interface CalculatorConfig {
  id: SalaryCalculatorId;
  title: string;
  description: string;
  fields: CalculatorFieldConfig[];
}

export interface CalculatorResult {
  primaryLabel: string;
  primaryValue: number;
  breakdown: { label: string; value: number; kind: "currency" | "count" }[];
}

export const calculatorConfigs: Record<SalaryCalculatorId, CalculatorConfig> = {
  "net-gross": {
    id: "net-gross",
    title: "Netten Brüte",
    description: "Net maaş tutarından tahmini brüt maaşı hesapla.",
    fields: [
      { id: "net", label: "Net Maaş", defaultValue: 49_750, suffix: "₺" },
    ],
  },
  "gross-net": {
    id: "gross-net",
    title: "Brütten Nete",
    description: "Brüt maaş tutarından tahmini net maaşı hesapla.",
    fields: [
      { id: "gross", label: "Brüt Maaş", defaultValue: 68_250, suffix: "₺" },
    ],
  },
  overtime: {
    id: "overtime",
    title: "Fazla Mesai",
    description: "Fazla mesai saatine göre tahmini mesai ücretini hesapla.",
    fields: [
      { id: "hours", label: "Mesai Saati", defaultValue: 10, suffix: "saat" },
      { id: "hourlyRate", label: "Saatlik Ücret", defaultValue: 295, suffix: "₺" },
    ],
  },
  holiday: {
    id: "holiday",
    title: "Resmi Tatil Mesaisi",
    description: "Resmi tatilde çalışma ücretini hesapla.",
    fields: [
      { id: "hours", label: "Çalışılan Saat", defaultValue: 8, suffix: "saat" },
      { id: "hourlyRate", label: "Saatlik Ücret", defaultValue: 295, suffix: "₺" },
    ],
  },
  weekend: {
    id: "weekend",
    title: "Hafta Tatili Mesaisi",
    description: "Hafta tatilinde çalışma ücretini hesapla.",
    fields: [
      { id: "hours", label: "Çalışılan Saat", defaultValue: 8, suffix: "saat" },
      { id: "hourlyRate", label: "Saatlik Ücret", defaultValue: 295, suffix: "₺" },
    ],
  },
  severance: {
    id: "severance",
    title: "Kıdem Tazminatı",
    description: "Kıdem yılına göre tahmini kıdem tazminatını hesapla.",
    fields: [
      { id: "gross", label: "Brüt Maaş", defaultValue: 68_250, suffix: "₺" },
      { id: "years", label: "Kıdem Yılı", defaultValue: 5, suffix: "yıl" },
    ],
  },
  notice: {
    id: "notice",
    title: "İhbar Tazminatı",
    description: "İhbar süresine göre tahmini ihbar tazminatını hesapla.",
    fields: [
      { id: "gross", label: "Brüt Maaş", defaultValue: 68_250, suffix: "₺" },
      { id: "weeks", label: "İhbar Süresi", defaultValue: 6, suffix: "hafta" },
    ],
  },
};

export function getCalculatorConfig(id: SalaryCalculatorId): CalculatorConfig {
  return calculatorConfigs[id];
}

export function runSalaryCalculation(
  id: SalaryCalculatorId,
  values: Record<string, number>,
): CalculatorResult {
  switch (id) {
    case "net-gross": {
      const net = values.net ?? 0;
      const gross = Math.round(net / NET_TO_GROSS_RATIO);
      return {
        primaryLabel: "Tahmini Brüt Maaş",
        primaryValue: gross,
        breakdown: [
          { label: "Girilen Net", value: net, kind: "currency" },
          { label: "Tahmini Kesinti", value: gross - net, kind: "currency" },
        ],
      };
    }
    case "gross-net": {
      const gross = values.gross ?? 0;
      const net = Math.round(gross * NET_TO_GROSS_RATIO);
      return {
        primaryLabel: "Tahmini Net Maaş",
        primaryValue: net,
        breakdown: [
          { label: "Girilen Brüt", value: gross, kind: "currency" },
          { label: "Tahmini Kesinti", value: gross - net, kind: "currency" },
        ],
      };
    }
    case "overtime": {
      const hours = values.hours ?? 0;
      const hourlyRate = values.hourlyRate ?? 0;
      const total = Math.round(hours * hourlyRate * 1.5);
      return {
        primaryLabel: "Fazla Mesai Ücreti",
        primaryValue: total,
        breakdown: [
          { label: "Mesai Saati", value: hours, kind: "count" },
          { label: "Saatlik Ücret", value: hourlyRate, kind: "currency" },
        ],
      };
    }
    case "holiday": {
      const hours = values.hours ?? 0;
      const hourlyRate = values.hourlyRate ?? 0;
      const total = Math.round(hours * hourlyRate * 2);
      return {
        primaryLabel: "Resmi Tatil Ücreti",
        primaryValue: total,
        breakdown: [
          { label: "Çalışılan Saat", value: hours, kind: "count" },
          { label: "Saatlik Ücret", value: hourlyRate, kind: "currency" },
        ],
      };
    }
    case "weekend": {
      const hours = values.hours ?? 0;
      const hourlyRate = values.hourlyRate ?? 0;
      const total = Math.round(hours * hourlyRate * 1.5);
      return {
        primaryLabel: "Hafta Tatili Ücreti",
        primaryValue: total,
        breakdown: [
          { label: "Çalışılan Saat", value: hours, kind: "count" },
          { label: "Saatlik Ücret", value: hourlyRate, kind: "currency" },
        ],
      };
    }
    case "severance": {
      const gross = values.gross ?? 0;
      const years = values.years ?? 0;
      const total = Math.round(gross * years);
      return {
        primaryLabel: "Kıdem Tazminatı",
        primaryValue: total,
        breakdown: [
          { label: "Brüt Maaş", value: gross, kind: "currency" },
          { label: "Kıdem Yılı", value: years, kind: "count" },
        ],
      };
    }
    case "notice": {
      const gross = values.gross ?? 0;
      const weeks = values.weeks ?? 0;
      const total = Math.round((gross / 4) * weeks);
      return {
        primaryLabel: "İhbar Tazminatı",
        primaryValue: total,
        breakdown: [
          { label: "Brüt Maaş", value: gross, kind: "currency" },
          { label: "İhbar Süresi (hafta)", value: weeks, kind: "count" },
        ],
      };
    }
  }
}
