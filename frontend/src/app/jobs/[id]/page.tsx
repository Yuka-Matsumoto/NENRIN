'use client';

import React from "react";
import { useParams, useRouter } from "next/navigation"; // useRouter をインポート
import { useJob } from "../../../../hooks/useJobs"; // useJob フックをインポート

const JobDetailPage = () => {
  const { id } = useParams(); // useParams で ID を取得
  const { job, loading, error } = useJob(id); // ID に基づいて求人情報を取得
  const router = useRouter(); // useRouter フックを使用

  const handleApplyClick = () => {
    // 「応募する」ボタンをクリックしたら応募フォームページに遷移
    router.push(`/senior-applications/${id}`); // jobId を含むURLに遷移
  };

  if (loading) return <p>Loading...</p>; // ローディング中の表示
  if (error) return <p>{error}</p>; // エラーがあれば表示
  if (!job) return <p>No job found</p>; // 求人が見つからない場合

  return (
    <div>
      <h1>{job.title}</h1>
      <p>{job.description}</p>
      <p>Location: {job.location}</p>
      <p>Salary: {job.salary}</p>
      <p>Status: {job.status}</p>
      <p>Created at: {new Date(job.created_at).toLocaleDateString()}</p>
      <p>Updated at: {new Date(job.updated_at).toLocaleDateString()}</p>

      {/* 応募ボタン */}
      <button onClick={handleApplyClick}>応募する</button>
    </div>
  );
};

export default JobDetailPage;
