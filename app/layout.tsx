import type { Metadata } from "next";
import clsx from "clsx";
import { Inter } from "next/font/google";
import PageLoadAnimation from "@/components/page-load";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Farvision LLC",
  description: "Corporate website for Farvision LLC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={clsx(inter.className, "is-preload")}
      >
        <PageLoadAnimation />
        {children}
      </body>
    </html>
  );
}
