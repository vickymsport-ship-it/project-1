import FeaturedSection from "@/components/featured-section";
import SloganSection from "@/components/slogan-section";
import Note from "@/components/note";
import MediaSection from "@/components/media-section";
import Banner from "@/components/banner";


import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import heroImg from "@/public/heroImg.png";
import FreshThinkLogo from "@/public/fresh-think-logo.png";

const bannerImages = ['/heroImg.png','/heroBanner-2.png'];

export default function Home() {
  return (
    <>

      <Banner images={bannerImages} />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* refresh like pro - add explicit 32px gap */}
        <div className="">
          <FeaturedSection limit={6} subCategory="refresh-like-a-pro"  collection="primmox" imgClass="!px-0"/>
        </div>

        {/* gentle hygiene - same 32px gap */}
        <div className="">
          <FeaturedSection
            headerLogo={FreshThinkLogo}
            collection="fresh-think"
            subCategory="gentle-hygiene-daily-freshness"
            heading="Gentle Hygiene, Daily Freshness"
            subHeading="A cleaner vibe, every time"
            limit={6}
            imgClass="!px-0"
          />
        </div>
        <div>
          <SloganSection />
        </div>
      </div>
      <div className="mt-8">
        <Note />
      </div>
      <div className="mt-8">
        <MediaSection />
      </div>
    </>
  );
}
