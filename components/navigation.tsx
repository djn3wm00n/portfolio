"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Music", path: "/music" },
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
    { name: "Tour", path: "/tour" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <header className="relative z-50">
      <div className="vhs-effect bg-black border-b border-neon-yellow/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold glitch-text">
              <span className="text-neon-yellow">90s</span> <span className="text-white">R&B</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="text-white hover:text-neon-pink transition-colors duration-300 uppercase tracking-wider text-sm font-bold"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={toggleMenu}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-black/95 z-50 flex flex-col justify-center items-center transition-transform duration-300 md:hidden retro-grid",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <nav className="flex flex-col space-y-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="text-white hover:text-neon-yellow transition-colors duration-300 uppercase tracking-wider text-2xl font-bold"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navigation

