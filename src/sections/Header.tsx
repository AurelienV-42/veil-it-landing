'use client'

import { AlertTriangle, BarChart3, Menu, Shield, X } from 'lucide-react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Logo } from '../components/Logo';
import links from '../config/links';
import { gradients } from '../styles/gradients';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showExtension, setShowExtension] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleExtension = () => {
    setShowExtension(!showExtension);
  };

  return (
    <header className="fixed w-full z-50 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Logo className={`w-6 h-6 text-blue-500`} />
              <span className={`text-xl font-bold ${gradients.text.primary}`}>Crabbio</span>
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* <a
          
                href={i18n.language === 'fr' ? 'https://crabbio.notion.site/guides-fr' : 'https://crabbio.notion.site/guides-en'}
                className="text-gray-600 hover:text-gray-900 text-sm mr-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('footer.guides')}
              </a> */}
            {/* Book a Demo button */}
            <div className="relative group">
              <div
                className={`absolute -inset-0.5 ${gradients.border.primary} rounded-md opacity-75 blur-sm group-hover:opacity-100 group-hover:blur-md transition duration-1000 group-hover:duration-200 animate-gradient`}
              ></div>
              <button
                onClick={() => window.open(links.bookADemo, '_blank')}
                className="relative px-4 py-2 rounded-md leading-none bg-white"
              >
                <span className={gradients.text.primary}>{t('hero.cta')}</span>
              </button>
            </div>

            {/* Show Extension button */}
            {/* <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-md opacity-0 blur-sm group-hover:opacity-20 group-hover:blur-md transition duration-1000 group-hover:duration-200 animate-gradient"></div>
              <button
                onClick={toggleExtension}
                className="relative px-4 py-2 bg-white rounded-md leading-none"
              >
                <span className="text-gray-900 text-sm font-medium">
                  {t('header.showExtension')}
                </span>
              </button>
            </div> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col space-y-4 py-4">
              <a
                href={
                  i18n.language === 'fr'
                    ? 'https://crabbio.notion.site/guides-fr'
                    : 'https://crabbio.notion.site/guides-en'
                }
                className="text-gray-600 hover:text-gray-900 text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('footer.guides')}
              </a>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-md opacity-75 blur-sm group-hover:opacity-100 group-hover:blur-md transition duration-1000 group-hover:duration-200 animate-gradient"></div>
                <button className="relative w-full px-4 py-2 bg-white rounded-md leading-none">
                  <span className={gradients.text.primary}>{t('hero.cta')}</span>
                </button>
              </div>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-md opacity-0 blur-sm group-hover:opacity-75 group-hover:blur-md transition duration-1000 group-hover:duration-200 animate-gradient"></div>
                <button
                  onClick={toggleExtension}
                  className="relative w-full px-4 py-2 bg-white rounded-md leading-none"
                >
                  <span className="text-gray-900 text-sm font-medium">
                    {t('header.showExtension')}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Extension Panel */}
      {showExtension && (
        <div className="fixed top-0 right-4 mt-20 w-96 bg-white rounded-lg shadow-2xl border border-gray-200 transform transition-all duration-300 ease-in-out">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900">AI Security Controls</h3>
              <button onClick={toggleExtension} className="text-gray-400 hover:text-gray-600">
                <X size={20} />
              </button>
            </div>

            {/* Data Protection */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-blue-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Data Protection</p>
                    <p className="text-xs text-gray-500">Locked by my team</p>
                  </div>
                </div>
                <div className="relative">
                  <input
                    type="checkbox"
                    checked
                    disabled
                    className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-blue-500 appearance-none cursor-not-allowed"
                  />
                  <label className="toggle-label block overflow-hidden h-6 w-12 rounded-full bg-blue-500 cursor-not-allowed"></label>
                </div>
              </div>

              {/* Usage Monitoring */}
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <BarChart3 className="w-5 h-5 text-green-500" />
                  <p className="text-sm font-medium text-gray-900">My Score</p>
                </div>
                <div className="bg-gray-100 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full w-4/5"></div>
                </div>
                <p className="text-xs text-gray-500">80% of your AI usage is safe</p>
              </div>

              {/* Security Violations Log */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="w-5 h-5 text-amber-500" />
                  <p className="text-sm font-medium text-gray-900">Recent Security Alerts</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 space-y-2">
                  <div className="text-xs text-gray-600">
                    <p className="font-medium">Attempted API key sharing</p>
                    <p className="text-gray-500">Today, 10:23 AM</p>
                  </div>
                  <div className="text-xs text-gray-600">
                    <p className="font-medium">Unauthorized AI client access</p>
                    <p className="text-gray-500">Yesterday, 3:45 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
