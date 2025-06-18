"use client";

import { useMediaQuery } from "react-responsive";
import Header from "@/components/common/header";
import { Button } from "../ui/button";
import BlogList from "../common/bloglist";
import Link from "next/link";
import FadeInSection from "../animation/fadeIn";

export default function AboutBlog() {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 641px) and (max-width: 1024px)" });

  let limit = 3;
  if (isMobile) limit = 1;
  else if (isTablet) limit = 2;

  return (
    <div className="blog-section py-12 px-6 md:py-20 md:px-12 lg:py-[6.5rem] lg:px-4 flex flex-col justify-center items-center">
        <div className="container max-w-[67rem] flex flex-col justify-center items-center gap-[4rem]">
          <Header
            title="The Custo Journal"
            description="Get insights and news to scale your business with confidence."
            data-animate="header"
          />

          <FadeInSection delay={0.5}>
            <BlogList limit={limit} />
          </FadeInSection>

          <FadeInSection delay={0.5}>
            <Link href="/blog">
              <Button variant="Secondary" size="small">
                Explore More
              </Button>
            </Link>
          </FadeInSection>
        </div>
    </div>
  );
}
