'use client';

import { useSectionTracking } from '@/hooks/useAnalytics';
import { useTranslations } from 'next-intl';
import React from 'react';

interface StatCardProps {
  shadowColor: string;
  hoverShadowColor: string;
  gradientFrom: string;
  gradientTo: string;
  numberKey: string;
  descriptionKey: string;
  t: (key: string) => string;
}

const StatCard: React.FC<StatCardProps> = ({
  shadowColor,
  hoverShadowColor,
  gradientFrom,
  gradientTo,
  numberKey,
  descriptionKey,
  t,
}) => (
  <div
    className={`relative p-12 rounded-2xl ${shadowColor} ${hoverShadowColor} transition-all duration-300 hover:-translate-y-2 hover:scale-105`}
  >
    <div
      className={`text-8xl font-bold mb-8 bg-gradient-to-r ${gradientFrom} ${gradientTo} bg-clip-text text-transparent text-center leading-none`}
    >
      {t(numberKey)}
    </div>
    <p className="text-xl text-gray-700 leading-relaxed text-center font-medium">
      {t(descriptionKey)}
    </p>
  </div>
);

const ProblemSection: React.FC = () => {
  const t = useTranslations();
  const sectionRef = useSectionTracking('problem');

  const stats = [
    {
      shadowColor: 'shadow-2xl shadow-orange-200/60',
      hoverShadowColor: 'hover:shadow-3xl hover:shadow-orange-400/80',
      gradientFrom: 'from-orange-500',
      gradientTo: 'to-red-500',
      numberKey: 'problem.stats.prompts.number',
      descriptionKey: 'problem.stats.prompts.description',
    },
    {
      shadowColor: 'shadow-2xl shadow-red-200/60',
      hoverShadowColor: 'hover:shadow-3xl hover:shadow-red-400/80',
      gradientFrom: 'from-red-500',
      gradientTo: 'to-red-600',
      numberKey: 'problem.stats.gdprFines.number',
      descriptionKey: 'problem.stats.gdprFines.description',
    },
    {
      shadowColor: 'shadow-2xl shadow-blue-200/60',
      hoverShadowColor: 'hover:shadow-3xl hover:shadow-blue-400/80',
      gradientFrom: 'from-blue-500',
      gradientTo: 'to-cyan-500',
      numberKey: 'problem.stats.unsupervisedUsage.number',
      descriptionKey: 'problem.stats.unsupervisedUsage.description',
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              shadowColor={stat.shadowColor}
              hoverShadowColor={stat.hoverShadowColor}
              gradientFrom={stat.gradientFrom}
              gradientTo={stat.gradientTo}
              numberKey={stat.numberKey}
              descriptionKey={stat.descriptionKey}
              t={t}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
