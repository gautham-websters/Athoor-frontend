// components/OtherCategories.jsx
import Image from "next/image";
import Slider from "react-slick";

// Sample category data
const categories = [
  {
    id: 1,
    name: "Seating",
    img: "/uploads/1d67c4f71f08d0195ae784c77b60ece8f70586ee.png",
    alt: "Seating Category",
  },
  {
    id: 2,
    name: "Table",
    img: "/uploads/62cd6639c7b38ad60e7654ced7d6ef4ca659f172.png",
    alt: "Table Category",
  },
  {
    id: 3,
    name: "Outdoor Furniture",
    img: "/uploads/3f68950ee22785e69189e1d8b89c71611bc5b514.png",
    alt: "Outdoor Furniture Category",
  },
  {
    id: 4,
    name: "Arabic & Majlis Setup",
    img: "/uploads/a5f3ae5a0df3a22e127f720b265ece8bf192f339.png",
    alt: "Arabic & Majlis Setup Category",
  },
  {
    id: 5,
    name: "Office Furniture",
    img: "/uploads/4cd670865fbaa84e2d641b52b4c251946e45faa3.png",
    alt: "Office Furniture Category",
  },
  {
    id: 6,
    name: "Seating",
    img: "/uploads/1d67c4f71f08d0195ae784c77b60ece8f70586ee.png",
    alt: "Seating Category",
  },
];

const OtherCategories = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768, // mobile
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480, // small mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Check Out Other Category
        </h3>
        <Slider {...settings} className="gap-4">
          {categories.map((category) => (
            <div key={category.id} className="flex flex-col items-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4 shadow-md">
                <Image
                  src={category.img}
                  alt={category.alt}
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <h4 className="text-center text-base md:text-lg font-medium">
                {category.name}
              </h4>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default OtherCategories;
