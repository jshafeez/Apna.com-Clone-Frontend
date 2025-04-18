import React from 'react';
import { coursesData } from '../data/courses';
import { Clock, Award, Star, Users } from 'lucide-react';

const Courses: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Upskill with Courses</h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
            Learn new skills to advance your career
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {coursesData.map((course) => (
            <div 
              key={course.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{course.provider}</p>
                  </div>
                  <div className="flex items-center bg-yellow-100 px-2 py-1 rounded text-yellow-800">
                    <Star className="h-4 w-4 fill-current text-yellow-500 mr-1" />
                    <span className="text-sm font-medium">{course.rating}</span>
                  </div>
                </div>
                
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <Clock className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                  {course.duration}
                </div>
                
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <Award className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                  {course.certificate ? 'Certificate included' : 'No certificate'}
                </div>
                
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <Users className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                  {course.enrolled} enrolled
                </div>
                
                <div className="mt-6 flex justify-between items-center">
                  <div>
                    {course.free ? (
                      <span className="text-lg font-bold text-green-600">Free</span>
                    ) : (
                      <>
                        <span className="text-lg font-bold text-gray-900">₹{course.price}</span>
                        {course.originalPrice && (
                          <span className="text-sm text-gray-500 line-through ml-2">₹{course.originalPrice}</span>
                        )}
                      </>
                    )}
                  </div>
                  <button
                    type="button"
                    className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
          >
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;