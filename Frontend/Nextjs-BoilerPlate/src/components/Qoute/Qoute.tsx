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
      // Client-side validation
      if (!formData.fullName.trim()) {
        setSubmitStatus({ success: false, message: "Please enter your full name." })
        setIsSubmitting(false)
        return
      }

      if (!formData.email.trim() || !formData.email.includes('@')) {
        setSubmitStatus({ success: false, message: "Please enter a valid email address." })
        setIsSubmitting(false)
        return
      }

      if (!formData.phone.trim()) {
        setSubmitStatus({ success: false, message: "Please enter your phone number." })
        setIsSubmitting(false)
        return
      }

      if (!formData.address.trim()) {
        setSubmitStatus({ success: false, message: "Please enter your address." })
        setIsSubmitting(false)
        return
      }

      if (!formData.suburb.trim()) {
        setSubmitStatus({ success: false, message: "Please enter your suburb." })
        setIsSubmitting(false)
        return
      }

      if (formData.interests.length === 0) {
        setSubmitStatus({ success: false, message: "Please select at least one area of interest." })
        setIsSubmitting(false)
        return
      }

      if (!formData.dailyEnergyConsumption.trim()) {
        setSubmitStatus({ success: false, message: "Please provide your daily energy consumption information." })
        setIsSubmitting(false)
        return
      }

      const formattedData = { ...formData }

      // Create an AbortController for timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedData),
        signal: controller.signal,
      })

      clearTimeout(timeoutId);

      const responseData = await response.json()

      if (response.ok && responseData.success) {
        setSubmitStatus({ 
          success: true, 
          message: responseData.message || "Thank you! Your quote request has been submitted successfully. We'll be in touch soon." 
        })
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
        // Handle different types of errors
        if (response.status === 400 && responseData.errors) {
          // Validation errors from backend
          setSubmitStatus({
            success: false,
            message: `Please check the following: ${responseData.errors.join(', ')}`,
          })
        } else if (responseData.retryable) {
          // Temporary errors that can be retried
          setSubmitStatus({
            success: false,
            message: responseData.message || "There was a temporary issue submitting your request. Please try again.",
          })
        } else {
          // General errors
          setSubmitStatus({
            success: false,
            message: responseData.message || "There was an issue submitting your request. Please check your information and try again.",
          })
        }
      }
    } catch (error) {
      console.error('Quote submission error:', error)
      
      // Provide more specific error messages based on error type
      let errorMessage = "An unexpected error occurred. Please try again.";
      
      if (error instanceof DOMException && error.name === 'AbortError') {
        errorMessage = "Request timed out. Please check your connection and try again.";
      } else if (error instanceof TypeError && error.message.includes('fetch')) {
        errorMessage = "Network error. Please check your internet connection and try again.";
      } else if (error instanceof Error) {
        // Check if it's a timeout or server error
        if (error.message.includes('timeout')) {
          errorMessage = "Request timed out. Please try again.";
        } else if (error.message.includes('server')) {
          errorMessage = "Server error. Please try again in a few minutes.";
        } else if (error.message.includes('Failed to fetch')) {
          errorMessage = "Unable to connect to server. Please check your internet connection.";
        }
      }
      
      setSubmitStatus({ 
        success: false, 
        message: errorMessage
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:section-padding">
      <div className="max-w-4xl mx-auto bg-card p-6 sm:p-8 lg:p-10 rounded-xl shadow-2xl border border-border">
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-solar-orange font-semibold uppercase text-sm sm:text-base tracking-wider">Get a Free Quote</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-card-foreground mt-3 sm:mt-4 leading-tight text-balance">
            Harness <span className="text-accent">Solar Power</span> for Your 
            <span className="text-secondary"> Australian Home</span>
          </h2>
          <p className="text-readable mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Join thousands of Australians saving on energy bills with premium solar solutions
          </p>
        </div>

      {submitStatus.message && (
        <div
          className={`mb-6 p-4 rounded-md text-center border ${
            submitStatus.success 
              ? "bg-green-50 text-green-800 border-green-200" 
              : "bg-red-50 text-red-800 border-red-200"
          }`}
        >
          <div className="flex items-center justify-center">
            {submitStatus.success ? (
              <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5 mr-2 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            )}
            {submitStatus.message}
          </div>
        </div>
      )}

        <form onSubmit={handleSubmit} className="space-content sm:space-section">
          {/* Name & Email */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <div className="space-y-1">
            <label htmlFor="fullName" className="text-sm font-medium text-readable">
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
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 hover:border-primary/50"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="email" className="text-sm font-medium text-readable">
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
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 hover:border-primary/50"
            />
          </div>
        </div>

          {/* Phone & Address */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <div className="space-y-1">
            <label htmlFor="phone" className="text-sm font-medium text-readable">
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
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 hover:border-primary/50"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="address" className="text-sm font-medium text-readable">
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
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 hover:border-primary/50"
            />
          </div>
        </div>

        {/* Suburb */}
        <div className="space-y-1">
          <label htmlFor="suburb" className="text-sm font-medium text-readable">
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
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 hover:border-primary/50"
          />
        </div>

          {/* Interests */}
          <div className="space-content">
            <p className="text-sm sm:text-base font-medium text-readable">I am interested in:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {interestOptions.map((option) => (
              <label
                key={option}
                className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-accent hover:border-primary transition-all duration-200 cursor-pointer"
              >
                <input
                  type="checkbox"
                  name={option}
                  checked={formData.interests.includes(option)}
                  onChange={handleCheckboxChange}
                  className="h-5 w-5 text-primary rounded border-border bg-background focus:ring-primary focus:ring-2"
                />
                <span className="text-readable">{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Energy Consumption */}
        <div className="space-y-1">
          <label htmlFor="dailyEnergyConsumption" className="text-sm font-medium text-readable">
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
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 resize-none hover:border-primary/50"
          />
        </div>

          {/* Submit Button */}
          <div className="pt-4 sm:pt-6 text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto min-w-[200px] px-8 sm:px-12 py-4 sm:py-5 bg-solar-gradient hover:opacity-90 text-white font-semibold rounded-full transition-all duration-200 shadow-lg transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none text-base sm:text-lg"
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
    </div>
  )
}

