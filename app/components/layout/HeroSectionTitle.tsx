import { useState } from "react";
import Navbar from "./Navbar";
import RequestDemoModal from "../RequestDemoModal";

export function HeroSectionTitle({
    heading,
    bgColor = '#ffffff',
    backgroundImage ,
    color = '#1100DB',
    title,
    description,
    buttonText,
    buttonColor = '#14E25A',
    buttonTextColor = '#000000',
    showNavbar = false,
    navbarBgColor = 'transparent',
    navbarTextColor = '#ffffff',
    stickyNavbarBgColor = '#ffffff',
    stickyNavbarTextColor = '#0c2746',
    buttonLink }: {
        heading?: string;
        title: string;
        description: string;
        buttonText: string;
        buttonLink: string;
        bgColor?: string;
        backgroundImage?: string;
        color?: string;
        buttonColor?: string;
        buttonTextColor?: string;
        showNavbar?: boolean;
        navbarBgColor?: string;
        navbarTextColor?: string;
        stickyNavbarBgColor?: string;
        stickyNavbarTextColor?: string;
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
            <div className="max-w-6xl mx-auto p-4 md:p-14 lg:p-20">
                <div className="p-3 text-center" style={{ color }}>
                    <h3 className="text-lg md:text-2xl font-semibold text-[#1100DB]">{heading}</h3>

                    <div className="mb-4 leading-tight pt-4">
                        <div dangerouslySetInnerHTML={{ __html: title }} />
                    </div>

                    <div className="text-base md:text-lg lg:text-xl leading-relaxed pt-4">
                        <div dangerouslySetInnerHTML={{ __html: description }} />
                    </div>
                    {buttonText && (
                        isModalLink ? (
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
                        )
                    )}
                </div>
            </div>

            <RequestDemoModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </section>
    );
}