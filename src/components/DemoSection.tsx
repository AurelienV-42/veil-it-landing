'use client';

import { trackDemoModeSwitch } from '@/utils/analytics';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useState } from 'react';

const DemoSection: React.FC = () => {
  const t = useTranslations();
  const locale = useLocale();
  const [demoMode, setDemoMode] = useState<'detection' | 'blocking'>(
    'detection'
  );

  const handleDemoModeChange = (mode: 'detection' | 'blocking') => {
    const previousMode = demoMode;
    setDemoMode(mode);
    trackDemoModeSwitch(mode, previousMode);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Demo Section */}
        <div className="mb-16 max-w-6xl w-full mx-auto animate-fade-in-delay-3">
          {/* Demo Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Description and Controls */}
            <div className="lg:col-span-1 space-y-6">
              <div className="space-y-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg">
                  <button
                    onClick={() => handleDemoModeChange('detection')}
                    className={`w-full mb-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      demoMode === 'detection'
                        ? 'bg-blue-500 text-white shadow-lg'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <h3>{t('hero.demo.detection.title')}</h3>
                  </button>
                  <button
                    onClick={() => handleDemoModeChange('blocking')}
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
                        ? locale === 'fr'
                          ? '/Secure Your Prompts FR.gif'
                          : '/Secure your prompt EN.gif'
                        : '/Secure your prompt EN.gif' // We'll use the same GIF for now, you can add a blocking GIF later
                    }
                    alt={
                      locale === 'fr'
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
    </section>
  );
};

export default DemoSection;