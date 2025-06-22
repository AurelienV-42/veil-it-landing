'use client';

import { ArrowRight, CheckCircle, Clock, Shield } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import links from '../config/links';
import { gradients } from '../styles/gradients';

const SimpleHero: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [demoMode, setDemoMode] = useState<'detection' | 'blocking'>(
    'detection'
  );

  const trustBadges = [
    {
      icon: <Shield className="w-5 h-5 text-green-500" />,
      text: 'RGPD',
      tooltip: '100% compliant. Nothing is stored, nothing leaves the device.',
      position: 'top-1/4 right-0',
      animation: 'animate-float',
    },
    {
      icon: <Clock className="w-5 h-5 text-blue-500" />,
      text: 'Fast setup',
      tooltip:
        'Install the Chrome extension in under 2 minutes — no complex deployment.',
      position: 'top-1/6 right-0',
      animation: 'animate-float-delay-1',
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-cyan-500" />,
      text: 'Local',
      tooltip:
        'Runs fully client-side. No network calls, no external processing.',
      position: 'top-2/5 right-4',
      animation: 'animate-float-delay-2',
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background gradient */}
      <div className={`absolute inset-0 ${gradients.background.primary}`}></div>

      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl animate-float-delay-1"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-float-delay-2"></div>
      </div>
      {/* Trust badges - positioned as floating elements around the content */}
      <div className="absolute inset-0 hidden xl:block pointer-events-none">
        <div className="relative w-full h-full max-w-7xl mx-auto px-8">
          {trustBadges.map((badge, index) => (
            <div
              key={index}
              className={`absolute ${badge.position} ${badge.animation} pointer-events-auto badge-tooltip flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-full shadow-lg border border-gray-200/50 z-20 hover:shadow-xl transition-shadow duration-300 w-fit`}
            >
              {badge.icon}
              <span className="text-sm font-semibold text-gray-800 whitespace-nowrap">
                {badge.text}
              </span>
              <div className="tooltip">{badge.tooltip}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative z-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-32 flex flex-col items-center">
        {/* Main headline */}
        <h1 className="text-4xl lg:text-5xl font-bold text-center mb-6 leading-tight mt-8 sm:mt-16 animate-fade-in">
          {t('hero.title')}
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-lg md:text-xl text-gray-600 text-center mb-10 max-w-3xl leading-relaxed animate-fade-in-delay-2">
          {t('hero.subtitle')}
        </p>

        {/* CTA Button */}
        <div className="relative group mb-16 animate-fade-in-delay-2">
          <div
            className={`absolute -inset-1 ${gradients.border.primary} rounded-xl opacity-75 blur group-hover:opacity-100 group-hover:blur-lg transition duration-500 animate-gradient`}
          ></div>
          <button
            onClick={() => window.open(links.bookADemo, '_blank')}
            className="relative px-8 py-4 rounded-xl leading-none bg-white text-lg font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-3 group"
          >
            <span className={gradients.text.primary}>{t('hero.cta')}</span>
            <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Demo Section */}
        <div className="mb-16 max-w-6xl w-full animate-fade-in-delay-3">
          {/* Demo Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Description and Controls */}
            <div className="lg:col-span-1 space-y-6">
              <div className="space-y-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg">
                  <button
                    onClick={() => setDemoMode('detection')}
                    className={`w-full mb-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      demoMode === 'detection'
                        ? 'bg-blue-500 text-white shadow-lg'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <h3>{t('hero.demo.detection.title')}</h3>
                  </button>
                  <button
                    onClick={() => setDemoMode('blocking')}
                    className={`w-full px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      demoMode === 'blocking'
                        ? 'bg-orange-500 text-white shadow-lg'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <h3>{t('hero.demo.blocking.title')}</h3>
                  </button>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t(`hero.demo.${demoMode}.description`)}
                </p>
              </div>
            </div>

            {/* GIF Demo */}
            <div className="lg:col-span-2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                {/* Glowing border effect */}
                <div
                  className={`absolute -inset-1 rounded-3xl opacity-30 blur-sm group-hover:opacity-50 transition-opacity duration-500 ${
                    demoMode === 'detection'
                      ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500'
                      : 'bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500'
                  }`}
                ></div>

                {/* GIF container */}
                <div className="relative bg-white rounded-3xl p-2">
                  <Image
                    src={
                      demoMode === 'detection'
                        ? i18n.language === 'fr'
                          ? '/Secure Your Prompts FR.gif'
                          : '/Secure your prompt EN.gif'
                        : '/Secure your prompt EN.gif' // We'll use the same GIF for now, you can add a blocking GIF later
                    }
                    alt={
                      i18n.language === 'fr'
                        ? `Démonstration ${demoMode === 'detection' ? 'de détection' : 'de blocage'} Veil-it`
                        : `Veil-it ${demoMode === 'detection' ? 'detection' : 'blocking'} demonstration`
                    }
                    width={1200}
                    height={675}
                    className="w-full h-auto rounded-2xl"
                    unoptimized
                  />
                </div>

                {/* Mode indicator overlay */}
                <div
                  className={`absolute top-4 right-4 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-2 ${
                    demoMode === 'detection'
                      ? 'bg-blue-100/90'
                      : 'bg-red-100/90'
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full animate-pulse ${
                      demoMode === 'detection' ? 'bg-blue-500' : 'bg-red-500'
                    }`}
                  ></div>
                  <span className="text-xs font-medium text-gray-800">
                    {demoMode === 'detection' ? 'DETECTION' : 'BLOCKING'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleHero;
