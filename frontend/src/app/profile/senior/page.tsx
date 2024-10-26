//senior/[id]/page.tsxへ移行

// "use client";

// import React, { useEffect, useState } from "react";
// import ProfileForm from "../../../../components/Profile/ProfileForm";
// import { fetchSeniorProfile } from "../../../../lib/api";

// export default function SeniorProfile() {
//   const [formData, setFormData] = useState({
//     name: "",
//     prefecture: "",
//     city: "",
//     age: "",
//     gender: "",
//     background: "",
//     qualifications: "",
//     industry: "", // 業種を追加
//     job_title: "", // 職種を追加
//     years_of_experience: "", // 経験年数を追加
//     currently_employed: "", // 現在仕事をしていますか？を追加
//     currently_studying: "", // 現在勉強をしていますか？を追加
//     has_hobby: "", // 趣味はありますか？を追加
//     lives_alone: "", // 一人暮らしですか？を追加
//     goes_out_once_a_week: "", // 週一日以上外出しますか？を追加
//   });

//   const [userId, setUserId] = useState("");

//   // ユーザーIDをPostgreSQLから取得する関数
//   const getCurrentUserId = async () => {
//     try {
//       const response = await fetch(`/user/${userId}`); // APIを呼び出し
//       const data = await response.json();
//       if (response.ok) {
//         return data.id; // 取得したユーザーIDを返す
//       } else {
//         console.error("ユーザーが見つかりませんでした:", data.message);
//         return null; // ユーザーが見つからなかった場合はnullを返す
//       }
//     } catch (error) {
//       console.error("エラー:", error);
//       return null; // エラーが発生した場合もnullを返す
//     }
//   };

//   useEffect(() => {
//     const fetchUserId = async () => {
//       const id = await getCurrentUserId(); // ユーザーIDを取得
//       if (id) {
//         setUserId(id); // ユーザーIDをステートに設定
//       }
//     };


//     fetchUserId();
//   }, []); // 空の依存配列で一度だけ実行


//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // 住所を一つのフィールドに統合
//     const combinedAddress = `${formData.prefecture} ${formData.city}`;

//     const payload = {
//       ...formData,
//       address: combinedAddress, // addressとして送信
//       user_id: userId, // PostgreSQLから取得したユーザーIDを使用
//     };

//     try {
//       const response = await fetchSeniorProfile(payload); // API呼び出しを実行
//       alert("プロフィールが登録されました");
//     } catch (error) {
//       console.error("Error:", error);
//       alert("登録に失敗しました");
//     }
//   };

//   return (
//     <>
//       <h1>プロフィール登録</h1>
//       <ProfileForm
//         formData={formData}
//         handleChange={handleChange}
//         handleSubmit={handleSubmit}
//       />
//     </>
//   );
// }
