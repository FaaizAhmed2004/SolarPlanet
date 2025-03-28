"use client"

import CaseStudiesGrid from "@/components/Casestudy/Casestudy"
import Footer from "@/components/Footer/Footer"
import Navbar from "@/components/Navbar/navbar"
import QuoteRequestForm from "@/components/Qoute/Qoute"
import Image from "next/image"
import { useState } from "react"

// Define case study type
type CaseStudy = {
  id: string
  title: string
  category: string
  summary: string
  challenge: string
  solution: string
  results: string
  testimonial?: {
    quote: string
    author: string
    position: string
  }
}

export default function CaseStudiesPage() {
  // Sample case studies data
  const caseStudies: CaseStudy[] = [
    {
      id: "family-estate-planning",
      title: "Multi-Generational Estate Planning",
      category: "Estate Planning",
      summary: "Helping the Johnson family secure their financial future across three generations.",
      challenge:
        "The Johnson family needed a comprehensive estate plan that would protect assets for their children and grandchildren while minimizing tax implications. With family members ranging from ages 5 to 75, they needed a solution that addressed immediate needs while planning for the long term.",
      solution:
        "We developed a multi-tiered estate plan that included trusts for the grandchildren's education, strategic gift planning to minimize estate taxes, and a succession plan for the family business. We also implemented healthcare directives and power of attorney documents for the senior family members.",
      results:
        "The Johnson family now has peace of mind knowing their estate will be distributed according to their wishes, with an estimated tax savings of over $1.2 million. The grandchildren's education is secured through dedicated trusts, and the family business has a clear succession plan.",
      testimonial: {
        quote:
          "The comprehensive approach to our family's estate planning has given us tremendous peace of mind. We feel confident that our children and grandchildren will be well taken care of for generations to come.",
        author: "Robert Johnson",
        position: "Family Patriarch",
      },
    },
    {
      id: "retirement-planning",
      title: "Early Retirement Strategy",
      category: "Retirement Planning",
      summary: "Helping the Wilsons achieve their dream of retiring at 55.",
      challenge:
        "Mark and Sarah Wilson came to us at age 45 with the ambitious goal of retiring a decade early. They had some savings but needed a strategic plan to accelerate their retirement timeline while ensuring their funds would last through their extended retirement years.",
      solution:
        "We created an aggressive but balanced investment strategy, optimized their tax situation, and identified areas where they could increase savings without sacrificing quality of life. We also developed a phased retirement plan that allowed them to gradually reduce work hours starting at age 52.",
      results:
        "The Wilsons successfully retired at 55 with a sustainable withdrawal strategy that provides them with their desired lifestyle. Their investment portfolio is structured to provide both growth and income, with projected funds lasting well into their 90s.",
      testimonial: {
        quote:
          "We never thought early retirement was possible for us, but the strategic planning made our dream a reality. We're now enjoying travel and time with our grandchildren while our peers are still working.",
        author: "Sarah Wilson",
        position: "Early Retiree",
      },
    },
    {
      id: "business-succession",
      title: "Family Business Succession",
      category: "Business Planning",
      summary: "Transitioning a third-generation family business to new leadership.",
      challenge:
        "The Martinez Family Bakery, a beloved local institution for over 70 years, faced a critical transition as the current owner approached retirement. With multiple family members involved in the business and differing visions for its future, they needed a plan that would preserve family harmony while ensuring business continuity.",
      solution:
        "We facilitated family business meetings to align expectations, developed a structured leadership transition plan, and created a fair valuation method for ownership transfers. We also implemented tax-efficient strategies for the retiring owner while ensuring the next generation had the capital needed to grow the business.",
      results:
        "The business successfully transitioned to the fourth generation with clearly defined roles and responsibilities. Sales increased by 15% in the first year under new leadership, and family relationships remained strong throughout the process.",
      testimonial: {
        quote:
          "The transition could have torn our family apart, but instead it brought us closer together. Our business is thriving under the next generation, and I can enjoy retirement knowing our legacy is secure.",
        author: "Carlos Martinez",
        position: "Former Owner",
      },
    },
  ]

  // State to track selected case study
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null)

  // Handle card click
  const handleCardClick = (caseStudy: CaseStudy) => {
    setSelectedCaseStudy(caseStudy)

    // Scroll to the detail section
    setTimeout(() => {
      const element = document.getElementById("case-study-detail")
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }, 100)
  }

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="relative h-[400px] md:h-[500px]">
        <Image
          src="/images/img_banner_commercial.jpg"
          alt="Case Studies"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center">Case Studies</h1>
        </div>
      </div>

      {/* Case Study Cards */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Success Stories</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl">
          Explore how we've helped families and individuals achieve their financial goals and secure their futures. Each
          case study represents real challenges and the solutions we implemented.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              onClick={() => handleCardClick(study)}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105 hover:shadow-lg"
            >
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                  {study.category}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{study.title}</h3>
                <p className="text-gray-600">{study.summary}</p>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <p className="text-blue-600 font-medium flex items-center">
                  Read case study
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Section */}
      {selectedCaseStudy && (
        <div id="case-study-detail" className="bg-white py-16 border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              {selectedCaseStudy.category}
            </span>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">{selectedCaseStudy.title}</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">The Challenge</h3>
                <p className="text-gray-600">{selectedCaseStudy.challenge}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Solution</h3>
                <p className="text-gray-600">{selectedCaseStudy.solution}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">The Results</h3>
                <p className="text-gray-600">{selectedCaseStudy.results}</p>
              </div>

              {selectedCaseStudy.testimonial && (
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500 mt-8">
                  <p className="text-gray-600 italic mb-4">"{selectedCaseStudy.testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-gray-800">{selectedCaseStudy.testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{selectedCaseStudy.testimonial.position}</p>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => setSelectedCaseStudy(null)}
              className="mt-12 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Back to all case studies
            </button>
          </div>
  
        </div>
      )}
    </div>
    <CaseStudiesGrid/>
    <QuoteRequestForm/>
    <Footer/>
    </>
  )
}
