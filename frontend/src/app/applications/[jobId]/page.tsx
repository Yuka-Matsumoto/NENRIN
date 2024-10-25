// 特定の求人の応募者一覧ページ

'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import ApplicationList from '../../../../components/Applications/ApplicationList';

const JobApplicationsPage = () => {
  const { jobId } = useParams();  // URLからjobIdを取得
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await fetch(`http://localhost:4000/applications/jobs/${jobId}/ranked-applications`);  // 特定の求人の応募者を取得
        if (!response.ok) {
          throw new Error("応募者データの取得に失敗しました");
        }
        const data = await response.json();
        setApplications(data);
      } catch (error) {
        console.error("応募者データの取得中にエラーが発生しました:", error);
      }
    };

    if (jobId) {
      fetchApplications();  // jobIdが存在する場合のみ取得
    }
  }, [jobId]);

  return (
    <div>
      <h1>特定求人の応募者一覧</h1>
      <ApplicationList applications={applications} />
    </div>
  );
};

export default JobApplicationsPage;
