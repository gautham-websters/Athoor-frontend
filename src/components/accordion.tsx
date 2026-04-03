"use client";

import { useState } from "react";

const data = [
  {
    title: "Lorem ipsum dolor sit amet constreteur.",
    content: [
      "Lorem ipsum dolor sit amet constreteur.",
      "Lorem ipsum dolar sit amet constreteur Lorem ipsum dolar sit amet constreteurLorem ipsum dolar sit amet constreteurLorem ipsum dolar sit amet constreteur Lorem ipsum dolar sit amet constreteur Lorem ipsum dolar sit amet constreteurLorem ipsum dolar sit amet constreteurLorem ipsum dolar sit amet constreteur Lorem ipsum dolar.",
      "Lorem ipsum dolar sit amet constreteur Lorem ipsum dolar sit amet constreteurLorem ipsum dolar sit amet constreteurLorem ipsum dolar sit amet constreteur Lorem ipsum dolar sit amet constreteur Lorem ipsum dolar sit amet constreteurLorem ipsum dolar sit amet constreteurLorem ipsum dolar sit amet constreteur Lorem ipsum dolar.",
    ],
  },
  {
    title: "Lorem ipsum dolor sit amet constreteur.",
    content: [
      "Lorem ipsum dolor sit amet constreteur.",
      "Lorem ipsum dolar sit amet constreteur Lorem ipsum dolar sit amet constreteurLorem ipsum dolar sit amet constreteurLorem ipsum dolar sit amet constreteur Lorem ipsum dolar sit amet constreteur Lorem ipsum dolar sit amet constreteurLorem ipsum dolar sit amet constreteurLorem ipsum dolar sit amet constreteur Lorem ipsum dolar.",
      "Lorem ipsum dolar sit amet constreteur Lorem ipsum dolar sit amet constreteurLorem ipsum dolar sit amet constreteurLorem ipsum dolar sit amet constreteur Lorem ipsum dolar sit amet constreteur Lorem ipsum dolar sit amet constreteurLorem ipsum dolar sit amet constreteurLorem ipsum dolar sit amet constreteur Lorem ipsum dolar.",
    ],
  },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-0">
      <div className="space-y-5">
        {data.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="border border-slate-300 rounded-md overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-4 py-4 text-left font-medium text-sm md:text-base"
              >
                {item.title}

                <span
                  className={`flex items-center justify-center w-7 h-7 rounded-full bg-slate-200 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 15 8"
                    className="w-3 h-3"
                    fill="none"
                  >
                    <path
                      d="M7.2 8q-.25 0-.46-.08a1 1 0 0 1-.4-.26L.3 1.69a1 1 0 0 1-.3-.7Q0 .6.29.3q.3-.3.7-.29.42 0 .72.29L7.2 5.5 12.69.29a1 1 0 0 1 .7-.28q.42 0 .72.28t.29.7q0 .4-.3.7L8.06 7.66A1.1 1.1 0 0 1 7.2 8"
                      fill="#16406E"
                    />
                  </svg>
                </span>
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  isOpen ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <div className="border-t border-slate-300 max-w-[97%] mx-auto py-4 text-sm md:text-base">
                  {item.content.map((text, i) => (
                    <p
                      key={i}
                      className={i === 0 ? "font-medium mb-2" : "mb-2"}
                    >
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
