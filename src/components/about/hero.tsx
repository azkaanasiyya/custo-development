"use client";

import Image from "next/image";
import FadeInSection from "../animation/fadeIn";

export default function AboutHero() {
  return (
    <div className="p-2">
      <div className="hero-section pt-[7.5rem] pb-20 px-6 rounded-[12px] md:pt-[9.5rem] md:pb-[6rem] md:px-[3.5rem] flex flex-col bg-grayscale-50 items-center">
        <div className="container w-full mx-auto max-w-[67rem] flex flex-col gap-16 items-center justify-center">

          <FadeInSection delay={0.3} className="w-full" variant="bottom-to-top">
            <div className="header flex flex-col gap-4 items-center">
              <h1 className="text-[32px] leading-[120%] font-semibold md:text-[56px] md:leading-[120%]">
                About Custo
              </h1>
              <p className="text-[16px] leading-[160%] max-w-[41rem] text-center text-grayscale-600 md:text-xlarge">
                Custo is a team of passionate makers dedicated to building tools
                that empower businesses to grow.
              </p>
            </div>
          </FadeInSection>

          <div className="w-full">
            <div className="content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.25rem] w-full">
              <FadeInSection delay={0.3} className="flex flex-col gap-[1.25rem]">
                <Image src="/content/content1.png" alt="content" width={344} height={198}  />
                <Image src="/content/content2.png" alt="content" width={344} height={198}  />
              </FadeInSection>
              <FadeInSection delay={0.3}>
                <Image src="/content/content3.png" alt="content" width={344} height={416}  />
              </FadeInSection>
              <FadeInSection delay={0.3} className="flex flex-col gap-[1.25rem] hidden lg:flex">
                <Image src="/content/content4.png" alt="content" width={344} height={198}  />
                <Image src="/content/content5.png" alt="content" width={344} height={198}  />
              </FadeInSection>
            </div>
          </div>

          <FadeInSection stagger={0.3} variant="bottom-to-top" className="w-full">
            <div className="clients flex flex-col gap-8 pt-[0.5rem] justify-center items-center w-full overflow-hidden">
              <p className="text-[16px] leading-[160%] max-w-[41rem] text-center text-grayscale-600 md:text-xlarge">
                Trusted by companies around the world
              </p>
              <div className="flex flex-row gap-[4rem] opacity-40">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Image
                    key={i}
                    src={`/client/client${i + 1}.png`}
                    alt={`client${i + 1}`}
                    width={141}
                    height={28}
                    className="w-[141px] h-[28px]"
                  />
                ))}
              </div>
            </div>
          </FadeInSection>

        </div>
      </div>
    </div>
  );
}
