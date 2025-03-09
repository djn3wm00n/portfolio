"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

interface Track {
  id: number
  title: string
  duration: string
  src: string
  image: string
}

const tracks: Track[] = [
  {
    id: 1,
    title: "Smooth Rhythm",
    duration: "3:45",
    src: "#", // In a real app, this would be a real audio file
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    title: "90s Love Ballad",
    duration: "4:12",
    src: "#",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    title: "Retro Groove",
    duration: "3:58",
    src: "#",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    title: "Midnight Soul",
    duration: "5:23",
    src: "#",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 5,
    title: "Electric Dreams",
    duration: "4:05",
    src: "#",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function MusicPage() {
  const [currentTrack, setCurrentTrack] = useState<Track>(tracks[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [volume, setVolume] = useState(80)
  const [isMuted, setIsMuted] = useState(false)
  const [displayTime, setDisplayTime] = useState("0:00")

  const audioRef = useRef<HTMLAudioElement | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  const handleTrackSelect = (track: Track) => {
    setCurrentTrack(track)
    setIsPlaying(false)
    setProgress(0)
    setDisplayTime("0:00")

    // In a real app, you would load the actual audio file
    setTimeout(() => {
      if (isPlaying) {
        setIsPlaying(true)
        startTimer()
      }
    }, 100)
  }

  const togglePlayPause = () => {
    if (isPlaying) {
      setIsPlaying(false)
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    } else {
      setIsPlaying(true)
      startTimer()
    }
  }

  const startTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    // Simulate audio progress
    intervalRef.current = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => {
          const newProgress = prev + 0.1

          // Update display time based on progress
          const totalSeconds = parseDuration(currentTrack.duration)
          const currentSeconds = (totalSeconds * newProgress) / 100
          setDisplayTime(formatTime(currentSeconds))

          return newProgress
        })
      } else {
        // Track ended
        setIsPlaying(false)
        setProgress(0)
        setDisplayTime("0:00")
        if (intervalRef.current) {
          clearInterval(intervalRef.current)
        }
      }
    }, 100)
  }

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0])
    if (value[0] === 0) {
      setIsMuted(true)
    } else {
      setIsMuted(false)
    }
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
    if (isMuted) {
      setVolume(80)
    } else {
      setVolume(0)
    }
  }

  const handleProgressChange = (value: number[]) => {
    setProgress(value[0])

    // Update display time based on progress
    const totalSeconds = parseDuration(currentTrack.duration)
    const currentSeconds = (totalSeconds * value[0]) / 100
    setDisplayTime(formatTime(currentSeconds))
  }

  const parseDuration = (duration: string): number => {
    const [minutes, seconds] = duration.split(":").map(Number)
    return minutes * 60 + seconds
  }

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const nextTrack = () => {
    const currentIndex = tracks.findIndex((track) => track.id === currentTrack.id)
    const nextIndex = (currentIndex + 1) % tracks.length
    handleTrackSelect(tracks[nextIndex])
  }

  const prevTrack = () => {
    const currentIndex = tracks.findIndex((track) => track.id === currentTrack.id)
    const prevIndex = (currentIndex - 1 + tracks.length) % tracks.length
    handleTrackSelect(tracks[prevIndex])
  }

  return (
    <div className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center glitch-text">
          <span className="text-neon-yellow">MUSIC</span> <span className="text-white">COLLECTION</span>
        </h1>

        {/* CD Player */}
        <div className="cd-player max-w-4xl mx-auto mb-16 p-6 md:p-10">
          <div className="flex flex-col md:flex-row gap-8">
            {/* CD Disc */}
            <div className="relative w-full md:w-1/2 aspect-square">
              <div
                className={`cd-disc ${isPlaying ? "playing" : ""} w-full h-full rounded-full overflow-hidden border-8 border-black flex items-center justify-center relative`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black opacity-50"></div>
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src={currentTrack.image || "/placeholder.svg"}
                    alt={currentTrack.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-black"></div>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <div className="bg-gray-900 p-4 rounded-md mb-6 vhs-effect">
                <div className="font-digital text-white text-2xl mb-2">{currentTrack.title}</div>
                <div className="font-digital text-neon-yellow">
                  {displayTime} / {currentTrack.duration}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <Slider
                  value={[progress]}
                  max={100}
                  step={0.1}
                  onValueChange={handleProgressChange}
                  className="cursor-pointer"
                />
              </div>

              {/* Playback Controls */}
              <div className="flex justify-center space-x-4 mb-8">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTrack}
                  className="border-white text-white hover:bg-white/20"
                >
                  <SkipBack size={20} />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={togglePlayPause}
                  className="border-neon-yellow text-neon-yellow hover:bg-neon-yellow/20 w-12 h-12"
                >
                  {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTrack}
                  className="border-white text-white hover:bg-white/20"
                >
                  <SkipForward size={20} />
                </Button>
              </div>

              {/* Volume Control */}
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" onClick={toggleMute} className="text-gray-400 hover:text-white">
                  {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </Button>
                <Slider
                  value={[volume]}
                  max={100}
                  step={1}
                  onValueChange={handleVolumeChange}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Track List */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-neon-yellow">Track List</h2>
          <div className="space-y-4">
            {tracks.map((track) => (
              <div
                key={track.id}
                className={`p-4 rounded-md flex items-center cursor-pointer transition-colors duration-300 ${
                  currentTrack.id === track.id
                    ? "bg-gray-800 border-l-4 border-neon-yellow"
                    : "bg-gray-900 hover:bg-gray-800"
                }`}
                onClick={() => handleTrackSelect(track)}
              >
                <div className="w-12 h-12 rounded-md overflow-hidden mr-4">
                  <img
                    src={track.image || "/placeholder.svg"}
                    alt={track.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-white">{track.title}</h3>
                  <p className="text-gray-400 text-sm">{track.duration}</p>
                </div>
                {currentTrack.id === track.id && isPlaying && (
                  <div className="w-4 h-4 rounded-full bg-neon-yellow animate-pulse"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

