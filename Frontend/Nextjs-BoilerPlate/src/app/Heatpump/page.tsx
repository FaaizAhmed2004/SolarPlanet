"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Navbar from "@/components/Navbar/navbar"
import QuoteRequestForm from "@/components/Qoute/Qoute"
import Footer from "@/components/Footer/Footer"

export default function HeatPumpPage() {
  const [activeCard, setActiveCard] = useState<number | null>(1) // Default to first card

  const cards = [
    {
      id: 1,
      title: "Why A Reclaim\nHeat Pump",
      bgColor: "bg-white",
      textColor: "text-red-600",
      content:
        "A Reclaim Energy Heat Pump Hot Water System requires much less electricity to heat water when compared to conventional hot water systems.\n\nIn Australia, our electricity prices continue to increase, and an electric hot water system contributes significantly to a household's energy costs. Comprehensive savings can be made by using a more efficient hot water system, up to 80% on conventional electric system.\n\nReclaim Energy CO2 Heat Pumps use natural refrigerant (CO2) which is environmentally friendly with a Global Warming Potential (GWP) of 1, compared to other refrigerants that have GWP values in the thousands. This makes our heat pumps one of the most environmentally friendly water heating options available.",
    },
    {
      id: 2,
      title: "How The System\nWorks",
      bgColor: "bg-amber-400",
      textColor: "text-white",
      content:
        "The Reclaim Energy CO2 heat pump works by extracting heat from the air and transferring it to water. Even in cold temperatures, there is still heat energy in the air that can be captured.\n\nThe system uses a compressor to pressurize CO2 refrigerant, which raises its temperature. This hot refrigerant then passes through a heat exchanger where it transfers its heat to the water in your tank. The CO2 refrigerant cools down and the cycle continues.\n\nUnlike conventional electric water heaters that convert electricity directly into heat, our heat pump uses electricity only to run the compressor and move heat from the air to your water. This is why it can achieve efficiency levels of up to 400%, meaning for every unit of electricity used, it can produce up to 4 units of heat energy.",
    },
    {
      id: 3,
      title: "Reclaim heat pump\nadvantages",
      bgColor: "bg-orange-400",
      textColor: "text-white",
      content:
        "The Reclaim Energy CO2 Heat Pump offers numerous advantages over traditional water heating systems:\n\n• Energy Efficiency: Uses up to 80% less electricity than conventional electric water heaters\n\n• Environmental Benefits: Uses CO2 as a natural refrigerant with minimal environmental impact\n\n• All-Weather Performance: Operates efficiently even in temperatures as low as -10°C\n\n• Long Lifespan: Designed and built for durability with high-quality components\n\n• Low Maintenance: Reliable operation with minimal maintenance requirements\n\n• Government Rebates: Eligible for STCs (Small-scale Technology Certificates) which can significantly reduce the upfront cost\n\n• Quiet Operation: Advanced design ensures minimal noise during operation",
    },
    {
      id: 4,
      title: "Smart Controller",
      bgColor: "bg-red-600",
      textColor: "text-white",
      content:
        "The Reclaim Energy Smart Controller provides intelligent management of your hot water system for maximum efficiency and convenience.\n\nFeatures include:\n\n• Intuitive touchscreen interface for easy operation\n\n• Multiple operating modes including Economy, Standard, and Boost\n\n• Programmable timer function to heat water during off-peak electricity periods\n\n• Vacation mode to save energy while you're away\n\n• Legionella prevention cycle for health and safety\n\n• System monitoring with fault detection and notification\n\n• Optional Wi-Fi connectivity for remote control via smartphone app (additional module required)",
    },
    {
      id: 5,
      title: "Brochures\nand Downloads",
      bgColor: "bg-zinc-800",
      textColor: "text-white",
      content:
        "Access our comprehensive range of product documentation to learn more about Reclaim Energy heat pump systems:\n\n• Product Brochure: Detailed information about our heat pump range\n\n• Technical Specifications: Complete technical data for installers and specifiers\n\n• Installation Manual: Step-by-step installation instructions\n\n• User Guide: Operating instructions and maintenance tips\n\n• Warranty Information: Details of our comprehensive warranty coverage\n\n• Case Studies: Real-world examples of Reclaim Energy systems in action\n\nAll documents are available in PDF format and can be downloaded instantly.",
    },
    {
      id: 6,
      title: "Frequently Asked\nQuestions",
      bgColor: "bg-black",
      textColor: "text-white",
      content:
        "Find answers to common questions about Reclaim Energy heat pump systems:\n\n• How much can I save on my energy bills?\nTypically, households save 60-80% on water heating costs compared to conventional electric systems.\n\n• What is the lifespan of a Reclaim heat pump?\nWith proper maintenance, our heat pumps are designed to last 15+ years.\n\n• Do heat pumps work in cold climates?\nYes, our CO2 heat pumps operate efficiently even in temperatures as low as -10°C.\n\n• How noisy are heat pumps?\nOur units operate at around 37dB, similar to a quiet library.\n\n• What maintenance is required?\nMinimal maintenance is needed - just an annual check of the system and cleaning of the air filter.\n\n• Are rebates available?\nYes, Reclaim Energy heat pumps are eligible for STCs which can significantly reduce the upfront cost.",
    },
  ]

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <Navbar/>
      {/* Hero Section */}
      <div className="relative h-[600px] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/banner_heatpump-1.jpg"
            alt="Heat pump background with hexagonal tiles"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
          <h2 className="text-xl md:text-2xl font-medium tracking-wider mb-6 text-center text-white">
            IT&apos;S TIME FOR MASSIVE SAVINGS OFF YOUR ENERGY BILL!
          </h2>

          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 text-white">Reclaim Heat Pump</h1>

          <p className="text-center text-white max-w-2xl mb-12">
            With our Reclaim energy CO2 Heat Pump hot water system you will use less energy than an electric water
            heater for a high thermal output.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 w-full ml-80 float-right max-w-6xl">
            {cards.map((card) => (
              <motion.div
                key={card.id}
                className={`${card.bgColor} p-6 h-32 flex flex-col items-center justify-center cursor-pointer relative overflow-hidden`}
                onClick={() => setActiveCard(card.id)}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className={`${card.textColor} text-center font-medium whitespace-pre-line`}>{card.title}</h3>

                {card.id === 1 && <ChevronDown className="text-red-600 mt-2 h-5 w-5" />}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-center text-red-600 uppercase tracking-wider font-medium mb-8">Why a Reclaim Heat Pump</h2>

        <AnimatePresence mode="wait">
          {activeCard && (
            <motion.div
              key={activeCard}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <motion.div
                className="text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: 0.2,
                    staggerChildren: 0.1,
                  },
                }}
              >
                {cards
                  .find((card) => card.id === activeCard)
                  ?.content.split("\n\n")
                  .map((paragraph, index) => (
                    <motion.p
                      key={index}
                      className="mb-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { delay: index * 0.1 + 0.2 },
                      }}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <h3 className="text-2xl md:text-3xl font-bold text-center mb-6">
          A Reclaim Energy Heat Pump Hot Water System requires much less electricity to heat water when compared to
          conventional hot water systems.
        </h3>

        <p className="text-center text-zinc-700">
          In Australia, our electricity prices continue to increase, and an electric hot water system contributes
          significantly to a household&apos;s energy costs. Comprehensive savings can be made by using a more efficient
          hot water system, up to 80% on conventional electric system.
        </p>
      </div>
      <QuoteRequestForm/>
      <Footer/>
    </main>
  )
}

