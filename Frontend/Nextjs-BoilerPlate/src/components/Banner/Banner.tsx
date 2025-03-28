"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "../ui/button"

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <div className="w-full">
      {/* Top announcement bar */}
      <div className="w-full bg-white text-center py-3 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <p className="font-medium">
            <span className="block md:inline">We are not just another solar company...</span>
            <span className="block md:inline md:ml-1">Looking for a company that knows you by name?</span>
          </p>
        </div>
      </div>

      {/* Hero section with roof solar panels */}
      <div className="relative w-full h-[400px] md:h-[500px]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner-3APUzDFzSy8oQc38IZ3W9SEcvmkmcN.png"
          alt="Solar panels on roof"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30">
          <div className="container mx-auto h-full flex items-center px-4">
            <div className="max-w-md text-white">
              <h1 className="text-2xl md:text-3xl font-bold mb-4">
                We focus on providing customers with the
                <span className="block">best quality products available</span>
                <span className="block">in Australia</span>
              </h1>
              <Button className="bg-amber-500 hover:bg-amber-600 text-black mt-4">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Certification section */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <Image
              src="/placeholder.svg?height=60&width=120"
              alt="Certification 1"
              width={120}
              height={60}
              className="object-contain"
            />
            <Image
              src="/placeholder.svg?height=60&width=120"
              alt="Certification 2"
              width={120}
              height={60}
              className="object-contain"
            />
            <Image
              src="/placeholder.svg?height=60&width=120"
              alt="Certification 3"
              width={120}
              height={60}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Team section */}
      <div className="relative w-full h-[300px]">
        <Image src="/placeholder.svg?height=300&width=1200" alt="Team photo" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-end">
          <div className="p-6 md:p-12">
            <h2 className="text-white text-2xl md:text-3xl font-bold">Your trusted team in solar since 2012</h2>
          </div>
        </div>
      </div>

      {/* Benefits section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
                How can going solar benefit your family?
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>Reduce your electricity costs with solar</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>Add value to your property</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>Environmentally friendly solution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>Low maintenance investment</span>
                </li>
              </ul>
            </div>
            <div className="hidden md:block">{/* Placeholder for additional content */}</div>
          </div>
        </div>
      </div>

      {/* Gallery section */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left image */}
        <div className="relative h-[300px] md:h-[400px] group">
          <Image src="/placeholder.svg?height=400&width=600" alt="Solar installation" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button className="bg-amber-500 hover:bg-amber-600 text-black">Get a quote</Button>
          </div>
          <div className="absolute bottom-4 left-4">
            <Image
              src="/placeholder.svg?height=40&width=200"
              alt="Total Solar Solutions"
              width={200}
              height={40}
              className="object-contain"
            />
            <p className="text-white text-xl font-bold mt-2">03 9729 0894</p>
          </div>
        </div>

        {/* Right image */}
        <div className="relative h-[300px] md:h-[400px] group">
          <Image src="/placeholder.svg?height=400&width=600" alt="Company building" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-center">
              <p className="text-white font-bold mb-2">Visit our showroom</p>
              <Button className="bg-amber-500 hover:bg-amber-600 text-black">Get directions</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

