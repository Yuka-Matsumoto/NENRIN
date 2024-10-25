// src/app/senior-applications/[id]/page.tsx
'use client';

import { useRouter } from 'next/router';
import SeniorApplicationForm from '../../../components/Jobs/SeniorApplicationForm';

const Page = () => {
  const router = useRouter();
  const { id: jobId } = router.query;  // URLパラメータから jobId を取得

  return (
    <div>
      <h1>応募フォーム</h1>
      {jobId ? (
        <SeniorApplicationForm jobId={jobId} />
      ) : (
        <p>ジョブIDが見つかりません。</p>
      )}
    </div>
  );
};

export default Page;
