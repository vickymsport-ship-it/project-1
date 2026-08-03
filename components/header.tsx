"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronUp } from "lucide-react";
import logo from "@/public/logo.png";
import chIndia from "@/public/chhIndia.png";
import freshThink from "@/public/fresh-think-logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [expandedLink, setExpandedLink] = useState<string | null>(null);

  const navLinks = [
    { href: "/", label: "Home" },
    { 
      href: "/primmox", 
      label: "Primmox",
      subLinks: [
        { href: "/primmox#aerosol-225", label: "Air Freshener Refills" },
        { href: "/primmox#pocket-freshener", label: "Pocket Gel Freshener" },
        { href: "/primmox#aerosol-250", label: "Automatic spray Refill" },
        { href: "/primmox#urinal-screen", label: "Primmox Urinal Screen" },
        { href: "/primmox#diffuser-oil", label: "Aroma Diffuser Oil" },
        { href: "/primmox#car-perfume", label: "Mist Car Perfume" },
        { href: "/primmox#scent-aroma", label: "Smart Scent Diffuser Oil" },
      ]
    },
    { 
      href: "/fresh-think", 
      label: "Fresh Think",
      subLinks: [
        { href: "/fresh-think#room-234", label: "Automatic spray Refill" },
        { href: "/fresh-think#mist-air", label: "Mist Freshener" },
        { href: "/fresh-think#anti-splash", label: "Freshthink Urinal Screen" },
        { href: "/fresh-think#eco-urinal-anti-splash-screen", label: "Eco Urinal Screen" },
        { href: "/fresh-think#compact-size-urinal-screen", label: "Compact Urinal Screen" },
      ]
    },
    { href: "/fragrances", label: "Fragrances" },
    { href: "/media", label: "Media" },
    { href: "/about-us", label: "About Us" },
    { href: "/contact-us", label: "Contact Us" },
    { href: "/careers", label: "Careers" },
  ];

  return (
    <header className="bg-white rounded-bl-[28px] rounded-br-[28px] border-b border-gray-200 sticky top-0 z-50 mx-4">
      <div className="flex items-center justify-between h-16 sm:h-20 px-4 sm:px-8">
        {/* LEFT — Logo */}
        <Link href="/" className="flex-shrink-0 flex gap-2 items-center">
          {pathname?.startsWith("/fresh-think") ? (
            <Image
              src={freshThink}
              alt="Fresh Think Logo"
              width={120}
              height={54}
              className="object-contain w-20 sm:w-24 lg:w-[120px] h-auto"
            />
          ) : (
            <Image 
              src={logo} 
              alt="logo" 
              width={120} 
              height={54} 
              className="object-contain w-20 sm:w-24 lg:w-[120px] h-auto"
            />
          )}
          <Image
            src={chIndia}
            alt="logo"
            width={50}
            height={30}
            className="lg:hidden w-10 h-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8">
          {navLinks.map((link) => (
            <div key={link.href} className="relative group">
              <Link
                href={link.href}
                className={
                  pathname === link.href
                    ? "px-3 py-2 rounded-lg text-sm lg:text-base font-medium text-amber-900 transition-colors"
                    : "px-3 py-2 rounded-lg text-sm lg:text-base font-medium text-gray-900 transition-colors"
                }
              >
                {link.label}
              </Link>
              {link.subLinks && (
                <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-xl border border-gray-100 p-2 hidden group-hover:block z-50 animate-fadeIn">
                  {link.subLinks.map((subLink) => (
                    <Link
                      key={subLink.href}
                      href={subLink.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-900 rounded-lg"
                    >
                      {subLink.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right — Flag */}
        <Link href="/" className="hidden lg:block flex-shrink-0">
          <Image src={chIndia} alt="flag" width={42} height={32} />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-amber-100"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            // X ICON
            <svg
              className="w-6 h-6 text-amber-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // HAMBURGER ICON
            <svg
              className="w-6 h-6 text-amber-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu - Absolute Overlay */}
      {isOpen && (
        <nav
          className="
          lg:hidden 
          absolute top-full left-0 right-0
          flex flex-col items-center 
          gap-3 px-4 py-4 
          bg-white
          rounded-bl-[28px] rounded-br-[28px]
          border-b border-gray-200
          shadow-lg
          animate-fadeIn
          max-h-[85vh] overflow-y-auto
        "
        >
          {navLinks.map((link) => (
            <div key={link.href} className="w-full max-w-xs">
              {link.subLinks ? (
                <button
                  onClick={() =>
                    setExpandedLink(expandedLink === link.label ? null : link.label)
                  }
                  className="
                  flex items-center justify-between
                  w-full 
                  px-4 py-3 
                  bg-amber-50 
                  text-amber-900 
                  font-medium 
                  rounded-xl 
                  shadow-sm 
                  hover:bg-amber-100 
                  transition-all
                "
                >
                  <span className="flex-1 text-center">{link.label}</span>
                  {expandedLink === link.label ? (
                    <ChevronUp className="w-4 h-4 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 flex-shrink-0" />
                  )}
                </button>
              ) : (
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="
                  block
                  w-full text-center 
                  px-4 py-3 
                  bg-amber-50 
                  text-amber-900 
                  font-medium 
                  rounded-xl 
                  shadow-sm 
                  hover:bg-amber-100 
                  transition-all
                "
                >
                  {link.label}
                </Link>
              )}
              {link.subLinks && expandedLink === link.label && (
                <div className="flex flex-col gap-2 mt-2 pl-4 animate-fadeIn">
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="
                            block
                            w-full text-center 
                            px-4 py-2
                            bg-white 
                            text-amber-800 
                            font-medium 
                            text-sm
                            rounded-lg 
                            border border-amber-100
                            hover:bg-amber-50 
                            transition-all"
                  >
                    All {link.label}
                  </Link>
                  {link.subLinks.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      onClick={() => setIsOpen(false)}
                      className="
                            block
                            w-full text-center 
                            px-4 py-2
                            bg-white 
                            text-amber-800 
                            font-medium 
                            text-sm
                            rounded-lg 
                            border border-amber-100
                            hover:bg-amber-50 
                            transition-all"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      )}
    </header>
  );
}