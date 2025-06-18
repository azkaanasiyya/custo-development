import slugify from "slugify";

export function generateSlugBlog(text: string): string {
  return slugify(text, { lower: true, strict: true });
}
