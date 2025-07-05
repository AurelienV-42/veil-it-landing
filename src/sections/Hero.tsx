'use client';

import links from '@/config/links';
import { useSectionTracking } from '@/hooks/useAnalytics';
import { gradients } from '@/styles/gradients';
import { trackCTAClick } from '@/utils/analytics';
import { ArrowRight, Volume2 } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import React, { useRef, useState } from 'react';

const Hero: React.FC = () => {
  const t = useTranslations();
  const locale = useLocale();
  const sectionRef = useSectionTracking('hero');
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleCTAClick = () => {
    trackCTAClick('book-demo', 'hero-section');
    window.open(links.bookADemo, '_blank');
  };

  const handleUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsMuted(false);
    }
  };

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  const handleVideoError = () => {
    console.error('Video failed to load');
  };

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 ${gradients.background.primary}`}></div>

      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl animate-float-delay-1"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-float-delay-2"></div>
      </div>

      {/* Flying Badges */}
      {/* <div className="absolute inset-0 pointer-events-none z-5">
        <div className="absolute top-1/4 left-8 md:left-16 badge-tooltip animate-float pointer-events-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-3 shadow-lg border border-white/20 flex items-center space-x-2 hover:shadow-xl transition-all duration-300">
            <Shield className="w-5 h-5 text-green-500" />
            <span className="text-sm font-semibold text-gray-800">GDPR</span>
          </div>
          <div className="tooltip">
            100% compliant. Nothing is stored, nothing leaves the device.
          </div>
        </div>

        <div className="absolute top-1/3 right-8 md:right-16 badge-tooltip animate-float-delay-1 pointer-events-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-3 shadow-lg border border-white/20 flex items-center space-x-2 hover:shadow-xl transition-all duration-300">
            <Clock className="w-5 h-5 text-blue-500" />
            <span className="text-sm font-semibold text-gray-800">
              Fast setup
            </span>
          </div>
          <div className="tooltip">
            Install the Chrome extension in under 2 minutes — no complex
            deployment.
          </div>
        </div>

        <div className="absolute bottom-1/3 left-12 md:left-20 badge-tooltip animate-float-delay-2 pointer-events-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-3 shadow-lg border border-white/20 flex items-center space-x-2 hover:shadow-xl transition-all duration-300">
            <CheckCircle className="w-5 h-5 text-cyan-500" />
            <span className="text-sm font-semibold text-gray-800">Local</span>
          </div>
          <div className="tooltip">
            Runs fully client-side. No network calls, no external processing.
          </div>
        </div>
      </div> */}

      {/* Trust badges - moved to page level */}
      <div className="relative z-10 w-3/4 mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-32 flex flex-col items-center">
        {/* Pre-headline */}
        {/* <p className="text-sm sm:text-base font-medium text-gray-600 text-center mb-4 animate-fade-in">
          {t('hero.preHeadline')}
        </p> */}

        {/* Main headline */}
        <h1 className="text-4xl lg:text-6xl font-bold text-center mb-6 leading-tight mt-2 sm:mt-4 animate-fade-in">
          {locale === 'fr' ? (
            <>
              <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent">
                Bloquez
              </span>{' '}
              les fuites de données liées à l&apos;IA
            </>
          ) : (
            <>
              <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent">
                Stop
              </span>{' '}
              AI data leaks
            </>
          )}
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
            onClick={handleCTAClick}
            className="relative px-8 py-4 rounded-xl leading-none bg-white text-lg font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 group"
          >
            <span className={gradients.text.primary}>{t('hero.cta')}</span>
            <ArrowRight
              strokeWidth={3}
              className="w-5 h-5 text-cyan-500 group-hover:translate-x-1 transition-transform duration-300"
            />
          </button>
        </div>

        {/* Video Demo */}
        <div className="w-full mx-auto animate-fade-in-delay-3">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group border-8 border-white">
            {/* Glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-3xl opacity-30 blur-sm group-hover:opacity-50 transition-opacity duration-500"></div>

            {/* Video container */}
            <div className="relative rounded-3xl">
              <video
                ref={videoRef}
                className="w-full h-auto rounded-2xl"
                controls
                disablePictureInPicture
                controlsList="nodownload noplaybackrate"
                autoPlay
                loop
                muted
                playsInline
                poster="/video-poster.jpg"
                preload="metadata"
                onLoadedData={handleVideoLoad}
                onError={handleVideoError}
              >
                <source src="/pitch.webm" type="video/webm" />
                <source src="/pitch.mp4" type="video/mp4" />
                {locale === 'fr'
                  ? 'Votre navigateur ne supporte pas la lecture de vidéo.'
                  : 'Your browser does not support the video tag.'}
              </video>

              {!isVideoLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm rounded-2xl">
                  <div className="bg-white/60 backdrop-blur-sm rounded-full p-6 shadow-2xl flex flex-col items-center space-y-3">
                    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-sm font-semibold text-gray-700">
                      {locale === 'fr' ? 'CHARGEMENT...' : 'LOADING...'}
                    </span>
                  </div>
                </div>
              )}

              {isMuted && isVideoLoaded && (
                <div
                  className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm rounded-2xl cursor-pointer"
                  onClick={handleUnmute}
                >
                  <div className="bg-white/60 backdrop-blur-sm rounded-full p-6 shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 flex flex-col items-center space-y-3 group">
                    <Volume2 className="w-12 h-12 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
                    <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                      {locale === 'fr' ? 'ACTIVER LE SON' : 'UNMUTE'}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Play indicator overlay */}
            <div className="absolute top-4 right-4 backdrop-blur-sm bg-blue-100/90 px-3 py-1 rounded-full flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
              <span className="text-xs font-medium text-gray-800">
                {locale === 'fr' ? 'DÉMO' : 'DEMO'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
