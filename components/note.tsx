import directorNote from "@/public/director.png";
import quoteMark from "@/public/quotes.png";
import Image from "next/image";

export default function Note({ }: {}) {
    return (
        <div className="w-full max-w-full bg-white overflow-hidden py-8 px-8">
            <div className="max-w-[1440px] mx-auto px-4 relative">
                <div className="flex flex-col lg:flex-row items-start gap-8">
                    {/* Left Content */}
                    <div className="flex-1">
                        <div className="flex items-center  mb-4">
                            <div className="w-6 h-0.5 bg-blue-900 rotate-90" />
                            <div className="text-stone-900 text-3xl font-normal font-['Rubik'] leading-7">Director's Note</div>
                        </div>

                        <div className="pl-12">
                            <Image
                                className="w-6 h-6 mb-6"
                                src={quoteMark}
                                alt="Quote mark"
                            />

                            <div className="text-black text-base font-light font-['Rubik'] leading-6 mb-8">
                                At Primmox and FreshThink, our vision is to deliver high-quality hygiene and fragrance solutions that enhance everyday living. What began as a commitment to uplift spaces with freshness has grown into a mission to empower people and strengthen India's manufacturing capabilities. During the lockdown, we supported over 500 skilled workers and their families — a responsibility that shaped our long-term goal of creating 50,000+ employment opportunities in the coming years. Today, CHH India stands as a rapidly growing name in the hygiene and air-care industry. Through innovation, quality, and a people-first approach, we aim to continue contributing to a cleaner, fresher, and more self-sufficient India
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Image with name and role on right side of image */}
                    <div className="flex-1 flex flex-col md:flex-row items-start gap-6">
                        {/* Image */}
                        <Image
                            className="w-full md:w-96 h-96 object-cover"
                            src={directorNote}
                            alt="Director's Note"
                        />

                        {/* Name and Role */}
                        <div className="text-left min-w-[200px] mt-0 md:mt-12">
                            <div className="text-black text-3xl md:text-4xl font-medium font-['Rubik'] leading-[62.96px]">
                                Prakash Patil
                            </div>
                            <div className="text-black text-lg md:text-xl font-thin leading-[14px] pl-16">
                                Managing Director
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}