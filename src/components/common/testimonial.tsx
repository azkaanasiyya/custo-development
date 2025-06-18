"use client";

import { useRef, useState, useEffect } from "react";
import Header from "@/components/common/header";
import Image from "next/image";
import testimonials from "../data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import useMediaQuery from "@/hooks/useMediaQuery";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Modal } from "../modal/modal";

export default function Testimonial() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const prevRefDesktop = useRef<HTMLButtonElement>(null);
  const nextRefDesktop = useRef<HTMLButtonElement>(null);
  const prevRefMobile = useRef<HTMLButtonElement>(null);
  const nextRefMobile = useRef<HTMLButtonElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  useEffect(() => {
    if (!swiperInstance) return;

    const prev = isDesktop ? prevRefDesktop.current : prevRefMobile.current;
    const next = isDesktop ? nextRefDesktop.current : nextRefMobile.current;

    swiperInstance.params.navigation.prevEl = prev;
    swiperInstance.params.navigation.nextEl = next;

    swiperInstance.navigation.destroy();
    swiperInstance.navigation.init();
    swiperInstance.navigation.update();
  }, [isDesktop, swiperInstance]);

  return (
    <div className="testimonial-section py-12 px-6 md:py-20 md:px-12 lg:py-[6.5rem] lg:px-[1rem] flex flex-col justify-center items-center overflow-x-hidden">
        <div className="container max-w-[67rem] flex flex-col justify-center items-center gap-[4rem]">
           <Header
                title="Real Stories from Real Users"
                description="Hear how Custo has helped businesses close more deals, collaborate better, and stay organized."
              />
           
          <div className="relative w-full">
            <button
            ref={prevRefDesktop}
            className="hidden lg:flex cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-grayscale-200 rounded-full w-8 h-8 hover:bg-grayscale-200 transition items-center justify-center"
            >
              <i className="ri-arrow-left-line text-black text-l-regular"></i>
            </button>
            <button
            ref={nextRefDesktop}
            className="hidden lg:flex cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-grayscale-200 rounded-full w-8 h-8 hover:bg-grayscale-200 transition items-center justify-center"
            >
              <i className="ri-arrow-right-line text-black text-l-regular"></i>
            </button>

            <Swiper
              modules={[Navigation, Pagination, A11y]}
              slidesPerView={1}
              spaceBetween={0}
              initialSlide={1}
              breakpoints={{
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 1.2 }
              }}
              centeredSlides={true}
              navigation={{
              prevEl: isDesktop ? prevRefDesktop.current : prevRefMobile.current,
              nextEl: isDesktop ? nextRefDesktop.current : nextRefMobile.current,
              }}
              onBeforeInit={(swiper) => {
              if (typeof swiper.params.navigation === "object" && swiper.params.navigation !== null) {
                swiper.params.navigation.prevEl = isDesktop ? prevRefDesktop.current : prevRefMobile.current;
                swiper.params.navigation.nextEl = isDesktop ? nextRefDesktop.current : nextRefMobile.current;
              }
              }}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              onSwiper={(swiper) => {
                setSwiperInstance(swiper);
                setActiveIndex(swiper.activeIndex);
              }}
              className="!overflow-visible"
              >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`transition-transform duration-500 ease-in-out p-4 ${
                      index === activeIndex ? "scale-110 z-10" : "scale-90 opacity-70"
                    }`}
                  >
                    <div className="flex flex-col md:flex-row gap-4 w-full items-stretch justify-center">
                      <div className="w-full h-auto md:w-1/2">
                        <div className="relative w-full aspect-[49/51] h-auto md:h-full lg:aspect-auto rounded-xl overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                          <Modal></Modal>
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 lg:w-full">
                        <div className="flex flex-col gap-8 p-6 md:p-8 rounded-[20px] border border-grayscale-200 shadow bg-white">
                          <Image
                            src={item.stars}
                            alt="stars"
                            width={116}
                            height={20}
                          />
                          <p className="text-medium md:text-large text-grayscale-600">
                            “{item.quote}”
                          </p>
                          <div className="flex flex-col gap-0.5">
                            <p className="text-large md:text-xlarge text-grayscale-950 font-medium">
                              {item.name}
                            </p>
                            <p className="text-small md:text-medium text-grayscale-600">
                              {item.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="flex lg:hidden justify-center gap-4 mt-6">
              <button
                ref={prevRefMobile}
                className="bg-white border cursor-pointer border-grayscale-200 rounded-full w-8 h-8 hover:bg-grayscale-200 transition flex items-center justify-center"
              >
                <i className="ri-arrow-left-line text-black text-l-regular"></i>
              </button>
              <button
                ref={nextRefMobile}
                className="bg-white border cursor-pointer border-grayscale-200 rounded-full w-8 h-8 hover:bg-grayscale-200 transition flex items-center justify-center"
              >
                <i className="ri-arrow-right-line text-black text-l-regular"></i>
              </button>
            </div>
          </div>
        </div>
    </div>
  );
}
