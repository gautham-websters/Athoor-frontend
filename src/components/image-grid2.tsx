// components/ImageGrid2.jsx
const images = {
  large: "/uploads/edbca00b99fa98756b1824caef6a7b9c49f37055.jpg",
  group: [
    "/uploads/cf47f7f48f313d18cd9051d081800546ecfb7e22.jpg",
    "/uploads/e7c1a874ab120761d368a804c4b1cac44b55631c.jpg",
    "/uploads/c34a569879847a5c7739b1486486b2653db24895.jpg",
  ],
  full: "/uploads/f56132c63c6c814a27b8db7a58f7aaa0436a5b8a.png",
};

const ImageGrid2 = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-5 md:grid-cols-3 md:h-[525px]">
          {/* Large image */}
          <div
            className="rounded-xl bg-center bg-cover"
            style={{ backgroundImage: `url(${images.large})` }}
          ></div>

          {/* 2x2 grid group */}
          <div className="grid grid-cols-2 grid-rows-2 gap-5">
            <div
              className="rounded-xl bg-center bg-cover"
              style={{ backgroundImage: `url(${images.group[0]})` }}
            ></div>
            <div
              className="rounded-xl bg-center bg-cover"
              style={{ backgroundImage: `url(${images.group[1]})` }}
            ></div>
            <div
              className="col-span-2 rounded-xl bg-center bg-cover"
              style={{ backgroundImage: `url(${images.group[2]})` }}
            ></div>
          </div>

          {/* Full width image */}
          <div
            className="hidden md:block rounded-xl bg-center bg-cover"
            style={{ backgroundImage: `url(${images.full})` }}
          ></div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden mt-5 grid grid-cols-2 gap-2">
          <div
            className="rounded-xl h-40 bg-center bg-cover"
            style={{ backgroundImage: `url(${images.large})` }}
          ></div>
          <div
            className="rounded-xl h-40 bg-center bg-cover"
            style={{ backgroundImage: `url(${images.group[0]})` }}
          ></div>
          <div
            className="rounded-xl h-40 bg-center bg-cover"
            style={{ backgroundImage: `url(${images.group[1]})` }}
          ></div>
          <div
            className="col-span-2 rounded-xl h-40 bg-center bg-cover"
            style={{ backgroundImage: `url(${images.group[2]})` }}
          ></div>
          <div
            className="col-span-2 rounded-xl h-40 bg-center bg-cover"
            style={{ backgroundImage: `url(${images.full})` }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default ImageGrid2;