"use client"; 

import { useState } from "react";
import { fetchJobPosting } from "../../../../lib/api";

export default function JobPostingForm() {
  const [formData, setFormData] = useState({
    union_profile_id: "",
    title: "",
    description: "",
    location: "",
    salary: "",
    requireResume: false,
    requireWorkHistory: false,
    requirePhoto: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchJobPosting(formData);
    alert("求人が正常に登録されました");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* 既存のフィールド */}
      <div>
        <input
          type="checkbox"
          name="requireResume"
          checked={formData.requireResume}
          onChange={handleChange}
        />
        <label>履歴書必須</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="requireWorkHistory"
          checked={formData.requireWorkHistory}
          onChange={handleChange}
        />
        <label>職務経歴書必須</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="requirePhoto"
          checked={formData.requirePhoto}
          onChange={handleChange}
        />
        <label>顔写真必須</label>
      </div>

      <button type="submit">求人を登録</button>
    </form>
  );
}
