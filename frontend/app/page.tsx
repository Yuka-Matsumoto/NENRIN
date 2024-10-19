'use client'; //TODO: to consider

// import { useEffect, useState } from 'react';
import SeniorUseButton from '../components/elements/seniorUseButton';  // UserButtonコンポーネントをインポート
import UnionUseButton from '../components/elements/unionUseButton';

export default function HomePage() {
  // SeniorUseButtonがクリックされたときの関数
  const handleSeniorClick = () => {
    console.log('シニアの利用者ボタンがクリックされました');
    // シニアのボタンに対する処理を追加
  };

  // UnionUseButtonがクリックされたときの関数
  const handleUnionClick = () => {
    console.log('団体・自治体の利用者ボタンがクリックされました');
    // 団体・自治体のボタンに対する処理を追加
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-mint">
      <main className="text-center space-y-6">
        <p className="text-xl font-semibold">シニアの方はこちら</p>
        <SeniorUseButton onClick={handleSeniorClick} />
        <p className="text-xl font-semibold">団体、自治体の方はこちら</p>
        <UnionUseButton onClick={handleUnionClick} />
      </main>
    </div>
  );
}
