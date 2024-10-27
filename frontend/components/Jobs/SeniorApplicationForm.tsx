import { useEffect, useState } from 'react';
import { auth } from '../../lib/firebase'; // Firebase設定ファイルからのインポート
import { fetchSeniorProfileForApplication } from '../../lib/api'; // プロフィール取得API関数をインポート

const SeniorApplicationForm = () => {
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

  useEffect(() => {
    const loadUserProfile = async () => {
      try {
        const currentUser = auth.currentUser;
        if (currentUser) {
          const uid = currentUser.uid;
          const profileData = await fetchSeniorProfileForApplication(uid);
          setFormData((prevData) => ({
            ...prevData,
            ...profileData,
          }));
        }
      } catch (error) {
        console.error("プロフィール情報の取得に失敗しました", error);
      }
    };

    loadUserProfile();
  }, []);

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
    // フォームデータの送信処理
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="名前"
        required
      />
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="住所"
        required
      />
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        placeholder="年齢"
        required
      />
      <select
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        required
      >
        <option value="">性別を選択</option>
        <option value="男性">男性</option>
        <option value="女性">女性</option>
        <option value="その他">その他</option>
      </select>
      <input
        type="text"
        name="industry"
        value={formData.industry}
        onChange={handleChange}
        placeholder="業種"
        required
      />
      <input
        type="text"
        name="job_title"
        value={formData.job_title}
        onChange={handleChange}
        placeholder="職種"
        required
      />
      <input
        type="number"
        name="years_of_experience"
        value={formData.years_of_experience}
        onChange={handleChange}
        placeholder="経験年数"
        required
      />

      {/* ファイル入力 */}
      <div>
        <label>履歴書</label>
        <input type="file" name="resume" onChange={handleFileChange} />
      </div>
      <div>
        <label>職務経歴書</label>
        <input type="file" name="work_history" onChange={handleFileChange} />
      </div>
      <div>
        <label>顔写真</label>
        <input type="file" name="photo" onChange={handleFileChange} />
      </div>

      <button type="submit">応募する</button>
    </form>
  );
};

export default SeniorApplicationForm;
