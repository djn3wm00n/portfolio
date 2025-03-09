"use client"

import { useState, useEffect } from "react"

export function useParallax() {
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      setOffset({ x, y })
    }

    const handleScroll = () => {
      const scrollY = window.scrollY / window.innerHeight
      setOffset((prev) => ({ ...prev, y: scrollY * 0.5 }))
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return offset
}

