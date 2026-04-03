import Image from "next/image";

const numbersData = [
  { id: 1, value: "4.9", label: "Rated on Google" },
  { id: 2, value: "15+", label: "Years Experience" },
  { id: 3, value: "5000+", label: "Events" },
  { id: 4, img: "/assets/images/atlantis_logo.png", label: "Trusted by Atlantis" },
];

const OurNumbers = () => {
  return (
    <section className="px-3 md:px-0 mb-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          {numbersData.map((item) => (
            <div key={item.id} className="flex flex-col items-center justify-center h-full">
              {item.img ? (
                <Image
                  src={item.img}
                  alt={item.label}
                  width={80}
                  height={80}
                  className="mb-2"
                />
              ) : (
                <div className="text-2xl md:text-3xl font-bold mb-2">{item.value}</div>
              )}
              <div className="text-gray-500 text-sm md:text-base">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurNumbers;