import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Input from "./inputs/Input";
import Select from "./inputs/select";
import Textarea from "./inputs/textarea";

interface RequestDemoModalProps {
    isOpen: boolean;
    onClose: () => void;
    defaultForWhom?: 'myself' | 'organisation';
}

export default function RequestDemoModal({ isOpen, onClose, defaultForWhom }: RequestDemoModalProps) {
    const navigate = useNavigate();
    const [forWhom, setForWhom] = useState<'myself' | 'organisation'>(defaultForWhom || 'myself');
    const [myselfOption, setMyselfOption] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [workEmail, setWorkEmail] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [companySize, setCompanySize] = useState('');

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            // Reset form when modal opens with a defaultForWhom value
            if (defaultForWhom) {
                setForWhom(defaultForWhom);
            }
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen, defaultForWhom]);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Handle redirect for "For myself" option
        if (forWhom === 'myself') {
            if (myselfOption === 'contact-support') {
                navigate('/contact-support');
                onClose();
            } else if (myselfOption === 'refer-hr') {
                navigate('/employee-referral');
                onClose();
            }
            return;
        }

        // Handle form submission for "For my organisation" option
        console.log({ forWhom, firstName, lastName, workEmail, companyName, jobTitle, companySize });
        onClose();
    };

    return (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fadeIn" />

            {/* Modal Card */}
            <div
                className="relative w-full max-w-lg rounded-2xl shadow-2xl p-6 md:p-10 animate-scaleIn max-h-[90vh] overflow-y-auto bg-[#0e2948]"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition text-gray-500 hover:text-gray-800"
                    aria-label="Close modal"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <h3 className="text-2xl font-bold text-[#0c2746] mb-2">
                    Book a Demo
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                    Fill out the form and our team will get back to you shortly.
                </p>

                <form className="space-y-4" onSubmit={handleSubmit}>
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
                            {/* Common fields for organisation option */}
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

                            {/* Organisation specific fields */}
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
                        </>
                    )}

                    <button
                        type="submit"
                        disabled={forWhom === 'myself' && !myselfOption}
                        className="w-full bg-[#14E25A] text-[#0e2948] py-3 rounded-lg font-semibold transition duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {forWhom === 'myself' ? 'Continue' : 'Request Demo'}
                    </button>

                    <p className="text-xs text-gray-400 text-center">
                        We respect your privacy. No spam ever.
                    </p>
                </form>
            </div>

            {/* Animations */}
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes scaleIn {
                    from { opacity: 0; transform: scale(0.95) translateY(10px); }
                    to { opacity: 1; transform: scale(1) translateY(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.2s ease-out forwards;
                }
                .animate-scaleIn {
                    animation: scaleIn 0.25s ease-out forwards;
                }
            `}</style>
        </div>
    );
}
