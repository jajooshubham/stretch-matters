export function InfoSections({
  sections,
}: {
  sections: {
    label: string;
    title: string;
    description: string;
  }[];
}) {
  return (
    <section className="w-full py-10 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 space-y-8 md:space-y-12">

        {sections.map((item, index) => (
          <div key={index} className="text-center md:text-left">

            {/* Label */}
            <h4 className="text-xs md:text-sm font-semibold uppercase tracking-wide text-blue-600 mb-2">
              {item.label}
            </h4>

            {/* Title */}
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
              {item.title}
            </h2>

            {/* Description */}
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              {item.description}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}