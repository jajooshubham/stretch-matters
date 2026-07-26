export function TitleDescriptionVideo({
    bgColor = '#ffffff',
    backgroundImage = '',
    color = '#1100DB',
    title,
    description,
    videoSrc,
    contentPosition = 'center',
}: {
    title: string;
    description: string;
    bgColor?: string;
    backgroundImage?: string;
    color?: string;
    videoSrc?: string;
    contentPosition?: 'left' | 'center' | 'right';
}) {
    return (
        <section
            className="w-full"
            style={{
                backgroundColor: bgColor,
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'scroll',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="max-w-6xl mx-auto p-4 md:p-14 lg:p-20">
                <div
                    className="text-center md:text-left"
                    style={{ color, textAlign: contentPosition }}
                >
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6" style={{ color }}>
                        {title}
                    </h2>
                    <div className="text-sm md:text-base lg:text-lg" dangerouslySetInnerHTML={{ __html: description }} />
                </div>

                {videoSrc && (
                    <div className="my-4 mx-auto">
                        <video
                            src={videoSrc}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-auto max-w-full object-cover rounded-[35px]"
                        />
                    </div>
                )}
            </div>
        </section>
    );
}