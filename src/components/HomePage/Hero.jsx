import React from 'react';
import images from '../assets/images';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div id="Hero_1" className="relative overflow-hidden bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 py-20">
      <div className="absolute inset-0">
        <svg className="absolute right-0 top-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 lg:mb-0"
          >
            <h1 id="Hero_2" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Find Your Dream</span>
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="block text-gray-900"
              >
                Home Today
              </motion.span>
            </h1>
            <p id="Hero_3" className="text-lg text-gray-600 mb-8">Discover the perfect property that matches your lifestyle and dreams. Let us guide you home.</p>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">Get Started</button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">Learn More</button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              id="Hero_4"
              src={images[0] || 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6'}
              alt="Luxury Home"
              className="rounded-lg shadow-2xl w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;