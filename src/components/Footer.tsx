import { FaFacebook, FaInstagram } from "react-icons/fa6";

export default function Footer() {
    return (
      <footer className="bg-[#f5f5f4] text-black p-8 mt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-2 uppercase">Contact</h3>
            <p>Battisputali, Kathmandu, Nepal</p>
            <p>Phone: (+977-1) 4579488</p>
            <p>Email: info@dwarikas.com</p>
          </div>
  
          <div>
            <h3 className="font-bold mb-2 uppercase">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/our-story">Our Story</a>
              </li>
              <li>
                <a href="/rooms-suites">Rooms & Suites</a>
              </li>
              <li>
                <a href="/dining">Dining</a>
              </li>
              <li>
                <a href="/experiences">Experiences</a>
              </li>
            </ul>
          </div>
  
          <div>
            <h3 className="font-bold mb-2 uppercase">Subscribe</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="border p-2 flex-grow"
              />
              <button
                type="submit"
                className="bg-black text-white px-4 uppercase text-xs"
              >
                Sign Up
              </button>
                    </form>
                    <div className="flex items-center gap-2 py-4">
                        <FaFacebook width={24} height={24} />
                        <FaInstagram width={24} height={24} />
                    </div>
          </div>
        </div>
  
        <div className="text-center text-sm mt-8">
          © 2025 The Dwarika&apos;s Hotel Kathmandu | Designed by Amadeus.
        </div>
      </footer>
    );
  }
  