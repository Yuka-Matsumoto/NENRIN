import React from "react";
import Link from "next/link"; // Link コンポーネントをインポート

interface Job {
  id: number;
  title: string;
  description: string;
  location: string;
  salary: string;
  status: string;
}

interface JobListProps {
  jobs: Job[];
  loading: boolean;
  error: string | null;
}

const JobList: React.FC<JobListProps> = ({ jobs, loading, error }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (jobs.length === 0) return <p>No jobs found</p>;

  return (
    <div>
      {jobs.map((job) => (
        <div key={job.id} className="job-card">
          {/* Linkを使って求人タイトルをラップ */}
          <Link href={`/jobs/${job.id}`}>
            <h2>{job.title}</h2>
          </Link>
          <p>{job.description}</p>
          <p>勤務地：{job.location}</p>
          <p>給料：時給{job.salary}円</p>
        </div>
      ))}
    </div>
  );
};

export default JobList;
