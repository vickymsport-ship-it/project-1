import productImg from "@/public/product-img.png";
import productSmoke from "@/public/product-smoke.png";
import Image from "next/image";
import productImgHolder from "@/public/product-img-holder.png";

export default function SloganSection({ }) {
    return (
       <div className="w-full max-w-full relative mb-24">
            <div className="w-full bg-white rounded-[20px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.15)] px-4 sm:px-6 lg:px-8 relative h-auto lg:h-92">       
                <div className="absolute inset-0 overflow-hidden rounded-[20px] pointer-events-none">
                    <div className="absolute inset-0 opacity-10">
                        {Array.from({ length: 20 }).map((_, i) => (
                            <div
                                key={`v-${i}`}
                                className="absolute top-0 bottom-0 w-1 bg-gray-400"
                                style={{ left: `${i * 5}%` }}
                            />
                        ))}
                        {Array.from({ length: 12 }).map((_, i) => (
                            <div
                                key={`h-${i}`}
                                className="absolute left-0 right-0 h-1 bg-gray-400"
                                style={{ top: `${i * 8.33}%` }}
                            />
                        ))}
                    </div>

                    <div className="absolute -left-2 top-2 flex gap-3">
                        {Array.from({ length: 12 }).map((_, i) => (
                            <div key={`top-${i}`} className="w-2 h-2 bg-white rounded-full opacity-15" />
                        ))}
                    </div>
                    <div className="absolute -left-2 bottom-2 flex gap-3">
                        {Array.from({ length: 12 }).map((_, i) => (
                            <div key={`bottom-${i}`} className="w-2 h-2 bg-white rounded-full opacity-15" />
                        ))}
                    </div>
                    <div className="absolute -top-2 right-2 flex flex-col gap-3">
                        {Array.from({ length: 10 }).map((_, i) => (
                            <div key={`right-${i}`} className="w-2 h-2 bg-white rounded-full opacity-15" />
                        ))}
                    </div>
                    <div className="absolute -top-2 left-2 flex flex-col gap-3">
                        {Array.from({ length: 10 }).map((_, i) => (
                            <div key={`left-${i}`} className="w-2 h-2 bg-white rounded-full opacity-15" />
                        ))}
                    </div>
                    
                    <div className="absolute top-8 left-8 opacity-10">
                        <div className="grid grid-cols-4 gap-4">
                            {Array.from({ length: 16 }).map((_, i) => (
                                <div key={`grid-${i}`} className="w-1 h-1 bg-white rounded-full" />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="relative z-10 flex flex-col lg:flex-row items-center pt-8 lg:pt-0 justify-between gap-8 max-w-6xl mx-auto">
                    <div className="text-center lg:text-left flex-1">
                        <div className="mb-2 lg:mb-2">
                            <span className="text-stone-300 text-2xl sm:text-3xl lg:text-4xl font-thin leading-8 sm:leading-10 tracking-wide block">
                                Not Just Hanging,
                            </span>
                            <span className="text-[#824E98] text-3xl sm:text-4xl lg:text-5xl font-bold font-salsa leading-8 sm:leading-10 lg:leading-22 tracking-[0.03em] mt-4 block">
                                It's Refreshing!
                            </span>
                        </div>
                    </div>

                    <div className="flex-1 relative flex justify-center lg:justify-end translate-y-12 lg:translate-y-24">
                        <div className="relative z-20">
                            <Image 
                                className="w-48 h-64 sm:w-56 sm:h-72 lg:w-72 lg:h-96 object-contain drop-shadow-2xl" 
                                src={productImg} 
                                alt="Product Image" 
                                priority
                            />
                        </div>
                        
                        <div className="absolute z-10 -top-4 right- lg:-top-8 lg:right-26">
                            <Image 
                                className="w-16 h-14 sm:w-20 sm:h-16 lg:w-24 lg:h-20 opacity-60" 
                                src={productImgHolder} 
                                alt="Product Image Holder" 
                            />
                        </div>
                        
                        <div className="absolute -bottom-20 -left-10 lg:-bottom-32 lg:-left-20 opacity-30 sm:opacity-40">
                            <Image 
                                className="w-48 h-36 sm:w-80 sm:h-60 lg:w-[603.38px] lg:h-[452.53px] scale-y-[-1]" 
                                src={productSmoke} 
                                alt="Product Smoke" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}