import type { Metadata } from "next";
import Link from "next/link";
import PolicyStyles from "../policy-styles";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Customer support, billing, refunds, and product help for Farvision LLC products.",
  robots: { index: true, follow: true },
};

const products = [
  {
    name: "SellAvant",
    description: "Sales and commerce automation software.",
    url: "https://sellavant.com",
  },
  {
    name: "ScanSafeguard",
    description: "AI-powered security scanning.",
    url: "https://scansafeguard.com",
  },
  {
    name: "MyAwesomeResume",
    description: "AI-powered resume management.",
    url: "https://myawesomeresume.com",
  },
] as const;

export default function SupportPage() {
  return (
    <>
      <PolicyStyles />
      <main className="policy-page">
        <div className="policy-container">
          <p className="policy-breadcrumb">
            <Link href="/" className="policy-link">
              Farvision LLC
            </Link>{" "}
            / Support
          </p>

          <h1>Support</h1>
          <p className="policy-lead">
            Farvision LLC operates SellAvant, ScanSafeguard, and
            MyAwesomeResume. Use this page for customer support, billing
            questions, refunds, cancellations, and product access help.
          </p>

          <section className="policy-section">
            <h2>Contact</h2>
            <p>
              Email support and billing questions to{" "}
              <a href="mailto:info@farvisionllc.com" className="policy-link">
                info@farvisionllc.com
              </a>
              . Include the product name, the email address on your account, and
              a short description of the issue. Do not send full credit card
              numbers.
            </p>
            <p>We aim to respond within 2 business days.</p>
          </section>

          <section className="policy-block">
            <h2>Products</h2>
            <ul className="policy-list">
              {products.map((product) => (
                <li key={product.name} className="policy-section">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <a
                    href={product.url}
                    className="policy-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit product site
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className="policy-section">
            <h2>Billing</h2>
            <p>
              Charges may appear on your bank or card statement under Farvision
              LLC or the relevant product name. Payments are processed securely
              by Stripe.
            </p>
            <p>
              For invoice copies, failed payments, duplicate charges,
              subscription changes, or account access issues, email support with
              the product name and account email.
            </p>
          </section>

          <section className="policy-section">
            <h2>Refunds</h2>
            <p>
              Refund requests are reviewed case by case. If you were charged in
              error, experienced a duplicate charge, or cannot access a product
              you paid for, contact us within 14 days of the charge.
            </p>
            <p>
              Approved refunds are returned to the original payment method.
              After a refund is issued, banks and card networks may take 5-10
              business days to post the credit.
            </p>
          </section>

          <section className="policy-section">
            <h2>Cancellations</h2>
            <p>
              Subscription customers can cancel before the next renewal to stop
              future charges. If you cannot cancel from the product account
              area, email support and we will help process the cancellation.
            </p>
          </section>

          <p className="policy-note">
            Legal policies:{" "}
            <Link href="/terms" className="policy-link">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="policy-link">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </main>
    </>
  );
}
