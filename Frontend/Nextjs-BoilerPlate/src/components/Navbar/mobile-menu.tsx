"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, X, Phone } from "lucide-react"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const [batteryDropdownOpen, setBatteryDropdownOpen] = useState(false)
  const [infoDropdownOpen, setInfoDropdownOpen] = useState(false)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-modal lg:hidden layout-safe">
      {/* Backdrop */}
      <div className="hero-overlay backdrop-blur-sm cursor-pointer" onClick={onClose} />
      
      {/* Menu Panel */}
      <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-card shadow-2xl layout-safe">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border p-4 sm:p-6">
            <h2 className="text-xl font-bold text-primary">Energy Planet</h2>
            <button 
              type="button"
              onClick={onClose} 
              className="rounded-lg p-2 text-readable hover:bg-accent hover:text-accent-foreground transition-colors duration-200 cursor-pointer"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6">
            <nav className="space-y-2">
              <Link 
                href="/" 
                className="block rounded-lg px-3 py-3 text-sm font-medium text-card-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200 cursor-pointer" 
                onClick={onClose}
              >
                Home
              </Link>

              <Link 
                href="/ResidentialSolar" 
                className="block rounded-lg px-3 py-3 text-sm font-medium text-card-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200 cursor-pointer" 
                onClick={onClose}
              >
                Residential Solar
              </Link>

              {/* Battery Storage Dropdown */}
              <div>
                <button
                  type="button"
                  onClick={() => setBatteryDropdownOpen(!batteryDropdownOpen)}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-sm font-medium text-card-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200 cursor-pointer"
                >
                  <span>Battery Storage</span>
                  <ChevronDown 
                    size={14} 
                    className={`transition-transform duration-200 ${batteryDropdownOpen ? "rotate-180" : ""}`} 
                  />
                </button>

                {batteryDropdownOpen && (
                  <div className="ml-4 mt-2 space-y-1">
                    <Link 
                      href="/BatteryStorage" 
                      className="block rounded-lg px-3 py-2 text-sm text-readable hover:bg-accent hover:text-accent-foreground transition-colors duration-200 cursor-pointer" 
                      onClick={onClose}
                    >
                      Benefits of Battery Storage
                    </Link>
                    <Link 
                      href="/teslapowerwall" 
                      className="block rounded-lg px-3 py-2 text-sm text-readable hover:bg-accent hover:text-accent-foreground transition-colors duration-200 cursor-pointer" 
                      onClick={onClose}
                    >
                      Tesla Powerwall 3
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                href="/commercialsolar" 
                className="block rounded-lg px-3 py-3 text-sm font-medium text-card-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200 cursor-pointer" 
                onClick={onClose}
              >
                Commercial Solar
              </Link>

              <Link 
                href="/WINAICOsolar" 
                className="block rounded-lg px-3 py-3 text-sm font-medium text-card-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200 cursor-pointer" 
                onClick={onClose}
              >
                WINAICO Solar
              </Link>

              <Link 
                href="/Heatpump" 
                className="block rounded-lg px-3 py-3 text-sm font-medium text-card-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200 cursor-pointer" 
                onClick={onClose}
              >
                Heat Pumps
              </Link>

              {/* More Info Dropdown */}
              <div>
                <button
                  type="button"
                  onClick={() => setInfoDropdownOpen(!infoDropdownOpen)}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-sm font-medium text-card-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200 cursor-pointer"
                >
                  <span>More</span>
                  <ChevronDown 
                    size={14} 
                    className={`transition-transform duration-200 ${infoDropdownOpen ? "rotate-180" : ""}`} 
                  />
                </button>

                {infoDropdownOpen && (
                  <div className="ml-4 mt-2 space-y-1">
                    <Link 
                      href="/about" 
                      className="block rounded-lg px-3 py-2 text-sm text-readable hover:bg-accent hover:text-accent-foreground transition-colors duration-200 cursor-pointer" 
                      onClick={onClose}
                    >
                      About Us
                    </Link>
                    <Link 
                      href="/Contact" 
                      className="block rounded-lg px-3 py-2 text-sm text-readable hover:bg-accent hover:text-accent-foreground transition-colors duration-200 cursor-pointer" 
                      onClick={onClose}
                    >
                      Contact
                    </Link>
                    <Link 
                      href="/Faq" 
                      className="block rounded-lg px-3 py-2 text-sm text-readable hover:bg-accent hover:text-accent-foreground transition-colors duration-200 cursor-pointer" 
                      onClick={onClose}
                    >
                      FAQ
                    </Link>
                    <Link 
                      href="/electrify_home" 
                      className="block rounded-lg px-3 py-2 text-sm text-readable hover:bg-accent hover:text-accent-foreground transition-colors duration-200 cursor-pointer" 
                      onClick={onClose}
                    >
                      Electrify Home
                    </Link>
                    <Link 
                      href="/ev-charger" 
                      className="block rounded-lg px-3 py-2 text-sm text-readable hover:bg-accent hover:text-accent-foreground transition-colors duration-200 cursor-pointer" 
                      onClick={onClose}
                    >
                      EV Charger
                    </Link>
                    <Link 
                      href="/case-study" 
                      className="block rounded-lg px-3 py-2 text-sm text-readable hover:bg-accent hover:text-accent-foreground transition-colors duration-200 cursor-pointer" 
                      onClick={onClose}
                    >
                      Case Studies
                    </Link>
                    <Link 
                      href="/Login" 
                      className="block rounded-lg px-3 py-2 text-sm text-readable hover:bg-accent hover:text-accent-foreground transition-colors duration-200 cursor-pointer" 
                      onClick={onClose}
                    >
                      Login
                    </Link>
                  </div>
                )}
              </div>
            </nav>
          </div>

          {/* Footer with Phone */}
          <div className="border-t border-border p-4 sm:p-6">
            <a 
              href="tel:+61433866320" 
              className="flex items-center justify-center gap-3 rounded-lg bg-primary text-primary-foreground px-4 py-3 font-semibold shadow-lg transition-all duration-200 hover:opacity-90 cursor-pointer"
              onClick={onClose}
            >
              <Phone size={20} />
              <span>+61 433 866 320</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu