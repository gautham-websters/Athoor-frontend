// components/OurEvents.jsx
import Image from "next/image";
import Slider from "react-slick";

// Sample events data
const events = [
  {
    id: 1,
    name: "MOTN",
    description: "Lorem ipsum dolar sit amet constreteur Lorem ipsum dolar sit amet constreteur Lorem ipsum dolar sit amet constreteur",
    img: "/uploads/motn.jpg",
  },
  {
    id: 2,
    name: "ICC World Cup",
    description: "Lorem ipsum dolar sit amet constreteur Lorem ipsum dolar sit amet constreteur Lorem ipsum dolar sit amet constreteur",
    img: "/uploads/icc_world_cup.jpg",
  },
  {
    id: 3,
    name: "Arabian Day",
    description: "Lorem ipsum dolar sit amet constreteur Lorem ipsum dolar sit amet constreteur Lorem ipsum dolar sit amet constreteur",
    img: "/uploads/arabian_day.jpg",
  },
  {
    id: 4,
    name: "Kaayan",
    description: "Lorem ipsum dolar sit amet constreteur Lorem ipsum dolar sit amet constreteur Lorem ipsum dolar sit amet constreteur",
    img: "/uploads/kaayan.jpg",
  },
];

const OurEvents = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 md:px-0">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between py-4 mb-8">
          <h3 className="text-3xl md:text-4xl font-bold text-center md:text-left mb-4 md:mb-0">
            Our Events Showcase
          </h3>
          <a
            href="#"
            className="hidden md:flex items-center text-white font-semibold bg-black px-4 py-2 rounded-md shadow-sm"
          >
            View All
            <Image
              src="/assets/images/arrow_link.svg"
              alt="View All"
              width={12}
              height={12}
              className="ml-2 invert"
            />
          </a>
        </div>

        {/* Slider */}
        <Slider {...settings} className="gap-6">
          {events.map((event) => (
            <div key={event.id} className="flex flex-col">
              <div className="overflow-hidden rounded-lg shadow-md">
                <Image
                  src={event.img}
                  alt={event.name}
                  width={400}
                  height={250}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="mt-4">
                <h4 className="font-semibold text-lg">{event.name}</h4>
                <p className="text-sm mt-2">{event.description}</p>
              </div>
            </div>
          ))}
        </Slider>

        {/* Mobile Footer Button */}
        <div className="block md:hidden mt-6 text-center">
          <a
            href="#"
            className="inline-flex items-center text-white font-semibold bg-black px-4 py-2 rounded-md shadow-sm"
          >
            View All
            <Image
              src="/assets/images/arrow_link.svg"
              alt="View All"
              width={12}
              height={12}
              className="ml-2 invert"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurEvents;