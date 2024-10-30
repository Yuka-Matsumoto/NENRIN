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
    // <form onSubmit={handleSubmit}>
    //   <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="名前" required />
    //   <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="住所" required />
    //   <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="年齢" required />
    //   <input type="text" name="gender" value={formData.gender} onChange={handleChange} placeholder="性別" required />
    //   <input type="text" name="industry" value={formData.industry} onChange={handleChange} placeholder="業種" required />
    //   <input type="text" name="job_title" value={formData.job_title} onChange={handleChange} placeholder="職種" required />
    //   <input type="number" name="years_of_experience" value={formData.years_of_experience} onChange={handleChange} placeholder="経験年数" required />

    //   {/* ファイル入力フィールド（履歴書、職務経歴書、顔写真） */}
    //   <div>
    //     <label>履歴書 {requiredDocs.requireResume && <span>(必須)</span>}
    //       <input type="file" name="resume" onChange={handleFileChange} required={requiredDocs.requireResume} />
    //     </label>
    //   </div>
    //   <div>
    //     <label>職務経歴書 {requiredDocs.requireWorkHistory && <span>(必須)</span>}
    //       <input type="file" name="work_history" onChange={handleFileChange} required={requiredDocs.requireWorkHistory} />
    //     </label>
    //   </div>
    //   <div>
    //     <label>顔写真 {requiredDocs.requirePhoto && <span>(必須)</span>}
    //       <input type="file" name="photo" onChange={handleFileChange} required={requiredDocs.requirePhoto} />
    //     </label>
    //   </div>

    //   <button type="submit">応募する</button>
    // </form>
    <div className="min-h-screen bg-[#f0f5f3] py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-[#f0f5f3] rounded border border-gray-200 p-6">
          <h1 className="text-2xl font-normal text-gray-900 mb-6">応募フォーム</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 基本情報 */}
            <div className="space-y-4">
              <h2 className="text-lg font-medium text-[#4F7F58] mb-4">基本情報</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    名前
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4F7F58] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                    年齢
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4F7F58] focus:border-transparent"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    住所
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4F7F58] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                    性別
                  </label>
                  <input
                    type="text"
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4F7F58] focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* 職歴情報 */}
            <div className="space-y-4">
              <h2 className="text-lg font-medium text-[#4F7F58] mb-4">職歴情報</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
                    業種
                  </label>
                  <input
                    type="text"
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4F7F58] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="job_title" className="block text-sm font-medium text-gray-700 mb-1">
                    職種
                  </label>
                  <input
                    type="text"
                    id="job_title"
                    name="job_title"
                    value={formData.job_title}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4F7F58] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="years_of_experience" className="block text-sm font-medium text-gray-700 mb-1">
                    経験年数
                  </label>
                  <input
                    type="number"
                    id="years_of_experience"
                    name="years_of_experience"
                    value={formData.years_of_experience}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4F7F58] focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* 必要書類 */}
            <div className="space-y-4">
              <h2 className="text-lg font-medium text-[#4F7F58] mb-4">必要書類</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    履歴書 {requiredDocs.requireResume && <span className="text-red-500 ml-1">(必須)</span>}
                  </label>
                  <input
                    type="file"
                    name="resume"
                    onChange={handleFileChange}
                    required={requiredDocs.requireResume}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4F7F58] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    職務経歴書 {requiredDocs.requireWorkHistory && <span className="text-red-500 ml-1">(必須)</span>}
                  </label>
                  <input
                    type="file"
                    name="work_history"
                    onChange={handleFileChange}
                    required={requiredDocs.requireWorkHistory}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4F7F58] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    顔写真 {requiredDocs.requirePhoto && <span className="text-red-500 ml-1">(必須)</span>}
                  </label>
                  <input
                    type="file"
                    name="photo"
                    onChange={handleFileChange}
                    required={requiredDocs.requirePhoto}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4F7F58] focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full px-4 py-3 bg-[#4F7F58] text-white rounded-md hover:bg-[#3d6144] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4F7F58] transition-colors"
              >
                応募する
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SeniorApplicationForm;
