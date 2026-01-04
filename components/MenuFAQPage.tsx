
import React, { useState } from 'react';
import { MANU_FAQS } from '../constants';

const MenuFAQPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(MANU_FAQS.sections[0].title);
  const layoutContainer = "max-w-[1440px] w-[90%] md:w-[80%] mx-auto";

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className={layoutContainer}>
        {/* Header Section */}
        <section className="mb-16">
          <span className="text-orange-700 font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Dining Resources</span>
          <h1 className="text-5xl md:text-7xl font-black text-[#4a3728] mb-8">Manu Faq</h1>
          <p className="text-xl text-gray-500 max-w-3xl leading-relaxed">
            {MANU_FAQS.intro}
          </p>
        </section>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Sidebar Navigation */}
          <aside className="lg:w-1/4">
            <div className="sticky top-32 space-y-2">
              <h5 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6 px-4">Categories</h5>
              {MANU_FAQS.sections.map((section) => (
                <button
                  key={section.title}
                  onClick={() => setActiveSection(section.title)}
                  className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-all text-sm ${
                    activeSection === section.title 
                    ? 'bg-orange-700 text-white shadow-lg shadow-orange-100' 
                    : 'text-gray-500 hover:bg-orange-50 hover:text-orange-700'
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </aside>

          {/* FAQ Content Area */}
          <main className="lg:w-3/4">
            <div className="space-y-16">
              {MANU_FAQS.sections.map((section) => (
                <section 
                  key={section.title} 
                  id={section.title.toLowerCase().replace(/\s+/g, '-')}
                  className={`${activeSection && activeSection !== section.title ? 'hidden lg:block lg:opacity-30 lg:pointer-events-none' : 'block opacity-100'} transition-opacity duration-500`}
                >
                  <h2 className="text-3xl font-black text-[#4a3728] mb-8 pb-4 border-b border-gray-100">
                    {section.title}
                  </h2>
                  <div className="grid gap-10">
                    {section.items.map((item, idx) => (
                      <div key={idx} className="group">
                        <h4 className="text-lg font-bold text-[#4a3728] mb-3 group-hover:text-orange-700 transition-colors">
                          {item.question}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </main>
        </div>

        {/* Footer CTA */}
        <section className="mt-32 p-12 md:p-20 bg-orange-50 rounded-[3rem] border border-orange-100 text-center">
          <h3 className="text-3xl font-black text-[#4a3728] mb-6">Further Inquiries?</h3>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            If your specific query is not addressed here, please contact our guest relations team directly for personalized assistance with your selection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#4a3728] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#2a1f17] transition-all">
              Contact Guest Relations
            </button>
            <button className="bg-white border-2 border-gray-200 text-[#4a3728] px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all">
              Return to Selections
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MenuFAQPage;
