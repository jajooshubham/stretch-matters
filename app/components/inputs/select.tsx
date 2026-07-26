
import type React from "react";

type SelectProps = {
    options: { label: string; value: string }[];
    value?: string;
    onChange?: (value: string) => void;
};

const Select: React.FC<SelectProps> = ({ options, value, onChange }) => (
    <select
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full px-6 py-4 rounded-lg border border-gray-300 
    bg-white text-gray-700 font-medium
    focus:bg-white focus:border-[#0c2746] focus:ring-2 focus:ring-[#0c2746]/30
    hover:border-gray-400 hover:shadow-md
    transition duration-200 outline-none shadow-sm cursor-pointer
    appearance-none bg-no-repeat bg-right pr-10"
        style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%230c2746' d='M1 1l5 5 5-5'/%3E%3C/svg%3E")`,
            backgroundPosition: 'right 1rem center',
        }}
    >
        {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
                {opt.label}
            </option>
        ))}
    </select>
);

export default Select;