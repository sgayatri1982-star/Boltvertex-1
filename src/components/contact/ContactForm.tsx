import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', company: '', phone: '', message: '' });
  };

  return (
    <section className="py-20 bg-vm-bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-smooch font-200 text-vm-dark mb-6">
            Send Us a Message
          </h2>
          <p className="text-lg font-smooch font-300 text-vm-primary">
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField('')}
                  required
                  className={`w-full px-4 py-4 border-2 rounded-lg font-smooch font-300 text-vm-dark placeholder-vm-primary/50 transition-all duration-300 ${
                    focusedField === 'name' ? 'border-vm-accent bg-vm-accent/5' : 'border-vm-bg-light'
                  }`}
                  placeholder="Your Name *"
                />
              </div>
              
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField('')}
                  required
                  className={`w-full px-4 py-4 border-2 rounded-lg font-smooch font-300 text-vm-dark placeholder-vm-primary/50 transition-all duration-300 ${
                    focusedField === 'email' ? 'border-vm-accent bg-vm-accent/5' : 'border-vm-bg-light'
                  }`}
                  placeholder="Email Address *"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('company')}
                  onBlur={() => setFocusedField('')}
                  required
                  className={`w-full px-4 py-4 border-2 rounded-lg font-smooch font-300 text-vm-dark placeholder-vm-primary/50 transition-all duration-300 ${
                    focusedField === 'company' ? 'border-vm-accent bg-vm-accent/5' : 'border-vm-bg-light'
                  }`}
                  placeholder="Company Name *"
                />
              </div>
              
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField('')}
                  className={`w-full px-4 py-4 border-2 rounded-lg font-smooch font-300 text-vm-dark placeholder-vm-primary/50 transition-all duration-300 ${
                    focusedField === 'phone' ? 'border-vm-accent bg-vm-accent/5' : 'border-vm-bg-light'
                  }`}
                  placeholder="Phone Number"
                />
              </div>
            </div>

            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField('')}
                required
                rows={6}
                className={`w-full px-4 py-4 border-2 rounded-lg font-smooch font-300 text-vm-dark placeholder-vm-primary/50 transition-all duration-300 resize-none ${
                  focusedField === 'message' ? 'border-vm-accent bg-vm-accent/5' : 'border-vm-bg-light'
                }`}
                placeholder="Tell us about your merchandising needs, target locations, timeline, and any specific requirements... *"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-vm-accent hover:bg-vm-accent/90 text-white px-8 py-4 rounded-lg font-smooch font-400 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3 group"
            >
              {isSubmitted ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Message Sent!
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Success Toast */}
        {isSubmitted && (
          <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-fade-in-up z-50">
            <CheckCircle className="w-5 h-5" />
            Thank you! We'll be in touch soon.
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;