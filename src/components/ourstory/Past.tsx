
import Image from "next/image";

export default function Past() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f5f0e9] px-4">
      <div className="flex flex-col lg:flex-row items-center justify-center max-w-7xl w-full">
        {/* Left: Decorative Image */}
        <div className="flex justify-center lg:justify-end w-full lg:w-1/2">
          <Image
            src="/OurStory4.jpg" // make sure the image is in /public
            alt="Decorative N"
            width={400}
            height={800}
            className="w-auto h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-contain"
          />
        </div>

        {/* Right: Exact Text */}
        <div className="w-full lg:w-1/2 max-w-3xl text flex flex-col gap-9 text-black lg:pl-12 pt-8 lg:pt-0 text-center lg:text-left space-y-6 Times New Roman leading-relaxed md:text-sm">
          <p>
            His ability to see a role for the past in the present and to act upon an idea is what made Dwarika Das Shrestha a real visionary and an inspiring individual. With the help of his wife, Ambica Shrestha, he started exploring entrepreneurial avenues to assist in the development of Nepal’s tourism and finance his passion for conservation. They knew that many people would be interested in coming to Nepal, to tour its attractions, heritage sites, and to experience its natural beauty.
                  </p>
                  <div>
          <p>
            Towards this end, in 1969, Dwarika Das Shrestha went on to establish one of the first travel agencies in Nepal, Kathmandu Travels and Tours.
          </p>

          <p>
            What began as an impulsive action grew into a passion, and soon Dwarika’s commitment to saving, documenting and restoring artifacts took on a life of its own.
          </p>

          <p>
            In 1964, he decided to construct the first Nepali-style brick building with the collected woodcarvings in his garden.
            </p>
            </div>
        </div>
      </div>
    </main>
  );
}




