import logoMark from "@/assets/emek-logo-mark.png";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showMark?: boolean;
}

const sizeMap = {
  sm: { text: "text-xl", mark: "h-6 w-6" },
  md: { text: "text-3xl", mark: "h-9 w-9" },
  lg: { text: "text-5xl", mark: "h-14 w-14" },
  xl: { text: "text-6xl", mark: "h-20 w-20" },
};

export function Logo({ className, size = "md", showMark = true }: LogoProps) {
  const s = sizeMap[size];
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      {showMark && (
        <img
          src={logoMark}
          alt="EMEK+ logo"
          className={cn(s.mark, "object-contain drop-shadow-[0_4px_14px_rgba(249,115,22,0.35)]")}
        />
      )}
      <span className={cn(s.text, "font-display font-extrabold tracking-tight text-foreground")}>
        EMEK<span className="text-gradient-orange">+</span>
      </span>
    </div>
  );
}
