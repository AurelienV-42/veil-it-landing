'use client';

import { AlertTriangle, Euro, Users } from 'lucide-react';
import React from 'react';
import { useTranslations } from 'next-intl';
import { useSectionTracking } from '@/hooks/useAnalytics';

const ProblemSection: React.FC = () => {
  const t = useTranslations();
  const sectionRef = useSectionTracking('problem');

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Stat 1: Prompts with sensitive data */}
          <div className="text-center p-8 bg-white rounded-xl shadow-lg border border-gray-100">
            <AlertTriangle className="w-12 h-12 text-orange-500 mx-auto mb-6" />
            <div className="text-6xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              {t('problem.stats.prompts.number')}
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('problem.stats.prompts.description')}
            </p>
          </div>

          {/* Stat 2: GDPR fines */}
          <div className="text-center p-8 bg-white rounded-xl shadow-lg border border-gray-100">
            <Euro className="w-12 h-12 text-red-500 mx-auto mb-6" />
            <div className="text-6xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              {t('problem.stats.gdprFines.number')}
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('problem.stats.gdprFines.description')}
            </p>
          </div>

          {/* Stat 3: Unsupervised usage */}
          <div className="text-center p-8 bg-white rounded-xl shadow-lg border border-gray-100">
            <Users className="w-12 h-12 text-blue-500 mx-auto mb-6" />
            <div className="text-6xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              {t('problem.stats.unsupervisedUsage.number')}
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('problem.stats.unsupervisedUsage.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
