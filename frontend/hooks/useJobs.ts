import { useState, useEffect } from "react";
import { fetchJobs, fetchJobById } from "../lib/api";

// 既存の useJobs フック
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
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { jobs, loading, error, searchJobs };
};

// 新しく追加する useJob フック
export const useJob = (id: string) => {
  const [job, setJob] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJob = async () => {
      setLoading(true);
      setError(null); // エラーをクリア
      try {
        const data = await fetchJobById(id);
        setJob(data);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Unknown error";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchJob();
    }
  }, [id]);

  return { job, loading, error };
};