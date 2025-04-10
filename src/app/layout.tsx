import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/navbar";
import { TopBanner } from "@/components/top-banner";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import { siteConfig } from "@/config/data";
import { type Metadata } from "next";
import { StartPopup } from "@/components/start-popup";
import { BottomBanner } from "@/components/bottom-banner";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.name + " | " + siteConfig.tagline,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.website }],
  publisher: siteConfig.website,

  alternates: {
    canonical: siteConfig.website,
  },

  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script
          defer
          src="https://umami.nareshkhatri.site/script.js"
          data-website-id="06b5c263-3da8-4fac-9e33-d39c5ad24202"
        ></Script>
        <Providers>
          <div className="flex flex-col h-[100dvh]">
            <div className="fixed top-0 left-0 right-0 h-[120px] z-50">
              <TopBanner />
              <Navbar />
            </div>

            {/* Scrollable Content Area */}
            <main className="flex-1 bg-gradient-to-b from-slate-50/50 to-white pt-[125px] md:pt-[104px]">
              {children}
              <Toaster />
              <Footer />
            </main>

            {/* Fixed Footer */}
            <div className="">
              <BottomBanner />
            </div>
            <StartPopup />
          </div>
        </Providers>
      </body>
    </html>
  );
}
