import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aurora.fairway.xyz"),
  title: {
    default: "Aurora — Credit markets for Bitcoin on chain",
    template: "%s — Aurora by Fairway",
  },
  description:
    "Aurora is Fairway's institutional infrastructure layer for Bitcoin-backed credit markets on-chain — verified counterparties, programmable loan instruments, and privacy-preserving underwriting for the world's hardest asset.",
  openGraph: {
    title: "Aurora — Credit markets for Bitcoin on chain",
    description:
      "The institutional layer for Bitcoin-backed credit markets on-chain. Verified counterparties. Programmable loan instruments. Privacy-preserving underwriting.",
    siteName: "Aurora by Fairway",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
