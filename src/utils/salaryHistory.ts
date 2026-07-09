import type { SalaryCalculatorId } from "@/types/salary";

const STORAGE_KEY = "emek:salary-history";
const MAX_ENTRIES = 20;

export interface StoredSalaryHistoryEntry {
  id: string;
  calculatorId: SalaryCalculatorId;
  title: string;
  amount: number;
  createdAt: string;
  inputs: Record<string, number>;
}

function isStoredEntry(value: unknown): value is StoredSalaryHistoryEntry {
  if (!value || typeof value !== "object") return false;
  const entry = value as StoredSalaryHistoryEntry;
  return (
    typeof entry.id === "string" &&
    typeof entry.calculatorId === "string" &&
    typeof entry.title === "string" &&
    typeof entry.amount === "number" &&
    typeof entry.createdAt === "string" &&
    typeof entry.inputs === "object"
  );
}

export function readSalaryHistory(): StoredSalaryHistoryEntry[] {
  if (typeof window === "undefined") return [];

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isStoredEntry);
  } catch {
    return [];
  }
}

export function writeSalaryHistory(entries: StoredSalaryHistoryEntry[]): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entries.slice(0, MAX_ENTRIES)));
}

export function appendSalaryHistory(entry: StoredSalaryHistoryEntry): StoredSalaryHistoryEntry[] {
  const current = readSalaryHistory();
  const next = [entry, ...current.filter((item) => item.id !== entry.id)].slice(0, MAX_ENTRIES);
  writeSalaryHistory(next);
  return next;
}
