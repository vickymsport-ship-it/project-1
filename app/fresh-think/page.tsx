import FeaturedSection from '@/components/featured-section';
import FreshThinkLogo from '@/public/fresh-think-logo.png';

export const metadata = {
  title: 'Fresh Think - Fresh Fragrance Collection | Fragrance',
  description: 'Explore our Fresh Think collection of refreshing and vibrant fragrances.',
};

import Banner from '@/components/banner';
const bannerImages = ['/fresh-think/ft-b-1.png', '/fresh-think/ft-b-2.png', '/fresh-think/ft-b-3.png', '/fresh-think/ft-b-4.png', '/fresh-think/ft-b-5.png', '/fresh-think/ft-b-6.png', '/fresh-think/ft-b-7.png'];


export default function FreshThinkPage() {
  return (
    <>
      {/* Hero Section */}
      <Banner images={bannerImages} />



      {/* Collection Products */}
      <FeaturedSection
        headerLogo={FreshThinkLogo}
        heading="Room Freshener 234ml"
        collection="fresh-think"
        subCategory="room-air-freshener-234"
        subHeading=''
        id="room-234"
      />

      <FeaturedSection
        heading="Freshthink Urinal Screen"
        subCategory="anti-splash-urinal-screen"
        collection="fresh-think"
        subHeading=''
        id="anti-splash"
      />


      <FeaturedSection
        heading="Mist Freshener 250ml"
        collection="fresh-think"
        subCategory="mist-air-freshener-250"
        subHeading=''
        id="mist-air-250ml"
      />

      <FeaturedSection
        heading="Room Freshener 300ml"
        collection="fresh-think"
        subCategory="room-air-freshener-300"
        subHeading=''
        id="room-300"
      />

      <FeaturedSection
        heading="Eco Urinal Screen"
        collection="fresh-think"
        subCategory="eco-urinal-anti-splash-screen"
        subHeading=''
        id="eco-urinal-anti-splash-screen"
      />

      <FeaturedSection
        heading="Compact Size Urinal Screen"
        collection="fresh-think"
        subCategory="compact-size-urinal-screen"
        subHeading=''
        id="compact-size-urinal-screen"
      />



      {/* Collection Info */}
      {/* <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden">
              <img
                src="/fresh-mint-citrus-fragrance-bottle.jpg"
                alt="Fresh Think Collection"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-green-900 mb-4 sm:mb-6">
                About Fresh Think
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                The Fresh Think collection celebrates the beauty of nature's freshest aromas. 
                Inspired by vibrant landscapes and invigorating elements, each fragrance tells a story.
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                Ideal for daytime wear, these fragrances uplift and energize. 
                Experience the freshness that makes every moment feel alive and new.
              </p>
              <a
                href="/contact-us"
                className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
