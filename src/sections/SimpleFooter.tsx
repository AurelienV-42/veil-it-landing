import React from 'react';
import { gradients } from '../styles/gradients';

const SimpleFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <span className={`text-xl font-bold ${gradients.text.primary}`}>Crabbio</span>
          </div>
          
          <div className="text-sm text-gray-600">
            © {currentYear} Crabbio. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;