import { useEffect, useRef, useState } from "react";

interface Section {
  id: number;
  title: string;
  description: string;
  heading: string;
  image: string;
}

export default function ScrollPageResponsive({
  bgColor = "#ffffff",
  backgroundImage = "",
  sections = [],
}: {
  bgColor?: string;
  backgroundImage?: string;
  sections?: Section[];
}) {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState<number>(1);

  // 👉 Mobile carousel state
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const next = () => setIndex((prev) => (prev + 1) % sections.length);
  const prev = () => setIndex((prev) => (prev - 1 + sections.length) % sections.length);

  // 👉 Autoplay (mobile)
  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [sections.length]);

  // 👉 Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;

    if (touchStartX.current - touchEndX.current > 50) next();
    if (touchEndX.current - touchStartX.current > 50) prev();
  };

  // 👉 Desktop scroll detection (unchanged)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute("data-id"));
            setActive(id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sectionsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="w-full"
      style={{
        backgroundColor: bgColor,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "scroll",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center">

        {/* 📱 MOBILE CAROUSEL */}
        <div
          className="md:hidden overflow-hidden w-full"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {sections.map((section) => (
              <div
                key={section.id}
                className="min-w-full px-6 py-10 flex flex-col items-center text-center"
              >
                <h3 className="text-2xl font-medium">{section.heading}</h3>
                <h2 className="text-3xl mt-3 font-bold">{section.title}</h2>
                <p className="mt-4 text-lg">{section.description}</p>

                <img
                  src={section.image}
                  alt={section.title}
                  className="mt-6 w-full rounded-xl shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* 💻 DESKTOP (UNCHANGED) */}
        <div className="hidden md:flex w-full">

          {/* LEFT CONTENT SCROLL */}
          <div className="flex flex-col w-[40%]">
            {sections.map((section, index) => (
              <div
                key={section.id}
                data-id={section.id}
                ref={(el) => { sectionsRef.current[index] = el }}
                className="h-screen px-6 flex flex-col justify-center"
              >
                <h3 className="text-2xl font-medium">{section.heading}</h3>
                <h2 className="text-3xl mt-3 font-bold">{section.title}</h2>
                <p className="mt-4 text-xl">{section.description}</p>
              </div>
            ))}
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-[60%] h-screen sticky top-0 flex items-center justify-center">
            <img
              src={sections.find((s) => s.id === active)?.image}
              alt="Active"
              className="w-[85%] rounded-xl shadow-lg transition-all duration-500"
            />
          </div>

        </div>

      </div>
    </section>
  );
}