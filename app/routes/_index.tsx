import { type MetaFunction } from "react-router";
import { Faqs } from "~/components/Faqs";
import { Features } from "~/components/Features";
import Footer from "~/components/layout/Footer";
import Header from "~/components/layout/Header";
import HeroSection from "~/components/layout/HeroSection";
import { TitleDescriptionButton } from "~/components/TitleDescriptionButton";
import { TitleDescriptionIcons } from "~/components/TitleDescriptionIcons";

export function meta({} : MetaFunction) {
  return [
    {
      title: "Stretch Matters",
      description: "A website to track your stretching routine and progress.",
    }
  ];
}

export default function Layout() {
  return (
    <div>
        <Header 
          bgColor="#0e2948" 
          textColor="#ffffff" 
          buttonBackground="#ffffff"
          buttonColor="#0c2746"
        />
        <HeroSection
          bgColor="#0e2948"
          title={`<h1 class="hero-heading text-white tracking-wider text-6xl md:text-6xl lg:text-7xl">		<span class="hero-heading-title font-light">Make moves<br>with <span class="accent font-bold">Aaptiv</span></span>	</h1>`}
          description={`<p class="hero-description font-medium text-md text-white tracking-wider">Put goals in motion with a complete, personalized employee wellness benefit.</p>`}
          buttonText={"Start Free Today"}
          imageUrl={"https://aaptiv.com/wp-content/uploads/2025/05/Header-Asset-2048x1188.png"}
          showNavbar={true}
          navbarBgColor={"transparent"}
          navbarTextColor="#ffffff"
          stickyNavbarBgColor="#ffffff"
          stickyNavbarTextColor="#0c2746"
          backgroundImage="https://aaptiv.com/wp-content/uploads/2024/05/aaptiv-pattern-bg.png"
        />
      <main>
          <Features 
            bgColor="#f2f6fd"
            backgroundImage=""
            color="#3a3a3a"
            title="Take aim at growth goals"
            description={`<span class="flex justify-center text-2xl pt-5"><p class="mb-6">Whether the goal is mindfulness or marathons, Aaptiv help users make personal progress. </p></span>`}
            features={[
              { title: "How do I track my stretching routine?", description: "You can use our app to log your stretching exercises, set reminders, and track your progress over time.", image: "https://aaptiv.com/wp-content/uploads/2025/05/gym-access.png" },
              { title: "Can I customize my stretching routine?", description: "Yes! Our app allows you to create personalized stretching routines based on your goals and preferences.", image: "https://aaptiv.com/wp-content/uploads/2024/07/ai-coaching-image.png" },
              { title: "Is there a community aspect to Stretch Matters?", description: "Yes, you can connect with other users, share your progress, and join challenges to stay motivated.", image: "https://aaptiv.com/wp-content/uploads/2025/05/gym-access.png" },
              { title: "Is there a community aspect to Stretch Matters?", description: "Yes, you can connect with other users, share your progress, and join challenges to stay motivated.", image: "https://aaptiv.com/wp-content/uploads/2024/07/ai-coaching-image.png" },
            ]}
          />
          <TitleDescriptionIcons
            bgColor="#5DD3FF"
            backgroundImage="https://aaptiv.com/wp-content/uploads/2024/05/aaptiv-homepage-pattern.png"
            color="#3a4859"
            title="Kick-start wellness journeys"
            description="Engage employees or plan members with access to thousands of AI-curated, on-demand workouts and an extensive gym network."
            icons={[
              {
                src: "https://aaptiv.com/wp-content/uploads/2024/05/Employer-Icon.png", alt: "Stretching Icon", href: "", textColor: "#ffffff", bgColor: "#1100DB", text: "",
                title: "",
                titleColor: ""
              },
              {
                src: "https://aaptiv.com/wp-content/uploads/2024/05/Medicare-Icon.png", alt: "Calendar Icon", href: "", textColor: "#ffffff", bgColor: "#1100DB", text: "",
                title: "",
                titleColor: ""
              },
              {
                src: "https://aaptiv.com/wp-content/uploads/2024/05/Individual-Icon.png", alt: "Goal Icon", href: "", textColor: "#ffffff", bgColor: "#1100DB", text: "",
                title: "",
                titleColor: ""
              },
            ]}
          />
          <TitleDescriptionButton
            bgColor="#1100DB"
            backgroundImage="https://aaptiv.com/wp-content/uploads/2024/05/aaptiv-homepage-pattern.png"
            color="#ffffff"
            title={`<div class="banner-heading text-4xl font-bold text-center"><h2 class="banner-heading-title"><span class="banner-title-text">Bring Aaptiv to your organization!</span></h2></div>`}
            description={`<div class="mt-2"><p class="mb-6 text-2xl"><b>For benefits leaders:</b>  Fill out your information to connect with our sales team.</p></div>`}
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
