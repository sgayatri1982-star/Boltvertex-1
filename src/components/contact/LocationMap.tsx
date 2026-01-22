import React from 'react';
import { MapPin, Building, Users } from 'lucide-react';

const LocationMap = () => {
  const locations = [
    {
      city: 'Mumbai',
      address: 'Andheri East, Mumbai - 400069',
      team: '20+ Team Members',
      coverage: '150+ Stores',
      icon: Building
    },
    {
      city: 'Delhi',
      address: 'Connaught Place, New Delhi - 110001',
      team: '15+ Team Members',
      coverage: '120+ Stores',
      icon: Building
    },
    {
      city: 'Bangalore',
      address: 'Koramangala, Bangalore - 560034',
      team: '15+ Team Members',
      coverage: '130+ Stores',
      icon: Building
    }
  ];

  return (
    <section className="py-20 bg-vm-bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-smooch font-200 text-vm-dark mb-6">
            Our Locations
          </h2>
          <p className="text-lg font-smooch font-300 text-vm-primary max-w-3xl mx-auto">
            Strategic presence across India's major commercial hubs to serve you better
          </p>
        </div>

        {/* Map Placeholder */}
        <div className="bg-vm-bg-light rounded-2xl p-8 mb-12 text-center">
          <div className="bg-white rounded-xl p-12 shadow-inner">
            <MapPin className="w-16 h-16 text-vm-accent mx-auto mb-4" />
            <h3 className="text-2xl font-smooch font-400 text-vm-dark mb-2">
              Interactive Map
            </h3>
            <p className="font-smooch font-300 text-vm-primary">
              Our offices and service areas across India
            </p>
          </div>
        </div>

        {/* Location Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-vm-accent/10 rounded-xl mb-6 group-hover:bg-vm-accent/20 transition-colors duration-300">
                <location.icon className="w-8 h-8 text-vm-accent group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              <h3 className="text-2xl font-smooch font-400 text-vm-dark mb-3 group-hover:text-vm-accent transition-colors duration-300">
                {location.city}
              </h3>
              
              <p className="text-vm-primary font-smooch font-300 mb-4">
                {location.address}
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-vm-accent" />
                  <span className="text-sm font-smooch font-300 text-vm-primary">
                    {location.team}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-vm-accent" />
                  <span className="text-sm font-smooch font-300 text-vm-primary">
                    {location.coverage}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coverage Stats */}
        <div className="mt-16 bg-vm-accent/5 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-smooch font-400 text-vm-dark mb-2">
              Pan-India Coverage
            </h3>
            <p className="font-smooch font-300 text-vm-primary">
              Expanding our reach to serve brands across the country
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-smooch font-200 text-vm-accent mb-2">20+</div>
              <div className="font-smooch font-300 text-vm-primary">Cities Covered</div>
            </div>
            <div>
              <div className="text-4xl font-smooch font-200 text-vm-accent mb-2">500+</div>
              <div className="font-smooch font-300 text-vm-primary">Active Stores</div>
            </div>
            <div>
              <div className="text-4xl font-smooch font-200 text-vm-accent mb-2">50+</div>
              <div className="font-smooch font-300 text-vm-primary">Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-smooch font-200 text-vm-accent mb-2">24/7</div>
              <div className="font-smooch font-300 text-vm-primary">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;