'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { gradients } from '@/styles/gradients';

const SimpleFooter: React.FC = () => {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  const changeLanguage = (lang: string) => {
    const currentPath = pathname.replace(`/${locale}`, '') || '/';
    const newPath = lang === 'en' ? currentPath : `/${lang}${currentPath}`;
    router.push(newPath);
  };

  return (
    <footer className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <span className={`text-xl font-bold ${gradients.text.primary}`}>
              Veil-it
            </span>
          </div>

          <div className="text-sm text-gray-600">
            {t('footer.copyright', { year: currentYear })}
          </div>

          <div className="flex items-center space-x-4">
            <select
              onChange={e => changeLanguage(e.target.value)}
              value={locale}
              className="text-sm text-gray-600 bg-transparent border rounded px-2 py-1 cursor-pointer"
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

export default SimpleFooter;
