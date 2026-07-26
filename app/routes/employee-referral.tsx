import { getEmployeeReferralContent, type PageContent } from "~/services/pageContent";
import { renderHeader, renderFooter } from "~/services/pageRenderer";
import type { Route } from "../+types/root";
import Input from "~/components/inputs/Input";

export function meta({ data }: Route.MetaArgs) {
    if (!data) return [{ title: "Stretch Matters" }];
    const content = data as PageContent;
    return [
        { title: content.meta.title },
        { name: "description", content: content.meta.description }
    ];
}

export function loader() {
    return getEmployeeReferralContent();
}

export default function EmployeeReferral({ loaderData: data }: Route.ComponentProps) {
    if (!data) return null;
    const content = data as PageContent;

    return (
        <div>
            {renderHeader(content.header)}
            <main>
                <TitleDescriptionForm
                    heading="Employee Referral Program"
                    title="<span class='refer-heading'>Get Stretch Matters through your employer benefits</span>"
                    description="<div class='text-center md:text-left leading-relaxed'>  <p class='mt-6 text-base md:text-xl font-medium'>    With Stretch Matters stretch benefits, you’ll gain access to:  </p>  <ul class='list-disc ml-5 mt-5 space-y-3 text-xl md:text-xl leading-relaxed'>    <li>      Over 20,000 national gyms and boutique fitness studios like       <strong> Orangetheory</strong>, <strong>Club Pilates</strong>, and <strong>CycleBar</strong>.    </li>    <li>      AI-powered workout plans and 10,000+ on-demand classes across       16 fitness and wellness categories through the Stretch Matters app.    </li>    <li>      Restorative well-being content with on-demand meditation, sleep       content, and healthy recipes.    </li>  </ul></div>"
                    buttonText="Refer Now"
                    formTitle="Refer your HR team"
                />
            </main>

            {renderFooter(content.footer)}
        </div>
    );
}

export function TitleDescriptionForm({
    heading = "",
    title,
    description,
    bgColor = "#ffffff",
    backgroundImage ,
    buttonText = "Submit",
    buttonColor = "#001aff",
    buttonTextColor = "#ffffff",
    formTitle = ""
}: {
    heading: string;
    title: string;
    description: string;
    bgColor?: string;
    backgroundImage?: string;
    buttonText?: string;
    buttonColor?: string;
    buttonTextColor?: string;
    formTitle?: string;
}) {
    return (
        <section
            className="w-full"
            style={{
                backgroundColor: bgColor,
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="relative w-full mx-auto px-4 md:px-16 lg:px-24 py-16 md:py-24">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* LEFT CONTENT */}
                    <div className="text-center md:text-left">
                        <h3 className="text-sm md:text-base uppercase tracking-widest mb-4 text-[#001aff]">
                            {heading}
                        </h3>

                        <div
                            className="text-2xl md:text-4xl font-semibold leading-tight spacing-loose"
                            dangerouslySetInnerHTML={{ __html: title }}
                        />

                        <div
                            className="mt-4 text-base md:text-lg leading-relaxed max-w-xl"
                            dangerouslySetInnerHTML={{ __html: description }}
                        />
                    </div>

                    {/* RIGHT FORM */}
                    <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 text-center mx-auto">

                        <h3 className="text-2xl font-semibold text-[#000000] mb-6">
                            {formTitle}
                        </h3>

                        <form className="space-y-5">

                            <Input placeholder="Full Name" />
                            <Input type="email" placeholder="Work Email" />
                            <Input placeholder="Company Name" />
                            <Input placeholder="Name of HR" />
                            <Input placeholder="Email of HR" />

                            <div className="text-center">
                                <button
                                    onClick={() => { }}
                                    className="px-4 py-3 md:px-8 md:py-5 rounded-full font-bold text-sm md:text-lg transition-all mt-4 md:mt-5"
                                    style={{ backgroundColor: buttonColor, color: buttonTextColor }}
                                >
                                    {buttonText}
                                </button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}