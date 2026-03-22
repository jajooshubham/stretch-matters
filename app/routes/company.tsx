import type { MetaFunction } from "react-router";
import { InfoSections } from "~/components/InfoSections";
import Footer from "~/components/layout/Footer";
import Header from "~/components/layout/Header";
import HeroSection from "~/components/layout/HeroSection";
import { TitleDescriptionButton } from "~/components/TitleDescriptionButton";

export function meta({ }: MetaFunction) {
  return [
    {
      title: "Stretch Matters",
      description: "A website to track your stretching routine and progress.",
    }
  ];
}

export default function Company() {
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
        heading="About Aaptiv"
        bgColor="#f2f6fd"
        title={`<div class="single-heading text-4xl text-left"><h3 class="single-heading-title"><span class="single-title-text text-[#3a3a3a] font-bold">We improve lives<br> through fitness</span></h3>	</div>`}
        description={`<div class="single-sub-heading text-xl tracking-wide"> <p>We help users at all levels take action on fitness and wellness goals. Our personalized digital workouts and extensive gym network access get people moving and sticking to a custom routine.</p> </div>`}
        buttonText=""
        imageUrl={"https://aaptiv.com/wp-content/uploads/2024/07/aaptiv-image-about.png"}
        showNavbar={true}
        navbarBgColor={"transparent"}
        navbarTextColor="#0c2746s"
        stickyNavbarBgColor="#ffffff"
        stickyNavbarTextColor="#0c2746"
        backgroundImage="https://aaptiv.com/wp-content/uploads/2024/07/about-aaptiv-pattern.png"
      />
      <main>
        <InfoSections
          sections={[
            {
              label: "How it started",
              title: "Making personalized fitness accessible to all",
              description:
                "Aaptiv® was founded in 2016 to make personalized fitness instruction available to everyone...",
            },
            {
              label: "How it’s going",
              title: "Aaptiv and PEAR Health Labs, Inc.",
              description:
                "PEAR Health Labs, Inc. acquired Aaptiv® in 2021 to combine Aaptiv's leading fitness app...",
            },
            {
              label: "AI for personalized fitness",
              title: "Leveraging PEAR Training Intelligence",
              description:
                "Aaptiv® is built on the PEAR Training Intelligence® platform...",
            },
          ]}
        />
        <TitleDescriptionButton
          bgColor="#1100DB"
          backgroundImage="https://aaptiv.com/wp-content/uploads/2024/05/aaptiv-homepage-pattern.png"
          color="#ffffff"
          title={`<div class="banner-heading text-4xl font-bold text-center"><h2 class="banner-heading-title"><span class="banner-title-text">Join our team</span></h2></div>`}
          description={`<div class="mt-2"><p class="mb-6 text-2xl"> Join us to revolutionize health and fitness.</p></div>`}
          buttonText="Careers at Stretch Matters"
          onButtonClick={() => console.log("Button clicked")}
          buttonColor="#14E25A"
        />
      </main>
      <Footer />
    </div>
  );
}
