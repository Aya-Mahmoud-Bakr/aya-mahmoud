import React from 'react';
import { pricingPlans } from '../data';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">الباقات</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            استثمر في نمو مشروعك
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 items-start">
          {pricingPlans.map((plan) => (
            <div 
                key={plan.id} 
                className={`relative rounded-3xl p-8 bg-white shadow-lg border ${plan.recommended ? 'border-purple-600 ring-4 ring-purple-100 scale-105 z-10' : 'border-gray-100'} transition-transform duration-300`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-1/2 transform translate-x-1/2 -translate-y-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                  الأكثر طلباً
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">{plan.name}</h3>
              <div className="text-center mb-8">
                 <span className="text-3xl font-extrabold text-purple-600">{plan.price}</span>
                 {plan.id !== 3 && <span className="text-gray-500 text-sm"> / شهرياً</span>}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 ml-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#contact" 
                className={`block w-full py-3 px-6 text-center rounded-xl font-medium transition-colors ${
                    plan.recommended 
                    ? 'bg-purple-600 text-white hover:bg-purple-700 shadow-lg shadow-purple-200' 
                    : 'bg-purple-50 text-purple-700 hover:bg-purple-100'
                }`}
              >
                اختر الباقة
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;