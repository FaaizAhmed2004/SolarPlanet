"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, X } from "lucide-react"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const [batteryDropdownOpen, setBatteryDropdownOpen] = useState(false)
  const [infoDropdownOpen, setInfoDropdownOpen] = useState(false)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-50 md:hidden">
      <div className="h-full w-64 bg-white p-4 text-gray-800">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>

        <div className="mt-6 flex flex-col">
          <Link href="/" className="py-2 hover:text-red-600" onClick={onClose}>
            Home
          </Link>

          <Link href="/residential-solar" className="py-2 hover:text-red-600" onClick={onClose}>
            Residential Solar
          </Link>

          <div>
            <button
              onClick={() => setBatteryDropdownOpen(!batteryDropdownOpen)}
              className="flex w-full items-center justify-between py-2 hover:text-red-600"
            >
              <span>Battery Storage</span>
              <ChevronDown size={16} className={`transition-transform ${batteryDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {batteryDropdownOpen && (
              <div className="ml-4 flex flex-col">
                <Link href="/battery-storage/option1" className="py-2 hover:text-red-600" onClick={onClose}>
                  Option 1
                </Link>
                <Link href="/battery-storage/option2" className="py-2 hover:text-red-600" onClick={onClose}>
                  Option 2
                </Link>
              </div>
            )}
          </div>

          <Link href="/commercial-solar" className="py-2 hover:text-red-600" onClick={onClose}>
            Commercial Solar
          </Link>

          <Link href="/winaico-solar" className="py-2 hover:text-red-600" onClick={onClose}>
            WINAICO Solar
          </Link>

          <Link href="/heat-pumps" className="py-2 hover:text-red-600" onClick={onClose}>
            Heat Pumps
          </Link>

          <div>
            <button
              onClick={() => setInfoDropdownOpen(!infoDropdownOpen)}
              className="flex w-full items-center justify-between py-2 hover:text-red-600"
            >
              <span>Info</span>
              <ChevronDown size={16} className={`transition-transform ${infoDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {infoDropdownOpen && (
              <div className="ml-4 flex flex-col">
                <Link href="/info/about" className="py-2 hover:text-red-600" onClick={onClose}>
                  About Us
                </Link>
                <Link href="/info/contact" className="py-2 hover:text-red-600" onClick={onClose}>
                  Contact
                </Link>
                <Link href="/info/faq" className="py-2 hover:text-red-600" onClick={onClose}>
                  FAQ
                </Link>
              </div>
            )}
          </div>

          <a href="tel:0397290894" className="mt-4 py-2 font-medium text-red-600" onClick={onClose}>
            03 9729 0894
          </a>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu