import React from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';

const PricingPlans = () => {
  const plans = [
    {
      name: 'Starter',
      price: '₹49,999',
      period: '/month',
      description: 'Perfect for small to medium brands starting their retail journey',
      features: [
        '100 store visits per month',
        'Basic POSM installation',
        'Weekly reporting',
        'Email support',
        'Standard compliance checks',
        'Photo documentation'
      ],
      ideal: 'Ideal for: New brands, Limited budget, Regional presence',
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Business',
      price: '₹99,999',
      period: '/month',
      description: 'Comprehensive solution for growing brands with multi-city presence',
      features: [
        '250 store visits per month',
        'Advanced POSM solutions',
        'Dedicated coordinator',
        'Priority support',
        'Real-time dashboard',
        'Advanced analytics',
        'Custom reporting',
        'Mystery shopping'
      ],
      ideal: 'Ideal for: Established brands, Multi-city presence, Growth phase',
      popular: true,
      cta: 'Get Started'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'Full-scale solution for large brands with nationwide operations',
      features: [
        'Unlimited store visits',
        'Custom POSM development',
        'Dedicated team',
        '24/7 support',
        'Advanced analytics',
        'API integration',
        'White-label solution',
        'Brand protection',
        'Launch support',
        'Training programs'
      ],
      ideal: 'Ideal for: Large brands, National presence, Complex requirements',
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  return (
    <section className="py-20 bg-vm-bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-smooch font-200 text-vm-dark mb-6">
            Choose Your Plan
          </h2>
          <p className="text-lg font-smooch font-300 text-vm-primary max-w-3xl mx-auto">
            Flexible pricing options designed to scale with your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 ${
                plan.popular ? 'ring-2 ring-vm-accent transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-vm-accent text-white px-4 py-2 rounded-full text-sm font-smooch font-400 flex items-center gap-1">
                    <Star size={16} />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-smooch font-400 text-vm-dark mb-2">
                    {plan.name}
                  </h3>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-smooch font-200 text-vm-accent">
                      {plan.price}
                    </span>
                    <span className="text-lg font-smooch font-300 text-vm-primary">
                      {plan.period}
                    </span>
                  </div>

                  <p className="text-vm-primary font-smooch font-300 leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-vm-accent flex-shrink-0 mt-0.5" />
                      <span className="font-smooch font-300 text-vm-primary">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="bg-vm-bg-light p-4 rounded-lg mb-6">
                  <p className="text-sm font-smooch font-300 text-vm-primary">
                    {plan.ideal}
                  </p>
                </div>

                <button className={`w-full py-4 rounded-lg font-smooch font-400 text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 ${
                  plan.popular 
                    ? 'bg-vm-accent hover:bg-vm-accent/90 text-white shadow-lg hover:shadow-xl' 
                    : 'border-2 border-vm-accent text-vm-accent hover:bg-vm-accent hover:text-white'
                }`}>
                  {plan.cta}
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <div className="bg-vm-bg-light rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-smooch font-400 text-vm-dark mb-4">
              All Plans Include
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-lg font-smooch font-400 text-vm-accent mb-2">✓ Professional Team</div>
                <p className="text-sm font-smooch font-300 text-vm-primary">Trained merchandising experts</p>
              </div>
              <div className="text-center">
                <div className="text-lg font-smooch font-400 text-vm-accent mb-2">✓ Quality Assurance</div>
                <p className="text-sm font-smooch font-300 text-vm-primary">100% compliance guarantee</p>
              </div>
              <div className="text-center">
                <div className="text-lg font-smooch font-400 text-vm-accent mb-2">✓ Flexible Terms</div>
                <p className="text-sm font-smooch font-300 text-vm-primary">No long-term contracts required</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;