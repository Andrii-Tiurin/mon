# MonoTours Website Documentation

## Overview
MonoTours is a modern travel agency website built with React, TypeScript, and Tailwind CSS. The website offers various travel packages, destinations, and booking capabilities.

## Tech Stack
- React 18.3.1
- TypeScript
- Tailwind CSS
- React Router DOM
- Framer Motion
- Lucide React (for icons)
- Date-fns

## Project Structure

```
src/
├── components/
│   ├── packages/
│   │   ├── BookingModal.tsx
│   │   ├── PackageCard.tsx
│   │   └── PackageFilters.tsx
│   ├── Footer.tsx
│   ├── FeaturedDestinations.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   └── SearchBar.tsx
├── layouts/
│   └── MainLayout.tsx
├── pages/
│   ├── BlogPage.tsx
│   ├── ContactPage.tsx
│   ├── DestinationsPage.tsx
│   ├── HomePage.tsx
│   ├── LoginPage.tsx
│   └── PackagesPage.tsx
├── types/
│   └── index.ts
├── App.tsx
└── main.tsx
```

## Key Features

### 1. Routing
The application uses React Router for navigation with the following routes:
- `/` - Home page
- `/destinations` - Available destinations
- `/packages` - Travel packages
- `/blog` - Travel blog
- `/contact` - Contact information
- `/login` - Authentication page

### 2. Components

#### MainLayout
- Serves as the main wrapper component
- Includes Navbar and Footer
- Handles page transitions

#### Navbar
- Responsive navigation menu
- Language switcher
- Authentication link
- Mobile-friendly hamburger menu

#### SearchBar
Features:
- Destination input
- Date range picker
- Guest count selector
- Search functionality

#### Package Related Components
- `PackageCard`: Displays individual travel package information
- `PackageFilters`: Filtering and sorting options
- `BookingModal`: Handles package booking process

### 3. Data Types

```typescript
// Key interfaces
interface Destination {
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

interface Package {
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
```

### 4. Pages

#### HomePage
- Hero section with search functionality
- Featured destinations
- Promotional content

#### DestinationsPage
- Grid layout of available destinations
- Filtering by category
- Price and rating display

#### PackagesPage
Features:
- Package filtering
- Sorting options
- Price range filter
- Booking functionality

#### BlogPage
- Travel blog posts
- Categories
- Author information
- Publication dates

#### ContactPage
- Contact form
- Office locations
- Contact information
- Map integration

#### LoginPage
- User authentication
- Registration form
- Password recovery

## Styling
- Tailwind CSS for responsive design
- Custom color scheme
- Consistent typography
- Responsive breakpoints

## Animations
Using Framer Motion for:
- Page transitions
- Component mounting
- Modal animations
- Hover effects

## Best Practices

### Performance
- Lazy loading of images
- Code splitting by route
- Optimized bundle size
- Efficient state management

### Accessibility
- ARIA labels
- Keyboard navigation
- Color contrast compliance
- Screen reader support

### SEO
- Meta tags
- Semantic HTML
- Structured data
- Clean URLs

## Development Guidelines

### Code Style
- Consistent naming conventions
- Component modularity
- TypeScript strict mode
- ESLint configuration

### State Management
- React hooks for local state
- Props for component communication
- Context for global state when needed

### Testing
- Component testing
- Integration testing
- E2E testing recommendations

## Deployment
- Build optimization
- Environment variables
- Performance monitoring
- Error tracking

## Future Enhancements
1. User authentication system
2. Payment gateway integration
3. Multi-language support
4. Review system
5. Personal travel dashboard
6. Booking management system

## Maintenance
- Regular dependency updates
- Performance monitoring
- Security patches
- Backup procedures