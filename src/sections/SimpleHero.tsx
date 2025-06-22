'use client'

import { Bell, Layout, Shield, Users } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import links from '../config/links';
import { gradients } from '../styles/gradients';

const SimpleHero: React.FC = () => {
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

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-gray-600 text-center mb-12 max-w-3xl leading-relaxed">
          {t('hero.subtitle')}
        </p>

        {/* CTA Button */}
        <div className="relative group mb-16">
          <div
            className={`absolute -inset-0.5 ${gradients.border.primary} rounded-lg opacity-75 blur group-hover:opacity-100 group-hover:blur-md transition duration-1000 group-hover:duration-200 animate-gradient`}
          ></div>
          <button
            onClick={() => window.open(links.bookADemo, '_blank')}
            className="relative px-8 py-4 rounded-lg leading-none bg-white text-lg font-semibold"
          >
            <span className={gradients.text.primary}>{t('hero.cta')}</span>
          </button>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl">
          <div className="text-center">
            <div className="p-4 rounded-full bg-white/10 backdrop-blur-sm inline-block mb-4">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Data Protection</h3>
            <p className="text-sm text-gray-600">Advanced encryption</p>
          </div>

          <div className="text-center">
            <div className="p-4 rounded-full bg-white/10 backdrop-blur-sm inline-block mb-4">
              <Users className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Team Management</h3>
            <p className="text-sm text-gray-600">Control access</p>
          </div>

          <div className="text-center">
            <div className="p-4 rounded-full bg-white/10 backdrop-blur-sm inline-block mb-4">
              <Layout className="w-8 h-8 text-cyan-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Easy Integration</h3>
            <p className="text-sm text-gray-600">Seamless setup</p>
          </div>

          <div className="text-center">
            <div className="p-4 rounded-full bg-white/10 backdrop-blur-sm inline-block mb-4">
              <Bell className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Real-time Alerts</h3>
            <p className="text-sm text-gray-600">Instant notifications</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleHero;