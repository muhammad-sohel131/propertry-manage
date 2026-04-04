import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";

import { Poppins, Plus_Jakarta_Sans, Manrope } from "next/font/google";
import { Header } from "@/components/layout/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-plus-jakarta",
});
const manrope = Manrope({
  subsets: ['latin'],
  weight: ['200','300','400','500','600','700','800'],
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: "Property Management Solutions | Professional Property Services",
  description: "Expert property management services for landlords and property owners. Comprehensive solutions including tenant screening, rent collection, maintenance, and property marketing.",
  keywords: ["property management", "real estate", "landlord services", "tenant screening", "property maintenance", "rent collection"],
  authors: [{ name: "Property Management Team" }],
  creator: "Property Management",
  publisher: "Property Management Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${plusJakarta.variable} ${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
