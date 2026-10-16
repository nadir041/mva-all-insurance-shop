import { Link } from 'react-router-dom';
import ClaimForm from '../form/ClaimForm';
import { hero, highlights, routes } from '../../data/site';

const enter = (ms) => ({ '--enter-delay': `${ms}ms` });

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__intro">
          <p className="hero__eyebrow enter" style={enter(0)}>
            <span>{hero.eyebrow}</span>
            <span className="hero__notice">{hero.notice}</span>
          </p>
          <h1 id="hero-title" className="hero__title enter" style={enter(60)}>
            {hero.titleStart} <span className="hero__highlight">{hero.titleHighlight}</span> {hero.titleEnd}
          </h1>
          <p className="hero__subtitle enter" style={enter(120)}>
            {hero.subtitle}
          </p>
          <div className="hero__actions enter" style={enter(180)}>
            <Link to={routes.contact} className="btn btn--primary btn--lg">
              {hero.primaryCta}
            </Link>
            <Link to={routes.contact} className="btn btn--secondary btn--lg">
              {hero.secondaryCta}
            </Link>
          </div>
        </div>

        <div className="hero__form enter" style={enter(120)}>
          <ClaimForm id="contact" />
        </div>
      </div>

      <div className="container">
        <ul className="highlights">
          {highlights.map((item) => (
            <li key={item.title} className="highlights__item">
              <span className="highlights__title">{item.title}</span>
              <span className="highlights__text">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
