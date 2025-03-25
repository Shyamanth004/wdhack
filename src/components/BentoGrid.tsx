import React from 'react';
import { Brain, Users, Sparkles, Trophy } from 'lucide-react';

const BentoGrid = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
          <Brain className="text-blue-600 mb-6" size={32} />
          <h3 className="text-xl font-semibold mb-4">Neurodiversity-First</h3>
          <p className="text-slate-600 dark:text-slate-400">
            Our platform is designed to celebrate and accommodate different ways of thinking and working.
          </p>
        </div>

        {/* <div className="bg-gradient-to-br from-blue-600 to-teal-500 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 md:col-span-2 lg:col-span-1">
          <Users className="text-white mb-6" size={32} />
          <h3 className="text-xl font-semibold text-white mb-4">Inclusive Hiring</h3>
          <p className="text-white/90">
            Connect with employers who value diverse perspectives and create inclusive workplaces.
          </p>
        </div> */}

        <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
          <Sparkles className="text-blue-600 mb-6" size={32} />
          <h3 className="text-xl font-semibold mb-4">AI-Powered Matching</h3>
          <p className="text-slate-600 dark:text-slate-400">
            Our smart algorithms ensure perfect matches between talent and opportunities.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
          <Trophy className="text-blue-600 mb-6" size={32} />
          <h3 className="text-xl font-semibold mb-4">Success Stories</h3>
          <p className="text-slate-600 dark:text-slate-400">
            Join thousands of successful placements and career transformations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;