# Aligning a product repo with the Farvision LLC master policies

Paste the prompt below into a Claude session scoped to a product repo
(SellAvant, ScanSafeguard, or MyAwesomeResume). Replace `{{PRODUCT}}` and
`{{PRODUCT_DOMAIN}}` before sending.

The canonical policies live on the company site and are the single source of
truth for anything transactional:

| Policy  | URL                                |
| ------- | ---------------------------------- |
| Terms   | https://farvisionllc.com/terms     |
| Privacy | https://farvisionllc.com/privacy   |
| Refunds | https://farvisionllc.com/refunds   |
| Index   | https://farvisionllc.com/legal     |

Current version: **2.0**, effective **2026-08-10**.

---

## The prompt

> This repo is **{{PRODUCT}}** (`{{PRODUCT_DOMAIN}}`), one of three products
> operated by **Farvision LLC**. All three bill through a single Farvision LLC
> Stripe account, and charges appear on customer statements as
> `FARVISION LLC`.
>
> Farvision LLC has just published master legal policies at
> `https://farvisionllc.com/terms`, `/privacy`, and `/refunds` (version 2.0,
> effective 2026-08-10). Those documents are now the single source of truth for
> billing, payments, renewals, refunds, cancellation, warranties, limitation of
> liability, indemnification, and governing law across every product.
>
> This product also has its own terms and privacy pages. I need them
> restructured to be **supplemental** to the master policies rather than
> parallel copies of them. Two documents that both claim to govern the same
> transaction create ambiguity that gets construed against us as the drafter.
>
> Please do the following. Read the existing pages first and tell me what you
> find before making changes if anything contradicts the plan.
>
> **1. Add the precedence clause.** Near the top of this product's terms, add:
>
> > {{PRODUCT}} is operated by Farvision LLC. Your use of {{PRODUCT}} is also
> > governed by the [Farvision LLC Terms of
> > Service](https://farvisionllc.com/terms) and [Privacy
> > Policy](https://farvisionllc.com/privacy), which are incorporated into
> > these terms by reference. Those company-level terms govern billing,
> > payments, renewals, refunds, cancellation, warranties, limitation of
> > liability, and governing law, and control in the event of any conflict with
> > these supplemental terms. These supplemental terms govern {{PRODUCT}}'s
> > features and permitted use.
> >
> > Farvision LLC is the merchant of record for all {{PRODUCT}} charges.
> > Payments are processed by Stripe and appear on your statement as
> > **FARVISION LLC**.
>
> Add the equivalent pointer to this product's privacy page, referencing the
> company privacy policy.
>
> **2. Remove what now lives at the company level.** Delete from this
> product's terms any clauses covering: payment and billing mechanics,
> subscription renewal, refunds, cancellation, taxes, warranty disclaimers,
> limitation of liability, indemnification, governing law, dispute resolution,
> assignment, severability, and entire agreement. They are all in the master
> Terms now, and a divergent local copy is worse than none. Do not delete
> anything without showing me the list first.
>
> **3. Keep only product-specific material,** for example: what {{PRODUCT}}
> does, feature-level usage rules and limits, API and rate-limit terms,
> product-specific acceptable use, product-specific data handling, and any
> AI-output disclaimers particular to this product. For ScanSafeguard
> specifically, keep the authorized-scanning warranty (the user must own the
> target or hold written authorization) — but note it is also stated in the
> master Terms at `/terms#authorized-testing`, so make the two consistent
> rather than conflicting.
>
> **3a. SellAvant only — Amazon Selling Partner API.** SellAvant connects to
> Amazon Seller Central, which puts us under [Amazon's Data Protection
> Policy](https://developer-docs.amazon.com/sp-api/docs/security-compliance-overview).
> Its requirements override our general retention schedule. Audit the codebase
> and tell me:
>
> - Do we ingest buyer PII — names, shipping addresses, phone numbers — from
>   order or report endpoints at all? If the product's features can work from
>   anonymized or aggregated order data, not ingesting PII removes most of the
>   compliance burden and is the better default. Tell me what we actually pull
>   before we write policy around it.
> - If we do ingest it: PII must be deleted **within 30 days of order
>   delivery** (including from backups) unless a tax or legal requirement
>   applies. Verify there is an actual deletion job, and that backup retention
>   does not silently hold it longer.
> - PII must be encrypted in transit and at rest, including in backup media.
> - Application logs must **not** contain PII, and must be retained at least
>   90 days for incident investigation. Check the logger for order payloads.
> - Security incidents must be reported to `security@amazon.com` within
>   **24 hours**. Confirm there is a written incident plan naming who does this.
> - SP-API refresh tokens and LWA credentials must be encrypted at rest and
>   never logged. Verify.
>
> Also add to this product's terms: the user remains responsible for complying
> with Amazon's seller policies; they can revoke our access from Seller Central
> at any time; Amazon may change or withdraw API access without notice; and a
> non-affiliation disclaimer — SellAvant and Farvision LLC are not affiliated
> with, sponsored by, or endorsed by Amazon, and Amazon marks belong to
> Amazon.com, Inc. The master Terms already say this at `/terms#third-party`,
> so keep the two consistent.
>
> **4. Confirm the contracting entity is named.** Search the whole repo — not
> just the legal pages — for anywhere the provider, seller, or contracting
> party is identified. If anything says "{{PRODUCT}}" is the provider or the
> entity being contracted with, change it to Farvision LLC. The entity taking
> the money must be the entity in the contract, or both the liability cap and
> our chargeback defense are weakened.
>
> **5. Place the links where they legally matter,** in this order:
>
> - **Signup screen** — an explicit "By creating an account you agree to the
>   Terms of Service and Privacy Policy" with real links to the
>   farvisionllc.com URLs. A footer link alone is weak clickwrap.
> - **Record the acceptance** — persist the timestamp *and* the policy version
>   string (`2.0`) on the user record at signup, so we can prove which version
>   a given user agreed to. Show me the schema change before applying it.
> - **Checkout and billing pages** — link Terms and Refunds.
> - **Global footer** — Terms, Privacy, Refunds.
> - **Account settings / deletion flow** — link Privacy next to account
>   deletion.
>
> **6. Update the Stripe billing portal wiring.** Create a product-specific
> billing portal configuration so the portal is branded for {{PRODUCT}}, but
> keep the legal URLs pointed at the company site — the statement descriptor is
> FARVISION LLC and the customer needs to land on the entity that matches it:
>
> ```ts
> const configuration = await stripe.billingPortal.configurations.create({
>   business_profile: {
>     headline: "{{PRODUCT}} billing, by Farvision LLC", // max 60 chars
>     terms_of_service_url: "https://farvisionllc.com/terms",
>     privacy_policy_url: "https://farvisionllc.com/privacy",
>   },
>   features: {
>     invoice_history: { enabled: true },
>     payment_method_update: { enabled: true },
>     customer_update: { enabled: true, allowed_updates: ["email", "address", "tax_id"] },
>     subscription_cancel: { enabled: true, mode: "at_period_end" },
>   },
> });
> ```
>
> Then pass `configuration: configuration.id` when creating portal sessions.
> Store the configuration id in an env var rather than creating it per request.
>
> `subscription_cancel` must be enabled: the master Terms now promise
> self-serve cancellation with no retention conversation, and the documents and
> the mechanism need to agree.
>
> **7. Do not draft new legal language beyond what I have given you.** If you
> hit something that needs a lawyer's decision, leave a clearly visible
> placeholder rather than inventing a clause, and list it for me at the end.
>
> When you are done, summarize: what you removed, what you kept, every place
> you added links, the acceptance-recording change, and any placeholders left
> for counsel.

---

## Verifying afterward

Once all three products are updated, check that:

- [ ] Each product's terms name Farvision LLC as provider and merchant of record.
- [ ] Each product's terms carry the precedence clause.
- [ ] No product repo still states its own refund window, liability cap, or governing law.
- [ ] Signup on each product records policy version `2.0` plus a timestamp.
- [ ] Each product's Stripe portal configuration points at the farvisionllc.com URLs.
- [ ] `POLICY_VERSION` in `app/lib/legal.ts` is bumped whenever the master text changes,
      and the product repos are told about the new version.
