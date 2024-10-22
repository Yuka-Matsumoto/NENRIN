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
  const response = await fetch(`${BASE_URL}/api/register-senior`, {
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
