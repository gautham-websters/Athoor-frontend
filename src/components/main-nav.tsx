"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const actionItemsMobile = [
  { src: "/images/call.svg", alt: "Call Us" },
  { src: "/images/whatsapp.png", alt: "WhatsApp" },
];

const actionItemsDesktop = [
  { src: "/images/search.svg", alt: "Search" },
  { src: "/images/user.svg", alt: "User Login" },
  { src: "/images/bag.svg", alt: "Store" },
];

const homeItemsDesktop = [
  { src: "/icons/home.svg", alt: "Home", width: 70, border: true },
  { src: "/images/call.svg", alt: "Call Us", border: true },
  { src: "/images/whatsapp.png", alt: "WhatsApp", border: true },
];

const MainNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative bg-white py-4 md:py-4 px-3 md:px-6 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        {/* Brand */}
        <Link href="/">
          <a className="flex items-center">
            <Image
              src="/images/athoor-rentals.svg"
              alt="Brand"
              width={150}
              height={50}
              priority
            />
          </a>
        </Link>

        {/* Mobile Toggler */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </button>

        {/* Mobile Actions */}
        <ul className="md:hidden flex gap-3 list-none m-0">
          {actionItemsMobile.map((item, idx) => (
            <li
              key={idx}
              className="border border-black flex items-center justify-center bg-white p-2"
            >
              <Image src={item.src} alt={item.alt} width={24} height={24} />
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden md:flex flex-row-reverse items-center gap-3">
          <ul className="flex gap-3 list-none m-0">
            {actionItemsDesktop.map((item, idx) => (
              <li
                key={idx}
                className="border border-black flex items-center justify-center bg-white p-2"
              >
                <Image src={item.src} alt={item.alt} width={24} height={24} />
              </li>
            ))}
          </ul>

          <ul className="flex gap-3 list-none m-0">
            {homeItemsDesktop.map((item, idx) => (
              <li
                key={idx}
                className={`flex items-center justify-center ${
                  item.border !== false ? "border border-black" : ""
                } bg-white p-2`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width || 24}
                  height={24}
                  className="object-contain"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Optional: Mobile Menu (if needed) */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md mt-2 p-4">
          <ul className="list-none flex flex-col gap-2">
            {/* Add mobile menu items here */}
            <li>
              <Link href="/">
                <a className="block py-2">Home</a>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default MainNavbar;
