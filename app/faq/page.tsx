import React from 'react';

const faqData = [
    // Left Column items from original code
    {
        question: "What products does Primmox manufacture and supply?",
        answer: "Primmox manufactures a wide range of hygiene and fragrance products including air fresheners, refills, sprays, gels, and related solutions under Primmox and FreshThink brands."
    },
    {
        question: "Do you support bulk and institutional orders?",
        answer: "Yes. We specialize in bulk, OEM, and institutional supply across India, with scalable production capacity and reliable dispatch timelines."
    },
    {
        question: "What is the minimum order quantity (MOQ)?",
        answer: "MOQ varies depending on the product type, packaging, and whether it is a standard or custom-branded order. Please submit an enquiry for exact details."
    },
    {
        question: "Do you offer private label or custom branding services?",
        answer: "Yes. We provide complete private label and custom branding solutions, including fragrance selection, packaging, labeling, and production support."
    },
    {
        question: "How can I become a Primmox distributor?",
        answer: "You can submit a business enquiry. Our team will review your application and contact you with next steps."
    },
    {
        question: "What is the typical dispatch timeline for bulk orders?",
        answer: "Standard bulk and OEM orders are dispatched within 7–14 working days, depending on order size and customization requirements."
    },
    {
        question: "Do you supply products across India?",
        answer: "Yes. We have a pan-India distribution network and currently serve 1000+ cities."
    },
    {
        question: "Can I request a product catalogue or samples?",
        answer: "Yes. You can request a catalogue or product details through the enquiry form or WhatsApp support."
    },
    {
        question: "Are your products GST compliant?",
        answer: "Yes. All billing is 100% GST-compliant, suitable for distributors, institutions, and corporate buyers."
    },
    {
        question: "How do I get pricing for bulk or OEM orders?",
        answer: "Pricing depends on volume, product type, and customization. Submit a Bulk Purchase / RFQ enquiry to receive a customized quotation."
    },
    {
        question: "Who should I contact for urgent queries?",
        answer: "For quick assistance, we recommend contacting us via WhatsApp Business Support."
    }
];

export default function FAQ() {
    return (
        <div className="bg-white w-full min-h-screen py-10 px-12 flex flex-col justify-center">
            <div className="flex flex-col items-center text-center mb-10">
                <img
                    src="/faq.png"
                    alt="FAQ illustration"
                    className="mb-4"
                />
                <p className="max-w-3xl text-zinc-600 text-xl font-normal font-['Rubik'] leading-7">
                    Find answers to common questions about bulk supply, distribution, private label solutions, and product support. If you need further assistance, our team is always ready to help.
                </p>
            </div>
            {/* - grid-cols-1: 1 column on mobile 
         - xl:grid-cols-2: 2 columns on large screens (matching your original layout)
         - max-w-[1300px]: Keeps the content centered and not too wide 
      */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 max-w-[1300px]">
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className="w-full h-fit px-5 py-5 bg-white rounded-[20px] outline outline-1 outline-offset-[-1px] outline-gray-100 flex flex-col justify-start items-start gap-2.5"
                    >
                        <div className="w-full text-black text-2xl font-medium font-['Rubik']">
                            {item.question}
                        </div>
                        <div className="w-full text-zinc-600 text-xl font-normal font-['Rubik'] leading-6">
                            {item.answer}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}