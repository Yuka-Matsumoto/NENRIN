const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

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

// シニアユーザープロフィールを登録するためのAPI呼び出し
export const fetchSeniorProfile = async (data) => {
  const response = await fetch(`${BASE_URL}/register-senior`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to register senior profile");
  }

  return response.json();
};

//ユニオンユーザープロフィールを登録するためのAPI呼び出し
export const fetchUnionProfile = async (data) => {
  const response = await fetch(`${BASE_URL}/register-union`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to register union profile");
  }

  return response.json();
};

//シニアサービス登録のAPI呼び出し
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
  const response = await fetch(`${BASE_URL}/job-postings`, {
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
  const response = await fetch(`/services/user/${userId}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
