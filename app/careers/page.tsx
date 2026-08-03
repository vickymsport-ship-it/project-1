import heroImg from '@/public/career.png';
import Image from 'next/image';
import workWithUsImg from '@/public/work.png';

import Banner from "@/components/banner";
const bannerImages = ['/career.png'];

export default function CareersPage() {
    return (
        <>
            {/* Hero Section */}
            <Banner images={bannerImages} />


            {/* heading and form on right  */}

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="flex flex-col justify-center space-y-6">
                    <h1 className="text-xl sm:text-4xl lg:text-4xl font-bold text-gray-900">
                       Build Your Career With CHH INDIA
                    </h1>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Be part of a team that values innovation, growth, and people-first progress.
                    </p>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        At CHH India, we believe that great teams create great brands. From manufacturing and R&D to marketing and customer excellence, our people drive the freshness and innovation we deliver to millions.
                    </p>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        We are committed to empowering individuals, creating long-term opportunities, and building a workplace where passion meets purpose. Whether you're starting your career or seeking to advance it, we welcome you to grow with us.
                    </p>
                </div>

                {/* Right: Form */}
                <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">Apply Now</h2>
                    <form className="space-y-5">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Your full name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="you@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="+91 98765 43210"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-black hover:scale-105  text-white font-semibold py-3 rounded-lg transition duration-200"
                        >
                            Submit Application
                        </button>
                    </form>
                </div>

                {/* why work with us section  */}

                {/* Why Work With Us Section */}
                <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-12 sm:mt-16">
                    {/* Left: Image */}
                    <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden">
                        <Image
                            src={workWithUsImg}
                            alt="Why Work With Us"
                            fill
                            className="object-cover"
                        />
                    </div>
                    {/* Right: Bullet Points */}
                    <div className="space-y-4">
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Why Work With Us?</h3>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                <span><strong>People-First Culture:</strong> We value collaboration, respect, and personal growth.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                <span><strong>Fast-Growing National Brand:</strong> Work with one of India’s rising fragrance & hygiene product brands.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                <span><strong>Learn, Grow & Lead:</strong> From training to leadership development, we invest in your journey.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                <span><strong>Job Security & Stability:</strong> We believe in long-term roles, not short-term hires.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                <span><strong>Impact-Driven Work:</strong> Your work directly improves customer experiences across India.</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

        </>
    );
}