"use client";

import { useState, useEffect } from "react";
import { fetchSeniorProfiles, fetchSeniorProfile } from "../lib/api";

export function useSeniorProfile(id: string | null) {
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

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      if (id) {
        try {
          const profile = await fetchSeniorProfiles(id);
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const combinedAddress = `${formData.prefecture} ${formData.city}`;

    const payload = {
      ...formData,
      address: combinedAddress,
      user_id: id,
    };

    try {
      const response = await fetchSeniorProfile(payload);
      // const data = await response.json();
      console.log("Profile created:", response);
      alert("プロフィールが登録されました");
    } catch (error) {
      console.error("Error:", error);
      alert("登録に失敗しました");
    }
  };

  return { formData, isLoading, error, handleChange, handleSubmit };
}
