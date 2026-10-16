import { Plus } from 'lucide-react';
import Reveal from '../Reveal';
import { faq } from '../../data/site';

// Native <details> keeps the accordion keyboard- and screen-reader-accessible with no JS.
export default function Faq() {
  return (
    <section className="section section--alt" id="faq" aria-labelledby="faq-title">
      <div className="container">
        <Reveal className="section-heading">
          <p className="eyebrow">{faq.eyebrow}</p>
          <h2 id="faq-title">{faq.title}</h2>
        </Reveal>
        <Reveal className="faq">
          {faq.items.map((item) => (
            <details key={item.q} className="faq__item">
              <summary className="faq__q">
                <span>{item.q}</span>
                <Plus className="faq__icon" size={22} strokeWidth={1.75} aria-hidden="true" />
              </summary>
              <p className="faq__a">{item.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
