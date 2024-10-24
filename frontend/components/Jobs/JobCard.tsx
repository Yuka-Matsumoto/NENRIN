import React from 'react';
import Link from 'next/link';

interface Job {
  id: number;
  title: string;
  description: string;
  location: string;
  salary: string;
  status: string;
}

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="job-card">
      <Link href={`/jobs/${job.id}`}>
        <h2>{job.title}</h2>
      </Link>
      <p>{job.description}</p>
      <p>勤務地：{job.location}</p>
      <p>給料：時給{job.salary}円</p>
    </div>
  );
};

export default JobCard;
