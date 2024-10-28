// import { useState, useEffect } from "react";
// import { fetchJobs, fetchJobById } from "../lib/api";

// // 既存の useJobs フック
// export const useJobs = () => {
//   const [jobs, setJobs] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   // ボタンが押されたときに実行される検索関数
//   const searchJobs = async (query: { title?: string, location?: string }) => {
//     setLoading(true);
//     setError(null); // エラーをクリア
//     try {
//       const data = await fetchJobs(query);
//       setJobs(data);
//     } catch (err) {
//       const errorMessage = err instanceof Error ? err.message : "Unknown error";
//       setError(errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { jobs, loading, error, searchJobs };
// };

// // 新しく追加する useJob フック
// export const useJob = (id: string) => {
//   const [job, setJob] = useState<any | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchJob = async () => {
//       setLoading(true);
//       setError(null); // エラーをクリア
//       try {
//         const data = await fetchJobById(id);
//         setJob(data);
//       } catch (err) {
//         const errorMessage = err instanceof Error ? err.message : "Unknown error";
//         setError(errorMessage);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (id) {
//       fetchJob();
//     }
//   }, [id]);

//   return { job, loading, error };
// };

// ーーーーーーーーーーーーーーーーーーーーーーーー

// hooks/useJobs.ts
import { useState } from 'react';

interface Job {
  id: string;
  union_profile_id: string;
  title: string;
  job_title: string;
  description: string;
  location: string;
  salary: number;
  status: string;
  created_at: string;
  updated_at: string;
  industry?: string; // nullable
}

const mockJobs: Job[] = [
  {
    id: '1',
    union_profile_id: '1234-5678-9101-1121',
    title: 'Software Engineer Position',
    job_title: 'Software Engineer',
    description: 'We are looking for an experienced software engineer to develop innovative applications.',
    location: 'Tokyo, Japan',
    salary: 6000,
    status: 'open',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    industry: 'Technology',
  },
  {
    id: '2',
    union_profile_id: '2345-6789-1011-2131',
    title: 'Data Analyst',
    job_title: 'Data Analyst',
    description: 'Seeking a data analyst to manage large data sets and provide insights.',
    location: 'Osaka, Japan',
    salary: 5500,
    status: 'open',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    industry: 'Finance',
  },
  {
    id: '3',
    union_profile_id: '3456-7890-1121-3141',
    title: 'Marketing Specialist',
    job_title: 'Marketing Specialist',
    description: 'Looking for a creative marketing specialist to develop campaigns and manage social media.',
    location: 'Nagoya, Japan',
    salary: 5000,
    status: 'closed',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    industry: 'Marketing',
  },
];

export const useJobs = () => {
  const [jobs, setJobs] = useState<Job[]>(mockJobs);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchJobs = ({ title, location }: { title: string; location: string }) => {
    setLoading(true);
    setTimeout(() => {
      const filteredJobs = mockJobs.filter(
        (job) =>
          job.title.includes(title) && job.location.includes(location)
      );
      setJobs(filteredJobs);
      setLoading(false);
    }, 500);
  };

  return { jobs, loading, error, searchJobs };
};

