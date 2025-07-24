'use client';

export default function History() {
  return (
    <main className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full ">
        {/* First Row - Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <div className="aspect-[4/3] bg-gray-300 overflow-hidden rectangle-md max-w-[350px] w-full">
              <img
                src="/OurStory2.jpg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                alt="Dwarika Das Shrestha with family"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex justify-center lg:justify-start">
            <p className="max-w-prose text-center lg:text-left text-[0.75rem] sm:text-[0.875rem] md:text-sm text-black-700 leading-snug font-light tracking-wide px-4 sm:px-0">
              Our history is intertwined with the life and times of our late founder, Mr. Dwarika Das Shrestha. Dwarika Das Shrestha was an extraordinary human being – a true visionary who was acutely aware of his own identity, the changing world around him and his responsibility towards it. His story is one of inspiration borne out of struggle and torment, the relentless pursuit of an aesthetic ideal, and one man’s determination to make a difference.
            </p>
          </div>
        </div>

        {/* Second Row - Text Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Text */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-1">
            <p className="max-w-prose text-center lg:text-left text-[0.75rem] sm:text-[0.875rem] md:text-sm text-black-700 leading-snug font-light tracking-wide px-4 sm:px-0">
              In 1952, Dwarika was out jogging when he came upon some carpenters sawing off the carved portion of an intricately engraved wooden pillar. It had been part of an old building which had been torn down to make room for a modern structure. Amidst the rubble, lay the bits and pieces of exquisitely carved woodwork several centuries old, ready to be carted off as firewood.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="aspect-[4/3] bg-gray-300 overflow-hidden rectangle-md max-w-[350px] w-full">
              <img
                src="/OurStory3.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Traditional craftsman working on wood carving"
                className="w-full h-full object-cover"
              />
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
 

