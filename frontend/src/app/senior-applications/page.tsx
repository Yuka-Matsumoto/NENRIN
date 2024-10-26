// src/app/senior-applications/[id]/page.tsx
'use client';

import { useParams } from 'next/navigation';
import SeniorApplicationForm from '../../../components/Jobs/SeniorApplicationForm';

const Page = () => {
  const { id: jobId } = useParams(); // useParamsでURLパラメータからjobIdを取得

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
