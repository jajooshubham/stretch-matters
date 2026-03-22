'use client';

import { useState } from 'react';

interface HeaderProps {
  bgColor?: string;
  textColor?: string;
  logoImage?: string;
  buttonBackground?: string;
  buttonColor?: string;
}

export default function Header({
  bgColor = 'transparent',
  textColor = '#ffffff',
  logoImage = 'https://aaptiv.com/wp-content/uploads/2023/01/Aaptiv-Logo-White.png',
  buttonBackground,
  buttonColor
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className="transition-all duration-300 w-full"
      style={{ backgroundColor: bgColor }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left - Logo */}
        <div className="flex items-center">
          <img
            src={logoImage}
            alt="Logo"
            className="h-12"
          />
        </div>

        {/* Right Side - Login and Request Demo (Desktop) */}
        <div className="hidden md:flex items-center gap-12">
          <a
            href="#"
            style={{ color: textColor }}
            className="font-medium transition-colors hover:opacity-80"
          >
            Login
          </a>
          <a
            href="#"
            style={{ color: textColor }}
            className="font-medium transition-colors hover:opacity-80"
          >
            Find Stretch
          </a>
          <a href='#' className="px-6 py-3 rounded-full transition-all tracking-wide" style={{ backgroundColor: buttonBackground, color: buttonColor }} >
            Request a Demo
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2"
          style={{ color: textColor }}
        >
          {isMobileMenuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu - Top Header */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden px-4 py-4 border-t"
          style={{
            borderColor: textColor + '33',
            backgroundColor: bgColor,
          }}
        >
          <nav className="flex flex-col gap-4">
            <a
              href="#"
              style={{ color: textColor }}
              className="font-medium transition-colors hover:opacity-80 py-2"
            >
              Find Stretch
            </a>
            <a
              href="#"
              style={{ color: textColor }}
              className="font-medium transition-colors hover:opacity-80 py-2"
            >
              Login
            </a>
            <button className="w-full px-6 py-3 rounded-lg tracking-wide" style={{ backgroundColor: buttonBackground, color: buttonColor }}>
              Request a Demo
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
