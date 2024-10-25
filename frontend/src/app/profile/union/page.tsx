"use client"; // クライアントコンポーネントを指定

import React, { useState } from "react";
import { fetchUnionProfile } from "../../../../lib/api";

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
    <>
      <h1>団体プロフィール登録</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="organizationName">団体名</label>
          <input
            id="organizationName"
            name="organizationName"
            value={formData.organizationName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="representativeName">代表者名</label>
          <input
            id="representativeName"
            name="representativeName"
            value={formData.representativeName}
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
          <label htmlFor="establishmentDate">設立年月日</label>
          <input
            id="establishmentDate"
            name="establishmentDate"
            type="date"
            value={formData.establishmentDate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="organizationOverview">組織概要</label>
          <textarea
            id="organizationOverview"
            name="organizationOverview"
            value={formData.organizationOverview}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">登録</button>
      </form>
    </>
  );
}
