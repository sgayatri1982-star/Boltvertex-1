import React from 'react';
import { TrendingUp, Target, Award, Users, BarChart3, Clock } from 'lucide-react';

const ResultsShowcase = () => {
  const results = [
    {
      icon: TrendingUp,
      metric: '35%',
      label: 'Average Sales Increase',
      description: 'Across all campaigns and industries'
    },
    {
      icon: Target,
      metric: '98%',
      label: 'Compliance Rate',
      description: 'Consistent brand standard execution'
    },
    {
      icon: Award,
      metric: '500+',
      label: 'Successful Projects',
      description: 'Completed across various industries'
    },
    {
      icon: Users,
      metric: '50+',
      label: 'Brands Served',
      description: 'From startups to Fortune 500 companies'
    },
    {
      icon: BarChart3,
      metric: '95%',
      label: 'Client Retention',
      description: 'Long-term partnerships built on trust'
    },
    {
      icon: Clock,
      metric: '24hrs',
      label: 'Response Time',
      description: 'Quick turnaround for urgent needs'
    }
  ];

  const testimonialStats = [
    {
      quote: "Vertex Merchandising transformed our retail presence completely.",
      author: "Marketing Director, FMCG Brand",
      result: "40% increase in shelf visibility"
    },
    {
      quote: "Their attention to detail and execution is unmatched in the industry.",
      author: "Brand Manager, Electronics Company",
      result: "98% compliance across 300+ stores"
    },
    {
      quote: "Professional team that delivers results consistently.",
      author: "Retail Head, Fashion Brand",
      result: "30% boost in sales performance"
    }
  ];

  return (
    <section className="py-20 bg-vm-bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-smooch font-200 text-vm-dark mb-6">
            Results That Speak
          </h2>
          <p className="text-lg font-smooch font-300 text-vm-primary max-w-3xl mx-auto">
            Measurable impact across campaigns, industries, and retail environments
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {results.map((result, index) => (
            <div 
              key={index}
              className="group bg-vm-bg-light p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-vm-accent/10 rounded-xl mb-6 mx-auto group-hover:bg-vm-accent/20 transition-colors duration-300">
                <result.icon className="w-8 h-8 text-vm-accent group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              <div className="text-4xl font-smooch font-200 text-vm-accent mb-2">
                {result.metric}
              </div>
              
              <h3 className="text-xl font-smooch font-400 text-vm-dark mb-3 group-hover:text-vm-accent transition-colors duration-300">
                {result.label}
              </h3>
              
              <p className="text-vm-primary font-smooch font-300 leading-relaxed">
                {result.description}
              </p>
            </div>
          ))}
        </div>

        {/* Client Testimonials with Results */}
        <div className="bg-vm-bg-light rounded-2xl p-8">
          <h3 className="text-3xl font-smooch font-400 text-vm-dark text-center mb-12">
            Client Success Stories
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonialStats.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <blockquote className="text-lg font-smooch font-300 text-vm-primary mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="border-t border-vm-bg-light pt-4">
                  <cite className="font-smooch font-400 text-vm-dark not-italic block mb-2">
                    {testimonial.author}
                  </cite>
                  <div className="bg-vm-accent/10 px-3 py-2 rounded-lg inline-block">
                    <span className="text-sm font-smooch font-400 text-vm-accent">
                      Result: {testimonial.result}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-smooch font-400 text-vm-dark mb-4">
            Ready to Achieve Similar Results?
          </h3>
          <p className="font-smooch font-300 text-vm-primary mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help elevate your brand's retail presence and drive measurable results.
          </p>
          <button className="bg-vm-accent hover:bg-vm-accent/90 text-white px-8 py-4 rounded-lg font-smooch font-400 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            Start Your Success Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResultsShowcase;