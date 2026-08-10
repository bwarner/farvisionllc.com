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

/** Visible marker for text that still needs counsel's sign-off. Deliberately
 *  loud: an invisible TODO in JSX is a TODO that gets deployed. */
export function ReviewNote({ children }: { children: ReactNode }) {
  return (
    <p className="policy-review">
      <strong>Pending legal review — </strong>
      {children}
    </p>
  );
}
