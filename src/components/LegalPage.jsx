import './LegalPage.css';

/** Shared layout for the Privacy Policy and Terms pages (banner + readable content card). */
export default function LegalPage({ title, subtitle, uppercaseHeadings = false, wide = false, children }) {
  return (
    <>
      <div className="page-banner">
        <div className="container">
          <span className="page-banner__tag enter">Legal</span>
          <h1 className="page-banner__title enter" style={{ '--enter-delay': '60ms' }}>
            {title}
          </h1>
          <p className="page-banner__subtitle enter" style={{ '--enter-delay': '120ms' }}>
            {subtitle}
          </p>
        </div>
      </div>
      <div className="legal-section">
        <div className="container">
          <article
            className={`legal-card enter${uppercaseHeadings ? ' legal-card--upper' : ''}${wide ? ' legal-card--wide' : ''}`}
            style={{ '--enter-delay': '160ms' }}
          >
            {children}
          </article>
        </div>
      </div>
    </>
  );
}

export function EmailLink({ email }) {
  return <a href={`mailto:${email}`}>{email}</a>;
}
