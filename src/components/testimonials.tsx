"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "John Doe",
    role: "CEO",
    company: "Company A",
    image: "/assets/icons/customer.png",
    text: "This company has a High Quality Customer Service, great communication and quick service. They were able to deliver the next day. I highly recommend their service! Amazing company",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    company: "Company B",
    image: "/assets/icons/customer.png",
    text: "I recently rented furniture from Athoor Rental, and I couldn't be more pleased with the experience. From start to finish, everything was absolutely perfect.",
  },
  {
    name: "Alice Johnson",
    role: "Founder",
    company: "Company C",
    image: "/assets/icons/customer.png",
    text: "On behalf of Sobha, I wanted to extend our heartfelt thanks for the exceptional service and top-quality furniture rental solutions you provided for our recent project/event.",
  },
  {
    name: "Bob Williams",
    role: "Manager",
    company: "Company D",
    image: "/assets/icons/customer.png",
    text: "We have consistently partnered with Athoor Party and Services for numerous events. Their wide range of creative furniture options caters to both indoor and outdoor settings.",
  },
  {
    name: "Cathy Lee",
    role: "Designer",
    company: "Company E",
    image: "/assets/icons/customer.png",
    text: "I wanted to take a moment to express my sincere appreciation for the excellent service and high-quality furniture rental solutions provided by Athoor Furniture Rental over the last five years.",
  },
  {
    name: "David Kim",
    role: "Developer",
    company: "Company F",
    image: "/assets/icons/customer.png",
    text: "As an event organizer, clients might change their mind many times and your vision of the venue design might change too — here comes the amazing work of Athoor's support and understanding.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-4xl md:text-5xl font-semibold text-center py-10">
          Our Happy Clients!
        </h3>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial p-6 shadow-md h-full flex flex-col rounded-lg bg-white">
                <div className="testimonial-text text-gray-700 flex-1">
                  <p>{t.text}</p>
                </div>
                <div className="testimonial-author mt-4 flex items-center">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full mr-3"
                  />
                  <div>
                    <h6 className="mb-0 font-medium">{t.name}</h6>
                    <small className="text-gray-500">
                      {t.role}, {t.company}
                    </small>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;