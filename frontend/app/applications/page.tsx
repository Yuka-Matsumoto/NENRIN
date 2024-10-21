'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';  // useParamsをインポート
import ApplicationList from '../../components/Applications/ApplicationList';

const ApplicationsPage = () => {
  const { jobId } = useParams();  // URLパラメータからjobIdを取得
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Job ID:', jobId);  // jobIdが取得できているか確認するためにログを出力
  }, [jobId]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        if (!jobId) {
          throw new Error('Job IDが未定義です');
        }

        const response = await fetch(`http://localhost:4000/applications/jobs/${jobId}/ranked-applications`);
        if (!response.ok) {
          throw new Error('応募者データの取得に失敗しました');
        }

        const data = await response.json();  // JSON形式でレスポンスを取得
        setApplications(data);  // 取得したデータをstateにセット
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchApplications();
  }, [jobId]);  // jobIdが変更された時のみ再度データを取得

  if (loading) return <p>読み込み中...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>応募者一覧ページ</h1>
      <ApplicationList applications={applications} />
    </div>
  );
};

export default ApplicationsPage;
