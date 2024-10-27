'use client';

import React, { useState, useEffect } from 'react';
import { useJobs } from '../../../hooks/useJobs';
import JobList from '../../../components/Jobs/JobList';

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

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
    <div className="min-h-screen bg-[#e6f3ef] p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-[#2e8b57] mb-6">求人を探す</h1>
        <form onSubmit={handleSearch} className="mb-8 flex items-center justify-center space-x-3">
          <div className="relative">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="お仕事名"
              className="w-48 pl-8 pr-3 py-1.5 border-2 border-[#2e8b57] rounded-full focus:outline-none focus:ring-2 focus:ring-[#2e8b57] focus:border-transparent bg-white text-gray-800 text-sm h-[38px]"
            />
            <span className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-[#2e8b57]">
              <SearchIcon className="w-4 h-4" />
            </span>
          </div>
          <div className="relative">
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="地域 例：東京"
              className="w-48 pl-8 pr-3 py-1.5 border-2 border-[#2e8b57] rounded-full focus:outline-none focus:ring-2 focus:ring-[#2e8b57] focus:border-transparent bg-white text-gray-800 text-sm h-[38px]"
            />
            <span className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-[#2e8b57]">
              <SearchIcon className="w-4 h-4" />
            </span>
          </div>
          <button
            type="submit"
            className="bg-[#2e8b57] hover:bg-[#236b44] text-white font-medium py-1.5 px-4 rounded-full transition-colors duration-200 text-sm flex items-center justify-center h-[38px]"
          >
            検索
          </button>
        </form>
        <JobList jobs={jobs} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default JobsPage;
