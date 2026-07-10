export interface Product {
  id: number
  name: string
  description: string
  price: number
  rating: number
  category: string
  tag?: string
  image: string
}

const breakfastImg =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD82OXyi_fBJpQGr9aWYUYW5uFiKseLTtAUr_d3JUjplh2hU0Ar_V0eq-YWdpLDkcmnRBJO79KB8WgndlMjX1n2bCsZ596JUNbx8vRJcBMXeFhlRUpK7XbWFeSKbMARYxN2-4aSRJ0THAAFrL40x18zJGa7RNN9wk676RMrYr-IH4Be3eUEIO9Z3LeyURdo196jShF0d0JbkIJLQKxlwKBd47G0lIiMZkqNWw2TAzdg4J0sAIdvwMf-jg"

const espressoImg =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDo8bHui10WMajB7TEfgcwWmOexlYMd1RePYzri4CmImxhTmuWcXb1ky6LCkzls0-ta-ERGtXC85MRlUtDM801J1zOpylrxUmNM4_BeaPtTUH5Xc7AbsYzcXYt2-8kPuff8dRllRBsVi9_QZgp14cELTBn8q7OfmqotffPcpmKqePyz5jBWX1I0Q9A45DwUjUEQ0pJjsOd5creV7n9NQSuRIfP6MutAE34BZF5_8qxKpsVaRGZz4dL1UA"

const handBrewedImg =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB-5L1-SVFgytquLQiJLFDd4fshoIIbrAsbT9VS-kuBMLcKmeM-SD7zAMQhqXXawZo_jAFlVoDq61nP4Mw5mLA8L7MdzC-ll4HL6kpUgJ-TKIvFwdGF4SvhsWltdysvFzWu6PilOrdtb1DhUvti0EJBLATdgiCq6Wy1YCNK5KMuDZG28dMy8WZgzqaM-l5roNJ_LXEDqotiAzExFRxes9HyoF9xl7BTH337weJSOCzC2pFoMaGSihvw2A"

const pastriesImg =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDOU-Pzukk5JSGNghkqWo6QO-wu7N0ziT9dUiS8DCfHdkrNb49fmgINo3TYQ8UiAXl5k8l_RfGJHGgQovaHdSd3FtaOgMg10Fp1RVbYukiiaFJ70zu1GQxWZzXNoM8UEkHqkFaBvhgkP7y7fd8A_-yl37SaEH1quYYyE88LK9oVLgJS4n8HR-bEvZ-NGEuxOlSeRDhRNSi7XE_MrtyuUE0lK2HQjfzPd4PGJS24jlAgsFyjQyonF7rRRQ"

const seasonalImg =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDXg7PlluwrWBaa2g30mr2PMnwkWcbdNKCbuCEvqa5-PtsLnuhtcFU__W4IDjxl6_va-VMkMk17KUZHSzCd1sU1RUdyxo0fCezuuy409vypk5bnhuX_n_QY4di9IhJEsT_FzqpIU7ebPdSv_NGYx8YGv8n08okHhlrHCy4sFSPBavO5erbv4dEq6rFjO-KsbZKA2Vd3m1IFr1ODhLwJSNv8DXZf7QTUByfloICOBcT8GV2uGt08-L_9ZA"

const flatWhiteImg =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCSAE28Im2BpzKWdAIKqYDC-fviRd73gazrGu8m_jyqvBTRXtwcRN6b4l7_NKRRbN01xBQ62TExul-sY3Eae_Eev55NRTpQ6A6gWKwWQ5JH7KQJNscv0BPGOjxpxQdR_4a44CsCcjDcNIYLf9dk-ggfioFO4nYT57Lf_ZlcFTwkZAYYZD1UZRAD383y9tdGlw107cbWZa2n-y41b_mPr69ETA2sh8hOl6IHCRpZ1qavigO8OkkyZkS6kw"

const avocadoToastImg =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD8H0Mhto4yVSEEtlPQNyBbzGTaNWaHKEFf1b2gg9Tz96b1xW29wafraEOHqyzFWuWCnoyPi9Nws3qEEMb4dzYHRXcqFGcrGJHF0_C5pMmknRvCNQhuWYFZFiau1ws_NKLkecNJJxWmU2RTwfx-DkTfpJLmZvkLYR1PNznf9QpmImzTXs5nTPVTJdg4oDFt25jASf8bgPNWQFyG7iJAvRIttG1bJWt0EX8Fw37-TTXsewByPLUQd0N65g"

const coldBrewImg =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBsJp3Q9Q0h8DQKH9zcb4oCSegFP9QmUJCHWljiGTijKe8R1o4VWfr5vLUlfAp2ChaAGthHZpzSNaHoY_A1w13CaBm6tvVv6vmpaoesprj9TOskXYfqPfnBkVPHClFD_cUKKT4XBI1lG7u6hkQLOQSb8kzOY1-fHlPsJ1Kf4SORLk0qwyJLLtdyl2z7paREJO06bRPJuuVgIJVX4V8jsViHZjd-zzW3TlH87OWp3X6v8Vw2B5EG2DQVIw"

const pourOverImg =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuABtbm1LJH8BrPi9xxU2a4HyEi1sgKRYodVzAu5nnMPPJvB9NVfU9phEu6Ey1QCctk2n1hCVTb_7CJMvwRgEg3D_anv7FMF1SwrkotpCpNu7wtkfAdeNQFCv9s4MHeXz_NhKHtt23jqbElRH41ewlx9SCkMKEhETtabgXlpRwuDPvyD2TbBK78WoN68aj5aQw9ExJpKeLPYOANWdBJfoRAzOXJiCOphZeBIAA2oUd73CDnGEMMHTMipRQ"

export const products: Product[] = [
  {
    id: 1,
    name: "Flat White",
    description: "Smooth espresso with velvety microfoam",
    price: 350,
    rating: 4.8,
    category: "Bestsellers",
    tag: "Bestseller",
    image: flatWhiteImg,
  },
  {
    id: 2,
    name: "Cold Brew",
    description: "24-hour steeped perfection, served cold",
    price: 380,
    rating: 4.9,
    category: "Bestsellers",
    tag: "Customer Favorite",
    image: coldBrewImg,
  },
  {
    id: 3,
    name: "Classic Croissant",
    description: "Flaky, golden-baked French pastry",
    price: 180,
    rating: 4.7,
    category: "Bestsellers",
    tag: "Popular",
    image: pastriesImg,
  },
  {
    id: 4,
    name: "Avocado Toast",
    description: "Sourdough with fresh avocados & cherry tomatoes",
    price: 420,
    rating: 4.6,
    category: "Bestsellers",
    tag: "Popular",
    image: avocadoToastImg,
  },
  {
    id: 5,
    name: "Pour Over",
    description: "Single-origin Ethiopian beans, slow-dripped",
    price: 450,
    rating: 4.7,
    category: "Bestsellers",
    tag: "Artisan",
    image: pourOverImg,
  },
  {
    id: 6,
    name: "Classic Pancakes",
    description: "Fluffy stack with maple syrup & berries",
    price: 280,
    rating: 4.5,
    category: "Breakfast",
    tag: "Popular",
    image: breakfastImg,
  },
  {
    id: 7,
    name: "Eggs Benedict",
    description: "Poached eggs on toasted English muffin",
    price: 350,
    rating: 4.4,
    category: "Breakfast",
    image: breakfastImg,
  },
  {
    id: 8,
    name: "French Toast",
    description: "Brioche dipped in vanilla custard",
    price: 320,
    rating: 4.3,
    category: "Breakfast",
    tag: "Weekend Special",
    image: breakfastImg,
  },
  {
    id: 9,
    name: "Granola Bowl",
    description: "House-made granola with yogurt & fresh fruit",
    price: 250,
    rating: 4.2,
    category: "Breakfast",
    image: breakfastImg,
  },
  {
    id: 10,
    name: "Breakfast Wrap",
    description: "Eggs, cheese, and herbs in a whole wheat wrap",
    price: 290,
    rating: 4.1,
    category: "Breakfast",
    image: breakfastImg,
  },
  {
    id: 11,
    name: "Classic Espresso",
    description: "Rich double shot with perfect crema",
    price: 200,
    rating: 4.5,
    category: "Espresso",
    tag: "Pure & Simple",
    image: espressoImg,
  },
  {
    id: 12,
    name: "Cappuccino",
    description: "Espresso with thick milk foam & cocoa",
    price: 280,
    rating: 4.6,
    category: "Espresso",
    image: espressoImg,
  },
  {
    id: 13,
    name: "Caffe Latte",
    description: "Smooth espresso with steamed milk",
    price: 300,
    rating: 4.4,
    category: "Espresso",
    image: espressoImg,
  },
  {
    id: 14,
    name: "Macchiato",
    description: "Espresso marked with a dollop of foam",
    price: 260,
    rating: 4.3,
    category: "Espresso",
    image: espressoImg,
  },
  {
    id: 15,
    name: "Mocha",
    description: "Espresso with chocolate & steamed milk",
    price: 340,
    rating: 4.5,
    category: "Espresso",
    tag: "Sweet Tooth",
    image: espressoImg,
  },
  {
    id: 16,
    name: "Affogato",
    description: "Vanilla gelato drowned in hot espresso",
    price: 320,
    rating: 4.7,
    category: "Espresso",
    tag: "Dessert",
    image: espressoImg,
  },
  {
    id: 17,
    name: "French Press",
    description: "Full-bodied coffee brewed to perfection",
    price: 320,
    rating: 4.5,
    category: "Hand-Brewed",
    image: handBrewedImg,
  },
  {
    id: 18,
    name: "Aeropress",
    description: "Clean, smooth coffee with rich flavor",
    price: 350,
    rating: 4.4,
    category: "Hand-Brewed",
    image: handBrewedImg,
  },
  {
    id: 19,
    name: "Siphon Brew",
    description: "Vacuum-brewed for a uniquely clean cup",
    price: 500,
    rating: 4.6,
    category: "Hand-Brewed",
    tag: "Premium",
    image: handBrewedImg,
  },
  {
    id: 20,
    name: "Chemex",
    description: "Bright, clean pour-over with paper filter",
    price: 400,
    rating: 4.5,
    category: "Hand-Brewed",
    image: handBrewedImg,
  },
  {
    id: 21,
    name: "Blueberry Muffin",
    description: "Freshly baked with wild blueberries",
    price: 160,
    rating: 4.3,
    category: "Pastries",
    image: pastriesImg,
  },
  {
    id: 22,
    name: "Cinnamon Roll",
    description: "Soft dough with cream cheese frosting",
    price: 220,
    rating: 4.6,
    category: "Pastries",
    tag: "Fresh Baked",
    image: pastriesImg,
  },
  {
    id: 23,
    name: "Chocolate Danish",
    description: "Flaky pastry filled with dark chocolate",
    price: 240,
    rating: 4.4,
    category: "Pastries",
    image: pastriesImg,
  },
  {
    id: 24,
    name: "Banana Bread",
    description: "Moist loaf with walnuts & honey",
    price: 190,
    rating: 4.2,
    category: "Pastries",
    image: pastriesImg,
  },
  {
    id: 25,
    name: "Pumpkin Spice Latte",
    description: "Warm spices meet smooth espresso",
    price: 360,
    rating: 4.7,
    category: "Seasonal",
    tag: "Limited Time",
    image: seasonalImg,
  },
  {
    id: 26,
    name: "Iced Matcha Latte",
    description: "Ceremonial matcha with oat milk",
    price: 340,
    rating: 4.5,
    category: "Seasonal",
    image: seasonalImg,
  },
  {
    id: 27,
    name: "Honey Lavender Latte",
    description: "Floral notes with local honey",
    price: 350,
    rating: 4.4,
    category: "Seasonal",
    image: seasonalImg,
  },
  {
    id: 28,
    name: "Spiced Chai",
    description: "House-made chai with warming spices",
    price: 300,
    rating: 4.3,
    category: "Seasonal",
    tag: "Customer Pick",
    image: seasonalImg,
  },
  {
    id: 29,
    name: "Iced Hazelnut Latte",
    description: "Chilled espresso with toasted hazelnut",
    price: 360,
    rating: 4.6,
    category: "Seasonal",
    image: seasonalImg,
  },
]

export const categories = [
  { id: "all", name: "All Items" },
  { id: "bestsellers", name: "Bestsellers" },
  { id: "breakfast", name: "Breakfast" },
  { id: "espresso", name: "Espresso" },
  { id: "hand-brewed", name: "Hand-Brewed" },
  { id: "pastries", name: "Pastries" },
  { id: "seasonal", name: "Seasonal" },
]

export function getCategoryProducts(categorySlug: string): Product[] {
  if (categorySlug === "all") return products
  const categoryMap: Record<string, string> = {
    bestsellers: "Bestsellers",
    breakfast: "Breakfast",
    espresso: "Espresso",
    "hand-brewed": "Hand-Brewed",
    pastries: "Pastries",
    seasonal: "Seasonal",
  }
  const cat = categoryMap[categorySlug]
  if (!cat) return products
  return products.filter((p) => p.category === cat)
}
