import Image from "next/image";

export default function CategorySection() {
  return (
    <section className="w-full py-6 bg-gray-100">
      <div className="bg-white p-4 flex flex-wrap items-center gap-4">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Main Image */}
            <div className="relative w-full h-[250px] md:h-[350px] rounded overflow-hidden">
              <Image
                src="/uploads/7516d2d3-0006-4a99-83bd-bfe41fe00f9f.png"
                alt="Seating"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex items-center">
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold">Seating</h2>

                <p className="text-sm md:text-base text-gray-600">
                  Premium chairs and seating furniture's for one of a kind event
                  experience. Unique and Stylish seating arrangements that
                  impress your audience.
                </p>

                {/* Thumbnails */}
                <div className="flex items-center gap-3 flex-wrap">
                  {[
                    "b932b0db-b297-4eb3-8f55-fdf35db459a0.png",
                    "52f0095e-3e22-4ed0-8274-975596a6af99.png",
                    "2806e699-7ed2-4c10-adc4-36e45df33adb.png",
                    "243ca376-4c8f-4018-ba46-740787a9953a.png",
                    "bb9da73a-bb85-45bb-8b2f-74da2a327f75.png",
                  ].map((img, i) => (
                    <div key={i} className="w-12 h-12 relative">
                      <Image
                        src={`/uploads/${img}`}
                        alt=""
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                  ))}

                  <span className="pl-3 text-sm text-gray-700">
                    Lorem Ipsum
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
