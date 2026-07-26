export function CategoryCard({
    bgColor = '#1100DB',
    backgroundImage ,
    color = '#ffffff',
    title,
    description,
    categories,
    cardsPerRow = 2,
}: {
    bgColor?: string;
    backgroundImage?: string;
    color?: string;
    title: string;
    description: string;
    categories: {
        title: string;
        description: string;
        buttonText: string;
        buttonLink: string;
        buttonColor?: string;
        buttonTextColor?: string;
    }[];
    cardsPerRow?: number;
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
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="max-w-6xl mx-auto p-4 md:p-14 lg:p-20">
                <div className="text-center" style={{ color }}>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 category-title">{title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: description }} />

                    {/* Cards Grid */}
                    <div className="mt-6 md:mt-10 grid gap-4 md:gap-6
                          grid-cols-1
                          md:grid-cols-2
                          lg:grid-cols-[repeat(var(--cards-per-row),_minmax(0,_1fr))]"
                        style={{ '--cards-per-row': cardsPerRow } as React.CSSProperties}
                    >
                        {categories.map((cat, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-4 md:p-6 flex flex-col justify-between items-center text-center hover:shadow-2xl transition-shadow"
                            >
                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3 text-[#3a3a3a]">{cat.title}</h3>
                                    <p className="text-base md:text-lg mb-3 md:mb-4 text-[#3a3a3a]">{cat.description}</p>
                                </div>
                                <a
                                    href={cat.buttonLink}
                                    className="text-sm md:text-md mt-2 mx-auto px-8 py-4 md:px-12 md:py-6 rounded-full font-semibold tracking-wide transition-all hover:shadow-lg"
                                    style={{
                                        backgroundColor: cat.buttonColor || bgColor,
                                        color: cat.buttonTextColor || color,
                                    }}
                                >
                                    {cat.buttonText}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}