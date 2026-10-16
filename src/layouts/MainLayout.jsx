import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import ScrollManager from '../components/ScrollManager';
import { routes } from '../data/site';

export default function MainLayout() {
  const { pathname } = useLocation();
  const isLegal = pathname === routes.privacy || pathname === routes.terms;

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <ScrollManager />
      <Header />
      <main id="main" tabIndex={-1}>
        <Suspense fallback={<div style={{ minHeight: '100vh' }} aria-busy="true" />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer variant={isLegal ? 'legal' : 'full'} />
      <BackToTop />
    </>
  );
}
