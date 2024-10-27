import React from 'react';
import { Outlet, Navigate, Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Map, 
  Compass, 
  FileText, 
  MessageSquare, 
  Settings, 
  Users,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext';

const AdminLayout = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  if (!user || !user.isAdmin) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Destinations', href: '/admin/destinations', icon: Map },
    { name: 'Tours', href: '/admin/tours', icon: Compass },
    { name: 'Blog', href: '/admin/blog', icon: FileText },
    { name: 'Messages', href: '/admin/messages', icon: MessageSquare },
    { name: 'Users', href: '/admin/users', icon: Users },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ];

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
        >
          {isSidebarOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: isSidebarOpen ? 0 : -300 }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg lg:translate-x-0 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:static lg:translate-x-0`}
      >
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-center h-16 px-4 border-b">
            <Link to="/admin" className="text-xl font-bold text-blue-600">
              MonoTours Admin
            </Link>
          </div>

          <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          <div className="p-4 border-t">
            <button
              onClick={logout}
              className="flex items-center w-full px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-50"
            >
              <LogOut className="w-5 h-5 mr-3" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="lg:pl-64">
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;