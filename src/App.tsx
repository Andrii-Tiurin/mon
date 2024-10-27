import React, { Suspense } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';
import AdminLoginPage from './pages/admin/AdminLoginPage';
import Dashboard from './pages/admin/Dashboard';
import AdminDestinationsPage from './pages/admin/destinations/DestinationsPage';
import AdminContentPage from './pages/admin/content/ContentPage';
import AdminUsersPage from './pages/admin/users/UsersPage';
import AdminSettingsPage from './pages/admin/settings/SettingsPage';
import HomePage from './pages/HomePage';
import DestinationsPage from './pages/DestinationsPage';
import LoginPage from './pages/LoginPage';
import PackagesPage from './pages/PackagesPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Handle browser back/forward buttons
  React.useEffect(() => {
    const handlePopState = () => {
      navigate(location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [navigate, location]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="destinations" element={<DestinationsPage />} />
          <Route path="packages" element={<PackagesPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="destinations" element={<AdminDestinationsPage />} />
          <Route path="content" element={<AdminContentPage />} />
          <Route path="users" element={<AdminUsersPage />} />
          <Route path="settings" element={<AdminSettingsPage />} />
        </Route>

        {/* 404 Route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;