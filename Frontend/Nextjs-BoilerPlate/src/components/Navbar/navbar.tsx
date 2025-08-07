"use client"

import React from "react"
import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Home, Phone } from "lucide-react"
import MobileMenu from "./mobile-menu"

const Navbar = () => {
  const [batteryDropdownOpen, setBatteryDropdownOpen] = useState(false)
  const [infoDropdownOpen, setInfoDropdownOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleBatteryDropdown = () => {
    setBatteryDropdownOpen(!batteryDropdownOpen)
    setInfoDropdownOpen(false)
  }

  const toggleInfoDropdown = () => {
    setInfoDropdownOpen(!infoDropdownOpen)
    setBatteryDropdownOpen(false)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="w-full relative">
      {/* Solar energy curved line decoration */}
      <div className="absolute right-0 top-0 h-16 sm:h-20 w-1/4 sm:w-1/3 overflow-hidden pointer-events-none z-10">
        <div className="absolute right-0 h-40 w-40 sm:h-56 sm:w-56 -translate-y-20 sm:-translate-y-28 translate-x-20 sm:translate-x-28 rounded-full border-4 sm:border-8 border-solar-orange opacity-80"></div>
        <div className="absolute right-4 sm:right-8 h-28 w-28 sm:h-40 sm:w-40 -translate-y-14 sm:-translate-y-20 translate-x-14 sm:translate-x-20 rounded-full border-2 sm:border-4 border-solar-yellow opacity-60"></div>
      </div>

      <nav className="relative z-fixed bg-background border-b border-border text-foreground shadow-lg layout-safe">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            
            {/* Brand/Logo Area */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center px-2 sm:px-3 py-1.5 hover:bg-accent/20 rounded-lg transition-all duration-200 cursor-pointer">
                <Home size={14} className="sm:mr-1.5 text-primary" />
                <span className="hidden sm:inline font-bold text-sm lg:text-base text-primary">Energy Planet</span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-0.5">
              <Link href="/ResidentialSolar" className="px-2 xl:px-3 py-1.5 hover:bg-accent/20 rounded-lg transition-all duration-200 font-medium text-xs cursor-pointer">
                Residential Solar
              </Link>

              <div className="relative">
                <button 
                  type="button"
                  onClick={toggleBatteryDropdown} 
                  className="flex items-center px-2 xl:px-3 py-1.5 hover:bg-accent/20 rounded-lg transition-all duration-200 font-medium text-xs cursor-pointer"
                >
                  Battery Storage
                  <ChevronDown size={12} className="ml-1" />
                </button>

                {batteryDropdownOpen && (
                  <div className="absolute left-0 top-full z-dropdown w-44 bg-card text-card-foreground shadow-xl rounded-lg border border-border overflow-hidden mt-1 layout-safe">
                    <Link href="/BatteryStorage" className="block px-3 py-2 hover:bg-accent hover:text-accent-foreground transition-colors duration-200 text-xs cursor-pointer">
                      Benefits of battery storage
                    </Link>
                    <Link href="/teslapowerwall" className="block px-3 py-2 hover:bg-accent hover:text-accent-foreground transition-colors duration-200 text-xs cursor-pointer">
                      Tesla Powerwall 3
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/commercialsolar" className="px-2 xl:px-3 py-1.5 hover:bg-accent/20 rounded-lg transition-all duration-200 font-medium text-xs cursor-pointer">
                Commercial Solar
              </Link>

              <Link href="/WINAICOsolar" className="px-2 xl:px-3 py-1.5 hover:bg-accent/20 rounded-lg transition-all duration-200 font-medium text-xs cursor-pointer">
                WINAICO Solar
              </Link>

              <Link href="/Heatpump" className="px-2 xl:px-3 py-1.5 hover:bg-accent/20 rounded-lg transition-all duration-200 font-medium text-xs cursor-pointer">
                Heat Pumps
              </Link>

              <div className="relative">
                <button 
                  type="button"
                  onClick={toggleInfoDropdown} 
                  className="flex items-center px-2 xl:px-3 py-1.5 hover:bg-accent/20 rounded-lg transition-all duration-200 font-medium text-xs cursor-pointer"
                >
                  More
                  <ChevronDown size={12} className="ml-1" />
                </button>

                {infoDropdownOpen && (
                  <div className="absolute left-0 top-full z-dropdown w-44 bg-card text-card-foreground shadow-xl rounded-lg border border-border overflow-hidden mt-1 layout-safe">
                    <Link href="/about" className="block px-3 py-2 hover:bg-accent hover:text-accent-foreground transition-colors duration-200 text-xs cursor-pointer">
                      About Us
                    </Link>
                    <Link href="/Contact" className="block px-3 py-2 hover:bg-accent hover:text-accent-foreground transition-colors duration-200 text-xs cursor-pointer">
                      Contact
                    </Link>
                    <Link href="/Faq" className="block px-3 py-2 hover:bg-accent hover:text-accent-foreground transition-colors duration-200 text-xs cursor-pointer">
                      FAQ
                    </Link>
                    <Link href="/electrify_home" className="block px-3 py-2 hover:bg-accent hover:text-accent-foreground transition-colors duration-200 text-xs cursor-pointer">
                      Electrify Home
                    </Link>
                    <Link href="/ev-charger" className="block px-3 py-2 hover:bg-accent hover:text-accent-foreground transition-colors duration-200 text-xs cursor-pointer">
                      EV Charger
                    </Link>
                    <Link href="/case-study" className="block px-3 py-2 hover:bg-accent hover:text-accent-foreground transition-colors duration-200 text-xs cursor-pointer">
                      Case Studies
                    </Link>
                    <Link href="/Login" className="block px-3 py-2 hover:bg-accent hover:text-accent-foreground transition-colors duration-200 text-xs cursor-pointer">
                      Login
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Right side - Phone and Mobile Menu */}
            <div className="flex items-center space-x-2">
              {/* Phone Number */}
              <a 
                href="tel:+61433866320" 
                className="hidden sm:flex items-center gap-1.5 px-2 sm:px-3 py-1.5 hover:bg-accent/20 rounded-lg transition-all duration-200 font-semibold text-xs text-primary cursor-pointer"
              >
                <Phone size={14} />
                <span className="hidden md:inline">+61 433 866 320</span>
              </a>

              {/* Mobile Menu Button */}
              <button 
                type="button"
                className="lg:hidden p-2 hover:bg-accent/20 rounded-lg transition-all duration-200 cursor-pointer" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                <div className="space-y-1.5">
                  <span className="block h-0.5 w-6 bg-foreground transition-all duration-200"></span>
                  <span className="block h-0.5 w-6 bg-foreground transition-all duration-200"></span>
                  <span className="block h-0.5 w-6 bg-foreground transition-all duration-200"></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={closeMobileMenu} />
    </header>
  )
}

export default Navbar

