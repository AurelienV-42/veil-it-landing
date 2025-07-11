'use client';

import { Globe, Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useLanguageSwitcher } from '@/hooks/useLanguageSwitcher';
import links from '@/config/links';
import { gradients } from '@/styles/gradients';
import { Logo } from '@/components/Logo';

const TopNavigation: React.FC = () => {
  const t = useTranslations();
  const { changeLanguage, currentLocale } = useLanguageSwitcher();
  const [menuState, setMenuState] = useState({
    isMenuOpen: false,
    isLangOpen: false,
  });

  const handleLanguageChange = (lang: string) => {
    changeLanguage(lang);
    setMenuState(prev => ({ ...prev, isLangOpen: false }));
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuState(prev => ({ ...prev, isMenuOpen: false }));
  };

  const navItems = [
    { id: 'hero', label: t('navigation.home') },
    { id: 'problem', label: t('navigation.problem') },
    { id: 'solution', label: t('navigation.solution') },
    { id: 'features', label: t('navigation.features') },
    { id: 'faq', label: t('navigation.faq') },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo className="mt-2" />
          </div>

          {/* Right side items */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() =>
                  setMenuState(prev => ({
                    ...prev,
                    isLangOpen: !prev.isLangOpen,
                  }))
                }
                className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                <Globe className="w-4 h-4" />
                <span>{currentLocale.toUpperCase()}</span>
              </button>
              {menuState.isLangOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-10">
                  <button
                    onClick={() => handleLanguageChange('fr')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <span role="img" aria-label="French flag">
                      🇫🇷
                    </span>{' '}
                    Français
                  </button>
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <span role="img" aria-label="American flag">
                      🇺🇸
                    </span>{' '}
                    English
                  </button>
                </div>
              )}
            </div>

            {/* CTA Button */}
            <div className="relative group">
              <div
                className={`absolute -inset-0.5 ${gradients.border.primary} rounded-lg opacity-75 blur group-hover:opacity-100 transition duration-300`}
              ></div>
              <button
                onClick={() => window.open(links.bookADemo, '_blank')}
                className="relative px-4 py-1.5 rounded-lg bg-white text-xs font-semibold shadow-md hover:shadow-lg transition-all duration-300"
              >
                <span className={gradients.text.primary}>{t('hero.cta')}</span>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() =>
                setMenuState(prev => ({
                  ...prev,
                  isMenuOpen: !prev.isMenuOpen,
                }))
              }
              className="text-gray-700 hover:text-gray-900 p-2"
            >
              {menuState.isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuState.isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md text-base font-medium"
                >
                  {item.label}
                </button>
              ))}

              {/* Mobile Language Switcher */}
              <div className="px-3 py-2">
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleLanguageChange('fr')}
                    className={`px-3 py-1 rounded text-sm ${
                      currentLocale === 'fr'
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-700'
                    }`}
                  >
                    🇫🇷 FR
                  </button>
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className={`px-3 py-1 rounded text-sm ${
                      currentLocale === 'en'
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-700'
                    }`}
                  >
                    🇺🇸 EN
                  </button>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="px-3 py-2">
                <button
                  onClick={() => window.open(links.bookADemo, '_blank')}
                  className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                >
                  {t('hero.cta')}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default TopNavigation;
