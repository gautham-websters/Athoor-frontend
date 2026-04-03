// components/CategoriesCarousel.tsx
import Image from "next/image";
import Slider from "react-slick";


interface Category {
  name: string;
  img: string;
  alt?: string;
}

interface CategoriesCarouselProps {
  title?: string;
  categories?: Category[];
}

const defaultCategories: Category[] = [
  {
    name: "Seating",
    img: "/uploads/seating.jpg",
    alt: "Seating category",
  },
  {
    name: "Tables",
    img: "/uploads/tables.jpg",
    alt: "Tables category",
  },
  {
    name: "Outdoor Furniture",
    img: "/uploads/outdoor.jpg",
    alt: "Outdoor furniture category",
  },
  {
    name: "LED Collection",
    img: "/uploads/led.jpg",
    alt: "LED collection category",
  },
  {
    name: "Bar Furniture",
    img: "/uploads/bar.jpg",
    alt: "Bar furniture category",
  },
  {
    name: "Miscellaneous",
    img: "/uploads/misc.jpg",
    alt: "Miscellaneous category",
  },
];

const CategoriesCarousel: React.FC<CategoriesCarouselProps> = ({
  title = "Our Categories",
  categories = defaultCategories,
}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="py-12 mb-16">
      <div className="container mx-auto px-4 md:px-0">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {title}
        </h3>
        <Slider {...settings} className="gap-6">
          {categories.map((category, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4 shadow-md">
                <Image
                  src={category.img}
                  alt={category.alt || category.name}
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <h4 className="text-center text-base md:text-lg font-normal">
                {category.name}
              </h4>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CategoriesCarousel;
