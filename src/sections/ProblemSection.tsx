'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSectionTracking } from '../hooks/useAnalytics';

const ProblemSection: React.FC = () => {
  const { t } = useTranslation();
  const sectionRef = useSectionTracking('problem');

  const examples = [
    t('problem.examples.apiKey'),
    t('problem.examples.contract'),
    t('problem.examples.hrData'),
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-red-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          🚨 {t('problem.title')}
        </h2>

        <p className="text-xl text-gray-700 mb-8">{t('problem.subtitle')}</p>

        <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            📉 Exemples réels détectés :
          </h3>
          <div className="space-y-3">
            {examples.map((example, index) => (
              <p key={index} className="text-gray-800">
                {example}
              </p>
            ))}
          </div>
        </div>

        <p className="text-xl font-bold text-red-600">
          {t('problem.consequence')}
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
