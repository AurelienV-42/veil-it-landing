import TopNavigation from '@/components/TopNavigation';
import FAQ from '@/sections/FAQ';
import FinalCTA from '@/sections/FinalCTA';
import ProblemSection from '@/sections/ProblemSection';
import SimpleFooter from '@/sections/SimpleFooter';
import SimpleHero from '@/sections/SimpleHero';
import SimpleWhyChoose from '@/sections/SimpleWhyChoose';
import SolutionSteps from '@/sections/SolutionSteps';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <TopNavigation />
      <div id="hero">
        <SimpleHero />
      </div>
      <div id="problem">
        <ProblemSection />
      </div>
      <div id="solution">
        <SolutionSteps />
      </div>
      <div id="features">
        <SimpleWhyChoose />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <FinalCTA />
      <SimpleFooter />
    </div>
  );
}
