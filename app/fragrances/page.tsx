import Footer from "@/components/footer";
import FeaturedSection from "@/components/featured-section";
import SloganSection from "@/components/slogan-section";
import heroImg from "@/public/fragrance/hero-section.png";
import Image from "next/image";

import Banner from "@/components/banner";
const bannerImages = ['/fragrance/f-b-1.png', '/fragrance/f-b-2.png', '/fragrance/furit-b-1.png', '/fragrance/nature-b-1.png', '/fragrance/ocean-b-1.png', '/fragrance/rose-b-1.png', '/fragrance/corp-b-1.png'];



export default function Fragrances() {
  return (
    <>
      {/* Hero Section */}
      <Banner images={bannerImages} />


      {/* heading and subheading  */}


      {/* heading and subheading  */}
      <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold  mb-4">
            Explore Our Complete Fragrance Collection
          </h2>
          <p className="text-gray-700 text-lg sm:text-xl lg:text-2xl leading-relaxed">
            Discover fragrances designed to refresh every space — from floral elegance to fresh aqua, bold corporate blends, fruity bursts, and soothing green notes
          </p>
        </div>
      </div>

      {/* Collection Products */}
      <FeaturedSection
        heading=""
        subHeading=''
        collection="fragrance"
        showCardDescription={true}
        imgClass="!px-0"
      />


    </>
  );
}
