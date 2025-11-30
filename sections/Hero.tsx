import React from 'react';
import { ArrowLeft } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-sm font-semibold mb-8">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
          </span>
          متاح لاستقبال مشاريع جديدة
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
          أساعد الشركات الطموحة على <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
             النمو المتسارع والمستدام
          </span>
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 leading-relaxed">
          أنا آية محمود، خبيرة في التسويق الإلكتروني والجروث هاكينج. أحول البيانات إلى أرباح وأبني استراتيجيات إعلانية تحقق أعلى عائد استثمار لشركتك.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-purple-600 hover:bg-purple-700 shadow-lg shadow-purple-200 transition-all transform hover:-translate-y-1">
            احجز استشارة مجانية
            <ArrowLeft className="mr-2 h-5 w-5" />
          </a>
          <a href="#portfolio" className="inline-flex items-center justify-center px-8 py-4 border border-gray-200 text-lg font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 transition-all">
            شاهد أعمالي
          </a>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Logos placeholders */}
            <span className="text-xl font-bold text-gray-400">Google Ads</span>
            <span className="text-xl font-bold text-gray-400">Meta Business</span>
            <span className="text-xl font-bold text-gray-400">TikTok Ads</span>
            <span className="text-xl font-bold text-gray-400">Snapchat</span>
            <span className="text-xl font-bold text-gray-400">Shopify</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;