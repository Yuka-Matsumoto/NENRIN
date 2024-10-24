// 応募者一覧ページ（特定の企業の全応募者）

'use client';

import React, { useState, useEffect } from 'react';
import ApplicationList from '../../../components/Applications/ApplicationList';

const ApplicationsPage = () => {
  console.log("ApplicationsPageコンポーネントがレンダリングされました");  // コンポーネントのレンダリングを確認
  const [applications, setApplications] = useState([]);

  console.log("ApplicationsPageコンポーネントがロードされました"); // 最初にコンポーネントがロードされた際にログが出るはず

  useEffect(() => {
    const fetchApplications = async () => {
      console.log("fetchApplicationsが呼び出されました");  // このログが出るか確認
      try {
        const response = await fetch(`http://localhost:4000/applications/all`);  // 全応募者を取得するエンドポイント
        console.log("リクエスト送信中...");
        if (!response.ok) {
          throw new Error(`HTTPエラー: ${response.status}`);
        }
      const data = await response.json();
      console.log("取得したデータ:", data);  // 取得したデータをコンソールに表示
      setApplications(data);  // データをstateにセット
      } catch (error) {
        console.error("応募者データの取得中にエラーが発生しました:", error);
      }
    };

    fetchApplications();  // 初回レンダリング時に全応募者を取得
  }, []);

  return (
    <div>
      <h1>特定の企業の全求人の応募者一覧ページ</h1>
      <ApplicationList applications={applications} />
    </div>
  );
};

export default ApplicationsPage;
