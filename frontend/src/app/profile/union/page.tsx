// "use client"; // クライアントコンポーネントを指定

// import React, { useState } from "react";
// import { fetchUnionProfile } from "../../../../lib/api";
// import UnionProfileForm from "../../../../components/Profile/unionProfileForm";

// export default function UnionProfilePage({
//   params,
// }: {
//   params: { id: string };
// }) {
//   const { id } = params;

//   console.log("ID", id);

//   const { formData, error, handleChange, handleSubmit } = useUnionProfile(id);

//   if (error) {
//     console.log("error", error);
//   }

//   return (
//     <>
//       <h1>団体プロフィール登録</h1>
//       <UnionProfileForm
//         formData={formData}
//         handleChange={handleChange}
//         handleSubmit={handleSubmit}
//       />
//     </>
//   );
// }
