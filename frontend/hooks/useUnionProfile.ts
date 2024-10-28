"use client";

import { useState, useEffect } from "react";
import { fetchUnionProfile, fetchUnionProfiles } from "../lib/api";

export function useUnionProfile(id: string | null) {
  const [formData, setFormData] = useState({
    organizationName: "", // 団体名
    representativeName: "", // 代表者名
    prefecture: "", // 都道府県
    city: "", // 市区町村
    establishmentDate: "", // 設立年月日
    organizationOverview: "", // 組織概要
  });

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      if (id) {
        try {
          const profile = await fetchUnionProfiles(id);
          console.log("ID:", id);
          setFormData(profile);
        } catch (error) {
          setError("Profile not found. Ready to create a new one.");
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchProfileData();
  }, [id]);

  const handleChange = (e: Rect.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 住所を一つのフィールドに統合しバックエンドに渡す
    const combinedAddress = `${formData.prefecture} ${formData.city}`;
    const payload = {
      ...formData,
      address: combinedAddress, // addressとして送信
      user_id: id,
    };

    // デバッグ用ログを追加
    console.log("Combined Adress:", combinedAddress);
    console.log("Form data being sent:", {
      ...formData,
      address: combinedAddress,
    });

    try {
      const response = await fetchUnionProfile(payload);
      console.log("Profile created:", response);
      alert("プロフィールが登録されました");
    } catch (error) {
      console.error("Error:", error);
      alert("登録に失敗しました");
    }
  };

  return { formData, isLoading, error, handleChange, handleSubmit };
}
