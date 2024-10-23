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

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <Link href={`/jobs/${job.id}`}>
      <div className="job-card" style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", cursor: "pointer" }}>
        <h2>{job.title}</h2>
        <p>{job.description}</p>
        <p>勤務地：{job.location}</p>
        <p>給料：時給{job.salary}円</p>
        <p>ステータス：{job.status}</p>
      </div>
    </Link>
  );
};

export default JobCard;
