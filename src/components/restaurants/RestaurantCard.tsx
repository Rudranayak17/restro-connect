import { motion } from 'framer-motion';
import { Star, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Restaurant } from '../../types/restaurant';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <Link to={`/restaurant/${restaurant.id}`}>
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{restaurant.name}</h3>
          <p className="text-gray-600 text-sm">{restaurant.cuisine}</p>
          
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm">{restaurant.rating}</span>
            </div>
            <span className="text-purple-600">{restaurant.priceRange}</span>
          </div>
          
          <div className="mt-2 flex items-center text-gray-500 text-sm">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{restaurant.distance ? `${restaurant.distance}km away` : restaurant.address}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}