import { useEffect, useMemo, useState } from "react";
import { Calculator } from "lucide-react";

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
  buildDefaultCalculatorValues,
  getCalculatorConfig,
  runSalaryCalculation,
} from "@/utils/salaryCalculations";
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
    inputs: Record<string, number>;
  }) => void;
}

export function SalaryCalculatorDrawer({
  calculatorId,
  open,
  onOpenChange,
  onCalculated,
}: SalaryCalculatorDrawerProps) {
  const [values, setValues] = useState<Record<string, number>>({});

  useEffect(() => {
    if (!calculatorId) return;
    setValues(buildDefaultCalculatorValues(calculatorId));
  }, [calculatorId]);

  const config = calculatorId ? getCalculatorConfig(calculatorId) : null;

  const result = useMemo(() => {
    if (!calculatorId || !config) return null;
    const hasAllFields = config.fields.every(
      (field) => values[field.id] !== undefined && values[field.id] >= 0,
    );
    if (!hasAllFields) return null;
    return runSalaryCalculation(calculatorId, values);
  }, [calculatorId, config, values]);

  useEffect(() => {
    if (!calculatorId || !config || !result) return;

    const timer = window.setTimeout(() => {
      onCalculated?.({
        calculatorId,
        title: config.title,
        amount: result.primaryValue,
        inputs: values,
      });
    }, 500);

    return () => window.clearTimeout(timer);
  }, [calculatorId, config, onCalculated, result, values]);

  if (!calculatorId || !config) return null;

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
            onClick={() => onOpenChange(false)}
            className="h-12 w-full rounded-2xl bg-gradient-orange text-base font-bold text-orange-foreground shadow-glow-orange hover:opacity-90"
          >
            <Calculator className="h-4 w-4" />
            Tamam
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
