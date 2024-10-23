"use client"; // クライアントコンポーネントを指定

import React, { useState } from "react";
import { fetchSeniorProfile } from "../../../lib/api"; // ここでlibからAPI関数をインポート

export default function SeniorProfile() {
  const [formData, setFormData] = useState({
    name: "",
    prefecture: "",
    city: "",
    age: "",
    gender: "",
    background: "",
    qualifications: "",
    industry: "", // 業種を追加
    job_title: "", // 職種を追加
    years_of_experience: "", // 経験年数を追加
    currently_employed: "", // 現在仕事をしていますか？を追加
    currently_studying: "", // 現在勉強をしていますか？を追加
    has_hobby: "", // 趣味はありますか？を追加
    lives_alone: "", // 一人暮らしですか？を追加
    goes_out_once_a_week: "", // 週一日以上外出しますか？を追加
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 住所を一つのフィールドに統合
    const combinedAddress = `${formData.prefecture} ${formData.city}`;

    const payload = {
      ...formData,
      address: combinedAddress, // addressとして送信
      career: formData.background,
      license: formData.qualifications,
      user_id: "some-user-id", // ユーザーIDを適切に設定
    };

    try {
      const response = await fetchSeniorProfile(payload); // API呼び出しを実行
      alert("プロフィールが登録されました");
    } catch (error) {
      console.error("Error:", error);
      alert("登録に失敗しました");
    }
  };

  return (
    <>
      <h1>プロフィール登録</h1>

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

        <div>
          <label htmlFor="industry">業種</label>
          <input
            id="industry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="job_title">職種</label>
          <input
            id="job_title"
            name="job_title"
            value={formData.job_title}
            onChange={handleChange}
            required
          />
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
    </>
  );
}
