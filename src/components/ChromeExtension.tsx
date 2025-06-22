import React from 'react';
import { Shield, CheckCircle, Lock, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ChromeExtension: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full h-full relative">
      {/* Chrome browser mockup */}
      <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-1">
        {/* Browser header */}
        <div className="bg-gray-100 px-4 py-2 border-b border-gray-200">
          <div className="flex items-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>

            {/* Address bar */}
            <div className="flex-1 mx-4">
              <div className="bg-white rounded-md h-6 flex items-center px-3 text-xs text-gray-500 border border-gray-300">
                <div className="flex items-center">
                  <Lock className="w-3 h-3 mr-1" />
                  crabbio.ai/dashboard
                </div>
              </div>
            </div>

            {/* Browser actions */}
            <div className="flex space-x-4">
              <div className="w-4 h-4 rounded-full bg-gray-300"></div>
              <div className="w-4 h-4 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </div>

        {/* Extension content */}
        <div className="p-6 bg-gradient-to-br from-white to-blue-50">
          <div className="flex flex-col space-y-6">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Assistant Controls</h3>
              <p className="text-sm text-gray-600">
                Manage how AI interacts with your sensitive data
              </p>
            </div>

            {/* Control panel */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-start">
                  <Shield className="text-blue-500 mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">
                      {t('extension.dataProtection')}
                    </h4>
                    <p className="text-xs text-gray-600">
                      Prevent sensitive data from being shared with AI models
                    </p>
                    <div className="mt-3 flex items-center">
                      <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                        <input
                          type="checkbox"
                          name="toggle"
                          id="toggle-1"
                          className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer"
                        />
                        <label
                          htmlFor="toggle-1"
                          className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                        ></label>
                      </div>
                      <span className="text-xs text-gray-500">Enabled</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-start">
                  <Users className="text-teal-500 mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">{t('extension.teamAccess')}</h4>
                    <p className="text-xs text-gray-600">Control which teams can use AI features</p>
                    <div className="mt-3 flex items-center">
                      <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                        <input
                          type="checkbox"
                          name="toggle"
                          id="toggle-2"
                          className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer"
                        />
                        <label
                          htmlFor="toggle-2"
                          className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                        ></label>
                      </div>
                      <span className="text-xs text-gray-500">Restricted</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">
                      {t('extension.usageMonitoring')}
                    </h4>
                    <p className="text-xs text-gray-600">Track and audit all AI interactions</p>
                    <div className="mt-2">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-green-500 h-2.5 rounded-full"
                          style={{ width: '70%' }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">70% of monthly quota used</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-start">
                  <Lock className="text-orange-500 mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">{t('extension.permissions')}</h4>
                    <p className="text-xs text-gray-600">Configure what AI can access</p>
                    <div className="mt-3">
                      <button className="px-3 py-1 text-xs rounded bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors">
                        Configure
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 flex justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-teal-400 text-white px-4 py-2 rounded-md shadow-sm hover:shadow-md transition-all duration-300 text-sm">
                Apply Settings
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-orange-300/20 to-red-300/20 rounded-full blur-xl"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-blue-300/20 to-cyan-300/20 rounded-full blur-xl"></div>
    </div>
  );
};

export default ChromeExtension;
