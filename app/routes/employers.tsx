import { type MetaFunction } from "react-router";
import { Faqs } from "~/components/Faqs";
import Footer from "~/components/layout/Footer";
import Header from "~/components/layout/Header";
import HeroSection from "~/components/layout/HeroSection";
import { TitleDescriptionIcons } from "~/components/TitleDescriptionIcons";
import { TitleDescriptionImageDoubleBackground } from "~/components/TitleDescriptionImageDoubleBackground";
import { TitleDescriptionImageSingleBackground } from "~/components/TitleDescriptionImageSingleBackground";

export function meta({} : MetaFunction) {
  return [
    {
      title: "Stretch Matters",
      description: "A website to track your stretching routine and progress.",
    }
  ];
}

export default function Employers() {
  return (
    <div>
        <Header 
          bgColor="#1100db" 
          textColor="#ffffff"
          buttonBackground="#ffffff"
          buttonColor="#0c2746"
        />
        <HeroSection
          bgColor="#1100db"
          title={`<h1 class="hero-heading text-white tracking-normal text-5xl md:text-5xl lg:text-6xl">		<span class="hero-heading-title font-light">Workplace wellness <br><span class="accent font-bold">for everyone</span></span>	</h1>`}
          description={`<p class="hero-description font-medium text-md text-white tracking-wider">A comprehensive employee fitness & wellness solution for a healthier workforce.</p>`}
          buttonText={"Start Free Today"}
          imageUrl={"https://aaptiv.com/wp-content/uploads/2025/04/Employers-Header-Image-Update-1.png"}
          showNavbar={true}
          navbarBgColor={"transparent"}
          navbarTextColor="#ffffff"
          stickyNavbarBgColor="#ffffff"
          stickyNavbarTextColor="#0c2746"
          backgroundImage="https://aaptiv.com/wp-content/uploads/2024/06/Employer-head-Design.png"
        />
      <main>
        <TitleDescriptionIcons
            bgColor="#ffffff"
            backgroundImage=""
            color="#3a4859"
            title="Total wellness for every employee, everywhere"
            description="Give employees the tools they need to take action on their wellness goals."
            icons={[
              {
                src: "https://aaptiv.com/wp-content/uploads/2024/06/Icon-Check-150x150.png", alt: "Stretching Icon", href: "", textColor: "#3a4859", bgColor: "#1100DB", text: "Thousands of on-demand workouts",
                title: "",
                titleColor: ""
              },
              {
                src: "https://aaptiv.com/wp-content/uploads/2024/06/Icon-Location-150x150.png", alt: "Calendar Icon", href: "", textColor: "#3a4859", bgColor: "#1100DB", text: "Access to a vast gym network",
                title: "",
                titleColor: ""
              },
              {
                src: "https://aaptiv.com/wp-content/uploads/2024/06/Icon-Active-150x150.png", alt: "Goal Icon", href: "", textColor: "#3a4859", bgColor: "#1100DB", text: "Personalized wellness plans",
                title: "",
                titleColor: ""
              },
              {
                src: "https://aaptiv.com/wp-content/uploads/2024/06/Icon-Mobile-150x150.png", alt: "Goal Icon", href: "", textColor: "#3a4859", bgColor: "#1100DB", text: "Mobile access anytime, anywhere",
                title: "",
                titleColor: ""
              },
            ]}
          />
          <TitleDescriptionImageSingleBackground
            heading=""
            title={`<div class="single-heading text-left text-[#ffffff] text-4xl"><h2 class="single-heading-title"><span class="single-title-text">Aaptiv helps with <br><b>“the how”</b></span></h2></div>`}
            description={`<div class="single-sub-heading text-[#ffffff] text-md"><p>Aaptiv builds workouts designed for every experience level and preference. Access to an extensive<strong> gym network</strong> and <strong>digital workout</strong> library paired with personalization gives employees the tools they need to build enduring wellness habits — turning fitness from a daunting concept to <strong>consistent practice.</strong></p>		</div>`}
            imageUrl="https://aaptiv.com/wp-content/uploads/2025/01/all-in-one.png"
            backgroundImage="https://aaptiv.com/wp-content/uploads/2024/06/Design.png"
            bgColor="#0C2746"
          />
          <TitleDescriptionImageDoubleBackground
            title={`<div class="double-heading  text-left text-[#0c2746] text-4xl font-bold"><h2 class="double-heading-title"><span class="double-title-text"><span class="stroke1">In-person fitness, nationwide</span></span></h2></div>`}
            description={`<div class="double-sub-heading text-[#556B83] text-md"><p>One of the<strong class="text-[#1100DB]"> largest gym networks</strong> in the industry with 20,000+ US locations</p><br/><p>Multi-location access to<strong class="text-[#1100DB]"> local and national brands</strong> and boutique studios</p><br/><p>Option for employees to buy-up to higher tiers</p><br/><p>Flexible membership options with no long-term gym contracts for employees</p>		</div>`}
            imageUrl="https://aaptiv.com/wp-content/uploads/2024/09/Web-image-6-768x768.png"
            backgroundImage="https://aaptiv.com/wp-content/uploads/2024/06/Design-darkblue.png"
            bgColorLeft="#ffffff"
            bgColorRight="#1100db"
            buttonLink="https://aaptiv.com"
            buttonText="Learn More"
            buttonColor="#14E25A"
            buttonTextColor="#000000"
          />
          <TitleDescriptionImageSingleBackground
          heading=""
            title={`<div class="single-heading text-left text-[#ffffff] text-4xl"><h2 class="single-heading-title"><span class="single-title-text">Aaptiv helps with <br><b>“the how”</b></span></h2></div>`}
            description={`<div class="single-sub-heading text-[#ffffff] text-md"><p>Aaptiv builds workouts designed for every experience level and preference. Access to an extensive<strong> gym network</strong> and <strong>digital workout</strong> library paired with personalization gives employees the tools they need to build enduring wellness habits — turning fitness from a daunting concept to <strong>consistent practice.</strong></p>		</div>`}
            imageUrl="https://aaptiv.com/wp-content/uploads/2025/01/all-in-one.png"
            backgroundImage="https://aaptiv.com/wp-content/uploads/2024/06/Design.png"
            bgColor="#0C2746"
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
