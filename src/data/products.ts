export interface Product {
  value: string;
  beforePrice: number;
  afterPrice: number;
  unit?: string;
}

export interface Store {
  name: string;
  products: Product[];
  outOfStock?: boolean;
}

export interface Category {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  stores: Store[];
}

export interface TaxInfo {
  store: string;
  info: string;
}

export const taxInfo: TaxInfo[] = [
  { store: "InstaPay", info: "Transfer fee: 5 per mille (5‰)" },
  { store: "NPC", info: "1000 EGP = 20 EGP fixed tax" },
  { store: "C4", info: "No taxes" },
  { store: "LikeCard", info: "1000 EGP = 85.08 EGP fixed tax" },
  { store: "Coda Shop", info: "1000 EGP = 40 EGP fixed tax" },
  { store: "Cyber Store", info: "No taxes" },
  { store: "Game World Egypt", info: "No taxes" },
  { store: "Voltamito Store", info: "No taxes" },
  { store: "Gamer's Galaxy Store", info: "No taxes" },
];

export const categories: Category[] = [
  {
    id: "steam",
    title: "Steam Cards",
    subtitle: "Best Steam Top-Up Prices in Egypt",
    icon: "💳",
    stores: [
      {
        name: "NPC Store",
        products: [
          { value: "$1.10", beforePrice: 100, afterPrice: 73 },
          { value: "$5", beforePrice: 350, afterPrice: 297 },
          { value: "$10", beforePrice: 700, afterPrice: 595 },
          { value: "$20", beforePrice: 1300, afterPrice: 1190 },
          { value: "$50", beforePrice: 3100, afterPrice: 2916 },
          { value: "$100", beforePrice: 6500, afterPrice: 5774 },
        ],
      },
      {
        name: "C4 Store",
        products: [
          { value: "$5", beforePrice: 350, afterPrice: 300 },
          { value: "$10", beforePrice: 650, afterPrice: 590 },
          { value: "$15", beforePrice: 900, afterPrice: 860 },
          { value: "$20", beforePrice: 1200, afterPrice: 1170 },
          { value: "$50", beforePrice: 2800, afterPrice: 2750 },
          { value: "$100", beforePrice: 5700, afterPrice: 5400 },
        ],
      },
      {
        name: "Likecard",
        products: [
          { value: "$5", beforePrice: 400, afterPrice: 269 },
          { value: "$20", beforePrice: 1200, afterPrice: 1071 },
          { value: "$50", beforePrice: 2900, afterPrice: 2674 },
          { value: "$100", beforePrice: 5500, afterPrice: 5346 },
        ],
      },
    ],
  },
  {
    id: "playstation",
    title: "PlayStation Cards",
    subtitle: "Best PlayStation Top-Up Prices in Egypt",
    icon: "🎮",
    stores: [
      {
        name: "NPC Store (US)",
        products: [
          { value: "$10", beforePrice: 600, afterPrice: 554 },
          { value: "$25", beforePrice: 1500, afterPrice: 1365 },
          { value: "$50", beforePrice: 2800, afterPrice: 2712 },
          { value: "$100", beforePrice: 5500, afterPrice: 5438 },
        ],
      },
      {
        name: "NPC Store (UAE)",
        products: [
          { value: "$10", beforePrice: 600, afterPrice: 551 },
          { value: "$20", beforePrice: 1200, afterPrice: 1108 },
          { value: "$50", beforePrice: 2800, afterPrice: 2755 },
          { value: "$100", beforePrice: 5700, afterPrice: 5508 },
        ],
      },
      {
        name: "Likecard (US)",
        products: [
          { value: "$25", beforePrice: 1400, afterPrice: 1338 },
          { value: "$50", beforePrice: 2750, afterPrice: 2461.42 },
          { value: "$100", beforePrice: 5700, afterPrice: 5346 },
          { value: "$150", beforePrice: 8500, afterPrice: 7540.93 },
          { value: "$200", beforePrice: 11000, afterPrice: 10689 },
          { value: "$250", beforePrice: 14000, afterPrice: 12661.83 },
        ],
      },
      {
        name: "Likecard (UAE)",
        products: [
          { value: "$10", beforePrice: 650, afterPrice: 541 },
          { value: "$20", beforePrice: 1100, afterPrice: 1078 },
          { value: "$40", beforePrice: 2200, afterPrice: 2154 },
          { value: "$50", beforePrice: 2700, afterPrice: 2664 },
          { value: "$60", beforePrice: 3300, afterPrice: 3200 },
          { value: "$70", beforePrice: 3800, afterPrice: 3752 },
          { value: "$100", beforePrice: 5500, afterPrice: 5366 },
        ],
      },
      {
        name: "Likecard (Kuwait)",
        products: [
          { value: "$10", beforePrice: 600, afterPrice: 537 },
          { value: "$20", beforePrice: 1100, afterPrice: 1071 },
          { value: "$40", beforePrice: 2200, afterPrice: 2139 },
          { value: "$50", beforePrice: 2800, afterPrice: 2674 },
          { value: "$60", beforePrice: 3300, afterPrice: 3208 },
          { value: "$70", beforePrice: 3800, afterPrice: 3743 },
          { value: "$100", beforePrice: 5500, afterPrice: 5103.83 },
        ],
      },
      {
        name: "Game World Egypt (US)",
        products: [
          { value: "$25", beforePrice: 1500, afterPrice: 1425 },
          { value: "$50", beforePrice: 3000, afterPrice: 2850 },
          { value: "$100", beforePrice: 6000, afterPrice: 5700 },
        ],
      },
      {
        name: "Game World Egypt (UAE)",
        products: [
          { value: "$10", beforePrice: 650, afterPrice: 599 },
          { value: "$20", beforePrice: 1250, afterPrice: 1169 },
          { value: "$40", beforePrice: 2500, afterPrice: 2309 },
          { value: "$50", beforePrice: 3000, afterPrice: 2850 },
          { value: "$60", beforePrice: 3500, afterPrice: 3420 },
          { value: "$70", beforePrice: 4050, afterPrice: 3990 },
          { value: "$100", beforePrice: 5900, afterPrice: 5700 },
          { value: "$120", beforePrice: 7000, afterPrice: 6850 },
          { value: "$160", beforePrice: 9600, afterPrice: 9133 },
          { value: "$200", beforePrice: 12000, afterPrice: 11416 },
        ],
      },
      {
        name: "Game World Egypt (Kuwait)",
        products: [
          { value: "$10", beforePrice: 650, afterPrice: 599 },
          { value: "$20", beforePrice: 1250, afterPrice: 1169 },
          { value: "$40", beforePrice: 2400, afterPrice: 2309 },
          { value: "$50", beforePrice: 3000, afterPrice: 2850 },
          { value: "$60", beforePrice: 3600, afterPrice: 3420 },
          { value: "$70", beforePrice: 4200, afterPrice: 3990 },
          { value: "$100", beforePrice: 6000, afterPrice: 5700 },
        ],
      },
    ],
  },
  {
    id: "psplus",
    title: "PlayStation Plus",
    subtitle: "Best PlayStation Plus Prices in Egypt",
    icon: "➕",
    stores: [
      {
        name: "Gamer's Galaxy Store — Essential (PS5)",
        products: [
          { value: "1 Month", beforePrice: 650, afterPrice: 550 },
          { value: "3 Months", beforePrice: 1300, afterPrice: 1100 },
          { value: "12 Months", beforePrice: 2600, afterPrice: 2300 },
        ],
      },
      {
        name: "Gamer's Galaxy Store — Essential (PS4)",
        products: [
          { value: "1 Month", beforePrice: 450, afterPrice: 350 },
          { value: "3 Months", beforePrice: 650, afterPrice: 550 },
          { value: "12 Months", beforePrice: 1100, afterPrice: 900 },
        ],
      },
      {
        name: "Gamer's Galaxy Store — Extra (PS5)",
        products: [
          { value: "1 Month", beforePrice: 850, afterPrice: 700 },
          { value: "3 Months", beforePrice: 1500, afterPrice: 1300 },
          { value: "12 Months", beforePrice: 3900, afterPrice: 3500 },
        ],
      },
      {
        name: "Gamer's Galaxy Store — Extra (PS4)",
        products: [
          { value: "1 Month", beforePrice: 600, afterPrice: 450 },
          { value: "3 Months", beforePrice: 950, afterPrice: 800 },
          { value: "12 Months", beforePrice: 1500, afterPrice: 1200 },
        ],
      },
    ],
  },
  {
    id: "valorant",
    title: "Valorant Points",
    subtitle: "Best Valo Points Top-Up Prices in Egypt",
    icon: "💎",
    stores: [
      {
        name: "NPC Store",
        products: [
          { value: "475 VP", beforePrice: 300, afterPrice: 262, unit: "VP" },
          { value: "1000 VP", beforePrice: 550, afterPrice: 525, unit: "VP" },
          { value: "2050 VP", beforePrice: 1200, afterPrice: 1050, unit: "VP" },
          { value: "3650 VP", beforePrice: 1950, afterPrice: 1837, unit: "VP" },
          { value: "5350 VP", beforePrice: 2700, afterPrice: 2630, unit: "VP" },
          { value: "11000 VP", beforePrice: 5500, afterPrice: 5260, unit: "VP" },
        ],
      },
      {
        name: "Coda Shop",
        products: [
          { value: "475 VP", beforePrice: 270, afterPrice: 240, unit: "VP" },
          { value: "1000 VP", beforePrice: 500, afterPrice: 480, unit: "VP" },
          { value: "2050 VP", beforePrice: 999, afterPrice: 960, unit: "VP" },
          { value: "3650 VP", beforePrice: 1800, afterPrice: 1700, unit: "VP" },
          { value: "5350 VP", beforePrice: 2500, afterPrice: 2400, unit: "VP" },
          { value: "11000 VP", beforePrice: 5000, afterPrice: 4850, unit: "VP" },
        ],
      },
      {
        name: "Cyber Store",
        products: [
          { value: "475 VP", beforePrice: 270, afterPrice: 255, unit: "VP" },
          { value: "1000 VP", beforePrice: 600, afterPrice: 510, unit: "VP" },
          { value: "1475 VP", beforePrice: 800, afterPrice: 770, unit: "VP" },
          { value: "2050 VP", beforePrice: 1200, afterPrice: 1030, unit: "VP" },
          { value: "3050 VP", beforePrice: 1600, afterPrice: 1540, unit: "VP" },
          { value: "3650 VP", beforePrice: 1900, afterPrice: 1800, unit: "VP" },
          { value: "5350 VP", beforePrice: 2600, afterPrice: 2495, unit: "VP" },
          { value: "5700 VP", beforePrice: 3000, afterPrice: 2830, unit: "VP" },
          { value: "9000 VP", beforePrice: 4500, afterPrice: 4295, unit: "VP" },
          { value: "11000 VP", beforePrice: 5300, afterPrice: 5125, unit: "VP" },
        ],
      },
      {
        name: "C4 Store",
        products: [
          { value: "475 VP", beforePrice: 280, afterPrice: 245, unit: "VP" },
          { value: "1000 VP", beforePrice: 550, afterPrice: 475, unit: "VP" },
          { value: "2050 VP", beforePrice: 1200, afterPrice: 990, unit: "VP" },
          { value: "3650 VP", beforePrice: 1800, afterPrice: 1710, unit: "VP" },
          { value: "11000 VP", beforePrice: 5500, afterPrice: 4900, unit: "VP" },
        ],
      },
      {
        name: "NT Store",
        products: [
          { value: "475 VP", beforePrice: 300, afterPrice: 280, unit: "VP" },
          { value: "1000 VP", beforePrice: 600, afterPrice: 550, unit: "VP" },
          { value: "2050 VP", beforePrice: 1100, afterPrice: 1060, unit: "VP" },
          { value: "3650 VP", beforePrice: 1890, afterPrice: 1825, unit: "VP" },
          { value: "5350 VP", beforePrice: 2600, afterPrice: 2535, unit: "VP" },
          { value: "11000 VP", beforePrice: 5200, afterPrice: 5000, unit: "VP" },
        ],
      },
      {
        name: "Voltamito Store",
        products: [
          { value: "475 VP", beforePrice: 300, afterPrice: 240, unit: "VP" },
          { value: "1000 VP", beforePrice: 550, afterPrice: 470, unit: "VP" },
          { value: "2565 VP", beforePrice: 1250, afterPrice: 1185, unit: "VP" },
          { value: "5350 VP", beforePrice: 2500, afterPrice: 2350, unit: "VP" },
          { value: "11000 VP", beforePrice: 5000, afterPrice: 4700, unit: "VP" },
        ],
      },
    ],
  },
  {
    id: "fortnite",
    title: "Fortnite V-Bucks",
    subtitle: "Best V-Bucks Top-Up Prices in Egypt",
    icon: "🪙",
    stores: [
      {
        name: "C4 Store",
        products: [
          { value: "800 V-Bucks", beforePrice: 470, afterPrice: 340 },
          { value: "2400 V-Bucks", beforePrice: 1000, afterPrice: 800 },
          { value: "4500 V-Bucks", beforePrice: 1400, afterPrice: 1250 },
          { value: "12500 V-Bucks", beforePrice: 3100, afterPrice: 2950 },
        ],
      },
      {
        name: "Voltamito Store",
        products: [
          { value: "800 V-Bucks", beforePrice: 450, afterPrice: 250 },
          { value: "2400 V-Bucks", beforePrice: 700, afterPrice: 550 },
          { value: "4500 V-Bucks", beforePrice: 1000, afterPrice: 850 },
          { value: "12500 V-Bucks", beforePrice: 2000, afterPrice: 1850 },
        ],
      },
    ],
  },
  {
    id: "rocketleague",
    title: "Rocket League Credits",
    subtitle: "Best Rocket League Credit Prices in Egypt",
    icon: "🚗",
    stores: [
      {
        name: "Gamer's Galaxy Store",
        products: [
          { value: "500 Credits", beforePrice: 450, afterPrice: 350 },
          { value: "1100 Credits", beforePrice: 700, afterPrice: 550 },
          { value: "3000 Credits", beforePrice: 1400, afterPrice: 1100 },
          { value: "6500 Credits", beforePrice: 2300, afterPrice: 1950 },
        ],
      },
      {
        name: "Voltamito Store",
        products: [
          { value: "500 Credits", beforePrice: 300, afterPrice: 220 },
          { value: "1100 Credits", beforePrice: 480, afterPrice: 370 },
          { value: "3000 Credits", beforePrice: 1000, afterPrice: 850 },
          { value: "6500 Credits", beforePrice: 1850, afterPrice: 1650 },
        ],
      },
    ],
  },
  {
    id: "pubg",
    title: "PUBG UC",
    subtitle: "Best PUBG UC Prices in Egypt",
    icon: "🔫",
    stores: [
      {
        name: "7lwany Store",
        products: [
          { value: "60 UC", beforePrice: 80, afterPrice: 60 },
          { value: "325 UC", beforePrice: 300, afterPrice: 260 },
          { value: "660 UC", beforePrice: 580, afterPrice: 500 },
          { value: "1800 UC", beforePrice: 1450, afterPrice: 1250 },
          { value: "3850 UC", beforePrice: 2700, afterPrice: 2450 },
          { value: "8100 UC", beforePrice: 5000, afterPrice: 4600 },
        ],
      },
      {
        name: "Coda Shop",
        products: [
          { value: "60 UC", beforePrice: 80, afterPrice: 57.99 },
          { value: "325 UC", beforePrice: 350, afterPrice: 293.99 },
          { value: "660 UC", beforePrice: 600, afterPrice: 587.99 },
          { value: "1800 UC", beforePrice: 1600, afterPrice: 1471.99 },
          { value: "3850 UC", beforePrice: 3100, afterPrice: 2943.99 },
          { value: "8100 UC", beforePrice: 6000, afterPrice: 5888.99 },
        ],
      },
      {
        name: "Carry1st Shop",
        products: [
          { value: "60 UC", beforePrice: 80, afterPrice: 49.72 },
          { value: "325 UC", beforePrice: 350, afterPrice: 250.60 },
          { value: "660 UC", beforePrice: 600, afterPrice: 501.70 },
          { value: "1800 UC", beforePrice: 1400, afterPrice: 1255 },
          { value: "3850 UC", beforePrice: 3100, afterPrice: 2510.50 },
          { value: "8100 UC", beforePrice: 5500, afterPrice: 5021.50 },
        ],
      },
      {
        name: "Likecard",
        products: [
          { value: "60 UC", beforePrice: 80, afterPrice: 56 },
          { value: "325 UC", beforePrice: 350, afterPrice: 269 },
          { value: "660 UC", beforePrice: 600, afterPrice: 485.82 },
          { value: "1800 UC", beforePrice: 1600, afterPrice: 1210.76 },
          { value: "3850 UC", beforePrice: 3100, afterPrice: 2419.70 },
          { value: "8100 UC", beforePrice: 6000, afterPrice: 4830.13 },
        ],
      },
    ],
  },
  {
    id: "freefire",
    title: "Free Fire Diamonds",
    subtitle: "Best Free Fire Diamond Prices in Egypt",
    icon: "💠",
    stores: [
      {
        name: "Carry1st Shop",
        products: [
          { value: "100 Diamonds", beforePrice: 70, afterPrice: 56.70 },
          { value: "210 Diamonds", beforePrice: 150, afterPrice: 113.40 },
          { value: "530 Diamonds", beforePrice: 330, afterPrice: 283.50 },
          { value: "1080 Diamonds", beforePrice: 650, afterPrice: 567 },
          { value: "2200 Diamonds", beforePrice: 1300, afterPrice: 1134 },
        ],
      },
      {
        name: "Likecard",
        products: [
          { value: "100 Diamonds", beforePrice: 70, afterPrice: 56 },
          { value: "210 Diamonds", beforePrice: 150, afterPrice: 109 },
          { value: "530 Diamonds", beforePrice: 330, afterPrice: 269 },
          { value: "1080 Diamonds", beforePrice: 800, afterPrice: 725 },
          { value: "2200 Diamonds", beforePrice: 1300, afterPrice: 1071 },
        ],
      },
    ],
  },
];

export const otherProducts = [
  { name: "Minecraft Activation Code", description: "Bedrock + Java — 1195 EGP via NPC", icon: "⛏️" },
  { name: "Game & Digital Card Top-Up", description: "Any game or digital card", icon: "🎴" },
  { name: "Online Purchases", description: "Any online purchase you need", icon: "🛒" },
  { name: "Any Digital Service", description: "Whatever you can think of", icon: "💡" },
  { name: "Visa Payment in USD", description: "Transfer fees apply", icon: "💳" },
];
