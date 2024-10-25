import { useState, useEffect } from 'react';

const SeniorApplicationForm = ({ jobId }) => {
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

  const [job, setJob] = useState(null);  // ジョブデータの状態
  const [loading, setLoading] = useState(true);

  // useEffectでシニアプロフィール情報をAPIから取得し、フォームデータをセット
  useEffect(() => {
    fetch('/api/senior-profile')
      .then((res) => res.json())
      .then((data) => setFormData({
        ...formData,
        name: data.name || '',
        address: data.address || '',
        age: data.age || '',
        gender: data.gender || '',
        industry: data.industry || '',
        job_title: data.job_title || '',
        years_of_experience: data.years_of_experience || '',
      }))
      .catch((err) => console.error('プロフィール情報の取得に失敗しました', err));
  }, []);

  // jobIdを使ってジョブデータを取得
  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const response = await fetch(`/api/jobs/${jobId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setJob(data);  // ジョブデータをセット
      } catch (error) {
        console.error('ジョブデータの取得に失敗しました', error);
      } finally {
        setLoading(false);  // ローディング完了
      }
    };

    fetchJobData();
  }, [jobId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    setFormData({ ...formData, [name]: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 応募データを送信するAPI呼び出し
    const response = await fetch('/api/apply', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      alert('応募が完了しました');
    } else {
      alert('応募に失敗しました');
    }
  };

  if (loading) {
    return <p>読み込み中...</p>;
  }

  if (!job) {
    return <p>ジョブデータが見つかりません。</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      <input type="text" name="address" value={formData.address} onChange={handleInputChange} />
      <input type="number" name="age" value={formData.age} onChange={handleInputChange} />
      <input type="text" name="gender" value={formData.gender} onChange={handleInputChange} />
      <input type="text" name="industry" value={formData.industry} onChange={handleInputChange} />
      <input type="text" name="job_title" value={formData.job_title} onChange={handleInputChange} />
      <input type="number" name="years_of_experience" value={formData.years_of_experience} onChange={handleInputChange} />

      {job.requireResume && <input type="file" name="resume" onChange={handleFileChange} />}
      {job.requireWorkHistory && <input type="file" name="work_history" onChange={handleFileChange} />}
      {job.requirePhoto && <input type="file" name="photo" onChange={handleFileChange} />}

      <button type="submit">応募する</button>
    </form>
  );
};

export default SeniorApplicationForm;
