import Image from "next/image";
import FragranceCard from "@/components/fragrance-card";
import heroImg from "@/public/fragrance/corporate-note/hero.png";
import FeaturedSection from "@/components/featured-section";
import Banner from "@/components/banner";
const bannerImages = ['/fragrance/corp-b-1.png'];



export default function CorporateNote() {
  return (
    <>
      {/* Hero Section */}
      <Banner images={bannerImages} />



      <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Big Image */}
          <div className="relative w-full h-80 sm:h-96 lg:h-[28rem] rounded-xl overflow-hidden">
            <Image
              src="/fragrance/corporate-note/p-1.png"
              alt="Fragrance Collection"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Right - Description */}
          <div className="text-center lg:text-left">
            <p className="text-gray-700 text-lg sm:text-xl lg:text-2xl leading-relaxed font-thin">
              <span className="text-4xl">Corporate Note</span>
              <span className="text-4xl"></span> fragrances bring refined freshness with bold character. Inspired by luxurious perfume profiles, deep woody tones, aromatic spices, and modern masculine notes, this category is engineered for environments that demand excellence. These scents create a confident, premium atmosphere from rich Oudh to elegant Gold Sense and crisp Denim, each fragrance delivers long-lasting sophistication with a polished presence

              Includes:Denim, Black Touch, Black Feel, Glorance, Gold Sense, Night Life, Oudh, Romantic, Passion, Brut, Twist, Silk, Mist, Decor, Decor Fresh, Motivation, Touch Zone, Pleasure, Good Morning
            </p>
          </div>
        </div>
      </div>

      <FragranceCard collectionName="corporate-note" />


      <FeaturedSection
        heading="Complete Range of Corporate Note Fragrances"
        collection="fresh-think"
        subCategory="room-air-freshener-300"
        subHeading=''

      />

    </>
  );
}