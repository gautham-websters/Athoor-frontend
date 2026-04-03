// components/FeaturedEvents.jsx
"use client"; // Required if using Swiper in Next 13+ app directory

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";

interface EventItem {
  id: number;
  name: string;
  description: string;
  image: string;
}

type FeaturedEventsProps = {
  events?: EventItem[];
};

const defaultEvents: EventItem[] = [
  {
    id: 1,
    name: "Yalumba - Ramadan",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
    image: "/uploads/c4faf20e2c438e9537f96a53c03c7a6c2724b1cb.jpg",
  },
  {
    id: 2,
    name: "Palm Jebel Ali Launch",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
    image: "/uploads/29a76e3b4d8da1b73f8b6b63667f4df73cd51847.png",
  },
  {
    id: 3,
    name: "MOTN",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
    image: "/uploads/motn.jpg",
  },
];

const FeaturedEvents: React.FC<FeaturedEventsProps> = ({
  events = defaultEvents,
}) => {
  return (
    <div className="px-0 py-12 md:py-20 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between py-4 mb-6">
          <h3 className="text-2xl md:text-4xl font-semibold text-center md:text-left w-full md:w-auto">
            Check Out Other Events
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
          {events.map((event) => (
            <SwiperSlide key={event.id}>
              <div className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col">
                <div className="relative w-full h-60 md:h-72">
                  <Image
                    src={event.image}
                    alt={event.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col justify-between flex-1">
                  <h4 className="text-xl md:text-2xl font-medium mt-2 truncate">
                    {event.name}
                  </h4>
                  <p className="text-gray-600 mt-2 line-clamp-3">
                    {event.description}
                  </p>
                  <button className="mt-4 inline-flex items-center gap-2 bg-black text-white py-2 px-4 rounded-md transition-transform hover:-translate-y-2">
                    Learn more
                    <Image
                      src="/assets/images/arrow_link.svg"
                      alt="arrow"
                      width={12}
                      height={12}
                    />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedEvents;
