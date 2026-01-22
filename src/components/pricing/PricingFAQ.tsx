import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const PricingFAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is included in the monthly pricing?',
      answer: 'Our monthly pricing includes all store visits, POSM installation, compliance reporting, photo documentation, and dedicated support as per your chosen plan. There are no hidden fees or additional charges for standard services.'
    },
    {
      question: 'Can I upgrade or downgrade my plan?',
      answer: 'Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades will be applied at the start of your next billing cycle. Our team will help ensure a smooth transition.'
    },
    {
      question: 'Do you offer custom pricing for large enterprises?',
      answer: 'Absolutely! For enterprises with unique requirements or large-scale operations, we offer custom pricing based on your specific needs, volume, and complexity. Contact our sales team for a personalized quote.'
    },
    {
      question: 'What happens if I need additional store visits?',
      answer: 'Additional visits can be arranged on a per-visit basis. Business and Enterprise plans include some flexibility for urgent visits. We\'ll work with you to accommodate your needs within your budget.'
    },
    {
      question: 'Is there a minimum contract period?',
      answer: 'We offer flexible terms with no long-term contracts required. You can start with a monthly plan and scale as needed. However, longer commitments may qualify for volume discounts.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept bank transfers, checks, and digital payments. For enterprise clients, we can arrange customized payment terms including quarterly or annual billing cycles.'
    },
    {
      question: 'Do you provide training for our team?',
      answer: 'Yes, our Business and Enterprise plans include training sessions for your team on brand guidelines, merchandising standards, and how to use our reporting systems effectively.'
    },
    {
      question: 'What if I\'m not satisfied with the service?',
      answer: 'We stand behind our work with a satisfaction guarantee. If you\'re not happy with our service, we\'ll work to resolve any issues immediately. We also offer a 30-day trial period for new clients.'
    },
    {
      question: 'Can you handle seasonal campaigns or product launches?',
      answer: 'Absolutely! We specialize in time-sensitive campaigns and product launches. Our teams can rapidly scale to handle increased activity during peak seasons or special campaigns.'
    },
    {
      question: 'Do you provide services in smaller cities?',
      answer: 'Yes, we have coverage across 20+ cities including tier-2 and tier-3 markets. Our network continues to expand based on client needs. Contact us to check availability in your target markets.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-vm-bg-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-smooch font-200 text-vm-dark mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg font-smooch font-300 text-vm-primary">
            Get answers to common questions about our pricing and services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-vm-bg-light/50 transition-colors duration-300"
              >
                <h3 className="text-lg font-smooch font-400 text-vm-dark pr-4">
                  {faq.question}
                </h3>
                {openFAQ === index ? (
                  <ChevronUp className="w-5 h-5 text-vm-accent flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-vm-accent flex-shrink-0" />
                )}
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-6">
                  <div className="border-t border-vm-bg-light pt-4">
                    <p className="font-smooch font-300 text-vm-primary leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-smooch font-400 text-vm-dark mb-4">
              Still Have Questions?
            </h3>
            <p className="font-smooch font-300 text-vm-primary mb-6">
              Our team is here to help you choose the right plan and answer any specific questions about our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-vm-accent hover:bg-vm-accent/90 text-white px-6 py-3 rounded-lg font-smooch font-400 transition-all duration-300 hover:scale-105">
                Schedule a Call
              </button>
              <button className="border-2 border-vm-accent text-vm-accent hover:bg-vm-accent hover:text-white px-6 py-3 rounded-lg font-smooch font-400 transition-all duration-300 hover:scale-105">
                Email Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingFAQ;