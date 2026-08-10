import type { Metadata } from "next";
import Intro from "@/components/intro";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";
import One from "@/components/one";

import Three from "@/components/three";
import { COMPANY, PRODUCTS, productList } from "./lib/legal";

const description = `San Francisco company with a growing portfolio of web properties. Creators of ${productList()}.`;

export const metadata: Metadata = {
  title: "Farvision LLC | Software Products & Development",
  description,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY.legalName,
  url: COMPANY.site,
  description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    addressCountry: "US",
  },
  email: COMPANY.email,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: COMPANY.email,
    url: `${COMPANY.site}/support`,
  },
  owns: PRODUCTS.map((product) => ({
    "@type": "SoftwareApplication",
    name: product.name,
    url: product.url,
    description: product.description,
    applicationCategory: "BusinessApplication",
  })),
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
