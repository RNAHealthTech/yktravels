import React from 'react';
import { Mountain, Car, Building, Heart, Gift, Users, Star, ArrowRight } from 'lucide-react';

const YKTravelsServices = () => {
  const services = [
    { name: 'Hotels, Trekking & Camping', icon: <Mountain className="w-5 h-5" /> },
    { name: 'Transport Services', icon: <Car className="w-5 h-5" /> },
    { name: 'Corporate Events/parties', icon: <Building className="w-5 h-5" /> },
    { name: 'Family Holiday, Honeymoon Packages', icon: <Heart className="w-5 h-5" /> },
    { name: 'Bachelor Parties', icon: <Gift className="w-5 h-5" /> },
    { name: 'School/college/office Trips', icon: <Users className="w-5 h-5" /> },
    { name: 'Stargazing Events, Holy Trips Etc', icon: <Star className="w-5 h-5" /> }
  ];

  return (
    <section className="w-full bg-gray-50 text-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="text-orange-500">Services Provided by
              <br/>
              </span> 
              Yk Travels  
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left side: Services list */}
          <div className="w-full md:w-1/2">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center group hover:bg-orange-50 p-3 rounded-md transition-all duration-300">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center">
                      {service.icon}
                    </div>
                    <div className="ml-4 flex items-center justify-between w-full">
                      <h3 className="text-lg font-medium text-gray-800">{service.name}</h3>
                      <ArrowRight className="w-4 h-4 text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right side: Image placeholder */}
          <div className="w-full md:w-1/2">
            <div className="shadow-lg h-full min-h-64 flex items-center justify-center">
              <div className="text-center p-8">
                <img src="/images/tent4.jpg" alt="YK Travels Services" className="mx-auto rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YKTravelsServices;