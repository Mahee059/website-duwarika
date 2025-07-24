"use client";

import Image from "next/image";

export default function RoomCards() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F1EBE4] px-22 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl w-full">
        
        {/* Executive Suite*/}
        <div className="flex flex-col">
          <div className="relative w-full aspect-[4/3] overflow-hidden">
            <Image
              src="/RoomCard3.jpg"
              alt="Executive Suite"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-center text-center">
  <h2 className="text-2xl font-bold mt-6">Executive Suite</h2>
  <p className="mt-4 text-gray-700 max-w-prose">
              Immerse yourself in the grandeur of Nepal’s rich heritage with our Executive
              Suite, a spacious sanctuary where history, artistry and luxury converge. 
  </p>
  <button className="mt-4 text-sm text-gray-800 hover:underline w-fit">
    Read more →
  </button>
  <div className="mt-2 text-lg font-semibold">
    Rates from<br />$ 450.21
  </div>
  <button className="mt-4 bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-700 w-fit">
    BOOK NOW
  </button>
</div>

        </div>

        {/* Royal Suite */}
        <div className="flex flex-col">
          <div className="relative w-full aspect-[4/3] overflow-hidden">
            <Image
              src="/RoomCard4.jpg"
              alt="Royal Suite"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-center text-center">
  <h2 className="text-2xl font-bold mt-6">Royal Suite</h2>
  <p className="mt-4 text-gray-700 max-w-prose">
              The Royal Suite at Dwarika`s Hotel is the pinnacle of heritage luxury, offering an
              opulent retreat steeped in Nepal`s rich artistic and architectural traditions.
              Inspired by the grand residences of the Malla kings, this expansive suite is spread
              over three floors, providing an unparalleled sense of space and exclusivity.
  </p>
  <button className="mt-4 text-sm text-gray-800 hover:underline w-fit">
    Read more →
  </button>
 
  <button className="mt-4 bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-700 w-fit">
    BOOK NOW
  </button>
</div>

        </div>

      </div>
    </main>
  );
}
