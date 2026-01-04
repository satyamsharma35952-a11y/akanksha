
import React, { useState } from 'react';
import { getMenuRecommendation } from '../services/geminiService';

const Concierge: React.FC = () => {
  const [query, setQuery] = useState('');
  const [recommendation, setRecommendation] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    const result = await getMenuRecommendation(query);
    setRecommendation(result || "I apologize, I'm unable to provide a recommendation at this moment.");
    setLoading(false);
  };

  return (
    <div className="bg-[#4a3728] text-white p-8 rounded-2xl shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-10">
        <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z" />
        </svg>
      </div>
      
      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-4">Digital Concierge</h2>
        <p className="text-orange-100/80 mb-6 max-w-lg">
          Not sure what to order? Describe your palate (e.g., "I love spicy seafood" or "Something creamy and mild") and let our AI curator suggest the perfect meal.
        </p>

        <form onSubmit={handleAsk} className="flex flex-col md:flex-row gap-3">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tell us what you're craving..."
            className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 px-8 rounded-lg transition-all disabled:opacity-50"
          >
            {loading ? 'Consulting Chef...' : 'Get Recommendations'}
          </button>
        </form>

        {recommendation && (
          <div className="mt-8 p-6 bg-white/5 border border-white/10 rounded-xl animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h4 className="text-orange-400 font-bold mb-2 uppercase tracking-widest text-xs">Our Suggestion</h4>
            <div className="text-lg leading-relaxed whitespace-pre-line prose prose-invert max-w-none">
              {recommendation}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Concierge;
