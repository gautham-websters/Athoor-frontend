// components/FooterFacilities.jsx
import Image from "next/image";

const facilitiesData = [
  {
    id: 1,
    title: "Quick 24Hr Turn-arounds",
    icon: "/assets/images/hours.svg",
  },
  {
    id: 2,
    title: "Largest Inventory in the Region",
    icon: "/assets/images/chair.svg",
  },
  {
    id: 3,
    title: "Dedicated Delivery Fleet",
    icon: "/assets/images/local_shipping.svg",
  },
  {
    id: 4,
    title: "In-house Furniture Customisation",
    icon: "/assets/images/chair_umbrella.svg",
  },
];

const FooterFacilities = ({ facilities = facilitiesData }) => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {facilities.map((facility) => (
            <div
              key={facility.id}
              className="flex flex-col items-center text-center gap-4"
            >
              <div className="relative w-16 h-16 md:w-20 md:h-20">
                <Image
                  src={facility.icon}
                  alt={facility.title}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="mt-2 text-sm md:text-base font-medium text-gray-700">
                {facility.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FooterFacilities;
