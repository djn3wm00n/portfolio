"use client"

import type React from "react"

import { useState } from "react"
import { Send, Instagram, Twitter, Youtube, Music, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center glitch-text">
          <span className="text-neon-yellow">GET</span> <span className="text-white">IN</span>{" "}
          <span className="text-white">TOUCH</span>
        </h1>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="vhs-effect bg-gray-900 p-6 md:p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6 text-white">Send a Message</h2>

              {isSubmitted ? (
                <div className="bg-green-900/50 border border-green-500 text-white p-4 rounded-md mb-6">
                  <p className="font-bold">Message sent successfully!</p>
                  <p>Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              ) : null}

              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-white">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      required
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      required
                      className="bg-gray-800 border-gray-700 text-white min-h-[150px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-neon-yellow hover:bg-neon-yellow/80 text-black"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-4 w-4" /> Send Message
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <Mail className="text-neon-yellow" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1 text-white">Email</h3>
                      <p className="text-gray-400">contact@90srbartist.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1 text-white">Management Office</h3>
                      <p className="text-gray-400">
                        123 Rhythm Street
                        <br />
                        Los Angeles, CA 90001
                        <br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <Phone className="text-neon-yellow" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1 text-white">Booking</h3>
                      <p className="text-gray-400">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-white">Connect</h2>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="#"
                    className="flex items-center p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors duration-300"
                  >
                    <Instagram className="text-neon-yellow mr-3" size={24} />
                    <span className="text-white">@90sRBartist</span>
                  </a>

                  <a
                    href="#"
                    className="flex items-center p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors duration-300"
                  >
                    <Twitter className="text-white mr-3" size={24} />
                    <span className="text-white">@90sRBartist</span>
                  </a>

                  <a
                    href="#"
                    className="flex items-center p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors duration-300"
                  >
                    <Youtube className="text-neon-yellow mr-3" size={24} />
                    <span className="text-white">90s R&B Artist</span>
                  </a>

                  <a
                    href="#"
                    className="flex items-center p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors duration-300"
                  >
                    <Music className="text-white mr-3" size={24} />
                    <span className="text-white">90s R&B Artist</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="max-w-6xl mx-auto mt-20 vhs-effect">
          <div className="aspect-video rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg?height=600&width=1200"
              alt="Map location"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

