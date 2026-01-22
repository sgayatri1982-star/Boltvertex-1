import React from 'react';
import { Mail, Phone, MapPin, Clock, Users, Award } from 'lucide-react';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hello@vertexmerchandising.com',
      subtitle: 'We respond within 2 hours',
      link: 'mailto:hello@vertexmerchandising.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 98765 43210',
      subtitle: 'Mon-Fri, 9 AM - 6 PM IST',
      link: 'tel:+919876543210'
    },
    {
      icon: MapPin,
      title: 'Our Offices',
      details: 'Mumbai, Delhi, Bangalore',
      subtitle: 'Pan-India presence',
      link: '#'
    }
  ];

  const quickStats = [
    {
      icon: Users,
      number: '50+',
      label: 'Expert Team Members'
    },
    {
      icon: Award,
      number: '98%',
      label: 'Client Satisfaction'
    },
    {
      icon: Clock,
      number: '24hrs',
      label: 'Response Time'
    }
  ];

  return (
    <section className="py-20 bg-vm-bg-light">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-smooch font-200 text-vm-dark mb-6">
            Contact Information
          </h2>
          <p className="text-lg font-smooch font-300 text-vm-primary">
            Multiple ways to reach our team of merchandising experts.
          </p>
        </div>

        <div className="space-y-6 mb-12">
          {contactDetails.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              className="flex items-center gap-6 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-vm-accent/10 rounded-full flex items-center justify-center group-hover:bg-vm-accent/20 transition-colors duration-300">
                <contact.icon className="w-8 h-8 text-vm-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-smooch font-400 text-vm-dark group-hover:text-vm-accent transition-colors duration-300 mb-1">
                  {contact.title}
                </h3>
                <p className="text-lg font-smooch font-300 text-vm-primary mb-1">
                  {contact.details}
                </p>
                <p className="text-sm font-smooch font-300 text-vm-primary/70">
                  {contact.subtitle}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-smooch font-400 text-vm-dark text-center mb-8">
            Why Choose Us
          </h3>
          <div className="grid grid-cols-3 gap-6">
            {quickStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-vm-accent/10 rounded-full mb-3 mx-auto">
                  <stat.icon className="w-6 h-6 text-vm-accent" />
                </div>
                <div className="text-2xl font-smooch font-200 text-vm-accent mb-1">
                  {stat.number}
                </div>
                <div className="text-sm font-smooch font-300 text-vm-primary">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Business Hours */}
        <div className="mt-8 bg-vm-accent/5 rounded-xl p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Clock className="w-5 h-5 text-vm-accent" />
            <h4 className="text-lg font-smooch font-400 text-vm-dark">Business Hours</h4>
          </div>
          <p className="font-smooch font-300 text-vm-primary">
            Monday - Friday: 9:00 AM - 6:00 PM IST<br />
            Saturday: 10:00 AM - 2:00 PM IST<br />
            Sunday: Closed
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;