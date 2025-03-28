/* eslint-disable react/jsx-no-undef */
import Navbar from '@/components/Navbar/navbar'
import React from 'react'
import Image from 'next/image'
import QuoteRequestForm from '@/components/Qoute/Qoute'
import Footer from '@/components/Footer/Footer'

export default function BatteryStorage  () {
  return (
    <div>
        <Navbar/>

        <div className="max-w-6xl mx-auto">
      {/* Hero Image Section */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src="/images/batterypage.jpg"
          alt="Various home battery storage systems mounted on a wall"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Battery Storage</h1>
        </div>
      </div>

      {/* Question Section */}
      <div className="text-center py-8">
        <h2 className="text-red-600 font-medium tracking-wide">ARE YOU THINKING ABOUT INSTALLING A HOME BATTERY?</h2>
      </div>

      {/* Main Heading */}
      <div className="text-center pb-8">
        <h3 className="text-2xl font-bold text-slate-800">
          There are many reasons why our customers decide to install a home battery
        </h3>
      </div>

      {/* Content would continue here with the benefits and information from the previous page */}
    </div>

        <div className="max-w-5xl mx-auto px-4 py-8 text-slate-800">
      <h1 className="text-2xl font-bold text-center mb-8 border-t border-b border-gray-300 py-3">
        There are many reasons why our customers decide to install a home battery
      </h1>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-black font-bold mr-2">•</span>
              <span>
                Protect your <span className="text-blue-800">home from blackouts</span> and secure your{" "}
                <span className="text-blue-800">energy supply</span>
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-black font-bold mr-2">•</span>
              <span>
                Slash your <span className="text-blue-800">electricity bills</span> even further
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-black font-bold mr-2">•</span>
              <span>
                Dramatically reduce your <span className="text-blue-800">carbon footprint</span>
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-black font-bold mr-2">•</span>
              <span>
                Become <span className="text-blue-800">energy independent</span> from the grid
              </span>
            </li>
          </ul>
        </div>
        <div>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-black font-bold mr-2">•</span>
              <span>
                Insulate yourself from <span className="text-blue-800">power price increases</span>
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-black font-bold mr-2">•</span>
              <span>Use your battery to trade energy with the grid on your own terms ('Virtual Power Plant')</span>
            </li>
            <li className="flex items-start">
              <span className="text-black font-bold mr-2">•</span>
              <span>Get off gas and electrify your home with battery support</span>
            </li>
            <li className="flex items-start">
              <span className="text-black font-bold mr-2">•</span>
              <span>Early adopters on the Premium Feed-in Tariff now want to store (not export) their solar</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="space-y-6 mb-8 text-sm">
        <p>
          A <span className="text-blue-800">solar system</span> is a 'use it or lose it' resource. If your{" "}
          <span className="text-blue-800">solar system</span> generates more{" "}
          <span className="text-blue-800">electricity</span> than you need to power your home, the excess is fed into
          the grid. When the sun goes down the panels stop producing energy while you still need to power your home from
          the grid. These days, the minimum feed-in tariff (the amount your{" "}
          <span className="text-blue-800">electricity retailer</span> pays you for your exported solar) is relatively
          low at under 5 c / kWh. That means that you don't profit much from your excess solar unless you can store it
          in a battery to use later.
        </p>

        <p>
          By storing your excess solar power into a home battery, your solar generation becomes an all-day resource,
          decreasing reliance on the grid during the evening hours, or when a blackout even occurs. If the battery is
          full, any excess solar electricity is still fed back to the grid.
        </p>

        <p>
          A good quality battery system that is designed and installed by competent tradespeople will automatically
          detect a blackout and backup your home's selected 'essential loads' such as your fridge,{" "}
          <span className="text-blue-800">lighting</span>, security, internet, power points and other appliances if
          necessary.
        </p>

        <p>
          There are still fantastic rebates and government-funded interest-free loans (
          <span className="text-blue-800">eligibility conditions</span>) available to help make it easier for Victorians
          to secure their <span className="text-blue-800">energy supply</span> with a{" "}
          <span className="text-blue-800">solar battery system</span>.
        </p>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-xl font-bold">
          EXCITING NEWS: <span className="text-red-600">Tesla Powerwall 3 is here!</span>
        </h2>
      </div>

      <div className="text-center mb-8">
        <h3 className="text-lg font-bold text-red-700 tracking-wider">HOW DO I KNOW WHICH BATTERY TO CHOOSE?</h3>
      </div>

      <div className="text-center text-lg font-semibold mb-8">
        <p>
          We are proudly one of Victoria's most experienced and longest-running
          <br />
          battery system installers, having installed hundreds of high-quality battery
          <br />
          systems over the past 15 years.
        </p>
      </div>
    </div>





    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Experience Statement */}
      <div className="text-center mb-12">
        <p className="text-xl font-semibold text-slate-800 max-w-4xl mx-auto leading-relaxed">
          We are proudly one of Victoria's most experienced and longest-running battery system installers, having
          installed hundreds of high-quality battery systems over the past 15 years.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left Column - Text Content */}
        <div className="space-y-6 text-sm">
          <p>
            At <span className="text-blue-800">Total Solar</span> we know that every home is different which is why we
            offer great battery options to suit your particular needs including Tesla Powerwall, BYD and Enphase.
          </p>

          <p>
            Have a chat with one of our expert consultants or electricians about which option will suit your home best.
          </p>

          <p>
            <span className="text-blue-800">Read on for more information</span> about our recommended battery
            technology.
          </p>
        </div>

        {/* Right Column - Tesla Powerwall Images */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Tesla Powerwall Image */}
            <div className="">
              <Image
                src="/images/tesla.jpg"
                alt="Tesla Powerwall"
                width={200}
                height={300}
                className="mx-auto"
              />
            </div>

            {/* Tesla Certified Installer Logo */}
            <div className="absolute -right-10 top-1/4 bg-white p-3 rounded-lg shadow-md">
              <div className="text-center">
                <p className="text-gray-500 text-xs">TESLA</p>
                <p className="font-semibold text-sm">POWERWALL</p>
                <p className="text-xs text-gray-500 mt-1">CERTIFIED INSTALLER</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Main Heading */}
      <h2 className="text-2xl font-bold text-center text-slate-800 mb-4">BYD Battery Box</h2>

      {/* Introduction */}
      <p className="text-center mb-6">
        <span className="text-blue-800">BYD</span> is one of the world's largest{" "}
        <span className="text-blue-800">lithium-ion battery</span> manufacturers.{" "}
        <span className="text-blue-800">B-Box</span> is modular system allowing you to scale your energy storage to suit
        your needs
      </p>

      {/* Product Line Heading */}
      <h3 className="text-center text-red-600 font-medium tracking-wide mb-6">BATTERY-BOX PREMIUM HVS/HVM</h3>

      {/* Product Description */}
      <div className="space-y-4 mb-8 text-sm">
        <p className="text-center">
          The <span className="text-blue-800">B-Box Premium HVS/HVM Series</span> are scalable modules capable of{" "}
          <span className="text-blue-800">high-powered emergency backup</span>. They provide off-grid functionality, and
          are compatible with both single and 3-phase battery inverters including the ground-breaking{" "}
          <span className="text-blue-800">Fronius Gen24 Hybrid Plus</span>
        </p>

        <p className="text-center">
          Compatible with both single-phase and 3-phase inverters, B-Box Premium modules are suited to larger
          residential and commercial off-grid applications.
        </p>

        <p className="text-center">
          The BYD battery box is floor mounted and indoor rated (IP55). It is compatible with{" "}
          <span className="text-blue-800">Fronius Gen24 hybrid inverter</span> and has a 10 year warranty.
        </p>
      </div>

      {/* Specifications Comparison */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* HVS Specifications */}
        <div>
          <h4 className="font-bold mb-4">Battery-Box Premium HVS Specifications</h4>

          <p className="mb-3">
            Each Battery-Box Premium HVS is composed of <span className="text-blue-800">2 - 5 x 2.6 kWh</span>{" "}
            <span className="text-blue-800">Lithium Iron Phosphate</span> battery modules connected in series.
          </p>

          <div className="mb-3">
            <h5 className="font-semibold">Power</h5>
            <p>
              5.1 - 12.8 kWh <span className="text-blue-800">Useable</span>
            </p>
          </div>

          <div className="mb-3">
            <h5 className="font-semibold">Scalability</h5>
            <p>
              Up to 3 x identical Battery-Boxes can be paralleled to allow a maximum capacity of up to{" "}
              <span className="font-semibold">38.4 kWh</span> useable storage.
            </p>
          </div>

          <div>
            <h5 className="font-semibold">Dimensions (Full Stack)</h5>
            <p>1411mm × 585mm× 298mm (h x w x d)</p>
          </div>
        </div>

        {/* HVM Specifications */}
        <div>
          <h4 className="font-bold mb-4">Battery-Box Premium HVM Specifications</h4>

          <p className="mb-3">
            Each Battery-Box Premium HVS is composed of <span className="text-blue-800">3 - 8 x 2.8 kWh</span>{" "}
            <span className="text-blue-800">Lithium Iron Phosphate</span> battery modules connected in series.
          </p>

          <div className="mb-3">
            <h5 className="font-semibold">Power</h5>
            <p>
              8.3 - 22.1 kWh <span className="text-blue-800">Useable</span>
            </p>
          </div>

          <div className="mb-3">
            <h5 className="font-semibold">Scalability</h5>
            <p>
              Up to 3 x identical Battery-Boxes can be paralleled to allow a maximum capacity of up to{" "}
              <span className="font-semibold">66.2 kWh</span> useable storage.
            </p>
          </div>

          <div>
            <h5 className="font-semibold">Dimensions (Full Stack)</h5>
            <p>2110mm × 585mm× 298mm (h x w x d)</p>
          </div>
        </div>
      </div>
    </div>
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Left image - Inverter and Battery System */}
        <div className="bg-gray-100 rounded-lg overflow-hidden">
          <Image
            src="/images/fan.jpg"
            alt="Fronius inverter and BYD Battery Box storage system"
            width={600}
            height={400}
            className="object-contain w-full h-auto"
          />
          <div className="p-3 text-sm text-center text-gray-600">
            Fronius inverter (left) with BYD Battery Box storage system (right)
          </div>
        </div>

        {/* Right image - Battery System */}
        <div className="bg-gray-100 rounded-lg overflow-hidden">
          <div className="flex justify-center">
            <Image
              src="/images/wall.jpg"
              alt="Battery storage system"
              width={600}
              height={400}
              className="object-contain w-full h-auto"
            />
          </div>
          <div className="p-3 text-sm text-center text-gray-600">BYD Battery Box Premium storage system</div>
        </div>
      </div>

      <div className="mt-6 text-sm text-center text-gray-700">
        <p>Our battery storage solutions are designed for seamless integration with your home's power system</p>
      </div>
    </div>
<QuoteRequestForm/>
<Footer/>

        </div>
  )
}