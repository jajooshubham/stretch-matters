import { useEffect, useState } from "react";

export function TitleDescriptionAnimation({
  title,
  description,
  words,
  interval = 2000,
  bgColor
}: {
  title: string;
  description: string;
  words: string[];
  interval?: number;
  bgColor: string
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto p-4 md:p-14 lg:p-20">

        <div className="rounded-2xl py-20 text-center space-y-6" style={{
          backgroundColor: bgColor,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll',
          backgroundRepeat: 'no-repeat'
        }}
        >

          {/* Title */}
          <div className="text-2xl md:text-4xl font-medium text-[#3a3a3a]">
            {title}
          </div>

          {/* Animated Text */}
          <div className="text-2xl md:text-4xl font-bold text-[#1100DB] transition-all duration-500">
            {words[index]}
          </div>

          {/* Description */}
          <div className="text-xl md:text-2xl text-[#3a3a3a] mx-20">
            {description}
          </div>

        </div>
      </div>
    </section>
  );
}