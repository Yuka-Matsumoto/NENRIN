// 元のコード
// 'use client';

// import React, { useEffect, useState } from "react";
// import { useParams, useRouter } from "next/navigation";
// import { useJob } from "../../../../hooks/useJobs";
// import { fetchSeniorProfileForApplication } from "../../../../lib/api"; // シニアプロフィール取得関数のインポート

// const JobDetailPage = () => {
//   const { id } = useParams();
//   const { job, loading, error } = useJob(id);
//   const router = useRouter();

//   const [profile, setProfile] = useState(null);

//   // シニアプロフィール情報の取得
//   useEffect(() => {
//     const loadProfile = async () => {
//       try {
//         const profileData = await fetchSeniorProfileForApplication("ce4ac2ba-bfe9-42de-8b67-3e1c56ce769f"); // 任意のシニアIDを使用
//         setProfile(profileData);
//       } catch (error) {
//         console.error("Failed to load senior profile", error);
//       }
//     };
//     loadProfile();
//   }, []);

//   const handleApplyClick = () => {
//     if (profile) {
//       // プロフィールデータをクエリパラメータで渡す
//       router.push({
//         pathname: `/senior-applications/${id}`,
//         query: { ...profile },
//       });
//     } else {
//       alert("プロフィール情報がありません");
//     }
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;
//   if (!job) return <p>No job found</p>;

//   return (
//     <div>
//       <h1>{job.title}</h1>
//       <p>{job.description}</p>
//       <p>Location: {job.location}</p>
//       <p>Salary: {job.salary}</p>
//       <p>Status: {job.status}</p>
//       <p>Created at: {new Date(job.created_at).toLocaleDateString()}</p>
//       <p>Updated at: {new Date(job.updated_at).toLocaleDateString()}</p>

//       {/* 応募ボタン */}
//       <button onClick={handleApplyClick}>応募する</button>
//     </div>
//   );
// };

// export default JobDetailPage;



// ーーーーーーーーーーーーーーーーーーーーーーーー



// スタイリング

'use client';

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useJob } from "../../../../hooks/useJobs";
import { fetchSeniorProfileForApplication } from "../../../../lib/api";

const JobDetailPage: React.FC = () => {
  const { id } = useParams() as { id: string };
  const { job, loading, error } = useJob(id);
  const router = useRouter();

  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const profileData = await fetchSeniorProfileForApplication("ce4ac2ba-bfe9-42de-8b67-3e1c56ce769f");
        setProfile(profileData);
      } catch (error) {
        console.error("Failed to load senior profile", error);
      }
    };
    loadProfile();
  }, []);

  // const handleApplyClick = () => {
  //   if (profile) {
  //     router.push({
  //       pathname: `/senior-applications/${id}`,
  //       query: { ...profile },
  //     });
  //   } else {
  //     alert("プロフィール情報がありません");
  //   }
  // };
  const handleApplyClick = () => {
    if (id) {
      router.push(`/senior-applications/${id}`);
    } else {
      alert("ID情報がありません");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!job) return <p>No job found</p>;

  return (
    <div className="min-h-screen bg-mint py-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-mint rounded border border-gray-200">
          <div className="p-6">
            <h1 className="text-2xl font-normal text-gray-900 mb-2">{job.title}</h1>
            <p className="text-base text-gray-900 mb-6">{job.description}</p>

            <div className="space-y-2 mb-6">
              <p className="text-base text-gray-900">勤務地：{job.location}</p>
              <p className="text-base text-gray-900">給料：{job.salary}</p>
            </div>

            <div className="space-y-2 text-sm text-gray-500 mb-6">
              <p>ステータス：{job.status}</p>
              <p>掲載日：{new Date(job.created_at).toLocaleDateString('ja-JP')}</p>
              <p>更新日：{new Date(job.updated_at).toLocaleDateString('ja-JP')}</p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => router.back()}
                className="flex-1 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
              >
                戻る
              </button>
              <button
                onClick={handleApplyClick}
                className="flex-1 px-4 py-2 text-white bg-[#4F7F58] rounded-md hover:bg-[#446b4c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4F7F58] transition-colors"
              >
                この求人に応募する
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailPage;
