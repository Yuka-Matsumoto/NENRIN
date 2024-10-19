import { useState, useEffect } from "react";
import { fetchServices, fetchServiceById } from "../lib/api";

// サービス検索用フック
export const useServices = () => {
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchServices = async (query: { name?: string, category?: string }) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchServices(query);
      setServices(data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { services, loading, error, searchServices };
};

// 個別サービス情報を取得するフック
export const useService = (id: string) => {
  const [service, setService] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchService = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchServiceById(id);
        setService(data);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Unknown error";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchService();
    }
  }, [id]);

  return { service, loading, error };
};
