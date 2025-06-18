"use client";

import Image from "next/image";
import FadeInSection from "../animation/fadeIn";

export default function About() {
  return (
      <div className="about-section py-12 px-6 md:py-20 md:px-12 lg:px-[4rem] lg:py-[6.5rem] flex flex-col justify-center items-center">
        <div className="container w-full mx-auto max-w-[67rem] flex flex-col gap-16 items-start lg:items-center lg:justify-center">

          <FadeInSection delay={0.3} className="w-full" variant="bottom-to-top">
              <div className="header flex flex-col gap-4 lg:flex-row justify-between lg:items-end">
              <div className="typography w-80 lg:w-[27.1875rem]">
                <h3 className="text-[28px] md:text-[36px] leading-[140%] font-semibold lg:text-[40px]">
                  Guided by Purpose and Principles
                </h3>
              </div>
              <p className="text-large md:text-xlarge text-grayscale-600 max-w-[32.875rem]">
                Our principles shape every decision we make. They reflect who we are and how we aim to make a meaningful difference.
              </p>
            </div>
          </FadeInSection>
          
          <FadeInSection stagger={0.3} variant="bottom-to-top" className="w-full">
            <div className="list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-[1.25rem] border shadow-sm border-grayscale-200">
              <FadeInSection delay={0.5} className="flex flex-col p-5 md:p-[2.5rem] gap-[1.5rem] border-r">
                <Image src="/user.svg" alt="list" width={48} height={48} />
                <div className="flex flex-col gap-[0.75rem]">
                  <div className="typography text-grayscale-950">
                    <h4>People First</h4>
                  </div>
                  <p className="text-medium md:text-large text-grayscale-600">
                    Our users, team, and community come before everything else. When people thrive, so does our work.
                  </p>
                </div>
              </FadeInSection>

              <FadeInSection delay={0.5} className="flex flex-col p-5 md:p-[2.5rem] gap-[1.5rem] border-t md:border-r">
                <Image src="/heart.svg" alt="list" width={48} height={48} />
                <div className="flex flex-col gap-[0.75rem]">
                  <div className="typography text-grayscale-950">
                    <h4>Lead with Empathy</h4>
                  </div>
                  <p className="text-large text-grayscale-600">
                    Empathy helps us understand before we act. It drives how we solve real problems.
                  </p>
                </div>
              </FadeInSection>

              <FadeInSection delay={0.5} className="flex flex-col border-t p-5 md:p-[2.5rem] gap-[1.5rem] md:col-span-2 lg:col-span-1 lg:border-t-0 lg:border-l">
                <Image src="/shield.svg" alt="list" width={48} height={48} />
                <div className="flex flex-col gap-[0.75rem]">
                  <div className="typography text-grayscale-950">
                    <h4>Grow Together</h4>
                  </div>
                  <p className="text-large text-grayscale-600">
                    Progress is a shared journey. We grow by learning from one another and lifting each other up.
                  </p>
                </div>
              </FadeInSection>
            </div>
          </FadeInSection>
          
        </div>
      </div>
  );
}
