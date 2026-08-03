"use client";
import { useState } from "react";

const testimonials = [
    {
        name: "Suresh Patil",
        role: "Hotel Manager",
        location: "Pune",
        title: "Perfect for commercial use",
        text: "We use Primmox refills across all our washrooms and lobby area. The performance is consistent, and the fragrances stay noticeable for hours. Excellent value for the price.",
        rating: 5
    },
    {
        name: "Aarav Mehta",
        role: "Entrepreneur",
        location: "Mumbai",
        title: "Keeps my office smelling fresh all day!",
        text: "I've been using Primmox automatic refills for my office space, and the fragrance lasts unbelievably long. Even during peak hours, the room feels refreshed and clean. The Z200 sprays actually last for weeks. Super impressed with the quality!",
        rating: 5
    },
    {
        name: "Meera Joshi",
        role: "Salon Owner",
        location: "Nagpur",
        title: "Perfect for professional spaces",
        text: "I use FreshThink room sprays in my salon. The fragrance creates a welcoming environment for clients, and it helps maintain freshness throughout the day. Highly recommend!",
        rating: 5
    },
    {
        name: "Rajesh Kumar",
        role: "Restaurant Owner",
        location: "Delhi",
        title: "Game changer for hospitality",
        text: "The automatic dispensers work flawlessly in our restaurant. Guests always compliment the ambiance. These refills are worth every penny!",
        rating: 5
    }
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(1); // Start with 2nd item (index 1)

    const handlePrev = () => {
        setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const getVisibleTestimonials = () => {
        const prev = activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
        const next = activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1;
        return [prev, activeIndex, next];
    };

    const visibleIndices = getVisibleTestimonials();

    return (
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-12 sm:mb-16 text-center">
                    WHAT OUR CLIENTS SAY ABOUT US
                </h2>

                {/* Mobile View - Single Card */}
                <div className="block md:hidden">
                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                        <h4 className="text-xl font-bold text-gray-800 mb-1">
                            {testimonials[activeIndex].name}
                        </h4>
                        <p className="text-sm text-gray-500 mb-3">
                            {testimonials[activeIndex].role}, {testimonials[activeIndex].location}
                        </p>
                        <div className="flex mb-4">
                            {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                                <svg
                                    key={i}
                                    className="w-5 h-5 text-yellow-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                </svg>
                            ))}
                        </div>
                        <h5 className="font-semibold text-gray-800 mb-3 text-base">
                            {testimonials[activeIndex].title}
                        </h5>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {testimonials[activeIndex].text}
                        </p>
                    </div>
                </div>

                {/* Desktop View - Three Cards */}
                <div className="hidden md:grid grid-cols-3 gap-6 lg:gap-8 items-center">
                    {visibleIndices.map((testimonialIndex, idx) => {
                        const isActive = idx === 1;
                        const testimonial = testimonials[testimonialIndex];

                        return (
                            <div
                                key={testimonialIndex}
                                className={`bg-white rounded-2xl border border-gray-100 transition-all duration-300 ${
                                    isActive
                                        ? "p-10 lg:p-12 shadow-2xl scale-105 opacity-100"
                                        : "p-5 lg:p-6 shadow-md scale-90 opacity-70"
                                }`}
                            >
                                <h4
                                    className={`font-bold text-gray-800 mb-1 ${
                                        isActive ? "text-xl lg:text-2xl" : "text-base lg:text-lg"
                                    }`}
                                >
                                    {testimonial.name}
                                </h4>
                                <p
                                    className={`text-gray-500 mb-3 ${
                                        isActive ? "text-sm" : "text-xs"
                                    }`}
                                >
                                    {testimonial.role}, {testimonial.location}
                                </p>
                                <div className="flex mb-3">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className={`text-yellow-400 ${
                                                isActive ? "w-5 h-5" : "w-4 h-4"
                                            }`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                        </svg>
                                    ))}
                                </div>
                                <h5
                                    className={`font-semibold text-gray-800 mb-2 ${
                                        isActive ? "text-base lg:text-lg" : "text-xs lg:text-sm"
                                    }`}
                                >
                                    {testimonial.title}
                                </h5>
                                <p
                                    className={`text-gray-600 leading-relaxed ${
                                        isActive ? "text-sm lg:text-base" : "text-xs"
                                    }`}
                                >
                                    {testimonial.text}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Navigation Arrows */}
                <div className="flex justify-center gap-4 mt-8 sm:mt-12">
                    <button
                        onClick={handlePrev}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                        aria-label="Previous testimonial"
                    >
                        <svg
                            className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={handleNext}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                        aria-label="Next testimonial"
                    >
                        <svg
                            className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Dot Indicators */}
                <div className="flex justify-center gap-2 mt-6">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all ${
                                index === activeIndex ? "bg-gray-800 w-8" : "bg-gray-300"
                            }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}