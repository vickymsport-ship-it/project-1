import Image from "next/image";
import logo from "@/public/logo.png";
import media1 from "@/public/media-3.png";
import media2 from "@/public/media-4.jpg";
import media3 from "@/public/media-5.jpg";



interface MediaItem {
  id: number;
  title: string;
  description: string;
  image: any;
}

interface MediaSectionProps {
  heading?: string;
  subHeading?: string;
  headerLogo?: any;
  mediaItems?: MediaItem[];
  limit?: number;
}

const defaultData: MediaItem[] = [
  {
    id: 1,
    title: "A Gentle Bloom in Every Breath",
    description: "There’s something enchanting about the soft, sweet fragrance of blooming flowers — the kind that instantly brightens your mood the moment it fills the air. Primmox Floral brings that same magic into your home. Every spray feels like walking through a pastel garden where petals dance in the breeze.",
    image: media1,
  },
  {
    id: 2,
    title: "A Fresh Start, Every Single Day",
    description: "Mornings define the mood of your entire day — and Primmox Morning is crafted to make that first moment unforgettable. As the sun rises, this fragrance fills your space with crisp, refreshing notes that awaken your senses and bring clarity to your mind. Its clean, energizing aroma turns your room into a place of positivity and calm.",
    image: media2,
  },
  {
    id: 3,
    title: "A Burst of Energy in Every Spray",
    description: "Vibrant. Zesty. Uplifting. Primmox Citrus is your instant pick-me-up — a lively burst of orange and lemon that brightens the room and awakens the senses.Like slicing into a juicy lemon on a summer afternoon, the fragrance fills the air with sharp, clean freshness. It cuts through kitchen odors, energizes dull spaces, and brings a cheerful spark to your home. This is the fragrance you choose when you want your day to feel active, joyful, and full of life. One spray, and everything feels instantly refreshed",
    image: media3,
  }
];

export default function MediaSection({
  heading = "Media",
  subHeading = "Stories That Smell Good",
  headerLogo = logo,
  mediaItems = defaultData,
  limit = 3,
}: MediaSectionProps) {
  const items = mediaItems.slice(0, limit);

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* ⭐ HEADER WITH LOGO + CUSTOM OR DEFAULT HEADING ⭐ */}
        <div className="flex items-start justify-start gap-3 sm:gap-4 mb-8 sm:mb-12">

          <h2 className="text-black text-start text-[28px] sm:text-[24px] lg:text-[32px] font-semibold leading-tight">
            {heading} <span className="px-2 text-[#F7AA47]">|</span> <span className="font-thin">{subHeading}</span>
          </h2>
        </div>

        {/* Horizontal scrollable media cards with retage shape */}
        <div className="flex gap-4 sm:gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory pb-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[560px] snap-start bg-white rounded-xl shadow-md overflow-hidden"
              style={{ aspectRatio: '16 / 9' }} // retage shape
            >
              <div className="flex h-full">
                {/* Image on the left */}
                <div className="w-1/2">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={180}
                    height={240}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Content on the right */}
                <div className="w-1/2 p-4 flex flex-col justify-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
