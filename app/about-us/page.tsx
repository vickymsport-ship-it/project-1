import Link from "next/link";
import Image from "next/image";
import contactHeroImg from "@/public/contactHeroImg.png";
import prakashPatilImg from "@/public/directorImg.png";
import Note from "@/components/note";
import greenLight from "@/public/green-light.png";
import leaf from "@/public/leaf.png";
import checkmark from "@/public/checkmark.png";
import Testimonials from "@/components/testimonials";

export const metadata = {
  title: "About Us - CHH India",
  description:
    "Learn about our company, mission, and values at Primmox and FreshThink.",
};
import Banner from "@/components/banner";
const bannerImages = ['/contactHeroImg.png'];



export default function AboutUsPage() {
  return (
    <>
      {/* Hero Section with Building Image */}
      <Banner images={bannerImages} />



      {/* Director's Note Section */}
      <Note/>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-12 sm:mb-16 text-center">
            WHY CHOOSE US
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {/* Innovation */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
                  <Image
                    src={greenLight}
                    alt="Innovation Icon"
                    className="w-16 h-16 sm:w-20 sm:h-20 text-yellow-500"
                  />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-yellow-600 mb-3">
                Innovation
              </h3>
              <p className="text-[#519032] text-sm sm:text-base">
                We create forward-thinking solutions for modern needs.
              </p>
            </div>

            {/* Sustainability */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
                  <Image
                    src={leaf}
                    alt="Innovation Icon"
                    className="w-16 h-16 sm:w-20 sm:h-20 text-yellow-500"
                  />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-yellow-600 mb-3">
                Sustainability
              </h3>
              <p className="text-[#519032] text-sm sm:text-base">
                Locally Made, Globally Responsible.
              </p>
            </div>

            {/* Quality */}
            <div className="text-center sm:col-span-2 lg:col-span-1">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
                  <Image
                    src={checkmark}
                    alt="Innovation Icon"
                    className="w-16 h-16 sm:w-20 sm:h-20 text-yellow-500"
                  />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-yellow-600 mb-3">
                Quality
              </h3>
              <p className="text-[#519032] text-sm sm:text-base">
                We deliver trusted products with uncompromising standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />
    </>
  );
}
