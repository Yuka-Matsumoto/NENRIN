import React from 'react';

export default function DashboardButton({ icon: Icon, text, path, onClick }) {
    return (
        <button
            onClick={() => onClick(path)}
            className="flex items-center justify-center p-4 bg-white border-2 border-teal-600 text-[#2e8b57] rounded-lg shadow-sm hover:bg-[#e6f3ef] transition-all duration-200"
        >
            <Icon />
            <span className="text-lg font-semibold ml-2">{text}</span>
        </button>
    );
}
