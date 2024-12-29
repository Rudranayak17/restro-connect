import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MapPin, Search, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto">
        {/* Combined Navbar and Header */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between px-6 py-3"
        >
          <div className="flex justify-between items-center w-full">
            {/* Brand Logo and Menu Icon */}
            <Link to="/" className="flex items-center space-x-2">
              
              <span className="font-bold text-xl">RestroConnect</span>
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button 
              className="lg:hidden text-gray-700" 
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex space-x-6">
              <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors">Home</Link>
              <Link to="/nearby" className="text-gray-700 hover:text-purple-600 transition-colors">Restaurants</Link>
              <Link to="/cuisine" className="text-gray-700 hover:text-purple-600 transition-colors">Cuisines</Link>
              <Link to="/offers" className="text-gray-700 hover:text-purple-600 transition-colors">Special Offers</Link>
            </div>

            {/* Search Bar */}
            <div className="relative hidden lg:block">
              <input
                type="text"
                placeholder="Search restaurants or dishes..."
                className="pl-10 pr-4 py-1.5 rounded-full border border-gray-300 focus:outline-none focus:border-purple-500 w-64"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>
        </motion.div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} px-6 py-4 bg-white border-t`}
        >
          <div className="space-y-4">
            <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors block">Home</Link>
            <Link to="/nearby" className="text-gray-700 hover:text-purple-600 transition-colors block">Restaurants</Link>
            <Link to="/cuisine" className="text-gray-700 hover:text-purple-600 transition-colors block">Cuisines</Link>
            <Link to="/offers" className="text-gray-700 hover:text-purple-600 transition-colors block">Special Offers</Link>
            <Link to="/nearby" className="flex items-center space-x-1 text-gray-600 hover:text-purple-600">
              <MapPin className="w-5 h-5" />
              <span>Nearby</span>
            </Link>
         
          </div>
        </div>
      </div>
    </header>
  );
}
