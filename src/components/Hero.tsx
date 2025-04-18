import React from 'react';
import { Search, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="People working together" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 mix-blend-multiply" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Find your dream job now
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl">
            5 lakh+ jobs for you to explore
          </p>
        </div>
        
        <div className="mt-10 max-w-xl mx-auto">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Search jobs, companies"
                />
              </div>
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Location"
                />
              </div>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
              >
                Search
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
          <span className="bg-blue-700 bg-opacity-40 px-3 py-1 rounded-full border border-blue-300">Sales</span>
          <span className="bg-blue-700 bg-opacity-40 px-3 py-1 rounded-full border border-blue-300">Marketing</span>
          <span className="bg-blue-700 bg-opacity-40 px-3 py-1 rounded-full border border-blue-300">Customer Service</span>
          <span className="bg-blue-700 bg-opacity-40 px-3 py-1 rounded-full border border-blue-300">Data Entry</span>
          <span className="bg-blue-700 bg-opacity-40 px-3 py-1 rounded-full border border-blue-300">Delivery</span>
          <span className="bg-blue-700 bg-opacity-40 px-3 py-1 rounded-full border border-blue-300">Driver</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;