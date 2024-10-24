'use client';

import React, { useState, useEffect } from "react";
import { useJobs } from "../../../hooks/useJobs";
import JobList from "../../../components/Jobs/JobList";

const JobsPage = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const { jobs, loading, error, searchJobs } = useJobs(); // searchJobs を取得

  // コンポーネントが初期化されたときに全ての求人を取得する
  useEffect(() => {
    searchJobs({ title: "", location: "" }); // 空の検索クエリで全求人を取得
  }, []); // 初回レンダリング時のみ実行

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // 検索クエリに基づいて検索を実行
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
