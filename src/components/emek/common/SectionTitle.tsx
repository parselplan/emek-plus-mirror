import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionTitle({ title, subtitle, className, align = "left" }: SectionTitleProps) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      <h2
        className={cn(
          "text-base font-extrabold text-foreground",
          align === "left" && subtitle && "mb-1",
          align === "center" && "mb-4",
        )}
      >
        {title}
      </h2>
      {subtitle ? <p className="mb-3 text-sm text-muted-foreground">{subtitle}</p> : null}
    </div>
  );
}
