import React from 'react';
import { testimonials } from '../data';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-purple-900 text-white relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full mix-blend-overlay blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-overlay blur-3xl"></div>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            ماذا يقول عملاؤنا؟
          </h2>
          <p className="mt-4 text-xl text-purple-200">
            فخورة بالثقة التي منحها لي شركاء النجاح
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-purple-800/50 backdrop-blur-lg p-8 rounded-2xl border border-purple-700">
              <Quote className="text-purple-400 mb-4 h-8 w-8 opacity-50" />
              <p className="text-lg text-gray-100 italic mb-6 leading-relaxed">"{t.content}"</p>
              <div className="flex items-center">
                <img 
                    src={t.image} 
                    alt={t.name} 
                    className="h-12 w-12 rounded-full border-2 border-purple-400"
                />
                <div className="mr-4">
                  <div className="text-base font-bold text-white">{t.name}</div>
                  <div className="text-sm text-purple-300">{t.role} - {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;