import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";
import Input from "./inputs/Input";
import Select from "./inputs/select";
import Textarea from "./inputs/textarea";

const RequestDemoForm: React.FC = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [forWhom, setForWhom] = useState<'myself' | 'organisation' | ''>('');
    const [myselfOption, setMyselfOption] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [workEmail, setWorkEmail] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [companySize, setCompanySize] = useState('');

    // Set default value based on source page
    useEffect(() => {
        const source = searchParams.get('source');
        if (source === 'employers') {
            setForWhom('organisation');
        } else if (source === 'individuals') {
            setForWhom('myself');
        }
    }, [searchParams]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Handle redirect for "For myself" option
        if (forWhom === 'myself') {
            if (myselfOption === 'contact-support') {
                navigate('/contact-support');
            } else if (myselfOption === 'refer-hr') {
                navigate('/employee-referral');
            }
            return;
        }

        // Handle form submission for "For my organisation" option
        console.log({ forWhom, firstName, lastName, workEmail, companyName, jobTitle, companySize });
    };

    return (
        <section className="min-h-screen flex items-center justify-center px-4 py-16 bg-[#f5f7fb]">
            <div className="max-w-6xl w-full grid md:grid-cols-2 rounded-3xl overflow-hidden">

                {/* Left Section */}
                <div className="p-12 flex flex-col justify-center bg-[#0c2746] text-white">
                    <h2 className="text-4xl font-bold mb-6 leading-tight">
                        Transform Your Team’s Wellness
                    </h2>

                    <p className="text-gray-300 mb-8 text-lg">
                        Book a personalized demo and discover how your organization can
                        improve employee health and engagement.
                    </p>

                    <div className="space-y-4 text-sm">
                        <div>✔ Guided fitness programs</div>
                        <div>✔ Real-time analytics</div>
                        <div>✔ Scalable for any team size</div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="p-10 md:p-14 bg-white">
                    <h3 className="text-2xl font-semibold text-[#0c2746] mb-6">
                        Book a Demo
                    </h3>

                    <form className="space-y-5" onSubmit={handleSubmit}>
                        {/* Selection for whom */}
                        <Select
                            options={[
                                { label: "Select an option", value: "" },
                                { label: "For myself", value: "myself" },
                                { label: "For my organisation", value: "organisation" },
                            ]}
                            value={forWhom}
                            onChange={(value) => setForWhom(value as 'myself' | 'organisation')}
                        />

                        {forWhom === 'myself' && (
                            <Select
                                options={[
                                    { label: "Select an option", value: "" },
                                    { label: "Contact support team", value: "contact-support" },
                                    { label: "Refer HR team", value: "refer-hr" },
                                ]}
                                value={myselfOption}
                                onChange={(value) => setMyselfOption(value)}
                            />
                        )}

                        {forWhom === 'organisation' && (
                            <>
                                {/* Name */}
                                <div className="grid grid-cols-2 gap-4">
                                    <Input
                                        placeholder="First Name"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                    <Input
                                        placeholder="Last Name"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </div>

                                <Input
                                    type="email"
                                    placeholder="Email"
                                    value={workEmail}
                                    onChange={(e) => setWorkEmail(e.target.value)}
                                />
                                <Input
                                    placeholder="Company Name"
                                    value={companyName}
                                    onChange={(e) => setCompanyName(e.target.value)}
                                />
                                <Input
                                    placeholder="Job Title"
                                    value={jobTitle}
                                    onChange={(e) => setJobTitle(e.target.value)}
                                />

                                <Select
                                    options={[
                                        { label: "Company Size", value: "" },
                                        { label: "1-50", value: "1-50" },
                                        { label: "51-200", value: "51-200" },
                                        { label: "201-500", value: "201-500" },
                                        { label: "500+", value: "500+" },
                                    ]}
                                    value={companySize}
                                    onChange={(value) => setCompanySize(value)}
                                />

                                <Textarea />
                            </>
                        )}

                        <button
                            type="submit"
                            disabled={!forWhom || (forWhom === 'myself' && !myselfOption)}
                            className="w-full bg-[#0c2746] text-white py-3 rounded-lg font-semibold hover:bg-[#081d34] transition duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {forWhom === 'myself' ? 'Continue' : 'Request Demo'}
                        </button>

                        <p className="text-xs text-gray-500 text-center">
                            We respect your privacy. No spam ever.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default RequestDemoForm;