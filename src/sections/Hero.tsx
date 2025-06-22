import { Bell, Layout, Shield, Users } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import links from '../config/links';
import { gradients } from '../styles/gradients';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background gradient */}
      <div className={`absolute inset-0 ${gradients.background.primary}`}></div>

      <div className="relative z-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-20 flex flex-col items-center">
        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6 leading-tight mt-8 sm:mt-12">
          <span className="text-gray-900">{t('hero.title0')}</span>{' '}
          <span className={gradients.text.primary}>{t('hero.title1')}</span>
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg text-center text-gray-600 max-w-2xl mb-8 sm:mb-12">
          {t('hero.subtitle')}
        </p>

        {/* CTA Button */}
        <div className="relative group mb-16">
          <div
            className={`absolute -inset-0.5 ${gradients.border.primary} rounded-lg opacity-75 blur-sm group-hover:opacity-100 group-hover:blur-xs transition duration-1000 group-hover:duration-200 animate-gradient`}
          ></div>
          <button
            onClick={() => window.open(links.bookADemo, '_blank')}
            className="relative px-8 py-4 bg-white rounded-lg leading-none"
          >
            <span className={gradients.text.primary}>{t('hero.cta')}</span>
          </button>
        </div>

        {/* Dashboard Mockup */}
        <div className="w-full max-w-5xl mx-auto relative">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
            {/* Dashboard Header */}
            <div className="bg-white border-b border-gray-200 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Layout className="w-5 h-5 text-blue-600" />
                  <h2 className="text-lg font-semibold text-gray-900">AI Security Dashboard</h2>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                    <Bell className="w-5 h-5" />
                  </button>
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-blue-500"></div>
                    <div className="w-8 h-8 rounded-full bg-teal-500"></div>
                    <div className="w-8 h-8 rounded-full bg-purple-500"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <h3 className="font-medium text-gray-900">Security Status</h3>
                  </div>
                  <span className="px-2.5 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                    Protected
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Data Protection</span>
                    <span className="text-gray-900">Active</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">AI Access Control</span>
                    <span className="text-gray-900">Enforced</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-teal-600" />
                    <h3 className="font-medium text-gray-900">Team Activity</h3>
                  </div>
                  <span className="text-sm text-gray-600">Last 24h</span>
                </div>
                <div className="space-y-2">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-teal-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Active Users</span>
                    <span className="text-gray-900">42/60</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-300/20 to-orange-300/70 rounded-full blur-xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-teal-300/20 to-blue-300/20 rounded-full blur-xl"></div>
        </div>

        {/* Trust badge */}
        <div className="mt-12">
          <div className="py-2 px-4 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm">
            <p className="text-sm text-gray-600 text-center">{t('hero.trustBadge')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
