import { Link } from 'react-router-dom';
import Reveal from '../Reveal';
import { ctaBanner, routes } from '../../data/site';
import acc360avif from '../../assets/accident-360.avif';
import acc640avif from '../../assets/accident-640.avif';
import acc360webp from '../../assets/accident-360.webp';
import acc640webp from '../../assets/accident-640.webp';

export default function CtaBanner() {
  return (
    <section className="section section--dark" aria-labelledby="cta-title">
      <div className="container">
        <Reveal className="cta">
          <div className="cta__body">
            <h2 id="cta-title" className="cta__title">
              {ctaBanner.title}
            </h2>
            <p className="cta__text">{ctaBanner.text}</p>
            <Link to={routes.contact} className="btn btn--primary btn--lg">
              {ctaBanner.cta}
            </Link>
          </div>
          <picture className="cta__media" aria-hidden="true">
            <source type="image/avif" srcSet={`${acc360avif} 360w, ${acc640avif} 640w`} sizes="(min-width: 768px) 420px, 92vw" />
            <img
              src={acc640webp}
              srcSet={`${acc360webp} 360w, ${acc640webp} 640w`}
              sizes="(min-width: 768px) 420px, 92vw"
              width="640"
              height="1147"
              alt=""
              loading="lazy"
              decoding="async"
            />
          </picture>
        </Reveal>
      </div>
    </section>
  );
}
