import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function Preserving() {
  return (
    <div className=" bg-gray-100">
      {/* Breadcrumb Navigation */}
      <nav className="px-8 py-6">
        <div className="flex items-center space-x-2 text-xs text-stone-600 ml-16">
          <Link href="/" className="hover:text-stone-800 transition-colors">
            Home 
          </Link>
          <ChevronRight size={16} className="text-stone-400" />
          <span className="text-stone-800">Our Story</span>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-8 py-5">
        {/* Main Heading */}
        <div className="text-center mb-8">
          <h1 className="text-lg md:text-xl text-stone-700 font-light tracking-wide leading-relaxed">
            Preserving Nepal&apos;s Architectural & Cultural Heritage
          </h1>
        </div>

        {/* Story Section */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-3xl text-stone-800 font-light mb-3 leading-tight">
            The Dwarika&apos;s Story
          </h2>

          <div className="prose prose-lg md:prose-xl max-w-none">
            <p className="text-stone-700 leading-relaxed font-light text-xs md:text-sm">
              Richly infused by founder Mr. Dwarika Das Shrestha&apos;s dedication to preserving the heritage of the Kathmandu Valley,
              Dwarika&apos;s Kathmandu Hotel stands as the only luxury heritage boutique hotel in Nepal. Arriving guests are swept into a living
              museum with a prolific history of restoration, revival, and preservation of Newari Architecture.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

