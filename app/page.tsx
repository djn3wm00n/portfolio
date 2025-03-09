"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Play, Music, Image, Calendar } from "lucide-react"
import { useParallax } from "@/hooks/use-parallax"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const parallaxOffset = useParallax()

  useEffect(() => {
    // Simulate loading time for VHS effect
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      const { x, y } = parallaxOffset
      videoRef.current.style.transform = `translate(${x * 10}px, ${y * 10}px) scale(1.1)`
    }
  }, [parallaxOffset])

  return (
    <div className="min-h-screen bg-black">
      {/* VHS Loading Effect */}
      {!isLoaded && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center">
          <div className="text-white text-2xl mb-4 animate-tracking">LOADING...</div>
          <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-neon-yellow animate-pulse" style={{ width: "60%" }}></div>
          </div>
          <div className="mt-4 text-gray-500 text-sm animate-flicker">TRACKING...</div>
        </div>
      )}

      {/* Hero Section with Video */}
      <section className="relative h-screen vhs-effect overflow-hidden">
        <div className="absolute inset-0 retro-grid"></div>

        <div className="container mx-auto px-4 h-full flex flex-col md:flex-row items-center justify-center relative z-10">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 glitch-text">
              <span className="text-neon-yellow">90s</span> <span className="text-white">VIBES</span>{" "}
              <span className="text-white">FOREVER</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
              Experience the authentic sound of 90s R&B with a modern twist. Bringing back the golden era of rhythm and
              soul.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-neon-yellow hover:bg-neon-yellow/80 text-black">
                <Play className="mr-2 h-4 w-4" /> Listen Now
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/20">
                Latest Release
              </Button>
            </div>
          </div>

          <div className="md:w-1/2 h-[400px] md:h-[600px] relative overflow-hidden">
            <div className="absolute inset-0 vhs-effect pointer-events-none"></div>
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              style={{ aspectRatio: "9/16" }}
            >
              <source src="/placeholder-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 glitch-text">
            <span className="text-neon-yellow">FEATURED</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Music */}
            <div className="bg-black p-6 rounded-lg border border-neon-yellow/30 hover:border-neon-yellow transition-colors duration-300 group">
              <div className="w-16 h-16 bg-neon-yellow/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-neon-yellow/30 transition-colors duration-300">
                <Music className="text-neon-yellow" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Latest Tracks</h3>
              <p className="text-gray-400 mb-6">
                Stream my newest singles and albums with our interactive CD player experience.
              </p>
              <Link
                href="/music"
                className="text-neon-yellow hover:text-white transition-colors duration-300 inline-flex items-center"
              >
                Listen Now <Play className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Gallery */}
            <div className="bg-black p-6 rounded-lg border border-white/30 hover:border-white transition-colors duration-300 group">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-white/30 transition-colors duration-300">
                <Image className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Photo Gallery</h3>
              <p className="text-gray-400 mb-6">
                Explore a collection of high-quality images with authentic 90s-inspired overlays.
              </p>
              <Link
                href="/gallery"
                className="text-white hover:text-neon-yellow transition-colors duration-300 inline-flex items-center"
              >
                View Gallery <Image className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Tour */}
            <div className="bg-black p-6 rounded-lg border border-neon-yellow/30 hover:border-neon-yellow transition-colors duration-300 group">
              <div className="w-16 h-16 bg-neon-yellow/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-neon-yellow/30 transition-colors duration-300">
                <Calendar className="text-neon-yellow" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Upcoming Shows</h3>
              <p className="text-gray-400 mb-6">
                Check out my tour schedule and upcoming events. Don't miss the chance to see me live.
              </p>
              <Link
                href="/tour"
                className="text-neon-yellow hover:text-white transition-colors duration-300 inline-flex items-center"
              >
                See Tour Dates <Calendar className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 vhs-effect">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 glitch-text">
            <span className="text-neon-yellow">STAY</span> <span className="text-white">CONNECTED</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to my newsletter for exclusive updates, behind-the-scenes content, and early access to new
            releases.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 bg-gray-800 text-white rounded-l-md focus:outline-none"
            />
            <Button className="bg-neon-yellow text-black hover:bg-neon-yellow/80 rounded-l-none">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

