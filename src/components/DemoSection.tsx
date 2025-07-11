'use client';

import { DemoMode, trackDemoModeSwitch } from '@/utils/analytics';
import { useTranslations } from 'next-intl';
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
  const [demoMode, setDemoMode] = useState<DemoMode>('detection');
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleDemoModeChange = (mode: DemoMode) => {
    const previousMode = demoMode;
    setDemoMode(mode);
    trackDemoModeSwitch(mode, previousMode);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
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
              isActive={demoMode === 'veil'}
              onClick={() => handleDemoModeChange('veil')}
              shadowColor="shadow-2xl shadow-orange-200/60"
              hoverShadowColor="hover:shadow-3xl hover:shadow-orange-400/80"
            >
              {t('hero.demo.veil.title')}
            </DemoTab>

            <DemoTab
              isActive={demoMode === 'detection'}
              onClick={() => handleDemoModeChange('detection')}
              shadowColor="shadow-2xl shadow-blue-200/60"
              hoverShadowColor="hover:shadow-3xl hover:shadow-blue-400/80"
            >
              {t('hero.demo.detection.title')}
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
                    demoMode === 'veil'
                      ? 'bg-gradient-to-r from-orange-400 via-orange-500 to-red-500'
                      : demoMode === 'detection'
                        ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-500'
                        : 'bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-500'
                  }`}
                ></div>

                {/* Demo container */}
                <div className="relative bg-white rounded-3xl p-4">
                  {demoMode === 'dashboard' ? (
                    <div className="relative">
                      <Image
                        src="/dashboard.png"
                        alt="Veil-it Dashboard - Analytics and training insights"
                        width={1200}
                        height={675}
                        className="w-full h-auto rounded-2xl"
                        unoptimized
                      />
                      <button
                        onClick={toggleFullscreen}
                        className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-lg transition-all duration-200 backdrop-blur-sm"
                        title="View fullscreen"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 1v4m0 0h-4m4 0l-5-5"
                          />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <video
                      src={
                        demoMode === 'veil'
                          ? '/anonymization.mp4'
                          : '/blockedAI.mp4'
                      }
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-auto rounded-2xl"
                    />
                  )}
                </div>

                {/* Modern mode indicator */}
                <div
                  className={`absolute top-6 right-6 backdrop-blur-sm px-4 py-2 rounded-full flex items-center space-x-3 ${
                    demoMode === 'veil'
                      ? 'bg-orange-100/90 shadow-lg shadow-orange-200/50'
                      : demoMode === 'detection'
                        ? 'bg-blue-100/90 shadow-lg shadow-blue-200/50'
                        : 'bg-purple-100/90 shadow-lg shadow-purple-200/50'
                  }`}
                >
                  <div
                    className={`w-3 h-3 rounded-full animate-pulse ${
                      demoMode === 'veil'
                        ? 'bg-orange-500'
                        : demoMode === 'detection'
                          ? 'bg-blue-500'
                          : 'bg-purple-500'
                    }`}
                  ></div>
                  <span className="text-sm font-bold text-gray-800">
                    {demoMode === 'veil'
                      ? 'VEIL'
                      : demoMode === 'detection'
                        ? 'SHADOW AI DETECTION'
                        : 'DASHBOARD'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-7xl w-full">
            <button
              onClick={toggleFullscreen}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-all duration-200 backdrop-blur-sm z-10"
              title="Close fullscreen"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <Image
              src="/dashboard.png"
              alt="Veil-it Dashboard - Analytics and training insights"
              width={1920}
              height={1080}
              className="w-full h-auto rounded-lg"
              unoptimized
            />
          </div>
          <div
            className="absolute inset-0 -z-10"
            onClick={toggleFullscreen}
          ></div>
        </div>
      )}
    </section>
  );
};

export default DemoSection;
