'use client';

import React from "react";
import { useJob } from "../../../hooks/useJobs";

// ページコンポーネントの `params` を使用して `id` を取得
const JobDetailPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const { job, loading, error } = useJob(id);

  if (loading) return <p>Loading job details...</p>;
  if (error) return <p>{error}</p>;
  if (!job) return <p>No job found</p>;

  return (
    <div>
      <h1>{job.title}</h1>
      <p>{job.description}</p>
      <p>Location: {job.location}</p>
      <p>Salary: {job.salary}</p>
      <p>Status: {job.status}</p>
    </div>
  );
};

export default JobDetailPage;
