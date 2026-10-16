import Reveal from '../Reveal';
import { services } from '../../data/site';

export default function Services() {
  return (
    <section className="section section--alt" id="services" aria-labelledby="services-title">
      <div className="container">
        <Reveal className="section-heading">
          <p className="eyebrow">{services.eyebrow}</p>
          <h2 id="services-title">{services.title}</h2>
          <p>{services.intro}</p>
        </Reveal>

        <ul className="services">
          {services.items.map((item, i) => (
            <Reveal as="li" key={item.title} className="service-card" delay={i * 80}>
              <h3 className="service-card__title">{item.title}</h3>
              <p className="service-card__text">{item.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
