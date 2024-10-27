"use client"; // クライアントコンポーネントを指定

import React, { useState } from "react";
import { fetchUnionProfile } from "../../../../lib/api";

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

export default function UnionProfile() {
  const [formData, setFormData] = useState({
    organizationName: "", // 団体名
    representativeName: "", // 代表者名
    prefecture: "", // 都道府県
    city: "", // 市区町村
    establishmentDate: "", // 設立年月日
    organizationOverview: "", // 組織概要
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 住所を一つのフィールドに統合しバックエンドに渡す
    const combinedAddress = `${formData.prefecture} ${formData.city}`;
    const payload = {
      ...formData,
      address: combinedAddress, // addressとして送信
      career: formData.background,
      license: formData.qualifications,
      user_id: "some-user-id", // ユーザーIDを適切に設定
    };

    // デバッグ用ログを追加
    console.log("Combined Adress:", combinedAddress);
    console.log("Form data being sent:", {
      ...formData,
      address: combinedAddress,
    });

    try {
      const response = await fetchUnionProfile(payload); // API呼び出しを実行
      alert("プロフィールが登録されました");
    } catch (error) {
      console.error("Error:", error);
      alert("登録に失敗しました");
    }
  };

  return (
    <div className="min-h-screen bg-[#e6f3ef] p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-[#2e8b57]">団体プロフィール登録</h1>
          <UserIcon className="w-6 h-6 text-[#2e8b57]" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="organizationName" className="block text-sm font-medium text-[#2e8b57]">団体名</label>
              <input
                id="organizationName"
                name="organizationName"
                value={formData.organizationName}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-[#2e8b57] shadow-sm focus:border-[#2e8b57] focus:ring focus:ring-[#3da577] focus:ring-opacity-50 bg-[#ecf7f2] text-black placeholder-gray-500"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="representativeName" className="block text-sm font-medium text-[#2e8b57]">代表者名</label>
              <input
                id="representativeName"
                name="representativeName"
                value={formData.representativeName}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-[#2e8b57] shadow-sm focus:border-[#2e8b57] focus:ring focus:ring-[#3da577] focus:ring-opacity-50 bg-[#ecf7f2] text-black placeholder-gray-500"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="prefecture" className="block text-sm font-medium text-[#2e8b57]">都道府県</label>
              <input
                id="prefecture"
                name="prefecture"
                value={formData.prefecture}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-[#2e8b57] shadow-sm focus:border-[#2e8b57] focus:ring focus:ring-[#3da577] focus:ring-opacity-50 bg-[#ecf7f2] text-black placeholder-gray-500"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="city" className="block text-sm font-medium text-[#2e8b57]">市区町村</label>
              <input
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-[#2e8b57] shadow-sm focus:border-[#2e8b57] focus:ring focus:ring-[#3da577] focus:ring-opacity-50 bg-[#ecf7f2] text-black placeholder-gray-500"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="establishmentDate" className="block text-sm font-medium text-[#2e8b57]">設立年月日</label>
              <input
                id="establishmentDate"
                name="establishmentDate"
                type="date"
                value={formData.establishmentDate}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-[#2e8b57] shadow-sm focus:border-[#2e8b57] focus:ring focus:ring-[#3da577] focus:ring-opacity-50 bg-[#ecf7f2] text-black placeholder-gray-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="organizationOverview" className="block text-sm font-medium text-[#2e8b57]">組織概要</label>
            <textarea
              id="organizationOverview"
              name="organizationOverview"
              value={formData.organizationOverview}
              onChange={handleChange}
              required
              rows={4}
              className="mt-1 block w-full rounded-md border-[#2e8b57] shadow-sm focus:border-[#2e8b57] focus:ring focus:ring-[#3da577] focus:ring-opacity-50 bg-[#ecf7f2] text-black placeholder-gray-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#2e8b57] hover:bg-[#236b44] text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200"
          >
            登録
          </button>
        </form>
      </div>
    </div>
  );
}
