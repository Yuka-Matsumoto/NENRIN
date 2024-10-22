"use client"; // クライアントコンポーネントを指定

import React, { useState } from "react";

export default function SeniorProfile() {
  const [formData, setFormData] = useState({
    name: "",
    prefecture: "",
    city: "",
    age: "",
    gender: "",
    background: "",
    qualifications: "",
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

    // 住所を一つのフィールドに統合
    const combinedAddress = `${formData.prefecture} ${formData.city}`;

    try {
      const response = await fetch(
        "http://localhost:4000/api/register-senior",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            address: combinedAddress, // addressとして送信
            career: formData.background,
            license: formData.qualifications,
          }),
        }
      );
      if (response.ok) {
        alert("プロフィールが登録されました");
      } else {
        alert("登録に失敗しました");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("エラーが発生しました");
    }
  };

  return (
    <>
      <h1>プロフィール登録</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name">名前</label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="prefecture">都道府県</label>
          <input
            id="prefecture"
            name="prefecture"
            value={formData.prefecture}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="city">市区町村</label>
          <input
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="age">年齢</label>
          <input
            id="age"
            name="age"
            type="number"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="gender">性別</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">選択してください</option>
            <option value="male">男性</option>
            <option value="female">女性</option>
            <option value="other">その他</option>
          </select>
        </div>
        <div>
          <label htmlFor="background">経歴</label>
          <textarea
            id="background"
            name="background"
            value={formData.background}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="qualifications">資格</label>
          <textarea
            id="qualifications"
            name="qualifications"
            value={formData.qualifications}
            onChange={handleChange}
          />
        </div>
        <button type="submit">登録</button>
      </form>
    </>
  );
}
