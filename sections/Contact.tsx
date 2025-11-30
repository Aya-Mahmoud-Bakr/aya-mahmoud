import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');
        // Simulate sending
        setTimeout(() => {
            setFormStatus('success');
            alert("تم إرسال رسالتك بنجاح! سأتواصل معك قريباً.");
        }, 1500);
    };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">تواصل معي</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
              هل أنت مستعد لمضاعفة أرباحك؟
            </p>
            <p className="text-lg text-gray-500 mb-8">
              املأ النموذج وسأقوم بالرد عليك خلال ٢٤ ساعة لمناقشة مشروعك وتقديم استشارة أولية.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 ml-4">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">واتساب</p>
                  <p className="text-lg font-bold text-gray-900 dir-ltr text-right">+966 5X XXX XXXX</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 ml-4">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">البريد الإلكتروني</p>
                  <p className="text-lg font-bold text-gray-900">contact@ayamahmoud.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 ml-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">الموقع</p>
                  <p className="text-lg font-bold text-gray-900">الرياض، المملكة العربية السعودية</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
                <h4 className="font-bold text-gray-900 mb-4">تابعني على السوشيال ميديا</h4>
                <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-purple-600 hover:text-white transition-all"><Linkedin size={20}/></a>
                    <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-purple-600 hover:text-white transition-all"><Instagram size={20}/></a>
                    <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-purple-600 hover:text-white transition-all"><Facebook size={20}/></a>
                </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-0 bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">الاسم الكامل</label>
                <input type="text" id="name" required className="mt-1 block w-full rounded-lg border-gray-300 bg-white py-3 px-4 shadow-sm focus:border-purple-500 focus:ring-purple-500 border" placeholder="محمد علي" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">البريد الإلكتروني</label>
                <input type="email" id="email" required className="mt-1 block w-full rounded-lg border-gray-300 bg-white py-3 px-4 shadow-sm focus:border-purple-500 focus:ring-purple-500 border" placeholder="you@company.com" />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700">الخدمة المطلوبة</label>
                <select id="service" className="mt-1 block w-full rounded-lg border-gray-300 bg-white py-3 px-4 shadow-sm focus:border-purple-500 focus:ring-purple-500 border">
                    <option>إدارة حملات إعلانية</option>
                    <option>استراتيجية تسويق</option>
                    <option>تحليل أداء واستشارة</option>
                    <option>أخرى</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">رسالتك</label>
                <textarea id="message" rows={4} className="mt-1 block w-full rounded-lg border-gray-300 bg-white py-3 px-4 shadow-sm focus:border-purple-500 focus:ring-purple-500 border" placeholder="أخبرني المزيد عن مشروعك وأهدافك..."></textarea>
              </div>

              <button 
                type="submit" 
                disabled={formStatus === 'submitting'}
                className="w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-xl shadow-sm text-lg font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-70 transition-all"
              >
                {formStatus === 'submitting' ? 'جاري الإرسال...' : (
                    <>
                    إرسال الطلب
                    <Send className="mr-2 h-5 w-5" />
                    </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;