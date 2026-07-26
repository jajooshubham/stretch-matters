import { useState } from "react";
import Navbar from "./Navbar";
import RequestDemoModal from "../RequestDemoModal";

export function HeroSectionGif({
  bgColor = '#ffffff',
  backgroundImage ,
  color = '#1100DB',
  title,
  description,
  gifUrl ,
  buttonText,
  buttonColor = '#14E25A',
  buttonTextColor = '#000000',
  showNavbar = true,
  navbarBgColor = 'transparent',
  navbarTextColor = '#ffffff',
  stickyNavbarBgColor = '#ffffff',
  stickyNavbarTextColor = '#0c2746',
  buttonLink,
  heroFor
}: {
  bgColor?: string;
  backgroundImage?: string;
  color?: string;
  title: string;
  description: string;
  gifUrl: string;
  buttonText: string;
  buttonColor?: string;
  buttonTextColor?: string;
  buttonLink: string;
  showNavbar?: boolean;
  navbarBgColor?: string;
  navbarTextColor?: string;
  stickyNavbarBgColor?: string;
  stickyNavbarTextColor?: string;
  heroFor?: 'myself' | 'organisation';
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const isModalLink = buttonLink === "/request-demo";

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
      <div className="max-w-5xl mx-auto p-4 md:p-16 lg:p-24">
        <div className="text-center" style={{ color }}>
          <h2 className="text-2xl md:text-4xl lg:text-7xl font-light mb-4 md:mb-6 text-center" style={{ color }}>{title}</h2>
          <p className="mb-4 md:mb-6 text-sm md:text-lg lg:text-xl" style={{ color }}>{description}</p>
          <div className="flex justify-center mt-4 md:mt-8">
            <img src={gifUrl} alt="GIF" className="w-full h-auto max-w-full" />
          </div>
          {isModalLink ? (
            <button
              onClick={() => setModalOpen(true)}
              className="px-6 py-3 md:px-8 md:py-5 rounded-full font-bold text-sm md:text-lg transition-all mt-5 cursor-pointer"
              style={{ backgroundColor: buttonColor, color: buttonTextColor }}
            >
              {buttonText}
            </button>
          ) : (
            <a
              href={buttonLink}
              className="px-6 py-3 md:px-8 md:py-5 rounded-full font-bold text-sm md:text-lg transition-all mt-5"
              style={{ backgroundColor: buttonColor, color: buttonTextColor }}
            >
              {buttonText}
            </a>
          )}
        </div>
      </div>

      <RequestDemoModal isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultForWhom={heroFor} />
    </section>
  );
}