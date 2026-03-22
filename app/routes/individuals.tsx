import { type MetaFunction } from "react-router";
import { Faqs } from "~/components/Faqs";
import Footer from "~/components/layout/Footer";
import Header from "~/components/layout/Header";
import { HeroSectionTitle } from "~/components/layout/HeroSectionTitle";
import { TitleDescriptionButton } from "~/components/TitleDescriptionButton";
import { TitleDescriptionImage } from "~/components/TitleDescriptionImage";
import { TitleDescriptionImageDoubleBackground } from "~/components/TitleDescriptionImageDoubleBackground";
import { TitleDescriptionImageSingleBackground } from "~/components/TitleDescriptionImageSingleBackground";

export function meta({ }: MetaFunction) {
    return [
        {
            title: "Stretch Matters",
            description: "A website to track your stretching routine and progress.",
        }
    ];
}

export default function Individuals() {
    return (
        <div>
            <Header
                bgColor="#f2f6fd"
                textColor="#3a3a3a"
                logoImage="https://aaptiv.com/wp-content/uploads/2023/01/Aaptiv-Logo-Navy.png"
                buttonBackground="#14e25a"
                buttonColor="#0c2746"
            />
            <HeroSectionTitle
                title={`<div class="individual-module-content individual-node-content text-6xl"><h1 class="individual-heading"><span class="individual-heading-text">Your “someday”<br><strong class="text-[#1100DB]">starts today.</strong></span></h1></div>`}
                description={`<div class="individual-rich-text text-2xl font-medium leading-loose max-w-2xl text-center mx-auto">	<p>You have got this! Aaptiv builds you a personalized plan- and coaches you through it.</p></div>`}
                backgroundImage="https://aaptiv.com/wp-content/uploads/2025/05/Bg-Design-scaled.jpg"
                bgColor="#ffffff"
                color="#3a3a3a"
                buttonText=""
                buttonColor=""
                buttonTextColor=""
                showNavbar={true}
                navbarBgColor={"transparent"}
                navbarTextColor="#0c2746s"
                stickyNavbarBgColor="#ffffff"
                stickyNavbarTextColor="#0c2746"
                onButtonClick={() => { }}
            />
            <main>

                <TitleDescriptionImage
                    title={`<h2 class="individual-heading-title text-4xl font-bold tracking-wide"><span class="individual-title-text">Your wellbeing, your way</span></h2>`}
                    description={`<div class="individual-sub-heading text-2xl"><p>Your path to better fitness and wellness is unique. Aaptiv gives you the tools and guidance you need to crush your goals.</p>		</div>`}
                    backgroundImage=""
                    bgColor="#0c2746"
                    color="#ffffff"
                    imageSrc="https://aaptiv.com/wp-content/uploads/2024/07/Your-Wellbeing-Asset-web-min-2048x819.png"
                    contentPosition="center"
                />

                <TitleDescriptionImageDoubleBackground
                    title={`<div class="double-heading  text-left text-[#0c2746] text-4xl font-bold"><h2 class="double-heading-title"><span class="double-title-text"><span class="stroke1">In-person fitness, nationwide</span></span></h2></div>`}
                    description={`<div class="double-sub-heading text-lg leading-loose text-left text-[#3a3a3a]"><p><strong class="text-[#1100DB]">High quality fitness network</strong><br>19,500+ national and boutique gym &amp; studio locations</p><p><strong class="text-[#1100DB]">Multi-location access</strong><br>Visit all gyms in your membership tier- even multiple gyms per day!!</p><p><strong class="text-[#1100DB]">Flexible memberships</strong><br>No long-term contracts, 30 day cancellation</p>		</div>`}
                    imageUrl="https://aaptiv.com/wp-content/uploads/2024/09/Web-image-6-768x768.png"
                    backgroundImage=""
                    bgColorLeft="#ffffff"
                    bgColorRight="#ffffff"
                    buttonLink="https://aaptiv.com"
                    buttonText="Learn More"
                    buttonColor="#14E25A"
                    buttonTextColor="#000000"
                />

                <TitleDescriptionImageSingleBackground
                    heading=""
                    title={`<div class="single-heading text-left text-[#ffffff] text-4xl font-bold"><h2 class="single-heading-title"><span class="single-title-text">Create your personalized workout plan</span></h2></div>`}
                    description={`<div class="single-sub-heading text-[#ffffff] text-md"><p>Create a personalized workout plan based on your goals, workout preferences, and current fitness level.</p>		</div>`}
                    imageUrl="https://aaptiv.com/wp-content/uploads/2025/05/On-demand-AI-Powered-Fitness-Asset-768x793.png"
                    backgroundImage="https://aaptiv.com/wp-content/uploads/2024/06/Design.png"
                    bgColor="#0C2746"
                />

                <TitleDescriptionButton
                    bgColor="#1100DB"
                    backgroundImage="https://aaptiv.com/wp-content/uploads/2024/05/aaptiv-homepage-pattern.png"
                    color="#ffffff"
                    title={`<div class="banner-heading text-4xl font-bold text-center"><h2 class="banner-heading-title"><span class="banner-title-text">How to get started</span></h2></div>`}
                    description={`<div class="mt-2"><p class="mb-6 text-2xl">If your employer/health plan includes Aaptiv in your benefits package, follow the sign-up instructions in the materials provided by your HR team. <br/> <br/> If you do not currently get Aaptiv through employer benefits, click “start free trial” below to access our digital offering, or refer us to your HR team!</p></div>`}
                    buttonText="Schedule a Demo"
                    onButtonClick={() => console.log("Button clicked")}
                    buttonColor="#14E25A"
                />

                <Faqs
                    bgColor="#f2f6fd"
                    backgroundImage=""
                    color="#3a3a3a"
                    title="FAQ"
                    description={`<span class="flex justify-center text-2xl pt-5"><p class="mb-6">Want more info? </p>&nbsp;<a class="text-blue-500" href="">Visit our help center</a></span>`}
                    faqs={[
                        { question: "How do I track my stretching routine?", answer: "You can use our app to log your stretching exercises, set reminders, and track your progress over time." },
                        { question: "Can I customize my stretching routine?", answer: "Yes! Our app allows you to create personalized stretching routines based on your goals and preferences." },
                        { question: "Is there a community aspect to Stretch Matters?", answer: "Yes, you can connect with other users, share your progress, and join challenges to stay motivated." },
                    ]}
                />
            </main>
            <Footer />
        </div>
    );
}

