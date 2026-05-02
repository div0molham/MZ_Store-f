import { categories } from "@/data/products";

const SpecialOffers = () => {
  // Find best deals across all categories
  const deals = categories.flatMap((cat) =>
    cat.stores.flatMap((store) =>
      store.products
        .filter((p) => p.beforePrice > 0)
        .map((p) => ({
          ...p,
          discount: Math.round(((p.beforePrice - p.afterPrice) / p.beforePrice) * 100),
          category: cat.title,
          categoryIcon: cat.icon,
          store: store.name,
        }))
    )
  )
    .sort((a, b) => b.discount - a.discount)
    .slice(0, 6);

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
          🔥 <span className="text-gradient-fire">Special Offers</span> 🔥
        </h2>
        <p className="text-muted-foreground">Top discounts available right now</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {deals.map((deal, i) => (
          <div key={i} className="bg-card border border-primary/30 rounded-xl p-6 card-hover glow-fire-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 bg-gradient-fire text-primary-foreground text-xs font-bold px-3 py-1 rounded-br-lg">
              {deal.discount}% OFF
            </div>
            <div className="pt-4">
              <div className="flex items-center gap-2 mb-2">
                <span>{deal.categoryIcon}</span>
                <span className="text-sm text-muted-foreground">{deal.category}</span>
                <span className="text-xs bg-secondary px-2 py-0.5 rounded">{deal.store}</span>
              </div>
              <div className="font-display text-2xl font-bold text-gold mb-3">{deal.value}</div>
              <div className="flex items-center gap-4">
                <span className="line-through text-muted-foreground">{deal.beforePrice} EGP</span>
                <span className="text-success text-xl font-bold">{deal.afterPrice} EGP</span>
              </div>
              <div className="text-xs text-primary mt-2">Save {deal.beforePrice - deal.afterPrice} EGP!</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialOffers;
