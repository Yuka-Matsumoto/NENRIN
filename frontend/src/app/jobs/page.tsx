"use client";

import React, { useState, useEffect } from 'react';
import { useJobs } from '../../../hooks/useJobs';
import JobList from '../../../components/Jobs/JobList';

const JobsPage = () => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const { jobs, loading, error, searchJobs } = useJobs();

  useEffect(() => {
    searchJobs({ title: '', location: '' });
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    searchJobs({ title, location });
  };

  return (
    <div>
      <h1>Job Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Job title"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
        />
        <button type="submit">Search</button>
      </form>
      <JobList jobs={jobs} loading={loading} error={error} />
    </div>
  );
};

export default JobsPage;
