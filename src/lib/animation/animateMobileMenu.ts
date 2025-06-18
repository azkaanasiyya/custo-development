import gsap from "gsap";

export const animateMobileMenu = (
  containerRef: React.RefObject<HTMLDivElement | null>,
  menuItemsRef: React.RefObject<HTMLUListElement | null>,
  buttonsRef: React.RefObject<HTMLDivElement | null>
) => {
  if (!containerRef.current || !menuItemsRef.current || !buttonsRef.current)
    return null;

  const tl = gsap.timeline({ paused: true });

  // Tampilkan container
  tl.set(containerRef.current, { display: "block" });

  // Animasi container fade-in & slide dari atas
  tl.fromTo(
    containerRef.current,
    { y: -30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
  );

  // Animasi setiap item menu
  tl.from(
    menuItemsRef.current.children,
    {
      y: 20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.3,
      ease: "power2.out",
    },
    "-=0.2"
  );

  // Animasi tombol Contact & Start
  tl.from(
    buttonsRef.current!.children,
    {
      y: 20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.3,
      ease: "power2.out",
    },
    "-=0.3"
  );

  tl.play();
  return tl;
};
