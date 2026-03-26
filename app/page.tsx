import type { Metadata } from "next";
import Intro from "@/components/intro";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";
import One from "@/components/one";

import Three from "@/components/three";

export const metadata: Metadata = {
  title: "Farvision LLC | Software Products & Development",
  description:
    "San Francisco company with a growing portfolio of web properties. Creators of MyAwesomeResume, ScanSafeguard, and FilteredBlend.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Farvision LLC",
  url: "https://farvisionllc.com",
  description:
    "San Francisco company with a growing portfolio of web properties. Creators of MyAwesomeResume, ScanSafeguard, and FilteredBlend.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    addressCountry: "US",
  },
  email: "info@farvisionllc.com",
  sameAs: [
    "https://www.linkedin.com/company/112710249",
    "https://www.facebook.com/profile.php?id=61566601373321",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Sidebar />
      <div id="main-container">
        <div id="wrapper">
          <Intro />
          <One />

          <Three />
        </div>
        <Footer />
      </div>
    </>
  );
}
