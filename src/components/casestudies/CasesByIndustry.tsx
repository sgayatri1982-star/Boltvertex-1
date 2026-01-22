import React, { useState } from 'react';
import { ShoppingCart, Smartphone, Shirt, Coffee, Car, Heart } from 'lucide-react';

const CasesByIndustry = () => {
  const [activeIndustry, setActiveIndustry] = useState(0);

  const industries = [
    {
      icon: ShoppingCart,
      name: 'FMCG',
      cases: [
        {
          title: 'National FMCG Brand Rollout',
          description: 'Complete product launch across 250+ stores',
          results: '98% compliance, 30% sales increase'
        },
        {
          title: 'Premium Food Brand Launch',
          description: 'Luxury positioning in high-end retail chains',
          results: '100% brand consistency, 40% above target'
        }
      ]
    },
    {
      icon: Smartphone,
      name: 'Electronics',
      cases: [
        {
          title: 'Smartphone Accessory Campaign',
          description: 'Interactive displays across electronics stores',
          results: '45% engagement increase, 25% sales boost'
        },
        {
          title: 'Home Appliance Positioning',
          description: 'Strategic placement in major retail chains',
          results: '35% visibility improvement, 20% sales growth'
        }
      ]
    },
    {
      icon: Shirt,
      name: 'Fashion',
      cases: [
        {
          title: 'Seasonal Collection Launch',
          description: 'Multi-brand fashion retailer campaign',
          results: '15-city rollout, 95% compliance rate'
        },
        {
          title: 'Premium Apparel Positioning',
          description: 'Luxury brand presence enhancement',
          results: '100% brand standards, 50% visibility boost'
        }
      ]
    },
    {
      icon: Coffee,
      name: 'Food & Beverage',
      cases: [
        {
          title: 'Beverage Brand Activation',
          description: 'Summer campaign across convenience stores',
          results: '200+ stores, 60% sales increase'
        },
        {
          title: 'Snack Brand Visibility',
          description: 'Strategic shelf positioning optimization',
          results: '40% visibility boost, 25% sales growth'
        }
      ]
    },
    {
      icon: Car,
      name: 'Automotive',
      cases: [
        {
          title: 'Auto Parts Display Campaign',
          description: 'Aftermarket products visibility enhancement',
          results: '150+ outlets, 30% sales improvement'
        },
        {
          title: 'Car Accessories Launch',
          description: 'New product line introduction',
          results: '95% compliance, 35% market penetration'
        }
      ]
    },
    {
      icon: Heart,
      name: 'Healthcare',
      cases: [
        {
          title: 'Wellness Product Campaign',
          description: 'Health supplement visibility program',
          results: '100+ pharmacies, 45% sales increase'
        },
        {
          title: 'Personal Care Launch',
          description: 'Premium skincare brand positioning',
          results: '98% compliance, 40% brand recall'
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-vm-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-smooch font-200 text-vm-dark mb-6">
            Cases by Industry
          </h2>
          <p className="text-lg font-smooch font-300 text-vm-primary max-w-3xl mx-auto">
            Explore our success stories across different industry verticals
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Industry Tabs */}
          <div className="lg:col-span-1">
            <div className="space-y-2">
              {industries.map((industry, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndustry(index)}
                  className={`w-full flex items-center gap-4 p-4 rounded-lg text-left transition-all duration-300 ${
                    activeIndustry === index
                      ? 'bg-vm-accent text-white shadow-lg'
                      : 'bg-white text-vm-primary hover:bg-vm-accent/10'
                  }`}
                >
                  <industry.icon className="w-6 h-6" />
                  <span className="font-smooch font-400">{industry.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Case Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-vm-accent/10 rounded-xl flex items-center justify-center">
                  {React.createElement(industries[activeIndustry].icon, {
                    className: "w-8 h-8 text-vm-accent"
                  })}
                </div>
                <div>
                  <h3 className="text-2xl font-smooch font-400 text-vm-dark">
                    {industries[activeIndustry].name} Case Studies
                  </h3>
                  <p className="font-smooch font-300 text-vm-primary">
                    Real results from our {industries[activeIndustry].name.toLowerCase()} campaigns
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {industries[activeIndustry].cases.map((caseStudy, index) => (
                  <div key={index} className="border border-vm-bg-light rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                    <h4 className="text-xl font-smooch font-400 text-vm-dark mb-3">
                      {caseStudy.title}
                    </h4>
                    <p className="font-smooch font-300 text-vm-primary mb-4 leading-relaxed">
                      {caseStudy.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="bg-vm-accent/10 px-4 py-2 rounded-lg">
                        <span className="text-sm font-smooch font-400 text-vm-accent">
                          {caseStudy.results}
                        </span>
                      </div>
                      <button className="text-vm-accent hover:text-vm-dark font-smooch font-400 transition-colors duration-300">
                        View Details →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasesByIndustry;