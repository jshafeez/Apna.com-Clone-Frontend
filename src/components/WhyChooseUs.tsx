import React from 'react';
import { Shield, Briefcase, Globe, UserCheck } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Apna</h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
            Connect with opportunities and grow your career
          </p>
        </div>
        
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">Verified Jobs</h3>
            <p className="mt-2 text-gray-500">
              All jobs on apna are verified to ensure you find legitimate opportunities.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4">
              <Briefcase className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">5L+ Jobs</h3>
            <p className="mt-2 text-gray-500">
              Access over 5 lakh job openings across various industries and locations.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4">
              <Globe className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">Local Opportunities</h3>
            <p className="mt-2 text-gray-500">
              Find jobs in your city and neighborhood for a convenient commute.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4">
              <UserCheck className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">Easy Application</h3>
            <p className="mt-2 text-gray-500">
              Apply to multiple jobs with just a few taps and track your applications.
            </p>
          </div>
        </div>
        
        <div className="mt-16 bg-blue-50 rounded-lg overflow-hidden shadow-sm">
          <div className="grid md:grid-cols-2">
            <div className="p-8 flex items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Join 25M+ Users on Apna</h3>
                <p className="mt-4 text-lg text-gray-600">
                  Create your professional profile, connect with employers, and find your dream job today.
                </p>
                <div className="mt-6">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                  >
                    Register Now
                  </button>
                </div>
              </div>
            </div>
            <div className="h-64 md:h-auto">
              <img
                src="https://images.pexels.com/photos/3894378/pexels-photo-3894378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Professional network"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;