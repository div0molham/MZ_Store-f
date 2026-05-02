import Navbar from "@/components/Navbar";
import PromoBanner from "@/components/PromoBanner";
import HeroSection from "@/components/HeroSection";
import SpecialOffers from "@/components/SpecialOffers";
import ProductsSection from "@/components/ProductsSection";
import OtherProducts from "@/components/OtherProducts";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Navbar />
      <PromoBanner />
      <HeroSection />
      <SpecialOffers />
      <ProductsSection />
      <OtherProducts />
      <ContactSection />
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        <p className="font-display text-gradient-fire mb-1">MZ Store</p>
        <p>© 2026 جميع الحقوق محفوظة — أفضل أسعار الشحن في مصر</p>
      </footer>
    </div>
  );
};

export default Index;
