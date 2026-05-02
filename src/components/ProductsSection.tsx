import { categories, type Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const ProductCard = ({ product, category, store }: { product: Product; category: string; store: string }) => {
  const { addItem } = useCart();
  const discount = Math.round(((product.beforePrice - product.afterPrice) / product.beforePrice) * 100);

  const handleAdd = () => {
    addItem({ category, store, value: product.value, price: product.afterPrice });
    toast({ title: "✅ Added to cart", description: `${product.value} from ${store}` });
  };

  return (
    <div className="bg-card border border-border rounded-lg p-4 card-hover relative group">
      {discount > 0 && (
        <span className="absolute -top-2 -right-2 bg-gradient-fire text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">
          -{discount}%
        </span>
      )}
      <div className="text-center mb-3">
        <span className="font-display text-lg font-bold text-gold">{product.value}</span>
      </div>
      <div className="space-y-1 text-sm mb-3">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Before:</span>
          <span className="line-through text-muted-foreground">{product.beforePrice} EGP</span>
        </div>
        <div className="flex justify-between">
          <span className="text-success font-semibold">After:</span>
          <span className="text-success font-bold">{product.afterPrice} EGP</span>
        </div>
      </div>
      <button
        onClick={handleAdd}
        className="w-full bg-gradient-fire text-primary-foreground py-2 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
      >
        Add to Cart
      </button>
    </div>
  );
};

const CategorySection = ({ category }: { category: typeof categories[0] }) => {
  const [activeStore, setActiveStore] = useState(0);
  const store = category.stores[activeStore];

  return (
    <div className="mb-12">
      <div className="text-center mb-6">
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-1">
          {category.icon} <span className="text-gradient-fire">{category.title}</span>
        </h2>
        <p className="text-muted-foreground text-sm">{category.subtitle}</p>
      </div>

      {/* Store Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {category.stores.map((s, i) => (
          <button
            key={s.name}
            onClick={() => setActiveStore(i)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              i === activeStore
                ? "bg-gradient-fire text-primary-foreground glow-fire-sm"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {s.name}
          </button>
        ))}
      </div>

      {/* Products */}
      {store.outOfStock ? (
        <div className="text-center py-10 text-muted-foreground">
          <span className="text-4xl mb-2 block">📦</span>
          <p className="font-display text-lg">Out of stock</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {store.products.map((p) => (
            <ProductCard key={p.value} product={p} category={category.title} store={store.name} />
          ))}
        </div>
      )}
    </div>
  );
};

const ProductsSection = () => {
  return (
    <section id="products" className="py-16 px-4 max-w-7xl mx-auto">
      {categories.map((cat) => (
        <CategorySection key={cat.id} category={cat} />
      ))}
    </section>
  );
};

export default ProductsSection;
