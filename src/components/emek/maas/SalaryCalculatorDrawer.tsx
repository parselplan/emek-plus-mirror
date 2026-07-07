import { useEffect, useState } from "react";
import { Calculator } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  getCalculatorConfig,
  runSalaryCalculation,
  type CalculatorResult,
} from "@/services/salary/salary-calculators";
import type { SalaryCalculatorId } from "@/types/salary";
import { formatCurrency } from "@/utils/formatters";

interface SalaryCalculatorDrawerProps {
  calculatorId: SalaryCalculatorId | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCalculated?: (payload: {
    calculatorId: SalaryCalculatorId;
    title: string;
    amount: number;
  }) => void;
}

function buildDefaultValues(calculatorId: SalaryCalculatorId): Record<string, number> {
  const config = getCalculatorConfig(calculatorId);
  return Object.fromEntries(config.fields.map((field) => [field.id, field.defaultValue]));
}

export function SalaryCalculatorDrawer({
  calculatorId,
  open,
  onOpenChange,
  onCalculated,
}: SalaryCalculatorDrawerProps) {
  const [values, setValues] = useState<Record<string, number>>({});
  const [result, setResult] = useState<CalculatorResult | null>(null);

  useEffect(() => {
    if (!calculatorId) return;
    setValues(buildDefaultValues(calculatorId));
    setResult(null);
  }, [calculatorId]);

  if (!calculatorId) return null;

  const config = getCalculatorConfig(calculatorId);

  const handleCalculate = () => {
    const hasEmptyField = config.fields.some((field) => !values[field.id] && values[field.id] !== 0);
    if (hasEmptyField) {
      toast.error("Lütfen tüm alanları doldur.");
      return;
    }

    const nextResult = runSalaryCalculation(calculatorId, values);
    setResult(nextResult);
    onCalculated?.({
      calculatorId,
      title: config.title,
      amount: nextResult.primaryValue,
    });
    toast.success("Hesaplama tamamlandı.");
  };

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="app-frame mx-auto max-h-[90vh] rounded-t-3xl border-border/70">
        <DrawerHeader className="px-5 pb-2 text-left">
          <DrawerTitle className="text-xl font-bold">{config.title}</DrawerTitle>
          <DrawerDescription>{config.description}</DrawerDescription>
        </DrawerHeader>

        <div className="space-y-4 overflow-y-auto px-5 pb-2">
          {config.fields.map((field) => (
            <div key={field.id} className="space-y-2">
              <Label htmlFor={field.id} className="text-sm font-semibold">
                {field.label}
              </Label>
              <div className="flex items-center gap-2 rounded-2xl border border-border/70 bg-card/50 px-4 py-3">
                <Input
                  id={field.id}
                  type="number"
                  inputMode="decimal"
                  min={0}
                  value={values[field.id] ?? ""}
                  onChange={(event) => {
                    const next = Number(event.target.value);
                    setValues((current) => ({
                      ...current,
                      [field.id]: Number.isFinite(next) ? next : 0,
                    }));
                    setResult(null);
                  }}
                  className="h-auto border-0 bg-transparent p-0 text-base font-semibold shadow-none focus-visible:ring-0"
                />
                {field.suffix ? (
                  <span className="shrink-0 text-sm text-muted-foreground">{field.suffix}</span>
                ) : null}
              </div>
            </div>
          ))}

          {result ? (
            <div className="rounded-2xl bg-gradient-card p-4 shadow-card">
              <p className="text-xs font-medium text-muted-foreground">{result.primaryLabel}</p>
              <p className="mt-1 text-3xl font-extrabold text-foreground">
                {formatCurrency(result.primaryValue)}
              </p>
              <div className="mt-3 space-y-1.5 border-t border-border/60 pt-3">
                {result.breakdown.map((row) => (
                  <div key={row.label} className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{row.label}</span>
                    <span className="font-semibold text-foreground">
                      {row.kind === "currency" ? formatCurrency(row.value) : row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>

        <DrawerFooter className="px-5 pb-8">
          <Button
            type="button"
            onClick={handleCalculate}
            className="h-12 w-full rounded-2xl bg-gradient-orange text-base font-bold text-orange-foreground shadow-glow-orange hover:opacity-90"
          >
            <Calculator className="h-4 w-4" />
            Hesapla
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
