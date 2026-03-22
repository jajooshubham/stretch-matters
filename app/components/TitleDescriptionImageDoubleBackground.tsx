export function TitleDescriptionImageDoubleBackground({
    title,
    description,
    imageUrl,
    imageAlt = "Background Image",
    bgColorLeft = "#ffffff",
    bgColorRight = "#1100db",
    backgroundImage = "https://aaptiv.com/wp-content/uploads/2024/05/aaptiv-pattern-bg.png",
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
            className="relative flex items-center justify-center"
            style={{
                background: `url(${backgroundImage}) no-repeat center center, linear-gradient(90deg, ${bgColorLeft} 50%, ${bgColorRight} 0%)`,
                backgroundSize: "50%, contain",
                backgroundPosition: "right",
            }}
        >
            <div className="w-full mx-auto px-30">
                <div className="max-w-6xl mx-auto p-8">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4 items-center">
                        {/* Right Side - Image (Hidden on Desktop) */}
                        <div className="md:hidden">
                            <div className="relative w-full">
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
                                            className="px-16 py-6 rounded-full text-lg font-semibold transition-all hover:shadow-lg text-center"
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
                        <div className="hidden md:flex justify-center items-center">
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