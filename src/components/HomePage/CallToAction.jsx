import React from 'react';
import images from '../assets/images';

const CallToAction = () => {
  return (
    <section id="CTA_1" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="CTA_2" className="text-4xl font-bold mb-8">Ready to Find Your Dream Home?</h2>
        <p id="CTA_3" className="text-xl mb-12 max-w-2xl mx-auto">Join thousands of satisfied customers who found their perfect property through us. Start your journey today!</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Schedule a Viewing
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
            Contact an Agent
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;