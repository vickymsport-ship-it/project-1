"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Mail,
  Phone,
  MessageCircle,
  Instagram,
  Facebook,
  Globe,
  Linkedin,
  Youtube,
  Tags,
  PenTool,
  HandCoins,
  MapPin,
  Factory,
  FileText,
} from "lucide-react";

import whatsappIcon from "@/public/whatsapp.png";

import Banner from "@/components/banner";
const bannerImages = ['/contactHeroImg.png'];

/* LEFT COLUMN FEATURE CARD */
const FeatureCard = ({ icon: Icon, imageSrc, title, description }: any) => {
  const handleClick = () => {
    const whatsappMessage = `*Enquiry about: ${title}*`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/919029141611?text=${encodedMessage}`, "_blank");
  };

  return (
    <div 
      onClick={handleClick}
      className="flex items-start gap-4 p-4 sm:p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className="flex-shrink-0">
        {imageSrc ? (
          <Image 
            src={imageSrc} 
            alt={title} 
            width={40} 
            height={40} 
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain" 
          />
        ) : (
          <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#0A142F]" />
        )}
      </div>
      <div>
        <h3 className="text-base sm:text-lg font-bold text-[#0A142F] mb-1">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

/* CONTACT ROW CARD */
const ContactRowCard = ({ icon: Icon, title, description, info }: any) => {
  return (
    <div className="flex items-start gap-4 p-4 sm:p-6 bg-white rounded-xl shadow-sm border border-gray-100 h-full">
      <div className="flex-shrink-0">
        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#0A142F]" />
      </div>
      <div>
        <h3 className="text-base sm:text-lg font-bold text-[#0A142F] mb-1">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 mb-2">
          {description}
        </p>
        <p className="text-sm sm:text-base font-bold text-[#0A142F]">
          {info}
        </p>
      </div>
    </div>
  );
};

/* TRUST INDICATOR */
const TrustIndicator = ({ icon: IconOrSrc, title, subText, description, isImage }: any) => {
  return (
    <div className="flex flex-col items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all h-full">
      <div className="flex-shrink-0">
        {isImage ? (
          <div className="relative w-12 h-12">
            <Image 
              src={IconOrSrc} 
              alt={title} 
              width={48} 
              height={48} 
              className="object-contain" 
            />
          </div>
        ) : (
          <IconOrSrc className="w-10 h-10 text-[#0A142F]" fill="currentColor" />
        )}
      </div>
      <div>
        <h3 className="text-base sm:text-lg font-bold text-[#0A142F] mb-1">
          {title}
        </h3>
        <p className="text-xs text-gray-500 mb-2 font-medium">{subText}</p>
        <p className="text-xs text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

/* SOCIAL ICON LINK */
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


export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    enquiryType: "Bulk Purchase / RFQ",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, companyName, email, phone, enquiryType, message } = formData;
    
    const whatsappMessage = `*Business Enquiry*\n\n` +
      `*Name:* ${name}\n` +
      `*Company:* ${companyName}\n` +
      `*Email:* ${email}\n` +
      `*Phone:* ${phone}\n` +
      `*Enquiry Type:* ${enquiryType}\n` +
      `*Message:* ${message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    // Using the number from the design: 9029141611
    window.open(`https://wa.me/919029141611?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Banner images={bannerImages} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* LEFT COLUMN - FEATURES */}
          <div className="flex flex-col gap-4">
            <FeatureCard
              imageSrc={whatsappIcon}
              title="WhatsApp Business Support"
              description="Connect with our team for bulk supply, distributor enquiries, and customized Branding solutions."
            />
            <FeatureCard
              icon={Tags}
              title="Request a Bulk Quote"
              description="Get competitive pricing for bulk and institutional orders across our fragrance and hygiene product range. Submit your requirement and receive a tailored quotation from our B2B team."
            />
            <FeatureCard
              icon={PenTool}
              title="Customized Branding Solutions"
              description="Launch your own brand with Primmox/Freshthink. We offer complete custom branding solutions, including product selection, fragrance choice, packaging, and label customization."
            />
            <FeatureCard
              icon={HandCoins}
              title="Become a Distributor"
              description="Grow your business by partnering with Primmox & Freshthink as an authorized distributor. Access high-quality products, strong supply support, and pan-India distribution opportunities"
            />
          </div>

          {/* RIGHT COLUMN - FORM */}
          <div className="bg-white p-6 sm:p-8 rounded-[20px] shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-[#0A142F] text-center mb-8">Business Enquiry</h2>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0A142F] transition-all"
                required
              />
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0A142F] transition-all"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0A142F] transition-all"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0A142F] transition-all"
                required
              />
              
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700 ml-1">Enquiry Type</label>
                <select
                  name="enquiryType"
                  value={formData.enquiryType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0A142F] transition-all text-gray-700"
                >
                  <option value="Bulk Purchase / RFQ">Bulk Purchase / RFQ</option>
                  <option value="Distributorship">Distributorship</option>
                  <option value="Custom Branding (OEM)">Custom Branding (OEM)</option>
                  <option value="General Support">General Support</option>
                </select>
              </div>

              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0A142F] transition-all resize-none"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 bg-[#0A142F] text-white font-bold rounded-lg hover:bg-[#162a5c] transition-colors mt-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>



        {/* CONTACT INFO ROW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <ContactRowCard
            icon={MessageCircle}
            title="Instant WhatsApp Support"
            description="Connect with our team directly on WhatsApp for swift, real-time assistance whenever you need it"
            info="+91 9029141611"
          />
          <ContactRowCard
            icon={Phone}
            title="Speak With Our Team"
            description="Need help or guidance? Call our support experts for fast, reliable assistance."
            info="+91 9029141611"
          />
          <ContactRowCard
            icon={Mail}
            title="Email Us Anytime"
            description="Send us your questions or inquiries, and our team will get back to you with detailed, personalized support"
            info="info@chhindia.in"
          />
        </div>

        {/* TRUST INDICATORS ROW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-12 border-t border-gray-200">
          <TrustIndicator
            icon="/india-map-svg.png"
            title="Pan-India Supply"
            subText="1000+ Cities Served"
            description="Reliable distribution network ensuring consistent supply across India."
            isImage={true}
          />
          <TrustIndicator
            icon={Factory}
            title="OEM & Institutional Supply"
            subText="Fast Dispatch: 7-14 Days"
            description="Scalable manufacturing capacity to handle bulk, OEM, and institutional requirements efficiently."
          />
          <TrustIndicator
            icon={FileText}
            title="100% GST-Compliant Billing"
            subText="Trusted by Institutions"
            description="Transparent billing with full GST compliance for businesses, distributors, and organizations."
          />
        </div>

        {/* SOCIAL MEDIA */}
        <div className="mt-16 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A142F]">
              Connect with us Online
            </h2>
            <span className="hidden sm:inline text-[#F7AA47] text-2xl">|</span>
            <span className="text-gray-500 text-lg">Stay updated with our latest updates</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <SocialIconLink href="https://www.instagram.com/chhindia/" icon={Instagram} />
            <SocialIconLink href="https://www.facebook.com/profile.php?id=61563996615825" icon={Facebook} />
            <SocialIconLink href="https://share.google/x0D4wXjwrNDYFzxma" icon={Globe} />
            <SocialIconLink href="https://www.linkedin.com/company/chh-india/?viewAsMember=true" icon={Linkedin} />
            <SocialIconLink href="https://youtube.com/@chhindia?si=_q59-1B5-wVNzeTJ" icon={Youtube} />
            {/* Using Globe as placeholder for Pinterest if Pin not available, but let's try generic svg or just Globe */}
            <a
              href="https://in.pinterest.com/chhindiapvt/_pins/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-xl shadow-sm border border-gray-100 hover:scale-110 transition-transform"
            >
              {/* Custom Pinterest-like SVG if needed or just use a generic icon */}
              <svg 
                className="w-8 h-8 sm:w-10 sm:h-10 text-[#0A142F]" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                 <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.399.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.173 0 7.41 2.967 7.41 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.62 0 12.017 0z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}