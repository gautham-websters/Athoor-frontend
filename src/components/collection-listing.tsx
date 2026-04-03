"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const PAGE_SIZE = 12;

type Item = {
  image: string;
  title: string;
  description: string;
};

export default function Collections() {
  const [items, setItems] = useState<Item[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [view, setView] = useState<"grid" | "list">("grid");

  const pageCount = Math.max(1, Math.ceil(items.length / PAGE_SIZE));

  useEffect(() => {
    fetch("/Data/collections.json")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch(() => console.error("Failed to load collections.json"));
  }, []);

  const start = (currentPage - 1) * PAGE_SIZE;
  const pageItems = items.slice(start, start + PAGE_SIZE);

  return (
    <section className="w-full py-6 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div>
            Number of collection: <strong>{items.length}</strong>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setView("grid")}
              className={`p-2 border ${view === "grid" ? "bg-black text-white" : "bg-white"}`}
            >
              <Image
                src="/assets/images/grid.svg"
                alt="Grid"
                width={20}
                height={20}
              />
            </button>

            <button
              onClick={() => setView("list")}
              className={`p-2 border ${view === "list" ? "bg-black text-white" : "bg-white"}`}
            >
              <Image
                src="/assets/images/list.svg"
                alt="List"
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>

        {/* Grid/List */}
        <div
          className={
            view === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              : "flex flex-col gap-4"
          }
        >
          {pageItems.map((item, i) =>
            view === "grid" ? (
              <article
                key={i}
                className="relative h-[250px] group overflow-hidden"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute bottom-0 w-full p-4 backdrop-blur-md bg-white/20 flex justify-between items-end">
                  <div>
                    <h3 className="text-white font-semibold">{item.title}</h3>
                    <p className="text-white text-sm">{item.description}</p>
                  </div>

                  <Image
                    src="/assets/images/arrow_link.svg"
                    alt="Arrow"
                    width={20}
                    height={20}
                  />
                </div>
              </article>
            ) : (
              <article key={i} className="flex gap-4 border p-3">
                <div className="relative w-32 h-24 shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>

                  <Image
                    src="/assets/images/arrow_link.svg"
                    alt="Arrow"
                    width={20}
                    height={20}
                  />
                </div>
              </article>
            ),
          )}
        </div>

        {/* Pagination */}
        <div className="mt-6">
          <hr className="border-gray-300 mb-4" />

          <div className="flex justify-center items-center gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="px-3 py-1 border disabled:opacity-50"
            >
              Prev
            </button>

            <div className="flex gap-2">
              {Array.from({ length: pageCount }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 border ${
                    currentPage === i + 1 ? "bg-black text-white" : ""
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              disabled={currentPage === pageCount}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="px-3 py-1 border disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
