'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

const SeniorApplicationForm = () => {
  const { id: jobId } = useParams(); // URL から jobId を取得
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
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffectでジョブデータをAPIから取得
  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const res = await fetch(`http://localhost:4000/api/jobs/${jobId}`);
        const data = await res.json();
        setJob(data); // ジョブデータをセット
      } catch (err) {
        console.error('ジョブデータの取得に失敗しました', err);
      } finally {
        setLoading(false); // ローディング終了
      }
    };
    fetchJobData();
  }, [jobId]);

  const handleInputChange = (e) => {
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
    const formDataToSubmit = new FormData();

    // フォームデータをFormDataに追加
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSubmit.append(key, value);
    });
    formDataToSubmit.append('job_id', jobId); // job_id をフォームデータに追加

    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        body: formDataToSubmit,
      });
      if (res.ok) {
        alert('応募が完了しました');
      } else {
        alert('応募に失敗しました');
      }
    } catch (err) {
      console.error('応募処理に失敗しました', err);
    }
  };

  if (loading) return <p>読み込み中...</p>;
  if (!job) return <p>ジョブデータが見つかりません。</p>;

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="名前"
        required
      />
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleInputChange}
        placeholder="住所"
        required
      />
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleInputChange}
        placeholder="年齢"
        required
      />
      <input
        type="text"
        name="gender"
        value={formData.gender}
        onChange={handleInputChange}
        placeholder="性別"
        required
      />
      <input
        type="text"
        name="industry"
        value={formData.industry}
        onChange={handleInputChange}
        placeholder="業種"
        required
      />
      <input
        type="text"
        name="job_title"
        value={formData.job_title}
        onChange={handleInputChange}
        placeholder="職種"
        required
      />
      <input
        type="number"
        name="years_of_experience"
        value={formData.years_of_experience}
        onChange={handleInputChange}
        placeholder="経験年数"
        required
      />
      {job.requireResume && <input type="file" name="resume" onChange={handleFileChange} />}
      {job.requireWorkHistory && <input type="file" name="work_history" onChange={handleFileChange} />}
      {job.requirePhoto && <input type="file" name="photo" onChange={handleFileChange} />}

      <button type="submit">応募する</button>
    </form>
  );
};

export default SeniorApplicationForm;
