"use client"

import React from "react"
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
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="bg-background py-4 px-6 flex justify-between items-center border-b border-border section-clear layout-safe">
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
          <div className="relative h-10 w-24 border border-border">
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
          className="bg-primary text-primary-foreground px-4 py-2 rounded-full flex items-center gap-2 font-medium hover:bg-primary/90 transition-colors cursor-pointer"
        >
          <ThumbsUp className="h-5 w-5" />
          GET A FREE QUOTE
        </Link>
      </section>

      {/* Hero Section */}
      <section className="relative h-[400px] w-full section-clear layout-safe">
        <Image
          src="/images/residential_solar_bg.jpg"
          alt="Happy family with solar energy"
          fill
          className="object-cover brightness-75"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content z-20">
          <h1 className="hero-title">Residential Solar Systems</h1>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 section-clear">
        <button
          onClick={() => handleTabClick("benefit")}
          className="bg-background text-foreground py-6 px-4 content-center border border-border hover:bg-accent/20 hover:text-primary transition-colors cursor-pointer"
        >
          <div className="font-medium text-balance">How can I benefit from going solar?</div>
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
            className="mt-2 text-primary"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </button>

        <button
          onClick={() => handleTabClick("inverter")}
          className="bg-primary text-primary-foreground py-6 px-4 flex items-center justify-center text-center hover:bg-primary/90 transition-colors cursor-pointer"
        >
          <div className="font-medium">Inverter info</div>
        </button>

        <button
          onClick={() => handleTabClick("comparison")}
          className="bg-accent text-accent-foreground py-6 px-4 flex items-center justify-center text-center hover:bg-accent/90 transition-colors cursor-pointer"
        >
          <div className="font-medium">Solar PV Only vs Solar PV and Battery Storage</div>
        </button>

        <button
          onClick={() => handleTabClick("rebates")}
          className="bg-primary text-white py-6 px-4 flex items-center justify-center text-center hover:bg-primary transition-colors cursor-pointer"
        >
          <div className="font-medium">Understanding solar rebates / incentives and feed-in tariffs</div>
        </button>

        <button
          onClick={() => handleTabClick("case-studies")}
          className="bg-gray-800 text-white py-6 px-4 flex items-center justify-center text-center hover:bg-gray-700 transition-colors cursor-pointer"
        >
          <div className="font-medium">Case Studies</div>
        </button>

        <button
          onClick={() => handleTabClick("faq")}
          className="bg-black text-white py-6 px-4 flex items-center justify-center text-center hover:bg-gray-900 transition-colors cursor-pointer"
        >
          <div className="font-medium">Frequently asked questions</div>
        </button>
      </section>

      {/* Tab Content */}
      {activeTab === "benefit" && (
        <section className="p-8 bg-muted/50 text-center section-clear">
          <h2 className="text-2xl font-bold mb-4">How can I benefit from going solar?</h2>
          <p className="mb-4">
            Installing solar panels can significantly reduce your electricity bills, allowing you to generate your own
            clean energy. You'll be less dependent on the grid and protected from rising energy costs.
          </p>
          <p>
            Additionally, solar systems increase your property value, reduce your carbon footprint, and may qualify you
            for government incentives and rebates.
          </p>
        </section>
      )}

      {activeTab === "inverter" && (
        <section className="p-8 bg-muted/50 text-center section-clear">
          <h2 className="text-2xl font-bold mb-4">Inverter Info</h2>
          <p className="mb-4">
            Inverters are a crucial component of your solar system, converting DC electricity generated by your panels
            into AC electricity that can be used in your home.
          </p>
          <p>
            We offer high-quality string inverters, microinverters, and hybrid inverters from trusted brands, each with
            different benefits depending on your specific needs and system configuration.
          </p>
        </section>
      )}

      {activeTab === "comparison" && (
        <section className="p-8 bg-muted/50 text-center section-clear">
          <h2 className="text-2xl font-bold mb-4">Solar PV Only vs Solar PV and Battery Storage</h2>
          <p className="mb-4">
            Solar PV systems without batteries are more affordable upfront and still provide significant savings on your
            electricity bills during daylight hours.
          </p>
          <p>
            Adding battery storage allows you to store excess energy for use at night or during outages, maximizing your
            self-consumption and providing energy security, though at a higher initial investment.
          </p>
        </section>
      )}

      {activeTab === "rebates" && (
        <section className="p-8 bg-muted/50 text-center section-clear">
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
        </section>
      )}

      {activeTab === "case-studies" && (
        <section className="p-8 bg-muted/50 text-center section-clear">
          <h2 className="text-2xl font-bold mb-4">Case Studies</h2>
          <p className="mb-4">
            Explore our collection of successful solar installations across various residential properties. These
            real-world examples showcase the performance, savings, and benefits our customers have experienced.
          </p>
          <p>
            Each case study includes system specifications, energy production data, and customer testimonials to help
            you understand what you can expect from your own solar investment.
          </p>
        </section>
      )}

      {activeTab === "faq" && (
        <section className="p-8 bg-muted/50 section-clear">
          <h2 className="text-2xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
          <div className="space-content text-center">
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
        </section>
      )}

      {/* Quote Request Section */}
      <section className="section-clear section-separator">
        <QuoteRequestForm />
      </section>

      {/* Testimonials Section */}
      <section className="section-clear section-separator">
        <TestimonialCarousel />
      </section>

      {/* Footer */}
      <footer className="relative z-10">
        <Footer />
      </footer>
    </main>
  )
}