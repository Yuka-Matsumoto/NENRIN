import React from "react";

interface FormData {
  union_name: string;
  representative_name: string;
  prefecture: string;
  city: string;
  date_of_foundation: Date;
  overview: Text;
}

interface UnionProfileFormProps {
  formData: FormData;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export default function UnionProfileForm({
  formData,
  handleChange,
  handleSubmit,
}: UnionProfileFormProps) {
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      //{" "}
      <div>
        // <label htmlFor="organizationName">団体名</label>
        //{" "}
        <input
          id="organizationName"
          name="organizationName"
          value={formData.organizationName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="representativeName">代表者名</label>
        <input
          id="representativeName"
          name="representativeName"
          value={formData.representativeName}
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
        <label htmlFor="establishmentDate">設立年月日</label>
        <input
          id="establishmentDate"
          name="establishmentDate"
          type="date"
          value={formData.establishmentDate}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="organizationOverview">組織概要</label>
        <textarea
          id="organizationOverview"
          name="organizationOverview"
          value={formData.organizationOverview}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">登録</button>
    </form>
  );
}
