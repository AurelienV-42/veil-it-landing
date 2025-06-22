'use client';

import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const FAQ: React.FC = () => {
  const { t } = useTranslation();
  const [openItems, setOpenItems] = useState<string[]>([]);

  const faqItems = ['whoCanSee', 'gdprCompliant', 'whenImplement'];

  const toggleItem = (itemKey: string) => {
    setOpenItems(prev =>
      prev.includes(itemKey)
        ? prev.filter(key => key !== itemKey)
        : [...prev, itemKey]
    );
  };

  const isOpen = (itemKey: string) => openItems.includes(itemKey);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
          {t('faq.title')}
        </h2>

        <div className="space-y-4">
          {faqItems.map(itemKey => (
            <div
              key={itemKey}
              className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => toggleItem(itemKey)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-inset"
                aria-expanded={isOpen(itemKey)}
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {t(`faq.items.${itemKey}.question`)}
                </h3>
                <div
                  className="ml-4 flex-shrink-0 transition-transform duration-300 ease-in-out"
                  style={{
                    transform: isOpen(itemKey)
                      ? 'rotate(180deg)'
                      : 'rotate(0deg)',
                  }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen(itemKey) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-4 border-t border-gray-100">
                  <p className="text-gray-700 leading-relaxed pt-4">
                    {t(`faq.items.${itemKey}.answer`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
