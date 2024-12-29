import { motion } from 'framer-motion';
import { Image as ImageIcon, Play } from 'lucide-react';

interface GalleryItem {
  type: 'image' | 'video';
  url: string;
  thumbnail: string;
  title: string;
}

interface RestaurantGalleryProps {
  items: GalleryItem[];
}

export function RestaurantGallery({ items }: RestaurantGalleryProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="relative rounded-lg overflow-hidden cursor-pointer group"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              {item.type === 'video' ? (
                <Play className="w-12 h-12 text-white" />
              ) : (
                <ImageIcon className="w-8 h-8 text-white" />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}