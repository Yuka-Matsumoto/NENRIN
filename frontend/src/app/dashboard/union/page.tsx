'use client'; // コンポーネントをクライアント側で動作させる

import React from 'react';
import { useRouter } from 'next/navigation';

const UserCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20a6 6 0 0 0-12 0" /><circle cx="12" cy="10" r="4" /><circle cx="12" cy="12" r="10" />
    </svg>
);

const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
    </svg>
);

const FileTextIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
    </svg>
);

const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
    </svg>
);

const ListIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
    </svg>
);

const BriefcaseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
);

export default function Dashboard() {
    const router = useRouter();

    const handleButtonClick = (path) => {
        router.push(path); // ページ遷移
    };

    return (
        <div className="min-h-screen bg-[#e6f3ef]">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8 lg:p-10">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-3xl font-bold text-[#2e8b57]">Dashboard</h2>
                        <UserCircleIcon />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {[
                            { icon: FileTextIcon, text: "求人登録", path: "/jobs/create" },
                            { icon: UserIcon, text: "プロフィール", path: "/profile" },
                            { icon: ListIcon, text: "依頼済みのサービス一覧", path: "/services/requests" },
                            { icon: BriefcaseIcon, text: "サービスの一覧", path: "/services" },
                        ].map((item, index) => (
                            <button
                                key={index}
                                onClick={() => handleButtonClick(item.path)}
                                className="flex items-center justify-center p-4 bg-white border-2 border-[#2e8b57] text-[#2e8b57] rounded-lg shadow-sm hover:bg-[#e6f3ef] transition-all duration-200"
                            >
                                <item.icon />
                                <span className="text-lg font-semibold ml-2">{item.text}</span>
                            </button>
                        ))}
                    </div>

                    <div className="relative">
                        <input
                            type="text"
                            placeholder="提供されているサービスを検索..."
                            className="w-full pl-10 pr-4 py-2 border-2 border-[#2e8b57] rounded-full focus:outline-none focus:ring-2 focus:ring-[#2e8b57] focus:border-transparent"
                        />
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#2e8b57]">
                            <SearchIcon />
                        </span>
                        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#2e8b57] text-white px-4 py-1 rounded-full hover:bg-[#236b44] transition-colors duration-200">
                            検索
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}