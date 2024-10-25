'use client';

import React from "react";
import { useParams } from "next/navigation"; // useParams をインポート
import { useJob } from "../../../../hooks/useJobs"; // useJob フックをインポート

const JobDetailPage = () => {
  const { id } = useParams(); // useParams で ID を取得
  const { job, loading, error } = useJob(id); // ID に基づいて求人情報を取得

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
    </div>
  );
};

export default JobDetailPage;
