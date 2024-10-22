'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';  // useParamsをインポート
import ApplicationList from '../../components/Applications/ApplicationList';

const ApplicationsPage = () => {
  const { jobId } = useParams();  // URLからjobIdを取得
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      if (!jobId) {
        console.error("jobIdが未定義です");
        return;
      }
      try {
        const response = await fetch(`/applications/jobs/${jobId}/ranked-applications`);
        const data = await response.json();
        setApplications(data);  // 取得したデータをstateにセット
      } catch (error) {
        console.error("応募者データの取得中にエラーが発生しました:", error);
      }
    };

    fetchApplications();
  }, [jobId]);  // jobIdが変更された時のみ再度データを取得

  return (
    <div>
      <h1>応募者一覧ページ</h1>
      <ApplicationList applications={applications} />
    </div>
  );
};

export default ApplicationsPage;


// 'use client';

// import React, { useState, useEffect } from 'react';
// import ApplicationList from '../../components/Applications/ApplicationList';

// const ApplicationsPage = ({ jobId }) => {
//   const [applications, setApplications] = useState([]);

//   useEffect(() => {
//     const fetchApplications = async () => {
//       try {
//         const response = await fetch(`/applications/jobs/${jobId}/ranked-applications`);
//         const data = await response.json();  // JSON形式でレスポンスを取得
//         setApplications(data);  // 取得したデータをstateにセット
//       } catch (error) {
//         console.error("応募者データの取得中にエラーが発生しました:", error);
//       }
//     };

//     fetchApplications();
//   }, [jobId]);  // jobIdが変更された時のみ再度データを取得

//   return (
//     <div>
//       <h1>応募者一覧ページ</h1>
//       <ApplicationList applications={applications} />
//     </div>
//   );
// };

// export default ApplicationsPage;

