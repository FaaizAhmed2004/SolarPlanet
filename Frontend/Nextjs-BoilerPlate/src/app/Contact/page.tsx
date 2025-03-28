import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/navbar'
import QuoteRequestForm from '@/components/Qoute/Qoute'
import { MapPin, Clock, Phone, Mail } from "lucide-react"
import React from 'react'

export default function Contact () {
  return (
    <div>
        <Navbar/>
        <div className="bg-white">
      {/* Hero Banner */}
      <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/banner_heatpump-1.jpg')",
            backgroundPosition: "center 40%",
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center px-4">
            Contact Us for Solar Solutions
          </h1>
        </div>
      </div>

      {/* Company Name */}
      <div className="text-center py-8 border-b">
        <h2 className="text-xl md:text-2xl font-semibold text-red-600 tracking-wide">
          TOTAL SOLAR SOLUTIONS AUSTRALIA
        </h2>
      </div>

      {/* Contact Information */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
        <div className="space-y-8">
          {/* Address */}
          <div className="flex space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-red-600" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Address</h3>
              <p className="text-gray-600">Factory 1/3 Nicole Close</p>
              <p className="text-gray-600">Bayswater North, Victoria 3153</p>
              <p className="text-gray-600">Australia</p>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="flex space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                <Clock className="h-6 w-6 text-red-600" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Opening Hours</h3>
              <p className="text-gray-600">Monday-Friday: 9:00am-5:00pm</p>
              <p className="text-gray-600">Saturday, Sunday & Public Holidays: Closed</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                <Phone className="h-6 w-6 text-red-600" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Phone</h3>
              <p className="text-gray-600">
                <a href="tel:0397290894" className="hover:text-red-600 transition-colors">
                  (03) 9729 0894
                </a>
              </p>
            </div>
          </div>

          {/* Email (Added as it's typically included in contact info) */}
          <div className="flex space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                <Mail className="h-6 w-6 text-red-600" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600">
                <a href="mailto:info@totalsolar.com.au" className="hover:text-red-600 transition-colors">
                  TheSoalrPlanet.com.au
                </a>
              </p>
            </div>
          </div>

          {/* Map (Placeholder) */}
          <div className="mt-8 rounded-lg overflow-hidden shadow-md h-[300px] bg-gray-200">
            <iframe
              src="/images/10036.jpg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              aria-label="Map showing our location in Bayswater North, Victoria"
            ></iframe>
          </div>
        </div>

        {/* Quote Request Form */}
        <div>
          <QuoteRequestForm />
        </div>
      </div>
    </div>
    <div>
        <Footer/>
    </div>
    </div>
  )
}

