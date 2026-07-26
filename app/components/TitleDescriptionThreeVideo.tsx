import { useEffect, useRef, useState } from "react";

export function TitleDescriptionThreeVideo({
    videos,
    heading,
    title,
    description,
    bgColor
}: {
    videos: string[];
    heading: string;
    title: string;
    description: string;
    bgColor: string;
}) {
    const [index, setIndex] = useState(0);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const next = () => setIndex((prev) => (prev + 1) % videos.length);
    const prev = () => setIndex((prev) => (prev - 1 + videos.length) % videos.length);

    useEffect(() => {
        const interval = setInterval(next, 4000);
        return () => clearInterval(interval);
    }, []);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        touchEndX.current = e.changedTouches[0].screenX;

        if (touchStartX.current - touchEndX.current > 50) next();
        if (touchEndX.current - touchStartX.current > 50) prev();
    };

    return (
        <section className="w-full">
            <div className="max-w-6xl mx-auto p-4 md:p-14 lg:p-20">

                <div className="rounded-2xl pt-4" style={{
                    backgroundColor: bgColor,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'scroll',
                    backgroundRepeat: 'no-repeat'
                }}
                >
                    {/* TEXT CONTENT (TOP) */}
                    <div className="text-center mt-4 mx-auto px-4 md:px-8">
                        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-[#1100DB]">{heading}</h3>

                        <div className="mb-3 md:mb-4 leading-tight pt-3 md:pt-4">
                            <div dangerouslySetInnerHTML={{ __html: title }} />
                        </div>

                        <div className="text-base md:text-lg lg:text-xl leading-relaxed pt-3 md:pt-4">
                            <div dangerouslySetInnerHTML={{ __html: description }} />
                        </div>

                    </div>

                    {/* VIDEOS */}

                    {/* Mobile Carousel */}
                    <div
                        className="md:hidden overflow-hidden mt-4"
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{
                                transform: `translateX(-${index * 100}%)`,
                            }}
                        >
                            {videos.map((src, i) => (
                                <div key={i} className="min-w-full px-3">
                                    <video
                                        className="w-full h-auto max-w-full object-cover rounded-xl"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    >
                                        <source src={src} type="video/mp4" />
                                    </video>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Desktop Grid */}
                    <div className="hidden md:grid grid-cols-3 gap-4 md:gap-8 lg:gap-16 px-4 md:px-12 lg:px-20 pt-6 md:pt-10 pb-0">
                        {videos.map((src, i) => (
                            <div key={i}>
                                <video
                                    className="w-full h-auto max-w-full object-cover rounded-xl"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                >
                                    <source src={src} type="video/mp4" />
                                </video>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}