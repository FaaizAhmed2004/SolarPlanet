"use client"

import Image from "next/image"
import Link from "next/link"
import { ThumbsUp } from "lucide-react"
import { useState } from "react"
import Navbar from "@/components/Navbar/navbar"
import Footer from "@/components/Footer/Footer"
import TestimonialCarousel from "@/components/Testmonials/testimonials"
import QuoteRequestForm from "@/components/Qoute/Qoute"

export default function Residentialsolar() {
  const [activeTab, setActiveTab] = useState<string | null>(null)

  const handleTabClick = (tabId: string) => {
    setActiveTab(activeTab === tabId ? null : tabId)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* Header */}
      <header className="bg-white py-4 px-6 flex justify-between items-center border-b">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center h-12 w-40">
            <Image
              src="/images/solarplanetlogo.png"
              alt=" Solar Solutions Australia"
              width={160}
              height={10}
              className="object-contain"
            />
          </div>
          <div className="relative h-10 w-24 border border-black">
            <Image
              src="/images/Winiaco.png"
              alt="WINAICO Approved Retailer"
              width={96}
              height={40}
              className="object-contain"
            />
          </div>
        </div>
        <Link
          href="#quote"
          className="bg-yellow-500 text-black px-4 py-2 rounded-full flex items-center gap-2 font-medium hover:bg-yellow-400 transition-colors"
        >
          <ThumbsUp className="h-5 w-5" />
          GET A FREE QUOTE
        </Link>
      </header>

      {/* Hero Section */}
      <div className="relative h-[400px] w-full">
        <Image
          src="/images/residential_solar_bg.jpg"
          alt="Happy family with solar energy"
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">Residential Solar Systems</h1>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
        <button
          onClick={() => handleTabClick("benefit")}
          className="bg-white text-red-600 py-6 px-4 flex flex-col items-center justify-center text-center border hover:bg-gray-50 transition-colors"
        >
          <div className="font-medium">How can I benefit from going solar?</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mt-2 text-red-600"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </button>

        <button
          onClick={() => handleTabClick("inverter")}
          className="bg-amber-400 text-black py-6 px-4 flex items-center justify-center text-center hover:bg-amber-300 transition-colors"
        >
          <div className="font-medium">Inverter info</div>
        </button>

        <button
          onClick={() => handleTabClick("comparison")}
          className="bg-amber-500 text-black py-6 px-4 flex items-center justify-center text-center hover:bg-amber-400 transition-colors"
        >
          <div className="font-medium">Solar PV Only vs Solar PV and Battery Storage</div>
        </button>

        <button
          onClick={() => handleTabClick("rebates")}
          className="bg-red-600 text-white py-6 px-4 flex items-center justify-center text-center hover:bg-red-500 transition-colors"
        >
          <div className="font-medium">Understanding solar rebates / incentives and feed-in tariffs</div>
        </button>

        <button
          onClick={() => handleTabClick("case-studies")}
          className="bg-gray-800 text-white py-6 px-4 flex items-center justify-center text-center hover:bg-gray-700 transition-colors"
        >
          <div className="font-medium">Case Studies</div>
        </button>

        <button
          onClick={() => handleTabClick("faq")}
          className="bg-black text-white py-6 px-4 flex items-center justify-center text-center hover:bg-gray-900 transition-colors"
        >
          <div className="font-medium">Frequently asked questions</div>
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "benefit" && (
        <div className="p-8 bg-gray-50 text-center">
          <h2 className="text-2xl font-bold mb-4">How can I benefit from going solar?</h2>
          <p className="mb-4">
            Installing solar panels can significantly reduce your electricity bills, allowing you to generate your own
            clean energy. You'll be less dependent on the grid and protected from rising energy costs.
          </p>
          <p>
            Additionally, solar systems increase your property value, reduce your carbon footprint, and may qualify you
            for government incentives and rebates.
          </p>
        </div>
      )}

      {activeTab === "inverter" && (
        <div className="p-8 bg-gray-50 text-center">
          <h2 className="text-2xl font-bold mb-4">Inverter Info</h2>
          <p className="mb-4">
            Inverters are a crucial component of your solar system, converting DC electricity generated by your panels
            into AC electricity that can be used in your home.
          </p>
          <p>
            We offer high-quality string inverters, microinverters, and hybrid inverters from trusted brands, each with
            different benefits depending on your specific needs and system configuration.
          </p>
        </div>
      )}

      {activeTab === "comparison" && (
        <div className="p-8 bg-gray-50 text-center">
          <h2 className="text-2xl font-bold mb-4">Solar PV Only vs Solar PV and Battery Storage</h2>
          <p className="mb-4">
            Solar PV systems without batteries are more affordable upfront and still provide significant savings on your
            electricity bills during daylight hours.
          </p>
          <p>
            Adding battery storage allows you to store excess energy for use at night or during outages, maximizing your
            self-consumption and providing energy security, though at a higher initial investment.
          </p>
        </div>
      )}

      {activeTab === "rebates" && (
        <div className="p-8 bg-gray-50 text-center">
          <h2 className="text-2xl font-bold mb-4">Understanding solar rebates / incentives and feed-in tariffs</h2>
          <p className="mb-4">
            The Australian government offers Small-scale Technology Certificates (STCs) which provide an upfront
            discount on your solar system installation.
          </p>
          <p className="mb-4">
            Feed-in tariffs are payments you receive from your electricity retailer for excess solar energy you export
            to the grid, though rates vary by provider and location.
          </p>
          <p>Additional state-based incentives and rebates may also be available depending on your location.</p>
        </div>
      )}

      {activeTab === "case-studies" && (
        <div className="p-8 bg-gray-50 text-center">
          <h2 className="text-2xl font-bold mb-4">Case Studies</h2>
          <p className="mb-4">
            Explore our collection of successful solar installations across various residential properties. These
            real-world examples showcase the performance, savings, and benefits our customers have experienced.
          </p>
          <p>
            Each case study includes system specifications, energy production data, and customer testimonials to help
            you understand what you can expect from your own solar investment.
          </p>
        </div>
      )}

      {activeTab === "faq" && (
        <div className="p-8 bg-gray-50">
          <h2 className="text-2xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4 text-center">
            <div>
              <h3 className="font-bold text-center">How long do solar panels last?</h3>
              <p className="text-center">
                Most quality solar panels come with a 25-30 year performance warranty and can continue producing
                electricity for even longer.
              </p>
            </div>
            <div>
              <h3 className="font-bold ">How much maintenance is required?</h3>
              <p>
                Solar systems require minimal maintenance. Occasional cleaning and an annual inspection are typically
                all that's needed.
              </p>
            </div>
            <div>
              <h3 className="font-bold">How many panels do I need?</h3>
              <p>
                This depends on your energy consumption, available roof space, and budget. We provide personalized
                assessments to determine the optimal system size for your needs.
              </p>
            </div>
          </div>
        </div>
      )}
      <QuoteRequestForm/>
      <TestimonialCarousel/>
      {/* Footer */}
      <Footer />
    </div>
  )
}