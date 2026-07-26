import { useState } from 'react';
import Navbar from './Navbar';
import RequestDemoModal from '../RequestDemoModal';

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
  heroFor?: 'myself' | 'organisation';
  showImageOnMobile?: boolean;
}

export default function HeroSection({
  bgColor = '#0e2948',
  heading,
  title = 'Welcome to Stretch Matters',
  description = 'Your journey to better health and flexibility starts here. Join thousands of users improving their wellness routine.',
  buttonText = 'Get Started',
  buttonLink = '#',
  imageUrl ,
  imageAlt = 'Hero Image',
  showNavbar = true,
  navbarBgColor = 'transparent',
  navbarTextColor = '#ffffff',
  stickyNavbarBgColor = '#ffffff',
  stickyNavbarTextColor = '#0c2746',
  backgroundImage,
  heroFor,
  showImageOnMobile = false
}: HeroSectionProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const isModalLink = buttonLink === '/request-demo';

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
      <div className="w-full mx-auto px-4 md:px-16 lg:px-30 py-8 md:py-16 lg:py-28 h-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {/* Image (shown on mobile if enabled, on desktop always) */}
          {showImageOnMobile && (
            <div className="md:hidden flex justify-center items-center order-first">
              <div className="relative w-full">
                <img
                  src={imageUrl}
                  alt={imageAlt}
                  className="w-full h-auto max-w-full object-cover"
                />
              </div>
            </div>
          )}

          {/* Left Side - Content */}
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <div className="mb-4 leading-tight">
              <h3 className="text-lg md:text-2xl font-semibold text-[#1100DB]">{heading}</h3>
              <div
                className="pt-4"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </div>
            <div className="text-base md:text-lg lg:text-xl mb-8 leading-relaxed max-w-md">
              <div
                className="pt-4"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
            {buttonText && (
              <div className="flex flex-col sm:flex-row gap-4">
                {isModalLink ? (
                  <button
                    onClick={() => setModalOpen(true)}
                    className="px-6 py-3 md:px-8 md:py-3 bg-blue-600 text-white rounded-lg font-semibold transition-all hover:bg-blue-700 hover:shadow-lg text-center cursor-pointer"
                  >
                    {buttonText}
                  </button>
                ) : (
                  <a
                    href={buttonLink}
                    className="px-6 py-3 md:px-8 md:py-3 bg-blue-600 text-white rounded-lg font-semibold transition-all hover:bg-blue-700 hover:shadow-lg text-center"
                  >
                    {buttonText}
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Right Side - Image (Desktop only) */}
          <div className="hidden md:flex justify-center items-center">
            <div className="relative w-full">
              <img
                src={imageUrl}
                alt={imageAlt}
                className="w-full h-auto max-w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <RequestDemoModal isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultForWhom={heroFor} />
    </section>
  );
}
