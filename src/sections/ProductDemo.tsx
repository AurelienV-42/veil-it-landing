'use client'

import { Grab as Crab, Shield, Users } from 'lucide-react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import VideoPlayer from '../components/VideoPlayer';

const ProductDemo: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<'prompts' | 'access'>('prompts');
  const { t } = useTranslation();

  const demoContent = {
    prompts: {
      videoId: '1081283363',
      title: t('productDemo.securePrompts.title'),
      description: t('productDemo.securePrompts.description'),
    },
    access: {
      videoId: '1081284140',
      title: t('productDemo.selectiveAccess.title'),
      description: t('productDemo.selectiveAccess.description'),
    },
  };

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Buttons */}
          <div className="space-y-8">
            <button
              onClick={() => setActiveDemo('prompts')}
              className={`w-full p-6 text-left rounded-xl border transition-all duration-300 group ${
                activeDemo === 'prompts'
                  ? 'border-blue-500 bg-white shadow-lg'
                  : 'border-gray-200 bg-white/50 hover:bg-white hover:shadow-md'
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
                  <Shield size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    {demoContent.prompts.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {demoContent.prompts.description}
                  </p>
                </div>
                <div className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Crab size={20} />
                </div>
              </div>
            </button>

            <button
              onClick={() => setActiveDemo('access')}
              className={`w-full p-6 text-left rounded-xl border transition-all duration-300 group ${
                activeDemo === 'access'
                  ? 'border-blue-500 bg-white shadow-lg'
                  : 'border-gray-200 bg-white/50 hover:bg-white hover:shadow-md'
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-teal-50 text-teal-600">
                  <Users size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    {demoContent.access.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {demoContent.access.description}
                  </p>
                </div>
              </div>
            </button>
          </div>

          {/* Right side - Video Display */}
          <div className="relative">
            <VideoPlayer videoId={demoContent[activeDemo].videoId} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDemo;
