"use client"

import type React from "react"

import { useState } from "react"

export default function QuoteRequestForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    suburb: "",
    interests: [] as string[],
    dailyEnergyConsumption: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ success?: boolean; message?: string }>({})

  // Valid interest options (Must match backend)
  const interestOptions = [
    "Commercial Solar",
    "Residential Solar",
    "Battery Storage",
    "Radiant Heating",
    "Split System",
    "EV Charging",
    "Pool Heat Pump",
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      interests: checked
        ? [...prev.interests, name] // Add selected interest
        : prev.interests.filter((item) => item !== name), // Remove unselected interest
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({})

    try {
      const formattedData = { ...formData } // ✅ Keep interests in original format

      const response = await fetch("http://localhost:3000/v1/Quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedData),
      })

      if (response.ok) {
        setSubmitStatus({ success: true, message: "Thank you! We'll be in touch soon." })
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          address: "",
          suburb: "",
          interests: [],
          dailyEnergyConsumption: "",
        })
      } else {
        const errorData = await response.json().catch(() => null)
        setSubmitStatus({
          success: false,
          message: errorData?.message || "Invalid data. Please check your selections.",
        })
      }
    } catch (error) {
      setSubmitStatus({ success: false, message: "Network error. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-lg border border-gray-100">
      <div className="text-center mb-8">
        <p className="text-red-600 font-medium uppercase text-sm tracking-wider">Get a Free Quote</p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">Request Your Free Quote Today</h2>
      </div>

      {submitStatus.message && (
        <div
          className={`mb-6 p-4 rounded-md text-center ${
            submitStatus.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="space-y-1">
            <label htmlFor="fullName" className="text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
            />
          </div>
        </div>

        {/* Phone & Address */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="space-y-1">
            <label htmlFor="phone" className="text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="address" className="text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Enter your address"
              required
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
            />
          </div>
        </div>

        {/* Suburb */}
        <div className="space-y-1">
          <label htmlFor="suburb" className="text-sm font-medium text-gray-700">
            Suburb
          </label>
          <input
            type="text"
            id="suburb"
            name="suburb"
            placeholder="Enter your suburb"
            required
            value={formData.suburb}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
          />
        </div>

        {/* Interests */}
        <div className="space-y-3">
          <p className="text-sm font-medium text-gray-700">I am interested in:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {interestOptions.map((option) => (
              <label
                key={option}
                className="flex items-center space-x-3 p-3 rounded-md border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <input
                  type="checkbox"
                  name={option}
                  checked={formData.interests.includes(option)}
                  onChange={handleCheckboxChange}
                  className="h-5 w-5 text-red-500 rounded border-gray-300 focus:ring-red-500"
                />
                <span className="text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Energy Consumption */}
        <div className="space-y-1">
          <label htmlFor="dailyEnergyConsumption" className="text-sm font-medium text-gray-700">
            Daily Energy Consumption
          </label>
          <textarea
            id="dailyEnergyConsumption"
            name="dailyEnergyConsumption"
            rows={3}
            placeholder="Example: 15kWh per day or $500 per quarter."
            required
            value={formData.dailyEnergyConsumption}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors resize-none"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-full transition-colors shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Submitting...
              </span>
            ) : (
              "Get Free Quote"
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

