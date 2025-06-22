'use client';

import { BarChart3, Lock, Shield, Users } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

const SimpleWhyChoose: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      title: t('whyChoose.features.access'),
      description: 'Controls approved generative AIs access',
    },
    {
      icon: <Shield className="w-6 h-6 text-teal-500" />,
      title: t('whyChoose.features.protection'),
      description: 'Advanced security for sensitive information',
    },
    {
      icon: <Lock className="w-6 h-6 text-cyan-500" />,
      title: t('whyChoose.features.encryption'),
      description: 'End-to-end encryption for all data',
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-amber-500" />,
      title: t('whyChoose.features.analytics'),
      description: 'Real-time monitoring and reporting',
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('whyChoose.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('whyChoose.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimpleWhyChoose;
