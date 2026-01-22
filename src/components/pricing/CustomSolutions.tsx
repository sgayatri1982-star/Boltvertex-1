import React from 'react';
import { Settings, Users, BarChart3, Shield, Zap, Globe } from 'lucide-react';

const CustomSolutions = () => {
  const customFeatures = [
    {
      icon: Settings,
      title: 'Tailored Solutions',
      description: 'Custom-built merchandising programs designed specifically for your brand requirements and market dynamics.'
    },
    {
      icon: Users,
      title: 'Dedicated Teams',
      description: 'Assigned teams with specialized training on your brand guidelines, products, and market positioning.'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Comprehensive reporting with custom KPIs, real-time dashboards, and predictive insights.'
    },
    {
      icon: Shield,
      title: 'Brand Protection',
      description: 'Proactive monitoring and enforcement to protect your brand integrity across all retail touchpoints.'
    },
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Quick rollout capabilities for time-sensitive campaigns and product launches across multiple markets.'
    },
    {
      icon: Globe,
      title: 'Multi-Market Coverage',
      description: 'Coordinated execution across different regions with local market expertise and cultural understanding.'
    }
  ];

  const industries = [
    { name: 'FMCG', projects: '150+' },
    { name: 'Electronics', projects: '80+' },
    { name: 'Fashion', projects: '60+' },
    { name: 'F&B', projects: '90+' },
    { name: 'Automotive', projects: '40+' },
    { name: 'Healthcare', projects: '30+' }
  ];

  return (
    <section className="py-20 bg-vm-bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-smooch font-200 text-vm-dark mb-6">
            Custom Enterprise Solutions
          </h2>
          <p className="text-lg font-smooch font-300 text-vm-primary max-w-3xl mx-auto">
            For large brands with unique requirements, we create bespoke merchandising solutions that deliver exceptional results
          </p>
        </div>

        {/* Custom Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {customFeatures.map((feature, index) => (
            <div 
              key={index}
              className="group bg-vm-bg-light p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-vm-accent/10 rounded-xl mb-6 group-hover:bg-vm-accent/20 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-vm-accent group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              <h3 className="text-xl font-smooch font-400 text-vm-dark mb-4 group-hover:text-vm-accent transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-vm-primary font-smooch font-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Industry Expertise */}
        <div className="bg-vm-bg-light rounded-2xl p-8 mb-16">
          <h3 className="text-3xl font-smooch font-400 text-vm-dark text-center mb-8">
            Industry Expertise
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-2xl font-smooch font-200 text-vm-accent mb-2">
                  {industry.projects}
                </div>
                <div className="font-smooch font-400 text-vm-dark mb-1">
                  {industry.name}
                </div>
                <div className="text-sm font-smooch font-300 text-vm-primary">
                  Projects
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Solution Process */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-3xl font-smooch font-400 text-vm-dark text-center mb-12">
            Our Custom Solution Process
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-vm-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-smooch font-400 text-vm-accent">1</span>
              </div>
              <h4 className="text-lg font-smooch font-400 text-vm-dark mb-2">Discovery</h4>
              <p className="text-sm font-smooch font-300 text-vm-primary">
                Deep dive into your brand, objectives, and market requirements
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-vm-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-smooch font-400 text-vm-accent">2</span>
              </div>
              <h4 className="text-lg font-smooch font-400 text-vm-dark mb-2">Strategy</h4>
              <p className="text-sm font-smooch font-300 text-vm-primary">
                Develop customized merchandising strategy and implementation plan
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-vm-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-smooch font-400 text-vm-accent">3</span>
              </div>
              <h4 className="text-lg font-smooch font-400 text-vm-dark mb-2">Execution</h4>
              <p className="text-sm font-smooch font-300 text-vm-primary">
                Deploy dedicated teams and implement solution across all touchpoints
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-vm-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-smooch font-400 text-vm-accent">4</span>
              </div>
              <h4 className="text-lg font-smooch font-400 text-vm-dark mb-2">Optimization</h4>
              <p className="text-sm font-smooch font-300 text-vm-primary">
                Continuous monitoring, analysis, and optimization for maximum ROI
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-vm-dark to-vm-primary text-white rounded-2xl p-8">
            <h3 className="text-3xl font-smooch font-400 mb-4">
              Ready for a Custom Solution?
            </h3>
            <p className="text-lg font-smooch font-300 text-vm-bg-light mb-8 max-w-2xl mx-auto">
              Let's discuss your unique requirements and create a tailored merchandising solution that drives exceptional results for your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-vm-accent hover:bg-vm-accent/90 text-white px-8 py-4 rounded-lg font-smooch font-400 text-lg transition-all duration-300 hover:scale-105">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-vm-dark px-8 py-4 rounded-lg font-smooch font-400 text-lg transition-all duration-300 hover:scale-105">
                Request Proposal
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomSolutions;