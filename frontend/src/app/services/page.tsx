'use client';

import React, { useState, useEffect } from "react";
import { useServices } from "../../../hooks/useServices";
import ServiceList from "../../../components/Services/ServiceList";

const ServicesPage = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const { services, loading, error, searchServices } = useServices(); // searchServices を取得

  // コンポーネントが初期化されたときに全てのサービスを取得する
  useEffect(() => {
    searchServices({ name: "", category: "" }); // 空の検索クエリで全サービスを取得
  }, []); // 初回レンダリング時のみ実行

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // 検索クエリに基づいて検索を実行
    searchServices({ name, category });
  };

  return (
    <div>
      <h1>Service Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Service name"
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
        />
        <button type="submit">Search</button>
      </form>
      <ServiceList services={services} loading={loading} error={error} />
    </div>
  );
};

export default ServicesPage;
