import { BarChart3, Lock, Shield, Users } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

const WhyChoose: React.FC = () => {
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
      description: 'Detects and prevents sharing of confidential information',
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-500" />,
      title: t('whyChoose.features.dashboard'),
      description: 'Visualizes and tracks AI tools usage',
    },
    {
      icon: <Lock className="w-6 h-6 text-indigo-500" />,
      title: t('whyChoose.features.privacy'),
      description: 'Emphasizes data security and privacy',
    },
  ];

  const stats = [
    {
      value: '27%',
      label: t('stats.stat1'),
    },
    {
      value: '80%',
      label: t('stats.stat2'),
    },
    {
      value: '53%',
      label: t('stats.stat3'),
    },
  ];

  return (
    <section className="py-24 bg-white bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Features Grid */}
        {/* <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t('whyChoose.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div> */}
        {/* </div> */}

        {/* Stats Section */}
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t('stats.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl border border-gray-100 shadow-sm"
              >
                <div className="text-4xl font-bold text-blue-600 mb-3">{stat.value}</div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
