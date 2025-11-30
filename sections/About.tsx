import React from 'react';
import { Award, Briefcase, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          <div className="relative mb-12 lg:mb-0">
             <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                    src="https://picsum.photos/600/700?random=10" 
                    alt="Aya Mahmoud working" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 right-6 text-white">
                    <p className="font-bold text-2xl">آية محمود</p>
                    <p className="opacity-90">Growth Marketing Specialist</p>
                </div>
             </div>
             {/* Decorative element */}
             <div className="absolute -z-10 top-10 -left-10 w-full h-full border-2 border-purple-200 rounded-2xl"></div>
          </div>

          <div>
            <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">من أنا</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              شغوفة بالأرقام، مهووسة بالنتائج
            </p>
            <p className="mt-4 text-lg text-gray-500 leading-relaxed">
              أعمل في مجال التسويق الإلكتروني منذ أكثر من ٥ سنوات، تخصصت في مساعدة العلامات التجارية في السعودية، مصر، والكويت على توسيع نطاق أعمالهم. لا أؤمن بالحلول الجاهزة، بل أبني استراتيجيات مخصصة تعتمد على تحليل البيانات وسلوك المستهلك.
            </p>

            <div className="mt-10 space-y-8">
                <div className="flex gap-4">
                    <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-100 text-purple-600">
                            <TrendingUp size={24} />
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-medium text-gray-900">Performance Marketing</h4>
                        <p className="mt-2 text-base text-gray-500">
                            إدارة ميزانيات إعلانية ضخمة مع التركيز المستمر على خفض تكلفة الاستحواذ (CAC) ورفع العائد (ROAS).
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                            <Award size={24} />
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-medium text-gray-900">سجل حافل بالنجاحات</h4>
                        <p className="mt-2 text-base text-gray-500">
                            عملت مع أكثر من ٣٠ شركة ناشئة ومتوسطة في قطاعات التجزئة، العقارات، والخدمات التقنية.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-pink-100 text-pink-600">
                            <Briefcase size={24} />
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-medium text-gray-900">إدارة مشاريع شاملة</h4>
                        <p className="mt-2 text-base text-gray-500">
                            من التخطيط الأولي، مرورًا بإعداد المحتوى والتصميم، وحتى الإطلاق والتحليل المستمر.
                        </p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;