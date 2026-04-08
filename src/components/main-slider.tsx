"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// import { slides, type Slide } from "@/api/slides";
import { type Slide } from "@/api/slides";
import type { Swiper as SwiperInstance } from "swiper";

import "swiper/css";

type HeroSliderProps = {
  slides?: Slide[] | null;
};

const HeroSlider = ({ slides }: HeroSliderProps) => {
  const data = Array.isArray(slides) ? slides : [];
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = data.length;

  const handleSlideChange = (swiperInstance: SwiperInstance) => {
    setCurrentSlide(swiperInstance.realIndex);
  };

  const handleDotClick = (index: number) => {
    if (swiper) {
      swiper.slideToLoop(index);
    }
  };

  return (
    <section className="relative">
      <Swiper
        onSwiper={setSwiper}
        modules={[Autoplay]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop
        onSlideChange={handleSlideChange}
        className="main-slider"
      >
        {data.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative flex items-end md:items-center pb-10 md:pb-0 min-h-[86vh] md:min-h-[640px] bg-cover bg-[right_center]"
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 z-[1] bg-gradient-to-t md:bg-gradient-to-r from-white via-white/90 to-transparent md:from-white md:via-white/90 md:to-transparent"></div>

              {/* Content */}
              <div className="container mx-auto relative z-10 px-4 md:px-0">
                <div className="row flex items-center">
                  <div className="md:w-6/12 lg:w-7/12 text-center md:text-left p-4 md:p-0">
                    <h3 className="text-[32px] md:text-[70px] leading-[32px] md:leading-[80px] font-extrabold text-[#16406e] capitalize">
                      {slide.title}
                    </h3>

                    <p className="mt-3 md:mt-4 text-[16px] md:text-[18px] line-clamp-2 md:line-clamp-none">
                      {slide.description}
                    </p>

                    <div className="mt-4 md:mt-10 flex flex-col md:flex-row gap-3 justify-center md:justify-start">
                      {/* Call */}
                      <a
                        href={`tel:${slide.phone}`}
                        className="flex items-center gap-2 px-3 py-2 border border-black bg-black text-white rounded-md h-[46px]"
                      >
                        <Image
                          src="/images/call.svg"
                          alt="Call"
                          width={18}
                          height={18}
                          className="invert"
                        />
                        {slide.phone}
                      </a>

                      {/* WhatsApp */}
                      <a
                        href={`https://wa.me/${slide.whatsapp}`}
                        className="flex items-center gap-2 px-3 py-2 border border-black bg-white text-black rounded-md h-[46px]"
                      >
                        <Image
                          src="/images/whatsapp.png"
                          alt="WhatsApp"
                          width={18}
                          height={18}
                        />
                        {slide.whatsapp}
                      </a>
                    </div>

                    {/* Pagination Dots */}
                    <div className=" mt-8 mb-6 md:mt-10 flex gap-3">
                      {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                          key={index}
                          onClick={() => handleDotClick(index)}
                          className={`transition-all duration-300 ease-in-out rounded-full ${
                            currentSlide === index
                              ? "w-8 h-2.5 bg-black"
                              : "w-2.5 h-2.5 bg-white border-2 border-black hover:bg-gray-300"
                          }`}
                          aria-label={`Go to slide ${index + 1}`}
                          title={`Slide ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 z-10">
        <div
          className="h-full bg-black transition-all duration-500 ease-in-out"
          style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
        />
      </div>

      <style jsx global>{`
        .main-slider {
          position: relative;
        }
      `}</style>
    </section>
  );
};

export default HeroSlider;
