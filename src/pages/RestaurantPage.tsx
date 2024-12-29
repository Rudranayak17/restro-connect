import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, MapPin, Clock, Phone, Calendar } from 'lucide-react';
import { RestaurantGallery } from '../components/restaurants/RestaurantGallery';
import { RestaurantEvents } from '../components/restaurants/RestaurantEvents';

export function RestaurantPage() {
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [guests, setGuests] = useState(2);

  // Mock data - In a real app, fetch this based on the ID
  const restaurant = {
    name: 'La Piazza Bella',
    cuisine: 'Italian',
    rating: 4.8,
    address: '123 Main St, City',
    hours: '11:00 AM - 10:00 PM',
    phone: '+1 234 567 890',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      {
        type: 'image' as const,
        url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
        thumbnail: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
        title: 'Main Dining Area'
      },
      {
        type: 'video' as const,
        url: '#',
        thumbnail: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=800&q=80',
        title: 'Live Music Night'
      },
      {
        type: 'image' as const,
        url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80',
        thumbnail: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80',
        title: 'Private Dining Room'
      }
    ],
    events: [
      {
        id: '1',
        title: 'Live Jazz Night',
        date: 'Every Friday, 7 PM',
        type: 'music' as const,
        description: 'Enjoy smooth jazz with your dinner'
      },
      {
        id: '2',
        title: 'Wine Tasting Event',
        date: 'March 15, 6 PM',
        type: 'special' as const,
        description: 'Sample our finest Italian wines'
      }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative h-96 rounded-xl overflow-hidden mb-8">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h1 className="text-4xl font-bold mb-2">{restaurant.name}</h1>
              <p className="text-xl mb-4">{restaurant.cuisine}</p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1">{restaurant.rating}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5" />
                  <span className="ml-1">{restaurant.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-2xl font-semibold mb-4">About</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-gray-500 mr-2" />
                  <span>{restaurant.hours}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-gray-500 mr-2" />
                  <span>{restaurant.phone}</span>
                </div>
              </div>
            </div>

            <RestaurantGallery items={restaurant.gallery} />
            <RestaurantEvents events={restaurant.events} />
          </div>

          <div>
            <div className="bg-white rounded-xl p-6 shadow-md sticky top-8">
              <h2 className="text-2xl font-semibold mb-4">Make a Reservation</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Time
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  >
                    <option value="">Select time</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="20:00">8:00 PM</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Guests
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors flex items-center justify-center"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Table
                </button>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}