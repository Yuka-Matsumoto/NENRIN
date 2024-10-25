
  

'use client'; //TODO: to consider

// import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import SeniorUseButton from '../../components/elements/seniorUseButton';  // UserButtonコンポーネントをインポート
// import UnionUseButton from '../../components/elements/unionUseButton';

export default function HomePage() {
  const router = useRouter();
  // SeniorUseButtonがクリックされたときの関数
  const handleSeniorClick = () => {
    console.log('シニアの利用者ボタンがクリックされました');
    router.push('/account/create'); // アカウント作成ページに遷移
    // シニアのボタンに対する処理を追加
  };

  // // UnionUseButtonがクリックされたときの関数
  // const handleUnionClick = () => {
  //   console.log('団体・自治体の利用者ボタンがクリックされました');
  //   router.push('/account/create'); // アカウント作成ページに遷移
  //   // 団体・自治体のボタンに対する処理を追加
  // };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <main className="text-center space-y-6">
        <h1 className="text-brown-700 text-5xl md:text-7xl font-bold mb-8 text-primary"> {/* Update 1: Replaced h1 */}
          N E N R I N <span className="text-3xl md:text-5xl block mt-2 text-primary-foreground ">is ...?</span>
        </h1>
        <p><span className="text-brown-700">N E N R I N</span>は、シニアユーザーがこれまで培ったスキルや経験を活かして新たなサービスを提供できる場です。</p>
        <p>団体ユーザーはシニア向けの求人を掲載し、シニアの力を活用して地域や社会に貢献できます。</p>
        <p>シニアと団体をつなげることで、退職後も社会と繋がり続けられる新しい機会を提供します。</p>
        <p className="text-xl font-semibold">ご利用はこちらから</p>
        <SeniorUseButton onClick={handleSeniorClick} />
        {/* <p className="text-xl font-semibold">団体、自治体、企業の方はこちら</p>
        <UnionUseButton onClick={handleUnionClick} /> */}
      </main>
    </div>
  );
}

