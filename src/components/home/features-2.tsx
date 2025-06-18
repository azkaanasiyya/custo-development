import Image from "next/image";
import FadeInSection from "../animation/fadeIn";

export default function Features2() {
  return (
    <div className="flex justify-center py-12 px-6 md:py-20 md:px-12 lg:px-16 lg:py-[6.5rem]">
      <div className="flex flex-col gap-[4rem] md:gap-[5rem] w-full max-w-mobile md:max-w-tablet lg:max-w-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[1.25rem]">
          <div className="relative overflow-hidden">
            <FadeInSection delay={0.2}>
              <div className="relative overflow-hidden">
                <Image
                  src="/features/Background.png"
                  alt=""
                  width={454}
                  height={440}
                  className="hidden lg:block rounded-[1.25rem]"
                />
              </div>
              <div className="absolute top-1/2 left-55 -translate-x-1/2 -translate-y-1/2">
                <Image
                  src="/features/img-1/Component-1.png"
                  alt=""
                  width={240}
                  height={282}
                  className="hidden lg:block "
                />
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 -left-20">
                <Image
                  src="/features/img-1/Component-2.png"
                  alt=""
                  width={168}
                  height={122}
                  className="hidden lg:block "
                />
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 -right-0">
                <Image
                  src="/features/img-1/Component-3.png"
                  alt=""
                  width={168}
                  height={122}
                  className="hidden lg:block "
                />
              </div>
            </FadeInSection>
          </div>

          <div className="flex flex-col gap-[1rem]">
            <p className="text-xl-medium text-[1rem] md:text-[1.125rem] text-primary-500">
              Analytics & Reporting
            </p>
            <h2 className="font-sans font-semibold text-[1.75rem] md:text-[2.25rem] lg:text-[2.5rem] leading-[140%] text-grayscale-950">
              Understand Your Business Like Never Before
            </h2>
            <p className="text-xl-regular text-grayscale-600">
              Get real-time insights into sales performance, customer behavior,
              and business growth.
            </p>
          </div>

          <div className="w-full h-[317px] md:h-[667px] relative lg:hidden block">
            <Image
              src="/features/Background.png"
              alt=""
              fill
              className="object-cover rounded-[1.25rem]"
            />
            <Image
              src="/features/img-1/Component-2.png"
              alt=""
              width={168}
              height={122}
              className="absolute top-1/2 left-2 -translate-y-1/2"
            />
            <Image
              src="/features/img-1/Component-1.png"
              alt=""
              width={240}
              height={282}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <Image
              src="/features/img-1/Component-3.png"
              alt=""
              width={168}
              height={122}
              className="absolute top-1/2 right-2 -translate-y-1/2"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[1.25rem]">
          <div className="relative overflow-hidden">
            <FadeInSection className="relative rounded-[1.25rem]">
              <Image
                src="/features/Background.png"
                alt=""
                width={454}
                height={440}
                className="hidden lg:block rounded-[1.25rem]"
              />
            </FadeInSection>
            <FadeInSection className="absolute top-9 translate-y-1/2 left-25">
              <Image
                src="/features/img-2/Component-4.png"
                alt=""
                width={240}
                height={60}
                className="hidden lg:block"
              />
            </FadeInSection>
            <FadeInSection className="absolute top-5 translate-y-1/2 translate-x-1/2 -left-6">
              <Image
                src="/features/img-2/Component-5.png"
                alt=""
                width={240}
                height={232}
                className="hidden lg:block "
              />
            </FadeInSection>
            <FadeInSection delay={0.2} className="absolute top-16 translate-y-1/2 translate-x-1/2 left-65">
              <Image
                src="/features/img-2/Cursor-1.png"
                alt=""
                width={90}
                height={56}
                className="hidden lg:block "
              />
            </FadeInSection>
            <FadeInSection className="absolute top-65 translate-y-1/2 translate-x-1/2 left-40">
              <Image
                src="/features/img-2/Cursor-2.png"
                alt=""
                width={84}
                height={56}
                className="hidden lg:block "
              />
            </FadeInSection>
          </div>
          <div className="flex flex-col gap-[1rem]">
            <p className="text-xl-medium text-[1rem] md:text-[1.125rem] text-primary-500">
              Multi-User Collaboration
            </p>
            <h2 className="font-sans font-semibold text-[1.75rem] md:text-[2.25rem] lg:text-[2.5rem] leading-[140%] text-grayscale-950">
              Empower Your Team with Real-Time Sync
            </h2>
            <p className="text-xl-regular text-grayscale-600">
              Collaborate effortlessly with your team by sharing information,
              notes, and real-time updates
            </p>
          </div>
          <div className="w-full h-[317px] md:h-[667px] relative lg:hidden block overflow-hidden">
            <Image
              src="/features/Background.png"
              alt=""
              fill
              className="object-cover rounded-[1.25rem]"
            />
            <Image
              src="/features/img-2/Component-5.png"
              alt=""
              width={240}
              height={232}
              className="absolute top-1/2 left-1/2 -translate-x-1/2"
            />
            <Image
              src="/features/img-2/Component-4.png"
              alt=""
              width={240}
              height={60}
              className="absolute top-1/2 -translate-x-1/2 left-1/2"
            />
            <Image
              src="/features/img-2/Cursor-1.png"
              alt=""
              width={90}
              height={56}
              className="absolute top-16 right-12"
            />
            <Image
              src="/features/img-2/Cursor-2.png"
              alt=""
              width={84}
              height={56}
              className="absolute bottom-65 left-12"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[1.25rem]">
          <div className="relative overflow-hidden">
            <FadeInSection className="relative rounded-[1.25rem]">
              <Image
                src="/features/Background.png"
                alt=""
                width={454}
                height={440}
                className="hidden lg:block rounded-[1.25rem]"
              />
            </FadeInSection>
            <FadeInSection className="absolute top-1/2 -translate-y-1/2">
              <Image
                src="/features/img-3/Component-6.png"
                alt=""
                width={454}
                height={440}
                className="hidden lg:block"
              />
            </FadeInSection>
          </div>
          <div className="flex flex-col gap-[1rem]">
            <p className="text-xl-medium text-[1rem] md:text-[1.125rem] text-primary-500">
              Email Integration
            </p>
            <h2 className="font-sans font-semibold text-[1.75rem] md:text-[2.25rem] lg:text-[2.5rem] leading-[140%] text-grayscale-950">
              Manage Emails Without Leaving Your CRM
            </h2>
            <p className="text-xl-regular text-grayscale-600">
              Sync with your email to send, receive, and track conversations
              directly from the CRM.
            </p>
          </div>
          <div className="w-full h-[317px] md:h-[667px] relative lg:hidden block">
            <Image
              src="/features/Background.png"
              alt=""
              fill
              className="object-cover rounded-[1.25rem]"
            />
            <Image
              src="/features/img-3/Component-6.png"
              alt=""
              width={454}
              height={440}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
