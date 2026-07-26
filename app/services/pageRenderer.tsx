import { Faqs } from "~/components/Faqs";
import { Features } from "~/components/Features";
import Footer from "~/components/layout/Footer";
import Header from "~/components/layout/Header";
import HeroSection from "~/components/layout/HeroSection";
import { HeroSectionGif } from "~/components/layout/HeroSectionGif";
import { HeroSectionTitle } from "~/components/layout/HeroSectionTitle";
import { CategoryCard } from "~/components/CategoryCard";
import { InfoSections } from "~/components/InfoSections";
import ScrollResponsive from "~/components/ScrollContentSlider";
import { TitleDescriptionAnimation } from "~/components/TitleDescriptionAnimation";
import { TitleDescriptionButton } from "~/components/TitleDescriptionButton";
import { TitleDescriptionIcons } from "~/components/TitleDescriptionIcons";
import { TitleDescriptionImage } from "~/components/TitleDescriptionImage";
import { TitleDescriptionImageDoubleBackground } from "~/components/TitleDescriptionImageDoubleBackground";
import { TitleDescriptionImageLeft } from "~/components/TitleDescriptionImageLeft";
import { TitleDescriptionImageSingleBackground } from "~/components/TitleDescriptionImageSingleBackground";
import { TitleDescriptionThreeVideo } from "~/components/TitleDescriptionThreeVideo";
import { TitleDescriptionVideo } from "~/components/TitleDescriptionVideo";
import type { FooterContent, HeaderContent, HeroContent, HeroGifContent, HeroTitleContent, SectionContent } from "~/services/pageContent";

// --- Render Header ---
export function renderHeader(header: HeaderContent) {
    return (
        <Header
            bgColor={header.bgColor}
            textColor={header.textColor}
            logoImage={header.logoImage}
            buttonBackground={header.buttonBackground}
            buttonColor={header.buttonColor}
        />
    );
}

// --- Render Footer ---
export function renderFooter(footer: FooterContent) {
    return (
        <Footer
            bgColor={footer.bgColor}
            textColor={footer.textColor}
            logoSrc={footer.logoSrc}
            inlineMenu={footer.inlineMenu}
            socialIcons={footer.socialIcons}
            menus={footer.menus}
        />
    );
}

// --- Render Hero ---
export function renderHero(hero: HeroContent | HeroTitleContent | HeroGifContent) {
    switch (hero.type) {
        case 'hero': {
            const h = hero as HeroContent;
            return (
                <HeroSection
                    bgColor={h.bgColor}
                    heading={h.heading}
                    title={h.title}
                    description={h.description}
                    buttonText={h.buttonText}
                    imageUrl={h.imageUrl}
                    showNavbar={h.showNavbar}
                    navbarBgColor={h.navbarBgColor}
                    navbarTextColor={h.navbarTextColor}
                    stickyNavbarBgColor={h.stickyNavbarBgColor}
                    stickyNavbarTextColor={h.stickyNavbarTextColor}
                    backgroundImage={h.backgroundImage}
                    buttonLink={h.buttonLink}
                    heroFor={h.heroFor}
                    showImageOnMobile={h.showImageOnMobile}
                />
            );
        }
        case 'heroTitle': {
            const h = hero as HeroTitleContent;
            return (
                <HeroSectionTitle
                    heading={h.heading}
                    bgColor={h.bgColor}
                    backgroundImage={h.backgroundImage}
                    color={h.color}
                    title={h.title}
                    description={h.description}
                    buttonText={h.buttonText}
                    buttonColor={h.buttonColor}
                    buttonTextColor={h.buttonTextColor}
                    showNavbar={h.showNavbar}
                    navbarBgColor={h.navbarBgColor}
                    navbarTextColor={h.navbarTextColor}
                    stickyNavbarBgColor={h.stickyNavbarBgColor}
                    stickyNavbarTextColor={h.stickyNavbarTextColor}
                    buttonLink={h.buttonLink}
                />
            );
        }
        case 'heroGif': {
            const h = hero as HeroGifContent;
            return (
                <HeroSectionGif
                    bgColor={h.bgColor}
                    backgroundImage={h.backgroundImage}
                    color={h.color}
                    title={h.title}
                    description={h.description}
                    gifUrl={h.gifUrl}
                    buttonText={h.buttonText}
                    buttonColor={h.buttonColor}
                    buttonTextColor={h.buttonTextColor}
                    showNavbar={h.showNavbar}
                    buttonLink={h.buttonLink}
                    heroFor={h.heroFor}
                />
            );
        }
    }
}

// --- Render Sections ---
// Using `any` for props since each component has its own prop type
// and the JSON data is dynamically matched to the correct component
export function renderSections(sections: SectionContent[]) {
    return sections.map((section, index) => {
        const key = `section-${index}`;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const p = section.props as any;

        switch (section.component) {
            case 'features':
                return <Features key={key} bgColor={p.bgColor} backgroundImage={p.backgroundImage} color={p.color} title={p.title} description={p.description} features={p.features} />;
            case 'faqs':
                return <Faqs key={key} bgColor={p.bgColor} backgroundImage={p.backgroundImage} color={p.color} title={p.title} description={p.description} faqs={p.faqs} />;
            case 'titleDescriptionIcons':
                return <TitleDescriptionIcons key={key} bgColor={p.bgColor} backgroundImage={p.backgroundImage} color={p.color} title={p.title} description={p.description} icons={p.icons} />;
            case 'titleDescriptionButton':
                return <TitleDescriptionButton key={key} bgColor={p.bgColor} backgroundImage={p.backgroundImage} color={p.color} title={p.title} description={p.description} buttonText={p.buttonText} buttonColor={p.buttonColor} buttonTextColor={p.buttonTextColor} heading={p.heading} buttonLink={p.buttonLink} heroFor={p.heroFor} />;
            case 'titleDescriptionImage':
                return <TitleDescriptionImage key={key} title={p.title} description={p.description} bgColor={p.bgColor} backgroundImage={p.backgroundImage} color={p.color} imageSrc={p.imageSrc} contentPosition={p.contentPosition} />;
            case 'titleDescriptionImageDoubleBackground':
                return <TitleDescriptionImageDoubleBackground key={key} title={p.title} description={p.description} imageUrl={p.imageUrl} bgColorLeft={p.bgColorLeft} bgColorRight={p.bgColorRight} backgroundImage={p.backgroundImage} buttonLink={p.buttonLink} buttonText={p.buttonText} buttonColor={p.buttonColor} buttonTextColor={p.buttonTextColor} />;
            case 'titleDescriptionImageSingleBackground':
                return <TitleDescriptionImageSingleBackground key={key} heading={p.heading} title={p.title} description={p.description} imageUrl={p.imageUrl} bgColor={p.bgColor} backgroundImage={p.backgroundImage} buttonLink={p.buttonLink} buttonText={p.buttonText} buttonColor={p.buttonColor} buttonTextColor={p.buttonTextColor} />;
            case 'titleDescriptionImageLeft':
                return <TitleDescriptionImageLeft key={key} heading={p.heading} title={p.title} description={p.description} imageUrl={p.imageUrl} bgColor={p.bgColor} backgroundImage={p.backgroundImage} buttonLink={p.buttonLink} buttonText={p.buttonText} buttonColor={p.buttonColor} buttonTextColor={p.buttonTextColor} />;
            case 'titleDescriptionVideo':
                return <TitleDescriptionVideo key={key} title={p.title} description={p.description} bgColor={p.bgColor} backgroundImage={p.backgroundImage} color={p.color} videoSrc={p.videoSrc} contentPosition={p.contentPosition} />;
            case 'titleDescriptionThreeVideo':
                return <TitleDescriptionThreeVideo key={key} videos={p.videos} heading={p.heading} title={p.title} description={p.description} bgColor={p.bgColor} />;
            case 'titleDescriptionAnimation':
                return <TitleDescriptionAnimation key={key} title={p.title} description={p.description} words={p.words} bgColor={p.bgColor} />;
            case 'categoryCard':
                return <CategoryCard key={key} bgColor={p.bgColor} backgroundImage={p.backgroundImage} color={p.color} title={p.title} description={p.description} categories={p.categories} cardsPerRow={p.cardsPerRow} />;
            case 'infoSections':
                return <InfoSections key={key} sections={p.sections} />;
            case 'scrollContentSlider':
                return <ScrollResponsive key={key} bgColor={p.bgColor} backgroundImage={p.backgroundImage} sections={p.sections} />;
            default:
                return null;
        }
    });
}
