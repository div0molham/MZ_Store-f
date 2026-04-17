const ContactSection = () => {
  return (
    <section id="contact" className="py-16 px-4 max-w-4xl mx-auto text-center">
      <h2 className="font-display text-3xl font-bold mb-6">
        📞 <span className="text-gradient-fire">Contact Us</span>
      </h2>
      <div className="bg-card border border-border rounded-xl p-8 space-y-6">
        <a
          href="https://wa.me/201229588602"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-success/20 border border-success/30 rounded-xl px-8 py-4 text-success hover:bg-success/30 transition-colors text-lg font-semibold"
        >
          <span className="text-2xl">📱</span>
          WhatsApp: +201229588602
        </a>

        <div className="space-y-4 text-muted-foreground text-sm max-w-lg mx-auto">
          <div className="bg-secondary/50 rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">🤝 Your Rights Guaranteed</p>
            <p>Any difference caused by automatic fees is refunded instantly</p>
          </div>
          <div className="bg-secondary/50 rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">📌 Important Notice</p>
            <p>Prices may change based on USD rate and platform updates</p>
          </div>
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
            <p className="font-semibold text-primary">💎 Transparent dealing — no hidden fees — no surprises</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
