'use client'
import Image from "next/image";
import { useState } from "react";
import { ThumbsUp, DollarSign, HelpCircle, RefreshCw, Award, Info } from "lucide-react";
import { Button } from "../ui/button";

export default function MainHero() {
  const [selectedText, setSelectedText] = useState("");

  const cardData = [
    {
      id: "incentives",
      icon: <Award className="h-6 w-6 text-red-600 mb-2" />, 
      title: "Government Incentives",
      text: "Learn about rebates and incentives available for solar energy."
    },
    {
      id: "roi",
      icon: <RefreshCw className="h-6 w-6 text-black bg-yellow-300 mb-2" />, 
      title: "Return on Investment",
      text: "See how quickly you can recover your investment in solar."
    },
    {
      id: "savings",
      icon: <DollarSign className="h-6 w-6 text-black bg-yellow-500 mb-2" />, 
      title: "How much can you save?",
      text: "Discover your potential savings on energy bills."
    },
    {
      id: "worth",
      icon: <Info className="h-6 w-6 text-white bg-red-600 mb-2" />, 
      title: "Is it worth getting?",
      text: "Explore the benefits of solar energy for your home."
    },
    {
      id: "faq",
      icon: <HelpCircle className="h-6 w-6 text-white bg-black mb-2" />, 
      title: "Frequently asked questions",
      text: "Get answers to common solar energy questions."
    }
  ];

  return (
    <div>
      <div className="relative w-full h-[600px] md:h-[700px]">
        {/* Background Image */}
        <Image src="/images/10036.jpg" alt="Solar panels on roof" fill className="object-cover" priority />

        {/* Logo and Badge */}
        <div className="absolute top-6 left-6 md:top-8 md:left-8 flex items-center space-x-4">
          <Image src="/images/solarplanetlogo.png" alt="logo" width={120} height={50} className="object-contain" />
          <Image src="/images/Winiaco.png" alt="WINAICO Approved Retailer" width={120} height={50} className="object-contain" />
        </div>

        {/* Content Box */}
        <div className="absolute top-1/2 left-6 md:left-12 -translate-y-1/2 max-w-md bg-white/90 p-6 md:p-8 rounded-sm shadow-lg">
          <p className="text-red-600 font-medium uppercase tracking-wide text-sm mb-3">The Solar Planet Melbourne</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
            Reduce your energy bills while building a cleaner and more sustainable future
          </h1>
          <Button className="bg-amber-400 hover:bg-amber-500 text-black font-medium px-6 py-6 h-auto rounded-md">
            <ThumbsUp className="mr-2 h-5 w-5" /> GET A FREE QUOTE
          </Button>
        </div>

        {/* Bottom Navigation (Cards) */}
        <div className="absolute bottom-0 left-0 right-0 flex flex-wrap">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="w-full md:w-1/5 p-4 flex flex-col items-center justify-center text-center border-r border-gray-200 hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
              onClick={() => setSelectedText(card.text)}
            >
              {card.icon}
              <h3 className="text-sm font-medium">{card.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic Content Section */}
      {selectedText && (
        <div className="p-6 bg-gray-100 text-center text-gray-800 text-lg font-medium mt-4 rounded-lg shadow-md">
          {selectedText}
        </div>
      )}
    </div>
  );
}
