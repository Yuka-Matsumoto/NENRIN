import axios from "axios";

// BASE_URL の定義を統一
const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000";

// axiosインスタンスの作成
export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 認証トークンを付与してリクエストを行う汎用ヘルパー関数
export const fetchWithAuth = async (
  url: string,
  token: string,
  method: "get" | "post" | "put" | "delete" = "get",
  data: any = {},
  options = {}
) => {
  return apiClient({
    method,
    url,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data,
    ...options,
  });
};

// 求人検索API
export const fetchJobs = async (query: {
  title?: string;
  location?: string;
}) => {
  const url = new URL(`${BASE_URL}/search/jobs`);
  if (query.title) url.searchParams.append("title", query.title);
  if (query.location) url.searchParams.append("location", query.location);

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error("Failed to fetch jobs");
  }
  return response.json();
};

// 個別求人情報を取得するAPI
export const fetchJobById = async (id: string) => {
  const response = await fetch(`${BASE_URL}/jobs/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch job");
  }
  return response.json();
};

// サービス検索API
export const fetchServices = async (query: {
  name?: string;
  category?: string;
}) => {
  const url = new URL(`${BASE_URL}/search/services`);
  if (query.name) url.searchParams.append("name", query.name);
  if (query.category) url.searchParams.append("category", query.category);

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error("Failed to fetch services");
  }
  return response.json();
};

// 個別サービス情報を取得するAPI
export const fetchServiceById = async (id: string) => {
  const response = await fetch(`${BASE_URL}/services/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch service");
  }
  return response.json();
};

// シニアユーザープロフィールを登録するためのAPI呼び出し
export const fetchSeniorProfiles = async (id: string) => {
  const response = await fetch(`${BASE_URL}/senior-profile/${id}`);

  if (!response.ok) {
    throw new Error("Failes to fetch senior profile");
  }

  console.log("Succes to fetch");

  return response.json();
};

export const fetchSeniorProfile = async (payload) => {
  const response = await fetch(`${BASE_URL}/register-senior`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    throw new Error("Failed to register senior profile");
  }
  return response.json();
};

// ユニオンユーザープロフィールを登録するためのAPI呼び出し

export const fetchUnionProfiles = async (id: string) => {
  const response = await fetch(`${BASE_URL}/union-profile/${id}`);

  if (!response.ok) {
    throw new Error("Failes to fetch union profile");
  }

  console.log("Succes to fetch");

  return response.json();
};

export const fetchUnionProfile = async (payload) => {
  const response = await fetch(`${BASE_URL}/register-union`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    throw new Error("Failed to register union profile");
  }
  return response.json();
};

// シニアサービス登録のAPI呼び出し
export const fetchServicePosting = async (data) => {
  const response = await fetch(`${BASE_URL}/services-posting`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("サービスの登録に失敗しました");
  }
  return response.json();
};

// ジョブポストを登録するためのAPI呼び出し
export const fetchJobPosting = async (data: any) => {
  console.log("ONIGIRI");
  const response = await fetch(`${BASE_URL}/jobs/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Failed to register job posting");
  }
  return response.json();
};

// ユーザーサービス取得エンドポイントにGETリクエスト
export const fetchUserServices = async (userId: string) => {
  const response = await fetch(`${BASE_URL}/services/user/${userId}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

// 応募データを送信するためのAPI呼び出し
export const submitApplication = async (formData: FormData) => {
  const response = await fetch(`${BASE_URL}/applications/apply`, {
    method: "POST",
    body: formData,
  });
  if (!response.ok) {
    throw new Error("Failed to submit application");
  }
  return response.json();
};

// // シニアプロフィールの情報を応募フォームに取得するAPI
// export const fetchSeniorProfileForApplication = async (userId: string) => {
//   const response = await fetch(`${BASE_URL}/api/senior-profile/${userId}`);
//   if (!response.ok) {
//     throw new Error("Failed to fetch senior profile");
//   }
//   return response.json();
// };

// シニアが求人に応募するとき応募情報を送信するAPI
export const submitSeniorApplication = async (data: FormData) => {
  const response = await fetch(`${BASE_URL}/api/apply`, {
    method: "POST",
    body: data,
  });
  if (!response.ok) {
    throw new Error("Failed to submit application");
  }
  return response.json();
};

// ユーザー求人取得エンドポイント（求人Aが自分で登録した求人を見る）
export const fetchUserJobs = async (userId: string) => {
  const response = await fetch(`/jobs/user/${userId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch jobs");
  }
  return await response.json();
};

// シニアユーザープロフィールを取得するためのAPI呼び出し
export const fetchSeniorProfileForApplication = async (uid: string) => {
  const response = await apiClient.get(`/api/profile/${uid}`);
  if (!response.ok) {
    throw new Error("Failed to fetch senior profile");
  }
  return response.data;
};
