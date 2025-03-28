"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import QuoteRequestForm from "@/components/Qoute/Qoute"
import Footer from "@/components/Footer/Footer"
import Navbar from "@/components/Navbar/navbar"

export default function EVChargingPage() {
  const [activeTab, setActiveTab] = useState("solutions")

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId)

    // Smooth scroll to content section
    const element = document.getElementById(`${tabId}-content`)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <>
    <Navbar/>
    <div className="relative w-full">
      {/* Hero Background Image */}
      <div className="relative w-full h-[500px] overflow-hidden">
        <Image
          src="/images/banner_heatpump-1.jpg"
          alt="EV Charging Solutions Background"
          fill
          className="object-cover"
          priority
        />

        {/* Hero Title Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center px-4 max-w-5xl">
            Our EV Charging Solutions (For Home & For Commercial)
          </h1>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="w-full flex flex-col md:flex-row">
        {/* Tab 1 */}
        <button
          onClick={() => handleTabClick("solutions")}
          className={`bg-white text-center py-6 px-4 flex-1 flex flex-col items-center justify-center transition-colors ${
            activeTab === "solutions" ? "bg-white" : "bg-white hover:bg-gray-50"
          }`}
        >
          <span className="text-red-600 font-medium text-lg md:text-xl">
            Our EV Charging Solutions
            <br />
            (For Home & For Commercial)
          </span>
          <ChevronDown className="text-red-600 mt-2 h-6 w-6" />
        </button>

        {/* Tab 2 */}
        <button
          onClick={() => handleTabClick("why-choose")}
          className={`text-center py-6 px-4 flex-1 flex items-center justify-center transition-colors ${
            activeTab === "why-choose" ? "bg-amber-500 text-white" : "bg-amber-400 text-white hover:bg-amber-500"
          }`}
        >
          <span className="font-medium text-lg md:text-xl">
            Why Choose the Electric
            <br />
            Vehicle Charging System -
            <br />
            Tesla Wall Connector?
          </span>
        </button>

        {/* Tab 3 */}
        <button
          onClick={() => handleTabClick("installation")}
          className={`text-center py-6 px-4 flex-1 flex items-center justify-center transition-colors ${
            activeTab === "installation" ? "bg-amber-400 text-white" : "bg-amber-300 text-white hover:bg-amber-400"
          }`}
        >
          <span className="font-medium text-lg md:text-xl">Installation & Cost</span>
        </button>

        {/* Tab 4 */}
        <button
          onClick={() => handleTabClick("faq")}
          className={`text-center py-6 px-4 flex-1 flex items-center justify-center transition-colors ${
            activeTab === "faq" ? "bg-gray-900 text-white" : "bg-black text-white hover:bg-gray-900"
          }`}
        >
          <span className="font-medium text-lg md:text-xl">
            Frequently Asked
            <br />
            Questions
          </span>
        </button>
      </div>

      {/* Content Sections */}
      <div className="bg-gray-50">
        {/* Solutions Content */}
        <div
          id="solutions-content"
          className={`p-8 md:p-16 transition-all duration-300 ${activeTab === "solutions" ? "block" : "hidden"}`}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Our EV Charging Solutions</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Home Charging Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Our home charging solutions provide convenient, efficient charging for your electric vehicle right at
                  your residence. With smart features and sleek designs, our home chargers integrate seamlessly with
                  your property.
                </p>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  <li>Level 2 charging (240V)</li>
                  <li>Smart scheduling and monitoring</li>
                  <li>Energy usage tracking</li>
                  <li>Weatherproof design</li>
                  <li>Compatible with all EV models</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Commercial Charging Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Our commercial charging stations are designed for businesses, multi-unit dwellings, and public spaces.
                  Attract customers, provide value to tenants, and demonstrate your commitment to sustainability.
                </p>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  <li>Multiple charging ports</li>
                  <li>Payment processing options</li>
                  <li>Load management capabilities</li>
                  <li>Remote monitoring and diagnostics</li>
                  <li>Customizable branding options</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Content */}
        <div
          id="why-choose-content"
          className={`p-8 md:p-16 transition-all duration-300 ${activeTab === "why-choose" ? "block" : "hidden"}`}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Why Choose the Tesla Wall Connector?</h2>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Fast Charging</h3>
                  <p className="text-gray-600">
                    Up to 44 miles of range per hour of charging, depending on your vehicle model.
                  </p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Reliable & Safe</h3>
                  <p className="text-gray-600">
                    Built with safety features and designed for indoor and outdoor installation.
                  </p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Smart Features</h3>
                  <p className="text-gray-600">
                    Wi-Fi connectivity for over-the-air updates and remote access features.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-600 text-lg">
              The Tesla Wall Connector is a home charging solution designed to maximize charging speeds for Tesla
              vehicles. With customizable power levels and Wi-Fi connectivity, it offers convenience and flexibility for
              Tesla owners.
            </p>
          </div>
        </div>

        {/* Installation Content */}
        <div
          id="installation-content"
          className={`p-8 md:p-16 transition-all duration-300 ${activeTab === "installation" ? "block" : "hidden"}`}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Installation & Cost</h2>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Installation Process</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center flex-shrink-0 mr-4">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">Site Assessment</h4>
                    <p className="text-gray-600">
                      Our certified electricians will evaluate your electrical panel, wiring, and installation location
                      to determine requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center flex-shrink-0 mr-4">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">Permit Acquisition</h4>
                    <p className="text-gray-600">
                      We handle all necessary permits and paperwork required by your local jurisdiction.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center flex-shrink-0 mr-4">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">Installation</h4>
                    <p className="text-gray-600">
                      Professional installation by our experienced technicians, typically completed in 2-4 hours.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center flex-shrink-0 mr-4">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">Inspection & Activation</h4>
                    <p className="text-gray-600">
                      Final inspection and system activation, including demonstration of features and functionality.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Cost Breakdown</h3>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Component
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Price Range
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Notes
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Charging Equipment
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$500 - $1,500</td>
                      <td className="px-6 py-4 text-sm text-gray-500">Varies by model and features</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Installation Labor
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$300 - $1,000</td>
                      <td className="px-6 py-4 text-sm text-gray-500">Depends on complexity and location</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Electrical Upgrades
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$0 - $2,000</td>
                      <td className="px-6 py-4 text-sm text-gray-500">If panel upgrade is required</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Permits & Inspections
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$100 - $400</td>
                      <td className="px-6 py-4 text-sm text-gray-500">Varies by location</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-6 text-gray-600">
                <strong>Note:</strong> Many utility companies and government agencies offer rebates and incentives that
                can significantly reduce the total cost of installation.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Content */}
        <div
          id="faq-content"
          className={`p-8 md:p-16 transition-all duration-300 ${activeTab === "faq" ? "block" : "hidden"}`}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">How long does it take to charge my EV?</h3>
                <p className="text-gray-600">
                  Charging time depends on your vehicle's battery size, the charger's power output, and your current
                  battery level. With a Level 2 home charger, most EVs can be fully charged overnight (6-10 hours).
                  Commercial fast chargers can provide 80% charge in 30-60 minutes.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Do I need to upgrade my electrical panel?</h3>
                <p className="text-gray-600">
                  It depends on your home's electrical capacity. Most homes built in the last 20 years can accommodate a
                  Level 2 charger without upgrades. Our technicians will assess your electrical panel during the site
                  evaluation to determine if any upgrades are necessary.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Can I install a charger in my condo or apartment?
                </h3>
                <p className="text-gray-600">
                  Installation in multi-unit dwellings requires approval from property management or HOA. We can work
                  with your building management to explore options, including dedicated circuits, shared charging
                  stations, or power management systems.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Are there tax incentives available for installing EV chargers?
                </h3>
                <p className="text-gray-600">
                  Yes, many federal, state, and local incentives are available. The federal tax credit covers 30% of the
                  cost of equipment and installation (up to $1,000 for residential and $30,000 for commercial).
                  Additional utility rebates may also be available in your area.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  What maintenance is required for EV charging stations?
                </h3>
                <p className="text-gray-600">
                  EV chargers require minimal maintenance. We recommend periodic inspection of cables for wear, keeping
                  the connector clean, and ensuring the unit is protected from extreme weather. Our commercial solutions
                  include maintenance plans with regular servicing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <QuoteRequestForm/>
    <Footer/>
    </>
  )
}

