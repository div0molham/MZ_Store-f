const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const OWNER_EMAIL = "molhamyoyo@gmail.com";
const GATEWAY_URL = "https://connector-gateway.lovable.dev/resend";

const OrderSchema = z.object({
  customerName: z.string().min(1).max(100),
  customerEmail: z.string().email().max(255),
  items: z.array(z.object({
    value: z.string(),
    store: z.string(),
    category: z.string(),
    price: z.number(),
    quantity: z.number(),
  })),
  total: z.number(),
});

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY not configured");

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) throw new Error("RESEND_API_KEY not configured");

    const body = await req.json();
    const parsed = OrderSchema.safeParse(body);
    if (!parsed.success) {
      return new Response(JSON.stringify({ error: "Invalid data" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { customerName, customerEmail, items, total } = parsed.data;

    const itemsHtml = items
      .map((i) => `
        <tr>
          <td style="padding:8px 12px;border-bottom:1px solid #333;">${escapeHtml(i.value)}</td>
          <td style="padding:8px 12px;border-bottom:1px solid #333;">${escapeHtml(i.store)}</td>
          <td style="padding:8px 12px;border-bottom:1px solid #333;">${escapeHtml(i.category)}</td>
          <td style="padding:8px 12px;border-bottom:1px solid #333;">${i.quantity}</td>
          <td style="padding:8px 12px;border-bottom:1px solid #333;">${i.price * i.quantity} EGP</td>
        </tr>
      `)
      .join("");

    const emailHtml = `
      <div dir="rtl" style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#1a1a2e;color:#f0f0f0;border-radius:12px;">
        <h1 style="color:#ff6b35;text-align:center;margin-bottom:4px;">🎮 طلب جديد - MZ Store</h1>
        <hr style="border-color:#333;margin:16px 0;" />
        <h3 style="color:#ffd700;">👤 بيانات العميل</h3>
        <p style="margin:4px 0;"><strong>الاسم:</strong> ${escapeHtml(customerName)}</p>
        <p style="margin:4px 0;"><strong>الإيميل:</strong> ${escapeHtml(customerEmail)}</p>
        <hr style="border-color:#333;margin:16px 0;" />
        <h3 style="color:#ffd700;">📦 تفاصيل الطلب</h3>
        <table style="width:100%;border-collapse:collapse;color:#ddd;font-size:14px;">
          <thead>
            <tr style="background:#111;">
              <th style="padding:8px 12px;text-align:right;">المنتج</th>
              <th style="padding:8px 12px;text-align:right;">المتجر</th>
              <th style="padding:8px 12px;text-align:right;">الفئة</th>
              <th style="padding:8px 12px;text-align:right;">الكمية</th>
              <th style="padding:8px 12px;text-align:right;">السعر</th>
            </tr>
          </thead>
          <tbody>${itemsHtml}</tbody>
        </table>
        <hr style="border-color:#333;margin:16px 0;" />
        <h2 style="color:#4ade80;text-align:center;">💰 الإجمالي: ${total} EGP</h2>
        <p style="text-align:center;color:#999;font-size:12px;margin-top:16px;">💵 الدفع كاش عند التسليم</p>
      </div>
    `;

    const response = await fetch(`${GATEWAY_URL}/emails`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${LOVABLE_API_KEY}`,
        "X-Connection-Api-Key": RESEND_API_KEY,
      },
      body: JSON.stringify({
        from: "MZ Store <onboarding@resend.dev>",
        to: [OWNER_EMAIL],
        subject: `🎮 طلب جديد من ${escapeHtml(customerName)} - ${total} EGP`,
        html: emailHtml,
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      console.error("Resend error:", JSON.stringify(data));
      throw new Error(`Resend API failed [${response.status}]: ${JSON.stringify(data)}`);
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("notify-order error:", err);
    return new Response(
      JSON.stringify({ error: "Failed to send notification" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
