import type { Metadata } from "next";
import { Antonio, Jost } from "next/font/google";
import "./globals.css";

const antonio = Antonio({
  weight: "100",
  subsets: ["latin"],
  variable: "--font-antonio",
});

const jost = Jost({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: "Farvision LLC - Under Construction",
  description:
    "Our site is under construction. We are working hard to bring you an exceptional digital experience.",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${antonio.variable} ${jost.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>Farvision LLC</title>
      </head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
