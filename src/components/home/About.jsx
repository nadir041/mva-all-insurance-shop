import { Link } from 'react-router-dom';
import { Check, ChevronRight } from 'lucide-react';
import Reveal from '../Reveal';
import { about, routes } from '../../data/site';
import about480avif from '../../assets/about-480.avif';
import about800avif from '../../assets/about-800.avif';
import about480webp from '../../assets/about-480.webp';
import about800webp from '../../assets/about-800.webp';

export default function About() {
  return (
    <section className="section section--alt" id="about" tabIndex={-1} aria-labelledby="about-title">
      <div className="container about">
        <Reveal className="about__media">
          <picture>
            <source type="image/avif" srcSet={`${about480avif} 480w, ${about800avif} 800w`} sizes="(min-width: 960px) 480px, 92vw" />
            <img
              src={about800webp}
              srcSet={`${about480webp} 480w, ${about800webp} 800w`}
              sizes="(min-width: 960px) 480px, 92vw"
              width="800"
              height="858"
              alt={about.imageAlt}
              loading="lazy"
              decoding="async"
            />
          </picture>
          <div className="about__badge">
            <span className="about__badge-value">{about.badgeValue}</span>
            <span className="about__badge-label">{about.badgeLabel}</span>
          </div>
        </Reveal>

        <Reveal className="about__content" delay={100}>
          <p className="eyebrow">{about.eyebrow}</p>
          <h2 id="about-title" className="about__title">
            {about.title}
          </h2>
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="about__text">
              {p}
            </p>
          ))}
          <ul className="checklist">
            {about.checklist.map((item) => (
              <li key={item}>
                <Check size={18} strokeWidth={2.5} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <Link to={routes.contact} className="link-chevron">
            {about.cta}
            <ChevronRight size={18} strokeWidth={2} aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
