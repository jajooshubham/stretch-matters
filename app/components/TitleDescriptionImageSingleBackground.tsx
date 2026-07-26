export function TitleDescriptionImageSingleBackground({
    heading = "",
    title,
    description,
    imageUrl,
    imageAlt = "Background Image",
    bgColor = "#0e2948",
    backgroundImage ,
    buttonLink,
    buttonText,
    buttonColor,
    buttonTextColor
}: {
    heading: string;
    title: string;
    description: string;
    imageUrl: string;
    imageAlt?: string;
    bgColor?: string;
    backgroundImage?: string;
    buttonLink?: string;
    buttonText?: string;
    buttonColor?: string;
    buttonTextColor?: string;
}) {
    return (
        <section
            className="relative flex items-center justify-center"
            style={{
                backgroundColor: bgColor,
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="w-full mx-auto px-4 md:px-16 lg:px-30">
                <div className="max-w-6xl mx-auto p-4 md:p-8">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                        {/* Image (shown on top on mobile) */}
                        <div className="md:hidden">
                            <div className="relative w-full">
                                <img
                                    src={imageUrl}
                                    alt={imageAlt}
                                    className="w-full h-auto max-w-full object-cover"
                                />
                            </div>
                        </div>
                        {/* Left Side - Content */}
                        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
                            <div className="pr-0 md:pr-12 lg:pr-20">

                                <h3 className="text-lg md:text-xl lg:text-2xl font-medium" style={{ color: buttonColor }}>{heading}</h3>

                                <div className="mb-3 md:mb-4 leading-tight">
                                    <div
                                        className="pt-3 md:pt-4"
                                        dangerouslySetInnerHTML={{ __html: title }}
                                    />
                                </div>
                                <div className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 leading-relaxed max-w-md">
                                    <div
                                        className="pt-3 md:pt-4"
                                        dangerouslySetInnerHTML={{ __html: description }}
                                    />
                                </div>

                                {buttonText && (
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                        <a
                                            href={buttonLink}
                                            className="px-6 py-3 md:px-8 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all hover:shadow-lg text-center"
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
        </section>
    );
}