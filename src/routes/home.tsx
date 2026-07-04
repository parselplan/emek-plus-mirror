import { createFileRoute } from "@tanstack/react-router";
import {
  Bell,
  Wallet,
  Clock,
  FileCheck2,
  Calculator,
  MessageCircleQuestion,
  Bot,
  Users,
  Briefcase,
  TrendingUp,
  Star,
  ShieldCheck,
  Timer,
  Bike,
  Coins,
  BriefcaseBusiness,
  ShoppingCart,
  GraduationCap,
  Landmark,
  Gavel,
  HeartPulse,
  ChevronRight,
  HeartHandshake,
  BadgeCheck,
  ScrollText,
  VenetianMask,
  ArrowUpRight,
  Zap,
  Eye,
  Sparkles,
  BellRing,
  Headphones,
  Lock,
  Gift,
} from "lucide-react";
import { Logo } from "@/components/emek/Logo";
import { BottomNav } from "@/components/emek/BottomNav";
import shieldHero from "@/assets/shield-hero.jpg";
import aiAssistant from "@/assets/ai-assistant.png";

export const Route = createFileRoute("/home")({
  component: Home,
});

function Home() {
  return (
    <div className="app-frame pb-28">
      {/* Header */}
      <header className="flex items-center justify-between px-5 pt-12">
        <div>
          <p className="text-sm text-muted-foreground">Merhaba,</p>
          <h1 className="text-xl font-bold text-foreground">Hoş geldin! 👋</h1>
        </div>
        <div className="flex items-center gap-3">
          <Logo size="sm" />
          <button className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-card">
            <Bell className="h-5 w-5 text-foreground" />
            <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-orange" />
          </button>
        </div>
      </header>

      {/* Salary card */}
      <section className="mt-5 px-5">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-card p-5 shadow-card">
          <div className="pointer-events-none absolute -right-8 -top-10 h-32 w-32 rounded-full bg-violet/20 blur-2xl" />
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-medium text-muted-foreground">Tahmini Maaşın</p>
              <p className="mt-1 text-3xl font-extrabold text-foreground">₺49.750</p>
              <p className="text-xs text-muted-foreground">Aylık tahmini net kazanç</p>
            </div>
            <span className="rounded-full bg-green/15 px-2.5 py-1 text-xs font-bold text-green">
              +%12
            </span>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-border/70 bg-background/40 p-3">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="h-3.5 w-3.5 text-blue" /> Mesai
              </div>
              <p className="mt-1 font-bold text-foreground">20 Saat</p>
            </div>
            <div className="rounded-2xl border border-border/70 bg-background/40 p-3">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Wallet className="h-3.5 w-3.5 text-orange" /> Ek Kazanç
              </div>
              <p className="mt-1 font-bold text-foreground">₺8.500</p>
            </div>
          </div>

          <button className="mt-4 flex w-full items-center justify-between rounded-2xl bg-violet/15 px-4 py-3 text-left">
            <span className="flex items-center gap-3">
              <FileCheck2 className="h-5 w-5 text-violet" />
              <span>
                <span className="block text-sm font-bold text-foreground">Sözleşmen Kontrol Edildi</span>
                <span className="block text-xs text-muted-foreground">2 uyarı tespit edildi</span>
              </span>
            </span>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>
      </section>

      {/* Shortcuts */}
      <section className="mt-6 px-5">
        <h2 className="mb-3 text-sm font-bold text-foreground">Kısayollar</h2>
        <div className="grid grid-cols-4 gap-3">
          {[
            { icon: Calculator, label: "Maaş Hesapla", grad: "bg-gradient-orange" },
            { icon: Clock, label: "Mesai Hesapla", grad: "bg-gradient-blue" },
            { icon: MessageCircleQuestion, label: "Anlaşta Sor", grad: "bg-gradient-violet" },
            { icon: Bot, label: "Akıllı Asistan", grad: "bg-gradient-green" },
          ].map((s) => (
            <button key={s.label} className="flex flex-col items-center gap-2">
              <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${s.grad} shadow-card`}>
                <s.icon className="h-6 w-6 text-white" />
              </span>
              <span className="text-center text-[11px] font-semibold leading-tight text-muted-foreground">
                {s.label}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="mt-6 px-5">
        <div className="grid grid-cols-2 gap-3 rounded-3xl border border-border/70 bg-card/60 p-4">
          {[
            { icon: Users, value: "200K+", label: "Mutlu Kullanıcı", color: "text-blue" },
            { icon: Briefcase, value: "50K+", label: "İş İlanı", color: "text-orange" },
            { icon: TrendingUp, value: "%35", label: "Ort. Maaş Artışı", color: "text-green" },
            { icon: Star, value: "4.9", label: "Kullanıcı Puanı", color: "text-orange" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <s.icon className={`h-6 w-6 ${s.color}`} />
              <div>
                <p className="text-lg font-extrabold leading-none text-foreground">{s.value}</p>
                <p className="text-[11px] text-muted-foreground">{s.label}</p>
              </div>
            </div>
          ))}
          <div className="col-span-2 flex items-center gap-3 border-t border-border/60 pt-3">
            <ShieldCheck className="h-6 w-6 text-violet" />
            <div>
              <p className="text-sm font-bold text-foreground">Güçlü Destek</p>
              <p className="text-[11px] text-muted-foreground">Daima yanınızdayız</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sahada mücadele */}
      <section className="mt-8 px-5">
        <h2 className="mb-1 text-base font-extrabold text-foreground">
          Sahada Mücadele Edenlere Özel Çözümler
        </h2>
        <div className="mt-3 grid grid-cols-4 gap-3">
          {[
            { icon: Timer, label: "Vardiya Takibi" },
            { icon: Bike, label: "Kurye & Market Hakları" },
            { icon: Calculator, label: "Maaş & Mesai Hesaplama" },
            { icon: BriefcaseBusiness, label: "İş İlanları & Kariyer" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-2 rounded-2xl border border-border/60 bg-card/50 p-3">
              <s.icon className="h-6 w-6 text-orange" />
              <span className="text-center text-[10px] font-semibold leading-tight text-muted-foreground">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-3xl bg-gradient-card p-4 shadow-card">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-xs text-muted-foreground">Tahmini Maaşın</p>
              <p className="text-2xl font-extrabold text-foreground">₺49.750</p>
              <span className="mt-1 inline-block rounded-md bg-green/15 px-2 py-0.5 text-xs font-bold text-green">
                +%12
              </span>
            </div>
            <div className="border-l border-border/60 pl-3">
              <p className="text-xs text-muted-foreground">Mesai Durumu</p>
              <p className="text-lg font-bold text-foreground">20 Saat</p>
              <p className="mt-1 text-xs text-muted-foreground">Ek Kazanç</p>
              <p className="font-bold text-orange">₺8.500</p>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between rounded-2xl border border-border/60 bg-background/40 p-3">
            <span className="flex items-center gap-3">
              <Gift className="h-6 w-6 text-violet" />
              <span>
                <span className="block text-sm font-bold text-foreground">Kampanyalar</span>
                <span className="block text-xs text-muted-foreground">Size özel indirim ve fırsatlar!</span>
              </span>
            </span>
            <span className="rounded-xl bg-gradient-orange px-3 py-1.5 text-xs font-bold text-orange-foreground">
              Keşfet
            </span>
          </div>
        </div>
      </section>

      {/* Hangi sektördesin */}
      <section className="mt-8 px-5">
        <h2 className="text-base font-extrabold text-foreground">Hangi Sektördesin?</h2>
        <p className="mb-3 text-sm text-muted-foreground">
          Sana en uygun deneyimi sunmak için seçimini yap.
        </p>
        <div className="flex flex-col gap-3">
          <SectorCard
            grad="bg-gradient-orange"
            icon={ShoppingCart}
            title="Perakende / Lojistik / Üretim"
            subtitle="Saha Çalışanlarına Özel"
          />
          <SectorCard
            grad="bg-gradient-blue"
            icon={GraduationCap}
            title="Eğitim / Özel Okul / Kurs Merkezleri"
            subtitle="Öğretmenlere Özel"
          />
          <SectorCard
            grad="bg-gradient-green"
            icon={Landmark}
            title="Kamu Şirket Çalışanları"
            subtitle="Kamu Çalışanlarına Özel"
          />
        </div>
      </section>

      {/* Support feature cards */}
      <section className="mt-8 px-5">
        <div className="grid grid-cols-2 gap-3">
          <FeatureCard icon={Gavel} accent="text-orange" title="Avukat Ağı" desc="Alanında uzman avukatlarımız haklarınız için yanınızda." cta="Avukata Sor" ctaGrad="bg-gradient-orange" />
          <FeatureCard icon={HeartPulse} accent="text-violet" title="Psikolojik Destek" desc="Uzman psikologlarımızla güvenli görüşme yapın." cta="Destek Al" ctaGrad="bg-gradient-violet" />
          <FeatureCard icon={Wallet} accent="text-green" title="Maaş Avansı" desc="Maaşını bekleme, anında nakite ulaş." cta="Hemen Başvur" ctaGrad="bg-gradient-green" />
          <FeatureCard icon={Bot} accent="text-blue" title="Yapay Zeka Asistanı" desc="7/24 hak asistanın yanında!" cta="Asistana Sor" ctaGrad="bg-gradient-blue" />
        </div>
      </section>

      {/* YENİ cards */}
      <section className="mt-8 px-5">
        <div className="grid grid-cols-2 gap-3">
          <NewCard icon={HeartHandshake} accent="text-green" title="Tamamlayıcı Sağlık Sigortası" desc="Sana ve ailene özel tamamlayıcı sağlık sigortası seçenekleri seni bekliyor." cta="Teklif Al" />
          <NewCard icon={Coins} accent="text-violet" title="Mikro Krediler ve Maaş Avansı" desc="Acil nakit ihtiyaçların için hızlı, kolay ve güvenilir çözümler." cta="Hemen Başvur" />
          <NewCard icon={BadgeCheck} accent="text-orange" title="Öne Çıkan Güvenilir İşverenler" desc="Etik, güvenilir ve öğretmen dostu okullar burada." cta="Okulları Gör" />
          <NewCard icon={Timer} accent="text-blue" title="Vardiya & Mesai Kanıt Sistemi" desc="Vardiya giriş-çıkışlarını, mesai kayıtlarını güvenle tut, hakkını kanıtla." cta="Kayıt Tut" />
        </div>
      </section>

      {/* Kamu şirket çalışanları */}
      <section className="mt-8 px-5">
        <div className="rounded-3xl border border-border/60 bg-card/50 p-4">
          <h2 className="mb-4 text-center text-base font-extrabold text-blue">
            Kamu Şirket Çalışanları İçin Özel Çözümler
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <PublicCard icon={ScrollText} title="TİS ve Mevzuat Tercümanı (AI Destekli)" desc="TİS metinlerini yapay zeka ile sadeleştirir." cta="TİS'ini İncele" />
            <PublicCard icon={Calculator} title="Kamu İşçisi Maaş, İkramiye ve Tediye Hesaplayıcı" desc="Tüm ödemeleri mevzuata göre hesapla." cta="Hesapla" />
            <PublicCard icon={VenetianMask} title="Tam Anonim Liyakat ve Yönetici Puanlama" desc="Yönetici ve kurum kültürünü anonim değerlendir." cta="Puanla" badge="%100 ANONİM" />
            <PublicCard icon={ArrowUpRight} title="Tayin, Becayiş ve Görevde Yükselme Platformu" desc="Fırsatları keşfet, başvurunu kolayca yap." cta="Kayıt Ol" />
          </div>
        </div>
      </section>

      {/* Assistant banner */}
      <section className="mt-8 px-5">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-violet p-5 shadow-glow-violet">
          <div className="max-w-[62%]">
            <p className="text-xs font-semibold uppercase tracking-wide text-white/80">Akıllı Asistan</p>
            <h3 className="mt-1 text-lg font-extrabold text-white">Merhaba! Ben EMEK+ Yapay Zeka Asistanın.</h3>
            <p className="mt-1 text-sm text-white/85">Haklarınla ilgili her şeyi bana sorabilirsin.</p>
            <button className="mt-3 rounded-xl bg-white px-4 py-2 text-sm font-bold text-violet">
              Asistana Sor
            </button>
          </div>
          <img
            src={aiAssistant}
            alt="EMEK+ yapay zeka asistanı"
            width={816}
            height={816}
            loading="lazy"
            className="absolute -bottom-2 right-0 h-40 w-40 animate-float object-contain drop-shadow-2xl"
          />
        </div>
      </section>

      {/* Etkileyici deneyim */}
      <section className="mt-8 px-5">
        <h2 className="mb-4 text-center text-base font-extrabold text-foreground">
          Etkileyici Deneyim, Güçlü Özellikler
        </h2>
        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: Zap, label: "Hızlı & Kolay Kullanım", color: "text-violet" },
            { icon: Eye, label: "Güvenli & Şeffaf Sistem", color: "text-blue" },
            { icon: Sparkles, label: "Kişiselleştirilmiş Öneriler", color: "text-violet" },
            { icon: BellRing, label: "Anlık Bildirimler ve Uyarılar", color: "text-orange" },
            { icon: Headphones, label: "Kesintisiz Destek", color: "text-green" },
            { icon: Lock, label: "%100 KVKK Uyumlu", color: "text-green" },
          ].map((f) => (
            <div key={f.label} className="flex flex-col items-center gap-2 rounded-2xl border border-border/60 bg-card/50 p-3 text-center">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-background/60">
                <f.icon className={`h-5 w-5 ${f.color}`} />
              </span>
              <span className="text-[10px] font-semibold leading-tight text-muted-foreground">{f.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer shield */}
      <section className="mt-8 flex flex-col items-center px-5 text-center">
        <img src={shieldHero} alt="EMEK+" width={1024} height={1024} loading="lazy" className="h-16 w-16 rounded-2xl object-cover shadow-glow-violet" />
        <p className="mt-3 text-sm font-semibold text-foreground">
          İster sahada ol, ister sınıfta; hakların bizimle güvende.
        </p>
        <p className="mt-1 text-xs text-muted-foreground">EMEK+ © 2026 · %100 KVKK Uyumlu</p>
      </section>

      <BottomNav active="Ana Sayfa" />
    </div>
  );
}

function SectorCard({
  grad,
  icon: Icon,
  title,
  subtitle,
}: {
  grad: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
}) {
  return (
    <button className={`flex items-center justify-between rounded-2xl ${grad} p-4 text-left shadow-card transition-transform active:scale-[0.99]`}>
      <span className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20">
          <Icon className="h-6 w-6 text-white" />
        </span>
        <span>
          <span className="block text-sm font-extrabold uppercase leading-tight text-white">{title}</span>
          <span className="block text-xs text-white/85">{subtitle}</span>
        </span>
      </span>
      <ChevronRight className="h-5 w-5 text-white/90" />
    </button>
  );
}

function FeatureCard({
  icon: Icon,
  accent,
  title,
  desc,
  cta,
  ctaGrad,
}: {
  icon: React.ElementType;
  accent: string;
  title: string;
  desc: string;
  cta: string;
  ctaGrad: string;
}) {
  return (
    <div className="flex flex-col rounded-2xl border border-border/60 bg-gradient-card p-4 shadow-card">
      <Icon className={`h-7 w-7 ${accent}`} />
      <h3 className="mt-3 text-sm font-bold text-foreground">{title}</h3>
      <p className="mt-1 flex-1 text-xs leading-relaxed text-muted-foreground">{desc}</p>
      <button className={`mt-3 rounded-xl ${ctaGrad} px-3 py-2 text-xs font-bold text-white`}>{cta}</button>
    </div>
  );
}

function NewCard({
  icon: Icon,
  accent,
  title,
  desc,
  cta,
}: {
  icon: React.ElementType;
  accent: string;
  title: string;
  desc: string;
  cta: string;
}) {
  return (
    <div className="relative flex flex-col rounded-2xl border border-border/60 bg-gradient-card p-4 shadow-card">
      <span className="absolute -left-1 top-3 rounded-r-md bg-gradient-orange px-2 py-0.5 text-[9px] font-extrabold uppercase text-orange-foreground">
        Yeni
      </span>
      <Icon className={`mt-4 h-7 w-7 ${accent}`} />
      <h3 className="mt-2 text-sm font-bold text-foreground">{title}</h3>
      <p className="mt-1 flex-1 text-xs leading-relaxed text-muted-foreground">{desc}</p>
      <button className="mt-3 rounded-xl border border-border bg-background/40 px-3 py-2 text-xs font-bold text-foreground">
        {cta}
      </button>
    </div>
  );
}

function PublicCard({
  icon: Icon,
  title,
  desc,
  cta,
  badge,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
  cta: string;
  badge?: string;
}) {
  return (
    <div className="relative flex flex-col rounded-2xl border border-border/60 bg-background/40 p-4">
      <Icon className="h-7 w-7 text-blue" />
      <h3 className="mt-2 text-sm font-bold text-foreground">{title}</h3>
      <p className="mt-1 flex-1 text-xs leading-relaxed text-muted-foreground">{desc}</p>
      {badge && (
        <span className="mt-2 inline-block w-fit rounded-full border border-orange/50 px-2 py-0.5 text-[10px] font-bold text-orange">
          {badge}
        </span>
      )}
      <button className="mt-3 rounded-xl border border-blue/40 bg-blue/10 px-3 py-2 text-xs font-bold text-blue">
        {cta}
      </button>
    </div>
  );
}
