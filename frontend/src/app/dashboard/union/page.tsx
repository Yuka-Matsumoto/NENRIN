import React from 'react'
import { UserCircle, Search, FileText, User, List, Briefcase } from 'lucide-react'

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-[#e6f3ef]">
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-[#8B4513]">NENRIN</h1>
                    <a href="/login" className="text-[#8B4513] hover:text-[#2e8b57] transition-colors duration-200">
                        LOGIN(会員の方)
                    </a>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8 lg:p-10">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-3xl font-bold text-[#2e8b57]">Dashboard</h2>
                        <UserCircle className="w-10 h-10 text-[#2e8b57]" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {[
                            { icon: FileText, text: "求人登録" },
                            { icon: User, text: "プロフィール" },
                            { icon: List, text: "依頼済みのサービス一覧" },
                            { icon: Briefcase, text: "サービスの一覧" },
                        ].map((item, index) => (
                            <button
                                key={index}
                                className="flex items-center justify-center p-4 bg-white border-2 border-[#2e8b57] text-[#2e8b57] rounded-lg shadow-sm hover:bg-[#e6f3ef] transition-all duration-200"
                            >
                                <item.icon className="w-6 h-6 mr-2" />
                                <span className="text-lg font-semibold">{item.text}</span>
                            </button>
                        ))}
                    </div>

                    <div className="relative">
                        <input
                            type="text"
                            placeholder="提供されているサービスを検索..."
                            className="w-full pl-10 pr-4 py-2 border-2 border-[#2e8b57] rounded-full focus:outline-none focus:ring-2 focus:ring-[#2e8b57] focus:border-transparent"
                        />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#2e8b57]" />
                        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#2e8b57] text-white px-4 py-1 rounded-full hover:bg-[#236b44] transition-colors duration-200">
                            検索
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}