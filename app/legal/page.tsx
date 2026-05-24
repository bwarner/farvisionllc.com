import type { Metadata } from "next";
import Link from "next/link";
import PolicyStyles from "../policy-styles";

export const metadata: Metadata = {
  title: "Legal",
  description:
    "Terms of Service and Privacy Policy for Farvision LLC products: SellAvant, ScanSafeguard, and MyAwesomeResume.",
  robots: { index: true, follow: true },
};

const products = [
  {
    name: "SellAvant",
    description: "Sales and commerce automation software.",
  },
  {
    name: "ScanSafeguard",
    description: "AI-powered security scanning.",
  },
  {
    name: "MyAwesomeResume",
    description: "AI-powered resume management.",
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
              Farvision LLC
            </Link>{" "}
            / Legal
          </p>
          <h1>Legal</h1>
          <p className="policy-lead">
            Farvision LLC provides company-level legal policies for SellAvant,
            ScanSafeguard, and MyAwesomeResume.
          </p>

          <section className="policy-section">
            <h2>Policies</h2>
            <div className="policy-actions">
              <Link href="/terms" className="policy-link">
                Terms of Service
              </Link>
              <Link href="/privacy" className="policy-link">
                Privacy Policy
              </Link>
            </div>
          </section>

          <h2 className="policy-heading">Covered products</h2>
          <ul className="policy-list">
            {products.map((product) => (
              <li key={product.name} className="policy-section">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
              </li>
            ))}
          </ul>

          <p className="policy-note">
            Questions? Contact{" "}
            <a href="mailto:info@farvisionllc.com" className="policy-link">
              info@farvisionllc.com
            </a>
            .
          </p>
        </div>
      </main>
    </>
  );
}
