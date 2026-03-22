import Navbar from "./Navbar";

export function HeroSectionGif({
  bgColor = '#ffffff',
  backgroundImage = 'https://aaptiv.com/wp-content/uploads/2024/05/aaptiv-homepage-pattern.png',
  color = '#1100DB',
  title,
  description,
  gifUrl = "https://aaptiv.com/wp-content/uploads/2025/04/Admin-Header-Landing-90sec.gif",
  buttonText,
  buttonColor = '#14E25A',
  buttonTextColor = '#000000',
  showNavbar = true,
  navbarBgColor = 'transparent',
  navbarTextColor = '#ffffff',
  stickyNavbarBgColor = '#ffffff',
  stickyNavbarTextColor = '#0c2746',
  onButtonClick
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
  onButtonClick: () => void;
  showNavbar?: boolean;
  navbarBgColor?: string;
  navbarTextColor?: string;
  stickyNavbarBgColor?: string;
  stickyNavbarTextColor?: string;
}) {
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
      <div className="max-w-5xl mx-auto p-4 p-16 md:p-24">
        <div className="text-center" style={{ color }}>
          <h2 className="text-3xl md:text-7xl font-light mb-6 text-center" style={{ color }}>{title}</h2>
          <p className="mb-6 text-sm md:text-xl" style={{ color }}>{description}</p>
          <div className="flex justify-between space-x-4 mt-8">
            <img src={gifUrl} alt="GIF" className="w-full h-auto" />
          </div>
          <button
            onClick={onButtonClick}
            className="px-8 py-5 rounded-full font-bold text-lg transition-all mt-5"
            style={{ backgroundColor: buttonColor, color: buttonTextColor }}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
} 