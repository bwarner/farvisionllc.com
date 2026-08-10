import type { Metadata } from "next";
import Link from "next/link";
import PolicyStyles from "../policy-styles";
import { PolicyBody, PolicyToc, ReviewNote, type PolicySection } from "@/components/policy";
import {
  AMAZON_DPP,
  COMPANY,
  POLICY_EFFECTIVE_ISO,
  POLICY_EFFECTIVE_LABEL,
  POLICY_VERSION,
  PRODUCTS,
  STORES,
  SUBPROCESSORS,
  productList,
} from "../lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${COMPANY.legalName} products, including ${productList()}.`,
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

const email = (
  <a href={`mailto:${COMPANY.email}`} className="policy-link">
    {COMPANY.email}
  </a>
);

const sections: readonly PolicySection[] = [
  {
    id: "scope",
    title: "Scope of this policy",
    body: (
      <>
        <p>
          This Privacy Policy explains how {COMPANY.legalName} collects, uses,
          shares, and retains information across all of its products and
          websites, including the software products {productList()} and the
          retail brands{" "}
          {STORES.map((store) => store.name).join(", ")}.
        </p>
        <p>
          Our{" "}
          <Link href="/terms" className="policy-link">
            Terms of Service
          </Link>{" "}
          cover only the software products. Purchases of physical goods are
          governed by the relevant store&rsquo;s own terms and return policy.
          This Privacy Policy covers both.
        </p>
        <p>
          Individual products may publish a supplemental privacy notice covering
          data specific to that product. This policy applies to all of them, and
          controls in the event of any conflict.
        </p>
      </>
    ),
  },
  {
    id: "controller",
    title: "Who is responsible for your information",
    body: (
      <>
        <p>
          {COMPANY.legalName} is the controller of the personal information
          described here, for every product, regardless of which product website
          you signed up on. You can reach us at {email}.
        </p>
        <p>
          {COMPANY.legalName} is a {COMPANY.formationState} limited liability
          company. Written privacy correspondence can be sent to{" "}
          {COMPANY.mailingAddress}.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    body: (
      <>
        <p>We collect:</p>
        <ul className="policy-bullets">
          <li>
            <strong>Account information</strong> — name, email address, company
            name, and login credentials.
          </li>
          <li>
            <strong>Billing information</strong> — billing contact details,
            plan and subscription status, invoices, and limited payment metadata
            from Stripe. We never receive or store full card numbers.
          </li>
          <li>
            <strong>Product data</strong> — the content and configuration you
            submit to a product. See{" "}
            <a href="#product-data" className="policy-link">
              product data by product
            </a>
            .
          </li>
          <li>
            <strong>Usage and device data</strong> — pages and features used,
            approximate location derived from IP address, browser and device
            type, and log data.
          </li>
          <li>
            <strong>Support communications</strong> — messages you send us and
            our replies.
          </li>
        </ul>
        <p>
          We collect this information directly from you, automatically as you
          use the products, and from our payment processor and other service
          providers listed below.
        </p>
      </>
    ),
  },
  {
    id: "product-data",
    title: "Data by product and brand",
    body: (
      <div className="policy-table-wrap">
        <table className="policy-table">
          <thead>
            <tr>
              <th scope="col">Product or brand</th>
              <th scope="col">Data collected</th>
            </tr>
          </thead>
          <tbody>
            {PRODUCTS.map((product) => (
              <tr key={product.name}>
                <th scope="row">{product.name}</th>
                <td>{product.data}</td>
              </tr>
            ))}
            {STORES.map((store) => (
              <tr key={store.name}>
                <th scope="row">{store.name}</th>
                <td>{store.data}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
  {
    id: "how-we-use",
    title: "How we use information",
    body: (
      <>
        <p>We use information to:</p>
        <ul className="policy-bullets">
          <li>provide and operate the products and the features you request;</li>
          <li>authenticate users and secure accounts;</li>
          <li>process payments, manage subscriptions, and send invoices;</li>
          <li>respond to support requests;</li>
          <li>detect, investigate, and prevent abuse, fraud, and security incidents;</li>
          <li>measure usage and improve product reliability and features; and</li>
          <li>comply with legal, tax, and accounting obligations.</li>
        </ul>
        <p>
          We do not sell personal information, and we do not share it for
          cross-context behavioral advertising.
        </p>
      </>
    ),
  },
  {
    id: "ai-training",
    title: "AI features and model training",
    body: (
      <>
        <p>
          Some products send your content to AI model providers in order to
          generate output you requested — for example, analyzing scan results or
          drafting resume content. We use{" "}
          <strong>Anthropic (Claude)</strong> and <strong>OpenAI</strong> for
          this.
        </p>
        <p>
          <strong>We do not use your content to train AI models.</strong>{" "}
          Neither provider trains on content submitted through their commercial
          APIs by default, and we do not opt in to any feedback or
          data-sharing program that would permit it.
        </p>
        <p>
          Providers may retain content briefly to monitor for abuse before
          deleting it. OpenAI&rsquo;s default abuse-monitoring window is 30
          days.
        </p>
        <ReviewNote>
          Two things to close before publishing: confirm Anthropic&rsquo;s
          retention window rather than leaving it unstated, and consider
          requesting Zero Data Retention from both providers. OpenAI offers it
          on approval through sales. ScanSafeguard findings and
          MyAwesomeResume content are the most sensitive data we send to a
          model, so they are the strongest case for it.
        </ReviewNote>
      </>
    ),
  },
  {
    id: "legal-bases",
    title: "Legal bases for processing",
    body: (
      <>
        <p>
          Where the GDPR or UK GDPR applies, we rely on the following legal
          bases: performance of our contract with you (providing the products
          and billing), our legitimate interests (securing the products,
          preventing abuse, and improving features), your consent (non-essential
          cookies and analytics where consent is required), and compliance with
          legal obligations (tax and accounting records).
        </p>
        <p>
          Our software products are available without geographic restriction,
          so this section can apply to them. {STORES[0].name} is sold in the
          United States and {COMPANY.commerceGeoRestriction}, so the GDPR does
          not apply to store purchases.
        </p>
      </>
    ),
  },
  {
    id: "payments",
    title: "Payments",
    body: (
      <>
        <p>
          <strong>Software products.</strong> Payments are processed by Stripe
          under a single {COMPANY.legalName} account and appear on your
          statement as <strong>{COMPANY.statementDescriptor}</strong>.
        </p>
        <p>
          <strong>Retail brands.</strong> Purchases from{" "}
          {STORES.map((store) => store.name).join(", ")} are processed by
          Shopify Payments and appear under that store&rsquo;s own descriptor.
        </p>
        <p>
          In both cases the processor collects and handles your card details
          under its own privacy policy, and we never receive or store full card
          numbers. We receive payment status, billing contact information, order
          and invoice details, and limited payment metadata in order to fulfill
          orders, manage billing, provide support, and respond to disputes.
        </p>
      </>
    ),
  },
  {
    id: "subprocessors",
    title: "Service providers we use",
    body: (
      <>
        <p>
          We share information with the following service providers, only as
          needed for them to perform services for us:
        </p>
        <div className="policy-table-wrap">
          <table className="policy-table">
            <thead>
              <tr>
                <th scope="col">Provider</th>
                <th scope="col">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {SUBPROCESSORS.map((provider) => (
                <tr key={provider.name}>
                  <th scope="row">{provider.name}</th>
                  <td>{provider.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ReviewNote>
          Confirm the hosting split before publishing: ScanSafeguard is
          described as running on AWS while this site runs on Vercel. The table
          should say which products sit where rather than listing both
          generically.
        </ReviewNote>
      </>
    ),
  },
  {
    id: "disclosure",
    title: "When we disclose information",
    body: (
      <>
        <p>Beyond the service providers listed above, we disclose information:</p>
        <ul className="policy-bullets">
          <li>when you direct us to, such as connecting a third-party account;</li>
          <li>
            to comply with law, legal process, or a valid government request;
          </li>
          <li>
            to enforce our terms, investigate abuse, or protect the rights,
            safety, and property of {COMPANY.legalName}, our users, or the
            public; and
          </li>
          <li>
            in connection with a merger, acquisition, financing, or sale of
            assets, subject to this policy continuing to apply.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and analytics",
    body: (
      <>
        <p>
          We use strictly necessary cookies to keep you signed in and to secure
          your session. These cannot be turned off without breaking the
          products.
        </p>
        <p>
          We also use PostHog for product analytics, to understand which
          features are used and to diagnose problems. This sets analytics
          cookies or similar identifiers.
        </p>
        <ReviewNote>
          There is no consent mechanism on the sites today. If the products are
          offered in the EEA or UK, analytics cookies must be consent-gated
          before they load. Also decide whether to honor Global Privacy Control
          signals and say so here.
        </ReviewNote>
      </>
    ),
  },
  {
    id: "retention",
    title: "How long we keep information",
    body: (
      <>
        <div className="policy-table-wrap">
          <table className="policy-table">
            <thead>
              <tr>
                <th scope="col">Data</th>
                <th scope="col">Retention</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Account and product data</th>
                <td>
                  Until you delete it or close your account, then removed from
                  active systems within 30 days.
                </td>
              </tr>
              <tr>
                <th scope="row">Amazon marketplace data (SellAvant)</th>
                <td>
                  SellAvant does not ingest buyer personal information. Listing,
                  inventory, and aggregate order data is retained for the life
                  of your account. Were we to begin handling buyer personal
                  information, it would be deleted within{" "}
                  {AMAZON_DPP.piiRetentionDays} days of order delivery as
                  Amazon&rsquo;s Data Protection Policy requires.
                </td>
              </tr>
              <tr>
                <th scope="row">Backups</th>
                <td>
                  Deleted data persists in encrypted backups and is purged on a
                  rolling 90-day cycle.
                </td>
              </tr>
              <tr>
                <th scope="row">Billing and invoice records</th>
                <td>
                  Retained for 7 years to meet tax and accounting requirements,
                  even after account closure.
                </td>
              </tr>
              <tr>
                <th scope="row">
                  Store orders and shipping details (retail brands)
                </th>
                <td>
                  Retained for 7 years alongside the transaction record for tax
                  and accounting purposes. Marketing contact details are kept
                  until you unsubscribe or ask us to delete them.
                </td>
              </tr>
              <tr>
                <th scope="row">Support messages</th>
                <td>Retained for 2 years after the conversation closes.</td>
              </tr>
              <tr>
                <th scope="row">Security and access logs</th>
                <td>Retained for 12 months for abuse and incident investigation.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ReviewNote>
          Confirm each window above matches what the systems actually do. A
          published retention schedule you do not follow is worse than a vague
          one.
        </ReviewNote>
      </>
    ),
  },
  {
    id: "security",
    title: "Security",
    body: (
      <p>
        We use reasonable technical and organizational safeguards to protect
        information, including encryption in transit, access controls, and
        limiting internal access to those who need it. No online service can
        guarantee perfect security, but we work to reduce risk and respond to
        security issues promptly.
      </p>
    ),
  },
  {
    id: "breach",
    title: "Security incident notification",
    body: (
      <>
        <p>
          If we become aware of a breach of security leading to the accidental
          or unlawful destruction, loss, alteration, or unauthorized disclosure
          of your personal information, we will notify affected users and any
          required regulators without undue delay, and in any case within the
          timeframes required by applicable law.
        </p>
        <p>
          Where an incident affects data obtained through the Amazon Selling
          Partner API, we also notify Amazon within{" "}
          {AMAZON_DPP.incidentNotificationHours} hours, as required by
          Amazon&rsquo;s Data Protection Policy.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "Your privacy rights",
    body: (
      <>
        <p>
          Depending on where you live, you may have the right to access,
          correct, delete, or receive a portable copy of your personal
          information, to object to or restrict certain processing, and to
          withdraw consent where processing is based on consent.
        </p>
        <p>
          To make a request, email {email} from the address on your account, or
          contact us with enough detail for us to verify your identity. We
          respond within 45 days and will tell you if we need more time. You may
          use an authorized agent where the law allows it. We will not
          discriminate against you for exercising these rights.
        </p>
        <p>
          Some requests may be limited by legal, security, fraud-prevention, or
          product-operation needs — for example, we keep billing records for the
          tax period described in{" "}
          <a href="#retention" className="policy-link">
            retention
          </a>{" "}
          even after an account is deleted.
        </p>
      </>
    ),
  },
  {
    id: "california",
    title: "California privacy rights",
    body: (
      <>
        <p>
          Under the CCPA as amended by the CPRA, California residents have the
          rights described above, plus the right to know the categories of
          personal information we collect and disclose.
        </p>
        <p>
          In the preceding 12 months we collected these categories: identifiers
          (name, email, IP address), commercial information (subscriptions and
          transactions), internet or network activity (usage and log data), and
          the content you submit to a product. We collect these from you
          directly, automatically through the products, and from our service
          providers. We use them for the business purposes described in{" "}
          <a href="#how-we-use" className="policy-link">
            how we use information
          </a>{" "}
          and disclose them to the providers listed in{" "}
          <a href="#subprocessors" className="policy-link">
            service providers
          </a>
          .
        </p>
        <p>
          <strong>
            We do not sell personal information and we do not share it for
            cross-context behavioral advertising
          </strong>
          , and we have not done so in the preceding 12 months. We do not
          knowingly collect or sell the personal information of anyone under 16.
        </p>
      </>
    ),
  },
  {
    id: "transfers",
    title: "International data transfers",
    body: (
      <>
        <p>
          We operate in the United States, and our service providers may process
          information in the United States and other countries. Those countries
          may have different data protection laws than the country you live in.
        </p>
        <p>
          Where we transfer personal information out of the EEA or UK in
          connection with the software products, we rely on the European
          Commission&rsquo;s Standard Contractual Clauses, or the UK
          International Data Transfer Addendum, as incorporated into our
          agreements with the service providers listed above.
        </p>
        <ReviewNote>
          Confirm before publishing that a data processing agreement containing
          those clauses is actually in place with each provider in the
          subprocessor table. Most incorporate them into standard terms
          automatically, but the statement above should not be made until it
          has been checked.
        </ReviewNote>
      </>
    ),
  },
  {
    id: "children",
    title: "Children",
    body: (
      <p>
        The products are intended for business and professional use by adults.
        They are not directed to children under 13, and we do not knowingly
        collect personal information from children under 13 — or under 16 where
        local law sets that threshold. If you believe a child has provided us
        personal information, contact {email} and we will delete it.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time. The current version
        and effective date are shown at the top of this page. For material
        changes we will give notice by email or in-product before they take
        effect.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <p>
        Privacy questions and requests can be sent to {email}, or by mail to the
        address in{" "}
        <a href="#controller" className="policy-link">
          who is responsible for your information
        </a>
        .
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PolicyStyles />
      <main className="policy-page">
        <div className="policy-container">
          <p className="policy-breadcrumb">
            <Link href="/" className="policy-link">
              {COMPANY.legalName}
            </Link>{" "}
            /{" "}
            <Link href="/legal" className="policy-link">
              Legal
            </Link>{" "}
            / Privacy Policy
          </p>

          <h1>Privacy Policy</h1>
          <p className="policy-lead">
            How {COMPANY.legalName} handles information across its products,
            including {productList()}. This policy applies to every product and
            controls over any product-specific privacy notice.
          </p>
          <p className="policy-meta">
            <strong>Version {POLICY_VERSION}</strong> &middot; Effective{" "}
            <time dateTime={POLICY_EFFECTIVE_ISO}>{POLICY_EFFECTIVE_LABEL}</time>
          </p>

          <PolicyToc sections={sections} />
          <PolicyBody sections={sections} />

          <p className="policy-note">
            Related:{" "}
            <Link href="/terms" className="policy-link">
              Terms of Service
            </Link>{" "}
            &middot;{" "}
            <Link href="/refunds" className="policy-link">
              Refund Policy
            </Link>{" "}
            &middot;{" "}
            <Link href="/support" className="policy-link">
              Support
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
