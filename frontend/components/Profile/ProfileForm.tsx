import React from "react";

const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

interface FormData {
  name: string;
  prefecture: string;
  city: string;
  age: string;
  gender: string;
  industry: string;
  job_title: string;
  years_of_experience: string;
  currently_employed: string;
  currently_studying: string;
  has_hobby: string;
  lives_alone: string;
  goes_out_once_a_week: string;
}

interface ProfileFormProps {
  formData: FormData;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export default function ProfileForm({
  formData,
  handleChange,
  handleSubmit,
}: ProfileFormProps) {
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
    <div className="min-h-screen bg-[#e6f3ef] p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-[#2e8b57]">
            プロフィール登録
          </h1>
          <UserIcon className="w-6 h-6 text-[#2e8b57]" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#2e8b57]"
              >
                名前
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-[#2e8b57] shadow-sm focus:border-[#2e8b57] focus:ring focus:ring-[#3da577] focus:ring-opacity-50 bg-[#ecf7f2] text-black placeholder-gray-500"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="prefecture"
                className="block text-sm font-medium text-[#2e8b57]"
              >
                都道府県
              </label>
              <input
                type="text"
                id="prefecture"
                name="prefecture"
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-[#2e8b57] shadow-sm focus:border-[#2e8b57] focus:ring focus:ring-[#3da577] focus:ring-opacity-50 bg-[#ecf7f2] text-black placeholder-gray-500"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-[#2e8b57]"
              >
                市区町村
              </label>
              <input
                type="text"
                id="city"
                name="city"
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-[#2e8b57] shadow-sm focus:border-[#2e8b57] focus:ring focus:ring-[#3da577] focus:ring-opacity-50 bg-[#ecf7f2] text-black placeholder-gray-500"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="age"
                className="block text-sm font-medium text-[#2e8b57]"
              >
                年齢
              </label>
              <input
                type="number"
                id="age"
                name="age"
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-[#2e8b57] shadow-sm focus:border-[#2e8b57] focus:ring focus:ring-[#3da577] focus:ring-opacity-50 bg-[#ecf7f2] text-black placeholder-gray-500"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-[#2e8b57]"
              >
                性別
              </label>
              <select
                id="gender"
                name="gender"
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-[#2e8b57] shadow-sm focus:border-[#2e8b57] focus:ring focus:ring-[#3da577] focus:ring-opacity-50 bg-[#ecf7f2] text-black"
              >
                <option value="">選択してください</option>
                <option value="male">男性</option>
                <option value="female">女性</option>
                <option value="other">その他</option>
              </select>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-[#2e8b57]">
              アピールしたい職種と業種
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="industry"
                  className="block text-sm font-medium text-[#2e8b57]"
                >
                  業種
                </label>
                <select
                  id="industry"
                  name="industry"
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-[#2e8b57] shadow-sm focus:border-[#2e8b57] focus:ring focus:ring-[#3da577] focus:ring-opacity-50 bg-[#ecf7f2] text-black"
                >
                  <option value="">選択してください</option>
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>
                      {industry}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="job_title"
                  className="block text-sm font-medium text-[#2e8b57]"
                >
                  職種
                </label>
                <select
                  id="job_title"
                  name="job_title"
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-[#2e8b57] shadow-sm focus:border-[#2e8b57] focus:ring focus:ring-[#3da577] focus:ring-opacity-50 bg-[#ecf7f2] text-black"
                >
                  <option value="">選択してください</option>
                  {jobTitles.map((jobTitle) => (
                    <option key={jobTitle} value={jobTitle}>
                      {jobTitle}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="years_of_experience"
                  className="block text-sm font-medium text-[#2e8b57]"
                >
                  経験年数
                </label>
                <input
                  type="number"
                  id="years_of_experience"
                  name="years_of_experience"
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-[#2e8b57] shadow-sm focus:border-[#2e8b57] focus:ring focus:ring-[#3da577] focus:ring-opacity-50 bg-[#ecf7f2] text-black placeholder-gray-500"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-[#2e8b57]">
              その他の情報
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { id: "currently_employed", label: "現在仕事をしていますか？" },
                { id: "currently_studying", label: "現在勉強をしていますか？" },
                { id: "has_hobby", label: "趣味はありますか？" },
                { id: "lives_alone", label: "一人暮らしですか？" },
                {
                  id: "goes_out_once_a_week",
                  label: "週一日以上外出しますか？",
                },
              ].map((item) => (
                <div key={item.id} className="space-y-2">
                  <label className="block text-sm font-medium text-[#2e8b57]">
                    {item.label}
                  </label>
                  <div className="flex space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name={item.id}
                        value="yes"
                        onChange={handleChange}
                        className="form-radio h-4 w-4 text-[#2e8b57] border-[#2e8b57] focus:ring-[#3da577]"
                      />
                      <span className="ml-2 text-sm text-[#2e8b57]">はい</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name={item.id}
                        value="no"
                        onChange={handleChange}
                        className="form-radio h-4 w-4 text-[#2e8b57] border-[#2e8b57] focus:ring-[#3da577]"
                      />
                      <span className="ml-2 text-sm text-[#2e8b57]">
                        いいえ
                      </span>
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#2e8b57] hover:bg-[#236b44] text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200"
          >
            登録
          </button>
        </form>
      </div>
    </div>
  );
}
