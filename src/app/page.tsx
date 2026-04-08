// "use client";
import { TopBar } from "@/components";
import { MobileMenu, Navbar } from "@/components/categories-bar";
import MainNavbar from "@/components/main-nav";
import MainSlider from "@/components/main-slider";
import { getSlides, type Slide } from "@/api/slides";
import CategoriesCarousel from "@/components/our-categories";

export default async function Home() {
  let slides: Slide[] = await getSlides();

  return (
    <>
      <TopBar />
      <MainNavbar />
      <Navbar />
      <section>
        <MobileMenu />
      </section>
      <section>
        <MainSlider slides={slides} />
      </section>
      <section>
        {/* <CategoriesCarousel /> */}
      </section>
    </>
  );
}
