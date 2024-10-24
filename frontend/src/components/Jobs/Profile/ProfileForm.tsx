// frontend/src/components/Profile/ProfileForm.tsx
import React from "react";

interface ProfileFormProps {
  formData: any; // 具体的な型を定義することを推奨
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
}

const ProfileForm: React.FC<ProfileFormProps> = ({
  formData,
  handleChange,
  handleSubmit,
}) => {
  // 業種と職種の選択肢を定義
  const industries = [
    "IT",
    "教育",
    "ヘルスケア",
    "建設",
    "製造",
    "サービス",
    "その他",
  ];

  const jobTitles = [
    "ソフトウェアエンジニア",
    "教員",
    "看護師",
    "建築士",
    "生産管理者",
    "販売員",
    "その他",
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name">名前</label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="prefecture">都道府県</label>
        <input
          id="prefecture"
          name="prefecture"
          value={formData.prefecture}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="city">市区町村</label>
        <input
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="age">年齢</label>
        <input
          id="age"
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="gender">性別</label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">選択してください</option>
          <option value="male">男性</option>
          <option value="female">女性</option>
          <option value="other">その他</option>
        </select>
      </div>

      <p>アピールしたい職種と業種を選択してください</p>

      <div>
        <label htmlFor="industry">業種</label>
        <select
          id="industry"
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          required
        >
          <option value="">選択してください</option>
          {industries.map((industry) => (
            <option key={industry} value={industry}>
              {industry}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="job_title">職種</label>
        <select
          id="job_title"
          name="job_title"
          value={formData.job_title}
          onChange={handleChange}
          required
        >
          <option value="">選択してください</option>
          {jobTitles.map((jobTitle) => (
            <option key={jobTitle} value={jobTitle}>
              {jobTitle}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="years_of_experience">経験年数</label>
        <input
          id="years_of_experience"
          name="years_of_experience"
          type="number"
          value={formData.years_of_experience}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="currently_employed">現在仕事をしていますか？</label>
        <select
          id="currently_employed"
          name="currently_employed"
          value={formData.currently_employed}
          onChange={handleChange}
          required
        >
          <option value="">選択してください</option>
          <option value="true">はい</option>
          <option value="false">いいえ</option>
        </select>
      </div>
      <div>
        <label htmlFor="currently_studying">現在勉強をしていますか？</label>
        <select
          id="currently_studying"
          name="currently_studying"
          value={formData.currently_studying}
          onChange={handleChange}
          required
        >
          <option value="">選択してください</option>
          <option value="true">はい</option>
          <option value="false">いいえ</option>
        </select>
      </div>
      <div>
        <label htmlFor="has_hobby">趣味はありますか？</label>
        <select
          id="has_hobby"
          name="has_hobby"
          value={formData.has_hobby}
          onChange={handleChange}
          required
        >
          <option value="">選択してください</option>
          <option value="true">はい</option>
          <option value="false">いいえ</option>
        </select>
      </div>
      <div>
        <label htmlFor="lives_alone">一人暮らしですか？</label>
        <select
          id="lives_alone"
          name="lives_alone"
          value={formData.lives_alone}
          onChange={handleChange}
          required
        >
          <option value="">選択してください</option>
          <option value="true">はい</option>
          <option value="false">いいえ</option>
        </select>
      </div>
      <div>
        <label htmlFor="goes_out_once_a_week">週一日以上外出しますか？</label>
        <select
          id="goes_out_once_a_week"
          name="goes_out_once_a_week"
          value={formData.goes_out_once_a_week}
          onChange={handleChange}
          required
        >
          <option value="">選択してください</option>
          <option value="true">はい</option>
          <option value="false">いいえ</option>
        </select>
      </div>
      <button type="submit">登録</button>
    </form>
  );
};

export default ProfileForm;
