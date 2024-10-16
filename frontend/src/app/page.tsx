// import Image from "next/image"; TODO:delete
'use client';  // クライアントコンポーネントとして明示

import { useEffect, useState } from 'react';
import SeniorUseButton from './components/elements/senior_use_button';  // UserButtonコンポーネントをインポート


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

  // ボタンがクリックされたときに実行する関数
  const handleClick = () => {
    console.log('利用者ボタンがクリックされました');
    // 必要に応じて、ボタンがクリックされたときに実行する処理を追加
  };


  return (
    <div>
      <main>
        <p>シニアの方はこちら</p>
        {/* SeniorUseButtonコンポーネントを使用 */}
        <SeniorUseButton onClick={handleClick} />
        <p>団体、自治体の方はこちら</p>
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