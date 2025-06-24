import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchQuery);
  };

  return (
    <header id="Header_1" className="bg-gradient-to-r from-blue-900 to-purple-900 text-white shadow-lg">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img id="Header_2" src={images[0]} alt="Logo" className="h-10 w-10 rounded-full hover:opacity-80 transition-opacity" />
            <span id="Header_3" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">MovieHub</span>
          </Link>

          {/* Desktop Navigation */}
          <div id="Header_4" className="hidden md:flex items-center space-x-6">
            <Link to="/" className={`hover:text-blue-300 transition-colors ${location.pathname === '/' ? 'text-blue-300 font-bold' : ''}`}>Home</Link>
            <Link to="/movielistpage" className={`hover:text-blue-300 transition-colors ${location.pathname === '/movielistpage' ? 'text-blue-300 font-bold' : ''}`}>Movies</Link>
            <Link to="/moviedetailpage" className={`hover:text-blue-300 transition-colors ${location.pathname === '/moviedetailpage' ? 'text-blue-300 font-bold' : ''}`}>Movie Details</Link>
            <Link to="/bookingpage" className={`hover:text-blue-300 transition-colors ${location.pathname === '/bookingpage' ? 'text-blue-300 font-bold' : ''}`}>Booking</Link>
            <Link to="/userprofilepage" className={`hover:text-blue-300 transition-colors ${location.pathname === '/userprofilepage' ? 'text-blue-300 font-bold' : ''}`}>Profile</Link>
          </div>

          {/* Search Bar */}
          <form id="Header_5" onSubmit={handleSearch} className="hidden md:flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search movies..."
              className="px-4 py-1 rounded-l-full bg-white/10 border border-white/20 focus:outline-none focus:border-blue-400 transition-colors"
            />
            <button type="submit" className="px-4 py-1 bg-blue-600 rounded-r-full hover:bg-blue-700 transition-colors">
              Search
            </button>
          </form>

          {/* Auth Buttons */}
          <div id="Header_6" className="hidden md:flex items-center space-x-4">
            <Link to="/loginpage" className="px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition-all">
              Login
            </Link>
            <Link to="/registerpage" className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors">
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="Header_7"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div id="Header_8" className="md:hidden mt-4 pb-4 space-y-4">
            <Link to="/" className="block py-2 hover:bg-white/10 px-4 rounded-lg">Home</Link>
            <Link to="/movielistpage" className="block py-2 hover:bg-white/10 px-4 rounded-lg">Movies</Link>
            <Link to="/moviedetailpage" className="block py-2 hover:bg-white/10 px-4 rounded-lg">Movie Details</Link>
            <Link to="/bookingpage" className="block py-2 hover:bg-white/10 px-4 rounded-lg">Booking</Link>
            <Link to="/userprofilepage" className="block py-2 hover:bg-white/10 px-4 rounded-lg">Profile</Link>
            <Link to="/loginpage" className="block py-2 hover:bg-white/10 px-4 rounded-lg">Login</Link>
            <Link to="/registerpage" className="block py-2 hover:bg-white/10 px-4 rounded-lg">Register</Link>
            <form onSubmit={handleSearch} className="flex items-center px-4">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search movies..."
                className="flex-1 px-4 py-2 rounded-l-lg bg-white/10 border border-white/20 focus:outline-none focus:border-blue-400"
              />
              <button type="submit" className="px-4 py-2 bg-blue-600 rounded-r-lg hover:bg-blue-700">
                Search
              </button>
            </form>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;