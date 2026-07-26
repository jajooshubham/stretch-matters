// ============================================================
// Page Content Service
// Centralized JSON content for all pages, served via SSR loaders
// All inline HTML uses responsive Tailwind classes
// ============================================================

// --- Shared Types ---

import LogoWhite from '../../app/assets/logo/StretchLogoWhite.png'
import Logo from '../../app/assets/logo/StretchLogo.png'
import HomeHero from '~/assets/HomeHero.png';
import EmployeeHero from '~/assets/EmployeeHero.png';
import AdminHero from '~/assets/AdminHero.png';
import StretchNetworkHero from '~/assets/StretchNetworkHero.png';
import DigitalWorkoutHero from '~/assets/DigitalWorkoutHero.png';
import IndividualHero from '~/assets/IndividualHero.png';
import AboutHero from '~/assets/AboutHero.png';
import StretchologistHero from '~/assets/StretchologistHero.png';
import JobsHero from '~/assets/JobsHero.png';
import EmployeeFitness from '~/assets/EmployeeFitness.png';
import IndividualFitness from '~/assets/IndividualFitness.png';
import StretchNetworkMaps from '~/assets/StretchNetworkMaps.png';
import StretchNetworkRefer from '~/assets/StretchNetworkRefer.png';
import StretchMattersHomepagePattern from '~/assets/backgrounds/StretchMattersHomepagePattern.png';
import StretchMattersPatternBg from '~/assets/backgrounds/StretchMattersPatternBg.png';
import StretchMattersDesign from '~/assets/backgrounds/StretchMattersDesign.png';
import StretchMattersHeadDesign from '~/assets/backgrounds/StretchMattersHeadDesign.png';
import StretchMattersDarkBlueDesign from '~/assets/backgrounds/StretchMattersDarkBlueDesign.png';
import StretchMattersScaledDesign from '~/assets/backgrounds/StretchMattersScaledDesign.png';
import StretchMattersAboutPattern from '~/assets/backgrounds/StretchMattersAboutPattern.png';
import StretchMattersPattern3 from '~/assets/backgrounds/StretchMattersPattern3.png';
import AdminToolSignup from '~/assets/AdminToolSignup.png';
import AdminToolFaq from '~/assets/AdminToolFaq.png';
import AdminToolManage from '~/assets/AdminToolManage.png';
import AdminToolTrack from '~/assets/AdminToolTrack.png';
import AssistedStretching from '~/assets/AssistedStretching.png';
import AiPoweredCoaching from '~/assets/AiPoweredCoaching.png';
import RecoveryPerformance from '~/assets/RecoveryPerformance.png';
import TrackMacros from '~/assets/TrackMacros.png';
import AppHome from '~/assets/AppHome.png';
import AppBook from '~/assets/AppBook.png';
import AppWorkout from '~/assets/AppWorkout.png';
import EmployeeIcon from '~/assets/icons/employee.png';
import IndividualIcon from '~/assets/icons/user.png';
import LocationIcon from '~/assets/icons/location.png';
import ContractIcon from '~/assets/icons/contract.png';
import ErgonomicIcon from '~/assets/icons/ergonomic.png';
import WorkerIcon from '~/assets/icons/worker.png';
import ScheduleIcon from '~/assets/icons/schedule.png';
import EasyuseIcon from '~/assets/icons/easyuse.png';
import OfficeIcon from '~/assets/icons/office.png';
import MultiExercise from '~/assets/MultiExercise.mp4';
import LegRaises from '~/assets/LegRaises.mp4';
import Squats from '~/assets/Squats.mp4';
import MountainClimbing from '~/assets/MountainClimbing.mp4';

export interface HeaderContent {
    bgColor: string;
    textColor: string;
    logoImage?: string;
    buttonBackground: string;
    buttonColor: string;
}

export interface HeroContent {
    showImageOnMobile: boolean | undefined;
    heroFor: "myself" | "organisation" | undefined;
    type: 'hero';
    bgColor: string;
    heading?: string;
    title: string;
    description: string;
    buttonText: string;
    imageUrl: string;
    showNavbar: boolean;
    navbarBgColor: string;
    navbarTextColor: string;
    stickyNavbarBgColor: string;
    stickyNavbarTextColor: string;
    backgroundImage: string;
    buttonLink: string;
}

export interface HeroTitleContent {
    buttonLink: string;
    type: 'heroTitle';
    heading?: string;
    bgColor: string;
    backgroundImage: string;
    color: string;
    title: string;
    description: string;
    buttonText: string;
    buttonColor: string;
    buttonTextColor: string;
    showNavbar: boolean;
    navbarBgColor: string;
    navbarTextColor: string;
    stickyNavbarBgColor: string;
    stickyNavbarTextColor: string;
}

export interface HeroGifContent {
    heroFor: "myself" | "organisation" | undefined;
    type: 'heroGif';
    bgColor: string;
    backgroundImage?: string;
    color: string;
    title: string;
    description: string;
    gifUrl: string;
    buttonText: string;
    buttonColor: string;
    buttonTextColor: string;
    showNavbar: boolean;
    navbarBgColor?: string;
    navbarTextColor?: string;
    stickyNavbarBgColor?: string;
    stickyNavbarTextColor?: string;
    buttonLink: string;
}

export interface SectionContent {
    component: string;
    props: Record<string, any>;
}

export interface MetaContent {
    title: string;
    description: string;
}

import { footerInlineMenu, footerMenus, footerSocials, navItems } from "~/utils/menu";
import App from '~/root';

// --- Footer Content Types ---
export interface FooterMenu {
    title: string;
    links: { label: string; href: string }[];
}

export interface FooterContent {
    bgColor: string;
    textColor: string;
    logoSrc: string;
    inlineMenu: { label: string; href: string }[];
    socialIcons: { name: string; href: string }[];
    menus: FooterMenu[];
}

export interface PageContent {
    meta: MetaContent;
    header: HeaderContent;
    hero: HeroContent | HeroTitleContent | HeroGifContent;
    sections: SectionContent[];
    footer: FooterContent;
}

// --- Footer Presets ---

const defaultFooter: FooterContent = {
    bgColor: "#ffffff",
    textColor: "#000000",
    logoSrc: Logo,
    inlineMenu: footerInlineMenu,
    socialIcons: footerSocials,
    menus: footerMenus,
};

// --- Header Presets ---

const headerDark: HeaderContent = {
    bgColor: "#0e2948",
    textColor: "#ffffff",
    buttonBackground: "#ffffff",
    buttonColor: "#0c2746",
    logoImage: LogoWhite,
};

const headerLight: HeaderContent = {
    bgColor: "#f2f6fd",
    textColor: "#3a3a3a",
    logoImage: Logo,
    buttonBackground: "#1100DB",
    buttonColor: "#ffffff",
};

const headerPurple: HeaderContent = {
    bgColor: "#1100db",
    textColor: "#ffffff",
    buttonBackground: "#ffffff",
    buttonColor: "#0c2746",
    logoImage: LogoWhite,
};

// --- Shared CTA Banner ---

const ctaBanner: SectionContent = {
    component: "titleDescriptionButton",
    props: {
        bgColor: "#1100DB",
        backgroundImage: StretchMattersHomepagePattern,
        color: "#ffffff",
        title: `<div class="banner-heading text-2xl md:text-3xl lg:text-4xl font-bold text-center"><h2 class="banner-heading-title"><span class="banner-title-text">Bring Stretch Matters to your organisation!</span></h2></div>`,
        description: `<div class="mt-2"><p class="mb-4 md:mb-6 text-base md:text-xl lg:text-2xl"><b>For benefits leaders:</b> Fill out your information to connect with our sales team.</p></div>`,
        buttonText: "Request a Demo",
        buttonColor: "#14E25A",
        buttonLink: "/request-demo",
        heroFor: "myself"
    },
};

// --- Page Content Functions ---

export function getHomeContent(): PageContent {
    return {
        meta: { title: "Stretch Matters", description: "A website to track your stretching routine and progress." },
        header: headerDark,
        hero: {
            type: 'hero',
            bgColor: "#0e2948",
            title: `<h1 class="hero-heading text-white tracking-wider text-3xl md:text-5xl lg:text-7xl"><span class="hero-heading-title font-light">Move Better,<br>Recover <span class="accent font-bold">Smarter</span></span></h1>`,
            description: `<p class="hero-description font-medium text-sm md:text-base lg:text-md text-white tracking-wider">AI-powered stretching, mobility, and recovery designed to help individuals move better and stay consistent.</p>`,
            buttonText: "Request a Demo",
            imageUrl: HomeHero,
            showNavbar: true,
            navbarBgColor: "transparent",
            navbarTextColor: "#ffffff",
            stickyNavbarBgColor: "#ffffff",
            stickyNavbarTextColor: "#0c2746",
            backgroundImage: StretchMattersPatternBg,
            buttonLink: "/request-demo",
            heroFor: 'myself',
            showImageOnMobile: false,
        },
        sections: [
            {
                component: "features",
                props: {
                    bgColor: "#f2f6fd",
                    backgroundImage: "",
                    color: "#3a3a3a",
                    title: "Everything you need to move and recover better",
                    description: `<span class="flex justify-center text-lg md:text-2xl pt-3 md:pt-5"><p class="mb-4 md:mb-6">Helping companies build healthier, more resilient teams through structured stretching and recovery.</p></span>`,
                    features: [
                        { title: "Assisted Stretching & Mobility", description: "Expert led assisted stretching that helps employees improve flexibility, posture, recovery, and overall movement quality.", image: AssistedStretching },
                        { title: "AI-powered coaching", description: "Deliver personalized stretching, mobility, and recovery routines based on goals, habits, and activity level.", image: AiPoweredCoaching },
                        { title: "Recovery & Performance", description: "Support soreness, stiffness, recovery, and movement quality with structured programs built for real life and active lifestyles.", image: RecoveryPerformance },
                        { title: "Track Daily Macros", description: "Smart macro tracking to help you eat right, perform better, and stay consistent.", image: TrackMacros },
                    ],
                },
            },
            {
                component: "titleDescriptionIcons",
                props: {
                    bgColor: "#5DD3FF",
                    backgroundImage: StretchMattersHomepagePattern,
                    color: "#3a4859",
                    title: "A Better Wellness Experience for Everyone",
                    description: "Whether you’re supporting employees, fitness communities, or individual members, Stretch Matters makes movement and recovery more accessible.",
                    icons: [
                        { src: EmployeeIcon, alt: "For Employers", href: "/employers", textColor: "#ffffff", bgColor: "#1100DB", text: "", title: "", titleColor: "" },
                        { src: IndividualIcon, alt: "For Individuals", href: "/individuals", textColor: "#ffffff", bgColor: "#1100DB", text: "", title: "", titleColor: "" },
                    ],
                },
            },
            { ...ctaBanner },
            {
                component: "faqs",
                props: {
                    bgColor: "#f2f6fd",
                    backgroundImage: "",
                    color: "#3a3a3a",
                    title: "FAQ",
                    description: `<span class="flex justify-center text-lg md:text-2xl pt-3 md:pt-5"><p class="mb-4 md:mb-6">Want to learn more? </p>&nbsp;<a class="text-blue-500" href="">Explore our FAQs</a></span>`,
                    faqs: [
                        { question: "Who is Stretch Matters for?", answer: "Stretch Matters is built for employers, wellness partners, fitness studios, and individuals looking to improve mobility, recovery, flexibility, and movement habits." },
                        { question: "Is Stretch Matters only for people who work out regularly?", answer: "Not at all. Stretch Matters is designed for all activity levels  from beginners and desk workers to active fitness users and athletes." },
                        { question: "How are routines personalized?", answer: "Our platform uses guided recommendations and user preferences to surface routines based on goals, schedule, movement needs, and activity level." },
                        { question: "Can employers offer this as a wellness benefit?", answer: "Yes. Stretch Matters is designed to support modern employee wellness through stretching, mobility, recovery, and movement-first programming." },
                        { question: "Are your stretchologists professionally trained?", answer: "Yes! Every stretchologist is professionally trained and must complete our internal online and offline training, assessments, and quality checks before being assigned to sessions." },
                    ],
                },
            },
        ],
        footer: defaultFooter,
    };
}

export function getEmployersContent(): PageContent {
    return {
        meta: { title: "Stretch Matters - Employers", description: "Workplace wellness for everyone." },
        header: headerPurple,
        hero: {
            type: 'hero',
            bgColor: "#1100db",
            title: `<h1 class="hero-heading text-white tracking-normal text-2xl md:text-4xl lg:text-6xl"><span class="hero-heading-title font-light">Workplace wellness <br><span class="accent font-bold">for everyone</span></span></h1>`,
            description: `<p class="hero-description font-medium text-sm md:text-base text-white tracking-wider">Helping businesses create healthier workplaces with structured movement and recovery programs.</p>`,
            buttonText: "Request a Demo",
            imageUrl: EmployeeHero,
            showNavbar: true,
            navbarBgColor: "transparent",
            navbarTextColor: "#ffffff",
            stickyNavbarBgColor: "#ffffff",
            stickyNavbarTextColor: "#0c2746",
            backgroundImage: StretchMattersHeadDesign,
            buttonLink: "/request-demo",
            heroFor: "organisation",
            showImageOnMobile: false,
        },
        sections: [
            {
                component: "titleDescriptionIcons",
                props: {
                    bgColor: "#ffffff",
                    backgroundImage: "",
                    color: "#3a4859",
                    title: "Designed for the way people actually live and work",
                    description: "From long desk hours to inconsistent routines, we help employees move more, recover better, and feel better",
                    icons: [
                        { src: ScheduleIcon, alt: "Stretching Icon", href: "", textColor: "#3a4859", bgColor: "#1100DB", text: "Built for busy schedules", title: "", titleColor: "" },
                        { src: OfficeIcon, alt: "Calendar Icon", href: "", textColor: "#3a4859", bgColor: "#1100DB", text: "Works across office, home, and hybrid", title: "", titleColor: "" },
                        { src: WorkerIcon, alt: "Goal Icon", href: "", textColor: "#3a4859", bgColor: "#1100DB", text: "Flexible for different employee needs", title: "", titleColor: "" },
                        { src: EasyuseIcon, alt: "Goal Icon", href: "", textColor: "#3a4859", bgColor: "#1100DB", text: "Easy to roll out and easy to use", title: "", titleColor: "" },
                    ],
                },
            },
            {
                component: "titleDescriptionImageSingleBackground",
                props: {
                    heading: "",
                    title: `<div class="single-heading text-center md:text-left text-[#ffffff] text-2xl md:text-3xl lg:text-4xl"><h2 class="single-heading-title"><span class="single-title-text">Wellness That Works in the <br><b>"Real World"</b></span></h2></div>`,
                    description: `<div class="single-sub-heading text-[#ffffff] text-sm md:text-base lg:text-md"><p>Stretch Matters turns wellness into action with guided stretching, recovery, and movement programs that employees can actually follow, helping teams build healthier habits, reduce fatigue, and perform better every day.</p></div>`,
                    imageUrl: AppHome,
                    backgroundImage: StretchMattersDesign,
                    bgColor: "#0C2746",
                },
            },
            {
                component: "titleDescriptionImageDoubleBackground",
                props: {
                    title: `<div class="double-heading text-center md:text-left text-[#0c2746] text-2xl md:text-3xl lg:text-4xl font-bold"><h2 class="double-heading-title"><span class="double-title-text"><span class="stroke1">Expert led stretching & recovery, beyond the screen</span></span></h2></div>`,
                    description: `<div class="double-sub-heading text-[#556B83] text-sm md:text-base lg:text-md"><p>On-site <strong class="text-[#1100DB]"> stretch sessions</strong> led by trained stretchologists</p><br/><p>Structured mobility routines for<strong class="text-[#1100DB]"> workplaces and teams</strong></p><br/><p>Recovery focused sessions designed for real-life stiffness and fatigue</p><br/><p>Seamless blend of guided digital + real-world support</p></div>`,
                    imageUrl: EmployeeFitness,
                    backgroundImage: StretchMattersDarkBlueDesign,
                    bgColorLeft: "#ffffff",
                    bgColorRight: "#1100db",
                    buttonLink: "",
                    buttonText: "Explore More",
                    buttonColor: "#14E25A",
                    buttonTextColor: "#000000",
                },
            },
            {
                component: "titleDescriptionImageSingleBackground",
                props: {
                    heading: "",
                    title: `<div class="single-heading text-center md:text-left text-[#ffffff] text-2xl md:text-3xl lg:text-4xl"><h2 class="single-heading-title"><span class="single-title-text">More Than Stretching. <br>Better<b>"Everyday Wellbeing"</b></span></h2></div>`,
                    description: `<div class="single-sub-heading text-[#ffffff] text-sm md:text-base lg:text-md"><p>Stretch Matters goes beyond assisted stretching with wellness experiences that support how employees move, recover, and feel every day. From mobility and recovery to mindfulness, nutrition, and healthier routines, we help teams build sustainable wellbeing habits that fit into real work life</p></div>`,
                    imageUrl: AppBook,
                    backgroundImage: StretchMattersDesign,
                    bgColor: "#0C2746",
                },
            },
            {
                component: "faqs",
                props: {
                    bgColor: "#f2f6fd",
                    backgroundImage: "",
                    color: "#3a3a3a",
                    title: "FAQ",
                    description: `<span class="flex justify-center text-lg md:text-2xl pt-3 md:pt-5"><p class="mb-4 md:mb-6">Want to learn more? </p>&nbsp;<a class="text-blue-500" href="">Explore our FAQs</a></span>`,
                    faqs: [
                        { question: "Who is Stretch Matters built for?", answer: "Stretch Matters is designed for companies looking to offer a more practical, modern, and accessible movement benefit to their teams." },
                        { question: "Is this only for employees who already work out?", answer: "Not at all. Stretch Matters is built for all activity levels, from desk-based employees to more active team members." },
                        { question: "How does personalization work?", answer: "Employees receive guided recommendations based on their routine, schedule, movement needs, and goals." }
                    ],
                },
            },
        ],
        footer: defaultFooter,
    };
}

export function getIndividualsContent(): PageContent {
    return {
        meta: { title: "Stretch Matters - Individuals", description: "Your someday starts today." },
        header: {
            bgColor: "#f2f6fd",
            textColor: "#3a3a3a",
            logoImage: Logo,
            buttonBackground: "#14e25a",
            buttonColor: "#0c2746",
        },
        hero: {
            type: 'heroTitle',
            title: `<div class="individual-module-content individual-node-content text-3xl md:text-5xl lg:text-6xl"><h1 class="individual-heading"><span class="individual-heading-text">Start moving<br><strong class="text-[#1100DB]">better, today</strong></span></h1></div>`,
            description: `<div class="individual-rich-text text-base md:text-xl lg:text-2xl font-medium leading-loose max-w-2xl text-center mx-auto"><p>Stretch Matters helps you improve mobility, reduce stiffness, recover better, and stay consistent with guided routines.</p></div>`,
            backgroundImage: StretchMattersScaledDesign,
            bgColor: "#ffffff",
            color: "#3a3a3a",
            buttonText: "",
            buttonColor: "",
            buttonTextColor: "",
            showNavbar: true,
            navbarBgColor: "transparent",
            navbarTextColor: "#0c2746",
            stickyNavbarBgColor: "#ffffff",
            stickyNavbarTextColor: "#0c2746",
            buttonLink: ""
        },
        sections: [
            {
                component: "titleDescriptionImage",
                props: {
                    title: `<h2 class="individual-heading-title text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide"><span class="individual-title-text">Because sitting all day and training hard both take a toll</span></h2>`,
                    description: `<div class="individual-sub-heading text-base md:text-xl lg:text-2xl"><p>If your neck feels stiff, your back feels tight, or your body never feels fully recovered, Stretch Matters fixes it.</p></div>`,
                    backgroundImage: "",
                    bgColor: "#0c2746",
                    color: "#ffffff",
                    imageSrc: IndividualHero,
                    contentPosition: "center",
                },
            },
            {
                component: "titleDescriptionImageDoubleBackground",
                props: {
                    title: `<div class="double-heading text-left text-[#0c2746] text-2xl md:text-3xl lg:text-4xl font-bold"><h2 class="double-heading-title"><span class="double-title-text"><span class="stroke1">Everything you need, in one system</span></span></h2></div>`,
                    description: `<div class="double-sub-heading text-sm md:text-base lg:text-lg leading-loose text-left text-[#3a3a3a]"><p><strong class="text-[#1100DB]">AI-powered training</strong><br>Get workout plans designed around your goals, level, and routine.</p><p><strong class="text-[#1100DB]">Stretching & mobility</strong><br>Improve flexibility, reduce stiffness, and move better with guided routines.</p><p><strong class="text-[#1100DB]">Recovery that actually works</strong><br>Target soreness, fatigue, and tightness with structured recovery sessions.</p></div>`,
                    imageUrl: IndividualFitness,
                    backgroundImage: "",
                    bgColorLeft: "#ffffff",
                    bgColorRight: "#ffffff",
                    buttonLink: "",
                    buttonText: "Explore More",
                    buttonColor: "#14E25A",
                    buttonTextColor: "#000000",
                },
            },
            {
                component: "titleDescriptionImageSingleBackground",
                props: {
                    heading: "",
                    title: `<div class="single-heading text-center md:text-left text-[#ffffff] text-2xl md:text-3xl lg:text-4xl font-bold"><h2 class="single-heading-title"><span class="single-title-text">Your plan, built around you</span></h2></div>`,
                    description: `<div class="single-sub-heading text-[#ffffff] text-sm md:text-base lg:text-md"><p>Answer a few questions and get a personalized plan for workouts and nutrition, built around your goals and how your body actually feels.</p></div>`,
                    imageUrl: AppWorkout,
                    backgroundImage: StretchMattersDesign,
                    bgColor: "#0C2746",
                },
            },
            {
                component: "titleDescriptionButton",
                props: {
                    bgColor: "#1100DB",
                    backgroundImage: StretchMattersHomepagePattern,
                    color: "#ffffff",
                    title: `<div class="banner-heading text-2xl md:text-3xl lg:text-4xl font-bold text-center"><h2 class="banner-heading-title"><span class="banner-title-text">How to get started</span></h2></div>`,
                    description: `<div class="mt-2"><p class="mb-4 md:mb-6 text-base md:text-xl lg:text-2xl">Tell us what you want to improve whether it’s workouts, recovery, or nutrition and Stretch Matters will build a plan around you. <br/> <br/> No guesswork. No random routines. Just a smarter system designed to help you stay consistent.</p></div>`,
                    buttonText: "Start Your Plan",
                    buttonColor: "#14E25A",
                    buttonLink: "/request-demo",
                    heroFor: "myself"
                },
            },
            {
                component: "faqs",
                props: {
                    bgColor: "#f2f6fd",
                    backgroundImage: "",
                    color: "#3a3a3a",
                    title: "FAQ",
                    description: `<span class="flex justify-center text-lg md:text-2xl pt-3 md:pt-5"><p class="mb-4 md:mb-6">Want to learn more? </p>&nbsp;<a class="text-blue-500" href="">Explore our FAQs</a></span>`,
                    faqs: [
                        { question: "What exactly do I get with Stretch Matters?", answer: "You get a smarter fitness and recovery system that combines AI workout plans, stretching, recovery sessions, nutrition support, and progress tracking  all in one place." },
                        { question: "Is Stretch Matters only for stretching?", answer: "No. Stretching is a core part of the platform, but Stretch Matters also helps with workouts, mobility, recovery, flexibility, and nutrition habits." },
                        { question: "Do I need to be fit or experienced to use it?", answer: "Not at all. We are designed for all levels, whether you’re just starting, getting back into a routine, or already active." },
                        { question: "Can I track my progress inside the platform?", answer: "Yes. You can track your routines, consistency, progress, and key habits over time so it’s easier to stay on course." },
                    ],
                },
            },
        ],
        footer: defaultFooter,
    };
}

export function getDigitalWorkoutContent(): PageContent {
    return {
        meta: { title: "Stretch Matters - Digital Workout", description: "Best in class fitness for everybody." },
        header: headerLight,
        hero: {
            type: 'heroTitle',
            title: `<div class="digital-content digital-node-content"><h1 class="digital-heading"><span class="digital-heading-text text-[#3a3a3a] text-2xl md:text-4xl lg:text-5xl/15">Everything you need to train, recover, <br><strong class="text-[#1100DB]">and stay consistent, digitally</strong></span></h1></div>`,
            description: ``,
            backgroundImage: StretchMattersScaledDesign,
            bgColor: "#ffffff",
            color: "#1100DB",
            buttonText: "",
            buttonColor: "",
            buttonTextColor: "",
            showNavbar: false,
            navbarBgColor: "transparent",
            navbarTextColor: "#ffffff",
            stickyNavbarBgColor: "#ffffff",
            stickyNavbarTextColor: "#0c2746",
            buttonLink: ""
        },
        sections: [
            {
                component: "titleDescriptionImage",
                props: {
                    title: "",
                    description: ``,
                    backgroundImage: "",
                    bgColor: "#ffffff",
                    color: "#1100DB",
                    imageSrc: DigitalWorkoutHero,
                    contentPosition: "center",
                },
            },
            {
                component: "titleDescriptionAnimation",
                props: {
                    title: "Personalized digital plans for every goal",
                    words: ["faster", "smarter", "better"],
                    description: "Powered by AI, Stretch Matters creates personalized plans based on your goals, fitness level, recovery needs and routine.",
                    bgColor: "#f2f6fd",
                },
            },
            {
                component: "titleDescriptionVideo",
                props: {
                    title: "Train, stretch, wherever and whenever",
                    description: `<div class="video-sub-heading text-center md:text-left text-sm md:text-base lg:text-xl"><p>Access guided workouts, stretching, mobility, and recovery sessions anytime, whether you're at home, at the gym, or fitting movement into a busy day.</p></div>`,
                    videoSrc: MultiExercise,
                    contentPosition: "left",
                    color: "#3a3a3a",
                },
            },
            {
                component: "titleDescriptionThreeVideo",
                props: {
                    videos: [
                        LegRaises,
                        Squats,
                        MountainClimbing,
                    ],
                    heading: "Inclusive solution",
                    title: `<div class="three-video-heading text-2xl md:text-3xl lg:text-4xl font-bold text-[#3a3a3a] text-center"><h2 class="thre-video-heading-title"><span class="three-video-title-text"> Built for every starting point</span></h2></div>`,
                    description: `<div class="thre-video-sub-heading text-center text-sm md:text-base lg:text-xl"><p>From beginner to expert level classes, something for everyone</p></div>`,
                    bgColor: "#f2f6fd",
                },
            },
            { ...ctaBanner },
        ],
        footer: defaultFooter,
    };
}

export function getStretchNetworkContent(): PageContent {
    return {
        meta: { title: "Stretch Matters - Stretch Network", description: "20,000+ gyms at their fingertips." },
        header: headerLight,
        hero: {
            type: 'hero',
            bgColor: "#f2f6fd",
            title: `<div class="single-heading text-2xl md:text-4xl lg:text-5xl text-center md:text-left"><h3 class="single-heading-title"><span class="single-title-text text-[#1100DB] font-bold">Access to Stretch Matters<br></span><span class="single-title-text"> Partner Studios</span></h3></div>`,
            description: `<div class="single-sub-heading text-sm md:text-base lg:text-xl leading-loose"> <p>A curated network of studios focused on stretching, mobility, and recovery, designed to help your body move and feel better.</p> </div>`,
            buttonText: "",
            imageUrl: StretchNetworkHero,
            showNavbar: false,
            navbarBgColor: "transparent",
            navbarTextColor: "#ffffff",
            stickyNavbarBgColor: "#ffffff",
            stickyNavbarTextColor: "#0c2746",
            backgroundImage: "",
            buttonLink: "",
            heroFor: "myself",
            showImageOnMobile: true,
        },
        sections: [
            {
                component: "categoryCard",
                props: {
                    title: "Get started!",
                    description: "",
                    categories: [
                        { title: "Employers", description: "Offer your team access to curated recovery and mobility studios as part of their wellness benefits.", buttonText: "Request a Demo", buttonLink: "/request-demo?source=employers", buttonColor: "#14E25A", buttonTextColor: "#000000" },
                        { title: "Individuals", description: "Currently available through select partners. Join the waitlist or request access for your workplace.", buttonText: "Refer Your Company", buttonLink: "/employee-referral", buttonColor: "#14E25A", buttonTextColor: "#000000" },
                    ],
                },
            },
            {
                component: "titleDescriptionIcons",
                props: {
                    bgColor: "#ffffff",
                    backgroundImage: "",
                    color: "#0c2746",
                    title: "In-person stretching and recovery",
                    description: "",
                    icons: [
                        { src: LocationIcon, alt: "Curated studio network", href: "", textColor: "#556B83", bgColor: "#1100DB", text: "Access trusted partner studios focused on stretching, mobility, and recovery.", title: "Curated studio network", titleColor: "#1100DB" },
                        { src: ErgonomicIcon, alt: "Flexible access", href: "", textColor: "#556B83", bgColor: "#1100DB", text: "Offer studio access as a standalone benefit or alongside digital recovery and wellness support.", title: "Flexible access", titleColor: "#1100DB" },
                        { src: ContractIcon, alt: "Goal Icon", href: "", textColor: "#556B83", bgColor: "#1100DB", text: "Give users access to services that help them feel better, move better, and recover better.", title: "Meaningful wellbeing", titleColor: "#1100DB" },
                    ],
                },
            },
            {
                component: "titleDescriptionImageSingleBackground",
                props: {
                    heading: "",
                    title: `<div class="single-heading text-xl md:text-2xl lg:text-3xl text-left font-bold"><h4 class="single-heading-title"><span class="single-title-text"> How it Works </span></h4></div>`,
                    description: `<div class="img-left-sub-heading text-[#1100DB] text-sm md:text-base lg:text-md text-left"><p>For Employers:</p></div> <div class="list-description text-left"><ul class="text-[#6D7073]"><li class="my-3 md:my-4 flex justify start items-center gap-3 md:gap-4 text-sm md:text-base"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"></path></svg><p>Choose how studio access fits into your wellness offering</p></li><li class="my-3 md:my-4 flex justify start items-center gap-3 md:gap-4 text-sm md:text-base"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"></path></svg><p>Combine offline recovery access with your digital Stretch Matters plan</p></li><li class="my-3 md:my-4 flex justify start items-center gap-3 md:gap-4 text-sm md:text-base"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"></path></svg><p>Support employee wellbeing with a more practical, recovery-first benefit.</p></li></ul></div>
                        <div class="img-left-sub-heading text-[#1100DB] text-sm md:text-base lg:text-md text-left"><p>For Employees:</p></div> <div class="list-description text-left"><ul class="text-[#6D7073]"><li class="my-3 md:my-4 flex justify start items-center gap-3 md:gap-4 text-sm md:text-base"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"></path></svg><p>Explore partner studio access when available in your area.</p></li><li class="my-3 md:my-4 flex justify start items-center gap-3 md:gap-4 text-sm md:text-base"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"></path></svg><p>Join the waitlist for early access to the Stretch Matters Network.</p></li><li class="my-3 md:my-4 flex justify start items-center gap-3 md:gap-4 text-sm md:text-base"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"></path></svg><p>Stay connected as new studio access options open over time.</p></li></ul></div>`,
                    imageUrl: StretchNetworkMaps,
                    bgColor: "#ffffff",
                },
            },
            {
                component: "titleDescriptionImageSingleBackground",
                props: {
                    heading: "Refer your company",
                    title: `<div class="single-heading text-2xl md:text-3xl lg:text-4xl text-center md:text-left font-bold"><h4 class="single-heading-title"><span class="single-title-text"> Want our access through your company? </span></h4></div>`,
                    description: `<div class="single-sub-heading text-base md:text-xl lg:text-2xl"> <p>If your company doesn’t offer Stretch Matters yet, you can help bring studio access, recovery support, and digital wellness to your workplace.</p> </div>`,
                    imageUrl: StretchNetworkRefer,
                    bgColor: "#ffffff",
                    backgroundImage: "",
                    buttonText: "Refer my HR",
                    buttonColor: "#1100DB",
                    buttonTextColor: "#ffffff",
                    buttonLink: "/employee-referral"
                },
            },
            {
                component: "titleDescriptionButton",
                props: {
                    bgColor: "#1100DB",
                    backgroundImage: StretchMattersHomepagePattern,
                    color: "#ffffff",
                    title: `<div class="banner-heading text-2xl md:text-3xl lg:text-4xl font-bold text-center"><h2 class="banner-heading-title"><span class="banner-title-text">Get access to the Stretch Matters Network</span></h2></div>`,
                    description: `<div class="mt-2"><p class="mb-4 md:mb-6 text-base md:text-xl lg:text-2xl">Access our growing network of recovery and mobility studios — available through employers or early individual access.</p></div>`,
                    buttonText: "Request a Demo",
                    buttonColor: "#14E25A",
                    buttonLink: "/request-demo",
                    heroFor: "organisation",
                },
            },
            {
                component: "faqs",
                props: {
                    bgColor: "#f2f6fd",
                    backgroundImage: "",
                    color: "#3a3a3a",
                    title: "FAQ",
                    description: `<span class="flex justify-center text-lg md:text-2xl pt-3 md:pt-5"><p class="mb-4 md:mb-6">Want to learn more? </p>&nbsp;<a class="text-blue-500" href="">Explore our FAQs</a></span>`,
                    faqs: [
                        { question: "Who can access the Stretch Matters Network?", answer: "Studio access is currently available through select employers and partners. Individual access will be rolled out gradually you can join the waitlist to be notified." },
                        { question: "Is Stretch Matters only for people who work out regularly?", answer: "No. Stretch Matters is designed for anyone who wants to improve recovery, mobility, flexibility, and how their body feels regardless of fitness level." },
                        { question: "Can companies offer this as a benefit?", answer: "Yes. Employers can offer Stretch Matters as a wellness benefit, including both digital access and optional studio network access." },
                        { question: "How do I get access as an individual?", answer: "You can join the waitlist for early access, or refer your company to bring Stretch Matters to your workplace." },
                    ],
                },
            }
        ],
        footer: defaultFooter,
    };
}

export function getAdminToolsContent(): PageContent {
    return {
        meta: { title: "Stretch Matters - Admin Tools", description: "Simplified wellness program administration." },
        header: headerLight,
        hero: {
            type: 'heroGif',
            bgColor: "#f2f6fd",
            title: "Everything you need to launch and manage Stretch Matters",
            description: "Stretch Matters gives your team the tools to onboard employees, drive participation, and manage your recovery and wellness benefit with ease, all from one place.",
            color: "#3a3a3a",
            gifUrl: AdminHero,
            buttonText: "Request a Demo",
            buttonColor: "#14E25A",
            buttonTextColor: "#000000",
            showNavbar: false,
            buttonLink: "/request-demo",
            heroFor: "organisation",
        },
        sections: [
            {
                component: "scrollContentSlider",
                props: {
                    bgColor: "#f2f6fd",
                    backgroundImage: "",
                    sections: [
                        { id: 1, title: "Easy sign up", description: "Simple sign-up through customized company landing page or access code.", image: AdminToolSignup, heading: "Onboarding, launch, & beyond" },
                        { id: 2, title: "Engagement tools", description: "Engagement resources provided to drive sign-ups and utilization.", image: AdminToolFaq, heading: "Onboarding, launch, & beyond" },
                        { id: 3, title: "Management portal", description: "Streamlined administration through our easy-to-use admin portal.", image: AdminToolManage, heading: "Onboarding, launch, & beyond" },
                    ],
                },
            },
            {
                component: "titleDescriptionImageLeft",
                props: {
                    heading: "Track what matters",
                    title: `<div class="img-left-heading text-left text-[#0c2746] text-xl md:text-2xl lg:text-3xl font-bold"><h3 class="img-left-heading-title"><span class="img-left-title-text img-left-primary-title">Clear visibility into engagement and usage</span> </h3></div>`,
                    description: `<div class="img-left-sub-heading text-[#6D7073] text-sm md:text-base lg:text-md"><p>Get a 360° look into employee utilization and activity in real-time</p></div> <div class="list-description"><ul class="text-[#6D7073]"><li class="my-3 md:my-4 flex justify start items-center gap-3 md:gap-4 text-sm md:text-base"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"></path></svg><p>Employee sign-ups and activation</p></li><li class="my-3 md:my-4 flex justify start items-center gap-3 md:gap-4 text-sm md:text-base"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"></path></svg><p>Routine completion and engagement trends</p></li><li class="my-3 md:my-4 flex justify start items-center gap-3 md:gap-4 text-sm md:text-base"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"></path></svg><p>Digital usage and program participation</p></li></ul></div>`,
                    imageUrl: AdminToolTrack,
                    bgColor: "#ffffff",
                    backgroundImage: "",
                    buttonLink: "#",
                    buttonText: "",
                    buttonColor: "#14E25A",
                    buttonTextColor: "#000000",
                },
            },
            {
                component: "titleDescriptionButton",
                props: {
                    bgColor: "#1100DB",
                    backgroundImage: StretchMattersHomepagePattern,
                    color: "#ffffff",
                    title: `<div class="banner-heading text-2xl md:text-3xl lg:text-4xl font-bold text-center"><h2 class="banner-heading-title"><span class="banner-title-text">Bring Stretch Matters to your organisation!</span></h2></div>`,
                    description: `<div class="mt-2"><p class="mb-4 md:mb-6 text-base md:text-xl lg:text-2xl"><b>For benefits leaders:</b> Fill out your information to connect with our sales team.</p></div>`,
                    buttonText: "Request a Demo",
                    buttonColor: "#14E25A",
                    buttonLink: "/request-demo",
                    heroFor: "organisation"
                },
            },
        ],
        footer: defaultFooter,
    };
}

export function getCompanyContent(): PageContent {
    return {
        meta: { title: "Stretch Matters - Company", description: "We improve lives through fitness." },
        header: headerLight,
        hero: {
            type: 'hero',
            bgColor: "#f2f6fd",
            heading: "About Stretch matters",
            title: `<div class="single-heading text-2xl md:text-3xl lg:text-4xl text-center md:text-left"><h3 class="single-heading-title"><span class="single-title-text text-[#3a3a3a] font-bold">We’re building the recovery layer of fitness</span></h3></div>`,
            description: `<div class="single-sub-heading text-sm md:text-base lg:text-xl tracking-wide"> <p>We bring together guided recovery, stretching, mobility, and structured support into one system, helping people feel better in their body, move more freely, and stay consistent without breaking down.</p> </div>`,
            buttonText: "",
            imageUrl: AboutHero,
            showNavbar: true,
            navbarBgColor: "transparent",
            navbarTextColor: "#0c2746",
            stickyNavbarBgColor: "#ffffff",
            stickyNavbarTextColor: "#0c2746",
            backgroundImage: StretchMattersAboutPattern,
            buttonLink: "",
            heroFor: "myself",
            showImageOnMobile: true,
        },
        sections: [
            {
                component: "infoSections",
                props: {
                    sections: [
                        { label: "OUR APPROACH", title: "Recovery first. Everything else follows", description: "Most fitness platforms focus on doing more, more workouts, more intensity, more output. We focus on what your body actually needs first: recovery, mobility, and balance." },
                        { label: "WHAT WE’RE BUILDING", title: "A system built around how your body feels", description: "Stretch Matters combines guided recovery, stretching, mobility, and structured support into one experience, helping people reduce stiffness, move better, and stay consistent without burnout." },
                        { label: "WHERE WE’RE HEADING", title: "Making recovery a daily habit, not an after thought", description: "We’re building a platform where recovery is no longer optional, it’s the foundation of how people train, perform, and live." },
                    ],
                },
            },
            {
                component: "titleDescriptionButton",
                props: {
                    bgColor: "#1100DB",
                    backgroundImage: StretchMattersHomepagePattern,
                    color: "#ffffff",
                    title: `<div class="banner-heading text-2xl md:text-3xl lg:text-4xl font-bold text-center"><h2 class="banner-heading-title"><span class="banner-title-text">Join our team</span></h2></div>`,
                    description: `<div class="mt-2"><p class="mb-4 md:mb-6 text-base md:text-xl lg:text-2xl"> We’re building a recovery first platform that helps people feel better in their body every day. If that excites you, we’d love to work with you.</p></div>`,
                    buttonText: "Work with us",
                    buttonColor: "#14E25A",
                    buttonLink: "/jobs",
                    heroFor: "myself"
                },
            },
        ],
        footer: defaultFooter,
    };
}

export function getJobsContent(): PageContent {
    return {
        meta: { title: "Stretch Matters - Jobs", description: "Join our team." },
        header: headerLight,
        hero: {
            type: 'hero',
            bgColor: "#f2f6fd",
            heading: "Careers at Stretch Matters",
            title: `<div class="single-heading text-2xl md:text-3xl lg:text-4xl text-center md:text-left"><h3 class="single-heading-title"><span class="single-title-text text-[#3a3a3a] font-bold">Help build the <br>future of recovery</span></h3></div>`,
            description: `<div class="single-sub-heading text-sm md:text-base lg:text-xl tracking-wide"> <p>Stretch Matters is building a recovery first platform designed to help people move better, feel better, and stay consistent. We’re looking for thoughtful, ambitious people who want to build something meaningful from the ground up.</p> </div>`,
            buttonText: "",
            imageUrl: JobsHero,
            showNavbar: true,
            navbarBgColor: "transparent",
            navbarTextColor: "#0c2746",
            stickyNavbarBgColor: "#ffffff",
            stickyNavbarTextColor: "#0c2746",
            backgroundImage: StretchMattersAboutPattern,
            buttonLink: "",
            heroFor: "myself",
            showImageOnMobile: true,
        },
        sections: [
            {
                component: "titleDescriptionButton",
                props: {
                    bgColor: "#1100DB",
                    backgroundImage: StretchMattersHomepagePattern,
                    color: "#ffffff",
                    title: `<div class="banner-heading text-2xl md:text-3xl lg:text-4xl font-bold text-center"><h2 class="banner-heading-title"><span class="banner-title-text">Join our team</span></h2></div>`,
                    description: `<div class="mt-2"><p class="mb-4 md:mb-6 text-base md:text-xl lg:text-2xl"> We’re building something real, early, and worth caring about. If that excites you, let’s talk.</p></div>`,
                    buttonText: "Work with us",
                    buttonColor: "#14E25A",
                    buttonLink: "/jobs",
                    heroFor: "myself"
                },
            },
        ],
        footer: defaultFooter,
    };
}

export function getStretchologistContent(): PageContent {
    return {
        meta: { title: "Stretch Matters - Trainers", description: "Join our trainer team." },
        header: headerLight,
        hero: {
            type: 'hero',
            bgColor: "#f2f6fd",
            heading: "Meet Our Stretchologists",
            title: `<div class="single-heading text-2xl md:text-3xl lg:text-4xl text-center md:text-left"><h3 class="single-heading-title"><span class="single-title-text text-[#3a3a3a] font-bold">Meet the experts behind <br>better movement and recovery</span></h3></div>`,
            description: `<div class="single-sub-heading text-sm md:text-base lg:text-xl tracking-wide"> <p>Stretchologists are trained movement and recovery professionals who help people improve mobility, reduce stiffness, and feel better in their body through guided support and hands on recovery expertise.</p> </div>`,
            buttonText: "",
            imageUrl: StretchologistHero,
            showNavbar: true,
            navbarBgColor: "transparent",
            navbarTextColor: "#0c2746",
            stickyNavbarBgColor: "#ffffff",
            stickyNavbarTextColor: "#0c2746",
            backgroundImage: StretchMattersAboutPattern,
            buttonLink: "",
            heroFor: "myself",
            showImageOnMobile: true,
        },
        sections: [
            {
                component: "titleDescriptionButton",
                props: {
                    bgColor: "#1100DB",
                    backgroundImage: StretchMattersHomepagePattern,
                    color: "#ffffff",
                    title: `<div class="banner-heading text-2xl md:text-3xl lg:text-4xl font-bold text-center"><h2 class="banner-heading-title"><span class="banner-title-text">Join our team</span></h2></div>`,
                    description: `<div class="mt-2"><p class="mb-4 md:mb-6 text-base md:text-xl lg:text-2xl"> We’re building something real, early, and worth caring about. If that excites you, let’s talk.</p></div>`,
                    buttonText: "Work with us",
                    buttonColor: "#14E25A",
                    buttonLink: "/jobs",
                    heroFor: "myself"
                },
            },
        ],
        footer: defaultFooter,
    };
}


export function getRequestDemoContent(): PageContent {
    return {
        meta: { title: "Stretch Matters - Digital Stretch", description: "Best in class fitness for everybody." },
        header: headerDark,
        hero: {
            type: 'heroTitle',
            title: `<div class="digital-content digital-node-content"><h1 class="digital-heading"><span class="digital-heading-text text-[#ffffff] text-2xl md:text-4xl lg:text-5xl/15 font-bold">Request a demo</span></h1></div>`,
            description: ``,
            backgroundImage: StretchMattersPattern3,
            bgColor: "#0c2746",
            color: "#ffffff",
            buttonText: "",
            buttonColor: "",
            buttonTextColor: "",
            showNavbar: true,
            navbarBgColor: "transparent",
            navbarTextColor: "#ffffff",
            stickyNavbarBgColor: "#ffffff",
            stickyNavbarTextColor: "#0c2746",
            buttonLink: ""
        },
        sections: [],
        footer: defaultFooter,
    };
}


export function getEmployeeReferralContent(): PageContent {
    return {
        meta: { title: "Stretch Matters - Digital Stretch", description: "Best in class fitness for everybody." },
        header: headerDark,
        hero: {
            type: 'heroTitle',
            title: `<div class="digital-content digital-node-content"><h1 class="digital-heading"><span class="digital-heading-text text-[#ffffff] text-2xl md:text-4xl lg:text-5xl/15 font-bold">Request a demo</span></h1></div>`,
            description: ``,
            backgroundImage: StretchMattersPattern3,
            bgColor: "#0c2746",
            color: "#ffffff",
            buttonText: "",
            buttonColor: "",
            buttonTextColor: "",
            showNavbar: true,
            navbarBgColor: "transparent",
            navbarTextColor: "#ffffff",
            stickyNavbarBgColor: "#ffffff",
            stickyNavbarTextColor: "#0c2746",
            buttonLink: ""
        },
        sections: [],
        footer: defaultFooter,
    };
}


export function getContactSupportContent(): PageContent {
    return {
        meta: { title: "Stretch Matters - Digital Stretch", description: "Best in class fitness for everybody." },
        header: headerDark,
        hero: {
            type: 'heroTitle',
            title: `<div class="digital-content digital-node-content"><h1 class="digital-heading"><span class="digital-heading-text text-[#ffffff] text-2xl md:text-4xl lg:text-5xl/15 font-bold">Contact Support</span></h1></div>`,
            description: `Submit your request and our team will get back to you shortly.`,
            backgroundImage: StretchMattersPattern3,
            bgColor: "#0c2746",
            color: "#ffffff",
            buttonText: "",
            buttonColor: "",
            buttonTextColor: "",
            showNavbar: true,
            navbarBgColor: "transparent",
            navbarTextColor: "#ffffff",
            stickyNavbarBgColor: "#ffffff",
            stickyNavbarTextColor: "#0c2746",
            buttonLink: ""
        },
        sections: [],
        footer: defaultFooter,
    };
}
