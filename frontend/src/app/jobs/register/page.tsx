"use client";

import { useEffect, useState } from "react";
import { fetchJobPosting } from "../../../../lib/api";

export default function JobPostingForm() {
  const [formData, setFormData] = useState({

    union_profile_id: "696d86cc-c28d-4853-bcbe-fb812acdc350",

    title: "",
    description: "",
    location: "",
    salary: "",
    is_resume_required: false,
    is_work_history_required: false,
    is_photo_required: false,
  });
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchUnionProfileId = async () => {
      try {
        const response = await fetch("/api/union-profile"); // APIエンドポイントを適切に設定
        const data = await response.json();
        setFormData((prev) => ({ ...prev, union_profile_id: data.id })); // 取得したIDをフォームデータにセット
      } catch (err) {
        setMessage("ユニオンプロフィールIDの取得中にエラーが発生しました。");
      }
    };

    fetchUnionProfileId();
  }, []); // コンポーネントの初回マウント時にプロフィールIDを取得

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {

      await fetchJobPosting(formData); // API関数を呼び出して求人を登録
      setStatus("success");
      setMessage("求人が正常に登録されました");
      setFormData({
        union_profile_id: "",
        title: "",
        description: "",
        location: "",
        salary: "",
        is_resume_required: false,
        is_work_history_required: false,
        is_photo_required: false,
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
          <h1 className="text-2xl font-bold text-[#2e8b57]">シニア向け求人登録</h1>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#2e8b57]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label htmlFor="union_profile_id" className="block text-sm font-medium text-gray-700 mb-1">団体ID</label>
            <input
              id="union_profile_id"
              name="union_profile_id"
              value={formData.union_profile_id}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-[#2e8b57] shadow-sm focus:border-[#2e8b57] focus:ring focus:ring-[#3da577] focus:ring-opacity-50 bg-[#ecf7f2] text-black placeholder-gray-500"
            />
          </div>
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">募集求人のタイトル</label>
            <input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-[#2e8b57] shadow-sm focus:border-[#2e8b57] focus:ring focus:ring-[#3da577] focus:ring-opacity-50 bg-[#ecf7f2] text-black placeholder-gray-500"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">詳細</label>
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
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">場所</label>
            <input
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-[#2e8b57] shadow-sm focus:border-[#2e8b57] focus:ring focus:ring-[#3da577] focus:ring-opacity-50 bg-[#ecf7f2] text-black placeholder-gray-500"
            />
          </div>
          <div>
            <label htmlFor="salary" className="block text-sm font-medium text-gray-700 mb-1">給与</label>
            <input
              id="salary"
              name="salary"
              type="number"
              value={formData.salary}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-[#2e8b57] shadow-sm focus:border-[#2e8b57] focus:ring focus:ring-[#3da577] focus:ring-opacity-50 bg-[#ecf7f2] text-black placeholder-gray-500"
            />
          </div>
          <div className="mt-4">
            <p className="text-sm font-medium text-gray-700 mb-2">提出を必須にする場合はチェックを入れてください</p>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="requireResume"
                  checked={formData.requireResume}
                  onChange={handleChange}
                  className="mr-2"
                />
                履歴書
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="requireWorkHistory"
                  checked={formData.requireWorkHistory}
                  onChange={handleChange}
                  className="mr-2"
                />
                職務経歴書
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="requirePhoto"
                  checked={formData.requirePhoto}
                  onChange={handleChange}
                  className="mr-2"
                />
                顔写真
              </label>
            </div>
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
          <div className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">成功:</strong>
            <span className="block sm:inline"> {message}</span>
          </div>
        )}
        {status === "error" && (
          <div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">エラー:</strong>
            <span className="block sm:inline"> {message}</span>
          </div>
        )}
      </div>
    </div>
  );
}
