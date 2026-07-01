import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Sacred Geometry Masterclass — Raúl Wesche",
  description:
    "Learn geometric tattooing from Raúl Wesche: compass-and-straightedge foundations, mandala composition, designing for the body, linework and dotwork execution, and the business behind it. 12+ years of precision, distilled.",
  openGraph: {
    title: "Sacred Geometry Masterclass — Raúl Wesche",
    description:
      "Geometric tattooing from first construction to healed skin. Join the waitlist.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
