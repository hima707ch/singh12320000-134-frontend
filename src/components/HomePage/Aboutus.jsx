import React from 'react';
import images from '../assets/images';

const AboutUs = () => {
  return (
    <section id="AboutUs_1" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative mb-10 lg:mb-0">
            <div className="aspect-w-3 aspect-h-2">
              <img
                id="AboutUs_2"
                src={images[1] || 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11'}
                alt="Team"
                className="rounded-xl shadow-xl object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-blue-600 rounded-lg p-8 text-white">
              <p className="text-4xl font-bold">15+</p>
              <p>Years of Experience</p>
            </div>
          </div>
          
          <div>
            <h2 id="AboutUs_3" className="text-3xl font-bold mb-6">We Help You Make The Best Decision</h2>
            <p id="AboutUs_4" className="text-gray-600 mb-8">With over 15 years of experience in real estate, we've helped thousands of families find their perfect home. Our dedicated team of professionals ensures a smooth and transparent buying process.</p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
                <p className="text-gray-600">Professional advice from industry experts</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock assistance for all queries</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Best Deals</h3>
                <p className="text-gray-600">Access to exclusive property listings</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Trusted Partner</h3>
                <p className="text-gray-600">Reliable service you can count on</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;