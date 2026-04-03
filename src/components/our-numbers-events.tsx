import Image from "next/image";

// Sample stats data
const stats = [
  { id: 1, number: "3", label: "Days" },
  { id: 2, number: "3000+", label: "Guests" },
  { id: 3, number: "1000+", label: "Furniture" },
  { id: 4, number: "36", label: "HRS Setup" },
];

const OurNumberEvents = () => {
  return (
    <section className="container-fluid px-0 py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 md:gap-10 p-4 md:p-20">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="flex flex-col justify-center items-center border border-gray-300 rounded-md py-6"
              >
                <span className="text-2xl md:text-3xl font-bold">
                  {stat.number}
                </span>
                <span className="text-gray-400 text-lg md:text-2xl mt-2">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Banner Image */}
          <div className="rounded-lg overflow-hidden h-[360px] md:h-[660px]">
            <Image
              src="/uploads/a7108fd1fc2c2cd4112dcff368479f39a452df54.jpg"
              alt="Banner"
              layout="responsive"
              width={800}
              height={660}
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurNumberEvents;
