import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function Preserving() {
  return (
    <div className="bg-[#f5f0e9]">
      {/* Breadcrumb Navigation */}
      <nav className="px-8 py-6">
        <div className="flex items-center space-x-2 text-xs text-[#433422] ml-16 font-serif">
          <Link href="/" className="hover:text-black transition-colors">
            Home
          </Link>
          <ChevronRight size={16} className="text-[#433422]" />
          <span className="text-black">Rooms and Suites</span>
        </div>
      </nav>

      {/* Main Content */}
      <section className="flex items-center justify-center px-4 py-8">
        <div className="max-w-4xl mx-auto text-center text-black font-serif space-y-6">
          {/* Top Label */}
          <p className="text-base text-gray-900 sm:text-lg md:text-xl tracking-wide">
            Living at The Dwarika&apos;s
          </p>

          {/* Main Heading */}
          <h1 className="text-lg sm:text-xl md:text-2xl font-normal leading-snug">
            A Unique Experience of Living in the Essence of Traditional{' '}
            <br className="hidden md:block" /> Nepali Ambience
          </h1>

          {/* Body Paragraph */}
          <p className="text-xs text-gray-900 leading-relaxed max-w-3xl mx-auto">
            With 76 meticulously designed rooms and suites, the Dwarika’s offers a unique experience as a serene retreat amid Kathmandu’s vibrant city.
            Each room is spacious and has been individually designed to blend intricate Nepali design motifs with a contemporary lifestyle interspersed with original artworks.
            The rooms are a tribute to Kathmandu’s artistic history. Rooms and suites capture the Himalayan essence without compromising on luxury, reflecting its commitment to heritage and sustainability.
            The flooring is adorned with handmade terracotta tiles, the upholsteries are handwoven and locally produced, and the linen is organic.
            A boutique accommodation bringing back the true essence of Nepali living where each room has a view of the Dwarika’s Courtyard.
          </p>
        </div>
      </section>
    </div>
  );
}
