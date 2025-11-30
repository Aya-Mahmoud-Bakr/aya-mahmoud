import React from 'react';
import { caseStudies } from '../data';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const CaseStudies: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">قصص نجاح</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            الأرقام تتحدث عن النتائج
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          {caseStudies.map((study, index) => {
             // Mock data for the chart based on the growth percentage
             const data = [
                { name: 'قبل', value: 100 },
                { name: 'بعد', value: 100 + study.growth },
             ];

            return (
              <div key={study.id} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col">
                <div className="bg-gray-50 p-6 border-b border-gray-100 h-48">
                    {/* Tiny Chart */}
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data}>
                            <XAxis dataKey="name" tick={{fontSize: 12}} stroke="#9ca3af" axisLine={false} tickLine={false} />
                            <Tooltip 
                                cursor={{fill: 'transparent'}}
                                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                            />
                            <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={40}>
                                <Cell fill="#e5e7eb" /> {/* Gray for before */}
                                <Cell fill="#7c3aed" /> {/* Purple for after */}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <div className="text-sm font-medium text-purple-600 mb-2">{study.category}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.title}</h3>
                  <p className="text-gray-500 mb-6 flex-1">{study.description}</p>
                  
                  <div className="mt-auto pt-6 border-t border-gray-100">
                    <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-extrabold text-gray-900">{study.result}</span>
                    </div>
                    <span className="text-sm text-gray-500 font-medium">{study.metric}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;