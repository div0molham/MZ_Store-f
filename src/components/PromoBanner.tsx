import { Gift, Sparkles, Gamepad2, Monitor, Trophy, Clock, ArrowLeft } from "lucide-react";

const PromoBanner = () => {
  return (
    <section className="relative px-4 pt-8 pb-4">
      <div className="max-w-5xl mx-auto">
        {/* Header card */}
        <div className="relative bg-card/80 backdrop-blur border border-primary/30 rounded-3xl p-6 md:p-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-gold/10 pointer-events-none" />
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 text-center space-y-3" dir="rtl">
            <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 rounded-full px-4 py-1.5 text-xs font-medium text-primary">
              <Sparkles className="w-3.5 h-3.5" />
              عروض حصرية محدودة
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-black">
              رجعنا <span className="text-gradient-fire">نار السوق</span> 🔥
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              مش بس بنبيع شحن… بنرجّعلك فلوسك هدايا 🎁
            </p>
          </div>
        </div>

        {/* Offers grid */}
        <div className="grid md:grid-cols-2 gap-4 mt-4" dir="rtl">
          {/* Rocket League */}
          <div className="group bg-card border border-border hover:border-primary/50 rounded-2xl p-6 transition-all hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/15 flex items-center justify-center text-xl">🚗</div>
              <h3 className="font-display font-bold text-lg">Rocket League</h3>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">2500 كريدت</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-success">650</span>
                <span className="text-sm text-muted-foreground">EGP</span>
                <span className="line-through text-muted-foreground text-sm mr-2">1100</span>
              </div>
              <p className="text-xs text-success font-medium">وفّر تقريبًا نص المبلغ!</p>
            </div>
          </div>

          {/* Fortnite */}
          <div className="group bg-card border border-border hover:border-primary/50 rounded-2xl p-6 transition-all hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center text-xl">🎯</div>
              <h3 className="font-display font-bold text-lg">Fortnite Crew Pack</h3>
            </div>
            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-success">300</span>
                <span className="text-sm text-muted-foreground">EGP</span>
                <span className="line-through text-muted-foreground text-sm mr-2">800 V-Bucks بـ 340</span>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {["Battle Pass", "1000 V-Bucks", "OG Pass", "Music Pass", "Lego Pass", "RL Pass", "2 Skins"].map((p) => (
                  <span key={p} className="text-[11px] bg-secondary px-2 py-0.5 rounded-full">{p}</span>
                ))}
              </div>
            </div>
          </div>

          {/* PlayStation gifts */}
          <div className="bg-card border border-border hover:border-primary/50 rounded-2xl p-6 transition-all hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
                <Gamepad2 className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg">هدايا PlayStation</h3>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Gift className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <p><span className="font-bold text-gold">3 أوردرات</span> = PS Plus Extra لمدة 3 شهور</p>
              </div>
              <div className="flex items-start gap-2">
                <Trophy className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <div>
                  <p><span className="font-bold text-gold">5 أوردرات</span> = اختار لعبة هدية:</p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    <span className="text-[11px] bg-secondary px-2 py-0.5 rounded-full">⚽ FC 26</span>
                    <span className="text-[11px] bg-secondary px-2 py-0.5 rounded-full">🚗 GTA</span>
                    <span className="text-[11px] bg-secondary px-2 py-0.5 rounded-full">🐎 RDR 2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PC gifts */}
          <div className="bg-card border border-border hover:border-primary/50 rounded-2xl p-6 transition-all hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
                <Monitor className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg">هدايا PC</h3>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Gift className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <p>مع كل أوردر: لعبة <span className="font-bold text-gold">Steam Offline</span></p>
              </div>
              <div className="flex items-start gap-2">
                <Trophy className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <p><span className="font-bold text-gold">3 أوردرات</span> = Xbox Game Pass Ultimate شهرين</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-4 bg-card border border-border rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4" dir="rtl">
          <div className="flex items-center gap-3 text-center md:text-right">
            <Clock className="w-5 h-5 text-destructive shrink-0" />
            <div>
              <p className="font-bold text-sm">الكمية محدودة وجزء كبير منها اتباع</p>
              <p className="text-xs text-muted-foreground">العروض خاصة بـ Gamer's Galaxy Store فقط</p>
            </div>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-gradient-fire px-6 py-3 rounded-xl font-display font-bold text-primary-foreground glow-fire hover:scale-105 transition-transform whitespace-nowrap"
          >
            احجز مكانك دلوقتي
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
