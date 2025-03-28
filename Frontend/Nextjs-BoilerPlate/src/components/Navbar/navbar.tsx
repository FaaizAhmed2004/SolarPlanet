"use client"

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
    <header className="relative w-full cursor-pointer">
      {/* Red curved line decoration */}
      <div className="absolute right-0 top-0 h-28 w-1/3 overflow-hidden">
        <div className="absolute right-0 h-56 w-56 -translate-y-28 translate-x-28 rounded-full border-8 border-red-600"></div>
      </div>

      <nav className="relative z-10 bg-red-600 text-white">
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Desktop Menu */}
          <div className="hidden items-center md:flex">
            <Link href="/" className="flex items-center px-4 py-4 hover:bg-red-700">
              <Home size={20} />
            </Link>

            <Link href="/ResidentialSolar" className="px-4 py-4 hover:bg-red-700">
              Residential Solar
            </Link>

            <div className="relative">
              <button onClick={toggleBatteryDropdown} className="flex items-center px-4 py-4 hover:bg-red-700">
                Battery Storage
                <ChevronDown size={16} className="ml-1" />
              </button>

              {batteryDropdownOpen && (
                <div className="absolute left-0 top-full z-20 w-48 bg-white text-gray-800 shadow-lg">
                  <Link href="/BatteryStorage" className="block px-4 py-2 hover:bg-gray-100">
                    Benefits of batery storage
                  </Link>
                  <Link href="/teslapowerwall" className="block px-4 py-2 hover:bg-gray-100">
                    Tesla Powerwall 3
                  </Link>
                </div>
              )}
            </div>

            <Link href="/commercialsolar" className="px-4 py-4 hover:bg-red-700">
              Commercial Solar
            </Link>

            <Link href="/WINAICOsolar" className="px-4 py-4 hover:bg-red-700">
              WINAICO Solar
            </Link>

            <Link href="/Heatpump" className="px-4 py-4 hover:bg-red-700">
              Heat Pumps
            </Link>

            <div className="relative">
              <button onClick={toggleInfoDropdown} className="flex items-center px-4 py-4 hover:bg-red-700">
                Info
                <ChevronDown size={16} className="ml-1" />
              </button>

              {infoDropdownOpen && (
                <div className="absolute left-0 top-full z-20 w-48 bg-white text-gray-800 shadow-lg cursor-pointer">
                  <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">
                    About Us
                  </Link>
                  <Link href="Contact" className="block px-4 py-2 hover:bg-gray-100">
                    Contact
                  </Link>
                  <Link href="/Faq" className="block px-4 py-2 hover:bg-gray-100">
                    FAQ
                  </Link>
                  <Link href="/electrify_home" className="block px-4 py-2 hover:bg-gray-100">
                    Electrify home
                  </Link>
                  <Link href="/ev-charger" className="block px-4 py-2 hover:bg-gray-100">
                    EV Charger
                  </Link>
                  <Link href="/case-study" className="block px-4 py-2 hover:bg-gray-100">
                    case Study
                  </Link>
                  <Link href="/Login" className="block px-4 py-2 hover:bg-gray-100">
                    Login
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="ml-2 md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <div className="space-y-1.5">
              <span className="block h-0.5 w-6 bg-white"></span>
              <span className="block h-0.5 w-6 bg-white"></span>
              <span className="block h-0.5 w-6 bg-white"></span>
            </div>
          </button>

          {/* Phone Number */}
          <div className="flex items-center">
            <a href="tel:0397290894" className="flex items-center gap-2 px-4 py-4 hover:bg-red-700">
              <Phone size={20} />
              <span className="font-medium">04 33866320</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={closeMobileMenu} />
    </header>
  )
}

export default Navbar

