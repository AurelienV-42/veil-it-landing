import DemoSection from '@/components/DemoSection';
import TopNavigation from '@/components/TopNavigation';
import FAQ from '@/sections/FAQ';
import FinalCTA from '@/sections/FinalCTA';
import Hero from '@/sections/Hero';
import ProblemSection from '@/sections/ProblemSection';
import SimpleFooter from '@/sections/SimpleFooter';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <TopNavigation />
      <div id="hero">
        <Hero />
      </div>
      <ProblemSection />
      <DemoSection />
      <div id="faq">
        <FAQ />
      </div>
      <FinalCTA />
      <SimpleFooter />
    </div>
  );
}
