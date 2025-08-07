import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/navbar'
import QuoteRequestForm from '@/components/Qoute/Qoute'
import { MapPin, Clock, Phone, Mail } from "lucide-react"
import React from 'react'

export default function Contact () {
  return (
    <main className="min-h-screen bg-background">
      <Navbar/>
      
      {/* Hero Banner */}
      <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden section-clear layout-safe">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/banner_heatpump-1.jpg')",
            backgroundPosition: "center 40%",
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative h-full flex items-center justify-center z-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center px-4">
            Contact Us for Solar Solutions
          </h1>
        </div>
      </section>

      {/* Company Name */}
      <section className="content-center py-8 border-b border-border section-clear">
        <h2 className="text-xl md:text-2xl font-semibold text-primary tracking-wide text-balance">
          THE ENERGY PLANET AUSTRALIA
        </h2>
      </section>

      {/* Contact Information */}
      <section className="section-clear section-separator">
        <div className="page-container section-padding grid-2-col">
        <div className="space-section">
          {/* Address */}
          <div className="flex space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Address</h3>
              <div className="space-y-1">
                <p className="text-readable">23 Birmingham Street</p>
                <p className="text-readable">Spotswood, Victoria 3015</p>
                <p className="text-readable">Australia</p>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="flex space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Clock className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Opening Hours</h3>
              <div className="space-y-1">
                <p className="text-readable">Monday-Friday: 9:00am-5:00pm</p>
                <p className="text-readable">Saturday, Sunday & Public Holidays: Closed</p>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="flex space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Phone className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Phone</h3>
              <p className="text-readable">
                <a href="tel:+61433866320" className="text-emphasis hover:text-primary/80 transition-colors cursor-pointer">
                  +61 433 866 320
                </a>
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Mail className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Email</h3>
              <p className="text-readable">
                <a href="mailto:info@theenergyplanet.com" className="text-emphasis hover:text-primary/80 transition-colors cursor-pointer">
                  info@theenergyplanet.com
                </a>
              </p>
            </div>
          </div>

          {/* Map (Placeholder) */}
          <div className="mt-8 rounded-lg overflow-hidden shadow-md h-[300px] bg-muted border border-border">
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
      </section>
      
      {/* Footer */}
      <footer className="relative z-10">
        <Footer/>
      </footer>
    </main>
  )
}

