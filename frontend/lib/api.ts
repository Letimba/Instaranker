export interface Profile {
  id: number;
  username: string;
  followers: number;
  category: string;
  avatar_url: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function fetcher<T>(url: string): Promise<T> {
  const res = await fetch(url, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error('Failed to fetch data');
  return res.json();
}

export async function getRankings(category: string): Promise<Profile[]> {
  return fetcher<Profile[]>(`${API_URL}/api/rankings/${category}`);
}

export async function getProfile(username: string): Promise<Profile | null> {
  try {
    return await fetcher<Profile>(`${API_URL}/api/profiles/${username}`);
  } catch (error) {
    return null;
  }
}
