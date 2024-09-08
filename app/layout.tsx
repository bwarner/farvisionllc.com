import type { Metadata } from "next";
import clsx from "clsx";
import { Inter } from "next/font/google";
import PageLoadAnimation from "@/components/page-load";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
