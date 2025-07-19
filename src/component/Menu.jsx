import React from 'react';

function Menu() {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Menu</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully crafted selection of coffee, pastries, and light meals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Coffee Menu */}
          <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Coffee</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-gray-900">Espresso</h4>
                  <p className="text-sm text-gray-600">Rich and bold</p>
                </div>
                <span className="text-amber-600 font-semibold">₹291</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-gray-900">Cappuccino</h4>
                  <p className="text-sm text-gray-600">Creamy and smooth</p>
                </div>
                <span className="text-amber-600 font-semibold">₹353</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-gray-900">Latte</h4>
                  <p className="text-sm text-gray-600">Silky milk foam</p>
                </div>
                <span className="text-amber-600 font-semibold">₹374</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-gray-900">Americano</h4>
                  <p className="text-sm text-gray-600">Classic and strong</p>
                </div>
                <span className="text-amber-600 font-semibold">₹311</span>
              </div>
            </div>
          </div>

          {/* Pastries Menu */}
          <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Pastries</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-gray-900">Croissant</h4>
                  <p className="text-sm text-gray-600">Buttery and flaky</p>
                </div>
                <span className="text-amber-600 font-semibold">₹229</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-gray-900">Muffin</h4>
                  <p className="text-sm text-gray-600">Blueberry or chocolate</p>
                </div>
                <span className="text-amber-600 font-semibold">₹270</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-gray-900">Danish</h4>
                  <p className="text-sm text-gray-600">Sweet and delicate</p>
                </div>
                <span className="text-amber-600 font-semibold">₹291</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-gray-900">Scone</h4>
                  <p className="text-sm text-gray-600">Traditional English</p>
                </div>
                <span className="text-amber-600 font-semibold">₹291</span>
              </div>
            </div>
          </div>

          {/* Light Meals Menu */}
          <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Light Meals</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-gray-900">Avocado Toast</h4>
                  <p className="text-sm text-gray-600">Fresh and healthy</p>
                </div>
                <span className="text-amber-600 font-semibold">₹706</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-gray-900">Breakfast Sandwich</h4>
                  <p className="text-sm text-gray-600">Egg, cheese, bacon</p>
                </div>
                <span className="text-amber-600 font-semibold">₹601</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-gray-900">Soup of the Day</h4>
                  <p className="text-sm text-gray-600">Ask your server</p>
                </div>
                <span className="text-amber-600 font-semibold">₹540</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-gray-900">Garden Salad</h4>
                  <p className="text-sm text-gray-600">Fresh mixed greens</p>
                </div>
                <span className="text-amber-600 font-semibold">₹747</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
