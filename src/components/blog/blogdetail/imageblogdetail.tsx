import useBlog from "@/lib/hooks/useBlog";
import Image from "next/image";

interface ImageBlogDetailProps {
  slug: string | string[] | undefined;
}

export default function ImageBlogDetail({ slug }: ImageBlogDetailProps) {
  const { blog } = useBlog();
  const blogPosts = blog.find((post) => post.slug === slug);

  if (!blog) {
    return <p>Blog not found.</p>;
  }
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-full max-w-mobile md:max-w-tablet lg:max-w-desktop">
        <div className="relative w-full h-[240px] md:h-[360px] lg:h-[30.125rem]">
          <Image
            src={blogPosts?.mainImage?.asset?.url || "/placeholder-image.jpg"}
            alt={blogPosts?.mainImage?.alt || "Blog Image"}
            fill
            className="object-cover rounded-[1rem]"
            sizes="(max-width: 67rem) 100vw, 67rem"
          />
        </div>
      </div>
    </div>
  );
}
