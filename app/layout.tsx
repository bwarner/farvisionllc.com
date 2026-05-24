import type { Metadata } from "next";
import clsx from "clsx";
import { Antonio, Jost } from "next/font/google";
import PageLoadAnimation from "@/components/page-load";
import { PostHogProvider } from "@/components/posthog-provider";
import "./globals.css";

const antonio = Antonio({ subsets: ["latin"], variable: "--font-antonio", weight: ["100", "400", "700"] });
const jost = Jost({ subsets: ["latin"], variable: "--font-jost", weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: {
    default: "Farvision LLC | Software Products & Development",
    template: "%s | Farvision LLC",
  },
  description:
    "Farvision LLC builds software products in San Francisco. Creator of SellAvant, ScanSafeguard, and MyAwesomeResume.",
  metadataBase: new URL("https://farvisionllc.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://farvisionllc.com",
    siteName: "Farvision LLC",
    title: "Farvision LLC | Software Products & Development",
    description:
      "Software products built in San Francisco: SellAvant, ScanSafeguard, and MyAwesomeResume.",
  },
  twitter: {
    card: "summary",
    title: "Farvision LLC | Software Products & Development",
    description:
      "Software products built in San Francisco: SellAvant, ScanSafeguard, and MyAwesomeResume.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
        className={clsx(jost.variable, antonio.variable, "is-preload")}
      >
        <PostHogProvider>
          <PageLoadAnimation />
          {children}
        </PostHogProvider>
      </body>
    </html>
  );
}
