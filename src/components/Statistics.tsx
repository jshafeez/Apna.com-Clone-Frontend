import React from 'react';
import { Users, Briefcase, Building, GraduationCap } from 'lucide-react';

const Statistics: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Trusted by Millions</h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-blue-100">
            Join India's largest professional network
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-500 bg-opacity-20 mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold">25M+</div>
            <div className="mt-2 text-blue-100">Registered Users</div>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-500 bg-opacity-20 mb-4">
              <Briefcase className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold">5L+</div>
            <div className="mt-2 text-blue-100">Available Jobs</div>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-500 bg-opacity-20 mb-4">
              <Building className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold">10K+</div>
            <div className="mt-2 text-blue-100">Hiring Companies</div>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-500 bg-opacity-20 mb-4">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold">100+</div>
            <div className="mt-2 text-blue-100">Free Courses</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;