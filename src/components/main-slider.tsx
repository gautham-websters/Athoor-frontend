"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface Slide {
  id: number;
  bgImage: string;
  title: string;
  description: string;
  phone: string;
  whatsapp: string;
}

// 🔥 Dynamic data (replace later with API/CMS)
const slides: Slide[] = [
  {
    id: 1,
    bgImage: "/uploads/A7405192.png",
    title: "Lorem ipsum dolor sit amet conse.",
    description:
      "Lorem ipsum dolar sit amet constreteur Lorem ipsum dolar sit amet constreteur Lorem ipsum dolar sit amet constreteur.",
    phone: "+971507644472",
    whatsapp: "+971566080777",
  },
  {
    id: 2,
    bgImage: "/uploads/A7406483.png",
    title: "Lorem ipsum dolor sit amet conse.",
    description:
      "Lorem ipsum dolar sit amet constreteur Lorem ipsum dolar sit amet constreteur Lorem ipsum dolar sit amet constreteur.",
    phone: "+971507644472",
    whatsapp: "+971566080777",
  },
  {
    id: 3,
    bgImage: "/uploads/A7405192.png",
    title: "Lorem ipsum dolor sit amet conse.",
    description:
      "Lorem ipsum dolar sit amet constreteur Lorem ipsum dolar sit amet constreteur Lorem ipsum dolar sit amet constreteur.",
    phone: "+971507644472",
    whatsapp: "+971566080777",
  },
];

const HeroSlider = () => {
  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        className="main-slider"
      >
        {slides.map((slide) => (
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

                    <h3 className="text-[32px] md:text-[70px] leading-[32px] md:leading-[80px] font-bold text-[var(--brand-blue)] capitalize">
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
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Pagination (to match your Owl style) */}
        <div className="custom-pagination absolute z-20 bottom-5 md:bottom-14 left-0 md:left-10 w-full md:w-auto flex justify-center md:justify-start gap-2"></div>
      </Swiper>

      {/* Pagination Styling */}
      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          border-radius: 999px;
          background: #fff;
          border: 1px solid #000;
          opacity: 1;
        }

        .custom-pagination .swiper-pagination-bullet-active {
          background: #000;
        }
      `}</style>
    </section>
  );
};

export default HeroSlider;