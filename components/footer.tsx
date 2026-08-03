import Link from "next/link";
import Image from "next/image"; // ⬅️ NEW: Import Image component

// ⬅️ NEW: Import your logos
import logo from "@/public/logo.png"; // CHH India Logo (80px x 68px)
import freshThink from "@/public/fresh-think-logo.png"; // FreshThink Logo (80px x 40px)
import chIndia from "@/public/chhIndia.png";

import { Facebook, Instagram, Linkedin, Youtube, Globe} from "lucide-react";

const SocialIconLink = ({ href, icon: Icon }: any) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-white rounded-xl shadow-sm border border-gray-100 hover:scale-110 transition-transform"
    >
      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#0A142F]" />
    </a>
  );
};

export default function Footer() {
  // Define the dark text color for links and general text on a white background
  const darkTextColor = "text-[#0A142F]"; // Equivalent to #0A142F
  const darkTextHover = "hover:text-amber-900"; // Using the original dark color for a good hover effect

  // Define the classes for the new circular social icon style
  const socialIconClasses = `${darkTextColor} ${darkTextHover} transition-colors 
                            w-8 h-8 flex items-center justify-center rounded-full 
                            border border-[#0A142F]/10`; // w-8/h-8 creates 32px (8*4), rounded-full creates circle, border-[#0A142F]/10 creates 10% opacity border

  // Assuming you have a separate image for Primmox. Since you didn't provide an import for it,
  // I will use the 'logo' import for Primmox for demonstration, or you can replace this comment
  // with a new Primmox import if you have one.
  const primmoxLogo = logo; // Placeholder: Replace with a dedicated Primmox logo if available.

  return (
    // 1. Footer Background: bg-white for #fff
    // 2. Base Text Color: darkTextColor for #0A142F (for headers and non-link text)
    <footer className="bg-white text-[#0A142F] mt-8 sm:mt-12 lg:mt-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Products */}
          <div>
            <h4 className="font-medium mb-3 sm:mb-4 text-sm sm:text-base">
              Products
            </h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link
                  href="/primmox/#aerosol-225"
                  className={`${darkTextColor} ${darkTextHover} transition-colors text-sm sm:text-base leading-snug break-words`}
                >
                  Automatic spray Refill
                </Link>
              </li>
              <li>
                <Link
                  href="/fresh-think/#room-300"
                  className={`${darkTextColor} ${darkTextHover} transition-colors text-sm sm:text-base leading-snug break-words`}
                >
                  Room Freshener
                </Link>
              </li>
              <li>
                <Link
                  href="/fresh-think/#mist-air-250ml"
                  className={`${darkTextColor} ${darkTextHover} transition-colors text-sm sm:text-base leading-snug break-words`}
                >
                  Mist Freshener
                </Link>
              </li>
              <li>
                <Link
                  href="/fresh-think/#anti-splash"
                  className={`${darkTextColor} ${darkTextHover} transition-colors text-sm sm:text-base leading-snug break-words`}
                >
                  Freshthink Urinal Screen
                </Link>
              </li>
              <li>
                <Link
                  href="/primmox/#aerosol-refill-250"
                  className={`${darkTextColor} ${darkTextHover} transition-colors text-sm sm:text-base leading-snug break-words`}
                >
                  Car Gel Freshener
                </Link>
              </li>
              <li>
                <Link
                  href="/primmox/#pocket-freshener"
                  className={`${darkTextColor} ${darkTextHover} transition-colors text-sm sm:text-base leading-snug break-words`}
                >
                  Pocket Gel Freshener
                </Link>
              </li>
              <li>
                <Link
                  href="/primmox/#smart-scent-diffuser"
                  className={`${darkTextColor} ${darkTextHover} transition-colors text-sm sm:text-base leading-snug break-words`}
                >
                  Smart Scent Diffuser

                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-3 sm:mb-4 text-sm sm:text-base">
              Quick Links
            </h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link
                  href="/primmox"
                  className={`${darkTextColor} ${darkTextHover} transition-colors text-sm sm:text-base`}
                >
                  Primmox
                </Link>
              </li>
              <li>
                <Link
                  href="/fresh-think"
                  className={`${darkTextColor} ${darkTextHover} transition-colors text-sm sm:text-base`}
                >
                  Fresh Think
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className={`${darkTextColor} ${darkTextHover} transition-colors text-sm sm:text-base`}
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/media"
                  className={`${darkTextColor} ${darkTextHover} transition-colors text-sm sm:text-base`}
                >
                  Media
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className={`${darkTextColor} ${darkTextHover} transition-colors text-sm sm:text-base`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className={`${darkTextColor} ${darkTextHover} transition-colors text-sm sm:text-base`}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium mb-3 sm:mb-4 text-sm sm:text-base">
              Contact
            </h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <a
                  href="tel:+919029141611"
                  className={`${darkTextColor} ${darkTextHover} transition-colors text-sm sm:text-base`}
                >
                  +91 90291 41611
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@chhindia.com"
                  className={`${darkTextColor} ${darkTextHover} transition-colors text-sm sm:text-base break-all`}
                >
                  info@chhindia.com
                </a>
              </li>
              <li>
                <Link
                  href="/faq"
                  className={`${darkTextColor} ${darkTextHover} transition-colors text-sm sm:text-base`}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className={`${darkTextColor} ${darkTextHover} transition-colors text-sm sm:text-base`}
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Factory Address */}
          <div>
            <h4 className="font-medium mb-3 sm:mb-4 text-sm sm:text-base">
              Factory Address
            </h4>
            {/* Address text color is now the default dark text color */}
            <div className="text-sm sm:text-base leading-relaxed">
              <p className="break-words">CHH India Pvt.Ltd</p>
              <p className="break-words">Building No. F/5 & F/6</p>
              <p className="break-words">Parasnath Industrial</p>
              <p className="break-words">Complex, Anjur Dapde Road,</p>
              <p className="break-words">Valpada, Bhiwandi.</p>
              <p className="break-words">Thane - 421302</p>
              <p className="break-words">Maharashtra - INDIA</p>
            </div>
          </div>

          {/* ⬅️ LOGO COLUMN: Updated to use CHH India Logo (80px x 68px) */}
          <div className="flex items-start justify-center sm:justify-start lg:justify-end">
            <div className="bg-white rounded-lg p-3 sm:p-4 flex items-center justify-center flex-shrink-0 ">
              {/* The surrounding div still controls padding/shadow, but we use Image for sizing */}
              <Image
                src={chIndia}
                alt="CHH India Logo"
                width={80} // 80px width
                height={68} // 68px height
                className="w-[80px] h-[68px] object-contain" // Tailwind arbitrary values for explicit size
              />
            </div>
          </div>
        </div>

        {/* Bottom Section with Brand Logos and Social Links */}
        {/* Divider color adjusted for white background */}
        <div className="border-t border-gray-200 pt-4 sm:pt-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 sm:gap-6">
            {/* ⬅️ BRAND LOGOS: Updated to use Image component with specified sizes */}
            <div className="flex items-center gap-3 sm:gap-6 flex-wrap justify-center">
              {/* Primmox Logo (80px x 40px) */}
              <div className="bg-white rounded p-1 sm:p-1.5  flex items-center justify-center">
                <Image
                  src={primmoxLogo}
                  alt="Primmox Logo"
                  width={80} // 80px width
                  height={40} // 40px height
                  className="w-[80px] h-[40px] object-contain"
                />
              </div>
              {/* FreshThink Logo (80px x 40px) */}
              <div className="bg-white rounded p-1 sm:p-1.5 flex items-center justify-center">
                <Image
                  src={freshThink}
                  alt="FreshThink Logo"
                  width={80} // 80px width
                  height={40} // 40px height
                  className="w-[80px] h-[40px] object-contain"
                />
              </div>
            </div>

            {/* Footer Links (No change) */}


            {/* Social Media Icons (No change) */}
            <div className="flex items-center gap-3 sm:gap-4">
              <a
                href="https://youtube.com/@chhindia?si=_q59-1B5-wVNzeTJ"
                target="_blank"
                rel="noopener noreferrer"
                className={socialIconClasses}
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/chh-india/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className={socialIconClasses}
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61563996615825"
                target="_blank"
                rel="noopener noreferrer"
                className={socialIconClasses}
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/chhindia/"
                target="_blank"
                rel="noopener noreferrer"
                className={socialIconClasses}
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://in.pinterest.com/chhindiapvt/_pins/"
                target="_blank"
                rel="noopener noreferrer"
                className={socialIconClasses}
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.399.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.173 0 7.41 2.967 7.41 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.62 0 12.017 0z" />
                </svg>
              </a>
              <a
                href="https://share.google/x0D4wXjwrNDYFzxma"
                target="_blank"
                rel="noopener noreferrer"
                className={socialIconClasses}
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
