# Components Documentation

## Shared Components

### Navbar
```typescript
// Navigation component with responsive design
interface NavbarProps {
  // No props required
}
```
Features:
- Responsive mobile menu
- Language switcher
- User authentication link
- Dynamic navigation links

### Footer
```typescript
// Footer component with multiple sections
interface FooterProps {
  // No props required
}
```
Sections:
- Company information
- Quick links
- Services
- Contact details

### SearchBar
```typescript
interface SearchBarProps {
  onSearch: (params: SearchParams) => void;
}
```
Features:
- Destination search
- Date selection
- Guest count
- Search submission

## Package Components

### PackageCard
```typescript
interface PackageCardProps {
  pkg: Package;
  onBookNow: (pkg: Package) => void;
}
```
Displays:
- Package image
- Title and location
- Price and rating
- Amenities
- Booking button

### PackageFilters
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
Features:
- Category selection
- Price sorting
- Rating sorting
- Price range filter

### BookingModal
```typescript
interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  package: Package;
}
```
Steps:
1. Date and guest selection
2. Personal information
3. Payment initiation

## Page Components

### HomePage
Main sections:
- Hero with search
- Featured destinations
- Special offers

### DestinationsPage
Features:
- Destination grid
- Category filters
- Search functionality

### PackagesPage
Features:
- Package listing
- Advanced filters
- Booking integration

### BlogPage
Features:
- Blog post grid
- Category filtering
- Author information

### ContactPage
Features:
- Contact form
- Office locations
- Contact information

### LoginPage
Features:
- Login form
- Registration option
- Password recovery