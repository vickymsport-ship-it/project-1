"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ProductCard from "./product-card";
import products from "@/data/products.json";
import logo from "@/public/logo.png";

interface FeaturedSectionProps {
  heading?: string; // <-- NEW optional heading
  collection?: string;
  showViewAll?: boolean;
  viewAllLink?: string;
  limit?: number;
  subHeading?: string;
  headerLogo?: any;
  subCategory?: string;
  showCardDescription?: boolean;
  imgClass?: string;
  id?: string;
}

export default function FeaturedSection({
  heading = "Refresh Like a Pro",
  subHeading = "Engineered for every environment",
  collection,
  showViewAll = false,
  viewAllLink = "/",
  limit = 6,
  subCategory,
  headerLogo,
  showCardDescription = false,
  imgClass,
  id,
}: FeaturedSectionProps) {
  
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToEnd = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollWidth,
        behavior: "smooth",
      });
    }
  };

  let filteredProducts = collection
    ? products.products.filter((p) => p.collection === collection)
    : products.products.slice(0, limit);

    if (subCategory) {
      filteredProducts = filteredProducts.filter(
        (p) => p.subCategory === subCategory
      );
    }

  return (
    <section id={id} className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* ⭐ HEADER WITH LOGO + CUSTOM OR DEFAULT HEADING ⭐ */}
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 mb-6 sm:mb-8 lg:mb-12">
          {headerLogo && (
            <Image
              src={headerLogo}
              alt="logo"
              width={80}
              height={28}
              className="w-20 h-7 sm:w-24 sm:h-8 lg:w-[120px] lg:h-[40px]"
            />
          )}
          <div className="text-black text-left sm:text-center text-[16px] sm:text-[16px] lg:text-[32px] font-semibold leading-tight">
            {heading}
            {subHeading && (
              <>
                <span className="px-1 sm:px-2 text-[#F7AA47]">|</span>
                <span className="font-thin text-[16px] sm:text-[22px] lg:text-[32px]">
                  {subHeading}
                </span>
              </>
            )}
          </div>
          
          {/* Right Arrow Button */}
          <button 
            onClick={scrollToEnd}
            className="ml-auto flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full border border-gray-200 bg-white text-gray-900 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
            aria-label="Scroll to end"
          >
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </button>
        </div>

        {/* Products Grid */}
        <div 
          ref={scrollRef}
          className="flex gap-3 sm:gap-4 lg:gap-6 overflow-x-auto scrollbar-hide pb-4 px-4 sm:px-6"
        >
  {filteredProducts.map((product) => (
    <div 
      key={product.id} 
      className="flex-shrink-0 w-[280px] min-w-[320px] sm:w-[300px]  lg:w-[320px]"
    >
      <ProductCard
        id={product.id}
        name={product.name}
        price={Number(product.price)}
        image={product.image}
        description={product.description}
        showCardDescription={showCardDescription}
        imgClass={imgClass}
        categoryLink={product?.categoryLink || undefined}
      />
    </div>
  ))}
</div>

        {/* View All Button */}
        {showViewAll && (
          <div className="text-center mt-8 sm:mt-12">
            <a
              href={viewAllLink}
              className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-amber-600 to-yellow-500 text-white font-bold rounded-lg hover:from-amber-700 hover:to-yellow-600 transition-all transform hover:scale-105"
            >
              View All Products
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
