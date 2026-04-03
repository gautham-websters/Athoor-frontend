"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";

// Add hrefs here
const actionItemsMobile = [
  { src: "/images/call.svg", alt: "Call Us", href: "tel:+971507644472" },
  { src: "/images/whatsapp.png", alt: "WhatsApp", href: "https://wa.me/971566080777" },
];

const actionItemsDesktop = [
  { src: "/images/search.svg", alt: "Search", href: "/search" },
  { src: "/images/user.svg", alt: "User Login", href: "/login" },
  { src: "/images/bag.svg", alt: "Store", href: "/cart" },
];

const homeItemsDesktop = [
  { src: "/icons/home.svg", alt: "Home", href: "/", width: 25, border: false },
  { src: "/images/call.svg", alt: "Call Us", href: "tel:+971507644472", border: true },
  { src: "/images/whatsapp.png", alt: "WhatsApp", href: "https://wa.me/971566080777", border: true },
];

const MainNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative bg-white py-4 md:py-8 px-3 md:px-10 lg:px-80 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">

        {/* Brand */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/athoor-rentals.svg"
            alt="Brand"
            width={170}
            height={50}
            priority
          />
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
            <li key={idx}>
              <a
                href={item.href}
                className="border border-black flex items-center justify-center bg-white p-2"
              >
                <Image src={item.src} alt={item.alt} width={24} height={24} />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden md:flex flex-row-reverse items-center gap-3">
          
          {/* Right icons */}
          <ul className="flex gap-4 list-none m-0">
            {actionItemsDesktop.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  className="border border-black rounded-full flex items-center justify-center bg-white p-2"
                >
                  <Image src={item.src} alt={item.alt} width={20} height={20} />
                </Link>
              </li>
            ))}
          </ul>

          <Separator orientation="vertical" className="mx-4" />

          {/* Left icons */}
          <ul className="flex gap-4 list-none m-0">
            {homeItemsDesktop.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.href}
                  className={`flex rounded-full items-center justify-center ${
                    item.border !== false ? "border border-black" : ""
                  } bg-white p-2`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.width || 20}
                    height={20}
                  />
                </a>
              </li>
            ))}
          </ul>

        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md mt-2 p-4">
          <ul className="list-none flex flex-col gap-2">
            <li>
              <Link href="/" className="block py-2">
                Home
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default MainNavbar;