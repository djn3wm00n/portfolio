"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface GalleryImage {
  id: number
  src: string
  alt: string
  category: string
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Concert performance",
    category: "live",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=800&width=600",
    alt: "Studio session",
    category: "studio",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Album cover photoshoot",
    category: "photoshoot",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=800&width=600",
    alt: "Backstage moment",
    category: "backstage",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Music video still",
    category: "video",
  },
  {
    id: 6,
    src: "/placeholder.svg?height=800&width=600",
    alt: "Live performance",
    category: "live",
  },
  {
    id: 7,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Recording session",
    category: "studio",
  },
  {
    id: 8,
    src: "/placeholder.svg?height=800&width=600",
    alt: "Magazine photoshoot",
    category: "photoshoot",
  },
]

const categories = ["all", "live", "studio", "photoshoot", "backstage", "video"]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  const filteredImages =
    selectedCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  const navigateImage = (direction: "next" | "prev") => {
    if (!selectedImage) return

    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id)
    let newIndex

    if (direction === "next") {
      newIndex = (currentIndex + 1) % filteredImages.length
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length
    }

    setSelectedImage(filteredImages[newIndex])
  }

  return (
    <div className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center glitch-text">
          <span className="text-neon-yellow">PHOTO</span> <span className="text-white">GALLERY</span>
        </h1>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={cn(
                "capitalize",
                selectedCategory === category
                  ? "bg-neon-yellow text-black"
                  : "border-white/50 text-white hover:bg-white/20",
              )}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="vhs-effect rounded-lg overflow-hidden cursor-pointer group relative"
              onClick={() => openLightbox(image)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-bold">{image.alt}</p>
              </div>
              <div className="absolute top-4 right-4">
                <span className="bg-neon-yellow/80 text-black text-xs px-2 py-1 rounded-full uppercase">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 vhs-effect">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
              onClick={closeLightbox}
            >
              <X size={24} />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
              onClick={() => navigateImage("prev")}
            >
              <ChevronLeft size={24} />
            </Button>

            <div className="max-w-4xl max-h-[80vh] relative">
              <img
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                <p className="text-white font-bold">{selectedImage.alt}</p>
                <p className="text-gray-300 text-sm capitalize">{selectedImage.category}</p>
              </div>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
              onClick={() => navigateImage("next")}
            >
              <ChevronRight size={24} />
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

