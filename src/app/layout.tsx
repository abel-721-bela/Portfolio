import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abel Biju George | Portfolio",
  description: "Product-minded engineer, builder, and creative technologist.",
  openGraph: {
    title: "Abel Biju George | Portfolio",
    description: "Product-minded engineer, builder, and creative technologist.",
    type: "website",
  },
};

import Cursor from "@/components/Cursor/Cursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
