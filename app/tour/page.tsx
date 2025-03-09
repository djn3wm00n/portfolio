"use client"

import { useState } from "react"
import { Calendar, MapPin, Clock, Ticket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Event {
  id: number
  date: string
  venue: string
  city: string
  time: string
  ticketLink: string
  isSoldOut: boolean
  type: "concert" | "festival" | "club"
}

const events: Event[] = [
  {
    id: 1,
    date: "2025-04-15",
    venue: "Rhythm Hall",
    city: "New York, NY",
    time: "8:00 PM",
    ticketLink: "#",
    isSoldOut: false,
    type: "concert",
  },
  {
    id: 2,
    date: "2025-04-22",
    venue: "Soul Lounge",
    city: "Los Angeles, CA",
    time: "9:00 PM",
    ticketLink: "#",
    isSoldOut: true,
    type: "club",
  },
  {
    id: 3,
    date: "2025-05-05",
    venue: "Groove Festival",
    city: "Miami, FL",
    time: "7:30 PM",
    ticketLink: "#",
    isSoldOut: false,
    type: "festival",
  },
  {
    id: 4,
    date: "2025-05-18",
    venue: "Beats Arena",
    city: "Chicago, IL",
    time: "8:30 PM",
    ticketLink: "#",
    isSoldOut: false,
    type: "concert",
  },
  {
    id: 5,
    date: "2025-06-02",
    venue: "Melody Club",
    city: "Atlanta, GA",
    time: "9:30 PM",
    ticketLink: "#",
    isSoldOut: false,
    type: "club",
  },
  {
    id: 6,
    date: "2025-06-15",
    venue: "Summer Jam Festival",
    city: "Houston, TX",
    time: "6:00 PM",
    ticketLink: "#",
    isSoldOut: false,
    type: "festival",
  },
]

const eventTypes = ["all", "concert", "festival", "club"]

export default function TourPage() {
  const [selectedType, setSelectedType] = useState("all")

  const filteredEvents = selectedType === "all" ? events : events.filter((event) => event.type === selectedType)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  return (
    <div className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center glitch-text">
          <span className="text-neon-yellow">TOUR</span> <span className="text-white">&</span>{" "}
          <span className="text-white">EVENTS</span>
        </h1>

        {/* Event Type Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {eventTypes.map((type) => (
            <Button
              key={type}
              variant={selectedType === type ? "default" : "outline"}
              className={cn(
                "capitalize",
                selectedType === type
                  ? "bg-neon-yellow text-black"
                  : "border-neon-yellow/50 text-white hover:bg-neon-yellow/20",
              )}
              onClick={() => setSelectedType(type)}
            >
              {type}
            </Button>
          ))}
        </div>

        {/* Events List */}
        <div className="max-w-4xl mx-auto">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-400">No events found for this category.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredEvents.map((event) => (
                <div key={event.id} className="bg-gray-900 rounded-lg overflow-hidden vhs-effect">
                  <div className="p-6 flex flex-col md:flex-row md:items-center">
                    {/* Date */}
                    <div className="mb-4 md:mb-0 md:mr-6 md:w-32 text-center">
                      <div className="bg-neon-pink/20 p-3 rounded-md inline-block">
                        <Calendar className="text-neon-pink mx-auto mb-2" size={24} />
                        <div className="text-white font-bold">{formatDate(event.date)}</div>
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{event.venue}</h3>
                          <div className="flex flex-col sm:flex-row sm:items-center text-gray-400 gap-y-2 sm:gap-x-4">
                            <div className="flex items-center">
                              <MapPin className="mr-2" size={16} />
                              {event.city}
                            </div>
                            <div className="flex items-center">
                              <Clock className="mr-2" size={16} />
                              {event.time}
                            </div>
                            <div className="inline-block px-2 py-1 bg-gray-800 rounded-full text-xs uppercase">
                              {event.type}
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 md:mt-0">
                          {event.isSoldOut ? (
                            <span className="inline-block px-4 py-2 bg-gray-800 text-gray-400 rounded-md font-bold">
                              Sold Out
                            </span>
                          ) : (
                            <Button className="bg-neon-yellow text-black hover:bg-neon-yellow/80">
                              <Ticket className="mr-2" size={16} />
                              Get Tickets
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Tour Poster */}
        <div className="max-w-2xl mx-auto mt-20 vhs-effect">
          <div className="relative">
            <img src="/placeholder.svg?height=1200&width=800" alt="Tour poster" className="w-full h-auto rounded-lg" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 glitch-text">
                <span className="text-neon-yellow">90s</span> <span className="text-white">REVIVAL</span>{" "}
                <span className="text-white">TOUR</span>
              </h2>
              <p className="text-xl text-white mb-6">Experience the authentic sound of 90s R&B live on stage</p>
              <Button className="bg-neon-yellow text-black hover:bg-neon-yellow/80 w-full sm:w-auto">
                View All Dates
              </Button>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="max-w-4xl mx-auto mt-20 text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-400 mb-6">
            Subscribe to receive notifications about new tour dates and special events
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none flex-grow"
            />
            <Button className="bg-neon-yellow text-black hover:bg-neon-yellow/80">Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

