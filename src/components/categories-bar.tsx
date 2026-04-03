"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const mobileMenu = [
  {
    title: "Seating",
    href: "/furniture-rent-by-category/seating",
    children: [
      { title: "Sofa", href: "/furniture-rent-by-category/sofas" },
      { title: "Chairs", href: "/furniture-rent-by-category/chairs" },
      { title: "Bar Stool", href: "/furniture-rent-by-category/bar-stool" },
      {
        title: "Pouf & Ottoman",
        href: "/furniture-rent-by-category/poufs-and-ottomans",
      },
      { title: "Bean Bags", href: "/furniture-rent-by-category/bean-bags" },
      {
        title: "Office Chair",
        href: "/furniture-rent-by-category/office-chairs",
      },
      {
        title: "Foldable Chairs",
        href: "/furniture-rent-by-category/foldable-chair",
      },
      {
        title: "Arabic Sofa Seating",
        href: "/furniture-rent-by-category/arabic-sofa-seating",
      },
      {
        title: "Arabic Low Seating",
        href: "/furniture-rent-by-category/arabic-low-seating",
      },
      {
        title: "Kids Seating",
        href: "/furniture-rent-by-category/kids-seating",
      },
    ],
  },
  {
    title: "Tables",
    href: "/furniture-rent-by-category/table",
    children: [
      {
        title: "Coffee Tables",
        href: "/furniture-rent-by-category/coffee-table-and-side-tables",
      },
      {
        title: "Dining & Buffet Tables",
        href: "/furniture-rent-by-category/dining-tables",
      },
      {
        title: "Cocktail & High Tables",
        href: "/furniture-rent-by-category/cocktail-table-and-high-tables",
      },
      {
        title: "Office Tables",
        href: "/furniture-rent-by-category/office-tables",
      },
      {
        title: "Arabic Coffee Tables",
        href: "/furniture-rent-by-category/arabic-coffee-table",
      },
      { title: "Kids Tables", href: "/furniture-rent-by-category/kids-tables" },
    ],
  },
  {
    title: "Bar Furniture",
    href: "/furniture-rent-by-category/bar-furniture",
    children: [
      {
        title: "Bar Counter",
        href: "/furniture-rent-by-category/bar-counters",
      },
      {
        title: "Cocktail & High Seating",
        href: "/furniture-rent-by-category/cocktail-table-and-high-tables",
      },
      { title: "Bar Stool", href: "/furniture-rent-by-category/bar-stool" },
    ],
  },
  {
    title: "LED Collection",
    href: "/furniture-rent-by-category/led-collection",
    children: [
      {
        title: "LED Furniture",
        href: "/furniture-rent-by-category/led-collection",
      },
    ],
  },
  {
    title: "Outdoor Furniture",
    href: "/furniture-rent-by-category/outdoor-setup",
    children: [
      {
        title: "Outdoor Tables & Benches",
        href: "/furniture-rent-by-category/outdoor-table-and-benches",
      },
      {
        title: "Pallet & Low Seating",
        href: "/furniture-rent-by-category/pallet-seating",
      },
      { title: "Umbrellas", href: "/furniture-rent-by-category/umbrellas" },
      {
        title: "Tents & Canopy",
        href: "/furniture-rent-by-category/tent-canopy",
      },
      {
        title: "Outdoor Coolers",
        href: "/furniture-rent-by-category/outdoor-coolers",
      },
      {
        title: "Outdoor Gas heaters",
        href: "/furniture-rent-by-category/outdoor-gas-heaters",
      },
    ],
  },
  {
    title: "Miscellaneous",
    href: "/furniture-rent-by-category/arabic-and-majlis-setup",
    children: [
      {
        title: "Stanchion Ropes & Poles",
        href: "/furniture-rent-by-category/stanchian-ropes-and-poles",
      },
      { title: "Podium", href: "/furniture-rent-by-category/podiums" },
      {
        title: "Lanterns & Decor",
        href: "/furniture-rent-by-category/arabic-lanterns-and-decor",
      },
      {
        title: "Carpet & Rugs",
        href: "/furniture-rent-by-category/arabic-carpetrug",
      },
      {
        title: "Event Essentials",
        href: "/furniture-rent-by-category/event-essentials",
      },
    ],
  },
];

const menu = [
  {
    title: "Seating",
    children: [
      { title: "Sofa", href: "/furniture-rent-by-category/sofas" },
      { title: "Chairs", href: "/furniture-rent-by-category/chairs" },
      { title: "Bar Stool", href: "/furniture-rent-by-category/bar-stool" },
      { title: "Pouf & Ottoman", href: "/furniture-rent-by-category/poufs-and-ottomans" },
      { title: "Bean Bags", href: "/furniture-rent-by-category/bean-bags" },
      { title: "Office Chair", href: "/furniture-rent-by-category/office-chairs" },
      { title: "Foldable Chairs", href: "/furniture-rent-by-category/foldable-chair" },
      { title: "Arabic Sofa Seating", href: "/furniture-rent-by-category/arabic-sofa-seating" },
      { title: "Arabic Low Seating", href: "/furniture-rent-by-category/arabic-low-seating" },
      { title: "Kids Seating", href: "/furniture-rent-by-category/kids-seating" },
    ],
  },
  {
    title: "Table",
    children: [
      { title: "Coffee Tables", href: "/furniture-rent-by-category/coffee-table-and-side-tables" },
      { title: "Dining & Buffet Tables", href: "/furniture-rent-by-category/dining-tables" },
      { title: "Cocktail & High Tables", href: "/furniture-rent-by-category/cocktail-table-and-high-tables" },
      { title: "Office Tables", href: "/furniture-rent-by-category/office-tables" },
      { title: "Arabic Coffee Tables", href: "/furniture-rent-by-category/arabic-coffee-table" },
      { title: "Kids Tables", href: "/furniture-rent-by-category/kids-tables" },
    ],
  },
  {
    title: "Outdoor Furniture",
    children: [
      { title: "Outdoor Tables & Benches", href: "/furniture-rent-by-category/outdoor-table-and-benches" },
      { title: "Pallet & Low Seating", href: "/furniture-rent-by-category/pallet-seating" },
      { title: "Umbrellas", href: "/furniture-rent-by-category/umbrellas" },
      { title: "Tents & Canopy", href: "/furniture-rent-by-category/tent-canopy" },
      { title: "Outdoor Coolers", href: "/furniture-rent-by-category/outdoor-coolers" },
      { title: "Outdoor Gas heaters", href: "/furniture-rent-by-category/outdoor-gas-heaters" },
    ],
  },
  {
    title: "Office Furniture",
    children: [],
  },
  {
    title: "Arabic & Majlis Setup",
    children: [],
  },
  {
    title: "LED Collection",
    children: [
      { title: "LED Furniture", href: "/furniture-rent-by-category/led-collection" },
    ],
  },
];

export function MobileMenu() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`fixed inset-0 z-50 bg-white transition-transform duration-300 md:hidden ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <nav className="h-full overflow-y-auto">
        <ul className="space-y-4 p-4">
          {/* Top Row */}
          <li className="flex items-center justify-between">
            <Link href="/">
              <Image
                src="/assets/icons/home.svg"
                alt="Home"
                width={21}
                height={21}
              />
            </Link>

            <button onClick={() => setIsOpen(false)}>
              <span className="text-xl">✕</span>
            </button>
          </li>

          {/* Menu */}
          {mobileMenu.map((item, index) => {
            const isActive = openIndex === index;

            return (
              <li key={index}>
                <div className="flex items-center justify-between">
                  <Link href={item.href} className="ml-3">
                    {item.title}
                  </Link>

                  <button onClick={() => setOpenIndex(isActive ? null : index)}>
                    <span
                      className={`transition-transform ${
                        isActive ? "rotate-90" : ""
                      }`}
                    >
                      ›
                    </span>
                  </button>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isActive ? "max-h-[500px] mt-2" : "max-h-0"
                  }`}
                >
                  <ul className="pl-6 space-y-2">
                    {item.children.map((sub, i) => (
                      <li key={i}>
                        <Link href={sub.href}>{sub.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export function Navbar() {
  return (
    <div className="w-full bg-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-2 md:py-0">
        
        {/* Mobile menu button (hook later) */}
        <button className="md:hidden w-6 h-6" />

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex gap-6 m-0">
            {menu.map((item, i) => (
              <li key={i} className="relative group">
                <span className="flex items-center gap-1 cursor-pointer whitespace-nowrap">
                  {item.title}
                  <span className="text-xs">▼</span>
                </span>

                {item.children.length > 0 && (
                  <ul className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white shadow-md border border-gray-200 min-w-[220px] z-50">
                    {item.children.map((sub, j) => (
                      <li key={j}>
                        <Link
                          href={sub.href}
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          {sub.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Actions */}
        <div className="md:hidden">
          <ul className="flex gap-3">
            <li className="border border-black bg-white p-2 flex items-center justify-center">
              <Image src="/assets/images/search.svg" alt="Search" width={16} height={16} />
            </li>
            <li className="border border-black bg-white p-2 flex items-center justify-center">
              <Image src="/assets/images/user.svg" alt="User" width={16} height={16} />
            </li>
            <li className="border border-black bg-white p-2 flex items-center justify-center">
              <Image src="/assets/images/bag.svg" alt="Store" width={16} height={16} />
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}