import { useEffect, useId, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Phone, X } from 'lucide-react';
import { business, mainNav, routes } from '../data/site';
import useScrollPast from '../hooks/useScrollPast';
import logo from '../assets/logo.webp';
import './Header.css';

export default function Header() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrollPast(8);
  const location = useLocation();
  const panelId = useId();
  const headerRef = useRef(null);
  const toggleRef = useRef(null);

  // Close the mobile menu on navigation.
  useEffect(() => setOpen(false), [location.key]);

  // Close on Escape or outside click.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointer = (e) => {
      if (!headerRef.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, [open]);

  const isCurrent = (to) => to === routes.home && location.pathname === '/' && !location.hash;

  const links = mainNav.map((item) => (
    <li key={item.label}>
      <Link to={item.to} className="nav__link" aria-current={isCurrent(item.to) ? 'page' : undefined}>
        {item.label}
      </Link>
    </li>
  ));

  return (
    <header ref={headerRef} className={`site-header${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
      <div className="container site-header__bar">
        <Link to={routes.home} className="site-header__brand" aria-label={`${business.name} – Home`}>
          <img src={logo} alt={business.name} width="144" height="64" className="site-header__logo" />
        </Link>

        <nav className="nav nav--desktop" aria-label="Main">
          <ul>{links}</ul>
        </nav>

        <a className="site-header__phone" href={business.phoneHref}>
          <span className="site-header__phone-label">Need&nbsp;Help?</span>
          <span className="site-header__phone-number">
            <Phone size={14} strokeWidth={2} aria-hidden="true" />
            {business.phone}
          </span>
        </a>

        <button
          ref={toggleRef}
          type="button"
          className="site-header__toggle"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="visually-hidden">{open ? 'Close menu' : 'Open menu'}</span>
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      <div id={panelId} className="mobile-panel" data-open={open} inert={!open}>
        <div className="mobile-panel__inner">
          <nav className="container nav nav--mobile" aria-label="Mobile">
            <ul>{links}</ul>
            <a className="mobile-panel__phone" href={business.phoneHref}>
              <span>Need Help?</span>
              <strong>
                <Phone size={14} strokeWidth={2} aria-hidden="true" />
                {business.phone}
              </strong>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
