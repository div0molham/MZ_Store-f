import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBanner} alt="MZ Store Gaming" width={1920} height={800} className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-float mb-6">
          <span className="text-6xl">🎮</span>
        </div>
        <h1 className="font-display text-5xl md:text-7xl font-black mb-4 tracking-tight">
          <span className="text-gradient-fire">MZ Store</span>
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 font-body mb-2">
          🔥 Best Top-Up Prices in Egypt 🔥
        </p>
        <p className="text-muted-foreground text-lg mb-8">
          ⚡ Fast & Trusted Delivery ⚡
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#products" className="bg-gradient-fire px-8 py-3 rounded-lg font-display text-sm font-bold text-primary-foreground glow-fire hover:scale-105 transition-transform">
            🛒 Shop Now
          </a>
          <a href="#contact" className="border border-primary/50 px-8 py-3 rounded-lg font-display text-sm font-bold text-primary hover:bg-primary/10 transition-colors">
            📞 Contact Us
          </a>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span>💳 Steam</span>
          <span>🎮 PlayStation</span>
          <span>➕ PS Plus</span>
          <span>💎 Valorant</span>
          <span>🪙 V-Bucks</span>
          <span>🚗 Rocket League</span>
          <span>🔫 PUBG UC</span>
          <span>💠 Free Fire</span>
          <span>🛒 & More</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
