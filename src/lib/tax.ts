// Tax calculation per store
// All orders pass through InstaPay (دمغة): (2% min 5) + (3% min 20), each rounded up to nearest 5
// Some stores have an EXTRA per-store fee added BEFORE the InstaPay tax:
//   - NPC: 5% of subtotal. Decimal ≤ .50 → floor, > .50 → ceil
//   - LikeCard: subtotal / 11.7577895355673, rounded to nearest EGP
//   - Coda Shop: subtotal / 16, rounded to nearest EGP

const NPC_KEYWORDS = ["npc"];
const LIKECARD_KEYWORDS = ["likecard", "like card"];
const CODA_KEYWORDS = ["coda"];

const roundUpTo = (n: number, step: number) => Math.ceil(n / step) * step;

export type StoreFeeType = "npc" | "likecard" | "coda" | "none";

export const getStoreFeeType = (storeName: string): StoreFeeType => {
  const s = storeName.toLowerCase();
  if (NPC_KEYWORDS.some((k) => s.includes(k))) return "npc";
  if (LIKECARD_KEYWORDS.some((k) => s.includes(k))) return "likecard";
  if (CODA_KEYWORDS.some((k) => s.includes(k))) return "coda";
  return "none";
};

// Per-store extra fee (before InstaPay)
export const calcStoreFee = (storeName: string, subtotal: number): number => {
  if (subtotal <= 0) return 0;
  const type = getStoreFeeType(storeName);
  if (type === "npc") {
    const raw = subtotal * 0.05;
    const decimal = raw - Math.floor(raw);
    return decimal > 0.5 ? Math.ceil(raw) : Math.floor(raw);
  }
  if (type === "likecard") {
    return Math.round(subtotal / 11.7577895355673);
  }
  if (type === "coda") {
    return Math.round(subtotal / 16);
  }
  return 0;
};

// InstaPay (دمغة) applied on the grand subtotal (incl. store fees)
export const calcInstapayTax = (amount: number): number => {
  if (amount <= 0) return 0;
  const part2 = roundUpTo(Math.max(amount * 0.02, 5), 5);
  const part3 = roundUpTo(Math.max(amount * 0.03, 20), 5);
  return part2 + part3;
};

export interface CartItemLike {
  store: string;
  price: number;
  quantity: number;
}

export interface StoreFeeEntry {
  store: string;
  subtotal: number;
  fee: number;
  type: StoreFeeType;
}

export interface CartTaxResult {
  subtotal: number;          // sum of items
  storeFees: StoreFeeEntry[]; // per-store extra fees
  totalStoreFees: number;
  instapayTax: number;       // applied on (subtotal + totalStoreFees)
  totalTax: number;          // totalStoreFees + instapayTax
  grandTotal: number;        // subtotal + totalTax
}

export const calcCartTax = (items: CartItemLike[]): CartTaxResult => {
  const byStore = new Map<string, number>();
  let subtotal = 0;
  for (const it of items) {
    const line = it.price * it.quantity;
    subtotal += line;
    byStore.set(it.store, (byStore.get(it.store) ?? 0) + line);
  }
  const storeFees: StoreFeeEntry[] = [];
  let totalStoreFees = 0;
  for (const [store, sub] of byStore) {
    const fee = calcStoreFee(store, sub);
    if (fee > 0) {
      storeFees.push({ store, subtotal: sub, fee, type: getStoreFeeType(store) });
      totalStoreFees += fee;
    }
  }
  const instapayTax = calcInstapayTax(subtotal + totalStoreFees);
  const totalTax = totalStoreFees + instapayTax;
  return {
    subtotal,
    storeFees,
    totalStoreFees,
    instapayTax,
    totalTax,
    grandTotal: subtotal + totalTax,
  };
};