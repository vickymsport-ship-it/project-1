import Image from "next/image";
import contactHeroImg from "@/public/contactHeroImg.png";
import MediaSection from "@/components/media-section";
import media from "@/data/media.json";


export const metadata = {
  title: "Media - CHH India",
  description: "Explore our media gallery and fragrance lifestyle content.",
};

// Media Cards Data
const mediaCards = media.articles



import Banner from "@/components/banner";
const bannerImages = ['/media-header.png', '/media-b-2.png'];

export default function MediaPage() {
  return (
    <>
      {/* Hero Section with Image */}
      <div className="mt-2 sm:mt-30">
      <Banner images={bannerImages} />
      </div>



      {/* Main Media Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {mediaCards.map((card, index) => (
              <div
                key={card.id}
                className={`bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow ${index === 0 || index === mediaCards.length - 1
                    ? "md:col-span-1"
                    : ""
                  }`}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative h-64 sm:h-full min-h-[250px]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                    />
                    {card.badge && (
                      <div className="absolute top-4 right-4 bg-white rounded-lg px-4 py-2 shadow-lg">
                        <div className="text-3xl sm:text-4xl font-bold text-blue-600">
                          30
                        </div>
                        <div className="text-xs sm:text-sm font-semibold text-gray-600">
                          DAYS
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="p-6 sm:p-8 flex flex-col justify-center">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-6">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* You May Also Like Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
    

          <MediaSection 
          heading="You may also like"
          subHeading=""
          />

        </div>
      </section>
    </>
  );
}
