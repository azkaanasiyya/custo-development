import { useEffect, useState } from "react";
import { PortableTextBlock } from "@portabletext/types";
import sanityClient from "../utils/api";
import { generateSlugBlog } from "../utils/generateSlugBlog";

export interface blogProps {
  _id: string;
  title: string;
  category:{
    title: string;
  };
  slug: string;
  author: {
    name: string;
    image: { asset: { url: string }; alt: string };
  };
  mainImage?: { asset?: { url: string }; alt?: string };
  body: PortableTextBlock[];
  date: string;
}

export default function useBlog() {
  const [blog, setBlog] = useState<blogProps[]>([]);

  useEffect(() => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    sanityClient
      .fetch(
        `*[_type == "blog"]{
          _id,
          title,
          date,
          category -> {
            title
          },
          author -> {
            name,
            image {
              asset -> {
                _id,
                url
              },
              alt
            }
          },
         mainImage {
            asset -> {
                _id,
                url
            },
            alt
          },
          body
        }`
      )
      .then((data: blogProps[]) => {
        const blogWithSlug = data.map((item) => {
          const d = new Date(item.date);
          const day = String(d.getDate()).padStart(2, "0");
          const month = months[d.getMonth()];
          const year = d.getFullYear();

          return {
            ...item,
            slug: generateSlugBlog(item.title),
            date: `${month} ${day}, ${year}`,
          };
        });
        setBlog(blogWithSlug);
      })
      .catch(console.error);
  }, []);

  return { blog };
}
