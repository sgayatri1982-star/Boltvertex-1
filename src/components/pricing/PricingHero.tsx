import React from 'react';
import { DollarSign, Target, TrendingUp } from 'lucide-react';

const PricingHero = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-vm-dark to-vm-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-smooch font-100 mb-6">
            Transparent Pricing
          </h1>
          <p className="text-xl font-smooch font-300 text-vm-bg-light max-w-4xl mx-auto leading-relaxed">
            Choose the perfect plan for your merchandising needs. No hidden fees, no surprises - just results-driven solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
            <DollarSign className="w-12 h-12 text-vm-accent mx-auto mb-4" />
            <h3 className="text-2xl font-smooch font-400 mb-2">Flexible Plans</h3>
            <p className="font-smooch font-300 text-vm-bg-light">Scalable solutions for every budget</p>
          </div>
          <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
            <Target className="w-12 h-12 text-vm-accent mx-auto mb-4" />
            <h3 className="text-2xl font-smooch font-400 mb-2">Value-Driven</h3>
            <p className="font-smooch font-300 text-vm-bg-light">Maximum ROI on your investment</p>
          </div>
          <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
            <TrendingUp className="w-12 h-12 text-vm-accent mx-auto mb-4" />
            <h3 className="text-2xl font-smooch font-400 mb-2">Proven Results</h3>
            <p className="font-smooch font-300 text-vm-bg-light">Track record of successful campaigns</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;