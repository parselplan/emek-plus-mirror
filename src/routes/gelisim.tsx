import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, KeyRound, Loader2 } from "lucide-react";
import { useState } from "react";

import { BottomNavigation } from "@/components/emek/home/BottomNavigation";
import { Logo } from "@/components/emek/Logo";
import { courseCategories, courses, gelisimCopy } from "@/data/gelisimData";
import { getCurrentSession } from "@/lib/auth-fns";

export const Route = createFileRoute("/gelisim")({
  beforeLoad: async () => {
    const session = await getCurrentSession();
    if (!session) {
      throw redirect({ to: "/login" });
    }
    return { session };
  },
  component: GelisimPage,
});

type Step = "code" | "verifying" | "courses";

function GelisimPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>("code");
  const [code, setCode] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.trim().length < 4) return;
    setStep("verifying");
    window.setTimeout(() => setStep("courses"), 1600);
  };

  const filteredCourses =
    activeCategory === "all"
      ? courses
      : courses.filter((course) => course.category === activeCategory);

  return (
    <div className="app-frame flex flex-col px-5 pb-28 pt-10">
      <button
        type="button"
        onClick={() => (step === "courses" ? setStep("code") : navigate({ to: "/home" }))}
        className="mb-4 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        {step === "courses" ? "Erişim Kodu" : "Ana Sayfa"}
      </button>

      <header className="flex items-center justify-between">
        <h1 className="text-xl font-extrabold text-foreground">Kişisel Gelişim</h1>
        <Logo size="sm" />
      </header>

      {step === "code" ? (
        <form
          onSubmit={handleSubmit}
          className="animate-fade-up mt-10 flex flex-1 flex-col items-center text-center"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-violet shadow-glow-violet">
            <KeyRound className="h-7 w-7 text-violet-foreground" />
          </span>
          <h2 className="mt-5 text-lg font-extrabold text-foreground">{gelisimCopy.code.title}</h2>
          <p className="mt-2 max-w-[80%] text-sm text-muted-foreground">
            {gelisimCopy.code.description}
          </p>

          <input
            autoFocus
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder={gelisimCopy.code.placeholder}
            className="mt-8 w-full rounded-2xl border border-border bg-card px-4 py-3.5 text-center text-base font-semibold tracking-[0.3em] text-foreground shadow-card outline-none placeholder:tracking-normal placeholder:text-muted-foreground/50 focus:border-violet/70"
          />

          <button
            type="submit"
            disabled={code.trim().length < 4}
            className="mt-auto flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-violet py-4 text-base font-bold text-violet-foreground shadow-glow-violet transition-transform active:scale-[0.98] disabled:opacity-40 disabled:shadow-none"
          >
            {gelisimCopy.code.cta}
            <ArrowRight className="h-5 w-5" />
          </button>
        </form>
      ) : null}

      {step === "verifying" ? (
        <div className="animate-fade-up mt-10 flex flex-1 flex-col items-center justify-center text-center">
          <span className="relative flex h-20 w-20 items-center justify-center">
            <span className="absolute inset-0 animate-pulse-glow rounded-full bg-violet/30 blur-xl" />
            <Loader2 className="h-10 w-10 animate-spin text-violet" />
          </span>
          <h2 className="mt-6 text-lg font-extrabold text-foreground">
            {gelisimCopy.verifying.title}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">{gelisimCopy.verifying.description}</p>
        </div>
      ) : null}

      {step === "courses" ? (
        <div className="animate-fade-up mt-6">
          <h2 className="text-lg font-extrabold text-foreground">{gelisimCopy.courses.title}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{gelisimCopy.courses.subtitle}</p>

          <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
            {courseCategories.map((category) => {
              const active = category.id === activeCategory;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
                    active
                      ? "bg-gradient-violet text-violet-foreground shadow-glow-violet"
                      : "border border-border/70 bg-card/50 text-muted-foreground"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          <div className="mt-5 flex flex-col gap-3">
            {filteredCourses.map((course, index) => {
              const Icon = course.icon;
              return (
                <div
                  key={course.id}
                  className="animate-fade-up flex items-center gap-3 rounded-2xl border border-border/60 bg-gradient-card p-3.5 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-violet/50 active:scale-[0.99]"
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${course.gradient}`}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-bold text-foreground">{course.title}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {course.lessons} · {course.level}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground" />
                </div>
              );
            })}
          </div>
        </div>
      ) : null}

      <BottomNavigation />
    </div>
  );
}
