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
  metadataBase: new URL("https://abelbijugeorge.me"),
  title: "Abel Biju George | Portfolio",
  description: "Product-minded engineer, builder, and creative technologist.",
  keywords: ["Abel Biju George", "Portfolio", "Software Engineer", "Creative Technologist", "Developer", "React", "Next.js"],
  authors: [{ name: "Abel Biju George" }],
  creator: "Abel Biju George",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Abel Biju George | Portfolio",
    description: "Product-minded engineer, builder, and creative technologist.",
    type: "website",
    siteName: "Abel Biju George Portfolio",
  },
};

import Cursor from "@/components/Cursor/Cursor";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abel Biju George",
  url: "https://abelbijugeorge.me",
  jobTitle: "Software Engineer",
  sameAs: [
    "https://github.com/abel-721-bela"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
