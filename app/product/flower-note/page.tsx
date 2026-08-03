
import Footer from "@/components/footer";
import FeaturedSection from "@/components/featured-section";
import SloganSection from "@/components/slogan-section";
import heroImg from "@/public/fragrance/flower-note/hero-section.png";
import Image from "next/image";
import FragranceCard from "@/components/fragrance-card";

import Banner from "@/components/banner";
const bannerImages = ['/fragrance/rose-b-1.png'];



export default function FlowerNote() {
  return (
    <>




      <Banner images={bannerImages} />



      <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Big Image */}
          <div className="relative w-full h-80 sm:h-96 lg:h-[28rem] rounded-xl overflow-hidden">
            <Image
              src='/fragrance/flower-note/p-1.png'
              alt="Fragrance Collection"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Right - Description */}
          <div className="text-center lg:text-left">

            <p className="text-gray-700 text-lg sm:text-xl lg:text-2xl leading-relaxed font-thin">
              <span className="text-4xl">Flower Note</span> fragrances bring the soothing elegance of nature into your space. Each aroma is inspired by the delicate essence of real flowers — from the timeless charm of rose and jasmine to the relaxing calm of lavender and the luxurious aura of orchid. These fragrances are designed to create a warm, peaceful, and refreshing atmosphere that feels naturally comforting. Whether you prefer soft floral sweetness, rich traditional blooms, or calming pastel scents, our Flower Note range delivers long-lasting freshness with a touch of beauty in every breath

              Includes: Rose, Exotic Rose, Lavender, English Lavender, Jasmine, Lily, Rajnigandha, Vanilla, Impression, Amiraj, Orchid etc                </p>
          </div>
        </div>
      </div>

      <FragranceCard collectionName="flower-note" />


      <FeaturedSection
        heading="Complete Range of Flower Note Fragrances"
        collection="fresh-think"
        subCategory="room-air-freshener-300"
        subHeading=''

      />


    </>
  );
}
