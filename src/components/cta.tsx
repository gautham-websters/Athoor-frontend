import Image from "next/image";

export default function CTA() {
  return (
    <section className="px-3 md:px-0 py-4 mb-[100px]">
      <div className="max-w-7xl mx-auto px-4 overflow-hidden">
        <div className="flex flex-col-reverse md:flex-row">
          <div className="w-full md:w-5/12 flex justify-center md:ps-5">
            <div className="relative w-full h-96">
              <Image
                src="/assets/images/logo_symbol_white.png"
                className="absolute top-4 left-4"
                alt="Logo symbol"
                width={50}
                height={50}
              />
              <Image
                src="/assets/images/chair.png"
                className="w-full h-full object-cover"
                alt="Blue chair"
                fill
              />
            </div>
          </div>
          <div className="w-full md:w-6/12 flex flex-col items-center md:items-start justify-center pt-5 md:pt-0 md:pe-5">
            <div className="text-2xl font-bold text-center md:text-left">
              Interested in Talking Reach Out Us
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center md:gap-4 mt-4">
              <a
                href="#"
                className="flex no-underline text-black font-semibold bg-white px-4 py-2 rounded-md capitalize shadow-sm"
              >
                explore our furniture
                <Image
                  src="/assets/images/arrow_link.svg"
                  className="ml-2"
                  width={12}
                  height={12}
                  alt="Arrow"
                />
              </a>
              <a
                href="#"
                className="flex no-underline text-black font-semibold bg-white px-4 py-2 rounded-md capitalize shadow-sm w-max mt-4 md:mt-0"
              >
                <Image
                  src="/assets/images/call.svg"
                  className="mr-2"
                  width={15}
                  height={15}
                  alt="Call"
                />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
