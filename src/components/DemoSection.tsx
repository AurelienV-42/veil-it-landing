'use client';

import { DemoMode, trackDemoModeSwitch } from '@/utils/analytics';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useState } from 'react';

interface DemoTabProps {
  isActive: boolean;
  onClick: () => void;
  shadowColor: string;
  hoverShadowColor: string;
  children: React.ReactNode;
}

const DemoTab: React.FC<DemoTabProps> = ({
  isActive,
  onClick,
  shadowColor,
  children,
}) => (
  <button
    onClick={onClick}
    className={`relative px-6 py-3 rounded-full transition-all duration-300 font-medium text-sm ${
      isActive
        ? `text-white ${shadowColor.includes('blue') ? 'bg-blue-500' : shadowColor.includes('orange') ? 'bg-orange-500' : 'bg-purple-500'} shadow-lg`
        : 'text-gray-700 bg-gray-100 hover:bg-gray-200 hover:shadow-md'
    }`}
  >
    {children}
  </button>
);

const DemoSection: React.FC = () => {
  const t = useTranslations();
  const locale = useLocale();
  const [demoMode, setDemoMode] = useState<DemoMode>('detection');

  const handleDemoModeChange = (mode: DemoMode) => {
    const previousMode = demoMode;
    setDemoMode(mode);
    trackDemoModeSwitch(mode, previousMode);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {t('hero.demo.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('hero.demo.subtitle')}
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Pill-style Tab Controls */}
          <div className="flex justify-center gap-3 mb-12">
            <DemoTab
              isActive={demoMode === 'detection'}
              onClick={() => handleDemoModeChange('detection')}
              shadowColor="shadow-2xl shadow-blue-200/60"
              hoverShadowColor="hover:shadow-3xl hover:shadow-blue-400/80"
            >
              {t('hero.demo.detection.title')}
            </DemoTab>

            <DemoTab
              isActive={demoMode === 'anonymisation'}
              onClick={() => handleDemoModeChange('anonymisation')}
              shadowColor="shadow-2xl shadow-orange-200/60"
              hoverShadowColor="hover:shadow-3xl hover:shadow-orange-400/80"
            >
              {t('hero.demo.anonymisation.title')}
            </DemoTab>

            <DemoTab
              isActive={demoMode === 'dashboard'}
              onClick={() => handleDemoModeChange('dashboard')}
              shadowColor="shadow-2xl shadow-purple-200/60"
              hoverShadowColor="hover:shadow-3xl hover:shadow-purple-400/80"
            >
              {t('hero.demo.dashboard.title')}
            </DemoTab>
          </div>

          {/* Two-column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 items-start">
            {/* Left Column - Description */}
            <div className="lg:col-span-2">
              <div className="sticky top-8">
                <div className="p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg border border-gray-200">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {t(`hero.demo.${demoMode}.title`)}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t(`hero.demo.${demoMode}.description`)}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Demo Container */}
            <div className="lg:col-span-4">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1">
                {/* Glowing border effect */}
                <div
                  className={`absolute -inset-1 rounded-3xl opacity-40 blur-sm transition-all duration-500 ${
                    demoMode === 'detection'
                      ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-500'
                      : demoMode === 'anonymisation'
                        ? 'bg-gradient-to-r from-orange-400 via-orange-500 to-red-500'
                        : 'bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-500'
                  }`}
                ></div>

                {/* Demo container */}
                <div className="relative bg-white rounded-3xl p-4">
                  {demoMode === 'dashboard' ? (
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 min-h-[400px] flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-4">📊</div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          Dashboard Preview
                        </h3>
                        <p className="text-gray-600">
                          Analytics and training insights coming soon
                        </p>
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={
                        demoMode === 'detection'
                          ? locale === 'fr'
                            ? '/Secure Your Prompts FR.gif'
                            : '/Secure your prompt EN.gif'
                          : '/Secure your prompt EN.gif'
                      }
                      alt={
                        locale === 'fr'
                          ? `Démonstration ${demoMode === 'detection' ? 'de détection' : "d'anonymisation"} Veil-it`
                          : `Veil-it ${demoMode === 'detection' ? 'detection' : 'anonymisation'} demonstration`
                      }
                      width={1200}
                      height={675}
                      className="w-full h-auto rounded-2xl"
                      unoptimized
                    />
                  )}
                </div>

                {/* Modern mode indicator */}
                <div
                  className={`absolute top-6 right-6 backdrop-blur-sm px-4 py-2 rounded-full flex items-center space-x-3 ${
                    demoMode === 'detection'
                      ? 'bg-blue-100/90 shadow-lg shadow-blue-200/50'
                      : demoMode === 'anonymisation'
                        ? 'bg-orange-100/90 shadow-lg shadow-orange-200/50'
                        : 'bg-purple-100/90 shadow-lg shadow-purple-200/50'
                  }`}
                >
                  <div
                    className={`w-3 h-3 rounded-full animate-pulse ${
                      demoMode === 'detection'
                        ? 'bg-blue-500'
                        : demoMode === 'anonymisation'
                          ? 'bg-orange-500'
                          : 'bg-purple-500'
                    }`}
                  ></div>
                  <span className="text-sm font-bold text-gray-800">
                    {demoMode === 'detection'
                      ? 'DETECTION'
                      : demoMode === 'anonymisation'
                        ? 'ANONYMISATION'
                        : 'DASHBOARD'}
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
