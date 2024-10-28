"use client"; // クライアントコンポーネントを指定

import React, { useParams } from "next/navigation";
import UnionProfileForm from "../../../../../components/Profile/UnionProfileForm";
import { useUnionProfile } from "../../../../../hooks/useUnionProfile";

// import { fetchUnionProfile } from "../../../../lib/api";

export default function UnionProfilePage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  console.log("ID", id);

  const { formData, error, handleChange, handleSubmit } = useUnionProfile(id);

  if (error) {
    console.log("error", error);
  }

  return (
    <>
      <h1>団体プロフィール登録</h1>
      <UnionProfileForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
}
