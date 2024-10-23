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
          <Link href={`/applications/${app.application_id}/details`}>
              <strong>応募者ID:</strong> {app.application_id}, <strong>スコア:</strong> {app.score}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ApplicationList;
