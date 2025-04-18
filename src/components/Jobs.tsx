import React, { useState } from 'react';
import { jobsData } from '../data/jobs';
import { MapPin, Building, Briefcase, Clock } from 'lucide-react';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  posted: string;
}

const Jobs: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredJobs = jobsData.filter((job) => {
    return (
      (filter === 'all' || job.type.toLowerCase() === filter) &&
      (searchTerm === '' || 
       job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
       job.location.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Latest Job Openings</h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
            Find your perfect role from thousands of opportunities
          </p>
        </div>

        <div className="mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 mb-6">
            <div className="flex overflow-x-auto pb-2 space-x-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  filter === 'all' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                All Jobs
              </button>
              <button
                onClick={() => setFilter('full-time')}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  filter === 'full-time' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Full-time
              </button>
              <button
                onClick={() => setFilter('part-time')}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  filter === 'part-time' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Part-time
              </button>
              <button
                onClick={() => setFilter('contract')}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  filter === 'contract' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Contract
              </button>
            </div>

            <div className="relative w-full md:w-64">
              <input
                type="text"
                className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Search jobs"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white shadow-sm rounded-lg p-6 border border-gray-100 transition-all duration-300 hover:shadow-md"
              >
                <div className="flex justify-between">
                  <h3 className="text-lg font-medium text-gray-900">{job.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    job.type === 'Full-time' 
                      ? 'bg-green-100 text-green-800' 
                      : job.type === 'Part-time'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-orange-100 text-orange-800'
                  }`}>
                    {job.type}
                  </span>
                </div>
                
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <Building className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                  {job.company}
                </div>
                
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <MapPin className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                  {job.location}
                </div>
                
                <div className="mt-2 flex flex-wrap gap-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <Briefcase className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                    {job.experience}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="text-gray-700 font-medium">{job.salary}</span>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-between items-center">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                    {job.posted}
                  </div>
                  <button
                    type="button"
                    className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
            >
              View More Jobs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobs;