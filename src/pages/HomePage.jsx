import Hero from '../components/home/Hero';
import HowItWorks from '../components/home/HowItWorks';
import About from '../components/home/About';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Services from '../components/home/Services';
import AccidentTypes from '../components/home/AccidentTypes';
import Faq from '../components/home/Faq';
import CtaBanner from '../components/home/CtaBanner';
import useDocumentMeta from '../hooks/useDocumentMeta';
import { meta } from '../data/site';
import '../components/home/home.css';

// The lead form ("Get Your Free Case Review", id="contact") lives in the hero.
export default function HomePage() {
  useDocumentMeta(meta.home);

  return (
    <>
      <Hero />
      <HowItWorks />
      <About />
      <WhyChooseUs />
      <Services />
      <AccidentTypes />
      <Faq />
      <CtaBanner />
    </>
  );
}
