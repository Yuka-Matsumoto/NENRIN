'use client'; //TODO: to consider

// import { useEffect, useState } from 'react';
import SeniorUseButton from '../components/elements/seniorUseButton';  // UserButtonコンポーネントをインポート
import UnionUseButton from '../components/elements/unionUseButton';

export default function HomePage() {
  // ボタンがクリックされたときに実行する関数
  const handleClick = () => {
    console.log('利用者ボタンがクリックされました');
    // 必要に応じて、ボタンがクリックされたときに実行する処理を追加
  };

  return (
    <div>
      <main>
        <p>シニアの方はこちら</p>
        <SeniorUseButton onClick={handleClick} />
        <p>団体、自治体の方はこちら</p>
        <UnionUseButton onClick={handleClick} />
      </main>
    </div>
  );
}
