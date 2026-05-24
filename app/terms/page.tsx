import type { Metadata } from "next";
import Link from "next/link";
import PolicyStyles from "../policy-styles";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Farvision LLC products, including SellAvant, ScanSafeguard, and MyAwesomeResume.",
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <PolicyStyles />
      <main className="policy-page">
        <div className="policy-container">
          <p className="policy-breadcrumb">
            <Link href="/" className="policy-link">
              Farvision LLC
            </Link>{" "}
            / Terms of Service
          </p>

          <h1>Terms of Service</h1>
          <p className="policy-lead">
            These Terms of Service apply to Farvision LLC and its products,
            including SellAvant, ScanSafeguard, and MyAwesomeResume.
          </p>

          <section className="policy-section">
            <h2>Last updated</h2>
            <p>May 14, 2026</p>
          </section>

          <section className="policy-section">
            <h2>Acceptance of terms</h2>
            <p>
              By accessing or using a Farvision LLC product or website, you agree
              to these Terms. If you do not agree, do not use the product.
            </p>
          </section>

          <section className="policy-section">
            <h2>Products covered</h2>
            <p>
              Farvision LLC operates software products and websites including
              SellAvant, ScanSafeguard, and MyAwesomeResume. Product-specific
              features, prices, plans, and usage limits may be shown inside each
              product or at checkout.
            </p>
          </section>

          <section className="policy-section">
            <h2>Accounts</h2>
            <p>
              You are responsible for maintaining access to the email address
              and credentials associated with your account. You are also
              responsible for activity that occurs under your account.
            </p>
            <p>
              You must provide accurate account and billing information and keep
              it current.
            </p>
          </section>

          <section className="policy-section">
            <h2>Payments and billing</h2>
            <p>
              Paid products, subscriptions, or usage-based services are billed
              according to the plan or checkout terms presented when you
              purchase. Payments are processed by Stripe.
            </p>
            <p>
              Charges may appear on your bank or card statement under Farvision
              LLC or the relevant product name.
            </p>
          </section>

          <section className="policy-section">
            <h2>Cancellations</h2>
            <p>
              Subscription customers may cancel before the next renewal to stop
              future charges. If cancellation is not available in the product
              account area, email support at{" "}
              <a href="mailto:info@farvisionllc.com" className="policy-link">
                info@farvisionllc.com
              </a>
              .
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
              Banks and card networks may take 5-10 business days to post the
              credit after a refund is issued.
            </p>
          </section>

          <section className="policy-section">
            <h2>Acceptable use</h2>
            <p>
              You may not misuse the products, interfere with their operation,
              attempt unauthorized access, reverse engineer non-public systems,
              submit unlawful or harmful content, or use the products in a way
              that violates applicable law or another party's rights.
            </p>
          </section>

          <section className="policy-section">
            <h2>User content</h2>
            <p>
              Some products may allow you to upload, submit, scan, generate, or
              store content. You retain ownership of your content, but grant
              Farvision LLC the limited rights needed to operate, provide,
              secure, and improve the products.
            </p>
            <p>
              You are responsible for ensuring you have the rights and
              permissions needed for content you submit.
            </p>
          </section>

          <section className="policy-section">
            <h2>Service changes</h2>
            <p>
              We may change, suspend, or discontinue product features as needed
              to improve the products, maintain security, comply with law, or
              manage operational constraints.
            </p>
          </section>

          <section className="policy-section">
            <h2>Disclaimer</h2>
            <p>
              Products are provided "as is" and "as available." Farvision LLC
              does not guarantee that products will be uninterrupted,
              error-free, or suitable for every use case.
            </p>
          </section>

          <section className="policy-section">
            <h2>Limitation of liability</h2>
            <p>
              To the maximum extent permitted by law, Farvision LLC will not be
              liable for indirect, incidental, special, consequential, or
              punitive damages, or for lost profits, revenue, data, or business
              opportunities.
            </p>
          </section>

          <section className="policy-section">
            <h2>Contact</h2>
            <p>
              Questions about these Terms can be sent to{" "}
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
