'use client';

import { Monitor, Shield, Users } from 'lucide-react';
import React from 'react';
import { useTranslations } from 'next-intl';
import { useSectionTracking } from '@/hooks/useAnalytics';

const BenefitsSection: React.FC = () => {
  const t = useTranslations();
  const sectionRef = useSectionTracking('benefits');

  const benefits = [
    {
      icon: <Shield className="w-12 h-12 text-blue-500" />,
      title: t('benefits.dpo.title'),
      description: t('benefits.dpo.description'),
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      icon: <Users className="w-12 h-12 text-green-500" />,
      title: t('benefits.teams.title'),
      description: t('benefits.teams.description'),
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
    },
    {
      icon: <Monitor className="w-12 h-12 text-purple-500" />,
      title: t('benefits.it.title'),
      description: t('benefits.it.description'),
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('benefits.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`${benefit.bgColor} p-8 rounded-2xl border ${benefit.borderColor} text-center h-full`}
            >
              <div className="mb-6 flex justify-center">{benefit.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-lg text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
