import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { business, footer, routes } from '../data/site';
import logo from '../assets/logo.webp';
import './Footer.css';

/**
 * `variant="full"` on the home page, `variant="legal"` on Privacy/Terms –
 * matching the original's two footer versions.
 */
export default function Footer({ variant = 'full' }) {
  const full = variant === 'full';

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <img src={logo} alt={business.name} width="144" height="64" loading="lazy" className="site-footer__logo" />
          <p>{full ? footer.descriptionFull : footer.descriptionLegal}</p>
        </div>

        <nav className="site-footer__col" aria-labelledby="footer-quick-links">
          <h2 id="footer-quick-links" className="site-footer__heading">Quick Links</h2>
          <ul>
            <li><Link to={routes.home}>Home</Link></li>
            {full && <li><Link to={routes.about}>About Us</Link></li>}
            <li><Link to={routes.contact}>Contact Us</Link></li>
          </ul>
        </nav>

        <nav className="site-footer__col" aria-labelledby="footer-legal">
          <h2 id="footer-legal" className="site-footer__heading">Legal</h2>
          <ul>
            <li><Link to={routes.terms}>Terms &amp; Conditions</Link></li>
            <li><Link to={routes.privacy}>Privacy Policy</Link></li>
            <li><Link to={routes.partners}>Marketing Partners</Link></li>
          </ul>
        </nav>

        <div className="site-footer__col">
          <h2 className="site-footer__heading">Get In Touch</h2>
          <ul className="site-footer__contact">
            <li>
              <Phone size={14} aria-hidden="true" />
              <a href={business.phoneHref}>{business.phone}</a>
            </li>
            <li>
              <Mail size={14} aria-hidden="true" />
              <a href={`mailto:${business.email}`}>{business.email}</a>
            </li>
            <li>
              <MapPin size={14} aria-hidden="true" />
              <address>{business.address}</address>
            </li>
          </ul>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container">
          <p>{business.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
