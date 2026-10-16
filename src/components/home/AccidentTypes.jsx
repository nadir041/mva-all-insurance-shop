import Reveal from '../Reveal';
import { accidentTypes } from '../../data/site';

export default function AccidentTypes() {
  return (
    <section className="section" id="accident-types" aria-labelledby="types-title">
      <div className="container">
        <Reveal className="section-heading">
          <p className="eyebrow">{accidentTypes.eyebrow}</p>
          <h2 id="types-title">{accidentTypes.title}</h2>
        </Reveal>
        <Reveal as="ul" className="types">
          {accidentTypes.items.map((item) => (
            <li key={item} className="types__item">
              {item}
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
