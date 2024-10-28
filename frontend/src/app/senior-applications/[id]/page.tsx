'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchSeniorProfileForApplication, submitSeniorApplication } from '../../../../lib/api';
import { auth } from '../../../../lib/firebase'; // Firebase authをインポート

const SeniorApplicationForm = () => {
  const { id: jobId } = useParams();

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    age: '',
    gender: '',
    industry: '',
    job_title: '',
    years_of_experience: '',
    resume: null,
    work_history: null,
    photo: null,
  });

  const [requiredDocs, setRequiredDocs] = useState({
    requireResume: false,
    requireWorkHistory: false,
    requirePhoto: false,
  });

  useEffect(() => {
    const loadProfileAndJobRequirements = async () => {
      try {
        // 現在のユーザーUIDを取得
        const user = auth.currentUser;
        if (user) {
          const profile = await fetchSeniorProfileForApplication(user.uid); // UIDでプロフィール情報を取得
          setFormData((prevData) => ({
            ...prevData,
            ...profile,
          }));
        }

        // 必須の書類項目を取得
        const response = await fetch(`http://localhost:4000/jobs/${jobId}`);
        const jobData = await response.json();
        setRequiredDocs({
          requireResume: jobData.requireResume,
          requireWorkHistory: jobData.requireWorkHistory,
          requirePhoto: jobData.requirePhoto,
        });
      } catch (error) {
        console.error('プロフィールまたは求人情報の取得に失敗しました', error);
      }
    };

    loadProfileAndJobRequirements();
  }, [jobId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, [name]: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });
    data.append('job_id', jobId);

    try {
      await submitSeniorApplication(data);
      alert('応募が完了しました');
    } catch (error) {
      console.error('応募の送信に失敗しました', error);
      alert('応募の送信に失敗しました');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="名前" required />
      <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="住所" required />
      <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="年齢" required />
      <input type="text" name="gender" value={formData.gender} onChange={handleChange} placeholder="性別" required />
      <input type="text" name="industry" value={formData.industry} onChange={handleChange} placeholder="業種" required />
      <input type="text" name="job_title" value={formData.job_title} onChange={handleChange} placeholder="職種" required />
      <input type="number" name="years_of_experience" value={formData.years_of_experience} onChange={handleChange} placeholder="経験年数" required />

      {/* ファイル入力フィールド（履歴書、職務経歴書、顔写真） */}
      <div>
        <label>履歴書 {requiredDocs.requireResume && <span>(必須)</span>}
          <input type="file" name="resume" onChange={handleFileChange} required={requiredDocs.requireResume} />
        </label>
      </div>
      <div>
        <label>職務経歴書 {requiredDocs.requireWorkHistory && <span>(必須)</span>}
          <input type="file" name="work_history" onChange={handleFileChange} required={requiredDocs.requireWorkHistory} />
        </label>
      </div>
      <div>
        <label>顔写真 {requiredDocs.requirePhoto && <span>(必須)</span>}
          <input type="file" name="photo" onChange={handleFileChange} required={requiredDocs.requirePhoto} />
        </label>
      </div>

      <button type="submit">応募する</button>
    </form>
  );
};

export default SeniorApplicationForm;
