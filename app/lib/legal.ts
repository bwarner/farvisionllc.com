/**
 * Single source of truth for company identity, the product list, and policy
 * versioning. /terms, /privacy, /refunds and /legal all read from here, so
 * adding a product means editing one file instead of four pages.
 */

/**
 * Values that still need counsel's input are written as `TODO: ...` and
 * rendered inside a visible review callout so they cannot ship unnoticed.
 * `__tests__/legal.test.ts` fails once POLICY_STATUS flips to "published"
 * while any placeholder remains.
 */
export const PLACEHOLDER_PREFIX = "TODO:";

export const POLICY_STATUS: "draft" | "published" = "draft";

/** Bumped whenever a substantive change is made. Recorded at signup alongside
 *  the acceptance timestamp so we can prove which version a user agreed to. */
export const POLICY_VERSION = "2.0";
export const POLICY_EFFECTIVE_ISO = "2026-08-10";
export const POLICY_EFFECTIVE_LABEL = "August 10, 2026";

export const COMPANY = {
  legalName: "Farvision LLC",
  shortName: "Farvision",
  site: "https://farvisionllc.com",
  email: "info@farvisionllc.com",
  /** Must match the Stripe account's statement descriptor exactly. */
  statementDescriptor: "FARVISION LLC",
  formationState: "TODO: state of formation",
  mailingAddress: "TODO: full mailing address for legal notices",
  governingLaw: "TODO: governing law state",
  venue: "TODO: county and state for venue",
  /** Cap on direct damages. See /terms#liability. */
  liabilityCap: "TODO: cap formula, e.g. fees paid in the prior 12 months or $100, whichever is greater",
  disputeResolution:
    "TODO: decide between binding arbitration with class-action waiver, or courts in the venue above",
  /** Whether the products are offered to individuals in the EEA/UK. Drives the
   *  legal-bases and international-transfer sections of the privacy policy. */
  servesEea: "TODO: confirm whether the products are offered to EEA/UK residents",
} as const;

/**
 * SellAvant connects to Amazon Seller Central via the Selling Partner API,
 * which subjects us to Amazon's Data Protection Policy. Its requirements are
 * stricter than our general retention schedule, so /privacy#retention carries
 * a carve-out. The single question that decides how much of the DPP applies is
 * whether we ingest buyer PII at all.
 *
 * @see https://developer-docs.amazon.com/sp-api/docs/security-compliance-overview
 */
export const AMAZON_DPP = {
  /** PII from orders: no longer than 30 days after order delivery, unless a
   *  law (tax, regulatory) requires longer and only for that purpose. */
  piiRetentionDays: 30,
  /** Security incidents must be reported to security@amazon.com. */
  incidentNotificationHours: 24,
  /** Logs must exclude PII and be retained at least this long. */
  logRetentionMinimumDays: 90,
  ingestsBuyerPii:
    "TODO: confirm whether SellAvant ingests Amazon buyer PII (names, shipping addresses, phone numbers) at all. If the product can work from anonymized or aggregated order data, not ingesting it removes most of the Data Protection Policy burden and should be the default.",
} as const;

export type Product = {
  name: string;
  description: string;
  url: string;
  termsUrl: string;
  privacyUrl: string;
  /** Product-specific data categories, shown in the privacy policy table. */
  data: string;
};

export const PRODUCTS: readonly Product[] = [
  {
    name: "SellAvant",
    description: "Selling assistant for Amazon sellers.",
    url: "https://sellavant.com",
    termsUrl: "https://sellavant.com/terms",
    privacyUrl: "https://sellavant.com/privacy",
    data: "Amazon Seller Central connection and authorization tokens, listings, inventory, pricing, order and settlement data, advertising and performance metrics, and account information.",
  },
  {
    name: "ScanSafeguard",
    description: "AI-powered security scanning.",
    url: "https://scansafeguard.com",
    termsUrl: "https://scansafeguard.com/terms",
    privacyUrl: "https://scansafeguard.com/privacy",
    data: "Scan targets you supply, scan configuration, scan results and findings, and account information.",
  },
  {
    name: "MyAwesomeResume",
    description: "AI-powered resume management.",
    url: "https://myawesomeresume.com",
    termsUrl: "https://myawesomeresume.com/terms",
    privacyUrl: "https://myawesomeresume.com/privacy",
    data: "Resume content, career and employment history you enter, generated documents, and account information.",
  },
] as const;

export const PRODUCT_NAMES = PRODUCTS.map((product) => product.name);

/** "SellAvant, ScanSafeguard, and MyAwesomeResume" */
export const productList = (conjunction: "and" | "or" = "and") => {
  const names = PRODUCT_NAMES;
  if (names.length < 3) return names.join(` ${conjunction} `);
  return `${names.slice(0, -1).join(", ")}, ${conjunction} ${names[names.length - 1]}`;
};

/**
 * Named subprocessors, disclosed in the privacy policy. Keep this list
 * accurate — it is the list customers and their security reviewers rely on.
 */
export const SUBPROCESSORS: readonly { name: string; purpose: string }[] = [
  { name: "Stripe", purpose: "Payment processing, subscription billing, and invoicing." },
  { name: "Vercel", purpose: "Application hosting and content delivery." },
  { name: "PostHog", purpose: "Product analytics and usage measurement." },
  {
    name: "TODO: AI providers",
    purpose:
      "TODO: name each model provider used across the products (for example Anthropic or OpenAI) and confirm each one's zero-retention / no-training terms.",
  },
  {
    name: "TODO: email provider",
    purpose: "TODO: name the transactional email provider used for account and support mail.",
  },
];
