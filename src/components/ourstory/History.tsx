'use client';


export default function History() {
  return (
    <main className="relative">
      {/* History Section - Simple Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="space-y-12 sm:space-y-16 md:space-y-20">
          {/* First row - Image left, Text right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
            <div className="flex justify-center items-center">
              <div className="aspect-[4/3] bg-gray-300 overflow-hidden rounded-sm sm:rounded-none max-w-[300px] sm:max-w-[350px] mx-auto">
                <img
                  src="/OurStory2.jpg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                  alt="Dwarika Das Shrestha with family"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>

            <div className="flex items-center">
              <div>
                <p className="text-xs sm:text-sm md:text-base text-black-700 leading-[1.4] sm:leading-[1.5] font-light tracking-[0.01em] text-center lg:text-left px-2 sm:px-4 lg:px-0">
                  Our history is intertwined with the life and times of our late founder, Mr. Dwarika Das Shrestha. Dwarika Das Shrestha was an extraordinary human being – a true visionary who was acutely aware of his own identity, the changing world around him and his responsibility towards it. His story is one of inspiration borne out of struggle and torment, the relentless pursuit of an aesthetic ideal, and one man`s determination to make a difference.
                </p>
              </div>
            </div>
          </div>

          {/* Second row - Text left, Image right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
            <div className="flex items-center order-2 lg:order-1">
              <div>
                <p className="text-xs sm:text-sm md:text-base text-black-700 leading-[1.4] sm:leading-[1.4] font-light tracking-[0.01em] text-center lg:text-left px-2 sm:px-4 lg:px-0">
                  In 1952, Dwarika was out jogging when he came upon some carpenters sawing off the carved portion of an intricately engraved wooden pillar. It had been part of an old building which had been torn down to make room for a modern structure. Amidst the rubble, lay the bits and pieces of exquisitely carved woodwork several centuries old, ready to be carted off as firewood.
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center order-1 lg:order-2">
              <div className="aspect-[4/3] bg-gray-300 overflow-hidden rounded-sm sm:rounded-none max-w-[300px] sm:max-w-[350px] mx-auto">
                <img
                  src="/OurStory3.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Traditional craftsman working on wood carving"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle texture overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20 sm:opacity-30">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-gradient-radial from-[#e8e2d8]/20 to-transparent rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-gradient-radial from-[#e8e2d8]/20 to-transparent rounded-full blur-2xl sm:blur-3xl"></div>
      </div>
    </main>
  );
}
