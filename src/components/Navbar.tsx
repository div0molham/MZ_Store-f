import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { itemCount } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="font-display text-xl font-bold text-gradient-fire">
          🎮 MZ Store
        </Link>
        
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#products" className="text-muted-foreground hover:text-foreground transition-colors">المنتجات</a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">تواصل معنا</a>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/checkout"
            className="relative bg-gradient-fire text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            🛒 السلة
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {itemCount}
              </span>
            )}
          </Link>
          <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 py-3 space-y-2">
          <a href="#products" className="block text-muted-foreground hover:text-foreground py-1" onClick={() => setMobileOpen(false)}>المنتجات</a>
          <a href="#contact" className="block text-muted-foreground hover:text-foreground py-1" onClick={() => setMobileOpen(false)}>تواصل معنا</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
