"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SelectorSlideFadeIn {
  selector: string;
  direction?: "x" | "y";
  from?: number;
  toOpacity?: number;
  staggerDelay?: number;
  delay?: number;
  start?: string;
}

interface SlideFadeInProps {
  children: React.ReactNode;
  items: SelectorSlideFadeIn[];
  delay?: number;
  duration?: number;
  staggerDelay?: number;
  className?: string;
}

export default function SlideFadeIn({
  children,
  items,
  delay = 0,
  duration = 0.8,
  staggerDelay = 0,
  className = "",
}: SlideFadeInProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleSelectors, setVisibleSelectors] = useState<string[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const observedElements: { el: Element; selector: string }[] = [];

    // Fungsi untuk pasang IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const found = observedElements.find((o) => o.el === el);
            if (!found) return;

            const sel = found.selector;

            // Cek kalau selector ini belum pernah visible
            setVisibleSelectors((prev) => {
              if (!prev.includes(sel)) return [...prev, sel];
              return prev;
            });

            observer.unobserve(el); // stop observe setelah muncul sekali
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1, // 10% visible
      }
    );

    // Daftarkan semua elemen dari semua selector di items
    items.forEach(({ selector }) => {
      const els = containerRef.current!.querySelectorAll(selector);
      els.forEach((el) => {
        observedElements.push({ el, selector });
        observer.observe(el);
      });
    });

    return () => {
      observer.disconnect();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf("*");
    };
  }, [items]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Untuk setiap selector yang sudah visible, jalankan animasinya
    visibleSelectors.forEach((selector) => {
      const item = items.find((i) => i.selector === selector);
      if (!item) return;

      const { direction = "y", from = 30 } = item;
      const elements = containerRef.current!.querySelectorAll(selector);

      const fromVars =
        direction === "x"
          ? { opacity: 0, x: from }
          : { opacity: 0, y: from };

      const toVars =
        direction === "x"
          ? { opacity: item.toOpacity ?? 1, x: 0 }
          : { opacity: item.toOpacity ?? 1, y: 0 };

      elements.forEach((el, index) => {
        el.setAttribute("style", "will-change: transform, opacity");
        gsap.fromTo(
          el,
          fromVars,
          {
            ...toVars,
            duration,
            delay: (item.delay ?? delay) + index * (item.staggerDelay ?? staggerDelay),
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: item.start ?? "top 90%",
              end: "bottom 15%",
              toggleActions: "play reverse play reverse",
              // markers: true,
            },
          }
        );
      });
    });
    ScrollTrigger.refresh();
  }, [visibleSelectors, delay, duration, staggerDelay, items]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
