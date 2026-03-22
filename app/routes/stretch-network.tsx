import { type MetaFunction } from "react-router";
import { CategoryCard } from "~/components/CategoryCard";
import { Faqs } from "~/components/Faqs";
import Footer from "~/components/layout/Footer";
import Header from "~/components/layout/Header";
import HeroSection from "~/components/layout/HeroSection";
import { TitleDescriptionButton } from "~/components/TitleDescriptionButton";
import { TitleDescriptionIcons } from "~/components/TitleDescriptionIcons";
import { TitleDescriptionImageSingleBackground } from "~/components/TitleDescriptionImageSingleBackground";

export function meta({ }: MetaFunction) {
    return [
        {
            title: "Stretch Matters",
            description: "A website to track your stretching routine and progress.",
        }
    ];
}

export default function StretchNetwork() {
    return (
        <div>
            <Header
                bgColor="#f2f6fd"
                textColor="#3a3a3a"
                logoImage="https://aaptiv.com/wp-content/uploads/2023/01/Aaptiv-Logo-Navy.png"
                buttonBackground="#1100DB"
                buttonColor="#ffffff"
            />
            <HeroSection
                bgColor="#f2f6fd"
                title={`<div class="single-heading text-5xl text-left"><h3 class="single-heading-title"><span class="single-title-text text-[#1100DB] font-bold">20,000+ gyms<br></span><span class="single-title-text"> at their fingertips</span></h3>	</div>`}
                description={`<div class="single-sub-heading text-xl leading-loose"> <p>Employees access thousands of gyms in one membership. Available exclusively through employer and health plan benefits</p> </div>`}
                buttonText=""
                imageUrl={"https://aaptiv.com/wp-content/uploads/2025/09/Header-Asset-Gym-Network-Landing.png"}
                showNavbar={false}
                navbarBgColor={"transparent"}
                navbarTextColor="#ffffff"
                stickyNavbarBgColor="#ffffff"
                stickyNavbarTextColor="#0c2746"
                backgroundImage=""
            />
            <main>
                <CategoryCard
                    title={"Get started!"}
                    description={""}
                    categories={[
                        {
                            title: "Employers",
                            description: "Give employees access to an exclusive network of gyms and studios.",
                            buttonText: "Get a Quote",
                            buttonLink: "/personal-training",
                            buttonColor: "#14E25A",
                            buttonTextColor: "#000000",
                        },
                        {
                            title: "Individuals",
                            description: "Want to unlock access to our gym network? Refer your HR benefits team today.",
                            buttonText: "Refer HR",
                            buttonLink: "/nutrition",
                            buttonColor: "#14E25A",
                            buttonTextColor: "#000000",
                        },
                    ]}
                />
                <TitleDescriptionIcons
                    bgColor="#ffffff"
                    backgroundImage=""
                    color="#0c2746"
                    title="In-person fitness, nationwide"
                    description=""
                    icons={[
                        {
                            src: "https://aaptiv.com/wp-content/uploads/2025/04/Icon-Location-150x150.png", alt: "Stretching Icon", href: "", textColor: "#556B83", bgColor: "#1100DB", text: "Employees join a wide variety of gyms in their membership tier.",
                            title: "Multi-location access",
                            titleColor: "#1100DB"
                        },
                        {
                            src: "https://aaptiv.com/wp-content/uploads/2025/04/Icon-Contracts-150x150.png", alt: "Calendar Icon", href: "", textColor: "#556B83", bgColor: "#1100DB", text: "Easy to modify membership every month, no long-term contracts.",
                            title: "Flexible contracts",
                            titleColor: "#1100DB"
                        },
                        {
                            src: "https://aaptiv.com/wp-content/uploads/2025/04/Icon-Savings-150x150.png", alt: "Goal Icon", href: "", textColor: "#556B83", bgColor: "#1100DB", text: "Employees can save big on gym and studio access.",
                            title: "Major savings",
                            titleColor: "#1100DB"
                        },
                    ]}
                />

                <TitleDescriptionImageSingleBackground
                    heading=""
                    title={`<div class="single-heading text-3xl text-left font-bold"><h4 class="single-heading-title"><span class="single-title-text"> How it Works </span></h4>	</div>`}
                    description={`<div class="img-left-sub-heading text-[#1100DB] text-md"><p>For Employers:</p></div> <div class="list-description"><ul class="text-[#6D7073]"><li class="my-4 flex justify start items-center gap-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"></path></svg><p>Choose from a variety of plans and payment models</p></li><li class="my-4 flex justify start items-center gap-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"></path></svg><p>Sponsor a gym membership tier, or stick with our digital offering</p></li><li class="my-4 flex justify start items-center gap-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"></path></svg><p>Watch employee health and engagement soar.</p></li></ul></div>
                        <div class="img-left-sub-heading text-[#1100DB] text-md"><p>For Employers:</p></div> <div class="list-description"><ul class="text-[#6D7073]"><li class="my-4 flex justify start items-center gap-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"></path></svg><p>Choose from a variety of plans and payment models</p></li><li class="my-4 flex justify start items-center gap-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"></path></svg><p>Sponsor a gym membership tier, or stick with our digital offering</p></li><li class="my-4 flex justify start items-center gap-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"></path></svg><p>Watch employee health and engagement soar.</p></li></ul></div>`}
                    imageUrl="https://aaptiv.com/wp-content/uploads/2025/04/Gym-Network-Asset-Web-768x908.png"
                    bgColor="#ffffff"
                />

                <TitleDescriptionImageSingleBackground
                    heading="Refer your company"
                    title={`<div class="single-heading text-4xl text-left font-bold"><h4 class="single-heading-title"><span class="single-title-text"> Want your company to offer Aaptiv? </span></h4>	</div>`}
                    description={`<div class="single-sub-heading text-2xl"> <p>As an employee, you can ask your HR team to add Aaptiv to your employee benefits package!</p> </div>`}
                    imageUrl="https://aaptiv.com/wp-content/uploads/2025/04/Refer-Image-Asset-Web-768x556.png"
                    bgColor="#ffffff"
                    backgroundImage=""
                    buttonLink="#"
                    buttonText="Refer my HR"
                    buttonColor="#1100DB"
                    buttonTextColor="#ffffff"
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
                />            </main>
            <Footer />
        </div>
    );
}

