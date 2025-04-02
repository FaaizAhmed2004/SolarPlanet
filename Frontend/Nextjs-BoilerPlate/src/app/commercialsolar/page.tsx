"use client"
import Navbar from '@/components/Navbar/navbar';
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { ThumbsUp } from "lucide-react";
import QuoteRequestForm from '@/components/Qoute/Qoute';
import Footer from '@/components/Footer/Footer';

export default function CommercialSolar  () {
  const [content, setContent] = useState("");

  const handleContentChange = (newContent: React.SetStateAction<string>) => {
    setContent(newContent);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* Header */}
      <header className="bg-white py-4 px-6 flex justify-between items-center border-b">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center h-12 w-40">
            <Image
              src="/images/solarplanetlogo.png"
              alt="Commercial Solar Solutions"
              width={160}
              height={10}
              className="object-contain"
            />
          </div>
        </div>
        <Link
          href="#quote"
          className="bg-yellow-500 text-black px-4 py-2 rounded-full flex items-center gap-2 font-medium hover:bg-yellow-400 transition-colors"
        >
          <ThumbsUp className="h-5 w-5" />
          GET A FREE QUOTE
        </Link>
      </header>

      {/* Hero Section */}
      <div className="relative h-[400px] w-full">
        <Image
          src="/images/img_banner_commercial.jpg"
          alt="Commercial Solar Panels"
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">Commercial Solar Solutions</h1>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
        <button
          onClick={() => handleContentChange("Switching to solar can significantly reduce energy costs for businesses and increase sustainability.")}
          className="bg-white text-red-600 py-6 px-4 flex flex-col items-center justify-center text-center border hover:bg-gray-50 transition-colors"
        >
          <div className="font-medium">Benefits of Commercial Solar</div>
        </button>

        <button
          onClick={() => handleContentChange("Commercial-grade inverters ensure optimal performance and energy efficiency for large-scale solar setups.")}
          className="bg-amber-400 text-black py-6 px-4 flex items-center justify-center text-center hover:bg-amber-300 transition-colors"
        >
          <div className="font-medium">Inverter Information</div>
        </button>

        <button
          onClick={() => handleContentChange("Adding battery storage allows businesses to store excess solar energy for use during peak hours.")}
          className="bg-amber-500 text-black py-6 px-4 flex items-center justify-center text-center hover:bg-amber-400 transition-colors"
        >
          <div className="font-medium">Solar & Battery Storage</div>
        </button>

        <button
          onClick={() => handleContentChange("Government incentives and rebates can help offset the cost of installing commercial solar systems.")}
          className="bg-red-600 text-white py-6 px-4 flex items-center justify-center text-center hover:bg-red-500 transition-colors"
        >
          <div className="font-medium">Solar Rebates & Incentives</div>
        </button>
      </div>

      {/* Dynamic Content Display */}
      <div className="p-6">
        {content && (
          <div className="mt-4 p-4 bg-gray-100 rounded-md shadow-md">
            <p className="text-lg">{content}</p>
          </div>
        )}
      </div>
      <QuoteRequestForm/>
      <Footer/>
    </div>
  );
};

