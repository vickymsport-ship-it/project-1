"use client";

import Image from "next/image";
import Link from "next/link";

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/919029141611"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-white flex items-center gap-3 px-4 py-3  rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-bounce-slow"
      aria-label="Chat on WhatsApp"
    >
      <div className="text-black text-sm leading-tight">
        <div className="font-semibold">Distributor & Custom</div>
        <div className="font-semibold">Branding Solutions</div>
      </div>
      <Image
        src="/whatsapp.png"
        alt="WhatsApp Logo"
        width={34}
        height={34}
      />
    </Link>
  );
}
