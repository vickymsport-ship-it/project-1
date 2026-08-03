'use client';

import FeaturedSection from '@/components/featured-section';
import products from '@/data/products.json';
import Link from 'next/link';
import Image from 'next/image';

import amazonImg from '@/public/amazon-logo.png';
import flipCartImg from "@/public/flipcart.png";

interface ProductClientPageProps {
  params: {
    id: string;
  };
}

export default function ProductClientPage({ params }: ProductClientPageProps) {
  const product = products.products.find((p) => p.id === parseInt(params.id));

  console.log(product);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-amber-900 mb-4">Product Not Found</h1>
        <Link href="/" className="text-amber-600 hover:text-amber-700">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Product Details */}
      <section className="pt-2 sm:pt-4 lg:pt-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="text-gray-600 hover:text-gray-700 text-sm sm:text-base mb-4 sm:mb-6 inline-block">
            ← Back to Home
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            {/* Product Image */}
            <div className="flex items-start justify-start rounded-lg p-0 h-auto">
              <img
                src={product.image.startsWith("/") ? product.image : `/${product.image}`}
                alt={product.name}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-sm sm:text-base text-gray-600 font-semibold mb-1">
                  {product.collection.toUpperCase()}
                </p>
                <h1 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 leading-tight">
                  {product.name}
                </h1>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  {product.description}
                </p>

                {/* Price */}
                <div className="mb-2">
                  <p className="text-sm sm:text-base text-gray-600 mb-1">Price</p>
                  {product.price && (
                    <p className="text-3xl sm:text-4xl font-bold text-gray-700">
                      ₹{product.price.toLocaleString()}
                    </p>
                  )}
                </div>
              </div>

              {/* Purchase Options */}
              <div>
                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">
                  Buy on your preferred platform
                </p>
                <div className="flex flex-row flex-wrap gap-3 sm:gap-4">
                  {product.flipkartLink && (
                    <a
                      href={product.flipkartLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-black gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:scale-105 transition-transform"
                    >
                      <Image src={flipCartImg} alt="Flipkart" className="h-5 sm:h-6" width={24} height={24} />
                    </a>
                  )}
                  {product.amazonLink && (
                    <a
                      href={product.amazonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex bg-black items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:scale-105 transition-transform"
                    >
                      <Image src={amazonImg} alt="Amazon" className="h-5 sm:h-6" width={24} height={24} />
                    </a>
                  )}
                </div>
              </div>

              {/* Fragrance Notes */}
              {product.notes && product.notes.length > 0 && (
                <div className="py-6">
                  <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">
                    Fragrance Notes
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.notes.map((note, index) => (
                      <span
                        key={index}
                        className="px-3 sm:px-4 py-1 sm:py-2 bg-gray-100 text-gray-900 rounded-full text-sm sm:text-base font-medium"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* about product */}
              {product?.about && (
                <div>
                  <p className="text-sm sm:text-base font-semibold text-gray-900 mb-2">
                    About Product
                  </p>
                  <p
                    className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4"
                    dangerouslySetInnerHTML={{
                      __html: product.about.replace(
                        /\*\*(.*?)\*\*/g,
                        '<strong>$1</strong>'
                      ),
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* products like this */}
        <FeaturedSection
          heading="You may also like this"
          subHeading=''
          collection="primmox"
          subCategory={product.subCategory}
        />
      </section>
    </>
  );
}