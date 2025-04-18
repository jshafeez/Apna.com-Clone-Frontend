import React from 'react';
import { companiesData } from '../data/companies';
import { MapPin, Users, Building } from 'lucide-react';

const Companies: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Top Companies Hiring</h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
            Connect with the best companies across industries
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {companiesData.map((company) => (
            <div 
              key={company.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md hover:border-gray-300"
            >
              <div className="h-32 w-full overflow-hidden bg-gray-100">
                <img
                  src={company.coverImage}
                  alt={`${company.name} cover`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="h-16 w-16 bg-white rounded-md overflow-hidden border border-gray-200 flex items-center justify-center">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="h-12 w-12 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{company.name}</h3>
                    <div className="mt-1 flex items-center text-sm text-gray-500">
                      <MapPin className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                      {company.location}
                    </div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Users className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                    {company.employees} employees
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Building className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                    {company.industry}
                  </div>
                </div>
                
                <div className="mt-6 flex justify-between items-center">
                  <span className="text-sm font-medium text-blue-600">{company.openings} open positions</span>
                  <button
                    type="button"
                    className="inline-flex items-center px-3 py-1.5 border border-blue-600 text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 focus:outline-none"
                  >
                    View Company
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
          >
            Browse All Companies
          </button>
        </div>
      </div>
    </section>
  );
};

export default Companies;