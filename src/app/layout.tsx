import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";
import QueryProvider from "@/components/providers/query-provider";
import type { Metadata } from "next";
import {
  Barlow_Condensed,
  DM_Sans,
  Inter,
  Noto_Sans_JP,
} from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-gt-american",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-favorit",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OWNDAYS × MELLER",
  description: "Sunglasses collaboration collection",
  openGraph: {
    title: "OWNDAYS × MELLER",
    description: "Sunglasses collaboration collection",
    url: "https://owndays-x-meller.vercel.app/",
    siteName: "OWNDAYS × MELLER",
    images: [
      {
        url: "public/ogp_ownday_meller.jpg",
        width: 1200,
        height: 630,
        alt: "OWNDAYS × MELLER",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html
        lang="en"
        className={`${inter.variable} ${barlowCondensed.variable} ${dmSans.variable} ${notoSansJP.variable} h-full antialiased`}
      >
        <body className="min-h-full flex flex-col ">
          <QueryProvider>
            <Header />
            {children}
            <Footer />
          </QueryProvider>
        </body>
      </html>
    </>
  );
}
