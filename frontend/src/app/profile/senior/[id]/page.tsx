"use client";

import { useSearchParams } from "next/navigation";
import ProfileForm from "../../../../../components/Profile/ProfileForm";
import { useSeniorProfile } from "../../../../../hooks/useSeniorProfile";

export default function SeniorProfilePage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("sample_id");

  const { formData, isLoading, error, handleChange, handleSubmit } =
    useSeniorProfile(id);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  if (error) {
    console.log(error);
    // You might want to handle this error more gracefully in the UI
  }

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
