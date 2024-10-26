'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchSeniorProfileForApplication, submitSeniorApplication } from '../../../../lib/api';

const SeniorApplicationForm = () => {
  const { id: jobId } = useParams();
  
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    age: "",
    gender: "",
    industry: "",
    job_title: "",
    years_of_experience: "",
    resume: null,
    work_history: null,
    photo: null,
  });

  const [requiredDocs, setRequiredDocs] = useState({
    requireResume: false,
    requireWorkHistory: false,
    requirePhoto: false,
  });

  // プロフィール情報と求人の要件をロード
  useEffect(() => {
    const loadProfileAndJobRequirements = async () => {
      try {
        const profile = await fetchSeniorProfileForApplication("ce4ac2ba-bfe9-42de-8b67-3e1c56ce769f");
        setFormData((prevData) => ({
          ...prevData,
          ...profile,
        }));

        const response = await fetch(`http://localhost:4000/jobs/${jobId}`);
        const jobData = await response.json();
        setRequiredDocs({
          requireResume: jobData.requireResume,
          requireWorkHistory: jobData.requireWorkHistory,
          requirePhoto: jobData.requirePhoto,
        });
      } catch (error) {
        console.error("プロフィールまたは求人情報の取得に失敗しました", error);
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
    data.append("job_id", jobId);

    try {
      await submitSeniorApplication(data);
      alert("応募が完了しました");
    } catch (error) {
      console.error("応募の送信に失敗しました", error);
      alert("応募の送信に失敗しました");
    }
  };

  return (
    <div>
      <h1>応募フォーム</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="名前" required />
        <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="住所" required />
        <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="年齢" required />
        <input type="text" name="gender" value={formData.gender} onChange={handleChange} placeholder="性別" required />
        <input type="text" name="industry" value={formData.industry} onChange={handleChange} placeholder="業種" required />
        <input type="text" name="job_title" value={formData.job_title} onChange={handleChange} placeholder="職種" required />
        <input type="number" name="years_of_experience" value={formData.years_of_experience} onChange={handleChange} placeholder="経験年数" required />

        {/* 必須書類のファイル入力 */}
        <div style={{ marginTop: '16px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '4px' }}>
            履歴書 {requiredDocs.requireResume && <span style={{ color: 'red' }}>(必須)</span>}
          </label>
          <input 
            type="file" 
            name="resume" 
            onChange={handleFileChange} 
            required={requiredDocs.requireResume} 
            style={requiredDocs.requireResume ? { borderColor: 'red', borderWidth: '2px' } : {}}
          />
        </div>

        <div style={{ marginTop: '16px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '4px' }}>
            職務経歴書 {requiredDocs.requireWorkHistory && <span style={{ color: 'red' }}>(必須)</span>}
          </label>
          <input 
            type="file" 
            name="work_history" 
            onChange={handleFileChange} 
            required={requiredDocs.requireWorkHistory} 
            style={requiredDocs.requireWorkHistory ? { borderColor: 'red', borderWidth: '2px' } : {}}
          />
        </div>

        <div style={{ marginTop: '16px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '4px' }}>
            顔写真 {requiredDocs.requirePhoto && <span style={{ color: 'red' }}>(必須)</span>}
          </label>
          <input 
            type="file" 
            name="photo" 
            onChange={handleFileChange} 
            required={requiredDocs.requirePhoto} 
            style={requiredDocs.requirePhoto ? { borderColor: 'red', borderWidth: '2px' } : {}}
          />
        </div>

        <button type="submit" style={{ marginTop: '24px' }}>応募する</button>
      </form>
    </div>
  );
};

export default SeniorApplicationForm;
