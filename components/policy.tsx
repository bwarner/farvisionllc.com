import type { ReactNode } from "react";

export type PolicySection = {
  id: string;
  title: string;
  body: ReactNode;
};

/**
 * Table of contents built from the same array that renders the sections, so
 * the two can never drift. Deep links like /terms#refunds are what we hand to
 * Stripe, app stores, and security reviewers.
 */
export function PolicyToc({ sections }: { sections: readonly PolicySection[] }) {
  return (
    <nav className="policy-toc" aria-label="Table of contents">
      <h2>Contents</h2>
      <ol>
        {sections.map((section) => (
          <li key={section.id}>
            <a href={`#${section.id}`} className="policy-link">
              {section.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PolicyBody({ sections }: { sections: readonly PolicySection[] }) {
  return (
    <>
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="policy-section">
          <h2>
            <a href={`#${section.id}`} className="policy-anchor">
              {section.title}
            </a>
          </h2>
          {section.body}
        </section>
      ))}
    </>
  );
}

/**
 * Marker for text that still needs counsel's sign-off. Deliberately loud in
 * development and on preview deployments — an invisible TODO in JSX is a TODO
 * that gets deployed — but hidden in production, where customers and payment
 * reviewers would otherwise read internal drafting notes.
 *
 * Hiding the marker does not mean the work is done: `__tests__/legal.test.ts`
 * still blocks POLICY_STATUS from flipping to "published" while any remain.
 * Anything hidden here must be text that is merely unreviewed, never a factual
 * claim that has not been verified.
 */
export function ReviewNote({ children }: { children: ReactNode }) {
  if (process.env.VERCEL_ENV === "production") return null;

  return (
    <p className="policy-review">
      <strong>Pending legal review — </strong>
      {children}
    </p>
  );
}
