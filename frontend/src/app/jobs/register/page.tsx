// frontend/src/app/jobs/register/page.tsx
"use client";

import { useState } from "react";
import { fetchJobPosting } from "../../../lib/api"; // API関数をインポート

export default function JobPostingForm() {
  const [formData, setFormData] = useState({
    union_profile_id: "", // union_profile_id を追加
    title: "",
    description: "",
    location: "",
    salary: "", // salary の型は string
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
      // API関数を呼び出して求人を登録
      await fetchJobPosting(formData);
      setStatus("success");
      setMessage("求人が正常に登録されました");
      setFormData({
        union_profile_id: "",
        title: "",
        description: "",
        location: "",
        salary: "",
      });
    } catch (error) {
      setStatus("error");
      setMessage("エラーが発生しました。もう一度お試しください。");
    }
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "24px",
        backgroundColor: "white",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1
        style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "24px" }}
      >
        シニア向け求人登録
      </h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "16px" }}
      >
        <div>
          <label
            htmlFor="union_profile_id"
            style={{ display: "block", marginBottom: "8px" }}
          >
            団体ID
          </label>
          <input
            id="union_profile_id"
            name="union_profile_id"
            value={formData.union_profile_id}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div>
          <label
            htmlFor="title"
            style={{ display: "block", marginBottom: "8px" }}
          >
            募集求人のタイトル
          </label>
          <input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div>
          <label
            htmlFor="description"
            style={{ display: "block", marginBottom: "8px" }}
          >
            詳細
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              minHeight: "100px",
            }}
          />
        </div>
        <div>
          <label
            htmlFor="location"
            style={{ display: "block", marginBottom: "8px" }}
          >
            場所
          </label>
          <input
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div>
          <label
            htmlFor="salary"
            style={{ display: "block", marginBottom: "8px" }}
          >
            給与
          </label>
          <input
            id="salary"
            name="salary"
            type="number" // salary を数値入力に変更
            value={formData.salary}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          style={{
            padding: "12px",
            backgroundColor: "#4caf50",
            color: "white",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
          }}
        >
          {status === "loading" ? "送信中..." : "求人を登録"}
        </button>
      </form>

      {status === "success" && (
        <div
          style={{
            marginTop: "16px",
            padding: "12px",
            backgroundColor: "#d4edda",
            color: "#155724",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <strong>成功</strong>
          <p>{message}</p>
        </div>
      )}

      {status === "error" && (
        <div
          style={{
            marginTop: "16px",
            padding: "12px",
            backgroundColor: "#f8d7da",
            color: "#721c24",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <strong>エラー</strong>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}
