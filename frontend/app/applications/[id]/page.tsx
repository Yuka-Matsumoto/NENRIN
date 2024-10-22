'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';  // useParamsをインポート

const ApplicationDetails = () => {
  const { id } = useParams();  // useRouterの代わりにuseParamsでidを取得
  const [applicationDetails, setApplicationDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchDetails = async () => {
        try {
          // バックエンドAPIにリクエストを送信
          const response = await fetch(`http://localhost:4000/applications/${id}/details`);
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
    }
  }, [id]);

  if (loading) return <p>読み込み中...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>応募者詳細情報</h1>
      <p><strong>名前:</strong> {applicationDetails.name}</p>
      <p><strong>年齢:</strong> {applicationDetails.age}</p>
      <p><strong>性別:</strong> {applicationDetails.gender}</p>
      <p><strong>住所:</strong> {applicationDetails.address}</p>
      <p><strong>経験年数:</strong> {applicationDetails.years_of_experience}年</p>
      <p><strong>業種:</strong> {applicationDetails.industry}</p>
      <p><strong>職種:</strong> {applicationDetails.job_title}</p>
      {/* 表示させない予定<p><strong>現在仕事をしていますか:</strong> {applicationDetails.currently_employed ? "はい" : "いいえ"}</p>
      <p><strong>現在勉強していますか:</strong> {applicationDetails.currently_studying ? "はい" : "いいえ"}</p>
      <p><strong>趣味はありますか:</strong> {applicationDetails.has_hobby ? "はい" : "いいえ"}</p>
      <p><strong>一人暮らしですか:</strong> {applicationDetails.lives_alone ? "はい" : "いいえ"}</p>
      <p><strong>週1日以上外出しますか:</strong> {applicationDetails.goes_out_once_a_week ? "はい" : "いいえ"}</p> */}
    </div>
  );
};

export default ApplicationDetails;
