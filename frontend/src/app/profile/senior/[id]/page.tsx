"use client"; // クライアントコンポーネントを指定

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ProfileForm from "../../../../../components/Profile/ProfileForm";
import {
  fetchSeniorProfile,
  fetchSeniorProfiles,
} from "../../../../../lib/api";

const SeniorProfile = () => {
  const { id } = useParams(); // useParamsでIDを取得

  console.log("Received user ID:", id);

  // IDが未定義の場合はローディングを表示
  if (!id) {
    console.log("ID is not available yet.");
    return <div>Loading...</div>;
  }

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

  // プロフィールデータを取得
  useEffect(() => {
    const fetchProfileData = async () => {
      if (id) {
        try {
          const profile = await fetchSeniorProfiles(id);
          console.log("Profile data received", profile);
          setFormData(profile);
        } catch (error) {
          console.log("Profile not found, ready to create a new one:", error);
          alert("プロフィールが見つかりませんでした。新規作成します。");
        }
      }
    };

    fetchProfileData();
  }, [id]);

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
      const response = await fetchSeniorProfile(payload);
      const data = await response.json();
      console.log("Profile created:", data); //登録完了メッセージを表示
      alert("プロフィールが登録されました");
    } catch (error) {
      console.log("Error:", error); //エラーメッセージを表示
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
};

export default SeniorProfile;
