import type React from "react";

type InputProps = {
    type?: string;
    placeholder: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({ type = "text", placeholder, value, onChange }) => (
    <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 rounded-lg border border-gray-200 
    bg-gray-50 text-gray-900 placeholder-gray-400
    focus:bg-white focus:border-[#0c2746] focus:ring-2 focus:ring-[#0c2746]/20
    hover:border-gray-300
    transition duration-200 outline-none shadow-sm"
    />
);

export default Input;
