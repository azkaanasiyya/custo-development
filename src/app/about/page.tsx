"use client";

import About from "@/components/about/about";
import AboutBlog from "@/components/about/blog";
import AboutHero from "@/components/about/hero";
import AboutQuote from "@/components/about/quote";
import AboutTeam from "@/components/about/team";
import AboutTestimonial from "@/components/common/testimonial";
import CTA from "@/components/layout/cta";
import { useEffect, useState } from "react";

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loading selesai setelah komponen di-mount
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 0); // Bisa tambahkan delay jika diperlukan

    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-xl font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <div>
      <AboutHero />
      <About />
      <AboutQuote />
      <AboutTeam />
      <AboutBlog />
      <AboutTestimonial />
      <CTA />
    </div>
  );
}
