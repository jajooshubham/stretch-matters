import { useState } from "react";

export function Faqs({
  bgColor = '#ffffff',
  backgroundImage ,
  color = '#1100DB',
  title,
  description,
  faqs,
}: {
  bgColor?: string;
  backgroundImage?: string;
  color?: string;
  title: string;
  description: string;
  faqs: { question: string; answer: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section className="w-full" style={{ backgroundColor: bgColor, backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'scroll', backgroundRepeat: 'no-repeat' }}>
      <div className="max-w-6xl mx-auto p-4 md:p-14 lg:p-20">
        <div className="p-3 text-center" style={{ color }}>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 faq-title" style={{ color }}>{title}</h2>
          <div dangerouslySetInnerHTML={{ __html: description }} />
          <div className="mt-4 md:mt-6 space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <Faq key={index} question={faq.question} answer={faq.answer} isOpen={open === index} onToggle={() => toggle(index)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


const Faq = ({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <div
      className="rounded-lg"
      style={{ boxShadow: "0px 0px 1px 2px #dce6f2", color: '#6d7073', backgroundColor: '#ffffff' }}
    >
      <button
        className="flex items-center justify-between w-full px-4 py-3 md:px-6 md:py-4 text-left"
        onClick={onToggle}
      >
        <h3 className="text-base md:text-xl">{question}</h3>

        <span className="p-1 rounded-full transition-transform duration-300 flex-shrink-0 ml-2" style={{ backgroundColor: '#f2f6fd', color: '#1100db' }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
              }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d={isOpen ? "M18 12H6" : "M12 6v6m0 0v6m0-6h6m-6 0H6"}
            />
          </svg>
        </span>
      </button>

      <div
        className={`grid transition-all duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
      >
        <div className="overflow-hidden">
          <div className="px-4 py-3 md:px-6 md:py-4 text-base md:text-xl text-left">
            <div dangerouslySetInnerHTML={{ __html: answer }} />
          </div>
        </div>
      </div>
    </div>
  );
};