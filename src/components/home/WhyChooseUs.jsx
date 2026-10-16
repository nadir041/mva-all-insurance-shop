import { Check } from 'lucide-react';
import Reveal from '../Reveal';
import { whyChooseUs } from '../../data/site';

export default function WhyChooseUs() {
  return (
    <section className="section" id="why-choose-us" aria-labelledby="why-title">
      <div className="container">
        <Reveal className="section-heading">
          <p className="eyebrow">{whyChooseUs.eyebrow}</p>
          <h2 id="why-title">{whyChooseUs.title}</h2>
          <p>{whyChooseUs.intro}</p>
        </Reveal>

        <ul className="tiles">
          {whyChooseUs.items.map((item, i) => (
            <Reveal as="li" key={item.title} className="tile" delay={i * 80}>
              <h3 className="tile__title">{item.title}</h3>
              <p className="tile__text">{item.text}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal as="ul" className="extras" delay={120}>
          {whyChooseUs.extras.map((item) => (
            <li key={item}>
              <Check size={18} strokeWidth={2.5} aria-hidden="true" />
              {item}
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
