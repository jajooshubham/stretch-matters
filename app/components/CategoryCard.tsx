export function CategoryCard({
    bgColor = '#1100DB',
    backgroundImage = 'https://aaptiv.com/wp-content/uploads/2024/05/aaptiv-homepage-pattern.png',
    color = '#ffffff',
    title,
    description,
    categories,
    cardsPerRow = 2, // default for desktop
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
            <div className="max-w-6xl mx-auto p-4 md:p-20">
                <div className="text-center" style={{ color }}>
                    <h2 className="text-4xl font-bold mb-6 category-title">{title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: description }} />

                    {/* Cards Grid */}
                    <div className="mt-10 grid gap-6
                          grid-cols-1
                          sm:grid-cols-1
                          md:grid-cols-2
                          lg:grid-cols-[repeat(var(--cards-per-row),_minmax(0,_1fr))]"
                        style={{ '--cards-per-row': cardsPerRow } as React.CSSProperties}
                    >
                        {categories.map((cat, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-6 flex flex-col justify-between hover:shadow-2xl transition-shadow"
                            >
                                <div>
                                    <h3 className="text-2xl font-semibold mb-3 text-[#3a3a3a]">{cat.title}</h3>
                                    <p className="text-lg mb-4 text-[#3a3a3a]">{cat.description}</p>
                                </div>
                                <a
                                    href={cat.buttonLink}
                                    className="text-md mt-2 mx-auto px-12 py-6 rounded-full font-semibold tracking-wide transition-all hover:shadow-lg"
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