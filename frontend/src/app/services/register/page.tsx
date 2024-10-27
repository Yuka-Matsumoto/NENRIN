"use client";

import { useState } from "react";
import { fetchServicePosting } from "../../../../lib/api";

export default function ServicePostingForm() {
  const [formData, setFormData] = useState({
    senior_profile_id: "", // シニアプロフィールIDを追加
    name: "", // サービス名
    category: "", // サービスカテゴリ
    description: "", // サービス詳細
    price: "", // サービス価格
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // API関数を呼び出し
      await fetchServicePosting(formData);
      setStatus("success");
      setMessage("サービスが正常に登録されました");
      setFormData({
        senior_profile_id: "",
        name: "",
        category: "",
        description: "",
        price: "",
      });
    } catch (error) {
      setStatus("error");
      setMessage("エラーが発生しました。もう一度お試しください。");
    }
  };

  return (
    <div className="min-h-screen bg-[#e6f3ef] p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-[#2e8b57]">サービス登録</h1>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#2e8b57]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="senior_profile_id" className="block text-sm font-medium text-gray-700 mb-1">シニアプロフィールID</label>
              <input
                id="senior_profile_id"
                name="senior_profile_id"
                value={formData.senior_profile_id}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-[#2e8b57] shadow-sm focus:border-[#2e8b57] focus:ring focus:ring-[#3da577] focus:ring-opacity-50 bg-[#ecf7f2] text-black placeholder-gray-500"
              />
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">サービス名</label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                maxLength={100}
                className="mt-1 block w-full rounded-md border-[#2e8b57] shadow-sm focus:border-[#2e8b57] focus:ring focus:ring-[#3da577] focus:ring-opacity-50 bg-[#ecf7f2] text-black placeholder-gray-500"
              />
            </div>
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">カテゴリ</label>
            <input
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-[#2e8b57] shadow-sm focus:border-[#2e8b57] focus:ring focus:ring-[#3da577] focus:ring-opacity-50 bg-[#ecf7f2] text-black placeholder-gray-500"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">サービスの詳細内容</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={4}
              className="mt-1 block w-full rounded-md border-[#2e8b57] shadow-sm focus:border-[#2e8b57] focus:ring focus:ring-[#3da577] focus:ring-opacity-50 bg-[#ecf7f2] text-black placeholder-gray-500"
            />
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">サービスの価格</label>
            <input
              id="price"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              required
              min="0"
              step="1"
              placeholder="円"
              className="mt-1 block w-full rounded-md border-[#2e8b57] shadow-sm focus:border-[#2e8b57] focus:ring focus:ring-[#3da577] focus:ring-opacity-50 bg-[#ecf7f2] text-black placeholder-gray-500"
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-[#2e8b57] hover:bg-[#236b44] text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
          >
            {status === "loading" ? "送信中..." : "登録"}
          </button>
        </form>
        {status === "success" && (
          <div className="mt-4 text-green-600">
            <strong>成功:</strong> {message}
          </div>
        )}
        {status === "error" && (
          <div className="mt-4 text-red-500">
            <strong>エラー:</strong> {message}
          </div>
        )}
      </div>
    </div>
  );
}
