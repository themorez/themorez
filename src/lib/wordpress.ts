const API_BASE = "https://themo.wasmer.app/index.php?rest_route=/wp/v2";
const AUTH_HEADER = "Basic " + btoa("admin:SZRNXcpDb46p1CxCl7xfP3Sy");

const headers = {
  Authorization: AUTH_HEADER,
};

export interface WPPost {
  id: number;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  slug: string;
  categories: number[];
  featured_media: number;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    "wp:term"?: Array<Array<{
      id: number;
      name: string;
      slug: string;
    }>>;
  };
}

export interface WPCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
}

export async function fetchPosts(params?: {
  search?: string;
  categories?: number;
  page?: number;
  per_page?: number;
}): Promise<{ posts: WPPost[]; totalPages: number }> {
  const searchParams = new URLSearchParams();
  searchParams.set("rest_route", "/wp/v2/posts");
  searchParams.set("_embed", "true");
  searchParams.set("per_page", String(params?.per_page ?? 9));
  searchParams.set("page", String(params?.page ?? 1));

  if (params?.search) searchParams.set("search", params.search);
  if (params?.categories) searchParams.set("categories", String(params.categories));

  const url = `https://themo.wasmer.app/index.php?${searchParams.toString()}`;
  const res = await fetch(url, { headers });

  if (!res.ok) throw new Error(`Failed to fetch posts: ${res.status}`);

  const totalPages = parseInt(res.headers.get("X-WP-TotalPages") || "1", 10);
  const posts: WPPost[] = await res.json();
  return { posts, totalPages };
}

export async function fetchPost(id: number): Promise<WPPost> {
  const searchParams = new URLSearchParams();
  searchParams.set("rest_route", `/wp/v2/posts/${id}`);
  searchParams.set("_embed", "true");
  const url = `https://themo.wasmer.app/index.php?${searchParams.toString()}`;
  const res = await fetch(url, { headers });
  if (!res.ok) throw new Error(`Failed to fetch post: ${res.status}`);
  return res.json();
}

export async function fetchCategories(): Promise<WPCategory[]> {
  const url = `${API_BASE}/categories`;
  const res = await fetch(url, { headers });
  if (!res.ok) throw new Error(`Failed to fetch categories: ${res.status}`);
  return res.json();
}

export function stripHtml(html: string): string {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getFeaturedImage(post: WPPost): string | undefined {
  return post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
}

export function getPostCategories(post: WPPost): Array<{ id: number; name: string; slug: string }> {
  return post._embedded?.["wp:term"]?.[0] ?? [];
}
