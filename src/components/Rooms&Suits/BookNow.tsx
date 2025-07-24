"use client";

import Image from "next/image";

export default function BookNow() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F1EBE4] px-22 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl w-full">
        
        {/* Heritage Deluxe Room */}
        <div className="flex flex-col">
          <div className="relative w-full aspect-[4/3] overflow-hidden">
            <Image
              src="/RoomCard1.jpg"
              alt="Heritage Deluxe Room"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-center text-center">
  <h2 className="text-2xl font-bold mt-6">Heritage Deluxe Room</h2>
  <p className="mt-4 text-gray-700 max-w-prose">
    Step into a world of timeless elegance with our Heritage Deluxe Rooms,
    where Nepal’s rich artistic traditions come to life. Thoughtfully designed
    with intricately carved woodwork and handwoven textiles, each room
    reflects the grandeur of the Kathmandu Valley’s architectural heritage.
  </p>
  <button className="mt-4 text-sm text-gray-800 hover:underline w-fit">
    Read more →
  </button>
  <div className="mt-2 text-lg font-semibold">
    Rates from<br />$ 207.45
  </div>
  <button className="mt-4 bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-700 w-fit">
    BOOK NOW
  </button>
</div>

        </div>

        {/* Junior Suite */}
        <div className="flex flex-col">
          <div className="relative w-full aspect-[4/3] overflow-hidden">
            <Image
              src="/RoomCard2.jpg"
              alt="Junior Suite"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-center text-center">
  <h2 className="text-2xl font-bold mt-6">Junior Suite</h2>
  <p className="mt-4 text-gray-700 max-w-prose">
              Experience the grandeur of Nepal’s rich heritage in our Junior Suites, where artistry and comfort come
              together in a timeless embrace. Each suite is a tribute to the Kathmandu Valley’s architectural legacy,
              featuring intricately hand-carved woodwork, traditional terracotta floors, and handwoven textiles that reflect
              the soul of Newar craftsmanship.
  </p>
  <button className="mt-4 text-sm text-gray-800 hover:underline w-fit">
    Read more →
  </button>
  <div className="mt-2 text-lg font-semibold">
    Rates from<br />$ 313.38
  </div>
  <button className="mt-4 bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-700 w-fit">
    BOOK NOW
  </button>
</div>

        </div>

      </div>
    </main>
  );
}

