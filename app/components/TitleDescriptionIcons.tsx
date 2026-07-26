export function TitleDescriptionIcons({
  bgColor = '#ffffff',
  backgroundImage ,
  color = '#1100DB',
  title,
  description,
  icons,
}: {
  bgColor?: string;
  backgroundImage?: string;
  color?: string;
  title: string;
  description: string;
  icons: { src: string; alt: string, href: string, textColor: string, titleColor: string, bgColor: string, title: string, text: string }[];
}) {
  return (
    <section className="w-full" style={{ backgroundColor: bgColor, backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'scroll', backgroundRepeat: 'no-repeat' }}>
      <div className="max-w-5xl mx-auto p-4 md:p-16 lg:p-24">
        <div className="text-center" style={{ color }}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6" style={{ color }}>{title}</h2>
          <p className="mb-4 md:mb-6 text-base md:text-xl lg:text-2xl" style={{ color }}>{description}</p>
          <div className="flex flex-wrap md:flex-nowrap justify-around gap-6 md:gap-8 mt-6 md:mt-8">
            {icons.map((icon, index) => (
              <div key={index} className="flex flex-col items-center w-[40%] md:w-[25%]">
                <img src={icon.src} alt={icon.alt} className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" />
                {<h4 className="text-sm md:text-base lg:text-lg font-semibold my-1 md:my-2" style={{ color: icon.titleColor }}>{icon.title}</h4>}
                {icon.text != '' ? <p className="text-xs md:text-sm my-2 md:my-4" style={{ color: icon.textColor }}>{icon.text}</p> :
                  <a href={icon.href} className="text-xs md:text-sm mt-2 px-4 py-2 md:px-6 md:py-3 rounded-full font-medium transition-all" style={{ backgroundColor: icon.bgColor, color: icon.textColor }} >
                    {icon.alt}
                  </a>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}