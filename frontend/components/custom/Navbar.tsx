'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { toggleTheme, logout } from '@/store/authSlice';
import {
  Home,
  CheckSquare,
  MapPin,
  Users,
  BarChart3,
  Settings,
  Search,
  Moon,
  Sun,
  LogOut,
  User,
  UploadCloud,
} from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Logo from '@/images/Logo.jpeg';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const theme = useSelector((state: RootState) => state.auth.theme);
  const user = useSelector((state: RootState) => state.auth.user);
  const [searchQuery, setSearchQuery] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Apply theme to document
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  if (!mounted) return null;

  // Don't show navbar on sign in, sign up, or home page for non-authenticated users
  if (!isAuthenticated && ['/signin', '/signup', '/home', '/'].includes(pathname)) {
    return null;
  }

  const menuItems = [
    { href: '/dashboard', label: 'Dashboard', icon: Home },
    { href: '/academic-planner', label: 'Academic Planner', icon: CheckSquare },
    { href: '/progress', label: 'Progress', icon: BarChart3 },
    { href: '/upload-assignment', label: 'Assignment', icon: UploadCloud },
    { href: '/notifications', label: 'Notifications', icon: MapPin },
    { href: '/profile', label: 'Profile', icon: User },
  ];

  const handleLogout = () => {
    dispatch(logout());
    router.push('/signin');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      // Implement search functionality
    }
  };

  // If not authenticated, show simple navbar with login button
  if (!isAuthenticated) {
    return (
      <nav className="fixed top-0 left-0 right-0 bg-white border-b border-slate-200 px-6 py-4 z-40 shadow-sm">
        <div className="flex items-center justify-between">
          <Link href="/home" className="flex items-center gap-2">
            <div className="w-8 h-8 relative">
              <Image
                src={Logo}
                alt="STUDEXA Logo"
                width={32}
                height={32}
                className="rounded"
              />
            </div>
            <span className="text-xl font-bold text-blue-600">STUDEXA</span>
          </Link>

          <button
            onClick={() => router.push('/signin')}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Login
          </button>
        </div>
      </nav>
    );
  }

  return (
    <aside className={`fixed left-0 top-0 h-screen w-56 flex flex-col shadow-lg transition-colors duration-200 ${
      theme === 'dark'
        ? 'bg-gradient-to-b from-slate-800 to-slate-900 text-white'
        : 'bg-gradient-to-b from-blue-600 to-blue-700 text-white'
    }`}>
      {/* Logo */}
      <div className={`flex items-center justify-center gap-2 p-6 border-b ${
        theme === 'dark' ? 'border-slate-700' : 'border-blue-500'
      }`}>
        <div className="w-10 h-10 relative">
          <Image
            src={Logo}
            alt="STUDEXA Logo"
            width={40}
            height={40}
            className="rounded"
          />
        </div>
        <h1 className="text-xl font-bold">STUDEXA</h1>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 overflow-y-auto px-4 py-6">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link href={item.href}>
                  <div
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'bg-white text-blue-600 font-semibold shadow-md'
                        : 'text-blue-100 hover:bg-blue-500/50 hover:text-white'
                    }`}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    <span>{item.label}</span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom Options */}
      <div className={`border-t border-opacity-20 p-4 space-y-2 ${
        theme === 'dark' ? 'border-slate-700' : 'border-blue-500'
      }`}>
        {/* Theme Toggle */}
        <button
          onClick={() => dispatch(toggleTheme())}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
            theme === 'dark'
              ? 'hover:bg-slate-700 text-blue-100 hover:text-white'
              : 'text-blue-100 hover:bg-blue-500/50 hover:text-white'
          }`}
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
          <span className="text-sm">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
        </button>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-red-200 hover:bg-red-500/20 hover:text-red-100`}
        >
          <LogOut className="w-5 h-5" />
          <span className="text-sm">Sign Out</span>
        </button>

        {/* User Profile Footer */}
        <Link href="/profile">
          <div className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
            theme === 'dark'
              ? 'hover:bg-slate-700 text-blue-100 hover:text-white'
              : 'text-blue-100 hover:bg-blue-500/50 hover:text-white'
          }`}>
            <div className="w-8 h-8 rounded-full bg-blue-300 flex items-center justify-center text-blue-700 font-bold text-sm flex-shrink-0">
              {user?.name?.charAt(0) || 'U'}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{user?.name || 'Profile'}</p>
              <p className="text-xs opacity-75 truncate">{user?.email}</p>
            </div>
          </div>
        </Link>
      </div>
    </aside>
  );
}