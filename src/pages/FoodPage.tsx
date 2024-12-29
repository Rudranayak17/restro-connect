import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ShoppingBag } from 'lucide-react';
import { FoodCustomization } from '../components/food/FoodCustomization';
import { FoodExtras } from '../components/food/FoodExtras';
import { QuantitySelector } from '../components/food/QuantitySelector';

export function FoodPage() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState({
    spiceLevel: 'medium',
    extras: []
  });

  // Mock data - In a real app, fetch this based on the ID
  const dish = {
    name: 'Truffle Pasta',
    restaurant: 'La Piazza Bella',
    description: 'Fresh pasta tossed in a creamy truffle sauce with wild mushrooms and parmesan',
    price: 24.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1556760544-74068565f05c?auto=format&fit=crop&w=1200&q=80',
    options: {
      spiceLevels: ['mild', 'medium', 'hot'],
      extras: [
        { name: 'Extra Cheese', price: 2 },
        { name: 'Truffle Oil', price: 3 },
        { name: 'Grilled Chicken', price: 4 }
      ]
    }
  };

  const handleQuantityChange = (delta: number) => {
    setQuantity(Math.max(1, quantity + delta));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div className="relative">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-[400px] object-cover rounded-xl"
          />
          <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 font-semibold">{dish.rating}</span>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{dish.name}</h1>
            <p className="text-purple-600 font-semibold">{dish.restaurant}</p>
          </div>

          <p className="text-gray-600">{dish.description}</p>

          <FoodCustomization
            spiceLevels={dish.options.spiceLevels}
            selectedSpiceLevel={selectedOptions.spiceLevel}
            setSelectedOptions={setSelectedOptions}
          />

          <FoodExtras
            extras={dish.options.extras}
            selectedExtras={selectedOptions.extras}
            setSelectedOptions={setSelectedOptions}
          />

          <div className="flex items-center justify-between">
            <QuantitySelector
              quantity={quantity}
              onQuantityChange={handleQuantityChange}
            />
            <div className="text-2xl font-bold">${(dish.price * quantity).toFixed(2)}</div>
          </div>

          <button className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center">
            <ShoppingBag className="w-5 h-5 mr-2" />
            Add to Order
          </button>
        </div>
      </motion.div>
    </div>
  );
}