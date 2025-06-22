'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { useSectionTracking } from '@/hooks/useAnalytics';

const SolutionSteps: React.FC = () => {
  const t = useTranslations();
  const sectionRef = useSectionTracking('solution');

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          ✅ {t('solution.title')}
        </h2>
        <p className="text-xl text-gray-600 mb-12">{t('solution.subtitle')}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-red-50 p-6 rounded-xl">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {t('solution.blocking.title')}
            </h3>
            <p className="text-sm text-gray-600">
              {t('solution.blocking.example')}
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-xl">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {t('solution.masking.title')}
            </h3>
            <p className="text-sm text-gray-600">
              {t('solution.masking.example')}
            </p>
          </div>
        </div>

        <p className="text-xl font-bold text-gray-900">
          🎯 {t('solution.tagline')}
        </p>
      </div>
    </section>
  );
};

export default SolutionSteps;
