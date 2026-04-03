"use client";
import { TopBar } from "@/components";
import { MobileMenu, Navbar } from "@/components/categories-bar";
import MainNavbar from "@/components/main-nav";
import MainSlider from "@/components/main-slider";
import CategoriesCarousel from "@/components/our-categories";

export default function Home() {
  return (
    <>
      <TopBar />
      <MainNavbar />
      <Navbar />
      <section>
        <MobileMenu />
      </section>
      <section>
        <MainSlider />
      </section>
      <section>
        {/* <CategoriesCarousel /> */}
      </section>
    </>
  );
}
