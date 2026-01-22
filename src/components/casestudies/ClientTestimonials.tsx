import React, { useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const ClientTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      author: 'Rajesh Kumar',
      position: 'Marketing Head',
      company: 'Leading FMCG Brand',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Vertex Merchandising transformed our retail visibility completely. Their attention to detail and consistent execution across 200+ stores resulted in a 35% increase in sales. The team\'s professionalism and real-time reporting gave us complete confidence in our retail strategy.',
      rating: 5,
      project: 'National Product Launch',
      result: '35% sales increase across 200+ stores'
    },
    {
      author: 'Priya Sharma',
      position: 'Retail Director',
      company: 'Premium Electronics Brand',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Working with Vertex has been exceptional. Their strategic approach to merchandising and flawless execution helped us achieve 98% compliance across 300+ electronics stores. The interactive displays they created significantly improved customer engagement.',
      rating: 5,
      project: 'Electronics POSM Campaign',
      result: '98% compliance, 40% engagement boost'
    },
    {
      author: 'Amit Patel',
      position: 'Brand Manager',
      company: 'Fashion Retail Chain',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'The team at Vertex delivered beyond our expectations. Their coordinated 15-city launch was flawless, maintaining 100% brand consistency while achieving 30% above our target sales. Their expertise in fashion retail is unmatched.',
      rating: 5,
      project: 'Multi-City Fashion Launch',
      result: '100% brand consistency, 30% above target'
    },
    {
      author: 'Sneha Gupta',
      position: 'Operations Head',
      company: 'Food & Beverage Company',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Vertex\'s systematic approach and dedicated team coordination made our summer beverage campaign a huge success. They managed 200+ convenience stores with precision, resulting in a 60% sales increase during the campaign period.',
      rating: 5,
      project: 'Summer Beverage Campaign',
      result: '60% sales increase across 200+ stores'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-vm-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-smooch font-200 text-vm-dark mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg font-smooch font-300 text-vm-primary max-w-3xl mx-auto">
            Hear directly from the brands we've helped achieve remarkable results
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
                    <div className="grid lg:grid-cols-3 gap-8 items-center">
                      {/* Client Photo and Info */}
                      <div className="text-center lg:text-left">
                        <div className="relative inline-block mb-4">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.author}
                            className="w-24 h-24 rounded-full object-cover mx-auto lg:mx-0"
                          />
                          <div className="absolute -top-2 -right-2 bg-vm-accent text-white rounded-full p-2">
                            <Quote className="w-4 h-4" />
                          </div>
                        </div>
                        
                        <h4 className="text-xl font-smooch font-400 text-vm-dark mb-1">
                          {testimonial.author}
                        </h4>
                        <p className="text-vm-accent font-smooch font-300 mb-1">
                          {testimonial.position}
                        </p>
                        <p className="text-sm font-smooch font-300 text-vm-primary mb-4">
                          {testimonial.company}
                        </p>
                        
                        <div className="flex justify-center lg:justify-start mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>

                      {/* Testimonial Content */}
                      <div className="lg:col-span-2">
                        <blockquote className="text-xl lg:text-2xl font-smooch font-300 text-vm-primary mb-6 leading-relaxed">
                          "{testimonial.text}"
                        </blockquote>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-vm-bg-light p-4 rounded-lg">
                            <h5 className="font-smooch font-400 text-vm-dark mb-1">Project</h5>
                            <p className="text-sm font-smooch font-300 text-vm-primary">
                              {testimonial.project}
                            </p>
                          </div>
                          <div className="bg-vm-accent/10 p-4 rounded-lg">
                            <h5 className="font-smooch font-400 text-vm-dark mb-1">Result</h5>
                            <p className="text-sm font-smooch font-400 text-vm-accent">
                              {testimonial.result}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white hover:bg-vm-accent hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white hover:bg-vm-accent hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-vm-accent' : 'bg-vm-bg-light'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-smooch font-400 text-vm-dark mb-4">
              Join Our Success Stories
            </h3>
            <p className="font-smooch font-300 text-vm-primary mb-6">
              Ready to achieve similar results for your brand? Let's discuss your merchandising needs.
            </p>
            <button className="bg-vm-accent hover:bg-vm-accent/90 text-white px-8 py-4 rounded-lg font-smooch font-400 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Get Your Case Study
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;