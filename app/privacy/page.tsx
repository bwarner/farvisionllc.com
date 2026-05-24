import type { Metadata } from "next";
import Link from "next/link";
import PolicyStyles from "../policy-styles";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Farvision LLC products, including SellAvant, ScanSafeguard, and MyAwesomeResume.",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <PolicyStyles />
      <main className="policy-page">
        <div className="policy-container">
          <p className="policy-breadcrumb">
            <Link href="/" className="policy-link">
              Farvision LLC
            </Link>{" "}
            / Privacy Policy
          </p>

          <h1>Privacy Policy</h1>
          <p className="policy-lead">
            This Privacy Policy explains how Farvision LLC handles information
            for its products, including SellAvant, ScanSafeguard, and
            MyAwesomeResume.
          </p>

          <section className="policy-section">
            <h2>Last updated</h2>
            <p>May 14, 2026</p>
          </section>

          <section className="policy-section">
            <h2>Information we collect</h2>
            <p>
              We may collect account information such as your name, email
              address, company name, billing details, product usage data, support
              messages, and information you submit to a product.
            </p>
            <p>
              The exact information collected depends on the product you use and
              the features you enable.
            </p>
          </section>

          <section className="policy-section">
            <h2>Product data</h2>
            <p>
              Product data may include sales or commerce workflow information in
              SellAvant, security scan targets and scan results in
              ScanSafeguard, and resume or career-related content in
              MyAwesomeResume.
            </p>
            <p>
              We use this data to provide the product features you request,
              maintain security, troubleshoot issues, and improve product
              reliability.
            </p>
          </section>

          <section className="policy-section">
            <h2>Payments</h2>
            <p>
              Payments are processed by Stripe. Farvision LLC does not store full
              credit card numbers. We may receive payment status, billing
              contact information, invoice details, and limited payment metadata
              from Stripe to manage billing and support.
            </p>
          </section>

          <section className="policy-section">
            <h2>How we use information</h2>
            <p>
              We use information to provide and operate the products, process
              payments, authenticate users, respond to support requests,
              maintain security, detect abuse, improve features, and comply with
              legal obligations.
            </p>
          </section>

          <section className="policy-section">
            <h2>Service providers</h2>
            <p>
              We may share information with service providers that help us run
              the products, such as hosting, analytics, email, AI infrastructure,
              payment processing, security, database, and customer support
              providers. These providers are used only as needed to operate the
              business and products.
            </p>
          </section>

          <section className="policy-section">
            <h2>Cookies and analytics</h2>
            <p>
              We may use cookies, similar technologies, and analytics tools to
              understand product usage, improve performance, remember
              preferences, and help secure accounts.
            </p>
          </section>

          <section className="policy-section">
            <h2>Data retention</h2>
            <p>
              We keep information for as long as needed to provide the products,
              comply with legal and accounting requirements, resolve disputes,
              enforce agreements, and maintain backups and security records.
            </p>
          </section>

          <section className="policy-section">
            <h2>Security</h2>
            <p>
              We use reasonable technical and organizational safeguards to
              protect information. No online service can guarantee perfect
              security, but we work to reduce risk and respond to security
              issues promptly.
            </p>
          </section>

          <section className="policy-section">
            <h2>Your choices</h2>
            <p>
              You may request access, correction, deletion, or export of
              personal information by contacting us. Some requests may be limited
              by legal, security, fraud-prevention, or product-operation needs.
            </p>
          </section>

          <section className="policy-section">
            <h2>Children</h2>
            <p>
              Farvision LLC products are not intended for children under 13, and
              we do not knowingly collect personal information from children
              under 13.
            </p>
          </section>

          <section className="policy-section">
            <h2>Changes</h2>
            <p>
              We may update this Privacy Policy from time to time. The updated
              version will be posted on this page with a new last updated date.
            </p>
          </section>

          <section className="policy-section">
            <h2>Contact</h2>
            <p>
              Privacy questions or requests can be sent to{" "}
              <a href="mailto:info@farvisionllc.com" className="policy-link">
                info@farvisionllc.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
