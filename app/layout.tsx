import type { Metadata, Viewport } from "next";
import { Playfair_Display, Poppins, Rubik } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "Fragrance - Luxury Perfumes & Scents",
  description:
    "Discover our luxurious fragrance collections: Primmox and Fresh Think. Premium perfumes available on Flipkart and Amazon.",
  generator: "v0.app",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${rubik.variable} font-sans bg-white`}
      >
        <Header />
        <main>{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
