
import React from 'react';

const AboutPage: React.FC<{ onNavigateToMenu: () => void }> = ({ onNavigateToMenu }) => {
  const layoutContainer = "max-w-[1440px] w-[90%] md:w-[80%] mx-auto";

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className={layoutContainer}>
        {/* 1. Brand Overview */}
        <section className="mb-24">
          <span className="text-orange-700 font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Official Brand Profile</span>
          <h1 className="text-5xl md:text-7xl font-black text-[#4a3728] mb-12">About House of Curry</h1>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="prose prose-xl text-gray-600 max-w-none space-y-6">
              <p className="font-bold text-[#4a3728]">
                House of Curry is an established culinary institution dedicated to the sophisticated preservation of Indian gastronomic traditions. 
              </p>
              <p>
                As a premier restaurant brand, we stand as a benchmark for quality, authenticity, and unwavering consistency in the Indian dining sector. Our presence in the market is defined by a rigorous commitment to providing an upscale yet accessible environment where the diverse culinary landscapes of India are unified under one professional roof. 
              </p>
              <p>
                We do not simply serve food; we manage a legacy of flavor. Every "House of Curry" establishment operates under a centralized philosophy of excellence, ensuring that the guest experience is identical in quality, service, and taste, regardless of the geographic location.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200" 
                alt="House of Curry Branding" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* 2. Our Story */}
        <section className="mb-24 py-20 border-t border-gray-100">
          <h2 className="text-4xl font-black text-[#4a3728] mb-8">Our Story: The Foundation of Excellence</h2>
          <div className="prose prose-lg text-gray-600 max-w-4xl space-y-6">
            <p>
              House of Curry was founded to address a significant void in the international dining market: the lack of standardized, high-quality Indian cuisine that remains faithful to regional roots while adhering to modern hospitality standards. The inspiration behind the brand was a simple observation of the inconsistency found in traditional Indian restaurants, where recipes often varied based on the individual chef rather than a brand-wide standard.
            </p>
            <p>
              Our founders envisioned a restaurant group that could scale without losing the soul of the kitchen. By institutionalizing traditional recipes and professionalizing the back-of-house operations, House of Curry transformed from a singular concept into a trusted brand name. The journey involved years of research into spice stability, moisture retention in tandoori cooking, and the shelf-life of natural marinades, all aimed at creating a repeatable, world-class dining model.
            </p>
          </div>
        </section>

        {/* 3. Our Culinary Philosophy */}
        <section className="mb-24 p-12 md:p-20 bg-[#faf9f6] rounded-[3rem]">
          <h2 className="text-4xl font-black text-[#4a3728] mb-10 text-center">Our Culinary Philosophy</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-orange-700">Traditional Foundation</h4>
              <p className="text-gray-600 leading-relaxed">
                We believe in the 'Slow Food' movement. Our gravies are never rushed; they are simmered for hours to allow the complex oils from hand-ground spices to emulsify naturally with our base ingredients.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-orange-700">Scientific Precision</h4>
              <p className="text-gray-600 leading-relaxed">
                While our recipes are ancient, our execution is modern. We utilize precision temperature controls and specialized clay ovens (tandoors) that are calibrated daily to ensure perfect protein denaturation and smoky infusion.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-orange-700">Regional Authenticity</h4>
              <p className="text-gray-600 leading-relaxed">
                We reject 'generalist' Indian cooking. If a dish is from the Konkan coast, we use Kokum; if it's from the North, we use Mustard oil. We respect the geographical integrity of every recipe.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Quality & Ingredients */}
        <section className="mb-24">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
              <h2 className="text-4xl font-black text-[#4a3728] mb-8">Quality & Ingredient Standards</h2>
              <div className="prose prose-lg text-gray-600 space-y-6">
                <p>
                  The quality of a curry is dictated by the quality of the raw spice. House of Curry maintains direct relationships with spice plantations in Kerala and Rajasthan. We do not purchase pre-ground spice mixes; our 'House Blends' are roasted and ground in-house every 72 hours to prevent volatile oil loss.
                </p>
                <p>
                  Our sourcing extends to local organic farms for our produce and dairy. We utilize only Grade-A proteins that are certified for traceability. Our commitment to freshness means our kitchens operate on a 'Zero-Freezer' policy for our signature gravies—everything is prepared fresh, every single morning.
                </p>
              </div>
            </div>
            <div className="flex-1 w-full h-[500px] rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=1200" 
                alt="Fresh Spices" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* 5. Kitchen & Team Standards */}
        <section className="mb-24 py-16 border-y border-gray-100">
          <h2 className="text-3xl font-black text-[#4a3728] mb-12">Professional Kitchen Infrastructure</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {title: "Skilled Artisans", desc: "Our Tandoor masters have a minimum of 10 years of experience in high-heat clay oven cooking."},
              {title: "Strict Discipline", desc: "Military-grade kitchen organization ensure peak efficiency during high-volume service."},
              {title: "Hygiene Protocols", desc: "Hourly workstation sanitization and rigorous health safety checks for all staff."},
              {title: "Continuous Training", desc: "Monthly workshops for chefs to refine regional techniques and new brand menu items."}
            ].map((item, i) => (
              <div key={i} className="p-8 border border-gray-100 rounded-2xl hover:bg-orange-50/30 transition-all">
                <h5 className="font-bold text-[#4a3728] mb-3">{item.title}</h5>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Dining Experience */}
        <section className="mb-24">
          <h2 className="text-4xl font-black text-[#4a3728] mb-8">The Dining Experience</h2>
          <div className="prose prose-xl text-gray-600 max-w-4xl space-y-6">
            <p>
              At House of Curry, the ambience is carefully engineered to complement the meal. We utilize a 'Warm Minimalist' design aesthetic that incorporates traditional Indian textures—such as raw silk and brass—within a clean, modern structural framework. 
            </p>
            <p>
              Our service style is characterized by 'Attentive Non-Intrusion.' We ensure our guests' needs are met with professional precision without disrupting the flow of conversation. This makes our dining rooms equally suitable for high-stakes corporate dinners, celebratory family gatherings, or casual social lunches.
            </p>
          </div>
        </section>

        {/* 7. Commitment to Hygiene & Safety */}
        <section className="mb-24 bg-orange-700 text-white p-12 md:p-20 rounded-[3rem] shadow-2xl">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-black mb-8">Safety & Hygiene Protocol</h2>
            <p className="text-xl text-orange-100 mb-10 leading-relaxed">
              We operate with a 'Safety First' mandate. House of Curry adheres to the most stringent international food safety standards (ISO 22000 & HACCP). Our facilities are designed with separate prep zones to prevent cross-contamination, and our water filtration systems are of medical grade to ensure total purity in every drop of our sauces.
            </p>
            <div className="flex flex-wrap gap-8">
               <div className="border-l-2 border-orange-400 pl-6">
                  <span className="block text-3xl font-black">Grade A</span>
                  <span className="text-xs uppercase tracking-widest opacity-70">Safety Rating</span>
               </div>
               <div className="border-l-2 border-orange-400 pl-6">
                  <span className="block text-3xl font-black">Daily</span>
                  <span className="text-xs uppercase tracking-widest opacity-70">Lab Testing</span>
               </div>
               <div className="border-l-2 border-orange-400 pl-6">
                  <span className="block text-3xl font-black">100%</span>
                  <span className="text-xs uppercase tracking-widest opacity-70">Staff Vaccination</span>
               </div>
            </div>
          </div>
        </section>

        {/* 8. Why House of Curry */}
        <section className="mb-24">
          <h2 className="text-4xl font-black text-[#4a3728] mb-12">The House of Curry Advantage</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center text-orange-700 text-xs font-bold mt-1">1</div>
                <div>
                  <h4 className="font-bold text-lg text-[#4a3728]">Brand Reliability</h4>
                  <p className="text-gray-500">A consistent taste profile developed through decades of culinary standardization.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center text-orange-700 text-xs font-bold mt-1">2</div>
                <div>
                  <h4 className="font-bold text-lg text-[#4a3728]">Ethical Sourcing</h4>
                  <p className="text-gray-500">Fair trade spice procurement and support for local sustainable agriculture.</p>
                </div>
              </li>
            </ul>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center text-orange-700 text-xs font-bold mt-1">3</div>
                <div>
                  <h4 className="font-bold text-lg text-[#4a3728]">Expert Craftsmanship</h4>
                  <p className="text-gray-500">Heritage techniques performed by certified masters of Indian regional cooking.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center text-orange-700 text-xs font-bold mt-1">4</div>
                <div>
                  <h4 className="font-bold text-lg text-[#4a3728]">Comprehensive Safety</h4>
                  <p className="text-gray-500">Unmatched hygiene standards that prioritize the health of our patrons.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* 9. Closing Statement / Call to Action */}
        <section className="text-center py-20 border-t border-gray-100">
          <h2 className="text-4xl font-black text-[#4a3728] mb-6">Experience the Legacy</h2>
          <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto">
            We invite you to witness our commitment to Indian culinary excellence firsthand. Whether for a quiet dinner or a grand celebration, House of Curry awaits your arrival.
          </p>
          <div className="flex justify-center gap-6">
            <button 
              onClick={onNavigateToMenu}
              className="bg-[#4a3728] text-white px-10 py-5 rounded-xl font-bold hover:bg-[#2a1f17] transition-all shadow-lg"
            >
              View Our Selections
            </button>
            <button className="bg-orange-700 text-white px-10 py-5 rounded-xl font-bold hover:bg-orange-800 transition-all shadow-lg shadow-orange-100">
              Make a Reservation
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
