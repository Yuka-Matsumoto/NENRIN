import React from "react";
import Link from "next/link";

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
        <div key={job.id} className="job-card" style={{ border: '1px solid #ccc', padding: '16px', margin: '16px 0' }}>
          <h2>{job.title}</h2>
          <p>{job.description}</p>
          <p>勤務地：{job.location}</p>
          <p>給料：時給{job.salary}円</p>

          {/* 「この求人の詳細」ボタン */}
          <Link href={`/jobs/${job.id}`}>
            <button style={{ marginRight: '8px' }}>この求人の詳細</button>
          </Link>

          {/* 「この求人に応募する」ボタン */}
          <Link href={`/senior-applications/${job.id}`}>
            <button>この求人に応募する</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default JobList;
