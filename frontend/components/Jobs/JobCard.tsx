'use client';

import React from 'react';
import Link from 'next/link';

interface JobCardProps {
  job: {
    id: string;
    title: string;
    location: string;
    salary: string;
    description: string;
  };
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', margin: '16px 0' }}>
      <h2>{job.title}</h2>
      <p>Location: {job.location}</p>
      <p>Salary: {job.salary}</p>
      <p>{job.description}</p>
      
      {/* 「この求人の詳細」ボタン */}
      <Link href={`/jobs/${job.id}`}>
        <button style={{ marginRight: '8px' }}>この求人の詳細</button>
      </Link>

      {/* 「この求人に応募する」ボタン */}
      <Link href={`/senior-applications/${job.id}`}>
        <button>この求人に応募する</button>
      </Link>
    </div>
  );
};

export default JobCard;
