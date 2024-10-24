// 個別応募者詳細ページ

'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

const ApplicationDetails = () => {
  const { jobId, applicationId } = useParams();  // jobIdとapplicationIdを取得
  console.log("jobId:", jobId);  // jobIdが正しく取得できているか確認
  console.log("applicationId:", applicationId);  // applicationIdが正しく取得できているか確認

  const [applicationDetails, setApplicationDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(`http://localhost:4000/applications/${applicationId}/details`);  // 特定の応募者詳細を取得
        if (!response.ok) {
          throw new Error('応募者詳細の取得に失敗しました');
        }
        const data = await response.json();
        setApplicationDetails(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchDetails();
  }, [applicationId]);

  if (loading) return <p>読み込み中...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>応募者詳細情報（求人→応募者一覧→応募者詳細情報）</h1>
      <p><strong>名前:</strong> {applicationDetails.name}</p>
      <p><strong>年齢:</strong> {applicationDetails.age}</p>
      <p><strong>性別:</strong> {applicationDetails.gender}</p>
      <p><strong>住所:</strong> {applicationDetails.address}</p>
      <p><strong>経験年数:</strong> {applicationDetails.years_of_experience}年</p>
      <p><strong>業種:</strong> {applicationDetails.industry}</p>
      <p><strong>職種:</strong> {applicationDetails.job_title}</p>
    </div>
  );
};

export default ApplicationDetails;
