// src/app/senior-applications/page.tsx
'use client';

import React from 'react';
import SeniorApplicationForm from '../../../components/Jobs/SeniorApplicationForm'; // 正しいパスに修正

const Page = () => {
  const jobId = '1465f8df-452c-4291-99c7-c99233e9bc28'; // 適切な jobId を使用

  return (
    <div>
      <h1>応募フォーム</h1>
      <SeniorApplicationForm jobId={jobId} />
    </div>
  );
};

export default Page;
