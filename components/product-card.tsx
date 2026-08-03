"use client";

import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  variations?: number;
  showCardDescription?: boolean;
  imgClass?: string;
  categoryLink?: string;
}

export default function ProductCard({
  id,
  name,
  price,
  image,
  description,
  variations = 5,
  showCardDescription = false,
  imgClass,
  categoryLink,
}: ProductCardProps) {
  return (
    <div>


      <div
        className="bg-white rounded-[20px] shadow-[0_6px_24px_rgba(0,0,0,0.08)] overflow-hidden shrink-0 mx-auto hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-300"
        style={{ width: "304px", height: "534px" }}
      >
        {/* Image Section */}
        <Link href={ categoryLink || `/product/${id}`}>
          <div className="w-full" style={{ height: "340px" }}>
            <Image
              src={image.startsWith("/") ? image : `/${image}`}
              alt={name}
              width={304}
              height={340}
              className={`w-full h-full object-cover`}

            />
          </div>
        </Link>

        {/* Content */}
        <div className="flex flex-col h-[194px] p-6 justify-between"
          style={{
            padding: "12px 16px",
          }}
        >
          {/* Product Name */}
          <h3 className="text-[20px] mt-4 text-[#0b0b0b] leading-[26px] line-clamp-3 text-center">
            {name}
          </h3>

          {showCardDescription && (
            <p className="text-[16px] text-[#0b0b0b] leading-[20px] line-clamp-2 text-center">
              {description}
            </p>
          )}
          {/* Variations and Button - aligned at bottom */}
          <div className="flex items-end justify-between  mb-4">
            <div className="flex items-baseline gap-1">
              <span className="text-[14px] font-semibold text-[#0D1A9E]">
                {variations}+
              </span>
              <span className="text-[14px]  text-[#0D1A9E]">
                Variations
              </span>
            </div>

            <Link
              href={categoryLink || `/product/${id}`}
              className="rounded-3xl text-center font-medium text-[15px] transition-all duration-200 hover:bg-[#e0e4ff] active:scale-95 flex items-center justify-center"
              style={{
                width: "80px",
                height: "30px",
                backgroundColor: "#EDEFFF",
                color: "#0D1A9E",
              }}

              aria-label="View product"
            >
              VIEW
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
