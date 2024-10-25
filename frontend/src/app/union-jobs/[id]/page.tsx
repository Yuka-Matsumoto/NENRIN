'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation'; // 団体IDを取得
import Link from 'next/link';

const UnionJobsPage = () => {
  const { id: unionId } = useParams();  // 動的な団体IDを取得
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(`http://localhost:4000/jobs/union/${unionId}`);
        if (!response.ok) {
          throw new Error('求人データの取得に失敗しました');
        }
        const data = await response.json();
        setJobs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (unionId) {
      fetchJobs();
    }
  }, [unionId]);

  if (loading) return <p>読み込み中...</p>;
  if (error) return <p>エラー: {error}</p>;

  return (
    <div>
      <h1>団体 {unionId} の求人一覧</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <h2>{job.title}</h2>
            <p>{job.description}</p>
            <p>給与: {job.salary}</p>
            <p>勤務地: {job.location}</p>
            <Link href={`/applications/${job.id}`}>
              <button>この求人の応募者を確認する</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UnionJobsPage;
