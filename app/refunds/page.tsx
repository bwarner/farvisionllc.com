import type { Metadata } from "next";
import Link from "next/link";
import PolicyStyles from "../policy-styles";
import { PolicyBody, PolicyToc, type PolicySection } from "@/components/policy";
import {
  COMPANY,
  POLICY_EFFECTIVE_ISO,
  POLICY_EFFECTIVE_LABEL,
  POLICY_VERSION,
  productList,
} from "../lib/legal";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: `Refund and cancellation policy for ${COMPANY.legalName} products, including ${productList()}.`,
  alternates: { canonical: "/refunds" },
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
    title: "What this covers",
    body: (
      <p>
        This policy applies to every purchase from {COMPANY.legalName},
        including {productList()}. All purchases are processed through a single{" "}
        {COMPANY.legalName} Stripe account and appear on your statement as{" "}
        <strong>{COMPANY.statementDescriptor}</strong>. It forms part of our{" "}
        <Link href="/terms" className="policy-link">
          Terms of Service
        </Link>
        .
      </p>
    ),
  },
  {
    id: "cancellation",
    title: "Cancelling a subscription",
    body: (
      <>
        <p>
          You can cancel at any time from the billing portal in your product
          account. Cancellation stops all future charges and takes effect at the
          end of the current billing period — you keep access until then. No
          phone call or retention conversation is required.
        </p>
        <p>
          If you cannot reach the billing portal, email {email} and we will
          cancel it for you.
        </p>
      </>
    ),
  },
  {
    id: "eligibility",
    title: "When we issue refunds",
    body: (
      <>
        <p>We refund a charge when:</p>
        <ul className="policy-bullets">
          <li>you were charged in error or charged more than once;</li>
          <li>
            you paid for a product or plan you could not access because of a
            problem on our side;
          </li>
          <li>
            you were charged for a renewal you had already cancelled; or
          </li>
          <li>a refund is required by applicable law.</li>
        </ul>
        <p>
          Other requests are reviewed case by case. We generally do not refund
          time already used on a subscription, or usage-based charges for
          services already delivered.
        </p>
      </>
    ),
  },
  {
    id: "how-to-request",
    title: "How to request a refund",
    body: (
      <p>
        Email {email} within <strong>14 days</strong> of the charge from the
        address on your account. Include the product name, the charge date and
        amount, and what went wrong. We aim to respond within 3 business days.
      </p>
    ),
  },
  {
    id: "timing",
    title: "How refunds are paid",
    body: (
      <p>
        Approved refunds are returned to the original payment method. Once we
        issue the refund, banks and card networks typically take 5&ndash;10
        business days to post the credit to your account. We cannot refund to a
        different payment method.
      </p>
    ),
  },
  {
    id: "disputes",
    title: "Before you file a chargeback",
    body: (
      <p>
        If you do not recognize a charge, it is almost certainly a{" "}
        {COMPANY.legalName} product you subscribed to — we are the merchant of
        record for {productList()}. Contacting us at {email} is faster than a
        chargeback: we can usually resolve a billing problem in a few days,
        while a bank dispute takes weeks and results in the account being
        suspended while it is open.
      </p>
    ),
  },
];

export default function RefundsPage() {
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
            / Refund Policy
          </p>

          <h1>Refund Policy</h1>
          <p className="policy-lead">
            How cancellations and refunds work for {COMPANY.legalName} products.
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
            <Link href="/privacy" className="policy-link">
              Privacy Policy
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
