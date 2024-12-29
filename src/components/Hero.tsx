import { motion } from 'framer-motion';
import { Utensils, QrCode, MapPin } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Discover & Dine
            <span className="text-purple-600"> Seamlessly</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore restaurants, scan QR codes, and enjoy a contactless dining experience
            with our innovative platform.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16"
        >
          {[
            {
              icon: QrCode,
              title: "Scan & Order",
              description: "Access menus and order directly from your table"
            },
            {
              icon: MapPin,
              title: "Find Nearby",
              description: "Discover top-rated restaurants in your area"
            },
            {
              icon: Utensils,
              title: "Book Tables",
              description: "Reserve your spot at your favorite restaurants"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <feature.icon className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-20"
        >
          <div className="relative rounded-2xl overflow-hidden mx-auto max-w-4xl shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=80"
              alt="Restaurant interior"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Featured Restaurants</h3>
                <p className="text-gray-200">Explore our curated selection of top dining spots</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}