import { useState, useEffect } from "react";
import { fetchJobPosting } from "../lib/api";
import { useRouter } from "next/router";

export function useJobPostingForm() {
  const router = useRouter();
  const { id } = router.query;

  const [formData, setFormData] = useState({
    union_profile_id: id || "",
    title: "",
    description: "",
    location: "",
    salary: "",
    requireResume: false,
    requireWorkHistory: false,
    requirePhoto: false,
  });

  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (id) {
      setFormData((prev) => ({ ...prev, union_profile_id: id }));
    }
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await fetchJobPosting(formData);
      setStatus("success");
      setMessage("求人が登録されました");
    } catch (error) {
      setStatus("error");
      setMessage("エラーが発生しました。もう一度お試しください。");
    }
  };

  return { formData, status, message, handleChange, handleSubmit };
}
