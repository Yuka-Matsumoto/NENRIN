'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

const UnionJobsPage = () => {
  const { id: unionId } = useParams();  // URLから動的な団体IDを取得
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [unionName, setUnionName] = useState("");

  useEffect(() => {
    // 団体名を取得する関数
    const fetchUnionName = async () => {
      try {
        const response = await fetch(`http://localhost:4000/unions/${unionId}`);
        if (!response.ok) {
          throw new Error('団体名の取得に失敗しました');
        }
        const data = await response.json();
        setUnionName(data.union_name);
      } catch (err) {
        setError(err.message);
      }
    };

    // 求人情報を取得する関数
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
      fetchUnionName();  // 団体名の取得
      fetchJobs();  // 求人情報の取得
    }
  }, [unionId]);

  if (loading) return <p>読み込み中...</p>;
  if (error) return <p>エラー: {error}</p>;

  return (
    <div>
      <h1> {unionName} の求人一覧</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {jobs.map((job) => (
          <div key={job.id} style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
            <h2>{job.title}</h2>
            <p>{job.description}</p>
            <p>給与: {job.salary}</p>
            <p>勤務地: {job.location}</p>
            
            {/* 各求人の詳細ページリンク */}
            <Link href={`/jobs/${job.id}`}>
              <button style={{ marginRight: '8px' }}>この求人の詳細</button>
            </Link>

            {/* 各求人の応募者一覧ページリンク */}
            <Link href={`/applications/${job.id}`}>
              <button>この求人の応募者を確認する</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UnionJobsPage;
