import type { Metadata } from "next";
import Intro from "@/components/intro";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";
import One from "@/components/one";

import Three from "@/components/three";
import { COMPANY, PLACEHOLDER_PREFIX, PRODUCTS, STORES, productList } from "./lib/legal";

const description = `San Francisco company with a growing portfolio of web properties. Creators of ${productList()}, and the coffee brand ${STORES[0].name}.`;

/** Placeholder values must not reach structured data — a fabricated URL is
 *  worse than an absent one. */
const resolved = (value: string) =>
  value.startsWith(PLACEHOLDER_PREFIX) ? undefined : value;

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
  subOrganization: STORES.map((store) => ({
    "@type": "OnlineStore",
    name: store.name,
    slogan: store.tagline,
    description: store.description,
    url: resolved(store.url),
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
