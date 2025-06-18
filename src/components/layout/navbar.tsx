"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import useIsMobile from "@/lib/hooks/useIsMobile";
import { animateMobileMenu } from "@/lib/animation/animateMobileMenu";
import gsap from "gsap";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLUListElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const reverseAnimation = () => {
    timelineRef.current?.reverse();
  };

  useEffect(() => {
    if (isOpen && isMobile) {
      const tl = animateMobileMenu(containerRef, menuItemsRef, buttonsRef);
      timelineRef.current = tl;
    } else {
      reverseAnimation();
    }
  }, [isOpen, isMobile]);

  return (
    <nav
      className={`lg:px-0 absolute top-0 w-full z-[100] md:bg-transparent ${
        isOpen ? "bg-white" : "bg-transparent"
      } `}
    >
      <div className="w-full max-w-mobile md:max-w-tablet lg:max-w-desktop mx-auto p-[1.5rem]">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <Image src="/logo/Logo.svg" alt="Logo" width={92} height={24} />
          </Link>

          <ul className="hidden md:flex flex-1 justify-start gap-2 cursor-pointer">
            <li className="px-3 py-2">
              <Link href="/about">
                <p className="text-grayscale-950">About</p>
              </Link>
            </li>
            <li className="px-3 py-2">
              <Link href="/pricing">
                <p className="text-grayscale-950">Pricing</p>
              </Link>
            </li>
            <li className="px-3 py-2">
              <Link href="/blog">
                <p className="text-grayscale-950">Blog</p>
              </Link>
            </li>
          </ul>

          <div className="hidden md:flex gap-3">
            <Link href="/contact">
              <Button
                variant="Secondary"
                size="small"
                className="cursor-pointer"
              >
                Contact Sales
              </Button>
            </Link>
            <Button variant="primary" size="small" className="cursor-pointer">
              Start for Free
            </Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`border max-w-mobile mx-auto ${
          isOpen && isMobile ? "block" : "hidden"
        }`}
      ></div>
      {isOpen && (
        <div
          className="bg-white md:hidden w-full py-[1.25rem]"
          ref={containerRef}
          style={{ display: "none" }}
        >
          <div className="flex flex-col gap-5 justify-center items-center max-w-mobile mx-auto">
            <ul
              className="flex flex-col gap-[1rem] text-center"
              ref={menuItemsRef}
            >
              <li>
                <Link href="/about" onClick={() => setIsOpen(false)}>
                  <p className="text-grayscale-950 py-[0.5]">About</p>
                </Link>
              </li>
              <li>
                <Link href="/pricing" onClick={() => setIsOpen(false)}>
                  <p className="text-grayscale-950 py-[0.5]">Pricing</p>
                </Link>
              </li>
              <li>
                <Link href="/blog" onClick={() => setIsOpen(false)}>
                  <p className="text-grayscale-950 py-[0.5]">Blog</p>
                </Link>
              </li>
            </ul>
            <div className="flex flex-col gap-3 w-full" ref={buttonsRef}>
              <Link href="/contact">
                <Button variant="Secondary" size="small" className="w-full">
                  Contact Sales
                </Button>
              </Link>
              <Link href={"/start"}>
                <Button variant="primary" size="small" className="w-full">
                  Start for Free
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
