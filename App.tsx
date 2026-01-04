
import React, { useState, useEffect } from 'react';
import { SIGNATURE_DISHES, FAQS } from './constants';
import DishCard from './components/DishCard';
import Concierge from './components/Concierge';
import AboutPage from './components/AboutPage';
import MenuFAQPage from './components/MenuFAQPage';

const App: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentView, setCurrentView] = useState<'home' | 'about' | 'manu-faq'>('home');

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  // Function to navigate and scroll to menu/selection section
  const navigateToSelections = () => {
    setCurrentView('home');
    setTimeout(() => {
      const menuSection = document.getElementById('menu');
      if (menuSection) {
        menuSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Common layout class for 80% width coverage
  const layoutContainer = "max-w-[1440px] w-[90%] md:w-[80%] mx-auto";

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className={`${layoutContainer} h-20 flex items-center justify-between px-0`}>
          <button 
            onClick={() => setCurrentView('home')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-orange-700 rounded-full flex items-center justify-center text-white font-bold text-xl">H</div>
            <span className="text-2xl font-black tracking-tighter text-[#4a3728] uppercase">House of Curry</span>
          </button>
          
          <div className="hidden lg:flex gap-8 text-sm font-bold uppercase tracking-widest text-gray-600">
            <button 
              onClick={() => setCurrentView('home')} 
              className={`transition-colors ${currentView === 'home' ? 'text-orange-700' : 'hover:text-orange-700'}`}
            >
              Home
            </button>
            <button 
              onClick={() => setCurrentView('about')} 
              className={`transition-colors ${currentView === 'about' ? 'text-orange-700' : 'hover:text-orange-700'}`}
            >
              About Us
            </button>
            <button 
              onClick={() => setCurrentView('manu-faq')} 
              className={`transition-colors ${currentView === 'manu-faq' ? 'text-orange-700' : 'hover:text-orange-700'}`}
            >
              Manu Faq
            </button>
            <a href="#faq" onClick={(e) => {
              if (currentView !== 'home') {
                e.preventDefault();
                setCurrentView('home');
                setTimeout(() => document.getElementById('faq')?.scrollIntoView({behavior: 'smooth'}), 100);
              }
            }} className="hover:text-orange-700 transition-colors">FAQ</a>
          </div>
          
          <button className="bg-[#4a3728] text-white px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-orange-800 transition-all shadow-lg hover:shadow-orange-200">
            Book Table
          </button>
        </div>
      </nav>

      {currentView === 'about' && (
        <AboutPage onNavigateToMenu={navigateToSelections} />
      )}
      
      {currentView === 'manu-faq' && (
        <MenuFAQPage />
      )}

      {currentView === 'home' && (
        <>
          {/* Hero Section */}
          <header className="pt-40 pb-20">
            <div className={`${layoutContainer} grid md:grid-cols-2 gap-16 items-center px-0`}>
              <div>
                <span className="text-orange-700 font-bold uppercase tracking-[0.3em] text-sm mb-4 block">The Pinnacle of Indian Dining</span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#4a3728] leading-[1.05] mb-8">
                  A Legacy of Spice, <br />
                  <span className="text-orange-600 italic">Redefined.</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-lg">
                  Experience authentic Indian culinary traditions through a modern lens. House of Curry represents consistency, craftsmanship, and the soulful heritage of the sub-continent.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={navigateToSelections}
                    className="px-8 py-4 bg-orange-700 text-white rounded-lg font-bold shadow-xl shadow-orange-100 hover:bg-orange-800 transition-all"
                  >
                    Our Selections
                  </button>
                  <button 
                    onClick={() => setCurrentView('about')}
                    className="px-8 py-4 border-2 border-gray-200 rounded-lg font-bold hover:bg-gray-50 transition-all"
                  >
                    Our Story
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200" 
                    alt="Elegant Indian Restaurant Interior" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-xl shadow-2xl max-w-[280px] border border-gray-100 hidden lg:block">
                  <p className="text-base font-bold text-[#4a3728] mb-1">Authenticity Guaranteed</p>
                  <p className="text-sm text-gray-500 leading-relaxed">Traditional clay ovens and master-blended spice secret recipes since 1998.</p>
                </div>
              </div>
            </div>
          </header>

          {/* Main Content - Blog Structure */}
          <main className={`${layoutContainer} space-y-32 pb-32 px-0`}>
            
            {/* 1. Brand Introduction */}
            <section id="about" className="max-w-4xl">
              <h2 className="text-4xl md:text-5xl font-black text-[#4a3728] mb-8">The Essence of House of Curry</h2>
              <div className="prose prose-xl text-gray-600 max-w-none space-y-6">
                <p>
                  House of Curry is more than a restaurant; it is a dedicated custodian of Indian culinary heritage. Born from a vision to provide a consistent and premium dining experience, our brand stands at the intersection of tradition and modern hospitality. We believe that Indian food is a symphony of flavors that requires precision, patience, and a deep respect for the ingredients. 
                </p>
                <p>
                  Our establishments are designed to be sanctuaries where guests can explore the vast geographical diversity of India through a single, cohesive collection of offerings. From the smoky streets of Old Delhi to the aromatic kitchens of Hyderabad, House of Curry brings the best of the sub-continent to your table with unwavering consistency.
                </p>
              </div>
            </section>

            {/* 2. About House of Curry */}
            <section className="bg-orange-50/50 p-12 md:p-16 rounded-[3rem] border border-orange-100">
              <h2 className="text-3xl md:text-4xl font-black text-[#4a3728] mb-10">Our Mission & Values</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-orange-800">Taste Above All</h4>
                  <p className="text-lg text-gray-600 leading-relaxed">We refuse to compromise on flavor profiles. Every dish is tasted and calibrated to meet our stringent brand standards before it leaves the pass.</p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-orange-800">Unwavering Consistency</h4>
                  <p className="text-lg text-gray-600 leading-relaxed">Whether you dine with us in London, New York, or Dubai, the signature 'House of Curry' spice blend remains the same.</p>
                </div>
              </div>
            </section>

            {/* 3. Food Philosophy */}
            <section id="philosophy">
              <div className="flex flex-col lg:flex-row gap-20 items-center">
                <div className="flex-1 space-y-8">
                  <h2 className="text-4xl md:text-5xl font-black text-[#4a3728]">Our Food Philosophy</h2>
                  <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                    <p>
                      Our philosophy is simple: <strong>Authenticity meets Accuracy.</strong> While many food enthusiasts focus on 'fusion', we focus on 'foundation'. We utilize traditional techniques such as <em>Dum Pukht</em> (slow pressure cooking) and <em>Dhuan</em> (charcoal smoking) to achieve flavors that are reminiscent of family kitchens across India.
                    </p>
                    <p>
                      We maintain a delicate balance between classic recipes and modern presentation. We recognize that today's diner values health and lightness as much as flavor; therefore, we have optimized our gravies to be rich in taste but lighter on the palate, utilizing natural thickeners like cashew and poppy seeds instead of excessive fats.
                    </p>
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <div className="aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=1200" 
                      alt="Spices and Herbs" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* 4. Selection Overview */}
            <section id="menu">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-[#4a3728] mb-6">Our Culinary Selections</h2>
                <p className="text-xl text-gray-600">
                  Our offerings are logically categorized to guide you through a complete Indian meal cycle, catering to diverse dietary preferences with a balanced focus on vegetarian and non-vegetarian selections.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
                {['Starters', 'Main Course', 'Breads', 'Rice', 'Desserts'].map((cat) => (
                  <div key={cat} className="p-8 bg-white border border-gray-100 rounded-2xl text-center shadow-sm hover:border-orange-300 hover:shadow-md transition-all group">
                    <span className="block font-black text-[#4a3728] uppercase text-sm tracking-widest group-hover:text-orange-700">{cat}</span>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <button 
                  onClick={() => setCurrentView('manu-faq')}
                  className="inline-flex items-center gap-2 text-orange-700 font-bold hover:underline"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                    <line x1="12" y1="17" x2="12.01" y2="17"/>
                  </svg>
                  View Detailed Manu Faqs
                </button>
              </div>
            </section>

            {/* 5. Signature Dishes */}
            <section>
              <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
                <div>
                  <h2 className="text-4xl md:text-5xl font-black text-[#4a3728]">Signature Selections</h2>
                  <p className="text-xl text-gray-500 mt-2">The dishes that defined our reputation over the decades.</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {SIGNATURE_DISHES.map(dish => (
                  <DishCard key={dish.id} dish={dish} />
                ))}
              </div>
            </section>

            {/* AI Concierge Component */}
            <Concierge />

            {/* 6. Chef & Kitchen Standards */}
            <section className="bg-white p-12 md:p-20 rounded-[3rem] border border-gray-100 shadow-sm">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800" 
                      alt="Professional Kitchen" 
                      className="rounded-3xl h-[500px] w-full object-cover shadow-xl"
                    />
                    <div className="absolute -top-6 -right-6 bg-orange-700 text-white p-6 rounded-2xl font-bold shadow-xl hidden md:block">
                      <p className="text-sm uppercase tracking-widest">Master Chef Led</p>
                    </div>
                </div>
                <div className="space-y-8">
                  <h2 className="text-4xl font-black text-[#4a3728]">Culinary Excellence & Standards</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Behind the scenes, our kitchens operate with the discipline of a high-tech laboratory. Our chefs undergo rigorous training in House of Curry’s proprietary spice-blending and cooking techniques to ensure every bite is perfection.
                  </p>
                  <ul className="space-y-6">
                    {[
                      "Standardized SOPs for all mother gravies and marinades",
                      "Temperature-controlled storage for spice integrity and potency",
                      "Blind batch-testing of every signature dish twice daily",
                      "Strict 'Farm-to-Table' sourcing for seasonal vegetables"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-lg font-semibold text-gray-700">
                        <div className="w-3 h-3 bg-orange-600 rounded-full flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* 7. Ambience */}
            <section>
              <div className="max-w-4xl mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-[#4a3728] mb-8">Ambience & Experience</h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  The House of Curry dining room is an extension of our hospitality. We have curated a space that balances sophistication with comfort. With warm ambient lighting, ergonomic seating, and acoustic management, our restaurants are ideal for both business lunches and intimate family celebrations. Cleanliness is our primary aesthetic choice.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl"><img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Interior 1" /></div>
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl md:translate-y-12"><img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Interior 2" /></div>
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl"><img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Interior 3" /></div>
              </div>
            </section>

            {/* 8. Hygiene & Quality */}
            <section className="border-t border-gray-200 pt-32">
              <div className="flex flex-col lg:flex-row gap-20 items-center">
                <div className="flex-1">
                  <h2 className="text-4xl font-black text-[#4a3728] mb-8">Our Safety & Quality Commitment</h2>
                  <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                    In an era where food safety is paramount, House of Curry leads with transparency. We follow international HACCP standards and conduct regular third-party audits. Our ingredient sourcing is restricted to vendors who provide full traceability, ensuring that the meat and produce on your plate are of the highest grade.
                  </p>
                  <div className="flex flex-wrap gap-12">
                    <div className="space-y-1">
                      <span className="block text-4xl font-black text-orange-700">100%</span>
                      <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Fresh Produce</span>
                    </div>
                    <div className="space-y-1">
                      <span className="block text-4xl font-black text-orange-700">Daily</span>
                      <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Quality Checks</span>
                    </div>
                    <div className="space-y-1">
                      <span className="block text-4xl font-black text-orange-700">Zero</span>
                      <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Frozen Gravies</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1 w-full bg-[#4a3728] p-12 rounded-[3rem] text-white">
                  <h3 className="text-2xl font-bold mb-8 text-orange-400">Why Choose House of Curry?</h3>
                  <div className="grid gap-6">
                      {[
                        {title: "Authentic Recipes", desc: "Traditional regional dishes prepared by master Indian chefs."},
                        {title: "Premium Sourcing", desc: "Export-quality spices and fresh local organic produce."},
                        {title: "Modern Comfort", desc: "Elegant dining environment suitable for families and corporate groups."},
                        {title: "Value & Consistency", desc: "A reliable, high-quality dining experience every single time."}
                      ].map((item, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center text-[10px] flex-shrink-0 mt-1">✓</div>
                          <div>
                              <h4 className="font-bold text-lg">{item.title}</h4>
                              <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 10. FAQ Section */}
            <section id="faq" className="max-w-4xl">
              <h2 className="text-4xl md:text-5xl font-black text-[#4a3728] mb-12">Frequently Asked Questions</h2>
              <div className="space-y-2">
                {FAQS.map((faq, idx) => (
                  <div key={idx} className="border-b border-gray-200">
                    <button 
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex justify-between items-center text-left py-8 hover:text-orange-700 transition-colors group"
                    >
                      <span className="text-xl font-bold text-[#4a3728] group-hover:text-orange-700">{faq.question}</span>
                      <div className={`w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center transform transition-all ${openFaq === idx ? 'rotate-180 bg-orange-700 border-orange-700 text-white' : 'text-gray-400'}`}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M2 4L6 8L10 4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </button>
                    {openFaq === idx && (
                      <div className="text-lg text-gray-600 pb-8 pr-12 animate-in fade-in slide-in-from-top-4 duration-300">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* 11. Call to Action */}
            <section className="text-center py-24 md:py-32 bg-orange-50 rounded-[4rem] border border-orange-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <pattern id="pattern" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#pattern)" />
                </svg>
              </div>
              <div className="relative z-10 max-w-3xl mx-auto px-6">
                <h2 className="text-5xl md:text-7xl font-black text-[#4a3728] mb-8">Dine with Excellence</h2>
                <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
                  Ready to experience the finest Indian cuisine in town? Join us for an unforgettable dining experience or order directly to your door.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button className="bg-orange-700 text-white px-12 py-6 rounded-2xl font-black text-xl shadow-2xl shadow-orange-200 hover:bg-orange-800 transition-all scale-100 hover:scale-105 active:scale-95">
                    Make a Reservation
                  </button>
                  <button className="bg-white border-2 border-gray-200 text-[#4a3728] px-12 py-6 rounded-2xl font-black text-xl hover:bg-gray-50 transition-all shadow-lg active:scale-95">
                    Order Online
                  </button>
                </div>
                <p className="mt-12 text-sm text-gray-400 font-black uppercase tracking-[0.4em]">Open Daily: 11:30 AM — 11:00 PM</p>
              </div>
            </section>

          </main>
        </>
      )}

      {/* Footer */}
      <footer className="bg-[#1a1512] text-white py-24">
        <div className={`${layoutContainer} grid md:grid-cols-4 gap-20 px-0`}>
          <div className="col-span-1 md:col-span-2">
            <button 
              onClick={() => setCurrentView('home')}
              className="flex items-center gap-3 mb-8 hover:opacity-80 transition-opacity"
            >
              <div className="w-12 h-12 bg-orange-700 rounded-full flex items-center justify-center text-white font-black text-xl">H</div>
              <span className="text-2xl font-black tracking-tighter uppercase">House of Curry</span>
            </button>
            <p className="text-gray-400 text-lg max-w-md mb-10 leading-relaxed">
              A global brand dedicated to the preservation and celebration of Indian culinary heritage. Quality you can trust, flavors you won't forget.
            </p>
            <div className="flex gap-6">
              {['Instagram', 'Facebook', 'LinkedIn'].map(s => (
                <a key={s} href="#" className="text-xs font-black uppercase tracking-widest text-gray-500 hover:text-orange-600 transition-colors">{s}</a>
              ))}
            </div>
          </div>
          <div>
            <h5 className="font-black mb-8 text-orange-700 uppercase tracking-widest text-xs">Navigation</h5>
            <ul className="space-y-6 text-base text-gray-400 font-semibold">
              <li><button onClick={() => setCurrentView('about')} className="hover:text-white transition-colors">Our Story</button></li>
              <li><button onClick={() => setCurrentView('manu-faq')} className="hover:text-white transition-colors">Manu Faq</button></li>
              <li><a href="#" className="hover:text-white transition-colors">Location</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-black mb-8 text-orange-700 uppercase tracking-widest text-xs">Contact</h5>
            <ul className="space-y-6 text-base text-gray-400 font-semibold">
              <li>123 Spice Garden Ave, Suite 400<br/>New Delhi, India</li>
              <li>info@houseofcurry.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        <div className={`${layoutContainer} border-t border-gray-800 mt-24 pt-10 flex flex-col md:flex-row justify-between gap-4 px-0 text-[10px] uppercase tracking-[0.3em] text-gray-600 font-black`}>
          <span>&copy; 2024 House of Curry Group — Global Headquarters</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
