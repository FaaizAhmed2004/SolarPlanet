"use client"

import Footer from "@/components/Footer/Footer"
import Navbar from "@/components/Navbar/navbar"
import QuoteRequestForm from "@/components/Qoute/Qoute"
import { ArrowDown } from "lucide-react"
import Image from "next/image"
import { useState, useRef } from "react"

export default function ElectrifyHome() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const contentRef = useRef<HTMLDivElement>(null)

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

      {/* Navigation Menu */}
      <div className="grid grid-cols-1 md:grid-cols-5">
        {/* White Section */}
        <div
          className="bg-white p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-all hover:shadow-lg"
          onClick={() => handleCardClick("home")}
        >
          <h2 className="text-red-600 font-bold mb-4">
            Electrify My Home | <br />
            Efficient <br />
            Electric Home Melbourne
          </h2>
          <ArrowDown className="text-red-600 mt-2" size={24} />
        </div>

        {/* Yellow Section */}
        <div
          className={`bg-amber-400 p-6 flex items-center justify-center text-center cursor-pointer transition-all hover:shadow-lg ${activeSection === "why" ? "ring-4 ring-amber-600" : ""}`}
          onClick={() => handleCardClick("why")}
        >
          <h2 className="font-medium">Why electrify your home?</h2>
        </div>

        {/* Orange Section */}
        <div
          className={`bg-orange-400 p-6 flex items-center justify-center text-center cursor-pointer transition-all hover:shadow-lg ${activeSection === "how" ? "ring-4 ring-orange-600" : ""}`}
          onClick={() => handleCardClick("how")}
        >
          <h2 className="font-medium">How to switch to electric...</h2>
        </div>

        {/* Red Section */}
        <div
          className={`bg-red-600 p-6 flex items-center justify-center text-center text-white cursor-pointer transition-all hover:shadow-lg ${activeSection === "worth" ? "ring-4 ring-red-800" : ""}`}
          onClick={() => handleCardClick("worth")}
        >
          <h2 className="font-medium">
            Is it worth it? <br />
            How much can you save?
          </h2>
        </div>

        {/* Black Section */}
        <div
          className={`bg-black p-6 flex items-center justify-center text-center text-white cursor-pointer transition-all hover:shadow-lg ${activeSection === "faq" ? "ring-4 ring-gray-600" : ""}`}
          onClick={() => handleCardClick("faq")}
        >
          <h2 className="font-medium">
            Frequently Asked <br />
            Questions
          </h2>
        </div>
      </div>

      {/* Content Area */}
      <div ref={contentRef} className="flex-grow p-8 max-w-5xl mx-auto">
        {activeSection === "home" && (
          <div className="animate-fadeIn">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Welcome to Electrify My Home</h2>
            <p className="mb-4">
              We help Melbourne homeowners transition to efficient, all-electric homes. Our expert team provides
              guidance on replacing gas appliances with modern electric alternatives, reducing your carbon footprint and
              energy bills.
            </p>
            <p>
              Explore our resources to learn why electrification is the future of sustainable living in Melbourne and
              how you can make the switch today.
            </p>
          </div>
        )}

        {activeSection === "why" && (
          <div className="animate-fadeIn">
            <h2 className="text-2xl font-bold text-amber-600 mb-4">Why Electrify Your Home?</h2>
            <ul className="list-disc pl-5 space-y-3">
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
          <div className="animate-fadeIn">
            <h2 className="text-2xl font-bold text-orange-600 mb-4">How to Switch to Electric</h2>
            <ol className="list-decimal pl-5 space-y-4">
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
          <div className="animate-fadeIn">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Is It Worth It? How Much Can You Save?</h2>
            <p className="mb-4">
              The financial benefits of electrification depend on your specific situation, but many Melbourne homeowners
              see significant savings:
            </p>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <h3 className="font-bold mb-2">Potential Savings:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Eliminate gas supply charges (typically $250-350 per year)</li>
                <li>Heat pump hot water systems are 3-4 times more efficient than gas</li>
                <li>Heat pump heating/cooling can save 40-60% on heating costs</li>
                <li>Solar panels can offset much of your electricity usage</li>
              </ul>
            </div>
            <p>
              While upfront costs for new appliances exist, government rebates and incentives can significantly reduce
              these expenses. Most homeowners see a return on investment within 5-7 years, with ongoing savings
              thereafter.
            </p>
          </div>
        )}

        {activeSection === "faq" && (
          <div className="animate-fadeIn">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold">Do I need to electrify everything at once?</h3>
                <p>No, you can take a staged approach based on your budget and when appliances need replacement.</p>
              </div>
              <div>
                <h3 className="font-bold">Will electric appliances work during power outages?</h3>
                <p>
                  Without battery storage, electric appliances won't work during outages. We can discuss battery options
                  if this is a concern.
                </p>
              </div>
              <div>
                <h3 className="font-bold">Is induction cooking as good as gas?</h3>
                <p>Many professional chefs now prefer induction for its precision, speed, safety, and cleanliness.</p>
              </div>
              <div>
                <h3 className="font-bold">Will electrification increase my electricity bill?</h3>
                <p>
                  Your electricity usage will increase, but your total energy costs (electricity + gas) typically
                  decrease due to greater efficiency.
                </p>
              </div>
              <div>
                <h3 className="font-bold">Are there government rebates available?</h3>
                <p>
                  Yes, Victoria offers various rebates for electric appliances and energy efficiency upgrades. We can
                  help you navigate available incentives.
                </p>
              </div>
            </div>
          </div>
        )}

        {!activeSection && (
          <div className="text-center text-gray-500 py-10">
            <p>Click on any section above to learn more</p>
          </div>
        )}
      </div>
        <QuoteRequestForm/>
      {/* Footer */}
      <div className="p-6 text-center border-t">
        <h3 className="text-red-600 font-medium tracking-wider">
          ELECTRIFY MY HOME | EFFICIENT ELECTRIC HOME MELBOURNE
        </h3>
      </div>
      <Footer/>
    </div>
    </>
  )
}



