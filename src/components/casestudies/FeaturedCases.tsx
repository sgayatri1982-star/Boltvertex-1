import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, TrendingUp } from 'lucide-react';

const FeaturedCases = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cases = [
    {
      title: 'FMCG Retail Rollout',
      client: 'Leading Consumer Goods Brand',
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800',
      challenge: 'Launch new product line across 200+ retail outlets with consistent brand presentation',
      solution: 'Comprehensive POSM deployment with real-time compliance tracking and dedicated team coordination',
      results: [
        '98% shelf compliance achieved',
        '35% increase in product visibility',
        '3-month rollout completed on time',
        '25% boost in sales performance'
      ],
      metrics: {
        stores: '200+',
        timeline: '3 months',
        compliance: '98%',
        salesIncrease: '25%'
      }
    },
    {
      title: 'Electronics POSM Campaign',
      client: 'Major Electronics Brand',
      image: 'https://images.pexels.com/photos/1841841/pexels-photo-1841841.jpeg?auto=compress&cs=tinysrgb&w=800',
      challenge: 'Enhance brand visibility in competitive electronics retail environment',
      solution: 'Custom display solutions with interactive elements and strategic placement optimization',
      results: [
        '300+ stores onboarded',
        '40% improvement in brand recall',
        'Reduced setup time by 50%',
        'Enhanced customer engagement'
      ],
      metrics: {
        stores: '300+',
        timeline: '4 months',
        compliance: '95%',
        engagement: '40%'
      }
    },
    {
      title: 'Fashion Brand Launch',
      client: 'Premium Fashion Retailer',
      image: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=800',
      challenge: 'Multi-city brand launch with consistent premium positioning',
      solution: 'Coordinated launch across 15 cities with premium display solutions and brand training',
      results: [
        'Successful 15-city launch',
        '100% brand consistency',
        'Premium positioning achieved',
        '30% above target sales'
      ],
      metrics: {
        stores: '150+',
        timeline: '2 months',
        compliance: '100%',
        salesIncrease: '30%'
      }
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cases.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cases.length) % cases.length);
  };

  return (
    <section className="py-20 bg-vm-bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-smooch font-200 text-vm-dark mb-6">
            Featured Case Studies
          </h2>
          <p className="text-lg font-smooch font-300 text-vm-primary max-w-3xl mx-auto">
            Detailed insights into our most successful merchandising campaigns
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {cases.map((caseStudy, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="relative group">
                      <img 
                        src={caseStudy.image} 
                        alt={caseStudy.title}
                        className="w-full h-96 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-vm-dark/40 to-transparent rounded-xl"></div>
                      
                      {/* Metrics overlay */}
                      <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                        <div className="grid grid-cols-2 gap-4 text-center">
                          <div>
                            <div className="text-2xl font-smooch font-200 text-vm-accent">{caseStudy.metrics.stores}</div>
                            <div className="text-xs font-smooch font-300 text-vm-primary">Stores</div>
                          </div>
                          <div>
                            <div className="text-2xl font-smooch font-200 text-vm-accent">{caseStudy.metrics.compliance}</div>
                            <div className="text-xs font-smooch font-300 text-vm-primary">Compliance</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-3xl font-smooch font-400 text-vm-dark mb-2">
                          {caseStudy.title}
                        </h3>
                        <p className="text-lg font-smooch font-300 text-vm-accent">
                          {caseStudy.client}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-smooch font-400 text-vm-dark mb-2">Challenge</h4>
                        <p className="font-smooch font-300 text-vm-primary leading-relaxed">
                          {caseStudy.challenge}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-smooch font-400 text-vm-dark mb-2">Solution</h4>
                        <p className="font-smooch font-300 text-vm-primary leading-relaxed">
                          {caseStudy.solution}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-smooch font-400 text-vm-dark mb-3">Key Results</h4>
                        <ul className="space-y-2">
                          {caseStudy.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-center gap-2">
                              <TrendingUp className="w-4 h-4 text-vm-accent flex-shrink-0" />
                              <span className="font-smooch font-300 text-vm-primary">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button className="inline-flex items-center gap-2 text-vm-accent hover:text-vm-dark font-smooch font-400 transition-colors duration-300">
                        View Full Case Study
                        <ExternalLink size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-vm-dark" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-vm-dark" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {cases.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-vm-accent' : 'bg-vm-bg-light'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCases;