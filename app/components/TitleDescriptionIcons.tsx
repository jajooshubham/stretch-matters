export function TitleDescriptionIcons({
    bgColor = '#ffffff',
    backgroundImage = 'https://aaptiv.com/wp-content/uploads/2024/05/aaptiv-homepage-pattern.png',
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
        <div className="max-w-5xl mx-auto p-4 p-16 md:p-24">
      <div className="text-center" style={{ color }}>
        <h2 className="text-4xl font-bold mb-6" style={{ color }}>{title}</h2>
        <p className="mb-6 text-2xl" style={{ color }}>{description}</p>
        <div className="flex justify-between space-x-4 mt-8">
          {icons.map((icon, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={icon.src} alt={icon.alt} className="w-24 h-24" />
            {<h4 className="text-lg font-semibold my-2" style={{ color: icon.titleColor }}>{icon.title}</h4>}
            {icon.text != '' ? <p className="text-sm my-4" style={{ color: icon.textColor }}>{icon.text}</p> : 
            <a href={icon.href} className="text-sm mt-2 px-6 py-3 rounded-full font-medium transition-all" style={{ backgroundColor: icon.bgColor, color: icon.textColor }} >
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