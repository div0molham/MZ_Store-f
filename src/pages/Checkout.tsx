import { useCart } from "@/context/CartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { calcCartTax } from "@/lib/tax";

const Checkout = () => {
  const { items, removeItem, updateQuantity, clearCart, total } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const { totalTax, storeFees, instapayTax, grandTotal } = calcCartTax(items);

  const isValidEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
  const isValidPhone = (p: string) => /^[0-9+\-\s]{8,20}$/.test(p.trim());

  const handleOrder = async () => {
    if (!name.trim() || !email.trim() || !phone.trim()) {
      toast({ title: "⚠️ بيانات ناقصة", description: "من فضلك اكتب اسمك والإيميل", variant: "destructive" });
      return;
    }
    if (!isValidEmail(email)) {
      toast({ title: "⚠️ إيميل غير صحيح", description: "من فضلك اكتب إيميل صحيح", variant: "destructive" });
      return;
    }
    if (!isValidPhone(phone)) {
      toast({ title: "⚠️ رقم غير صحيح", description: "من فضلك اكتب رقم موبايل صحيح", variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      // Save order to Google Sheets
      const { error: sheetError } = await supabase.functions.invoke("save-order-sheet", {
        body: {
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          items,
            total: grandTotal,
        },
      });
      if (sheetError) {
        console.error("Sheet save failed:", sheetError);
        toast({ title: "⚠️ تنبيه", description: "لم يتم حفظ الطلب في السجل، لكن سيتم إرساله على واتساب" });
      }

      const orderText = items
        .map((i) => `${i.value} (${i.store}) x${i.quantity} = ${i.price * i.quantity} EGP`)
        .join("\n");
      const msg = encodeURIComponent(
        `🎮 طلب جديد من MZ Store\n\n👤 الاسم: ${name.trim()}\n📧 الإيميل: ${email.trim()}\n📱 الموبايل: ${phone.trim()}\n\n${orderText}\n\n💵 المجموع: ${total} EGP${totalTax > 0 ? `\n🧾 الضريبة: +${totalTax} EGP` : ""}\n💰 الإجمالي النهائي: ${grandTotal} EGP\n\n💵 الدفع: كاش`
      );
      window.open(`https://wa.me/201229588602?text=${msg}`, "_blank");

      setSubmitted(true);
      clearCart();
    } catch (err) {
      console.error(err);
      toast({ title: "❌ حصل خطأ", description: "حاول تاني", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <>
        <Navbar />
        <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
          <span className="text-6xl mb-4">✅</span>
          <h2 className="font-display text-2xl font-bold text-gradient-fire mb-2">تم إرسال الطلب!</h2>
          <p className="text-muted-foreground mb-6">سيتم التواصل معك عبر واتساب لتأكيد الطلب</p>
          <button onClick={() => { setSubmitted(false); navigate("/"); }} className="bg-gradient-fire text-primary-foreground px-6 py-3 rounded-lg font-semibold">
            العودة للمتجر
          </button>
        </div>
      </>
    );
  }

  if (items.length === 0) {
    return (
      <>
        <Navbar />
        <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
          <span className="text-6xl mb-4">🛒</span>
          <h2 className="font-display text-2xl font-bold text-foreground mb-2">السلة فارغة</h2>
          <p className="text-muted-foreground mb-6">أضف منتجات من المتجر لتبدأ</p>
          <button onClick={() => navigate("/")} className="bg-gradient-fire text-primary-foreground px-6 py-3 rounded-lg font-semibold">
            تسوق الآن
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-12" dir="rtl">
        <h2 className="font-display text-3xl font-bold mb-8 text-center">
          🛒 <span className="text-gradient-fire">سلة المشتريات</span>
        </h2>

        <div className="space-y-4 mb-8">
          {items.map((item) => (
            <div key={item.id} className="bg-card border border-border rounded-lg p-4 flex items-center justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-gold">{item.value}</div>
                <div className="text-sm text-muted-foreground">{item.category} — {item.store}</div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 rounded bg-secondary text-secondary-foreground flex items-center justify-center">-</button>
                <span className="w-8 text-center font-semibold">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 rounded bg-secondary text-secondary-foreground flex items-center justify-center">+</button>
              </div>
              <div className="text-right min-w-[80px]">
                <div className="font-bold text-success">{item.price * item.quantity} EGP</div>
              </div>
              <button onClick={() => removeItem(item.id)} className="text-accent hover:text-accent/80 text-lg">✕</button>
            </div>
          ))}
        </div>

        <div className="bg-card border border-primary/30 rounded-xl p-6 glow-fire-sm mb-6">
          <h3 className="font-display text-lg mb-4 text-gradient-fire">📋 بياناتك</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-muted-foreground mb-1">الاسم</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="اكتب اسمك"
                maxLength={100}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-1">الإيميل</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
                maxLength={255}
                dir="ltr"
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-1">رقم الموبايل</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="01XXXXXXXXX"
                maxLength={20}
                dir="ltr"
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>

        <div className="bg-card border border-primary/30 rounded-xl p-6 glow-fire-sm">
          <div className="space-y-2 mb-4">
            <div className="flex justify-between items-center text-muted-foreground">
              <span>المجموع</span>
              <span>{total} EGP</span>
            </div>
            {totalTax > 0 && (
              <div className="flex justify-between items-center text-sm text-accent">
                <span>🧾 الضريبة</span>
                <span>+{totalTax} EGP</span>
              </div>
            )}
            <div className="border-t border-border pt-3 flex justify-between items-center">
              <span className="font-display text-lg">الإجمالي النهائي</span>
              <span className="font-display text-2xl font-bold text-gold">{grandTotal} EGP</span>
            </div>
          </div>
          <div className="text-sm text-muted-foreground mb-4 text-center">💵 الدفع كاش عند التسليم</div>
          <button
            onClick={handleOrder}
            disabled={loading}
            className="w-full bg-gradient-fire text-primary-foreground py-4 rounded-lg font-display font-bold text-lg hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? "⏳ جاري الإرسال..." : "📱 تأكيد الطلب"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Checkout;
