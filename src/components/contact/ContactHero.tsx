import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactHero = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-vm-dark to-vm-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-smooch font-100 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl font-smooch font-300 text-vm-bg-light max-w-4xl mx-auto leading-relaxed">
            Ready to elevate your retail presence? Let's discuss your merchandising needs and create a customized solution for your brand.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
            <Mail className="w-12 h-12 text-vm-accent mx-auto mb-4" />
            <h3 className="text-2xl font-smooch font-400 mb-2">Email Us</h3>
            <p className="font-smooch font-300 text-vm-bg-light">hello@vertexmerchandising.com</p>
          </div>
          <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
            <Phone className="w-12 h-12 text-vm-accent mx-auto mb-4" />
            <h3 className="text-2xl font-smooch font-400 mb-2">Call Us</h3>
            <p className="font-smooch font-300 text-vm-bg-light">+91 98765 43210</p>
          </div>
          <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
            <MapPin className="w-12 h-12 text-vm-accent mx-auto mb-4" />
            <h3 className="text-2xl font-smooch font-400 mb-2">Visit Us</h3>
            <p className="font-smooch font-300 text-vm-bg-light">Mumbai, Delhi, Bangalore</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;