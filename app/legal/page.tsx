import type { Metadata } from "next";
import Link from "next/link";
import PolicyStyles from "../policy-styles";
import {
  COMPANY,
  POLICY_EFFECTIVE_ISO,
  POLICY_EFFECTIVE_LABEL,
  POLICY_VERSION,
  PRODUCTS,
  productList,
} from "../lib/legal";

export const metadata: Metadata = {
  title: "Legal",
  description: `Terms of Service, Privacy Policy, and Refund Policy for ${COMPANY.legalName} products: ${productList()}.`,
  alternates: { canonical: "/legal" },
  robots: { index: true, follow: true },
};

const policies = [
  {
    href: "/terms",
    name: "Terms of Service",
    description:
      "The master agreement. Governs billing, renewals, warranties, liability, and governing law for every product.",
  },
  {
    href: "/privacy",
    name: "Privacy Policy",
    description:
      "How we collect, use, share, and retain information across all products.",
  },
  {
    href: "/refunds",
    name: "Refund Policy",
    description: "Cancellations, refund eligibility, and how refunds are paid.",
  },
] as const;

export default function LegalPage() {
  return (
    <>
      <PolicyStyles />
      <main className="policy-page">
        <div className="policy-container">
          <p className="policy-breadcrumb">
            <Link href="/" className="policy-link">
              {COMPANY.legalName}
            </Link>{" "}
            / Legal
          </p>
          <h1>Legal</h1>
          <p className="policy-lead">
            {COMPANY.legalName} is the provider and merchant of record for{" "}
            {productList()}. These company-level policies govern all of them.
          </p>
          <p className="policy-meta">
            <strong>Version {POLICY_VERSION}</strong> &middot; Effective{" "}
            <time dateTime={POLICY_EFFECTIVE_ISO}>{POLICY_EFFECTIVE_LABEL}</time>
          </p>

          <h2 className="policy-heading">Company policies</h2>
          <ul className="policy-list">
            {policies.map((policy) => (
              <li key={policy.href} className="policy-section">
                <h2>
                  <Link href={policy.href} className="policy-link">
                    {policy.name}
                  </Link>
                </h2>
                <p>{policy.description}</p>
              </li>
            ))}
          </ul>

          <h2 className="policy-heading">Products and supplemental terms</h2>
          <p>
            Each product may publish supplemental terms and a privacy notice
            covering that product&rsquo;s features. Those documents apply in
            addition to the company policies above, which control in the event
            of a conflict.
          </p>
          <ul className="policy-list">
            {PRODUCTS.map((product) => (
              <li key={product.name} className="policy-section">
                <h2>
                  <a
                    href={product.url}
                    className="policy-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {product.name}
                  </a>
                </h2>
                <p>{product.description}</p>
                <p className="policy-actions">
                  <a
                    href={product.termsUrl}
                    className="policy-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Supplemental terms
                  </a>
                  <a
                    href={product.privacyUrl}
                    className="policy-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy notice
                  </a>
                </p>
              </li>
            ))}
          </ul>

          <p className="policy-note">
            Questions? Contact{" "}
            <a href={`mailto:${COMPANY.email}`} className="policy-link">
              {COMPANY.email}
            </a>
            .
          </p>
        </div>
      </main>
    </>
  );
}
