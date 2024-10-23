import React from 'react';
import Link from 'next/link';

const ApplicationList = ({ applications }) => {
  console.log("applicationsのデータ:", applications);  // applicationsデータをログに出力
  if (applications.length === 0) {
    return <p>応募者がまだいません。</p>;
  }

  return (
    <ul>
      {applications.map((app) => (
        <li key={app.application_id}>
          <div>
            <strong>応募者ID:</strong> {app.application_id}, <strong>スコア:</strong> {app.score}
            {/* 詳細ページへのリンクを追加 */}
            <Link href={`/applications/${app.job_id}/${app.application_id}`}>
              <button>詳細を見る</button>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ApplicationList;
