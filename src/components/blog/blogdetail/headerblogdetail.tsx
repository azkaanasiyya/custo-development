import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import useBlog from "@/lib/hooks/useBlog";
import SlideFadeIn from "@/components/animation/fadeIn";

interface HeaderBlogDetailProps {
  slug: string | string[] | undefined;
}

export default function HeaderBlogDetail({ slug }: HeaderBlogDetailProps) {
  const { blog } = useBlog();
  const blogPost = blog.find((post) => post.slug === slug);

  if (!blogPost) {
    return <p>Blog not found.</p>;
  }

  return (
    <div className="flex w-full justify-center">
      <div>
        <SlideFadeIn
          delay={0}
          className="flex flex-col gap-[2rem] w-full max-w-mobile md:max-w-tablet lg:max-w-desktop pt-[9rem]"
        >
          <Link href="/blog">
            <div className="flex flex-row gap-[0.5rem] items-center cursor-pointer">
              <ArrowLeft height={20} width={20} />
              <span className="font-sans font-medium text-[0.75rem] md:text-[0.875rem] leading-[160%] text-grayscale-900">
                Back to Blogs
              </span>
            </div>
          </Link>

          <h2 className="font-sans font-semibold text-[1.75rem] md:text-[2.25rem] lg:text-[2.5rem] leading-[140%] text-gray-950">
            {blogPost.title}
          </h2>

          <div className="flex flex-row items-center gap-[1rem]">
            <Image
              src={
                blogPost.author?.image?.asset?.url || "/placeholder-avatar.jpg"
              }
              alt={blogPost.author?.image?.alt || "Author"}
              width={32}
              height={32}
            />
            <p className="text-l-regular text-[0.875rem] md:text-[1rem] text-gray-600">
              {blogPost.author?.name}
            </p>
            <div className="h-[0.375rem] w-[0.375rem] rounded-full bg-gray-300"></div>
            <p className="text-l-regular text-[0.875rem] md:text-[1rem] text-gray-600">
              {blogPost.date}
            </p>
          </div>
        </SlideFadeIn>
      </div>
    </div>
  );
}
