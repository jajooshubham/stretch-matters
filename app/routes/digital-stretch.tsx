import { type MetaFunction } from "react-router";
import Footer from "~/components/layout/Footer";
import Header from "~/components/layout/Header";
import { TitleDescriptionAnimation } from "~/components/TitleDescriptionAnimation";
import { HeroSectionTitle } from "~/components/layout/HeroSectionTitle";
import { TitleDescriptionImage } from "~/components/TitleDescriptionImage";
import { TitleDescriptionThreeVideo } from "~/components/TitleDescriptionThreeVideo";
import { TitleDescriptionVideo } from "~/components/TitleDescriptionVideo";
import { TitleDescriptionButton } from "~/components/TitleDescriptionButton";

export function meta({ }: MetaFunction) {
    return [
        {
            title: "Stretch Matters",
            description: "A website to track your stretching routine and progress.",
        }
    ];
}

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
            <HeroSectionTitle
                title={`<div class="digital-content digital-node-content"><h1 class="digital-heading"><span class="digital-heading-text text-[#3a3a3a] text-5xl/15">Best in class fitness for <br><strong class="text-[#1100DB]">everybody at your organization</strong></span></h1></div>`}
                description={``}
                backgroundImage="https://aaptiv.com/wp-content/uploads/2025/05/Bg-Design-scaled.jpg"
                bgColor="#ffffff"
                color="#1100DB"
                buttonText=""
                buttonColor=""
                buttonTextColor=""
                onButtonClick={() => { }}
            />
            <main>

                <TitleDescriptionImage
                    title=""
                    description={``}
                    backgroundImage=""
                    bgColor="#ffffff"
                    color="#1100DB"
                    imageSrc="https://aaptiv.com/wp-content/uploads/2025/05/on-demand-header-1536x566.png"
                    contentPosition="center"
                />

                <TitleDescriptionAnimation
                    title="Personalized workouts for any goal"
                    words={["faster", "smarter", "better"]}
                    description="Powered by AI, Aaptiv creates personalized workouts based on a user's goals and fitness level."
                    bgColor="#f2f6fd"
                />

                <TitleDescriptionVideo
                    title={"Wherever, whenever"}
                    description={`<div class="video-sub-heading text-left text-xl"><p>Stay active<span style="color: #0000ff;"><strong> at-home</strong></span> with or without equipment, <span style="color: #0000ff;"><strong>at the gym</strong></span>, or <strong><span style="color: #0000ff;">on the go</span></strong> with quick, effective workouts anywhere, anytime.</p>		</div>`}
                    videoSrc="https://aaptiv.com/wp-content/uploads/2025/05/My-Video-1.mp4"
                    contentPosition="left"
                    color="#3a3a3a"
                />

                <TitleDescriptionThreeVideo
                    videos={[
                        "https://aaptiv.com/wp-content/uploads/2025/05/Player-1.mp4?_=1",
                        "https://aaptiv.com/wp-content/uploads/2025/05/Player-2.mp4?_=2",
                        "https://aaptiv.com/wp-content/uploads/2025/05/Player-3.mp4?_=3",
                    ]}
                    heading={"Inclusive solution"}
                    title={`<div class="three-video-heading text-4xl font-bold text-[#3a3a3a] text-center"><h2 class="thre-video-heading-title"><span class="three-video-title-text"> For every fitness level</span></h2>		</div>`}
                    description={`<div class="thre-video-sub-heading text-center text-xl"><p>From beginner to expert level classes, something for everyone</p>		</div>`}
                    bgColor="#f2f6fd"
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

