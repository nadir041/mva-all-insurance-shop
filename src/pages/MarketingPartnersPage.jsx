import LegalPage from '../components/LegalPage';
import useDocumentMeta from '../hooks/useDocumentMeta';
import { meta } from '../data/site';
import { partners } from '../data/partners';

// Company list reproduced from https://www.mvaclaimsolutions.com/authorized-companies.html
export default function MarketingPartnersPage() {
  useDocumentMeta(meta.partners);

  return (
    <LegalPage
      wide
      title="Marketing Partners"
      subtitle="Top authorized companies we may share your information with."
    >
      <h2>Top Authorized Companies</h2>
      <p>Matched companies included but not limited to:</p>
      <ul className="partner-list">
        {partners.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </LegalPage>
  );
}
