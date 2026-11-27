import type { Metadata } from "next";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact-form";
import type { MenuEntry } from "@/components/menu";
import { COMPANY, STORES } from "../lib/legal";

const title = "E-commerce Setup";
const description =
  "Shopify storefronts, Amazon and eBay channels, Klaviyo email, and shipping set up by an engineer who runs his own online store. Fixed scope, quoted up front.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/ecommerce" },
  openGraph: {
    title: `${title} | Farvision LLC`,
    description,
    url: `${COMPANY.site}/ecommerce`,
  },
  twitter: {
    card: "summary",
    title: `${title} | Farvision LLC`,
    description,
  },
};

const MENU: MenuEntry[] = [
  { id: "/", name: "Home" },
  { id: "#ecommerce", name: "E-commerce" },
  { id: "#packages", name: "Packages" },
  { id: "#process", name: "How it works" },
  { id: "#contact", name: "Contact" },
];

const PACKAGES = [
  {
    icon: "icon brands major fa-shopify",
    title: "Storefront launch",
    body: "A Shopify store that's ready to take orders: theme, product catalog, payments, sales tax, shipping rates, store policies, domain, and analytics.",
  },
  {
    icon: "icon brands major fa-amazon",
    title: "Marketplace channels",
    body: "Amazon Seller Central and eBay set up alongside your store: listings, Brand Registry, fulfillment method, and inventory that stays in sync across channels.",
  },
  {
    icon: "icon solid major fa-envelope-open-text",
    title: "Email & retention",
    body: "Klaviyo connected to your store, with the flows that pay for themselves first: welcome series, abandoned cart, and post-purchase follow-up.",
  },
  {
    icon: "icon solid major fa-truck",
    title: "Ops & shipping",
    body: "Carrier accounts and discounted rates, label printing, returns, and the unglamorous details, like a card statement name your customers will recognize.",
  },
] as const;

const STEPS = [
  {
    title: "Intro call",
    body: "We talk through what you sell, where you sell it today, and what's getting in the way.",
  },
  {
    title: "Scoped plan",
    body: "You get a written plan with a fixed price and timeline before any work starts.",
  },
  {
    title: "Build & launch",
    body: "I set everything up in your accounts and walk you through it before it goes live.",
  },
  {
    title: "Handoff",
    body: "You own every account and login, with short docs for the day-to-day. Ongoing help is available if you want it.",
  },
] as const;

const store = STORES[0];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: title,
  serviceType: "E-commerce setup and consulting",
  description,
  url: `${COMPANY.site}/ecommerce`,
  provider: {
    "@type": "Organization",
    name: COMPANY.legalName,
    url: COMPANY.site,
  },
};

export default function EcommercePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Sidebar items={MENU} defaultHash="#ecommerce" />
      <div id="main-container">
        <div id="wrapper">
          <section id="ecommerce" className="wrapper style1 fullscreen fade-up">
            <div className="inner">
              <h1>E-commerce setup</h1>
              <p>
                I set up online stores for small brands &mdash; Shopify,
                Amazon, eBay, email, and shipping &mdash; so you can sell
                everywhere your customers shop without becoming your own IT
                department. I run my own store on the same stack, so you get
                what actually works, not theory.
              </p>
              <ul className="actions">
                <li>
                  <a href="#packages" className="button">
                    See packages
                  </a>
                </li>
                <li>
                  <a href="#contact" className="button">
                    Get in touch
                  </a>
                </li>
              </ul>
            </div>
          </section>

          <section id="packages" className="wrapper style2 fade-up">
            <div className="inner">
              <h2>What I set up</h2>
              <p>
                Pick one or combine them. Every package is fixed scope and
                quoted up front, so there are no open-ended hourly bills.
              </p>
              <div className="features">
                {PACKAGES.map((pkg) => (
                  <section key={pkg.title}>
                    <span className={pkg.icon} aria-hidden="true"></span>
                    <h3>{pkg.title}</h3>
                    <p>{pkg.body}</p>
                  </section>
                ))}
              </div>
            </div>
          </section>

          <section id="operator" className="wrapper style3 fade-up">
            <div className="inner">
              <h2>Built by someone who sells online</h2>
              <p>
                I&apos;m Byron Warner, founder of Farvision. I run{" "}
                <a href={store.url} target="_blank" rel="noopener noreferrer">
                  {store.name}
                </a>
                , a specialty coffee brand sold on its own Shopify store and on
                Amazon, so every package here is something I&apos;ve set up and
                live with myself. Before that I spent 30 years as a software
                engineer and engineering leader, including at Walmart Labs,
                Gap, and OpenTable.
              </p>
            </div>
          </section>

          <section id="process" className="wrapper style1 fade-up">
            <div className="inner">
              <h2>How it works</h2>
              <div className="features">
                {STEPS.map((step, i) => (
                  <section key={step.title}>
                    <span
                      className="icon major"
                      aria-hidden="true"
                      style={{ fontWeight: 700, fontSize: "1.1em" }}
                    >
                      {i + 1}
                    </span>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </section>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="wrapper style2 fade-up">
            <div className="inner">
              <h2>Tell me about your store</h2>
              <p>
                Whether you&apos;re launching your first store or untangling
                one that grew in a hurry, send a few lines about what you sell
                and where. I&apos;ll reply within two business days.
              </p>
              <div className="split style1">
                <ContactForm
                  topic="ecommerce"
                  messagePlaceholder="What you sell, where you sell it today, and what you'd like set up."
                />
                <section>
                  <ul className="contact">
                    <li>
                      <h3>Email</h3>
                      <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
                    </li>
                    <li>
                      <h3>Based in</h3>
                      <span>San Francisco, CA</span>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}
