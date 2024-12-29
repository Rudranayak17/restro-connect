import { motion } from 'framer-motion';
import { Calendar, Music, Users } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  date: string;
  type: 'music' | 'special' | 'private';
  description: string;
}

interface RestaurantEventsProps {
  events: Event[];
}

export function RestaurantEvents({ events }: RestaurantEventsProps) {
  const getEventIcon = (type: Event['type']) => {
    switch (type) {
      case 'music':
        return <Music className="w-5 h-5" />;
      case 'private':
        return <Users className="w-5 h-5" />;
      default:
        return <Calendar className="w-5 h-5" />;
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
      <div className="space-y-4">
        {events.map((event) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-start space-x-4 p-4 rounded-lg border border-gray-100 hover:border-purple-100 transition-colors"
          >
            <div className="p-2 bg-purple-50 rounded-lg">
              {getEventIcon(event.type)}
            </div>
            <div>
              <h3 className="font-semibold text-lg">{event.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{event.date}</p>
              <p className="text-gray-700">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}