
export function TitleDescriptionButton({
    heading,
    bgColor = '#ffffff',
    backgroundImage = 'https://aaptiv.com/wp-content/uploads/2024/05/aaptiv-homepage-pattern.png',
    color = '#1100DB',
    title,
    description,
    buttonText,
    buttonColor = '#14E25A',
    buttonTextColor = '#000000',
    onButtonClick }: {
        heading?: string;
        title: string;
        description: string;
        buttonText: string;
        onButtonClick: () => void;
        bgColor?: string;
        backgroundImage?: string;
        color?: string;
        buttonColor?: string;
        buttonTextColor?: string;
    }) {
    return (
        <section className="w-full" style={{ backgroundColor: bgColor, backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'scroll', backgroundRepeat: 'no-repeat' }}>
            <div className="max-w-6xl mx-auto p-4 p-14 md:p-20">
                <div className="p-3 text-center" style={{ color }}>
                    <h3 className="text-2xl font-semibold text-[#1100DB]">{heading}</h3>

                    <div className="mb-4 leading-tight pt-4">
                        <div dangerouslySetInnerHTML={{ __html: title }} />
                    </div>

                    <div className="text-lg md:text-xl   leading-relaxed pt-4">
                        <div dangerouslySetInnerHTML={{ __html: description }} />
                    </div>
                    {buttonText && (
                        <button
                            onClick={onButtonClick}
                            className="px-8 py-5 rounded-full font-bold text-lg transition-all mt-5"
                            style={{ backgroundColor: buttonColor, color: buttonTextColor }}
                        >
                            {buttonText}
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
}