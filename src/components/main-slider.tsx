// components/MainSlider.jsx
import Image from "next/image";
import Slider from "react-slick";

// Sample slide data
const slides = [
  {
    id: 1,
    bgImage: "/uploads/A7405192.png",
    title: "Lorem ipsum dolor sit amet conse.",
    description:
      "Lorem ipsum dolar sit amet constreteur Lorem ipsum dolar sit amet constreteur Lorem ipsum dolar sit amet constreteur.",
    phone: "+971 507644472",
    whatsapp: "+971 566080777",
  },
  {
    id: 2,
    bgImage: "/uploads/A7406483.png",
    title: "Lorem ipsum dolor sit amet conse.",
    description:
      "Lorem ipsum dolar sit amet constreteur Lorem ipsum dolar sit amet constreteur Lorem ipsum dolar sit amet constreteur.",
    phone: "+971 507644472",
    whatsapp: "+971 566080777",
  },
  {
    id: 3,
    bgImage: "/uploads/A7405192.png",
    title: "Lorem ipsum dolor sit amet conse.",
    description:
      "Lorem ipsum dolar sit amet constreteur Lorem ipsum dolar sit amet constreteur Lorem ipsum dolar sit amet constreteur.",
    phone: "+971 507644472",
    whatsapp: "+971 566080777",
  },
];

const MainSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Slider {...settings} className="relative">
      {slides.map((slide) => (
        <div key={slide.id}>
          <div
            className="relative flex items-end md:items-center pb-5 md:pb-0 min-h-[400px] md:min-h-[600px] bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-20"></div>

            {/* Content */}
            <div className="container mx-auto relative z-10 px-4 md:px-0">
              <div className="md:flex md:items-center">
                <div className="md:w-7/12 text-center md:text-left text-white md:text-black p-4 md:p-0">
                  <h3 className="text-2xl md:text-4xl font-bold capitalize mb-3">
                    {slide.title}
                  </h3>
                  <p className="description mb-5 md:mb-8 text-sm md:text-base">
                    {slide.description}
                  </p>
                  <div className="flex flex-col md:flex-row gap-3 justify-center md:justify-start">
                    <a
                      href={`tel:${slide.phone}`}
                      className="flex items-center gap-2 px-4 py-2 border border-black bg-black text-white rounded-md"
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
                    <a
                      href={`tel:${slide.whatsapp}`}
                      className="flex items-center gap-2 px-4 py-2 border border-black bg-white text-black rounded-md"
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
        </div>
      ))}
    </Slider>
  );
};

export default MainSlider;
