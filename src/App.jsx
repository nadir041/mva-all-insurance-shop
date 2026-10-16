import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import { routes } from './data/site';

// Legal pages are rarely visited — split them out of the main bundle.
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const MarketingPartnersPage = lazy(() => import('./pages/MarketingPartnersPage'));

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={routes.home} element={<HomePage />} />
        <Route path={routes.privacy} element={<PrivacyPolicyPage />} />
        <Route path={routes.terms} element={<TermsPage />} />
        <Route path={routes.partners} element={<MarketingPartnersPage />} />

        {/* Legacy URLs preserved from the original site */}
        <Route path="/index.html" element={<Navigate to={routes.home} replace />} />
        <Route path="/mva-claims" element={<Navigate to={routes.contact} replace />} />
        <Route path="/mva.aspx" element={<Navigate to={routes.contact} replace />} />
        <Route path="/MVA.aspx" element={<Navigate to={routes.contact} replace />} />
        <Route path="/privacy-policy.html" element={<Navigate to={routes.privacy} replace />} />
        <Route path="/authorized-companies.html" element={<Navigate to={routes.partners} replace />} />
        <Route path="/terms.html" element={<Navigate to={routes.terms} replace />} />
        <Route path="*" element={<Navigate to={routes.home} replace />} />
      </Route>
    </Routes>
  );
}
