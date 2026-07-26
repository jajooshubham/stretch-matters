import { useState } from "react";

export function Features({
  bgColor = '#ffffff',
  backgroundImage ,
  color = '#1100DB',
  title,
  description,
  features,
}: {
  bgColor?: string;
  backgroundImage?: string;
  color?: string;
  title: string;
  description: string;
  features: { title: string; description: string, image: string }[];
}) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(0);
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section className="w-full" style={{ backgroundColor: bgColor, backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'scroll', backgroundRepeat: 'no-repeat' }}>
      <div className="max-w-6xl mx-auto py-10 px-4 md:p-20">
        <div className="p-3 text-center" style={{ color }}>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 features-title" style={{ color }}>{title}</h2>
          <div dangerouslySetInnerHTML={{ __html: description }} />
          <div className="mt-4 md:mt-6 space-y-4">
            <div className="max-w-6xl mx-auto p-2 md:p-6">

              <div className="grid md:grid-cols-[60%_40%] gap-6 md:gap-10">

                {/* LEFT SERVICES */}
                <div className="space-y-5 md:space-y-6">
                  {features.map((feature, index) => (
                    <Feature
                      key={index}
                      {...feature}
                      isOpen={open === index}
                      isHovered={hoverIndex === index}
                      onToggle={() => toggle(index)}
                      onMouseEnter={() => {
                        setActiveIndex(index);
                        setHoverIndex(index);
                      }}
                    />
                  ))}
                </div>
                <div className="hidden md:block">
                  <img
                    src={features[activeIndex]?.image}
                    className="w-full h-auto max-w-full object-cover rounded-xl transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  image,
  isOpen,
  isHovered,
  onToggle,
  onMouseEnter,
}: {
  title: string;
  description: string;
  image: string;
  isOpen: boolean;
  isHovered: boolean;
  onToggle: () => void;
  onMouseEnter: () => void;
}) => {

  const isHighlight = isOpen || isHovered;

  const activeStyle = {
    backgroundColor: isHighlight ? "#0066FF" : "#ffffff",
    border: isHighlight ? "1.9px solid #0066FF" : "1.9px solid #DCE6F2",
    titleColor: isHighlight ? "#ffffff" : "#0C2746",
    descriptionColor: isHighlight ? "#ffffff" : "#6d7073",
  };

  return (
    <div className="rounded-lg overflow-hidden">

      <button
        className="w-full p-3 md:p-5 text-left transition-all duration-300"
        style={{ backgroundColor: activeStyle.backgroundColor, border: activeStyle.border }}
        onMouseEnter={() => {
          if (window.innerWidth >= 768) {
            onMouseEnter();
          }
        }}
        onClick={() => {
          if (window.innerWidth < 768) {
            onToggle();
          }
        }}
      >
        <div className="flex items-center justify-between gap-3 mb-2">
          <span
            className="font-bold text-base md:text-xl"
            style={{ color: activeStyle.titleColor }}
          >
            {title}
          </span>

          <span
            className="md:hidden text-lg font-bold flex-shrink-0"
            style={{ color: activeStyle.titleColor }}
          >
            {isOpen ? "−" : "+"}
          </span>
        </div>

        <div
          className="text-xs md:text-sm text-left"
          style={{ color: activeStyle.descriptionColor }}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </button>

      {/* MOBILE COLLAPSIBLE */}
      <div
        className={`md:hidden transition-all duration-300 ${isOpen ? "max-h-96 p-3 md:p-4" : "max-h-0 overflow-hidden"
          }`}
      >
        <img src={image} className="rounded-lg mb-3 w-full h-auto max-w-full" />

        <div
          className="text-gray-500 text-sm"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
};