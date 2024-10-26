// frontend/src/app/profile/senior/[id]/page.tsx

"use client"; // クライアントコンポーネントを指定

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProfileForm from "../../../../../components/Profile/ProfileForm";
import { fetchSeniorProfile } from "../../../../../lib/api";

const SeniorProfile = () => {
  const router = useRouter();
  const { id } = router.query;
  const [formData, setFormData] = useState({
    name: "",
    prefecture: "",
    city: "",
    age: "",
    gender: "",
    industry: "",
    job_title: "",
    years_of_experience: "",
    currently_employed: "",
    currently_studying: "",
    has_hobby: "",
    lives_alone: "",
    goes_out_once_a_week: "",
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

    const payload = {
      ...formData,
      address: combinedAddress, // addressとして送信
      user_id: id, // URLから取得したユーザーIDを使用
    };

    console.log("Submitting payload:", payload);

    try {
      const response = await fetchSeniorProfile("/register-senior", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, user_id: id }),
      });

      const data = await response.json();
      console.log("Profile created:", data); //登録完了メッセージを表示
    } catch (error) {
      console.log("Error:", error); //エラーメッセージを表示
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
};

export default SeniorProfile;
