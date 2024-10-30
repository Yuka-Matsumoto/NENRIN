// 元のコード
// "use client";

// import { useEffect, useState } from "react";
// import { fetchUserJobs } from "../../../../lib/api"; // APIからユーザーの求人を取得する関数をインポート
// import Link from "next/link";

// export default function JobList() {
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [profileId, setProfileId] = useState(""); // プロフィールIDを管理する状態を追加

//   useEffect(() => {
//     const fetchProfileId = async () => {
//       try {
//         // プロフィールIDを取得するAPIを呼び出し
//         const response = await fetch("/union-profile"); // 適切なAPIエンドポイントを指定
//         const data = await response.json();
//         setProfileId(data.id); // 取得したプロフィールIDを状態にセット
//       } catch (err) {
//         setError("プロフィールIDの取得中にエラーが発生しました。");
//       }
//     };

//     fetchProfileId();
//   }, []);

//   useEffect(() => {
//     if (!profileId) return; // プロフィールIDがない場合は早期リターン

//     const fetchJobData = async () => {
//       try {
//         const response = await fetchUserJobs(profileId); // プロフィールIDを使って求人を取得
//         setJobs(response);
//       } catch (err) {
//         setError("求人の取得中にエラーが発生しました。");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchJobData();
//   }, [profileId]); // profileIdが変更されたときに求人を取得

//   if (loading) return <div>ロード中...</div>;
//   if (error) return <div className="text-red-500">{error}</div>;

//   return (
//     <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
//       <h1 className="text-2xl font-bold mb-4">登録済み求人一覧</h1>

//       {/* 新規求人登録ボタンを追加 */}
//       <Link href="/jobs/register">
//         <button className="mb-4 w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-md">
//           新規求人登録
//         </button>
//       </Link>

//       {jobs.length === 0 ? (
//         <p>登録された求人はありません。</p>
//       ) : (
//         <ul className="space-y-4">
//           {jobs.map((job) => (
//             <li key={job.id} className="border p-4 rounded-md shadow-sm">
//               <h2 className="text-xl font-semibold">{job.title}</h2>
//               <p>
//                 <strong>詳細:</strong> {job.description}
//               </p>
//               <p>
//                 <strong>場所:</strong> {job.location}
//               </p>
//               <p>
//                 <strong>給与:</strong> {job.salary} 円
//               </p>
//               <p>
//                 <strong>ステータス:</strong> {job.status}
//               </p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }


// データモック

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// モックデータを設定
const mockJobs = [
  {
    id: "1",
    title: "シニア向けサポートスタッフ",
    description: "地域社会での高齢者支援を行う仕事です。",
    location: "東京都渋谷区",
    salary: 3000,
    status: "募集中",
  },
  {
    id: "2",
    title: "ITサポートスタッフ",
    description: "ITサポートを行う仕事です。",
    location: "神奈川県横浜市",
    salary: 2500,
    status: "募集中",
  },
  {
    id: "3",
    title: "ITサポートスタッフ",
    description: "ITサポートを行う仕事です。",
    location: "神奈川県横浜市",
    salary: 2500,
    status: "募集中",
  },
  {
    id: "4",
    title: "ITサポートスタッフ",
    description: "ITサポートを行う仕事です。",
    location: "神奈川県横浜市",
    salary: 2500,
    status: "募集中",
  },
  {
    id: "5",
    title: "ITサポートスタッフ",
    description: "ITサポートを行う仕事です。",
    location: "神奈川県横浜市",
    salary: 2500,
    status: "募集中",
  },
];

// モック関数を定義
const fetchUserJobs = async (profileId) => {
  console.log("Fetching jobs for profileId:", profileId); // ログ出力してデバッグ
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockJobs);
    }, 1000); // 少しの遅延を追加して本物のAPIのように見せかける
  });
};

export default function JobList() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [profileId, setProfileId] = useState("12345"); // 仮のプロフィールIDを設定

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const response = await fetchUserJobs(profileId); // プロフィールIDを使ってモックデータを取得
        setJobs(response);
      } catch (err) {
        setError("求人の取得中にエラーが発生しました。");
      } finally {
        setLoading(false);
      }
    };

    fetchJobData();
  }, [profileId]);

  if (loading) return <div>ロード中...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">登録済み求人一覧</h1>

      {/* 新規求人登録ボタンを追加 */}
      <Link href="/jobs/register">
        <button className="mb-4 w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-md">
          新規求人登録
        </button>
      </Link>

      {jobs.length === 0 ? (
        <p>登録された求人はありません。</p>
      ) : (
        <ul className="space-y-4">
          {jobs.map((job) => (
            <li key={job.id} className="border p-4 rounded-md shadow-sm">
              <h2 className="text-xl font-semibold">{job.title}</h2>
              <p>
                <strong>詳細:</strong> {job.description}
              </p>
              <p>
                <strong>場所:</strong> {job.location}
              </p>
              <p>
                <strong>給与:</strong> {job.salary} 円
              </p>
              <p>
                <strong>ステータス:</strong> {job.status}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
