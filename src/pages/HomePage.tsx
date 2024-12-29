import { Hero } from '../components/Hero';
import { TopRestaurants } from '../components/home/TopRestaurants';
import { RecommendedFood } from '../components/home/RecommendedFood';

export function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <TopRestaurants />
      <RecommendedFood />
    </div>
  );
}