// components/FeaturedProducts.jsx
"use client"; // needed for Swiper in Next 13+ app directory

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const defaultProducts = [
  {
    id: 1,
    name: "Wishbone Chair",
    images: [
      "/uploads/9b8437e0-8891-4eda-b0d0-4f4245349602.png",
      "/uploads/9b8437e0-8891-4eda-b0d0-4f4245349602.png",
    ],
    colors: ["#000000", "rgb(163,161,160)", "rgb(28,87,133)"],
  },
  {
    id: 2,
    name: "Baker Golden Leg Chair",
    images: [
      "/uploads/4cd670865fbaa84e2d641b52b4c251946e45faa3.png",
      "/uploads/4cd670865fbaa84e2d641b52b4c251946e45faa3.png",
    ],
    colors: ["#000000", "rgb(163,161,160)", "rgb(28,87,133)"],
  },
];

const FeaturedProducts = ({ products = defaultProducts }) => {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between py-4 mb-6">
          <h3 className="text-2xl md:text-4xl font-semibold text-center md:text-left">
            Featured Products
          </h3>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
                {/* Product Image Carousel */}
                <Swiper
                  modules={[Pagination]}
                  spaceBetween={10}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  className="h-64 md:h-72"
                >
                  {product.images.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <div className="relative w-full h-64 md:h-72">
                        <Image
                          src={img}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div className="p-4 flex flex-col gap-2">
                  {/* Color Switcher */}
                  <div className="flex gap-2">
                    {product.colors.map((color, idx) => (
                      <label
                        key={idx}
                        className={`w-6 h-6 rounded-full cursor-pointer border-2 ${
                          idx === 0 ? "border-black" : "border-transparent"
                        }`}
                        style={{ backgroundColor: color }}
                      >
                        <input
                          type="radio"
                          name={`color-${product.id}`}
                          className="hidden"
                          defaultChecked={idx === 0}
                        />
                      </label>
                    ))}
                  </div>

                  <div className="text-lg md:text-xl font-medium truncate">
                    {product.name}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedProducts;
