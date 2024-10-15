// import Image from "next/image";
'use client';  // クライアントコンポーネントとして明示

import { useEffect, useState } from 'react';



export default function Home() {
  // データを保存するためのstateを追加
  const [data, setData] = useState<{ message: string, status: string } | null>(null);

  useEffect(() => {
    // フロントエンドからバックエンドAPIへのリクエスト
    fetch('http://localhost:4000/api/mock')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);


  return (
    <div>
      <main>
        <h1>Contents</h1>
        {/* APIからデータが取得できたら表示する */}
        {data ? (
          <div>
            <p>Message: {data.message}</p>
            <p>Status: {data.status}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </main>
    </div>
  );
}