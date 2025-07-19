import React from 'react';

function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Coffee Heaven</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2023, Coffee Heaven has been a beloved destination for coffee lovers and food enthusiasts alike. We take pride in serving rich, aromatic coffee and freshly crafted bites in a cozy, welcoming atmosphere.            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our commitment to quality ingredients, thoughtful preparation, and genuine hospitality makes every visit special — whether you're grabbing a quick espresso or lingering over a heartfelt conversation. At Coffee Heaven, it's not just about coffee — it's about connection, comfort, and community.
            </p>
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">2+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">10K+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">50+</div>
                <div className="text-gray-600">Menu Items</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Cafe interior"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
