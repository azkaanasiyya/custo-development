// utils/getNextPosts.ts
import { blogPosts } from "@/components/data/blog";

export function getNextPosts(slug: string, count = 3) {
  const index = blogPosts.findIndex((post) => post.slug === slug);
  if (index === -1) return [];
  return blogPosts.slice(index + 1, index + 1 + count);
}
