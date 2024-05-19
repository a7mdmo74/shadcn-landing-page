import { About, Hero, HowWorks, Sponsors } from './components';

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
    </main>
  );
}
