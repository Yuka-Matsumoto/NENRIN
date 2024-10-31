"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { fetchSeniorProfileForApplication } from "../../../../lib/api"; // シニアプロフィール取得関数のインポート
import { fetchJobPosting } from "../../../../../lib/api";
import { useJob } from "../../../../../hooks/useJobs";

export default function JobPostingPage({ params }: { params: { id: string } }) {
  const { id } = params;
  console.log("ID:", id);

  const { job, loading, error } = useJob(id);
  const router = useRouter();

  const [profile, setProfile] = useState(null);

  // シニアプロフィール情報の取得
  useEffect(() => {
    const loadProfile = async () => {
      try {
        const profileData = await fetchJobPosting(
          "ce4ac2ba-bfe9-42de-8b67-3e1c56ce769f"
        ); // 任意のシニアIDを使用
        setProfile(profileData);
      } catch (error) {
        console.error("Failed to load senior profile", error);
      }
    };
    loadProfile();
  }, []);

  const handleApplyClick = () => {
    if (profile) {
      // プロフィールデータをクエリパラメータで渡す
      router.push({
        pathname: `/senior-applications/${id}`,
        query: { ...profile },
      });
    } else {
      alert("プロフィール情報がありません");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!job) return <p>No job found</p>;

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
}
