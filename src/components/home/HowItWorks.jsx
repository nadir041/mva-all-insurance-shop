import Reveal from '../Reveal';
import { howItWorks } from '../../data/site';

export default function HowItWorks() {
  return (
    <section className="section" id="how-it-works" aria-labelledby="hiw-title">
      <div className="container">
        <Reveal className="section-heading">
          <p className="eyebrow">{howItWorks.eyebrow}</p>
          <h2 id="hiw-title">{howItWorks.title}</h2>
        </Reveal>

        <ol className="steps">
          {howItWorks.steps.map((step, i) => (
            <Reveal as="li" key={step.title} className="step" delay={i * 100}>
              <span className="step__num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="step__title">
                <span className="visually-hidden">Step {i + 1}: </span>
                {step.title}
              </h3>
              <p className="step__text">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
