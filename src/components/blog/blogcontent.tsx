import FadeInSection from "../animation/fadeIn";
import BlogList from "../common/bloglist";

export default function BlogContent() {
  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col gap-[4rem] w-full max-w-mobile md:max-w-tablet lg:max-w-desktop py-[6.5rem]">
        <FadeInSection>
          <div className="flex flex-col gap-[1rem] items-center">
            <h1 className="font-sans font-semibold text-[2rem] md:text-[3rem] lg:text-[3.5rem] leading-[120%] text-grayscale-950">
              The Custo Journal
            </h1>
            <p className="text-xl-regular text-[1rem] md:text-[1.125rem] text-grayscale-600 text-center">
              Get insights and news to to scale your business with confidence.
            </p>
          </div>
        </FadeInSection>
        <BlogList />
      </div>
    </div>
  );
}
