
export function TitleDescriptionImage({
    bgColor = '#ffffff',
    backgroundImage ,
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
            <div className="max-w-6xl mx-auto p-4 md:p-14 lg:p-20">
                {title || description ? (
                    <div className="p-3 text-center md:text-left" style={{ color, textAlign: contentPosition }}>
                        {title && (
                            <div className="mb-3 md:mb-4 leading-tight pt-3 md:pt-4">
                                <div dangerouslySetInnerHTML={{ __html: title }} />
                            </div>
                        )}

                        <div className="text-base md:text-lg lg:text-xl leading-relaxed pt-3 md:pt-4">
                            <div dangerouslySetInnerHTML={{ __html: description }} />
                        </div>
                    </div>
                ) : null}
                {imageSrc && (
                    <div className="my-2 mx-auto">
                        <img src={imageSrc} alt={title} className="w-full h-auto max-w-full object-cover" />
                    </div>
                )}
            </div>
        </section>
    );
}