'use client';

import { AlertTriangle, Euro, Shield } from 'lucide-react';
import React from 'react';
import { useTranslations } from 'next-intl';
import { useSectionTracking } from '@/hooks/useAnalytics';

const ProblemSection: React.FC = () => {
  const t = useTranslations();
  const sectionRef = useSectionTracking('problem');

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            {t('problem.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('problem.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <AlertTriangle className="w-10 h-10 text-orange-600 mb-6" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {t('problem.risks.dataExposure.title')}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {t('problem.risks.dataExposure.description')}
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <Euro className="w-10 h-10 text-red-600 mb-6" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {t('problem.risks.gdprViolations.title')}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {t('problem.risks.gdprViolations.description')}
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <Shield className="w-10 h-10 text-blue-600 mb-6" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {t('problem.risks.trustLoss.title')}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {t('problem.risks.trustLoss.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
