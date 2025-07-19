import React from 'react';
import { Coffee } from 'lucide-react';
import Home from './component/Home';
import Menu from './component/Menu';
import About from './component/About';
import Contact from './component/Contact';
import Login from './component/Login';
import Navigation from './component/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <Home />

      <Menu />

      <About />

      <Contact />

      <Login />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Coffee className="h-8 w-8 text-amber-600" />
              <span className="ml-2 text-xl font-bold">Coffee Heaven</span>
            </div>
            <p className="text-gray-400 mb-4">
              Where great coffee meets great company
            </p>
            <p className="text-gray-500 text-sm">
              © 2024 Coffee Heaven. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
