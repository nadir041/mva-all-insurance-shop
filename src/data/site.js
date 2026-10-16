// Business details and copy. Core copy comes from the original site
// (https://mvaclaims.allinsuranceshop.com/); supporting content (FAQ, accident
// types, extra benefits) is adapted from https://myaccidentclaims.com/ as requested.
// "MVA" is written out as "Motor Vehicle Accident" in body copy; the business
// name itself is unchanged.

export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://mvaclaims.allinsuranceshop.com').replace(/\/$/, '');

export const business = {
  name: 'MVA All Insurance Shop',
  tagline: 'Protecting your rights after an accident…',
  // Displayed exactly as on the original site. The dial string omits the "+" because
  // "+727…" would be read as an international (+7) number by phones.
  phone: '+7274053157',
  phoneHref: 'tel:7274053157',
  email: 'Info@allinsuranceshop.com',
  address: '1902 Wright Pl, Carlsbad, CA 92008',
  copyright: '© Copyright 2025 MVA Claim All Insurance Shop. All rights reserved.',
};

export const routes = {
  home: '/',
  privacy: '/privacy-policy',
  terms: '/terms',
  partners: '/marketing-partners',
  about: '/#about',
  contact: '/#contact',
};

export const mainNav = [
  { label: 'Home', to: routes.home },
  { label: 'About Us', to: routes.about },
  { label: 'Contact', to: routes.contact },
];

export const meta = {
  home: {
    title: 'MVA All Insurance Shop',
    description:
      'MVA All Insurance Shop helps motor vehicle accident victims navigate their claims with expert legal and medical referral support. Get a free consultation today.',
    path: routes.home,
  },
  privacy: {
    title: 'Privacy Policy | MVA All Insurance Shop',
    description: 'Privacy Policy for MVA All Insurance Shop.',
    path: routes.privacy,
  },
  terms: {
    title: 'Terms & Conditions | MVA All Insurance Shop',
    description: 'Terms and Conditions for MVA All Insurance Shop.',
    path: routes.terms,
  },
  partners: {
    title: 'Marketing Partners | MVA All Insurance Shop',
    description: 'Authorized marketing partners of MVA All Insurance Shop.',
    path: routes.partners,
  },
};

export const hero = {
  eyebrow: 'Motor Vehicle Accident Claims',
  notice: 'Time may be limited to file.',
  titleStart: 'Get the compensation you',
  titleHighlight: 'deserve',
  titleEnd: 'after a Motor Vehicle Accident.',
  subtitle:
    'MVA All Insurance Shop connects accident victims with trusted legal and medical professionals at no upfront cost. We fight for your rights every step of the way.',
  primaryCta: 'File Your Claim',
  secondaryCta: 'Free Consultation',
};

export const highlights = [
  { title: 'Accident Claims', text: 'Expert Motor Vehicle Accident claim guidance' },
  { title: 'Legal Support', text: 'Experienced attorney network' },
  { title: 'Medical Referrals', text: 'Top injury specialists' },
  { title: 'No Upfront Cost', text: 'Pay only when you win' },
];

export const whyChooseUs = {
  eyebrow: 'Why Choose Us',
  title: 'You don’t pay unless we win.',
  intro:
    'We fight tirelessly until you get the justice you deserve. We simplify the car accident claim process and work to secure the maximum, fair compensation for all types of car accident injuries.',
  items: [
    { title: 'Experienced Legal Network', text: 'Matched with top Motor Vehicle Accident attorneys' },
    { title: 'Medical Specialist Referrals', text: 'Access trusted injury specialists' },
    { title: 'No Win, No Fee', text: 'You pay nothing unless we win' },
    { title: 'Fast Case Evaluation', text: 'Response within 24 hours' },
  ],
  extras: ['Maximize your payout', 'Get a free consultation', 'No settlement, no fees charged', 'Available around the clock'],
};

export const howItWorks = {
  eyebrow: 'How It Works',
  title: '3 simple steps to start your Motor Vehicle Accident claim.',
  steps: [
    {
      title: 'Contact Us',
      text: 'Reach out for a free, no-obligation consultation. Tell us about your accident and we will take it from there.',
    },
    {
      title: 'We Evaluate Your Case',
      text: 'Our team reviews the details of your claim and connects you with the right attorneys and medical specialists.',
    },
    {
      title: 'Get Compensated',
      text: 'We fight to secure the maximum compensation you deserve while you focus on your recovery.',
    },
  ],
};

export const about = {
  eyebrow: 'Who We Are',
  title: 'Your trusted partner after a Motor Vehicle Accident.',
  paragraphs: [
    'At MVA All Insurance Shop, we specialize in helping accident victims navigate the complex claims process. From the moment you reach out, our dedicated team works to connect you with experienced attorneys and medical professionals who support both your recovery and your case.',
    'We understand how overwhelming life after an accident can be  that’s why we do the heavy lifting for you. With zero upfront fees and a results-driven approach, you can focus on healing while we focus on your claim.',
  ],
  checklist: [
    'Dedicated case management from start to finish',
    'Access to a vetted network of Motor Vehicle Accident attorneys',
    'Medical referrals with injury documentation support',
    'Transparent process with no hidden fees',
  ],
  badgeValue: '100%',
  badgeLabel: 'No Win, No Fee',
  imageAlt: 'MVA All Insurance Shop Team',
  cta: 'Talk to an Expert',
};

export const services = {
  eyebrow: 'What We Offer',
  title: 'Comprehensive Motor Vehicle Accident claim services.',
  intro: 'From the moment of your accident to final settlement, we provide the support you need.',
  items: [
    {
      title: 'Free Consultation',
      text: 'Speak with our team at no cost. We review your accident details and advise on the best path forward for your claim.',
    },
    {
      title: 'Legal Representation',
      text: 'We connect you with experienced Motor Vehicle Accident attorneys who fight aggressively to protect your rights and maximize your settlement.',
    },
    {
      title: 'Medical Referrals',
      text: 'Get referred to trusted medical specialists for injury evaluation and treatment, ensuring your case is well-documented.',
    },
    {
      title: 'No Win, No Fee',
      text: 'You pay nothing unless we win. Our contingency model means we are fully invested in getting you the outcome you deserve.',
    },
  ],
};

export const accidentTypes = {
  eyebrow: 'Accidents We Help With',
  title: 'Common types of car accidents.',
  items: [
    'Rear-End Accident',
    'Head-On Collision',
    'Hit-and-Run Accident',
    'Intersection Accident',
    'Multi-Vehicle Accident',
    'Rollover Accident',
    'Sideswipe Accident',
    'T-Bone Accident',
  ],
};

export const faq = {
  eyebrow: 'Questions',
  title: 'Frequently asked questions.',
  items: [
    {
      q: 'Why do I need a Motor Vehicle Accident lawyer?',
      a: 'While it’s feasible to manage an auto accident case independently, doing so may result in receiving insufficient compensation. Insurance companies prioritize minimizing payouts to maximize profits, potentially leaving you unaware of your full entitlements, such as compensation for emotional distress. A skilled lawyer proficient in the nuances of legal processes can advocate on your behalf, ensuring you receive the maximum recompense owed for your accident.',
    },
    {
      q: 'When should I get a Motor Vehicle Accident lawyer?',
      a: 'It’s advisable to hire a Motor Vehicle Accident lawyer immediately after sustaining injuries. They can recommend specialists for your care and prevent you from making detrimental statements to the insurance company. Hiring a lawyer early typically leads to a better settlement for your car accident case.',
    },
    {
      q: 'How does legal representation help after a car crash?',
      a: 'Legal representation after a car crash helps ensure fair compensation by knowing the laws and fighting for your rights. Lawyers help navigate complex paperwork and negotiations with insurance companies, ensuring you get the best outcome possible.',
    },
    {
      q: 'Do I have to pay anything upfront?',
      a: 'No. You pay nothing unless we win. Our contingency model means we are fully invested in getting you the outcome you deserve.',
    },
  ],
};

export const ctaBanner = {
  title: 'Were you injured in a Motor Vehicle Accident?',
  text: 'Don’t wait, time limits apply. Get a free case evaluation today and find out what you’re entitled to.',
  cta: 'Get Free Evaluation',
};

export const footer = {
  descriptionFull:
    'MVA All Insurance Shop connects motor vehicle accident victims with the legal and medical support they need to secure fair compensation with no upfront cost.',
  descriptionLegal:
    'MVA All Insurance Shop connects motor vehicle accident victims with the legal and medical support they need at no upfront cost.',
};
