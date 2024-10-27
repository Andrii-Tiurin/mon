export interface Destination {
  id: string;
  name: string;
  country: string;
  description: string;
  imageUrl: string;
  price: number;
  rating: number;
  amenities: string[];
  category: 'beach' | 'mountain' | 'city' | 'countryside';
}

export interface SearchParams {
  destination: string;
  checkIn: Date | null;
  checkOut: Date | null;
  guests: number;
  type?: 'hotel' | 'flight' | 'package' | 'car';
}

export interface Package {
  id: string;
  title: string;
  location: string;
  duration: string;
  groupSize: string;
  price: number;
  rating: number;
  imageUrl: string;
  description: string;
  includes: string[];
  category: 'mountain' | 'city' | 'beach' | 'cultural';
  startDates: string[];
  availability: number;
}

export interface BookingFormData {
  startDate: string;
  guests: number;
  name: string;
  email: string;
  phone: string;
}

export interface Language {
  code: string;
  name: string;
  flag: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  preferences: {
    currency: string;
    language: string;
    notifications: boolean;
  };
  bookings: Booking[];
}

export interface Booking {
  id: string;
  packageId: string;
  startDate: string;
  guests: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  totalPrice: number;
  bookedAt: string;
}