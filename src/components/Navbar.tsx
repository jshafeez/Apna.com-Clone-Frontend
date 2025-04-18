import React, { useState } from 'react';
import { Menu, X, User, Search, ChevronDown, Globe } from 'lucide-react';
import { Link } from './ui/Link';
import logo from '../assets/apna-logo.jpg';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('English');

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <img 
                  src={logo} 
                  alt="Apna.co" 
                  className="h-12 w-auto"
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/jobs" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-blue-600">
                Jobs
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <Link href="/companies" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-blue-600">
                Companies
              </Link>
              <Link href="/courses" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-blue-600">
                Courses
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
            <div className="relative">
              <button 
                className="flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 focus:outline-none"
                onClick={() => setLanguage(language === 'English' ? 'हिंदी' : 'English')}
              >
                <Globe className="mr-1 h-4 w-4" />
                {language}
              </button>
            </div>
            <div>
              <Link href="/login" className="flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
                <User className="mr-1 h-5 w-5" />
                Login
              </Link>
            </div>
            <div>
              <Link 
                href="/register" 
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
              >
                Register free
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              href="/jobs"
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
            >
              Jobs
            </Link>
            <Link
              href="/companies"
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
            >
              Companies
            </Link>
            <Link
              href="/courses"
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
            >
              Courses
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <div className="flex-shrink-0">
                <User className="h-10 w-10 text-gray-500" />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">Guest User</div>
              </div>
            </div>
            <div className="mt-3 space-y-1">
              <Link
                href="/login"
                className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
              >
                Register
              </Link>
              <button
                className="w-full text-left block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                onClick={() => setLanguage(language === 'English' ? 'हिंदी' : 'English')}
              >
                <Globe className="inline mr-1 h-4 w-4" />
                {language === 'English' ? 'Switch to हिंदी' : 'Switch to English'}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
