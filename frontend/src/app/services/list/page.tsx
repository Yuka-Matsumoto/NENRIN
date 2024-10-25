"use client";

import { useEffect, useState } from "react";
import { fetchUserServices } from "../../../lib/api"; // API関数をインポート

export default function ServiceList() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ここでユーザーIDを取得するロジックを追加
  const userId = "取得したユーザーのID"; // 実際には適切な方法でユーザーIDを取得します

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const response = await fetchUserServices(userId); // ユーザーIDを使ってサービスを取得
        setServices(response);
      } catch (err) {
        setError("サービスの取得中にエラーが発生しました。");
      } finally {
        setLoading(false);
      }
    };

    fetchServiceData();
  }, [userId]);

  if (loading) return <div>ロード中...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">登録済みサービス一覧</h1>

      {/* 新規サービス登録ボタンを追加 */}
      <Link href="/services/register">
        <button className="mb-4 w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-md">
          新規サービス登録
        </button>
      </Link>

      {services.length === 0 ? (
        <p>登録されたサービスはありません。</p>
      ) : (
        <ul className="space-y-4">
          {services.map((service) => (
            <li key={service.id} className="border p-4 rounded-md shadow-sm">
              <h2 className="text-xl font-semibold">{service.name}</h2>
              <p>
                <strong>カテゴリ:</strong> {service.category}
              </p>
              <p>
                <strong>詳細:</strong> {service.description}
              </p>
              <p>
                <strong>価格:</strong> {service.price} 円
              </p>
              <p>
                <strong>ステータス:</strong> {service.status}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
