'use client';

import { useEffect, useState } from 'react';
import { navItems } from "../../utils/menu"

interface NavbarProps {
  bgColor?: string;
  textColor?: string;
  stickyNavbarBgColor?: string;
  stickyNavbarTextColor?: string;
  showNavbar?: boolean;
  logoImage?: string
}

export default function Navbar({
  bgColor = '#0e2948',
  textColor = '#ffffff',
  stickyNavbarBgColor = '#ffffff',
  stickyNavbarTextColor = '#1f2937',
  showNavbar = true,
  logoImage = 'https://aaptiv.com/wp-content/uploads/2023/01/Aaptiv-Logo-Navy.png'
}: NavbarProps) {
  const [isSticky, setIsSticky] = useState(false);

  // Handle scroll to make navbar sticky
  useEffect(() => {
    const handleScroll = () => {
      const isScrolling = window.scrollY > 100;
      setIsSticky(isScrolling);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!showNavbar) return null;

  return (
    <nav
      className={`transition-all duration-300 ${
        isSticky ? 'fixed top-0 left-0 right-0 z-50 shadow-lg' : 'relative w-full'
      }`}
      style={{
        backgroundColor: isSticky ? stickyNavbarBgColor : bgColor,
        color: isSticky ? stickyNavbarTextColor : textColor,
      }}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo Left (Visible on Scroll) - Navy Logo */}
        {isSticky && (
          <div className="flex items-center">
            <img
              src={logoImage}
              alt="Logo"
              className="h-8"
            />
          </div>
        )}

        {/* Center - Navigation Items (Desktop) */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
          {/* Empty - Navigation moved to right */}
        </div>

        {/* Right - Navigation Items with Dropdowns (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              <button
                style={{
                  color: isSticky ? stickyNavbarTextColor : textColor,
                }}
                className="flex items-center gap-2 font-medium transition-colors hover:opacity-80 py-2"
              >
                {item.label}
                {item.submenu && (
                  <svg
                    className="h-4 w-4 transition-transform group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                )}
              </button>

              {/* Desktop Dropdown */}
              {item.submenu && (
                <div className="absolute right-0 mt-0 w-56 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {item.submenu.map((subitem) => (
                    <a
                      key={subitem.label}
                      href={subitem.href}
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg transition-colors"
                    >
                      {subitem.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </nav>
  );
}
