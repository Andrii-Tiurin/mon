```markdown
# MonoTours Site Structure Documentation

## Project Structure Overview

```
monotours/
├── src/
│   ├── components/
│   │   ├── admin/
│   │   │   ├── content/
│   │   │   │   ├── ContentEditor.tsx
│   │   │   │   ├── ContentList.tsx
│   │   │   │   └── ContentPreview.tsx
│   │   │   ├── navigation/
│   │   │   │   └── NavigationManager.tsx
│   │   │   ├── users/
│   │   │   │   ├── UserForm.tsx
│   │   │   │   ├── UserList.tsx
│   │   │   │   └── UserActivityLog.tsx
│   │   │   ├── AdminStats.tsx
│   │   │   ├── AdminAlerts.tsx
│   │   │   ├── AdminActivity.tsx
│   │   │   ├── AdminQuickActions.tsx
│   │   │   ├── ContentEditor.tsx
│   │   │   └── SEOManager.tsx
│   │   ├── packages/
│   │   │   ├── PackageCard.tsx
│   │   │   ├── PackageFilters.tsx
│   │   │   └── BookingModal.tsx
│   │   ├── ui/
│   │   │   └── Tabs.tsx
│   │   ├── Footer.tsx
│   │   ├── FeaturedDestinations.tsx
│   │   ├── Hero.tsx
│   │   ├── HotTours.tsx
│   │   ├── Navbar.tsx
│   │   └── SearchBar.tsx
│   ├── contexts/
│   │   ├── AuthContext.tsx
│   │   ├── LanguageContext.tsx
│   │   └── UserContext.tsx
│   ├── layouts/
│   │   ├── MainLayout.tsx
│   │   └── AdminLayout.tsx
│   ├── pages/
│   │   ├── admin/
│   │   │   ├── content/
│   │   │   │   └── ContentPage.tsx
│   │   │   ├── destinations/
│   │   │   │   └── DestinationsPage.tsx
│   │   │   ├── settings/
│   │   │   │   └── SettingsPage.tsx
│   │   │   ├── users/
│   │   │   │   └── UsersPage.tsx
│   │   │   ├── AdminLoginPage.tsx
│   │   │   └── Dashboard.tsx
│   │   ├── AboutPage.tsx
│   │   ├── BlogPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── DestinationsPage.tsx
│   │   ├── HomePage.tsx
│   │   ├── LoginPage.tsx
│   │   ├── NotFoundPage.tsx
│   │   └── PackagesPage.tsx
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── public/
│   └── vite.svg
├── docs/
│   ├── API.md
│   ├── COMPONENTS.md
│   ├── DEPLOYMENT.md
│   └── README.md
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Key Directories and Files

### `/src` - Source Code
Main application source code directory containing all React components, contexts, and pages.

#### `/components`
Reusable UI components organized by feature:
- `/admin` - Admin panel components
- `/packages` - Tour package related components
- `/ui` - Generic UI components
- Root level components (Footer, Navbar, etc.)

#### `/contexts`
React Context providers:
- `AuthContext.tsx` - Authentication state management
- `LanguageContext.tsx` - Internationalization
- `UserContext.tsx` - User state management

#### `/layouts`
Page layout components:
- `MainLayout.tsx` - Public site layout
- `AdminLayout.tsx` - Admin panel layout

#### `/pages`
Page components organized by route:
- `/admin` - Admin panel pages
- Root level pages (Home, About, etc.)

#### `/types`
TypeScript type definitions and interfaces

### `/docs` - Documentation
Project documentation files:
- `API.md` - API documentation
- `COMPONENTS.md` - Component documentation
- `DEPLOYMENT.md` - Deployment instructions
- `README.md` - Project overview

### Configuration Files
- `package.json` - Project dependencies and scripts
- `vite.config.ts` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration

## Component Organization

### Public Components
- `Navbar.tsx` - Main navigation
- `Footer.tsx` - Site footer
- `Hero.tsx` - Homepage hero section
- `SearchBar.tsx` - Global search component
- `FeaturedDestinations.tsx` - Featured tours section
- `HotTours.tsx` - Hot deals section

### Admin Components
- `AdminLayout.tsx` - Admin panel layout
- `Dashboard.tsx` - Admin dashboard
- `ContentEditor.tsx` - Content management
- `UserManager.tsx` - User management
- `SEOManager.tsx` - SEO settings

### Package Components
- `PackageCard.tsx` - Tour package display
- `PackageFilters.tsx` - Package filtering
- `BookingModal.tsx` - Booking interface

## Routing Structure

### Public Routes
- `/` - Homepage
- `/destinations` - Destinations listing
- `/packages` - Tour packages
- `/blog` - Blog posts
- `/contact` - Contact information
- `/about` - About page
- `/login` - User login

### Admin Routes
- `/admin` - Admin dashboard
- `/admin/destinations` - Destination management
- `/admin/content` - Content management
- `/admin/users` - User management
- `/admin/settings` - Site settings

## State Management

### Context Providers
- `AuthProvider` - Authentication state
- `LanguageProvider` - Language/translations
- `UserProvider` - User data and preferences

## Styling

The project uses Tailwind CSS for styling with:
- Custom components in `/components/ui`
- Responsive design patterns
- Consistent color scheme and typography
- Dark/light mode support

## Build and Development

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Deployment

The site is configured for deployment on Netlify with:
- Automatic builds from main branch
- Environment variable management
- Custom domain support
- SSL/TLS encryption

See `DEPLOYMENT.md` for detailed deployment instructions.
```