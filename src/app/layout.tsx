import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Intro from "@/components/Intro";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Callbridge Web Design Services | Best web designer agency in Bohol, Philippines.",
  description:
    "Bohol's Best Web Design Agency | Experts in Social Media Build-up, Search Engine Optimization , Email & Facebook Marketing, Website Hosting, Website Design and Development, Mobile Application, Logo Design, Graphic Design suits to all types of business needs.",
  // Open Graph Metadata
  openGraph: {
    title: "Callbridge Web Design Services",
    description:
      "Bohol's Best Web Design Agency | Experts in Social Media Build-up, Search Engine Optimization , Email & Facebook Marketing, Website Hosting, Website Design and Development, Mobile Application, Logo Design, Graphic Design suits to all types of business needs.",
    url: "https://callbridgewebdesign.xyz", // Replace with your actual site URL
    siteName: "Callbridge Web Design",
    images: [
      {
        url: "https://callbridgewebdesign.xyz/opengraph-image.png", // Replace with the URL of your Open Graph image
        width: 1200,
        height: 630,
        alt: "Open Graph Image",
      },
    ],
  },
  // Favicon Link
  icons: {
    icon: "/favicon.ico", // Favicon file path
    apple: "/favicon.png", // Apple touch icon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
            rel="stylesheet"
          />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
