
import Footer from "@/components/footer";
import FeaturedSection from "@/components/featured-section";
import SloganSection from "@/components/slogan-section";
import heroImg from "@/public/fragrance/fruit-note/hero-section.png";
import Image from "next/image";
import FragranceCard from "@/components/fragrance-card";

import Banner from "@/components/banner";
const bannerImages = ['/fragrance/furit-b-1.png'];

export default function FruitNote() {


  return (
    <>
      {/* Hero Section */}
      <Banner images={bannerImages} />

      <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Big Image */}
          <div className="relative w-full h-80 sm:h-96 lg:h-[28rem] rounded-xl overflow-hidden">
            <Image
              src="/fragrance/fruit-note/p-1.png"
              alt="Fragrance Collection"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Right - Description */}
          <div className="text-center lg:text-left">
            <p className="text-gray-700 text-lg sm:text-xl lg:text-2xl leading-relaxed font-thin">
              <span className="text-4xl">Fruit Note</span> fragrances are crafted to bring liveliness and freshness into your surroundings. With every spray or aroma release, you’ll experience the bright zest of citrus, the tropical sweetness of mango and pineapple, and the refreshing crispness of green apple. These fragrances instantly energize the ambience, making any space feel cheerful, uplifting, and full of life.
              Perfect for homes, offices, retail spaces, and areas where a burst of freshness is needed, Fruit Notes deliver an irresistible combination of natural fruit essences and long-lasting performance

              Includes: Mango, Brazil Mango, Green Apple, Pineapple, Orange, Lemon, Citrus, Strawberry, Kiwi, Exotic, Cherry, Tango, Expression etc
            </p>
          </div>
        </div>
      </div>

      <FragranceCard collectionName="fruit-note" />

      <FeaturedSection
        heading="Complete Range of Fruit Note Fragrances"
        collection="fresh-think"
        subCategory="room-air-freshener-300"
        subHeading=''

      />
    </>
  );
}
