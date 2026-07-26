import { useState } from 'react';
import { navItems } from '../../utils/menu';
import LogoWhite from '../../../app/assets/logo/StretchLogoWhite.png';
import Logo from '../../../app/assets/logo/StretchLogo.png';

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
  logoImage = LogoWhite,
  buttonBackground,
  buttonColor
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState<number | null>(null);

  const toggleSubmenu = (index: number) => {
    setOpenSubmenuIndex(openSubmenuIndex === index ? null : index);
  };

  return (
    <>
      <header
        className="transition-all duration-300 w-full"
        style={{ backgroundColor: bgColor }}
      >
        <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
          {/* Left - Logo */}
          <div className="flex items-center">
            <a href="/">
              <img
                src={logoImage}
                alt="Logo"
                className="h-8 md:h-12"
              />
            </a>
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
            <a href='/request-demo' className="px-6 py-3 rounded-full transition-all tracking-wide" style={{ backgroundColor: buttonBackground, color: buttonColor }} >
              Request a Demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2"
            style={{ color: textColor }}
          >
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
          </button>
        </div>
      </header>

      {/* Mobile Side Drawer Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[60] md:hidden transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Side Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-[70] md:hidden transform transition-transform duration-300 ease-in-out overflow-y-auto ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <img
            src={Logo}
            alt="Logo"
            className="h-8"
          />
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-gray-600"
          >
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
          </button>
        </div>

        {/* Nav Items with Expandable Submenus */}
        <nav className="p-4">
          {navItems.map((item, index) => (
            <div key={item.label} className="border-b border-gray-100">
              <button
                className="flex items-center justify-between w-full py-4 text-left text-[#0c2746] font-semibold text-base"
                onClick={() => toggleSubmenu(index)}
              >
                {item.label}
                {item.submenu && (
                  <svg
                    className={`h-4 w-4 transition-transform duration-300 ${openSubmenuIndex === index ? 'rotate-180' : ''
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </button>

              {/* Submenu */}
              {item.submenu && (
                <div
                  className={`overflow-hidden transition-all duration-300 ${openSubmenuIndex === index ? 'max-h-60 pb-2' : 'max-h-0'
                    }`}
                >
                  {item.submenu.map((subitem) => (
                    <a
                      key={subitem.label}
                      href={subitem.href}
                      className="block py-2.5 pl-4 text-gray-600 hover:text-[#1100DB] transition-colors text-sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {subitem.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Bottom Actions */}
        <div className="p-4 mt-2 space-y-3 border-t border-gray-100">
          <a
            href="#"
            className="block py-3 text-center text-[#0c2746] font-medium hover:opacity-80 transition-colors"
          >
            Login
          </a>
          <a
            href="#"
            className="block py-3 text-center text-[#0c2746] font-medium hover:opacity-80 transition-colors"
          >
            Find Stretch
          </a>
          <a
            href="/request-demo"
            className="block w-full py-3 rounded-full text-center font-medium tracking-wide transition-all"
            style={{ backgroundColor: buttonBackground || '#1100DB', color: buttonColor || '#ffffff' }}
          >
            Request a Demo
          </a>
        </div>
      </div>
    </>
  );
}
