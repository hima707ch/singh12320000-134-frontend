import React from 'react';
import Hero from './Hero';
import AboutUs from './Aboutus';
import PropertySection from './PropertySection';
import CallToAction from './CallToAction';
import Footer from './Footer';
import images from '../assets/images';

const Body = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Hero />
      <AboutUs />
      <PropertySection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Body;