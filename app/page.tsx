import {
  About,
  Hero,
  HowWorks,
  Sponsors,
  Features,
  Services,
  Cta,
  Testimonials,
  Team,
  Pricing,
  Newsletter,
  Faq,
} from './components';

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <Hero />
      {/* Sponsors */}
      <Sponsors />
      {/* About */}
      <About />
      {/* HowItWorks */}
      <HowWorks />
      {/* Features */}
      <Features />
      {/* Services */}
      <Services />
      {/* CTA */}
      <Cta />
      {/* testimonials */}
      <Testimonials />
      {/* team */}
      <Team />
      {/* pricing */}
      <Pricing />
      {/* newsletter */}
      <Newsletter />
      {/* faq */}
      <Faq />
    </main>
  );
}
