import React from "react";

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
          <h2>{job.title}</h2>
          <p>{job.description}</p>
          <p>{job.location}</p>
          <p>Salary: {job.salary}</p>
          <p>Status: {job.status}</p>
        </div>
      ))}
    </div>
  );
};

export default JobList;
