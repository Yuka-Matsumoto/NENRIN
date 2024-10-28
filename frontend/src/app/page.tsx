
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
    <div className="flex items-center justify-center min-h-screen" style={{ paddingTop: '250px' }}>
      <main className="text-center space-y-6">
        <h1 className="text-brown-700 text-5xl md:text-7xl font-bold mb-8 text-primary"> {/* Update 1: Replaced h1 */}
          N E N R I N <span className="text-3xl md:text-5xl block mt-2 text-primary-foreground ">is ...?</span>
        </h1>
        <p className="text-3xl"><span className="text-brown-700 font-bold">N E N R I N</span>は、シニアユーザーがこれまで培ったスキルや経験を活かして新たなサービスを提供できる場です。</p>
        <p className="text-3xl">団体ユーザーはシニア向けの求人を掲載し、シニアの力を活用して地域や社会に貢献できます。</p>
        <p className="text-3xl">シニアと団体をつなげることで、退職後も社会と繋がり続けられる新しい機会を提供します。</p>
        {/* <img src="" alt="" /> */}
        <div className="flex flex-wrap justify-between mt-12" style={{ paddingTop: '500px' }}>
          <div className="w-full md:w-1/2 text-left md:pr-8 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4 text-primary">退職後も、あなたのスキルと人生経験が輝く場所がここに。</h2>
            <p className="mb-4 text-2xl">本サービスは、退職後の新しいつながりと役割を見つけたいシニア世代のためのプラットフォームです。</p>
            <p className="mb-4 text-2xl">自分の経験や得意分野を活かして、地域や団体と繋がり、社会参加を通じて新たな生きがいを感じることができます。</p>
          </div>
          <div>
            {/* <img src="" alt="" /> */}
          </div>
        </div>

        <div className="flex flex-wrap justify-end mt-12" style={{ paddingTop: '250px' }}>
          <div className="w-full md:w-1/2 text-right md:pr-8 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4 text-primary">シニアの知識と経験が地域に貢献する力に。</h2>
            <p className="mb-4 text-2xl">本サービスは、地域社会に貢献したいシニア世代とつながることで、地域の課題を解決し、活力あるコミュニティを作りたい団体・組織のためのプラットフォームです。</p>
            <p className="mb-4 text-2xl">社会経験豊富なシニアの力を活用し、地域の活動に新しい視点や知識を取り入れることができます。</p>
          </div>
        </div>
        <SeniorUseButton onClick={handleSeniorClick} />
        {/* <p className="text-xl font-semibold">団体、自治体、企業の方はこちら</p>
        <UnionUseButton onClick={handleUnionClick} /> */}
      </main>
    </div>
  );
}

