import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";
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

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale} className={`${playfair.variable} ${dmSans.variable}`}>
      <body
        suppressHydrationWarning
        className="bg-cream-base text-espresso-ink font-sans antialiased selection:bg-oak-accent selection:text-cream-base"
      >
        <NextIntlClientProvider>
          <CartProvider>
            {children}
            <ProductDrawer />
          </CartProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
