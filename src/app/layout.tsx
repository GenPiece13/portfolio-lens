import type { Metadata } from "next";
import { Syne, Space_Mono } from "next/font/google";
import "./globals.css";

// Load font dengan subset untuk performa
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "700", "800"]
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["400", "700"]
});

export const metadata: Metadata = {
  title: "Lens & Logic",
  description: "Portfolio of a Creative Technologist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${spaceMono.variable} bg-paper text-charcoal antialiased selection:bg-digital selection:text-white`}>
        {children}
      </body>
    </html>
  );
}