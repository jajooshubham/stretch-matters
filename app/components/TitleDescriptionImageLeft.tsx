export function TitleDescriptionImageLeft({
    heading,
    title,
    description,
    imageUrl,
    imageAlt = "Background Image",
    bgColor = "#0e2948",
    backgroundImage = "https://aaptiv.com/wp-content/uploads/2024/05/aaptiv-pattern-bg.png",
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
            <div className="w-full mx-auto px-30">
                <div className="max-w-6xl mx-auto p-8">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-16 items-center">
                        {/* Right Side - Image (Hidden on Desktop) */}
                        <div className="hidden md:flex">
                            <div className="relative w-full py-20">
                                <img
                                    src={imageUrl}
                                    alt={imageAlt}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        {/* Left Side - Content */}
                        <div className="flex flex-col justify-center min-w-md">
                            <div className="pr-20 text-left">
                                <h3 className="text-2xl font-medium md:text-left">{heading}</h3>
                                <div className="mb-4 leading-tight">
                                    <div
                                        className="pt-4"
                                        dangerouslySetInnerHTML={{ __html: title }}
                                    />
                                </div>
                                <div className="text-lg md:text-xl mb-8 leading-relaxed max-w-md">
                                    <div
                                        className="pt-4"
                                        dangerouslySetInnerHTML={{ __html: description }}
                                    />
                                </div>

                                {buttonText && (
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <a
                                            href={buttonLink}
                                            className="px-8 py-3 rounded-full font-semibold transition-all hover:shadow-lg text-center"
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
                        {/* Right Side - Image (Hidden on Mobile) */}
                        <div className="md:hidden flex justify-center items-center">
                            <div className="relative w-full pl-20 py-10">
                                <img
                                    src={imageUrl}
                                    alt={imageAlt}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}