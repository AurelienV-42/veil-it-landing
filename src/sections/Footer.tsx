import React from 'react';
import { useTranslation } from 'react-i18next';
import { gradients } from '../styles/gradients';

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">{t('footer.product.title')}</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-600 hover:text-gray-900 text-sm">{t('footer.product.features')}</a></li>
              <li><a href="#security" className="text-gray-600 hover:text-gray-900 text-sm">{t('footer.product.security')}</a></li>
              <li><a href="#enterprise" className="text-gray-600 hover:text-gray-900 text-sm">{t('footer.product.enterprise')}</a></li>
              <li><a href="#pricing" className="text-gray-600 hover:text-gray-900 text-sm">{t('footer.product.pricing')}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">{t('footer.company.title')}</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-600 hover:text-gray-900 text-sm">{t('footer.company.about')}</a></li>
              <li><a href="#careers" className="text-gray-600 hover:text-gray-900 text-sm">{t('footer.company.careers')}</a></li>
              <li><a href="#blog" className="text-gray-600 hover:text-gray-900 text-sm">{t('footer.company.blog')}</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-gray-900 text-sm">{t('footer.company.contact')}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">{t('footer.resources.title')}</h3>
            <ul className="space-y-3">
              <li><a href="#documentation" className="text-gray-600 hover:text-gray-900 text-sm">{t('footer.resources.documentation')}</a></li>
              <li><a href="#guides" className="text-gray-600 hover:text-gray-900 text-sm">{t('footer.resources.guides')}</a></li>
              <li><a href="#api" className="text-gray-600 hover:text-gray-900 text-sm">{t('footer.resources.api')}</a></li>
              <li><a href="#status" className="text-gray-600 hover:text-gray-900 text-sm">{t('footer.resources.status')}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">{t('footer.legal.title')}</h3>
            <ul className="space-y-3">
              <li><a href="#privacy" className="text-gray-600 hover:text-gray-900 text-sm">{t('footer.legal.privacy')}</a></li>
              <li><a href="#terms" className="text-gray-600 hover:text-gray-900 text-sm">{t('footer.legal.terms')}</a></li>
              <li><a href="#security" className="text-gray-600 hover:text-gray-900 text-sm">{t('footer.legal.security')}</a></li>
              <li><a href="#cookies" className="text-gray-600 hover:text-gray-900 text-sm">{t('footer.legal.cookies')}</a></li>
            </ul>
          </div>
        </div> */}

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo and copyright */}
          <div className="flex items-center space-x-4">
            <span className={`text-xl font-bold ${gradients.text.primary}`}>Veil-it</span>
            <span className="text-sm text-gray-500">
              {t('footer.copyright', { year: currentYear })}
            </span>
          </div>

          {/* Language selector and social links */}
          <div className="flex items-center space-x-4">
            <select
              onChange={e => changeLanguage(e.target.value)}
              value={i18n.language}
              className="text-sm text-gray-600 bg-transparent border-none focus:ring-0 cursor-pointer"
            >
              <option value="en">{t('footer.language.en')}</option>
              <option value="fr">{t('footer.language.fr')}</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
