'use client';

import { BarChart3, Shield, Users } from 'lucide-react';
import React from 'react';
import { useTranslations } from 'next-intl';

const SimpleWhyChoose: React.FC = () => {
  const t = useTranslations();

  const features = [
    {
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      title: t('features.dataDetection.title'),
    },
    {
      icon: <Users className="w-6 h-6 text-teal-500" />,
      title: t('features.aiBlocking.title'),
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-amber-500" />,
      title: t('features.adminDashboard.title'),
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            🛠️ {t('features.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm text-center"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimpleWhyChoose;
