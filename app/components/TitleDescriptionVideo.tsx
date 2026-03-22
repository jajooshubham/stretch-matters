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
                    className="" 
                    style={{ color, textAlign: contentPosition }}
                >
                    <h2 className="text-3xl font-bold mb-6" style={{ color }}>
                        {title}
                    </h2>
                    <div dangerouslySetInnerHTML={{ __html: description }} />
                </div>

                {videoSrc && (
                    <div className="my-4 mx-auto">
                        <video
                            src={videoSrc}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                )}
            </div>
        </section>
    );
}