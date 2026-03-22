import { type MetaFunction } from "react-router";
import Footer from "~/components/layout/Footer";
import Header from "~/components/layout/Header";
import ScrollResponsive from "~/components/ScrollContentSlider";
import { TitleDescriptionButton } from "~/components/TitleDescriptionButton";
import { HeroSectionGif } from "~/components/layout/HeroSectionGif";
import { TitleDescriptionImageLeft } from "~/components/TitleDescriptionImageLeft";

export function meta({ }: MetaFunction) {
    return [
        {
            title: "Stretch Matters",
            description: "A website to track your stretching routine and progress.",
        }
    ];
}

const sections = [
    {
        id: 1,
        title: "Easy sign up",
        description: "Simple sign-up through customized company landing page or access code.",
        image: "https://aaptiv.com/wp-content/uploads/2025/12/Easy-Sign-Up-scaled.png",
        heading: "Onboarding, launch, & beyond",
    },
    {
        id: 2,
        title: "Engagement tools",
        description: "Engagement resources provided to drive sign-ups and utilization.",
        image: "https://aaptiv.com/wp-content/uploads/2025/12/Engagement-tools-scaled.png",
        heading: "Onboarding, launch, & beyond",
    },
    {
        id: 3,
        title: "Management portal",
        description: "Streamlined administration through our easy-to-use admin portal.",
        image: "https://aaptiv.com/wp-content/uploads/2025/12/Management-portal-scaled.png",
        heading: "Onboarding, launch, & beyond",
    }
];

export default function AdminTools() {
    return (
        <div>
            <Header
                bgColor="#f2f6fd"
                textColor="#3a3a3a"
                logoImage="https://aaptiv.com/wp-content/uploads/2023/01/Aaptiv-Logo-Navy.png"
                buttonBackground="#1100DB"
                buttonColor="#ffffff"
            />
            <HeroSectionGif
                bgColor="#f2f6fd"
                title="Simplified wellness program administration"
                description="Aaptiv gives your HR team the tools to drive engagement, improve employee well-being, and measure success—all in one place."
                color="#3a3a3a"
                gifUrl="https://aaptiv.com/wp-content/uploads/2025/04/Admin-Header-Landing-90sec.gif"
                buttonText="Request a Demo"
                buttonColor="#14E25A"
                buttonTextColor="#000000"
                onButtonClick={() => {
                    // Handle button click, e.g., navigate to a demo request page
                    console.log("Request Demo button clicked");
                }
                }
                showNavbar={false}
            />
            <main>
                <ScrollResponsive
                    bgColor="#f2f6fd"
                    backgroundImage=""
                    sections={sections}
                />

                <TitleDescriptionImageLeft
                    heading="Gain insights"
                    title={`<div class="img-left-heading text-left text-[#0c2746] text-3xl font-bold">	<h3 class="img-left-heading-title"><span class="img-left-title-text img-left-primary-title">Employee wellness data</span> </h3>	</div>`}
                    description={`<div class="img-left-sub-heading text-[#6D7073] text-md"><p>Get a 360° look into employee utilization and activity in real-time</p></div> <div class="list-description"><ul class="text-[#6D7073]"><li class="my-4 flex justify start items-center gap-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"></path></svg><p>Sign-ups and subscriptions</p></li><li class="my-4 flex justify start items-center gap-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"></path></svg><p>Classes finished by category</p></li><li class="my-4 flex justify start items-center gap-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"></path></svg><p>Gym visits</p></li></ul></div>`}
                    imageUrl="https://aaptiv.com/wp-content/uploads/2025/04/Gain-Insights.png"
                    bgColor="#ffffff"
                    backgroundImage=""
                    buttonLink="#"
                    buttonText=""
                    buttonColor="#14E25A"
                    buttonTextColor="#000000"
                />

                <TitleDescriptionButton
                    bgColor="#1100DB"
                    backgroundImage="https://aaptiv.com/wp-content/uploads/2024/05/aaptiv-homepage-pattern.png"
                    color="#ffffff"
                    title={`<div class="banner-heading text-4xl font-bold text-center"><h2 class="banner-heading-title"><span class="banner-title-text">Bring Aaptiv to your organization!</span></h2></div>`}
                    description={`<div><p class="mb-6 text-2xl"><b>For benefits leaders:</b>  Fill out your information to connect with our sales team.</p></div>`}
                    buttonText="Schedule a Demo"
                    onButtonClick={() => console.log("Button clicked")}
                    buttonColor="#14E25A"
                />
            </main>
            <Footer />
        </div>
    );
}

