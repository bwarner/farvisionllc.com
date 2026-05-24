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
