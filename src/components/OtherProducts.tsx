import { otherProducts, taxInfo } from "@/data/products";

const OtherProducts = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="font-display text-3xl font-bold mb-2">
          🎮 <span className="text-gradient-fire">Other Products</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
        {otherProducts.map((p) => (
          <div key={p.name} className="bg-card border border-border rounded-lg p-5 card-hover flex items-start gap-4">
            <span className="text-3xl">{p.icon}</span>
            <div>
              <h3 className="font-semibold text-foreground">{p.name}</h3>
              <p className="text-sm text-muted-foreground">{p.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tax Info */}
      <div className="bg-card border border-border rounded-xl p-6">
        <h3 className="font-display text-xl font-bold text-center mb-6 text-gradient-fire">💼 Taxes & Fees Info</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {taxInfo.map((t) => (
            <div key={t.store} className="flex items-center justify-between bg-secondary/50 rounded-lg px-4 py-3">
              <span className="font-medium text-foreground">{t.store}</span>
              <span className="text-sm text-muted-foreground">{t.info}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherProducts;
