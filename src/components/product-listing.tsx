"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

interface Product {
  name: string;
  image: string;
  colors: string[];
}

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filterModalOpen, setFilterModalOpen] = useState(false);

  useEffect(() => {
    fetch("/Data/products.json")
      .then((res) => res.json())
      .then((data: Product[]) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  const categories = [
    { name: "Poufs & Ottomans", icon: "/assets/icons/sofa.svg" },
    { name: "Dining Chairs", icon: "/assets/icons/diner_table.svg" },
    { name: "Wedding Bridal Seating", icon: "/assets/icons/event_seat.svg" },
    { name: "Kids Seating", icon: "/assets/icons/kids_chair.svg" },
    { name: "Bar Stool", icon: "/assets/icons/chair_counter.svg" },
  ];

  const colors = ["#000", "#0161e9", "#66411c", "#e4e7ed", "#5bc576", "#b9b9b9"];

  return (
    <div className="bg-gray-50">
      {/* Categories */}
      <div className="container mx-auto py-4 flex flex-wrap gap-3">
        {categories.map((cat) => (
          <button key={cat.name} className="flex items-center gap-2 p-2 border rounded hover:bg-white">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow">
              <img src={cat.icon} alt={cat.name} className="w-6 h-6" />
            </span>
            <span className="text-sm font-medium">{cat.name}</span>
          </button>
        ))}
      </div>

      {/* Toolbar */}
      <div className="container mx-auto flex justify-between items-center py-2">
        <div className="uppercase font-medium">{products.length} products</div>
        <div className="flex items-center gap-2">
          <button
            className="uppercase font-medium"
            onClick={() => setFilterModalOpen(true)}
          >
            Filters
          </button>
          |
          <label htmlFor="sorting" className="uppercase font-medium ml-2">
            Sort by:
          </label>
          <select
            id="sorting"
            className="border-0 shadow-none px-1 bg-gray-50 text-sm font-medium"
          >
            <option disabled>Sort by</option>
            <option selected>Suggested</option>
            <option>Newest</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
        {products.map((product, i) => (
          <div key={i} className="bg-white shadow rounded p-3">
            {/* Swiper Carousel */}
            <Swiper
              modules={[Pagination, Navigation]}
              pagination={{ clickable: true }}
              navigation
              loop
              className="h-64 mb-2"
            >
              <SwiperSlide>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={product.image}
                  alt={product.name + " 2"}
                  className="w-full h-64 object-cover rounded"
                />
              </SwiperSlide>
            </Swiper>

            {/* Colors */}
            <div className="flex gap-2 my-2">
              {colors.map((c, idx) => (
                <label
                  key={idx}
                  className="w-5 h-5 rounded-full border cursor-pointer"
                  style={{ backgroundColor: c }}
                >
                  <input type="radio" name={`color-${i}`} className="hidden" />
                </label>
              ))}
            </div>

            <div className="font-medium">{product.name}</div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="container mx-auto flex justify-center items-center gap-2 py-4">
        <button className="px-3 py-1 border rounded">Prev</button>
        <ul className="flex gap-2 list-none">
          <li><button className="px-3 py-1 border rounded bg-blue-600 text-white">1</button></li>
          <li><button className="px-3 py-1 border rounded">2</button></li>
          <li><button className="px-3 py-1 border rounded">3</button></li>
        </ul>
        <button className="px-3 py-1 border rounded">Next</button>
      </div>

      {/* Filter Modal */}
      {filterModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white rounded shadow p-6 w-full max-w-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-700">Clear filters</h2>
              <button
                onClick={() => setFilterModalOpen(false)}
                className="text-gray-500 hover:text-gray-800"
              >
                X
              </button>
            </div>

            {/* Filter Sections */}
            <div className="space-y-4">
              {["Colors", "Collections", "Material"].map((section) => (
                <div key={section}>
                  <h6 className="font-semibold mb-2">{section}</h6>
                  <div className="grid grid-cols-2 gap-3">
                    {Array.from({ length: 6 }).map((_, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-gray-300"></span>
                        <span>Item {idx + 1}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setFilterModalOpen(false)}
                className="px-4 py-2 bg-gray-200 rounded"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded">
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}