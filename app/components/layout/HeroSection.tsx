'use client';

import Navbar from './Navbar';

interface HeroSectionProps {
  bgColor?: string;
  heading?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  imageUrl?: string;
  imageAlt?: string;
  showNavbar?: boolean;
  navbarBgColor?: string;
  navbarTextColor?: string;
  stickyNavbarBgColor?: string;
  stickyNavbarTextColor?: string;
  backgroundImage?: string;
}

export default function HeroSection({
  bgColor = '#0e2948',
  heading,
  title = 'Welcome to Stretch Matters',
  description = 'Your journey to better health and flexibility starts here. Join thousands of users improving their wellness routine.',
  buttonText = 'Get Started',
  buttonLink = '#',
  imageUrl = 'https://aaptiv.com/wp-content/uploads/2025/05/Header-Asset-2048x1188.png',
  imageAlt = 'Hero Image',
  showNavbar = true,
  navbarBgColor = 'transparent',
  navbarTextColor = '#ffffff',
  stickyNavbarBgColor = '#ffffff',
  stickyNavbarTextColor = '#0c2746',
  backgroundImage = 'https://aaptiv.com/wp-content/uploads/2024/05/aaptiv-pattern-bg.png',
}: HeroSectionProps) {
  return (
    <section className="w-full" style={{ backgroundColor: bgColor, backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'scroll', backgroundRepeat: 'no-repeat' }}>
      {/* Navbar */}
      {showNavbar && (
        <Navbar
          bgColor={navbarBgColor}
          textColor={navbarTextColor}
          stickyNavbarBgColor={stickyNavbarBgColor}
          stickyNavbarTextColor={stickyNavbarTextColor}
          showNavbar={showNavbar}
        />
      )}
      <div className="w-full mx-auto px-30 py-16 md:py-28 h-150">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4 items-center">
          {/* Left Side - Content */}
          <div className="flex flex-col justify-center min-w-md">
            <div className="mb-4 leading-tight">
              <h3 className="text-2xl font-semibold text-[#1100DB]">{heading}</h3>
              <div
                className="pt-4"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </div>
            <div className="text-lg md:text-xl mb-8 leading-relaxed max-w-md">
              <div
                className="pt-4"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
            {buttonText && (
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={buttonLink}
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold transition-all hover:bg-blue-700 hover:shadow-lg text-center"
                >
                  {buttonText}
                </a>
              </div>
            )}
          </div>


          {/* Right Side - Image (Hidden on Mobile) */}
          <div className="hidden md:flex justify-center items-center">
            <div className="relative w-full">
              <img
                src={imageUrl}
                alt={imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Optional Wave or Accent Shape */}
      {/* <div className="w-full h-16 md:h-24 bg-gradient-to-b from-transparent to-white"></div> */}
    </section>
  );
}
