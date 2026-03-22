
export function TitleDescriptionImage({
    bgColor = '#ffffff',
    backgroundImage = 'https://aaptiv.com/wp-content/uploads/2024/05/aaptiv-homepage-pattern.png',
    color = '#1100DB',
    title,
    description,
    imageSrc,
    contentPosition = 'center',
}: {
    title: string;
    description: string;
    bgColor?: string;
    backgroundImage?: string;
    color?: string;
    imageSrc?: string;
    contentPosition?: 'left' | 'center' | 'right';
}) {
    return (
        <section className="w-full" style={{ backgroundColor: bgColor, backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'scroll', backgroundRepeat: 'no-repeat' }}>
            <div className="max-w-6xl mx-auto p-4 p-14 md:p-20">
                <div className="p-3 text-center" style={{ color, textAlign: contentPosition }}>
                    <div className="mb-4 leading-tight pt-4">
                        <div dangerouslySetInnerHTML={{ __html: title }} />
                    </div>

                    <div className="text-lg md:text-xl leading-relaxed pt-4">
                        <div dangerouslySetInnerHTML={{ __html: description }} />
                    </div>
                </div>
                {imageSrc && (
                    <div className="my-2 mx-auto">
                        <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
                    </div>
                )}
            </div>
        </section>
    );
}