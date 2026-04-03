// components/ImageGrid3.jsx
const images = {
  full: "/uploads/5e5fff6c3a5fcbf141d70f20989e5200f8bf66a4.jpg",
  sub: [
    "/uploads/a7108fd1fc2c2cd4112dcff368479f39a452df54.jpg",
    "/uploads/39260b71da71615d35e8e1cd1faa93f9d119dbee.jpg",
    "/uploads/a8197e795bcc5860e15929cc302ac7838a9e986e.png",
    "/uploads/cf47f7f48f313d18cd9051d081800546ecfb7e22.jpg",
    "/uploads/19e04f1adc556de68ac25e00ac277093960ac1ab.jpg",
  ],
};

const ImageGrid3 = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-5 md:h-[525px]">
          {/* Large left image */}
          <div
            className="rounded-xl bg-cover bg-center flex-1"
            style={{ backgroundImage: `url(${images.full})` }}
          ></div>

          {/* Right staggered grid */}
          <div className="flex-1 grid grid-cols-3 grid-rows-4 gap-5">
            {/* sub-item1 */}
            <div
              className="rounded-xl bg-cover bg-center"
              style={{ backgroundImage: `url(${images.sub[0]})` }}
            ></div>
            {/* sub-item2 */}
            <div
              className="rounded-xl bg-cover bg-center row-span-2"
              style={{ backgroundImage: `url(${images.sub[1]})` }}
            ></div>
            {/* sub-item3 */}
            <div
              className="rounded-xl bg-cover bg-center row-span-2"
              style={{ backgroundImage: `url(${images.sub[2]})` }}
            ></div>
            {/* sub-item4 */}
            <div
              className="rounded-xl bg-cover bg-center col-span-1 row-span-3"
              style={{ backgroundImage: `url(${images.sub[3]})` }}
            ></div>
            {/* sub-item5 */}
            <div
              className="rounded-xl bg-cover bg-center col-span-2 row-span-2"
              style={{ backgroundImage: `url(${images.sub[4]})` }}
            ></div>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden mt-5 grid grid-cols-2 gap-2">
          <div
            className="col-span-2 rounded-xl h-40 bg-cover bg-center"
            style={{ backgroundImage: `url(${images.full})` }}
          ></div>
          {images.sub.map((img, index) => (
            <div
              key={index}
              className="rounded-xl h-40 bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGrid3;