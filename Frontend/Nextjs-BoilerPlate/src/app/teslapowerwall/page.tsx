'use client'
import { ChevronDown } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Navbar from "@/components/Navbar/navbar"
import QuoteRequestForm from "@/components/Qoute/Qoute"
import TestimonialCarousel from "@/components/Testmonials/testimonials"
import Footer from "@/components/Footer/Footer"

export default function TeslaPowerwallPage() {
    const [activeSection, setActiveSection] = useState<string | null>(null)
    const whatSectionRef = useRef<HTMLDivElement>(null)
    const faqsSectionRef = useRef<HTMLDivElement>(null)
  
    const scrollToSection = (section: string) => {
      setActiveSection(section)
  
      setTimeout(() => {
        if (section === "what" && whatSectionRef.current) {
          whatSectionRef.current.scrollIntoView({ behavior: "smooth" })
        } else if (section === "faqs" && faqsSectionRef.current) {
          faqsSectionRef.current.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }
  
    // Reset active section when user scrolls back to top
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY < 300) {
          setActiveSection(null)
        }
      }
  
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }, [])
  
    return (
      <div className="min-h-screen">
        <Navbar/>
        {/* Hero Section */}
        <div className="relative w-full h-screen">
          <Image
            src="/images/powerwall.jpg"
            alt="Tesla Powerwall 3 on a modern house at night"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
  
          {/* Title */}
          <div className="absolute top-1/4 left-0 w-full text-center">
            <h1 className="text-white text-4xl md:text-5xl font-bold">Tesla Powerwall 3</h1>
          </div>
  
          {/* Cards Container */}
          <div className="absolute bottom-0 left-0 right-0 flex flex-col md:flex-row justify-center">
            {/* What is Tesla Powerwall 3 Card */}
            <div
              className="w-full md:w-1/2 bg-white p-6 cursor-pointer flex justify-between items-center"
              onClick={() => scrollToSection("what")}
            >
              <h2 className="text-red-600 font-medium text-lg">What is Tesla Powerwall 3?</h2>
              <ChevronDown className="h-5 w-5 text-red-600" />
            </div>
  
            {/* FAQs Card */}
            <div
              className="w-full md:w-1/2 bg-gray-900 text-white p-6 cursor-pointer flex justify-between items-center"
              onClick={() => scrollToSection("faqs")}
            >
              <h2 className="font-medium text-lg">FAQs about Tesla Powerwall 3</h2>
              <ChevronDown className="h-5 w-5" />
            </div>
          </div>
        </div>
  
        {/* Content Sections */}
        <div className="container mx-auto px-4 py-12">
          {/* What is Tesla Powerwall 3 Section */}
          <div
            ref={whatSectionRef}
            className={`mb-16 transition-opacity duration-500 ${activeSection === "what" ? "opacity-100" : activeSection === null ? "opacity-100" : "opacity-50"}`}
          >
            <h2 className="text-3xl font-bold text-red-600 mb-6 flex items-center">What is Tesla Powerwall 3?</h2>
  
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-4 text-lg">
                  The Tesla Powerwall 3 is the latest home battery system from Tesla Energy. It stores electricity
                  generated from solar panels or from the grid during off-peak hours when rates are lower.
                </p>
                <p className="text-gray-700 mb-4">
                  With a higher capacity than previous models, the Powerwall 3 can power your home during outages and help
                  you save money by reducing reliance on grid electricity during peak hours.
                </p>
                <p className="text-gray-700 mb-4">
                  The system is designed to integrate seamlessly with your home's electrical system and can be controlled
                  and monitored through the Tesla app.
                </p>
              </div>
  
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-4">Key Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-red-600 rounded-full w-5 h-5 flex items-center justify-center text-white mr-2 mt-1">
                      ✓
                    </span>
                    <span>Increased energy capacity of 13.5 kWh</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-red-600 rounded-full w-5 h-5 flex items-center justify-center text-white mr-2 mt-1">
                      ✓
                    </span>
                    <span>Higher continuous power output</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-red-600 rounded-full w-5 h-5 flex items-center justify-center text-white mr-2 mt-1">
                      ✓
                    </span>
                    <span>Improved efficiency and thermal management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-red-600 rounded-full w-5 h-5 flex items-center justify-center text-white mr-2 mt-1">
                      ✓
                    </span>
                    <span>Seamless integration with Tesla solar products</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-red-600 rounded-full w-5 h-5 flex items-center justify-center text-white mr-2 mt-1">
                      ✓
                    </span>
                    <span>Advanced monitoring through the Tesla app</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
  
          {/* FAQs Section */}
          <div
            ref={faqsSectionRef}
            className={`transition-opacity duration-500 ${activeSection === "faqs" ? "opacity-100" : activeSection === null ? "opacity-100" : "opacity-50"}`}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">FAQs about Tesla Powerwall 3</h2>
  
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-gray-900 text-white p-6 rounded-lg">
                  <h3 className="font-semibold text-xl mb-2">How much does a Powerwall 3 cost?</h3>
                  <p className="text-gray-300">
                    The Tesla Powerwall 3 costs approximately $8,500-$10,500 including installation, though prices may
                    vary based on your location and installation requirements.
                  </p>
                </div>
  
                <div className="bg-gray-900 text-white p-6 rounded-lg">
                  <h3 className="font-semibold text-xl mb-2">How many Powerwalls do I need?</h3>
                  <p className="text-gray-300">
                    This depends on your energy needs. One Powerwall can power essential appliances, while multiple units
                    may be needed for whole-home backup or off-grid living.
                  </p>
                </div>
              </div>
  
              <div className="space-y-6">
                <div className="bg-gray-900 text-white p-6 rounded-lg">
                  <h3 className="font-semibold text-xl mb-2">Can I install Powerwall without solar panels?</h3>
                  <p className="text-gray-300">
                    Yes, Powerwall can be installed without solar panels. It can charge from the grid during off-peak
                    hours to provide power during peak times.
                  </p>
                </div>
  
                <div className="bg-gray-900 text-white p-6 rounded-lg">
                  <h3 className="font-semibold text-xl mb-2">How long does installation take?</h3>
                  <p className="text-gray-300">
                    A typical Powerwall installation takes 1-2 days, depending on the complexity of your electrical system
                    and the number of units being installed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <QuoteRequestForm/>
        <TestimonialCarousel/>
        <Footer/>
      </div>
    )
  }