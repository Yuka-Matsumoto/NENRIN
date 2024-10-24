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
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">サービス登録</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="senior_profile_id">シニアプロフィールID</label>
          <input
            id="senior_profile_id"
            name="senior_profile_id"
            value={formData.senior_profile_id}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="name">サービス名</label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            maxLength={100}
          />
        </div>
        <div>
          <label htmlFor="category">カテゴリ</label>
          <input
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">サービスの詳細内容</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows={4}
          />
        </div>
        <div>
          <label htmlFor="price">サービスの価格</label>
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
          />
        </div>
        <button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "送信中..." : "サービスを登録"}
        </button>
      </form>
      {status === "success" && (
        <div className="mt-4">
          <strong>成功:</strong> {message}
        </div>
      )}
      {status === "error" && (
        <div className="mt-4 text-red-500">
          <strong>エラー:</strong> {message}
        </div>
      )}
    </div>
  );
}
