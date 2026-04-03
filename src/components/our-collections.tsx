// components/OurCollections.jsx
import Image from "next/image";
import Slider from "react-slick";

// Sample collection data
const collections = [
  {
    id: 1,
    name: "Panel",
    description: "Lorem ipsum dolar sit amet sitLorem ipsum dolar sit amet sit constreteur.",
    img: "/uploads/img_4069.jpg",
    link: "#",
  },
  {
    id: 2,
    name: "Matina",
    description: "Lorem ipsum dolar sit amet sitLorem ipsum dolar sit amet sit constreteur.",
    img: "/uploads/img_4070.jpg",
    link: "#",
  },
  {
    id: 3,
    name: "Lazo",
    description: "Lorem ipsum dolar sit amet sitLorem ipsum dolar sit amet sit constreteur.",
    img: "/uploads/img_4071.jpg",
    link: "#",
  },
  {
    id: 4,
    name: "Cane",
    description: "Lorem ipsum dolar sit amet sitLorem ipsum dolar sit amet sit constreteur.",
    img: "/uploads/img_4072.jpg",
    link: "#",
  },
];

const OurCollections = () => {
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
    <section className="py-12 overflow-hidden">
      <div className="container mx-auto px-4 md:px-0">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between py-4 mb-8">
          <h3 className="text-3xl md:text-4xl font-bold text-center md:text-left mb-4 md:mb-0">
            Our Collections
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
          {collections.map((col) => (
            <div
              key={col.id}
              className="relative h-80 rounded-lg overflow-hidden shadow-lg flex items-end"
              style={{ backgroundImage: `url(${col.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="bg-black bg-opacity-40 w-full p-4 md:p-6 text-white flex flex-col justify-between h-full">
                <div className="flex justify-between items-start">
                  <h4 className="text-lg md:text-xl font-normal">{col.name}</h4>
                  <a
                    href={col.link}
                    className="flex items-center justify-center bg-white text-black p-2 rounded-full shadow-sm"
                  >
                    <Image
                      src="/assets/images/arrow_link.svg"
                      alt="Go"
                      width={12}
                      height={12}
                    />
                  </a>
                </div>
                <p className="mt-2 text-sm md:text-base">{col.description}</p>
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

export default OurCollections;