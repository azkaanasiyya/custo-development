import { generateSlugBlog } from "@/lib/utils/generateSlugBlog";

export type BlogPostProps = {
  date: string;
  type: string;
  title: string;
  image: string;
  slug?: string;
};

export const rawBlogPosts = [
  {
    date: "Apr 7, 2025",
    type: "CRM Strategy",
    title:
      "5 Effective CRM Strategies to Improve Sales Performance at Every Stage",
    image: "/blog/effective.svg",
  },
  {
    date: "Apr 1, 2025",
    type: "CRM Strategy",
    title: "Why Collaborative CRMs Are Changing the Way Teams Work",
    image: "/blog/collaborative.svg",
  },
  {
    date: "May 30, 2025",
    type: "Product Tips",
    title: "A Practical Guide to Organizing Your CRM Data Effectively",
    image: "/blog/practical.svg",
  },
  {
    date: "Mar 30, 2025",
    type: "Product Tips",
    title: "Common CRM Mistakes and How to Avoid Them Effectively",
    image: "/blog/common.svg",
  },
  {
    date: "Mar 22, 2025",
    type: "Company Updates",
    title: "Custo’s Commitment to Data Security and Transparency",
    image: "/blog/commitment.svg",
  },
  {
    date: "Mar 14, 2025",
    type: "Company Updates",
    title: "Inside Our Decision to Redesign the Custo Interface",
    image: "/blog/inside.svg",
  },
  {
    date: "Mar 5, 2025",
    type: "Customer Success",
    title: "How This Startup Increased Sales by 40 Percent with Custo",
    image: "/blog/startup.svg",
  },
  {
    date: "Feb 28, 2025",
    type: "Customer Success",
    title: "Scaling Operations Seamlessly with Smart Automation",
    image: "/blog/scaling.svg",
  },
  {
    date: "Feb 20, 20255",
    type: "CRM Strategy",
    title: "How a CRM Can Improve Team Collaboration and Transparency",
    image: "/blog/crm.svg",
  },
];

export const blogPosts: BlogPostProps[] = rawBlogPosts.map((post) => ({
  ...post,
  slug: generateSlugBlog(post.title),
}));
