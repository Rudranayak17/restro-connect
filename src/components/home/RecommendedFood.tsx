import { motion } from 'framer-motion';
import { Star, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';

const recommendedDishes = [
  {
    id: '1',
    name: 'Truffle Pasta',
    restaurant: 'La Piazza Bella',
    image: 'https://images.unsplash.com/photo-1556760544-74068565f05c?auto=format&fit=crop&w=800&q=80',
    price: 24.99,
    rating: 4.8
  },
  {
    id: '2',
    name: 'Dragon Roll',
    restaurant: 'Sushi Master',
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80',
    price: 18.99,
    rating: 4.9
  },
  {
    id: '3',
    name: 'Butter Chicken',
    restaurant: 'Spice Route',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
    price: 16.99,
    rating: 4.7
  }
];

export function RecommendedFood() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recommended for You</h2>
            <p className="text-gray-600">Popular dishes loved by our community</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recommendedDishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden group"
            >
              <Link to={`/food/${dish.id}`}>
                <div className="relative h-48">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Flame className="w-6 h-6 text-red-500" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{dish.name}</h3>
                  <p className="text-gray-600 mb-4">{dish.restaurant}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-purple-600 font-semibold">${dish.price}</span>
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="ml-1 text-gray-600">{dish.rating}</span>
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