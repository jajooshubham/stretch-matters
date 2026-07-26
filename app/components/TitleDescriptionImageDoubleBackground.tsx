export function TitleDescriptionImageDoubleBackground({
    title,
    description,
    imageUrl,
    imageAlt = "Background Image",
    bgColorLeft = "#ffffff",
    bgColorRight = "#1100db",
    backgroundImage ,
    buttonLink,
    buttonText,
    buttonColor,
    buttonTextColor
}: {
    title: string;
    description: string;
    imageUrl: string;
    imageAlt?: string;
    showNavbar?: boolean;
    bgColorLeft?: string;
    bgColorRight?: string;
    backgroundImage?: string;
    buttonLink?: string;
    buttonText?: string;
    buttonColor?: string;
    buttonTextColor?: string;
}) {
    return (
        <section
            className="relative flex items-center justify-center section-double-bg-mobile"
            style={{
                backgroundColor: bgColorLeft,
            }}
        >
            <div className="w-full mx-auto px-4 md:px-16 lg:px-30">
                <div className="max-w-6xl mx-auto p-4 md:p-8">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                        {/* Left Side - Content */}
                        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
                            <div className="pr-0 md:pr-20">
                                <div className="mb-3 md:mb-4 leading-tight">
                                    <div
                                        className="pt-3 md:pt-4"
                                        dangerouslySetInnerHTML={{ __html: title }}
                                    />
                                </div>
                                <div className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 leading-relaxed">
                                    <div
                                        className="pt-3 md:pt-4"
                                        dangerouslySetInnerHTML={{ __html: description }}
                                    />
                                </div>
                                {buttonText && (
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                        <a
                                            href={buttonLink}
                                            className="px-8 py-4 md:px-12 lg:px-16 md:py-5 lg:py-6 rounded-full text-sm md:text-base lg:text-lg font-semibold transition-all hover:shadow-lg text-center"
                                            style={{
                                                backgroundColor: buttonColor,
                                                color: buttonTextColor,
                                            }}
                                        >
                                            {buttonText}
                                        </a>
                                    </div>
                                )}
                            </div>

                        </div>
                        {/* Right Side - Image (Desktop only) */}
                        <div className="hidden md:flex justify-center items-center">
                            <div className="relative w-full pl-0 md:pl-12 lg:pl-20 py-6 md:py-10">
                                <img
                                    src={imageUrl}
                                    alt={imageAlt}
                                    className="w-full h-auto max-w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @media (min-width: 768px) {
                    .section-double-bg-mobile {
                        background: url(${backgroundImage}) no-repeat right center, linear-gradient(90deg, ${bgColorLeft} 50%, ${bgColorRight} 0%) !important;
                        background-size: 50%, contain !important;
                    }
                }
            `}</style>
        </section>
    );
}