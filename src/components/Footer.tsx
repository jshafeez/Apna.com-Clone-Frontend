import React from 'react';
import { Link } from './ui/Link';
import { Facebook, Twitter, Instagram, Linkedin, Download } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">apna</h3>
            <p className="text-gray-300 mb-4">
              India's largest platform for jobs and courses with 25M+ users
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com" className="text-gray-300 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://instagram.com" className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com" className="text-gray-300 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Jobs by Categories</h3>
            <ul className="space-y-2">
              <li><Link href="/jobs/sales" className="text-gray-300 hover:text-white">Sales Jobs</Link></li>
              <li><Link href="/jobs/marketing" className="text-gray-300 hover:text-white">Marketing Jobs</Link></li>
              <li><Link href="/jobs/customer-service" className="text-gray-300 hover:text-white">Customer Service Jobs</Link></li>
              <li><Link href="/jobs/delivery" className="text-gray-300 hover:text-white">Delivery Jobs</Link></li>
              <li><Link href="/jobs/data-entry" className="text-gray-300 hover:text-white">Data Entry Jobs</Link></li>
              <li><Link href="/jobs/driver" className="text-gray-300 hover:text-white">Driver Jobs</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Jobs by Cities</h3>
            <ul className="space-y-2">
              <li><Link href="/jobs/mumbai" className="text-gray-300 hover:text-white">Jobs in Mumbai</Link></li>
              <li><Link href="/jobs/delhi" className="text-gray-300 hover:text-white">Jobs in Delhi</Link></li>
              <li><Link href="/jobs/bangalore" className="text-gray-300 hover:text-white">Jobs in Bangalore</Link></li>
              <li><Link href="/jobs/hyderabad" className="text-gray-300 hover:text-white">Jobs in Hyderabad</Link></li>
              <li><Link href="/jobs/chennai" className="text-gray-300 hover:text-white">Jobs in Chennai</Link></li>
              <li><Link href="/jobs/pune" className="text-gray-300 hover:text-white">Jobs in Pune</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Download App</h3>
            <p className="text-gray-300 mb-4">
              Get the best job searching experience on your mobile
            </p>
            <div className="flex flex-col space-y-3">
              <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-800 bg-white hover:bg-gray-100 focus:outline-none">
                <Download className="h-5 w-5 mr-2" />
                Download for Android
              </button>
              <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-800 bg-white hover:bg-gray-100 focus:outline-none">
                <Download className="h-5 w-5 mr-2" />
                Download for iOS
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2025 apna. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/about" className="text-sm text-gray-300 hover:text-white">About Us</Link>
              <Link href="/contact" className="text-sm text-gray-300 hover:text-white">Contact Us</Link>
              <Link href="/privacy" className="text-sm text-gray-300 hover:text-white">Privacy Policy</Link>
              <Link href="/terms" className="text-sm text-gray-300 hover:text-white">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;