import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/design/layout/Header";
import { Footer } from "@/design/layout/Footer";
import SmoothScroll from "@/design/layout/SmoothScroll";
import "lenis/dist/lenis.css";
import BackToTop from "@/design/ui/BackToTop";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://2002devs.com"), // your real domain, once you have one
  title: {
    default: "2002 devs — real UI components, broken and fixed in public",
    template: "%s — 2002 devs", // page titles become "Button — 2002 devs" automatically
  },
  description:
    "An open-source notebook of real UI components, concepts, and patterns — versioned over time, with the actual decisions behind each one explained.",
  openGraph: {
    type: "website",
    siteName: "2002 devs",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Header />
        <SmoothScroll>
          {children}
          <BackToTop />
        </SmoothScroll>
        <Footer />
      </body>
    </html>
  );
}
