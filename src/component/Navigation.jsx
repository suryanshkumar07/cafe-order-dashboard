import React from 'react';
import { Coffee } from 'lucide-react';

function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Coffee className="h-8 w-8 text-amber-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Coffee Heaven</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-900 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors">Home</a>
              <a href="#menu" className="text-gray-900 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors">Menu</a>
              <a href="#about" className="text-gray-900 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors">About</a>
              <a href="#contact" className="text-gray-900 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors">Contact</a>
              <a href="#login" className="text-gray-900 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors">Login</a>
            </div>
          </div>
          <div className="hidden md:block">
            <button className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors">
              Reserve Table
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
