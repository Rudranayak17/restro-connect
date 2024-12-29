export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  priceRange: '€' | '€€' | '€€€';
  rating: number;
  address: string;
  distance?: number;
  image: string;
  openingHours: string;
  contact: {
    phone: string;
    email: string;
  };
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isPopular?: boolean;
  isRecommended?: boolean;
  customizations?: {
    spiceLevels?: string[];
    addOns?: Array<{
      name: string;
      price: number;
    }>;
  };
}