import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import ProductDrawer from "@/components/ProductDrawer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Coffeepoint",
  description: "A cozy coffee experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body
        suppressHydrationWarning
        className="bg-cream-base text-espresso-ink font-sans antialiased selection:bg-oak-accent selection:text-cream-base"
      >
        <CartProvider>
          {children}
          <ProductDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
