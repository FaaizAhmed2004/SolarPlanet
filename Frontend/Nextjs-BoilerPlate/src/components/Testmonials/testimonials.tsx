"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    quote:
      "Amazing service from everyone in the company. Everything delivered on time and to the highest quality. Daniel is very patient and will answer all your queries. Installers are very neat and tidy. Reece follows up to ensure that everything is to your satisfaction. Cannot be faulted and I'm enjoying keeping track of my savings and what is going back into the grid!",
    author: "Molly",
  },
  {
    id: 2,
    quote:
      "We had our solar installed by Total Solar Solutions and couldn't be happier. The team was professional, knowledgeable and the installation was completed quickly with no issues. Highly recommend!",
    author: "James",
  },
  {
    id: 3,
    quote:
      "From the initial consultation to the final installation, Total Solar Solutions provided exceptional service. The system has been performing brilliantly and our electricity bills have dropped significantly.",
    author: "Sarah",
  },
  {
    id: 4,
    quote:
      "The team at Total Solar Solutions made the whole process easy. They explained everything clearly, helped with all the paperwork, and the installation team was efficient and tidy. Great experience overall!",
    author: "Michael",
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-advance the carousel
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  // Navigation functions
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div
      className="relative w-full h-[500px] md:h-[600px] overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Image */}
      <Image
  src="/images/testimonial.jpg"  // Removed "/images" prefix
  alt="Aerial view of neighborhood with solar panels"
  fill
  className="object-cover"
  priority
/>


      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60">
        {/* Content Container */}
        <div className="container mx-auto h-full flex flex-col items-center justify-center px-4 py-12 text-center">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-8 tracking-wider">TESTIMONIALS</h2>

          {/* Testimonial */}
          <div className="max-w-4xl mx-auto">
            <p className="text-white text-lg md:text-xl leading-relaxed mb-8 italic">
              "{testimonials[currentIndex].quote}"
            </p>
            <p className="text-white text-lg md:text-xl font-medium">{testimonials[currentIndex].author}</p>
          </div>

          {/* Navigation Dots */}
          <div className="flex space-x-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? "bg-amber-500" : "bg-white"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Arrow Navigation (hidden on mobile) */}
          <div className="hidden md:block">
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

