"use client"

import Image from "next/image"
import { useState } from "react"

export default function CaseStudiesGrid() {
  // State to track which case study is expanded (if any)
  const [expandedStudy, setExpandedStudy] = useState<string | null>(null)

  // Toggle expanded state for a case study
  const toggleExpand = (id: string) => {
    if (expandedStudy === id) {
      setExpandedStudy(null)
    } else {
      setExpandedStudy(id)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Residential Column */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Residential</h2>

          {/* Case Study 1 */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-2">
              <div className="md:w-1/3 flex-shrink-0">
                <Image
                  src="/images/solarpanel.jpg"
                  alt="Michele - Malvern Solar Installation"
                  width={300}
                  height={200}
                  className="rounded-md object-cover w-full h-auto"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-semibold mb-2">Michele - Malvern</h3>
                <p className="text-gray-700">
                  There were some challenges due limited roof space and roof obstructions. With a double storey
                  installation, it is important to use products with low failure rate as warranty replacements will be
                  more challenging in future.
                </p>
                <button
                  onClick={() => toggleExpand("michele")}
                  className="text-blue-600 font-medium mt-2 flex items-center"
                >
                  {expandedStudy === "michele" ? "Show less" : "Read more"}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 ml-1 transition-transform ${expandedStudy === "michele" ? "rotate-180" : ""}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {expandedStudy === "michele" && (
              <div className="bg-gray-50 p-4 rounded-md mt-2 animate-fadeIn">
                <h4 className="font-semibold mb-2">Solution Provided:</h4>
                <p className="text-gray-700 mb-3">
                  We installed a 6.6kW system using high-efficiency panels to maximize energy production despite the
                  limited roof space. The premium panels we selected come with a 25-year product warranty and 92%
                  performance guarantee after 25 years.
                </p>
                <h4 className="font-semibold mb-2">Results:</h4>
                <p className="text-gray-700">
                  Michele's system is now generating approximately 8,900 kWh annually, reducing her electricity bills by
                  85% and providing an estimated payback period of 4.2 years.
                </p>
              </div>
            )}
          </div>

          {/* Case Study 2 */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-2">
              <div className="md:w-1/3 flex-shrink-0">
                <Image
                  src="/images/familu.jpg"
                  alt="Olwyn - Ferny Creek Solar Installation"
                  width={300}
                  height={200}
                  className="rounded-md object-cover w-full h-auto"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-semibold mb-2">Olwyn - Ferny Creek</h3>
                <p className="text-gray-700">
                  Customer resides in an area of widespread shading and also requires battery back-up capability due to
                  frequent and extended grid power outages.
                </p>
                <button
                  onClick={() => toggleExpand("olwyn")}
                  className="text-blue-600 font-medium mt-2 flex items-center"
                >
                  {expandedStudy === "olwyn" ? "Show less" : "Read more"}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 ml-1 transition-transform ${expandedStudy === "olwyn" ? "rotate-180" : ""}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {expandedStudy === "olwyn" && (
              <div className="bg-gray-50 p-4 rounded-md mt-2 animate-fadeIn">
                <h4 className="font-semibold mb-2">Solution Provided:</h4>
                <p className="text-gray-700 mb-3">
                  We installed a system with microinverters to minimize the impact of partial shading, along with a
                  10kWh battery storage system with blackout protection. The system was designed to prioritize charging
                  the battery during peak sunlight hours.
                </p>
                <h4 className="font-semibold mb-2">Results:</h4>
                <p className="text-gray-700">
                  Olwyn now has reliable power during outages, which typically occur 8-10 times per year in their area.
                  The system provides approximately 75% energy self-sufficiency, with the battery covering essential
                  loads during nighttime and cloudy days.
                </p>
              </div>
            )}
          </div>

          {/* Case Study 3 */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-2">
              <div className="md:w-1/3 flex-shrink-0">
                <Image
                  src="/images/total-solar-main.jpg"
                  alt="Gary - Boronia Solar Installation"
                  width={300}
                  height={200}
                  className="rounded-md object-cover w-full h-auto"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-semibold mb-2">Gary - Boronia</h3>
                <p className="text-gray-700">
                  Gary wanted to go with a local company with a good reputation. His roof presented some restrictions
                  with design due to limited roof space, orientation of panels and some shading from trees and
                  obstructions on his roof.
                </p>
                <button
                  onClick={() => toggleExpand("gary")}
                  className="text-blue-600 font-medium mt-2 flex items-center"
                >
                  {expandedStudy === "gary" ? "Show less" : "Read more"}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 ml-1 transition-transform ${expandedStudy === "gary" ? "rotate-180" : ""}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {expandedStudy === "gary" && (
              <div className="bg-gray-50 p-4 rounded-md mt-2 animate-fadeIn">
                <h4 className="font-semibold mb-2">Solution Provided:</h4>
                <p className="text-gray-700 mb-3">
                  We designed a custom 5.2kW system that maximized the available roof space while working around the
                  shading issues. We used optimizers on panels affected by shade to ensure the system's overall
                  performance wouldn't be compromised.
                </p>
                <h4 className="font-semibold mb-2">Results:</h4>
                <p className="text-gray-700">
                  Despite the challenging roof conditions, Gary's system is performing at 95% of its theoretical maximum
                  output. He's seeing average monthly savings of $180 on his electricity bills and has referred three
                  neighbors to our company.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Commercial Column */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Commercial</h2>

          {/* Case Study 1 */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-2">
              <div className="md:w-1/3 flex-shrink-0">
                <Image
                  src="/images/wearhouse.jpg"
                  alt="Retirement Village - Pakenham Solar Installation"
                  width={300}
                  height={200}
                  className="rounded-md object-cover w-full h-auto"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-semibold mb-2">Retirement Village - Pakenham</h3>
                <p className="text-gray-700">
                  In August 2024, our team of installers completed a 97kw solar system for a large Retirement Village in
                  the outer South-Eastern suburbs wanted to save money on their electrical bills running the Community
                  Centre/Clubhouse.
                </p>
                <button
                  onClick={() => toggleExpand("retirement")}
                  className="text-blue-600 font-medium mt-2 flex items-center"
                >
                  {expandedStudy === "retirement" ? "Show less" : "Read more"}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 ml-1 transition-transform ${expandedStudy === "retirement" ? "rotate-180" : ""}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {expandedStudy === "retirement" && (
              <div className="bg-gray-50 p-4 rounded-md mt-2 animate-fadeIn">
                <h4 className="font-semibold mb-2">Solution Provided:</h4>
                <p className="text-gray-700 mb-3">
                  We installed a 97kW commercial system across multiple roof areas of the community center. The
                  installation included 242 high-efficiency panels and 3 commercial-grade inverters with remote
                  monitoring capabilities.
                </p>
                <h4 className="font-semibold mb-2">Results:</h4>
                <p className="text-gray-700">
                  The system is projected to save the retirement village approximately $32,000 annually on electricity
                  costs. With the current usage patterns, the system will pay for itself in under 4 years while reducing
                  carbon emissions by approximately 120 tonnes per year.
                </p>
              </div>
            )}
          </div>

          {/* Case Study 2 */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-2">
              <div className="md:w-1/3 flex-shrink-0">
                <Image
                  src="/images/tesla.jpg"
                  alt="GLASS EXPANSION - PORT MELBOURNE Solar Installation"
                  width={300}
                  height={200}
                  className="rounded-md object-cover w-full h-auto"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-semibold mb-2">GLASS EXPANSION - PORT MELBOURNE</h3>
                <p className="text-gray-700">
                  Large manufacturer of specialised medical glass products. Total Solar was approached as Glass
                  Expansion sought to deal with a reputable installer who could provide quality advice and installation.
                </p>
                <button
                  onClick={() => toggleExpand("glass")}
                  className="text-blue-600 font-medium mt-2 flex items-center"
                >
                  {expandedStudy === "glass" ? "Show less" : "Read more"}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 ml-1 transition-transform ${expandedStudy === "glass" ? "rotate-180" : ""}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {expandedStudy === "glass" && (
              <div className="bg-gray-50 p-4 rounded-md mt-2 animate-fadeIn">
                <h4 className="font-semibold mb-2">Solution Provided:</h4>
                <p className="text-gray-700 mb-3">
                  After a detailed energy audit, we designed and installed a 120kW system optimized for their
                  manufacturing facility's energy consumption patterns. The system included a monitoring platform that
                  integrates with their existing building management system.
                </p>
                <h4 className="font-semibold mb-2">Results:</h4>
                <p className="text-gray-700">
                  The solar system now offsets approximately 40% of Glass Expansion's total energy consumption,
                  resulting in annual savings of $45,000. The company has also been able to promote their reduced carbon
                  footprint to environmentally conscious clients in the medical sector.
                </p>
              </div>
            )}
          </div>

          {/* Case Study 3 */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-2">
              <div className="md:w-1/3 flex-shrink-0">
                <Image
                  src="/images/tradie_wraps.png"
                  alt="Tradie Wraps By MotoSign Solar Installation"
                  width={300}
                  height={200}
                  className="rounded-md object-cover w-full h-auto"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-semibold mb-2">Tradie Wraps By MotoSign goes Green!</h3>
                <p className="text-gray-700">
                  Recently we assisted local company, TradieWraps go green on their Kilsyth HQ!
                </p>
                <button
                  onClick={() => toggleExpand("tradie")}
                  className="text-blue-600 font-medium mt-2 flex items-center"
                >
                  {expandedStudy === "tradie" ? "Show less" : "Read more"}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 ml-1 transition-transform ${expandedStudy === "tradie" ? "rotate-180" : ""}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {expandedStudy === "tradie" && (
              <div className="bg-gray-50 p-4 rounded-md mt-2 animate-fadeIn">
                <h4 className="font-semibold mb-2">Solution Provided:</h4>
                <p className="text-gray-700 mb-3">
                  We installed a 30kW system on TradieWraps' workshop roof, designed to offset the high energy
                  consumption of their printing and application equipment. The installation was completed over a weekend
                  to avoid disrupting their business operations.
                </p>
                <h4 className="font-semibold mb-2">Results:</h4>
                <p className="text-gray-700">
                  TradieWraps has reduced their carbon footprint by approximately 35 tonnes per year and is saving
                  around $12,000 annually on electricity costs. They've also incorporated their new green credentials
                  into their marketing materials, attracting environmentally conscious clients.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

