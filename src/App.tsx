import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { NearbyPage } from './pages/NearbyPage';
import { RestaurantPage } from './pages/RestaurantPage';
import { FoodPage } from './pages/FoodPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* <Header /> */}
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nearby" element={<NearbyPage />} />
            <Route path="/restaurant/:id" element={<RestaurantPage />} />
            <Route path="/food/:id" element={<FoodPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}