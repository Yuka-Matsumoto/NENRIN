"use client"; // クライアントコンポーネントを指定

import React, { useState } from "react";
import ProfileForm from "../../../../components/Profile/ProfileForm";
import { fetchSeniorProfile } from "../../../../lib/api";

export default function SeniorProfile() {
  const [formData, setFormData] = useState({
    name: "",
    prefecture: "",
    city: "",
    age: "",
    gender: "",
    background: "",
    qualifications: "",
    industry: "", // 業種を追加
    job_title: "", // 職種を追加
    years_of_experience: "", // 経験年数を追加
    currently_employed: "", // 現在仕事をしていますか？を追加
    currently_studying: "", // 現在勉強をしていますか？を追加
    has_hobby: "", // 趣味はありますか？を追加
    lives_alone: "", // 一人暮らしですか？を追加
    goes_out_once_a_week: "", // 週一日以上外出しますか？を追加
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

    //　FirebaseからのユーザーIDを取得する方法を記述
    const userId = await getCurrentUserId();

    const payload = {
      ...formData,
      address: combinedAddress, // addressとして送信
      career: formData.background,
      license: formData.qualifications,
      user_id: userId,
    };

    try {
      const response = await fetchSeniorProfile(payload); // API呼び出しを実行
      alert("プロフィールが登録されました");
    } catch (error) {
      console.error("Error:", error);
      alert("登録に失敗しました");
    }
  };

  return (
    <>
      <h1>プロフィール登録</h1>
      <ProfileForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
}
