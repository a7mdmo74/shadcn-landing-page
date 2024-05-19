import {
  About,
  Hero,
  HowWorks,
  Sponsors,
  Features,
  Services,
  Cta,
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
    </main>
  );
}
