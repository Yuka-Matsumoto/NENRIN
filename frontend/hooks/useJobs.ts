import { useState } from "react";
import { fetchJobs } from "../lib/api";

export const useJobs = () => {
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // ボタンが押されたときに実行される検索関数
  const searchJobs = async (query: { title?: string, location?: string }) => {
    setLoading(true);
    setError(null); // エラーをクリア
    try {
      const data = await fetchJobs(query);
      setJobs(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { jobs, loading, error, searchJobs };
};
