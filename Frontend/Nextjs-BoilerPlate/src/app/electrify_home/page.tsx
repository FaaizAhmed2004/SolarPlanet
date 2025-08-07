"use client"

import Footer from "@/components/Footer/Footer"
import Navbar from "@/components/Navbar/navbar"
import QuoteRequestForm from "@/components/Qoute/Qoute"
import SEOHead from "@/components/SEO/SEOHead"
import { getSEOConfig } from "@/lib/seo-config"
import { ArrowDown } from "lucide-react"
import Image from "next/image"
import { useState, useRef } from "react"

export default function ElectrifyHome() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const seoConfig = getSEOConfig('electrifyHome')

  const handleCardClick = (section: string) => {
    setActiveSection(section === activeSection ? null : section)

    // Scroll to content area after a short delay to allow state update
    setTimeout(() => {
      if (contentRef.current) {
        contentRef.current.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  return (
    <>
    <SEOHead {...seoConfig} />
    <Navbar/>
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Background Image */}
      <div className="relative w-full h-[500px]">
        <Image
          src="/images/banner_heatpump-1.jpg"
          alt="Hexagonal wall with green plants"
          fill
          className="object-cover"
          priority
        />

        {/* Hero Title Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
            Electrify My Home | Efficient Electric Home Melbourne
          </h1>
        </div>
      </div>

      {/* Navigation Menu - Optimized Responsive Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-1">
        {/* White Section */}
        <div
          className="bg-background p-3 sm:p-4 content-center cursor-pointer transition-all hover:shadow-lg hover:scale-105 min-h-[120px] sm:min-h-[140px] lg:min-h-[160px]"
          onClick={() => handleCardClick("home")}
        >
          <h2 className="text-primary font-bold text-sm sm:text-base mb-2">
            Electrify My Home | <br />
            Efficient <br />
            Electric Home Melbourne
          </h2>
          <ArrowDown className="text-primary mt-1" size={18} />
        </div>

        {/* Yellow Section */}
        <div
          className={`bg-accent p-3 sm:p-4 flex items-center justify-center text-center cursor-pointer transition-all hover:shadow-lg hover:scale-105 min-h-[120px] sm:min-h-[140px] lg:min-h-[160px] ${activeSection === "why" ? "ring-2 ring-amber-600" : ""}`}
          onClick={() => handleCardClick("why")}
        >
          <h2 className="font-medium text-sm sm:text-base">Why electrify your home?</h2>
        </div>

        {/* Orange Section */}
        <div
          className={`bg-orange-400 p-3 sm:p-4 flex items-center justify-center text-center cursor-pointer transition-all hover:shadow-lg hover:scale-105 min-h-[120px] sm:min-h-[140px] lg:min-h-[160px] ${activeSection === "how" ? "ring-2 ring-orange-600" : ""}`}
          onClick={() => handleCardClick("how")}
        >
          <h2 className="font-medium text-sm sm:text-base">How to switch to electric...</h2>
        </div>

        {/* Red Section */}
        <div
          className={`bg-primary p-3 sm:p-4 flex items-center justify-center text-center text-white cursor-pointer transition-all hover:shadow-lg hover:scale-105 min-h-[120px] sm:min-h-[140px] lg:min-h-[160px] ${activeSection === "worth" ? "ring-2 ring-red-800" : ""}`}
          onClick={() => handleCardClick("worth")}
        >
          <h2 className="font-medium text-sm sm:text-base">
            Is it worth it? <br />
            How much can you save?
          </h2>
        </div>

        {/* Black Section */}
        <div
          className={`bg-black p-3 sm:p-4 flex items-center justify-center text-center text-white cursor-pointer transition-all hover:shadow-lg hover:scale-105 min-h-[120px] sm:min-h-[140px] lg:min-h-[160px] ${activeSection === "faq" ? "ring-2 ring-gray-600" : ""}`}
          onClick={() => handleCardClick("faq")}
        >
          <h2 className="font-medium text-sm sm:text-base">
            Frequently Asked <br />
            Questions
          </h2>
        </div>
      </div>

      {/* Content Area - Optimized Responsive Layout */}
      <div ref={contentRef} className="flex-grow p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto">
        {activeSection === "home" && (
          <div className="animate-fadeIn space-content">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-3">Welcome to Electrify My Home</h2>
            <p className="text-sm sm:text-base mb-3">
              We help Melbourne homeowners transition to efficient, all-electric homes. Our expert team provides
              guidance on replacing gas appliances with modern electric alternatives, reducing your carbon footprint and
              energy bills.
            </p>
            <p className="text-sm sm:text-base">
              Explore our resources to learn why electrification is the future of sustainable living in Melbourne and
              how you can make the switch today.
            </p>
          </div>
        )}

        {activeSection === "why" && (
          <div className="animate-fadeIn space-content">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-amber-600 mb-3">Why Electrify Your Home?</h2>
            <ul className="list-disc pl-4 sm:pl-5 space-y-2 text-sm sm:text-base">
              <li>Reduce your carbon footprint and help combat climate change</li>
              <li>Modern electric appliances are more efficient than gas alternatives</li>
              <li>Improve indoor air quality by eliminating gas combustion</li>
              <li>Take advantage of renewable energy from solar panels</li>
              <li>Future-proof your home as Australia transitions to clean energy</li>
              <li>Potential for significant long-term cost savings</li>
            </ul>
          </div>
        )}

        {activeSection === "how" && (
          <div className="animate-fadeIn space-content">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-orange-600 mb-3">How to Switch to Electric</h2>
            <ol className="list-decimal pl-4 sm:pl-5 space-y-2 text-sm sm:text-base">
              <li>
                <strong>Assessment:</strong> We'll evaluate your current gas appliances and recommend electric
                alternatives.
              </li>
              <li>
                <strong>Planning:</strong> Create a transition plan that works with your budget and timeline.
              </li>
              <li>
                <strong>Electrical Upgrades:</strong> Ensure your electrical system can handle new appliances.
              </li>
              <li>
                <strong>Installation:</strong> Replace gas appliances with heat pumps, induction cooktops, and other
                electric alternatives.
              </li>
              <li>
                <strong>Solar Integration:</strong> Consider adding solar panels to maximize savings.
              </li>
              <li>
                <strong>Gas Disconnection:</strong> Once fully electric, you can disconnect gas service and eliminate
                the supply charge.
              </li>
            </ol>
          </div>
        )}

        {activeSection === "worth" && (
          <div className="animate-fadeIn space-content">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-3">Is It Worth It? How Much Can You Save?</h2>
            <p className="text-sm sm:text-base mb-3">
              The financial benefits of electrification depend on your specific situation, but many Melbourne homeowners
              see significant savings:
            </p>
            <div className="bg-muted p-3 sm:p-4 rounded-lg mb-3">
              <h3 className="font-bold text-sm sm:text-base mb-2">Potential Savings:</h3>
              <ul className="list-disc pl-4 sm:pl-5 space-y-1 text-xs sm:text-sm">
                <li>Eliminate gas supply charges (typically $250-350 per year)</li>
                <li>Heat pump hot water systems are 3-4 times more efficient than gas</li>
                <li>Heat pump heating/cooling can save 40-60% on heating costs</li>
                <li>Solar panels can offset much of your electricity usage</li>
              </ul>
            </div>
            <p className="text-sm sm:text-base">
              While upfront costs for new appliances exist, government rebates and incentives can significantly reduce
              these expenses. Most homeowners see a return on investment within 5-7 years, with ongoing savings
              thereafter.
            </p>
          </div>
        )}

        {activeSection === "faq" && (
          <div className="animate-fadeIn space-content">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3">Frequently Asked Questions</h2>
            <div className="space-y-3">
              <div className="border-b border-border pb-2">
                <h3 className="font-bold text-sm sm:text-base">Do I need to electrify everything at once?</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">No, you can take a staged approach based on your budget and when appliances need replacement.</p>
              </div>
              <div className="border-b border-border pb-2">
                <h3 className="font-bold text-sm sm:text-base">Will electric appliances work during power outages?</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Without battery storage, electric appliances won't work during outages. We can discuss battery options
                  if this is a concern.
                </p>
              </div>
              <div className="border-b border-border pb-2">
                <h3 className="font-bold text-sm sm:text-base">Is induction cooking as good as gas?</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Many professional chefs now prefer induction for its precision, speed, safety, and cleanliness.</p>
              </div>
              <div className="border-b border-border pb-2">
                <h3 className="font-bold text-sm sm:text-base">Will electrification increase my electricity bill?</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Your electricity usage will increase, but your total energy costs (electricity + gas) typically
                  decrease due to greater efficiency.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base">Are there government rebates available?</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Yes, Victoria offers various rebates for electric appliances and energy efficiency upgrades. We can
                  help you navigate available incentives.
                </p>
              </div>
            </div>
          </div>
        )}

        {!activeSection && (
          <div className="text-center text-subtle py-6 sm:py-8 lg:py-10">
            <p className="text-sm sm:text-base">Click on any section above to learn more</p>
          </div>
        )}
      </div>
        <QuoteRequestForm/>
      {/* Footer */}
      <div className="p-6 text-center border-t">
        <h3 className="text-primary font-medium tracking-wider">
          ELECTRIFY MY HOME | EFFICIENT ELECTRIC HOME MELBOURNE
        </h3>
      </div>
      <Footer/>
    </div>
    </>
  )
}



