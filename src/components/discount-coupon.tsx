// components/DiscountCoupons.jsx
import Image from "next/image";
import Link from "next/link";

const DiscountCoupons = () => {
  return (
    <section className="px-3 md:px-0 py-16 bg-gray-50">
      <div className="container mx-auto overflow-hidden">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Content - Hidden on mobile */}
          <div className="hidden md:flex flex-col items-start justify-center md:w-1/2 pl-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              {/* Placeholder text */}
              Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor
              sed.
            </h2>
            <Link
              href="#"
              className="mt-4 inline-flex items-center text-gray-900 font-semibold bg-white px-4 py-2 shadow-sm rounded-md hover:bg-gray-100 transition"
            >
              Know More
              <Image
                src="/assets/images/arrow_link.svg"
                alt="Arrow"
                width={12}
                height={12}
                className="ml-2"
              />
            </Link>
          </div>

          {/* Image Content */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src="/assets/images/discount-coupons.png"
                alt="Discount Coupons"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden mt-6 flex justify-center w-full">
            <Link
              href="#"
              className="inline-flex items-center text-gray-900 font-semibold bg-white px-4 py-2 shadow-sm rounded-md hover:bg-gray-100 transition"
            >
              Know More
              <Image
                src="/assets/images/arrow_link.svg"
                alt="Arrow"
                width={12}
                height={12}
                className="ml-2"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountCoupons;
