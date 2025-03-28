"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Navbar from "@/components/Navbar/navbar"
import QuoteRequestForm from "@/components/Qoute/Qoute"
import Footer from "@/components/Footer/Footer"

export default function WINAICOsolar() {
  const [activeCard, setActiveCard] = useState<number | null>(1) // Default to first card

  const cards = [
    {
      id: 1,
      title: "A guide to\nWINAICO Solar Panels",
      bgColor: "bg-white",
      textColor: "text-red-600",
      content:
        "WINAICO solar panels are high-efficiency modules designed for residential and commercial installations. They feature advanced cell technology and robust construction for durability in various weather conditions. Our panels undergo rigorous testing to ensure they can withstand extreme weather conditions including hail, wind, and snow loads.\n\nWINAICO panels are manufactured using premium materials and strict quality control processes. Each panel is individually tested and certified to meet international standards. The monocrystalline silicon cells used in our panels deliver superior efficiency and performance even in low-light conditions.",
    },
    {
      id: 2,
      title: "WINAICO\nsolar panels",
      bgColor: "bg-amber-400",
      textColor: "text-white",
      content:
        "WINAICO offers a range of solar panel models including the WST series and WSP series. These panels deliver excellent performance even in low-light conditions and have one of the industry's lowest degradation rates. The WST series features half-cut cell technology that reduces internal resistance and increases power output.\n\nOur panels are designed with a robust frame and high-quality materials to withstand harsh environmental conditions. The anti-reflective glass coating maximizes light absorption while the advanced cell technology ensures optimal energy conversion efficiency. WINAICO panels are ideal for both residential and commercial installations.",
    },
    {
      id: 3,
      title: "Are WINAICO solar\npanels worth it?",
      bgColor: "bg-orange-500",
      textColor: "text-white",
      content:
        "WINAICO panels offer excellent value with their 25-year product warranty, high efficiency ratings (up to 21.4%), and superior performance in hot climates. Their quality construction results in fewer failures and longer lifespan compared to budget alternatives.\n\nWhile WINAICO panels may have a higher upfront cost than some competitors, their superior durability and performance lead to better long-term returns on investment. The panels' low degradation rate means they maintain higher output over their lifetime, generating more electricity and greater savings. Additionally, their excellent performance in high temperatures makes them ideal for hot climates where other panels might suffer significant efficiency losses.",
    },
    {
      id: 4,
      title: "Warranty\n& Certificates",
      bgColor: "bg-zinc-800",
      textColor: "text-white",
      content:
        "WINAICO provides industry-leading warranties including a 25-year product warranty and 25-year linear performance guarantee. Their panels are certified to international standards including IEC 61215, IEC 61730, and UL 1703.\n\nThe 25-year product warranty covers manufacturing defects and materials, while the performance warranty guarantees that the panels will produce at least 85% of their rated power after 25 years. WINAICO panels are also covered by a comprehensive insurance policy that provides additional protection against damage from extreme weather events, fire, and other potential hazards. This insurance coverage is transferable to new property owners if you sell your home or business.",
    },
  ]

  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar/>
      {/* Hero Section */}
      <div className="relative h-[600px] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/banner_winaico.jpg"
            alt="Solar panels background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
          <div className="mb-8 flex flex-col items-center">
            <div className="bg-transparent p-2 rounded-md mb-2">
              <Image src="/images/10029.png" alt="WINAICO Logo" width={120} height={40} className="object-contain" />
              <p className="text-black text-xs text-center mt-1">Approved Retailer</p>
            </div>
          </div>

          <h2 className="text-xl text-white md:text-2xl font-medium tracking-wider mb-6 text-center">
            QUALITY, PERFORMANCE, SUPPORT
          </h2>

          <h1 className="text-4xl  text-white md:text-6xl font-bold text-center mb-12">WINAICO Solar Panels</h1>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full max-w-6xl px-4">
            {cards.map((card) => (
              <motion.div
                key={card.id}
                className={`${card.bgColor} p-6 h-32 flex flex-col items-center justify-center cursor-pointer relative overflow-hidden`}
                onClick={() => setActiveCard(card.id)}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
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
        <h2 className="text-center text-red-600 uppercase tracking-wider font-medium mb-8">
          A Guide to WINAICO Solar Panels
        </h2>

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
              <motion.p
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
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        <p className="text-xl md:text-2xl text-center">
          Purchasing a solar system for your home or business is a big investment, so you need to make sure that you
          make the right decision when it comes to choosing your solar system.
        </p>
       
      </div>
      <QuoteRequestForm/>
      <Footer/>
    </main>
  )
}

