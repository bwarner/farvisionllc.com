const css = `
html:has(.policy-page),
body:has(.policy-page) {
  height: auto;
  min-height: 100%;
  overflow: auto;
}

body:has(.policy-page) {
  background: #ffffff;
}

.policy-page {
  min-height: 100vh;
  background: #ffffff;
  color: #172033;
  padding: 4rem 1.5rem;
}

.policy-container {
  max-width: 48rem;
  margin: 0 auto;
}

.policy-page h1,
.policy-page h2,
.policy-page h3,
.policy-page p {
  color: inherit;
  letter-spacing: 0;
}

.policy-page h1 {
  margin: 0 0 1rem;
  font-family: var(--font-jost), Arial, Helvetica, sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.15;
}

.policy-page h2 {
  margin: 0 0 0.75rem;
  font-family: var(--font-jost), Arial, Helvetica, sans-serif;
  font-size: 1.45rem;
  font-weight: 700;
  line-height: 1.25;
}

.policy-page h3 {
  margin: 0 0 0.35rem;
  font-size: 1.15rem;
  font-weight: 700;
  line-height: 1.3;
}

.policy-heading {
  margin: 2rem 0 1rem !important;
}

.policy-page p {
  margin: 0 0 1rem;
  color: #4a5568;
  font-size: 1rem;
  line-height: 1.7;
}

.policy-page p:last-child {
  margin-bottom: 0;
}

.policy-breadcrumb {
  margin-bottom: 0.75rem !important;
  color: #64748b !important;
  font-size: 0.8rem !important;
  font-weight: 700;
  letter-spacing: 0.08em !important;
  text-transform: uppercase;
}

.policy-lead {
  margin-bottom: 2.5rem !important;
  color: #4a5568 !important;
  font-size: 1.1rem !important;
}

.policy-block,
.policy-section {
  margin-bottom: 2rem;
}

.policy-section {
  border: 1px solid #dbe1ea;
  border-radius: 8px;
  padding: 1.5rem;
}

.policy-list {
  display: grid;
  gap: 1rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.policy-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.25rem;
  margin-top: 1rem;
  font-size: 0.95rem;
}

.policy-link {
  color: #1d4ed8;
  text-decoration: none;
  border: 0;
}

.policy-link:hover {
  color: #1e40af;
  text-decoration: underline;
}

.policy-note {
  margin-top: 3rem !important;
  color: #64748b !important;
  font-size: 0.95rem !important;
}

.policy-meta {
  margin-bottom: 2.5rem !important;
  color: #64748b !important;
  font-size: 0.9rem !important;
}

.policy-meta strong {
  color: #172033;
}

.policy-toc {
  margin-bottom: 2.5rem;
  border: 1px solid #dbe1ea;
  border-radius: 8px;
  padding: 1.5rem;
}

.policy-toc h2 {
  font-size: 1.15rem !important;
}

.policy-toc ol {
  margin: 0;
  padding-left: 1.25rem;
  color: #4a5568;
  font-size: 0.95rem;
  line-height: 1.9;
}

@media screen and (min-width: 737px) {
  .policy-toc ol {
    columns: 2;
    column-gap: 2rem;
  }

  .policy-toc li {
    break-inside: avoid;
  }
}

.policy-page :target {
  scroll-margin-top: 1.5rem;
}

.policy-anchor {
  color: inherit;
  text-decoration: none;
  border: 0;
}

.policy-anchor:hover {
  color: #1d4ed8;
}

.policy-anchor:hover::after {
  content: " #";
  color: #94a3b8;
}

.policy-review {
  border-left: 3px solid #d97706;
  background: #fffbeb;
  border-radius: 0 6px 6px 0;
  padding: 0.85rem 1rem;
  color: #7c2d12 !important;
  font-size: 0.92rem !important;
}

.policy-review strong {
  color: #9a3412;
}

.policy-table-wrap {
  overflow-x: auto;
}

.policy-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.92rem;
  text-align: left;
}

.policy-table th,
.policy-table td {
  border-bottom: 1px solid #dbe1ea;
  padding: 0.65rem 0.75rem;
  vertical-align: top;
  color: #4a5568;
  line-height: 1.6;
}

.policy-table th {
  color: #172033;
  font-weight: 700;
  white-space: nowrap;
}

.policy-bullets {
  margin: 0 0 1rem;
  padding-left: 1.25rem;
  color: #4a5568;
  font-size: 1rem;
  line-height: 1.7;
}

.policy-bullets li {
  margin-bottom: 0.4rem;
}

@media screen and (max-width: 736px) {
  .policy-page {
    padding: 3rem 1.25rem;
  }

  .policy-page h1 {
    font-size: 2rem;
  }
}
`;

export default function PolicyStyles() {
  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}
