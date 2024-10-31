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
    <div className="min-h-screen bg-[#e6f3ef] p-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-[#2e8b57] mb-4">
            応募者詳細情報
          </h1>
          {/* <p className="text-gray-600 mb-6">
            求人→応募者一覧→応募者詳細情報
          </p> */}

          <div className="space-y-4">
            <div className="flex border-b border-gray-200 pb-3">
              <span className="w-32 font-medium text-gray-700">名前</span>
              <span className="flex-1">{applicationDetails.name}</span>
            </div>

            <div className="flex border-b border-gray-200 pb-3">
              <span className="w-32 font-medium text-gray-700">年齢</span>
              <span className="flex-1">{applicationDetails.age}歳</span>
            </div>

            <div className="flex border-b border-gray-200 pb-3">
              <span className="w-32 font-medium text-gray-700">性別</span>
              <span className="flex-1">{applicationDetails.gender}</span>
            </div>

            <div className="flex border-b border-gray-200 pb-3">
              <span className="w-32 font-medium text-gray-700">住所</span>
              <span className="flex-1">{applicationDetails.address}</span>
            </div>

            <div className="flex border-b border-gray-200 pb-3">
              <span className="w-32 font-medium text-gray-700">経験年数</span>
              <span className="flex-1">{applicationDetails.years_of_experience}年</span>
            </div>

            <div className="flex border-b border-gray-200 pb-3">
              <span className="w-32 font-medium text-gray-700">業種</span>
              <span className="flex-1">{applicationDetails.industry}</span>
            </div>

            <div className="flex border-b border-gray-200 pb-3">
              <span className="w-32 font-medium text-gray-700">職種</span>
              <span className="flex-1">{applicationDetails.job_title}</span>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <button
              onClick={() => window.history.back()}
              className="flex-1 py-2 px-4 bg-white border-2 border-[#2e8b57] text-[#2e8b57] rounded-md hover:bg-[#f5f5f5] transition-colors duration-200"
            >
              戻る
            </button>
            <button
              className="flex-1 py-2 px-4 bg-[#2e8b57] text-white rounded-md hover:bg-[#236b44] transition-colors duration-200"
            >
              応募を承認する
            </button>
            <button
              className="flex-1 py-2 px-4 bg-[#2e8b57] text-white rounded-md hover:bg-[#236b44] transition-colors duration-200"
            >
              応募者一覧
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDetails;
