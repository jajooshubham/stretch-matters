import type { Route } from "./+types/request-demo";
import { useState } from "react";
import { getContactSupportContent, type PageContent } from "~/services/pageContent";
import { renderFooter, renderHeader, renderHero } from "~/services/pageRenderer";
import Input from "~/components/inputs/Input";
import Select from "~/components/inputs/select";

export function meta({ data }: Route.MetaArgs) {
    if (!data) return [{ title: "Stretch Matters" }];
    const content = data as PageContent;
    return [{ title: content.meta.title }, { name: "description", content: content.meta.description }];
}

export function loader() {
    return getContactSupportContent();
}

export default function ContactSupport({ loaderData: data }: Route.ComponentProps) {
    if (!data) return null;
    const content = data as PageContent;
    const [operatingDevice, setOperatingDevice] = useState('');
    const [file, setFile] = useState<File | null>(null);
    const [marketingConsent, setMarketingConsent] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ operatingDevice, file, marketingConsent });
    };

    return (
        <div>
            {renderHeader(content.header)}
            {renderHero(content.hero)}
            <main>
                <section className="min-h-screen bg-white px-4 py-12 md:py-16">

                    <div className="mx-auto">

                        {/* Form */}
                        <form className="space-y-5 border border-gray-200 rounded-xl p-6 md:p-8 bg-white" onSubmit={handleSubmit}>

                            {/* Name */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Input placeholder="First Name" />
                                <Input placeholder="Last Name" />
                            </div>

                            {/* Email */}
                            <Input type="email" placeholder="Email Address" />

                            {/* Category */}
                            <Select
                                options={[
                                    { label: "General Inquiry", value: "general" },
                                    { label: "Billing Issue", value: "billing" },
                                    { label: "Technical Support", value: "technical" },
                                    { label: "Account Help", value: "account" },
                                ]}
                            />

                            {/* Operating Device */}
                            <Select
                                options={[
                                    { label: "Select Operating Device", value: "" },
                                    { label: "Android", value: "android" },
                                    { label: "Web", value: "web" },
                                    { label: "iOS", value: "ios" },
                                    { label: "Maps Machine", value: "maps-machine" },
                                ]}
                                value={operatingDevice}
                                onChange={setOperatingDevice}
                            />

                            {/* Subject */}
                            <Input placeholder="Subject" />

                            {/* Message */}
                            <textarea
                                rows={4}
                                placeholder="How can we help you?"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400
            transition-all duration-200 outline-none
            hover:border-[#0c2746]/40 hover:bg-white
            focus:bg-white focus:border-[#0c2746] focus:ring-4 focus:ring-[#0c2746]/10 resize-none"
                            />

                            {/* File Upload */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Attach File (Optional)
                                </label>
                                <input
                                    type="file"
                                    onChange={handleFileChange}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900
            transition-all duration-200 outline-none
            hover:border-[#0c2746]/40 hover:bg-white
            focus:bg-white focus:border-[#0c2746] focus:ring-4 focus:ring-[#0c2746]/10
            file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-[#0c2746] file:text-white file:cursor-pointer"
                                />
                                {file && (
                                    <p className="text-sm text-gray-600 mt-2">
                                        Selected: {file.name}
                                    </p>
                                )}
                            </div>

                            {/* Marketing Consent */}
                            <div className="flex items-center space-x-3">
                                <input
                                    type="checkbox"
                                    id="marketing-consent"
                                    checked={marketingConsent}
                                    onChange={(e) => setMarketingConsent(e.target.checked)}
                                    className="w-5 h-5 rounded border-gray-300 text-[#0c2746] focus:ring-[#0c2746] cursor-pointer"
                                />
                                <label htmlFor="marketing-consent" className="text-sm text-gray-700 cursor-pointer">
                                    I consent to receive marketing emails and updates
                                </label>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full h-[52px] rounded-xl font-semibold text-white 
            bg-[#0c2746] hover:bg-[#081d34] 
            transition-all duration-300"
                            >
                                Submit Request
                            </button>

                        </form>

                    </div>
                </section>
            </main>
            {renderFooter(content.footer)}
        </div>
    );
}
