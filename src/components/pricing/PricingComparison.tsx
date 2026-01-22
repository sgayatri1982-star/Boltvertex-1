import React from 'react';
import { Check, X } from 'lucide-react';

const PricingComparison = () => {
  const features = [
    {
      category: 'Store Visits',
      items: [
        { feature: 'Monthly store visits', starter: '100', business: '250', enterprise: 'Unlimited' },
        { feature: 'Dedicated coordinator', starter: false, business: true, enterprise: true },
        { feature: 'Emergency visits', starter: false, business: true, enterprise: true },
        { feature: 'Multi-shift coverage', starter: false, business: false, enterprise: true }
      ]
    },
    {
      category: 'POSM & Display',
      items: [
        { feature: 'Basic POSM installation', starter: true, business: true, enterprise: true },
        { feature: 'Custom display solutions', starter: false, business: true, enterprise: true },
        { feature: 'Interactive displays', starter: false, business: false, enterprise: true },
        { feature: 'POSM development', starter: false, business: false, enterprise: true }
      ]
    },
    {
      category: 'Reporting & Analytics',
      items: [
        { feature: 'Weekly reports', starter: true, business: false, enterprise: false },
        { feature: 'Real-time dashboard', starter: false, business: true, enterprise: true },
        { feature: 'Advanced analytics', starter: false, business: true, enterprise: true },
        { feature: 'Custom reporting', starter: false, business: true, enterprise: true },
        { feature: 'API integration', starter: false, business: false, enterprise: true }
      ]
    },
    {
      category: 'Support & Services',
      items: [
        { feature: 'Email support', starter: true, business: false, enterprise: false },
        { feature: 'Priority support', starter: false, business: true, enterprise: false },
        { feature: '24/7 support', starter: false, business: false, enterprise: true },
        { feature: 'Training programs', starter: false, business: false, enterprise: true },
        { feature: 'Brand protection', starter: false, business: false, enterprise: true }
      ]
    }
  ];

  const renderFeatureValue = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-5 h-5 text-green-500 mx-auto" />
      ) : (
        <X className="w-5 h-5 text-gray-300 mx-auto" />
      );
    }
    return <span className="text-sm font-smooch font-400 text-vm-accent">{value}</span>;
  };

  return (
    <section className="py-20 bg-vm-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-smooch font-200 text-vm-dark mb-6">
            Feature Comparison
          </h2>
          <p className="text-lg font-smooch font-300 text-vm-primary max-w-3xl mx-auto">
            Compare features across all plans to find the perfect fit for your needs
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-vm-dark text-white p-6">
            <div className="grid grid-cols-4 gap-4">
              <div className="font-smooch font-400 text-lg">Features</div>
              <div className="text-center font-smooch font-400 text-lg">Starter</div>
              <div className="text-center font-smooch font-400 text-lg">
                Business
                <span className="block text-sm text-vm-accent">Most Popular</span>
              </div>
              <div className="text-center font-smooch font-400 text-lg">Enterprise</div>
            </div>
          </div>

          {/* Feature Categories */}
          {features.map((category, categoryIndex) => (
            <div key={categoryIndex} className="border-b border-vm-bg-light last:border-b-0">
              {/* Category Header */}
              <div className="bg-vm-bg-light p-4">
                <h3 className="font-smooch font-400 text-vm-dark text-lg">
                  {category.category}
                </h3>
              </div>

              {/* Category Items */}
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="grid grid-cols-4 gap-4 p-4 hover:bg-vm-bg-light/50 transition-colors duration-200">
                  <div className="font-smooch font-300 text-vm-primary">
                    {item.feature}
                  </div>
                  <div className="text-center">
                    {renderFeatureValue(item.starter)}
                  </div>
                  <div className="text-center">
                    {renderFeatureValue(item.business)}
                  </div>
                  <div className="text-center">
                    {renderFeatureValue(item.enterprise)}
                  </div>
                </div>
              ))}
            </div>
          ))}

          {/* Pricing Footer */}
          <div className="bg-vm-bg-light p-6">
            <div className="grid grid-cols-4 gap-4">
              <div className="font-smooch font-400 text-vm-dark text-lg">Monthly Price</div>
              <div className="text-center">
                <div className="text-2xl font-smooch font-200 text-vm-accent">₹49,999</div>
                <button className="mt-2 border-2 border-vm-accent text-vm-accent hover:bg-vm-accent hover:text-white px-4 py-2 rounded-lg font-smooch font-400 text-sm transition-all duration-300">
                  Start Trial
                </button>
              </div>
              <div className="text-center">
                <div className="text-2xl font-smooch font-200 text-vm-accent">₹99,999</div>
                <button className="mt-2 bg-vm-accent hover:bg-vm-accent/90 text-white px-4 py-2 rounded-lg font-smooch font-400 text-sm transition-all duration-300">
                  Get Started
                </button>
              </div>
              <div className="text-center">
                <div className="text-2xl font-smooch font-200 text-vm-accent">Custom</div>
                <button className="mt-2 border-2 border-vm-accent text-vm-accent hover:bg-vm-accent hover:text-white px-4 py-2 rounded-lg font-smooch font-400 text-sm transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Notes */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl p-6 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-xl font-smooch font-400 text-vm-dark mb-4">
              Need Help Choosing?
            </h3>
            <p className="font-smooch font-300 text-vm-primary mb-4">
              Our team can help you select the perfect plan based on your specific requirements and budget.
            </p>
            <button className="text-vm-accent hover:text-vm-dark font-smooch font-400 underline transition-colors duration-300">
              Schedule a consultation call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingComparison;