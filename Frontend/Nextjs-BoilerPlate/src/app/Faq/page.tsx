"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Navbar from "@/components/Navbar/navbar"
import QuoteRequestForm from "@/components/Qoute/Qoute"
import Footer from "@/components/Footer/Footer"
import TestimonialCarousel from "@/components/Testmonials/testimonials"

export default function FAQSectionCumulative() {
  // Define the categories and their respective FAQ items
  const faqCategories = [
    {
      id: "panels",
      title: "Solar Panels & Systems",
      color: "text-red-600",
      bgColor: "bg-white",
      borderColor: "border-red-600",
      activeBgColor: "bg-white",
      questions: [
        {
          question: "What types of solar panels do you offer?",
          answer:
            "We offer a range of high-quality solar panels including monocrystalline, polycrystalline, and thin-film options. Our experts can help you choose the best type for your specific needs based on efficiency, space availability, and budget.",
        },
        {
          question: "How many solar panels will I need for my home?",
          answer:
            "The number of panels you need depends on your energy consumption, available roof space, panel efficiency, and your energy goals. During our free consultation, we'll analyze your energy bills and recommend a system size that meets your needs.",
        },
        {
          question: "What is the difference between on-grid and off-grid systems?",
          answer:
            "On-grid systems are connected to the utility grid, allowing you to draw power when needed and feed excess power back to the grid. Off-grid systems operate independently with battery storage. Most residential installations are on-grid, while off-grid systems are typically used in remote locations.",
        },
      ],
    },
    {
      id: "installations",
      title: "Solar Installations",
      color: "text-white",
      bgColor: "bg-amber-400",
      borderColor: "border-amber-400",
      activeBgColor: "bg-amber-500",
      questions: [
        {
          question: "How long does a solar installation take?",
          answer:
            "Most residential solar installations can be completed in 1-3 days, depending on the system size and complexity. Commercial installations may take longer. After installation, there's typically a waiting period for inspection and utility approval before your system can be activated.",
        },
        {
          question: "Do I need to be home during the installation?",
          answer:
            "While it's not absolutely necessary for you to be present during the entire installation, we recommend being available at the beginning to review the installation plan and at the end for a final walkthrough and system overview.",
        },
        {
          question: "Will installing solar panels damage my roof?",
          answer:
            "When properly installed by our experienced team, solar panels will not damage your roof. In fact, they can protect the portion of roof they cover from weather and UV exposure. We use industry-leading mounting systems and follow best practices to ensure the integrity of your roof.",
        },
      ],
    },
    {
      id: "about",
      title: "About Solar Power",
      color: "text-white",
      bgColor: "bg-black",
      borderColor: "border-black",
      activeBgColor: "bg-gray-800",
      questions: [
        {
          question: "How does solar power work?",
          answer:
            "Solar panels convert sunlight into electricity through the photovoltaic effect. When sunlight hits the silicon cells in the panels, it knocks electrons loose, creating an electric current. This DC electricity is converted to AC electricity by an inverter, making it usable in your home or business.",
        },
        {
          question: "Does solar power work during cloudy days or winter?",
          answer:
            "Yes, solar panels still generate electricity on cloudy days and during winter, though at reduced efficiency. Modern panels can capture different parts of the light spectrum, allowing them to produce power even in indirect sunlight. Your system is designed to account for seasonal variations.",
        },
        {
          question: "What happens to excess solar power my system generates?",
          answer:
            "With a grid-connected system, excess power is fed back into the grid, often earning you credits through a process called net metering (depending on your utility company's policies). These credits can offset the cost of power drawn from the grid when your system isn't producing enough.",
        },
      ],
    },
  ]

  // State to track the active categories and displayed content
  const [activeCategories, setActiveCategories] = useState<string[]>([])
  const [displayedContent, setDisplayedContent] = useState<Array<{ categoryId: string; questions: any[] }>>([])

  // Function to handle category selection
  const handleCategoryClick = (categoryId: string) => {
    // If category is already active, do nothing
    if (activeCategories.includes(categoryId)) {
      return
    }

    // Add the category to active categories
    const newActiveCategories = [...activeCategories, categoryId]
    setActiveCategories(newActiveCategories)

    // Find the category data
    const categoryData = faqCategories.find((cat) => cat.id === categoryId)

    if (categoryData) {
      // Add the category's questions to displayed content
      setDisplayedContent((prev) => [
        ...prev,
        {
          categoryId: categoryId,
          questions: categoryData.questions,
        },
      ])
    }
  }

  // Initialize with the first category selected
  useEffect(() => {
    if (activeCategories.length === 0 && faqCategories.length > 0) {
      handleCategoryClick(faqCategories[0].id)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
    <div className="relative">
      <Navbar/>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/residential_solar_bg.jpg" alt="Background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 md:py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">Frequently Asked Questions</h2>

        {/* Category Tabs */}
        <div className="flex flex-col md:flex-row justify-center mb-8 gap-2 md:gap-0">
          {faqCategories.map((category) => (
            <div
              key={category.id}
              className={`
                cursor-pointer px-6 py-8 text-center transition-all duration-300 
                ${category.bgColor} ${category.color} 
                ${activeCategories.includes(category.id) ? "border-b-4 " + category.borderColor : "border-b-4 border-transparent"}
                ${activeCategories.includes(category.id) ? category.activeBgColor : ""}
                flex flex-col items-center
              `}
              onClick={() => handleCategoryClick(category.id)}
            >
              <span className="text-xl font-semibold">{category.title}</span>
              {activeCategories.includes(category.id) && (
                <svg
                  className="w-6 h-6 mt-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </div>
          ))}
        </div>

        {/* Cumulative FAQ Content */}
        <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 transition-all duration-500">
          {displayedContent.length === 0 ? (
            <p className="text-center text-gray-500">Select a category to view FAQs</p>
          ) : (
            <div className="space-y-12">
              {displayedContent.map((content, contentIndex) => {
                const categoryData = faqCategories.find((cat) => cat.id === content.categoryId)
                return (
                  <div key={contentIndex} className="space-y-6">
                    <h3
                      className={`text-2xl font-bold ${
                        categoryData?.id === "panels"
                          ? "text-red-600"
                          : categoryData?.id === "installations"
                            ? "text-amber-500"
                            : "text-gray-800"
                      }`}
                    >
                      {categoryData?.title}
                    </h3>
                    <div className="space-y-6">
                      {content.questions.map((faq, faqIndex) => (
                        <div key={faqIndex} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                          <h4 className="text-lg font-semibold text-gray-800 mb-3">{faq.question}</h4>
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
    <QuoteRequestForm/>
    <TestimonialCarousel/>
    <Footer/>
    </>
  )
}

