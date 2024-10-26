'use client';

import { useEffect, useState } from 'react';

const UnionJobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 団体IDを取得（適宜変更するか、他の方法で取得する）
  const unionId = '160a5dd2-aee4-411c-ba8f-985fbb8272d9'; // ハードコードした団体ID
//   38c64314-219d-4230-b6e3-1128c1f8fe70
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

    fetchJobs();
  }, [unionId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>団体の求人一覧</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <h2>{job.title}</h2>
            <p>{job.description}</p>
            <p>Location: {job.location}</p>
            <p>Salary: {job.salary}</p>
            {/* 応募者一覧ページにリンクするボタン */}
            <a href={`/applications/${job.id}`}>この求人の応募者を確認する</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UnionJobsPage;
