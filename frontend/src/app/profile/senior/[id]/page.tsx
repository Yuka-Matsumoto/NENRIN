"use client";

import { useParams } from "next/navigation";
import { useSeniorProfile } from "../../../../../hooks/useSeniorProfile";
import ProfileForm from "../../../../../components/Profile/ProfileForm";
// import CustomHeader from "../../../../../components/layout/CustomHeader";
// import RootLayout from "../../../layout"; // 正しいパスでインポート

export default function SeniorProfilePage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  console.log(id);

  const { formData, error, handleChange, handleSubmit } = useSeniorProfile(id);

  if (error) {
    console.log(error);
    // You might want to handle this error more gracefully in the UI
  }

  return (
    <>
      {/* <RootLayout header={<CustomHeader />}> */}
      {/* <h1>プロフィール登録</h1> */}
      <ProfileForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {/* </RootLayout> */}
    </>

  );
}
