import React from "react";

export default function Component() {
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
    <form className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-lg font-medium text-gray-700"
        >
          名前
        </label>
        <input
          id="name"
          name="name"
          required
          className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm text-lg"
        />
      </div>
      <div>
        <label
          htmlFor="prefecture"
          className="block text-lg font-medium text-gray-700"
        >
          都道府県
        </label>
        <input
          id="prefecture"
          name="prefecture"
          required
          className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm text-lg"
        />
      </div>
      <div>
        <label
          htmlFor="city"
          className="block text-lg font-medium text-gray-700"
        >
          市区町村
        </label>
        <input
          id="city"
          name="city"
          required
          className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm text-lg"
        />
      </div>
      <div>
        <label
          htmlFor="age"
          className="block text-lg font-medium text-gray-700"
        >
          年齢
        </label>
        <input
          id="age"
          name="age"
          type="number"
          required
          className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm text-lg"
        />
      </div>
      <div>
        <label
          htmlFor="gender"
          className="block text-lg font-medium text-gray-700"
        >
          性別
        </label>
        <select
          id="gender"
          name="gender"
          required
          className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm text-lg"
        >
          <option value="">選択してください</option>
          <option value="male">男性</option>
          <option value="female">女性</option>
          <option value="other">その他</option>
        </select>
      </div>

      <p className="text-lg text-gray-600 text-center">
        アピールしたい職種と業種を選択してください
      </p>

      <div>
        <label
          htmlFor="industry"
          className="block text-lg font-medium text-gray-700"
        >
          業種
        </label>
        <select
          id="industry"
          name="industry"
          required
          className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm text-lg"
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
        <label
          htmlFor="job_title"
          className="block text-lg font-medium text-gray-700"
        >
          職種
        </label>
        <select
          id="job_title"
          name="job_title"
          required
          className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm text-lg"
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
        <label
          htmlFor="years_of_experience"
          className="block text-lg font-medium text-gray-700"
        >
          経験年数
        </label>
        <input
          id="years_of_experience"
          name="years_of_experience"
          type="number"
          required
          className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm text-lg"
        />
      </div>

      <div>
        <label
          htmlFor="currently_employed"
          className="block text-lg font-medium text-gray-700"
        >
          現在仕事をしていますか？
        </label>
        <select
          id="currently_employed"
          name="currently_employed"
          required
          className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm text-lg"
        >
          <option value="">選択してください</option>
          <option value="true">はい</option>
          <option value="false">いいえ</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="currently_studying"
          className="block text-lg font-medium text-gray-700"
        >
          現在勉強をしていますか？
        </label>
        <select
          id="currently_studying"
          name="currently_studying"
          required
          className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm text-lg"
        >
          <option value="">選択してください</option>
          <option value="true">はい</option>
          <option value="false">いいえ</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="has_hobby"
          className="block text-lg font-medium text-gray-700"
        >
          趣味はありますか？
        </label>
        <select
          id="has_hobby"
          name="has_hobby"
          required
          className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm text-lg"
        >
          <option value="">選択してください</option>
          <option value="true">はい</option>
          <option value="false">いいえ</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="lives_alone"
          className="block text-lg font-medium text-gray-700"
        >
          一人暮らしですか？
        </label>
        <select
          id="lives_alone"
          name="lives_alone"
          required
          className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm text-lg"
        >
          <option value="">選択してください</option>
          <option value="true">はい</option>
          <option value="false">いいえ</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="goes_out_once_a_week"
          className="block text-lg font-medium text-gray-700"
        >
          週一日以上外出しますか？
        </label>
        <select
          id="goes_out_once_a_week"
          name="goes_out_once_a_week"
          required
          className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm text-lg"
        >
          <option value="">選択してください</option>
          <option value="true">はい</option>
          <option value="false">いいえ</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-md"
      >
        登録
      </button>
    </form>
  );
}
