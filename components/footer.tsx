import Link from "next/link"
import { Instagram, Twitter, Youtube, Music } from "lucide-react"

const Footer = () => {
  return (
    <footer className="vhs-effect bg-black border-t border-neon-yellow/50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-xl font-bold glitch-text">
              <span className="text-neon-yellow">90s</span> <span className="text-white">R&B</span>
            </Link>
            <p className="text-gray-400 mt-2 text-sm">© {new Date().getFullYear()} All Rights Reserved</p>
          </div>

          <div className="flex space-x-6">
            <Link href="#" className="text-white hover:text-neon-yellow transition-colors duration-300">
              <Instagram size={24} />
            </Link>
            <Link href="#" className="text-white hover:text-neon-yellow transition-colors duration-300">
              <Twitter size={24} />
            </Link>
            <Link href="#" className="text-white hover:text-neon-yellow transition-colors duration-300">
              <Youtube size={24} />
            </Link>
            <Link href="#" className="text-white hover:text-neon-yellow transition-colors duration-300">
              <Music size={24} />
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-bold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-neon-yellow transition-colors duration-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/music" className="text-gray-400 hover:text-neon-pink transition-colors duration-300">
                    Music
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-gray-400 hover:text-neon-pink transition-colors duration-300">
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">More</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-neon-pink transition-colors duration-300">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/tour" className="text-gray-400 hover:text-neon-pink transition-colors duration-300">
                    Tour & Events
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-neon-pink transition-colors duration-300">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Subscribe</h3>
              <p className="text-gray-400 mb-4">Stay updated with the latest releases and tour dates</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none w-full"
                />
                <button className="bg-neon-yellow text-black px-4 py-2 rounded-r-md hover:bg-opacity-80 transition-colors duration-300">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

