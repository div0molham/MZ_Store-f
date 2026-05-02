import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SPREADSHEET_ID = "1MbF37BFKXNfFNlt5-OKGh1cKcnYQ3Z8obJ-l3KLjG2c";
const SHEET_NAME = "Orders";
const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_sheets/v4";

interface OrderItem {
  value: string;
  store: string;
  quantity: number;
  price: number;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const GOOGLE_SHEETS_API_KEY = Deno.env.get("GOOGLE_SHEETS_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY not configured");
    if (!GOOGLE_SHEETS_API_KEY) throw new Error("GOOGLE_SHEETS_API_KEY not configured");

    const body = await req.json();
    const { name, email, phone, items, total } = body as {
      name: string;
      email: string;
      phone: string;
      items: OrderItem[];
      total: number;
    };

    if (!name || !email || !phone || !Array.isArray(items) || items.length === 0) {
      return new Response(JSON.stringify({ error: "Invalid payload" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const itemsText = items
      .map((i) => `${i.value} (${i.store}) x${i.quantity} = ${i.price * i.quantity} EGP`)
      .join(" | ");

    const date = new Date().toLocaleString("en-GB", { timeZone: "Africa/Cairo" });
    const row = [date, name, email, phone, itemsText, total];

    const url = `${GATEWAY_URL}/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_NAME}!A1:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "X-Connection-Api-Key": GOOGLE_SHEETS_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ values: [row] }),
    });

    const data = await res.json();
    if (!res.ok) {
      console.error("Sheets API error:", res.status, data);
      throw new Error(`Sheets append failed [${res.status}]: ${JSON.stringify(data)}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Unknown error";
    console.error("save-order-sheet error:", msg);
    return new Response(JSON.stringify({ success: false, error: msg }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});