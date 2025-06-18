"use client";

import BlogList from "@/components/common/bloglist";
import { Button } from "@/components/ui/button";
import useBlog from "@/lib/hooks/useBlog";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function MoreBlogDetail() {
  const { slug } = useParams() as { slug: string };
  const {blog}= useBlog();
  const index = blog.findIndex((post) => post.slug === slug);

  const [postCount, setPostCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setPostCount(2); // mobile
      } else if (width < 1024) {
        setPostCount(2); // tablet
      } else {
        setPostCount(3); // desktop
      }
    };

    handleResize(); // panggil saat pertama kali render
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Circular slicing
  const nextPosts: typeof blog = [];
  for (let i = 1; i <= postCount; i++) {
    const nextIndex = (index + i) % blog.length;
    nextPosts.push(blog[nextIndex]);
  }

  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col gap-[2.5rem] w-full max-w-mobile md:max-w-tablet lg:max-w-desktop py-[6.5rem]">
        <div className="flex flex-row justify-between items-center">
          <h2 className="font-sans font-semibold text-[1.75rem] md:text-[2.25rem] lg:text-[2.5rem] leading-[140%] text-grayscale-950">
            More Insights & Tips
          </h2>
          <Link href={"/blog"} className="hidden md:block">
            <Button variant={"Secondary"} size={"small"}>
              Explore More
            </Button>
          </Link>
        </div>
        <BlogList data={nextPosts} />
        <Link href={"/blog"} className="block md:hidden">
          <Button variant={"Secondary"} size={"small"} className="w-full">
            Explore More
          </Button>
        </Link>
        <Link href={"/blog"} className="block md:hidden">
          <Button variant={"Secondary"} size={"small"} className="w-full">
            Explore More
          </Button>
        </Link>
      </div>
    </div>
  );
}
