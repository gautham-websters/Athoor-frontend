import Image from "next/image";

const images = [
  {
    id: 1,
    src: "/uploads/4b42151164a125356e6724ceccb0b46bdc6c538e.jpg",
    title: "The way it looks!",
    text: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
  },
  { id: 2, src: "/uploads/4b42151164a125356e6724ceccb0b46bdc6c538e.jpg" },
  { id: 3, src: "/uploads/f7953c87351ff685e918abfed4bd5028e1f48634.jpg" },
  { id: 4, src: "/uploads/85c20174619a7c0431e6ffaa80f478503c8d0575.jpg" },
];

const ImageGrid = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Mobile heading */}
        <div className="md:hidden flex flex-col gap-3 mb-6">
          <h3 className="text-3xl font-semibold">The way it looks!</h3>
          <p className="text-base text-gray-700">{images[0].text}</p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:gap-8 grid-cols-2 grid-rows-[auto_auto_auto]">
          {images.map((img, idx) => (
            <div
              key={img.id}
              className={`relative rounded-2xl overflow-hidden ${idx === 0 ? "md:flex md:flex-col md:justify-start" : ""}`}
              style={{
                backgroundImage: idx !== 0 ? `url(${img.src})` : undefined,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {idx === 0 && (
                <div className="hidden md:flex flex-col gap-4 p-6">
                  <h3 className="text-4xl font-semibold">{img.title}</h3>
                  <p className="text-lg">{img.text}</p>
                </div>
              )}

              {idx === 0 && <div className="md:hidden h-40 w-full" />}

              {/* Heights for desktop */}
              {idx === 2 && (
                <div className="hidden md:block h-[868px] w-full" />
              )}
              {idx === 3 && (
                <div className="hidden md:block h-[490px] w-full" />
              )}
              {idx === 1 && <div className="hidden md:block h-[auto] w-full" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGrid;
