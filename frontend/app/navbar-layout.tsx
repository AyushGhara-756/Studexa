'use client';

import { ReactNode, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import Navbar from '@/components/custom/Navbar';
import { Menu, X } from 'lucide-react';

export function NavbarLayout({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  // Check if navbar should be displayed
  const showNavbar = isAuthenticated && !['/signin', '/signup', '/home', '/'].includes(pathname);

  return (
    <div className={`flex min-h-screen ${showNavbar ? 'pl-56' : ''}`}>
      {/* Sidebar - Always visible on desktop when authenticated, toggleable on mobile */}
      {showNavbar && (
        <>
          <div className="hidden lg:block fixed left-0 top-0 h-screen w-56">
            <Navbar />
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className={`lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200 ${isSidebarOpen ? 'block' : 'block'}`}
            aria-label="Toggle sidebar"
          >
            {isSidebarOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Mobile Sidebar */}
          {isSidebarOpen && (
            <>
              <div
                onClick={() => setIsSidebarOpen(false)}
                className="fixed inset-0 z-30 bg-black/50 lg:hidden"
              />
              <div className="fixed left-0 top-0 z-40 h-screen w-56 lg:hidden">
                <Navbar />
              </div>
            </>
          )}
        </>
      )}

      {/* Main Content */}
      <main className="flex flex-1 flex-col w-full">
        {children}
      </main>
    </div>
  );
}
