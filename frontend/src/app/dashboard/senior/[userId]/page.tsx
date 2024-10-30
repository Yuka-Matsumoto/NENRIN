'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
// import DashboardButton from './SeniorDashboardButton';

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

// export default function SeniorDashboard({ params }) {
//     const router = useRouter();
//     const { userId } = params; // URLからuserIdを取得

//     const handleButtonClick = (path) => {
//         router.push(path); // ページ遷移
//     };

//     return (
//         <div className="min-h-screen bg-[#e6f3ef]">
//             <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//                 <div className="bg-white rounded-lg shadow-md p-6 md:p-8 lg:p-10">
//                     <div className="flex justify-between items-center mb-8">
//                         <h2 className="text-3xl font-bold text-teal-600">Dashboard</h2>
//                         <UserCircleIcon />
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//                         {[
//                             { icon: FileTextIcon, text: "サービス登録", path: "/services/register" }, // 修正済み
//                             { icon: BriefcaseIcon, text: "求人を見る", path: "/jobs" },
//                             { icon: UserIcon, text: "プロフィール", path: "/profile/senior/[id]" },
//                             { icon: ListIcon, text: "サービス依頼の一覧", path: "/services/requests" },
//                             { icon: ListIcon, text: "応募求人の一覧", path: "/jobs/applications" },
//                         ].map((item, index) => (
//                             <button
//                                 key={index}
//                                 onClick={() => handleButtonClick(item.path)}
//                                 className="flex items-center justify-center p-4 bg-white border-2 border-teal-600 text-[#2e8b57] rounded-lg shadow-sm hover:bg-[#e6f3ef] transition-all duration-200"
//                             >
//                                 <item.icon />
//                                 <span className="text-lg font-semibold ml-2">{item.text}</span>
//                             </button>
//                         ))}
//                     </div>
//                 </div>
//             </main>
//         </div>
//     );
// }


// import Header from './Header'; // Headerコンポーネントのインポート

export default function SeniorDashboard({ params }) {
    const router = useRouter();
    const { userId } = params; // URLからuserIdを取得

    const handleButtonClick = (path) => {
        router.push(path); // ページ遷移
    };

    const buttonItems = [
        { icon: FileTextIcon, text: "サービス登録", path: "/services/register" },
        { icon: BriefcaseIcon, text: "求人を見る", path: "/jobs" },
        { icon: UserIcon, text: "プロフィール", path: `/profile/senior/${userId}` },
        { icon: ListIcon, text: "サービス依頼の一覧", path: "/services/requests" },
        { icon: ListIcon, text: "応募求人の一覧", path: "/jobs/applications" },
    ];

    return (
        <div className="min-h-screen bg-[#e6f3ef]">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8 lg:p-10">
                    {/* <Header title="Dashboard" icon={UserCircleIcon} /> カスタムヘッダー */}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {buttonItems.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => handleButtonClick(item.path)}
                                className="flex items-center justify-center p-4 bg-white border-2 border-teal-600 text-[#2e8b57] rounded-lg shadow-sm hover:bg-[#e6f3ef] transition-all duration-200"
                            >
                                <item.icon />
                                <span className="text-lg font-semibold ml-2">{item.text}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
