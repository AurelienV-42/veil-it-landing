'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import links from '../config/links';
import { gradients } from '../styles/gradients';
import { useSectionTracking } from '../hooks/useAnalytics';
import { trackCTAClick } from '../utils/analytics';

const FinalCTA: React.FC = () => {
  const { t } = useTranslation();
  const sectionRef = useSectionTracking('final-cta');

  const handleCTAClick = () => {
    trackCTAClick('book-demo', 'final-cta-section');
    window.open(links.bookADemo, '_blank');
  };

  return (
    <section ref={sectionRef} className="py-24 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
          {t('finalCta.title')}
        </h2>

        <div className="relative group inline-block">
          <div
            className={`absolute -inset-0.5 ${gradients.border.primary} rounded-lg opacity-75 blur group-hover:opacity-100 group-hover:blur-md transition duration-1000 group-hover:duration-200 animate-gradient`}
          ></div>
          <button
            onClick={handleCTAClick}
            className="relative px-12 py-6 rounded-lg leading-none bg-white text-xl font-bold"
          >
            <span className={gradients.text.primary}>{t('finalCta.cta')}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
