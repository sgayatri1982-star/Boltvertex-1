import React from 'react';
import { BarChart3, Target, Award } from 'lucide-react';

const CaseStudiesHero = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-vm-dark to-vm-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-smooch font-100 mb-6">
            Case Studies
          </h1>
          <p className="text-xl font-smooch font-300 text-vm-bg-light max-w-4xl mx-auto leading-relaxed">
            Real results from our merchandising campaigns across diverse industries and retail environments
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
            <BarChart3 className="w-12 h-12 text-vm-accent mx-auto mb-4" />
            <h3 className="text-2xl font-smooch font-400 mb-2">Proven Results</h3>
            <p className="font-smooch font-300 text-vm-bg-light">Measurable impact across 500+ stores</p>
          </div>
          <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
            <Target className="w-12 h-12 text-vm-accent mx-auto mb-4" />
            <h3 className="text-2xl font-smooch font-400 mb-2">Strategic Execution</h3>
            <p className="font-smooch font-300 text-vm-bg-light">Tailored solutions for each brand</p>
          </div>
          <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
            <Award className="w-12 h-12 text-vm-accent mx-auto mb-4" />
            <h3 className="text-2xl font-smooch font-400 mb-2">Industry Recognition</h3>
            <p className="font-smooch font-300 text-vm-bg-light">Award-winning campaigns</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesHero;