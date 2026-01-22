import React from 'react';
import { ArrowRight, Phone, Calendar, MessageCircle } from 'lucide-react';

const ContactCTA = () => {
  const ctaOptions = [
    {
      icon: Phone,
      title: 'Schedule a Call',
      description: 'Book a 30-minute consultation with our experts',
      action: 'Book Now',
      highlight: true
    },
    {
      icon: Calendar,
      title: 'Request a Demo',
      description: 'See our services in action with a live demonstration',
      action: 'Watch Demo',
      highlight: false
    },
    {
      icon: MessageCircle,
      title: 'Get a Quote',
      description: 'Receive a customized proposal for your needs',
      action: 'Get Quote',
      highlight: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-vm-dark to-vm-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-smooch font-200 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl font-smooch font-300 text-vm-bg-light max-w-3xl mx-auto leading-relaxed">
            Take the next step towards elevating your brand's retail presence. 
            Choose the option that works best for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {ctaOptions.map((option, index) => (
            <div 
              key={index}
              className={`group p-8 rounded-xl transition-all duration-500 hover:scale-105 text-center ${
                option.highlight 
                  ? 'bg-vm-accent hover:bg-vm-accent/90 shadow-2xl' 
                  : 'bg-white/10 hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              <div className={`flex items-center justify-center w-16 h-16 rounded-full mb-6 mx-auto transition-colors duration-300 ${
                option.highlight 
                  ? 'bg-white/20 group-hover:bg-white/30' 
                  : 'bg-vm-accent/20 group-hover:bg-vm-accent/30'
              }`}>
                <option.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              <h3 className="text-2xl font-smooch font-400 mb-4">
                {option.title}
              </h3>
              
              <p className="font-smooch font-300 text-vm-bg-light mb-6 leading-relaxed">
                {option.description}
              </p>
              
              <button className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-smooch font-400 transition-all duration-300 hover:scale-105 ${
                option.highlight 
                  ? 'bg-white text-vm-accent hover:bg-vm-bg-light' 
                  : 'border-2 border-white text-white hover:bg-white hover:text-vm-dark'
              }`}>
                {option.action}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          ))}
        </div>

        {/* Emergency Contact */}
        <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8">
          <h3 className="text-2xl font-smooch font-400 mb-4">
            Need Immediate Assistance?
          </h3>
          <p className="font-smooch font-300 text-vm-bg-light mb-6">
            For urgent merchandising needs or time-sensitive projects, reach out directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:+919876543210"
              className="inline-flex items-center gap-2 bg-vm-accent hover:bg-vm-accent/90 text-white px-6 py-3 rounded-lg font-smooch font-400 transition-all duration-300 hover:scale-105"
            >
              <Phone size={18} />
              Call Now: +91 98765 43210
            </a>
            <a 
              href="mailto:hello@vertexmerchandising.com"
              className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-vm-dark px-6 py-3 rounded-lg font-smooch font-400 transition-all duration-300 hover:scale-105"
            >
              <MessageCircle size={18} />
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;