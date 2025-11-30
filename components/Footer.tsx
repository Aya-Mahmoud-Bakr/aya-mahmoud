import React from 'react';
import { Rocket } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
                <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center text-white">
                    <Rocket size={18} />
                </div>
                <span className="font-bold text-xl">آية محمود</span>
            </div>
            
            <div className="text-gray-400 text-sm text-center md:text-right">
                <p>&copy; {new Date().getFullYear()} جميع الحقوق محفوظة. تم التصميم والتطوير بواسطة آية محمود.</p>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;