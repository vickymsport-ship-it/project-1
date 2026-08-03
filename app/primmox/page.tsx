import FeaturedSection from '@/components/featured-section';
import SloganSection from '@/components/slogan-section';

export const metadata = {
  title: 'Primmox - Premium Fragrance Collection | Fragrance',
  description: 'Discover our Primmox collection of premium and bold fragrances.',
};
import Banner from '@/components/banner';
const bannerImages = ['/primmox/pmax-b-1.png', '/primmox/pmax-b-2.png', '/primmox/pmax-b-3.png', '/primmox/pmax-b-4.png', '/primmox/pmax-b-5.png', '/primmox/pmax-b-6.png', '/primmox/pmax-b-7.png', '/primmox/pmax-b-8.png'];

export default function PrimmoxPage() {
  return (
    <>
      {/* Hero Section */}
      <Banner images={bannerImages} />


      {/* Collection Products */}
      <FeaturedSection
        heading="Automatic spray Refill 225ml"
        subHeading=''
        collection="primmox"
        subCategory="aerosol-air-freshener"
        id="aerosol-225"
      />

      <div className='flex justify-center'>
        <SloganSection />
      </div>

      <FeaturedSection
        heading="Pocket Gel Freshener"
        subHeading=''
        collection="primmox"
        subCategory="pocket-air-freshener"
        id="pocket-freshener"
      />

      <FeaturedSection
        heading="Car Gel Freshener"
        subHeading=''
        collection="primmox"
        subCategory="aerosol-air-freshener-refills-250"
        id="aerosol-refill-250"
      />

      <FeaturedSection
        heading="Primmox Urinal Screen"
        subHeading=''
        collection="primmox"
        subCategory="urinal-screen"
        id="urinal-screen"
      />

      <FeaturedSection
        heading="Smart Scent Diffuser Oil 400ml & 200ml"
        subHeading=''
        collection="primmox"
        subCategory="scent-aroma-oil"
        id="scent-aroma"
      />

      <FeaturedSection
        heading="Smart Scent Diffuser"
        subHeading=''
        collection="primmox"
        subCategory="smart-scent-diffuser"
        id="smart-scent-diffuser"
      />


      <FeaturedSection
        heading="Aroma Diffuser Oil 1000ml"
        subHeading=''
        collection="primmox"
        subCategory="essential-diffuser-oil-dispenser"
        id="diffuser-oil"
      />

      <FeaturedSection
        heading="Mist Car Perfume"
        subHeading=''
        collection="primmox"
        subCategory="luxury-car-perfume"
        id="car-perfume"
      />

      <FeaturedSection
        heading="Paper Car Freshener"
        subHeading=''
        collection="primmox"
        subCategory="paper-car-freshener"
        id="paper-car-freshener"
      />



      <FeaturedSection
        heading="Automatic spray Refill 250ml"
        subHeading=''
        collection="primmox"
        subCategory="aerosol-air-freshener-250"
        id="aerosol-250"
      />


      <FeaturedSection
        heading="Automatic Spary Refill Step shoulder 100ml "
        subHeading=''
        collection="primmox"
        subCategory="automatic-air-freshener-refills-100"
        id="auto-100"
      />





      {/* Collection Info */}
      {/* <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 to-yellow-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-amber-900 mb-4 sm:mb-6">
                About Primmox
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                The Primmox collection represents the pinnacle of fragrance sophistication.
                Each scent is a masterpiece, blending premium ingredients with innovative techniques.
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                Perfect for those who dare to be different and want to leave a lasting impression.
                Whether it's a special occasion or everyday elegance, Primmox has the perfect fragrance for you.
              </p>
              <a
                href="/contact-us"
                className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-amber-600 text-white font-bold rounded-lg hover:bg-amber-700 transition-colors"
              >
                Learn More
              </a>
            </div>
            <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden">
              <img
                src="/premium-oud-fragrance-bottle.jpg"
                alt="Primmox Collection"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
