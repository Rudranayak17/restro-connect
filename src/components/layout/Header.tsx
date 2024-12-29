import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MapPin, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../../utils/constants';

export function Header() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto">
        {/* Top bar */}
    

        {/* Navigation Links */}
        <nav className="px-6 py-3">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between"
          >
            <div className="flex space-x-6">
              <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors">Home</Link>
              <Link to="/nearby" className="text-gray-700 hover:text-purple-600 transition-colors">Restaurants</Link>
              <Link to="/cuisine" className="text-gray-700 hover:text-purple-600 transition-colors">Cuisines</Link>
              <Link to="/offers" className="text-gray-700 hover:text-purple-600 transition-colors">Special Offers</Link>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search restaurants or dishes..."
                className="pl-10 pr-4 py-1.5 rounded-full border border-gray-300 focus:outline-none focus:border-purple-500 w-64"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
          </motion.div>
        </nav>
      </div>
    </header>
  );
}