import { motion } from 'framer-motion';
import { Star, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const topRestaurants = [
  {
    id: '1',
    name: 'La Piazza Bella',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80',
    cuisine: 'Italian',
    rating: 4.8,
    featured: true
  },
  {
    id: '2',
    name: 'Sushi Master',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80',
    cuisine: 'Japanese',
    rating: 4.9,
    featured: true
  },
  {
    id: '3',
    name: 'Spice Route',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    cuisine: 'Indian',
    rating: 4.7,
    featured: true
  }
];

export function TopRestaurants() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Top-Rated Restaurants</h2>
            <p className="text-gray-600">Discover our most loved dining destinations</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topRestaurants.map((restaurant, index) => (
            <motion.div
              key={restaurant.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link to={`/restaurant/${restaurant.id}`}>
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute top-4 right-4">
                    <Award className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <h3 className="text-xl font-semibold text-white mb-1">{restaurant.name}</h3>
                    <p className="text-gray-200 mb-2">{restaurant.cuisine}</p>
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="ml-1 text-white">{restaurant.rating}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}