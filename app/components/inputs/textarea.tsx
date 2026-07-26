
const Textarea: React.FC = () => (
    <textarea
        rows={4}
        placeholder="How can we help?"
        className="w-full px-4 py-3 rounded-lg border border-gray-200 
    bg-gray-50 text-gray-900 placeholder-gray-400
    focus:bg-white focus:border-[#0c2746] focus:ring-2 focus:ring-[#0c2746]/20
    hover:border-gray-300
    transition duration-200 outline-none shadow-sm resize-none"
    />
);

export default Textarea;