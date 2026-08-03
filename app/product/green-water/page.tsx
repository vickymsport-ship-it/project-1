import Image from "next/image";
import FragranceCard from "@/components/fragrance-card";
import heroImg from "@/public/fragrance/green-water/hero.png";
import FeaturedSection from "@/components/featured-section";
import Banner from "@/components/banner";
const bannerImages = ['/fragrance/nature-b-1.png'];



export default function GreenWater() {
  return (
    <>
      {/* Hero Section */}
      <Banner images={bannerImages} />

      <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Big Image */}
          <div className="relative w-full h-80 sm:h-96 lg:h-[28rem] rounded-xl overflow-hidden">
            <Image
              src="/fragrance/green-water/p-1.png"
              alt="Fragrance Collection"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Right - Description */}
          <div className="text-center lg:text-left">
            <p className="text-gray-700 text-lg sm:text-xl lg:text-2xl leading-relaxed font-thin">
              <span className="text-4xl">Green Water</span>
              <span className="text-4xl"></span>  combine the best of both worlds — the soothing essence of nature and the crisp freshness of water. Green Notes bring herbal purity, leafy tones, and grounding calmness, while Water Notes add cooling energy, aquatic lightness, and airy clarity. Together, they create a refreshing and uplifting environment perfect for everyday use. These fragrances offer a clean, energizing ambience suitable for homes, offices, spas, wellness centers, workspaces, and modern commercial interiors. Whether you enjoy minty coolness, citrus-green brightness, or ocean-like freshness, this category brings a revitalizing breath of nature into your surroundings.

              Includes: Lemon Grass, Vibrant, Coolmint, Rups, Sandalwood, Aqua, Cool Water, Aquatic Fresh, Ice Blast, Mineral, Midas Touch etc
            </p>
          </div>
        </div>
      </div>

      <FragranceCard collectionName="green-water" />


      <FeaturedSection
        heading="Complete Range of Green Water Note Fragrances"
        collection="fresh-think"
        subCategory="room-air-freshener-300"
        subHeading=''

      />

    </>
  );
}