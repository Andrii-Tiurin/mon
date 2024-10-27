# API Documentation

## Types

### Core Types

```typescript
export interface SearchParams {
  destination: string;
  checkIn: Date | null;
  checkOut: Date | null;
  guests: number;
  type?: 'hotel' | 'flight' | 'package' | 'car';
}

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
```

## Component Props

### SearchBar Props
```typescript
interface SearchBarProps {
  onSearch: (params: SearchParams) => void;
}
```

### PackageCard Props
```typescript
interface PackageCardProps {
  pkg: Package;
  onBookNow: (pkg: Package) => void;
}
```

### BookingModal Props
```typescript
interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  package: Package;
}
```

### PackageFilters Props
```typescript
interface PackageFiltersProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  sortBy: 'price' | 'rating';
  setSortBy: (sort: 'price' | 'rating') => void;
  sortOrder: 'asc' | 'desc';
  setSortOrder: (order: 'asc' | 'desc') => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
}
```

## State Management

### Package State
```typescript
const [selectedCategory, setSelectedCategory] = useState<string>('all');
const [sortBy, setSortBy] = useState<'price' | 'rating'>('price');
const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000]);
```

### Booking State
```typescript
const [formData, setFormData] = useState<BookingFormData>({
  startDate: '',
  guests: 1,
  name: '',
  email: '',
  phone: ''
});
```

### Authentication State
```typescript
const [isLogin, setIsLogin] = useState(true);
const [formData, setFormData] = useState({
  email: '',
  password: '',
  name: ''
});
```

## Event Handlers

### Search Handler
```typescript
const handleSearch = (params: SearchParams) => {
  // Implementation for search functionality
};
```

### Booking Handler
```typescript
const handleBookNow = (pkg: Package) => {
  // Implementation for booking process
};
```

### Form Submission
```typescript
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // Form submission logic
};
```

## Utilities

### Price Formatting
```typescript
const formatPrice = (price: number, currency: string = '₴') => {
  return `${price.toLocaleString()} ${currency}`;
};
```

### Date Formatting
```typescript
const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('uk-UA');
};
```

### Rating Display
```typescript
const displayRating = (rating: number) => {
  return rating.toFixed(1);
};
```