import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import { RestaurantCard } from '../components/restaurants/RestaurantCard';

const MOCK_RESTAURANTS = [
  {
    id: '1',
    name: 'La Piazza',
    cuisine: 'Italian',
    priceRange: '€€' as const,
    rating: 4.5,
    address: '123 Main St',
    distance: 0.5,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=60',
    openingHours: '11:00 - 23:00',
    contact: {
      phone: '+1234567890',
      email: 'info@lapiazza.com'
    }
  },
  {
    id: '2',
    name: 'Sushi Master',
    cuisine: 'Japanese',
    priceRange: '€€€' as const,
    rating: 4.8,
    address: '456 Oak St',
    distance: 1.2,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=60',
    openingHours: '12:00 - 22:00',
    contact: {
      phone: '+1234567891',
      email: 'info@sushimaster.com'
    }
  }
];

export function NearbyPage() {
  const [filters, setFilters] = useState({
    cuisine: '',
    priceRange: '',
    rating: 0
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Nearby Restaurants</h1>
        <button className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
          <Filter className="w-5 h-5" />
          <span>Filters</span>
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {MOCK_RESTAURANTS.map(restaurant => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </motion.div>
    </div>
  );
}