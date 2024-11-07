import React from 'react';
import Link from 'next/link';

const ApplicationList = ({ applications }) => {
  console.log("applicationsのデータ:", applications);  // applicationsデータをログに出力
  if (applications.length === 0) {
    return <p>応募者がまだいません。</p>;
  }

  return (
    <div className="min-h-screen bg-[#e6f3ef] p-6">
      <div className="max-w-4xl mx-auto space-y-4">
        {applications.map((app) => (
          <div
            key={app.application_id}
            className="bg-[#f0f8f6] rounded-lg shadow-sm border border-[#c5e0d8] p-6"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <h3 className="text-lg font-semibold">
                    {app.name}
                  </h3>
                  <span className="text-sm text-gray-500">
                    ID: {app.application_id}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-700">スコア:</span>
                  <div className="flex items-center">
                    <div className="h-2 w-24 bg-[#d1e8e0] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#2e8b57]"
                        style={{ width: `${app.score}%` }}
                      />
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                      {app.score}%
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Link
                  href={`/applications/${app.job_id}/${app.application_id}`}
                  className="inline-flex items-center justify-center px-4 py-2 border border-[#2e8b57] text-[#2e8b57] bg-[#e6f3ef] rounded-md hover:bg-[#d1e8e0] transition-colors duration-200 text-sm"
                >
                  詳細を見る
                </Link>
                <button
                  className="inline-flex items-center justify-center px-4 py-2 bg-[#2e8b57] text-white rounded-md hover:bg-[#236b44] transition-colors duration-200 text-sm"
                >
                  応募を承認する
                </button>
              </div>
            </div>
          </div>
        ))}

        {applications.length === 0 && (
          <div className="text-center py-10 bg-[#f0f8f6] rounded-lg shadow-sm border border-[#c5e0d8]">
            <p className="text-gray-500">応募者がいません</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicationList;
