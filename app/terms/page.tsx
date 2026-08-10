import type { Metadata } from "next";
import Link from "next/link";
import PolicyStyles from "../policy-styles";
import { PolicyBody, PolicyToc, ReviewNote, type PolicySection } from "@/components/policy";
import {
  COMPANY,
  POLICY_EFFECTIVE_ISO,
  POLICY_EFFECTIVE_LABEL,
  POLICY_VERSION,
  PRODUCTS,
  STORES,
  productList,
} from "../lib/legal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Master Terms of Service for ${COMPANY.legalName} products, including ${productList()}.`,
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

const email = (
  <a href={`mailto:${COMPANY.email}`} className="policy-link">
    {COMPANY.email}
  </a>
);

const sections: readonly PolicySection[] = [
  {
    id: "agreement",
    title: "Agreement to these Terms",
    body: (
      <>
        <p>
          These Terms of Service (the &ldquo;Terms&rdquo;) are a binding
          agreement between you and {COMPANY.legalName}. By creating an account,
          purchasing a subscription, or otherwise accessing or using any{" "}
          {COMPANY.legalName} product or website, you agree to these Terms. If
          you do not agree, do not use the products.
        </p>
        <p>
          If you accept these Terms on behalf of a company or other
          organization, you represent that you are authorized to bind that
          organization, and &ldquo;you&rdquo; refers to that organization.
        </p>
      </>
    ),
  },
  {
    id: "entity",
    title: "Who you are contracting with",
    body: (
      <>
        <p>
          {COMPANY.legalName} is the provider of the products and the merchant
          of record for every charge made through them. Payments are processed
          by Stripe under a single {COMPANY.legalName} account, and charges
          appear on your card or bank statement as{" "}
          <strong>{COMPANY.statementDescriptor}</strong>, which may be shown
          alongside the relevant product name.
        </p>
        <p>
          This is true regardless of which product you purchased or which
          product website you signed up on.
        </p>
        <p>
          {COMPANY.legalName} also operates retail brands that sell physical
          goods, including{" "}
          {STORES.map((store) => store.name).join(", ")}. Those sales are not
          covered by these Terms, use a different payment processor and
          statement descriptor, and are governed by that store&rsquo;s own
          terms, shipping, and return policies. Our{" "}
          <Link href="/privacy" className="policy-link">
            Privacy Policy
          </Link>{" "}
          covers both.
        </p>
        <ReviewNote>
          Add the entity&rsquo;s {COMPANY.formationState} and a mailing address
          for legal notices: {COMPANY.mailingAddress}. Payment reviewers and app
          stores both look for these.
        </ReviewNote>
      </>
    ),
  },
  {
    id: "products",
    title: "Products covered",
    body: (
      <>
        <p>
          These Terms apply to {COMPANY.legalName} and all of its software
          products and websites, currently:
        </p>
        <ul className="policy-bullets">
          {PRODUCTS.map((product) => (
            <li key={product.name}>
              <a
                href={product.url}
                className="policy-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {product.name}
              </a>{" "}
              &mdash; {product.description}
            </li>
          ))}
        </ul>
        <p>
          Features, prices, plans, and usage limits are specific to each product
          and are shown inside the product or at checkout.
        </p>
      </>
    ),
  },
  {
    id: "supplemental-terms",
    title: "Product-specific supplemental terms",
    body: (
      <>
        <p>
          Individual products may publish supplemental terms that describe that
          product&rsquo;s features and permitted use. Those supplemental terms
          apply in addition to these Terms.
        </p>
        <p>
          These Terms govern billing, payments, renewals, refunds, cancellation,
          warranties, limitation of liability, indemnification, and governing
          law for every product, and <strong>control in the event of any
          conflict</strong> with product-specific supplemental terms.
          Supplemental terms govern that product&rsquo;s features and permitted
          use.
        </p>
        <div className="policy-table-wrap">
          <table className="policy-table">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Supplemental terms</th>
                <th scope="col">Product privacy notice</th>
              </tr>
            </thead>
            <tbody>
              {PRODUCTS.map((product) => (
                <tr key={product.name}>
                  <th scope="row">{product.name}</th>
                  <td>
                    <a
                      href={product.termsUrl}
                      className="policy-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {product.termsUrl.replace("https://", "")}
                    </a>
                  </td>
                  <td>
                    <a
                      href={product.privacyUrl}
                      className="policy-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {product.privacyUrl.replace("https://", "")}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    id: "accounts",
    title: "Accounts",
    body: (
      <>
        <p>
          You are responsible for maintaining access to the email address and
          credentials associated with your account, and for activity that occurs
          under your account.
        </p>
        <p>
          You must provide accurate account and billing information and keep it
          current. You must be at least 18 years old, or the age of majority
          where you live, to hold an account.
        </p>
      </>
    ),
  },
  {
    id: "license",
    title: "License and intellectual property",
    body: (
      <>
        <p>
          Subject to these Terms and your payment of applicable fees,{" "}
          {COMPANY.legalName} grants you a limited, non-exclusive,
          non-transferable, revocable right to access and use the products for
          your own internal or personal purposes.
        </p>
        <p>
          {COMPANY.legalName} and its licensors retain all right, title, and
          interest in and to the products, including all software, models,
          interfaces, documentation, trademarks, and related intellectual
          property. No rights are granted except those expressly stated here.
        </p>
        <p>
          If you send us feedback or suggestions, we may use them without
          restriction or obligation to you.
        </p>
      </>
    ),
  },
  {
    id: "payments",
    title: "Payments, billing, and taxes",
    body: (
      <>
        <p>
          Paid products, subscriptions, and usage-based services are billed
          according to the plan or checkout terms presented when you purchase.
          Payments are processed by Stripe; {COMPANY.legalName} does not store
          full payment card numbers.
        </p>
        <p>
          You authorize us and our payment processor to charge your payment
          method for all fees you incur. If a charge fails, we may retry it and
          may suspend access until payment succeeds.
        </p>
        <p>
          Prices are exclusive of taxes unless stated otherwise. You are
          responsible for any sales, use, VAT, GST, or similar taxes, excluding
          taxes based on our net income.
        </p>
      </>
    ),
  },
  {
    id: "renewal",
    title: "Subscription renewal and price changes",
    body: (
      <>
        <p>
          Subscriptions renew automatically at the end of each billing period —
          monthly for monthly plans and annually for annual plans — at the
          then-current price, and continue to renew until you cancel. The
          renewal date and amount for your plan are shown in the billing portal.
        </p>
        <p>
          We will give you advance notice by email before any price increase
          takes effect for your subscription. If you do not agree to the new
          price, you may cancel before the increase takes effect.
        </p>
        <p>
          Free trials, if offered, convert to a paid subscription at the end of
          the trial unless you cancel before the trial ends.
        </p>
      </>
    ),
  },
  {
    id: "cancellation",
    title: "Cancellation",
    body: (
      <>
        <p>
          You can cancel a subscription at any time from the billing portal
          inside your product account. Cancellation stops future charges and
          takes effect at the end of the current billing period; you keep access
          until then. No separate call, chat, or retention conversation is
          required.
        </p>
        <p>
          If you cannot reach the billing portal for any reason, email {email}{" "}
          and we will process the cancellation for you.
        </p>
      </>
    ),
  },
  {
    id: "refunds",
    title: "Refunds",
    body: (
      <>
        <p>
          Our full refund policy is set out at{" "}
          <Link href="/refunds" className="policy-link">
            farvisionllc.com/refunds
          </Link>{" "}
          and forms part of these Terms.
        </p>
        <p>
          In summary: refund requests are reviewed case by case. If you were
          charged in error, charged twice, or cannot access a product you paid
          for, contact us within 14 days of the charge. Approved refunds are
          returned to the original payment method, and banks and card networks
          may take 5&ndash;10 business days to post the credit.
        </p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    body: (
      <>
        <p>You may not:</p>
        <ul className="policy-bullets">
          <li>
            misuse the products or interfere with their operation, security, or
            availability;
          </li>
          <li>
            attempt unauthorized access to any system, account, or data, or
            reverse engineer non-public systems;
          </li>
          <li>
            submit unlawful, infringing, or harmful content, or use the products
            to harass, defraud, or harm others;
          </li>
          <li>
            resell, sublicense, or provide the products as a service to third
            parties without our written agreement;
          </li>
          <li>
            use automated means to scrape or extract data beyond documented
            rate limits and API terms;
          </li>
          <li>
            use a product to violate the terms or policies of a marketplace or
            third-party service you have connected to it, including Amazon
            seller and API policies; or
          </li>
          <li>
            use the products in violation of applicable law or another
            party&rsquo;s rights.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "authorized-testing",
    title: "Authorized security testing",
    body: (
      <>
        <p>
          This section applies to ScanSafeguard and any other {COMPANY.shortName}{" "}
          product that performs security scanning or testing against a target
          you specify.
        </p>
        <p>
          You represent and warrant that, for every target you submit, you
          either own the target or have express written authorization from the
          owner to conduct the scanning or testing you initiate, and that your
          use complies with all applicable computer-misuse, anti-hacking, and
          data-protection laws.
        </p>
        <p>
          You are solely responsible for verifying that authorization before
          initiating a scan. You agree to indemnify {COMPANY.legalName} against
          any claim arising from scanning a target you were not authorized to
          scan. We may suspend scans or accounts immediately where we believe
          authorization is absent.
        </p>
        <p>
          Scan results are informational. They do not guarantee that a system is
          secure or compliant, and they are not a substitute for a professional
          security assessment.
        </p>
      </>
    ),
  },
  {
    id: "ai-output",
    title: "AI-generated output",
    body: (
      <>
        <p>
          Several products use AI models to generate output, including scan
          findings and resume or career content. AI output can be inaccurate,
          incomplete, or misleading, and similar output may be generated for
          other users.
        </p>
        <p>
          Output is provided for your evaluation and is not professional
          security, legal, financial, employment, or career advice. You are
          responsible for reviewing and verifying output before relying on it or
          sharing it with others.
        </p>
      </>
    ),
  },
  {
    id: "user-content",
    title: "Your content",
    body: (
      <>
        <p>
          Some products allow you to upload, submit, scan, generate, or store
          content. You retain ownership of your content. You grant{" "}
          {COMPANY.legalName} a limited, non-exclusive license to host, process,
          transmit, and display that content solely as needed to operate,
          provide, secure, support, and improve the products for you.
        </p>
        <p>
          You are responsible for ensuring you have the rights and permissions
          needed for content you submit, and for keeping your own copies of
          anything important.
        </p>
      </>
    ),
  },
  {
    id: "third-party",
    title: "Third-party services and connected accounts",
    body: (
      <>
        <p>
          The products rely on third-party services, and may let you connect
          your own third-party accounts. Those services are governed by their
          own terms and privacy policies, and we are not responsible for their
          acts, omissions, availability, or content. Disconnecting or losing
          access to a third-party service may limit product functionality.
        </p>
        <p>
          <strong>Amazon marketplace connections.</strong> SellAvant connects to
          your Amazon Seller Central account through the Amazon Selling Partner
          API, with your authorization. You remain responsible for complying
          with Amazon&rsquo;s seller policies, program terms, and applicable
          marketplace rules when using SellAvant, and you may revoke our access
          from Seller Central at any time. Amazon may change, restrict, or
          withdraw API access at any time, which can affect features without
          notice.
        </p>
        <p>
          {COMPANY.legalName} and its products are independent and are not
          affiliated with, sponsored by, or endorsed by Amazon. Amazon, Amazon
          Seller Central, and related marks are trademarks of Amazon.com, Inc.
          or its affiliates.
        </p>
      </>
    ),
  },
  {
    id: "suspension",
    title: "Suspension and termination",
    body: (
      <>
        <p>
          You may stop using the products and close your account at any time. We
          may suspend or terminate your access if you breach these Terms, fail
          to pay, use the products in a way that creates legal or security risk
          for us or others, or if required by law. Where practical, we will give
          you notice and an opportunity to correct the problem first.
        </p>
        <p>
          After termination, we may delete your content in accordance with our{" "}
          <Link href="/privacy#retention" className="policy-link">
            data retention practices
          </Link>
          . Export anything you need before closing your account. Sections that
          by their nature should survive termination — including fees owed,
          disclaimers, limitation of liability, indemnification, and governing
          law — survive.
        </p>
      </>
    ),
  },
  {
    id: "service-changes",
    title: "Changes to the products",
    body: (
      <p>
        We may change, suspend, or discontinue product features as needed to
        improve the products, maintain security, comply with law, or manage
        operational constraints. If we discontinue a paid product entirely, we
        will give reasonable notice and refund any prepaid, unused fees for the
        remainder of the term.
      </p>
    ),
  },
  {
    id: "terms-changes",
    title: "Changes to these Terms",
    body: (
      <p>
        We may update these Terms from time to time. The current version and its
        effective date are shown at the top of this page. For material changes
        we will give notice by email or in-product before they take effect, and
        continued use of the products after the effective date means you accept
        the updated Terms.
      </p>
    ),
  },
  {
    id: "disclaimer",
    title: "Disclaimer of warranties",
    body: (
      <p>
        To the maximum extent permitted by law, the products are provided
        &ldquo;as is&rdquo; and &ldquo;as available,&rdquo; without warranties of
        any kind, whether express, implied, or statutory, including any implied
        warranties of merchantability, fitness for a particular purpose, title,
        and non-infringement. {COMPANY.legalName} does not warrant that the
        products will be uninterrupted, timely, secure, error-free, or suitable
        for any particular use case. Some jurisdictions do not allow the
        exclusion of certain warranties, so some of these exclusions may not
        apply to you.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    body: (
      <>
        <p>
          To the maximum extent permitted by law, {COMPANY.legalName} will not
          be liable for any indirect, incidental, special, consequential,
          exemplary, or punitive damages, or for lost profits, revenue, data,
          goodwill, or business opportunities, whether or not we were advised of
          the possibility of those damages.
        </p>
        <ReviewNote>
          A monetary cap on <em>direct</em> damages still needs to be set —{" "}
          {COMPANY.liabilityCap}. The exclusion above only covers indirect
          damages; the cap is the half that actually limits exposure.
        </ReviewNote>
        <p>
          Some jurisdictions do not allow certain limitations of liability, so
          some of these limitations may not apply to you.
        </p>
      </>
    ),
  },
  {
    id: "indemnification",
    title: "Indemnification",
    body: (
      <p>
        You agree to defend, indemnify, and hold harmless {COMPANY.legalName}{" "}
        and its officers, members, employees, and agents from any claim, demand,
        loss, liability, or expense, including reasonable legal fees, arising
        out of your content, your use of the products, your violation of these
        Terms or applicable law, or your violation of any third party&rsquo;s
        rights — including any unauthorized scanning or testing described in{" "}
        <a href="#authorized-testing" className="policy-link">
          Authorized security testing
        </a>
        .
      </p>
    ),
  },
  {
    id: "disputes",
    title: "Governing law and disputes",
    body: (
      <>
        <p>
          Before filing a claim, you agree to try to resolve the dispute
          informally by contacting {email}. We will try to resolve it with you
          in good faith within 30 days.
        </p>
        <ReviewNote>
          Governing law, venue, and dispute mechanism are unset and are the most
          important gap on this page. Governing law: {COMPANY.governingLaw}.
          Venue: {COMPANY.venue}. Mechanism: {COMPANY.disputeResolution}.
        </ReviewNote>
      </>
    ),
  },
  {
    id: "general",
    title: "General terms",
    body: (
      <>
        <p>
          These Terms, together with any product-specific supplemental terms and
          our{" "}
          <Link href="/privacy" className="policy-link">
            Privacy Policy
          </Link>
          , are the entire agreement between you and {COMPANY.legalName}{" "}
          regarding the products, and supersede any prior agreements on that
          subject.
        </p>
        <p>
          If any provision is found unenforceable, the rest remains in effect
          and the unenforceable provision is modified to the minimum extent
          needed. Our failure to enforce a provision is not a waiver of it.
        </p>
        <p>
          You may not assign these Terms without our written consent. We may
          assign them to an affiliate or in connection with a merger,
          acquisition, or sale of assets.
        </p>
        <p>
          Neither party is liable for delays or failures caused by events beyond
          its reasonable control. We may send notices to the email address on
          your account; legal notices to us should be sent to {email} and to the
          mailing address in{" "}
          <a href="#entity" className="policy-link">
            Who you are contracting with
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: <p>Questions about these Terms can be sent to {email}.</p>,
  },
];

export default function TermsPage() {
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
            / Terms of Service
          </p>

          <h1>Terms of Service</h1>
          <p className="policy-lead">
            These are the master Terms of Service for {COMPANY.legalName} and
            its products, including {productList()}. They govern billing,
            refunds, and liability for every product, and control over any
            product-specific supplemental terms.
          </p>
          <p className="policy-meta">
            <strong>Version {POLICY_VERSION}</strong> &middot; Effective{" "}
            <time dateTime={POLICY_EFFECTIVE_ISO}>{POLICY_EFFECTIVE_LABEL}</time>
          </p>

          <PolicyToc sections={sections} />
          <PolicyBody sections={sections} />

          <p className="policy-note">
            Related:{" "}
            <Link href="/privacy" className="policy-link">
              Privacy Policy
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
